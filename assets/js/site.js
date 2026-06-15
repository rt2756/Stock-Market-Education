/* Stock Market Notes — renders one Markdown file per page into the site's
   calm multi-page layout. Each page is a thin shell:

     <div id="app" data-md="../content/modules/06-…md" data-root="../"
          data-page="modules/06-…html">Loading…</div>
     <script src="../assets/js/marked.min.js"></script>
     <script src="../assets/js/site.js"></script>

   Site structure + per-page metadata live in content/manifest.json.
   No build step: the browser fetches the files and renders them with marked.
   (Engine adapted from the shambhvi project's assets/js/app.js.) */
(function () {
  "use strict";

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function link(href, text, cls) {
    var a = el("a", cls);
    a.href = href;
    a.textContent = text;
    return a;
  }
  // "1. Why this matters" -> "why-this-matters"
  function slugify(text) {
    return String(text).toLowerCase()
      .replace(/^\s*\d+[.)]\s*/, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  function stripNum(text) {
    return String(text).replace(/^\s*\d+[.)]\s*/, "").trim();
  }
  // Honour an explicit "{#id}" at the end of a heading (preserves the original
  // anchors); otherwise derive a slug from the heading text.
  function resolveId(h) {
    var m = (h.textContent || "").match(/\{#([\w-]+)\}\s*$/);
    if (m) {
      if (h.lastChild && h.lastChild.nodeType === 3)
        h.lastChild.nodeValue = h.lastChild.nodeValue.replace(/\s*\{#[\w-]+\}\s*$/, "");
      return m[1];
    }
    return slugify(h.textContent);
  }

  // GitHub-style alerts -> the site's .box callouts. An optional custom label
  // may follow the marker, e.g.  > [!NOTE] Why investing is taxed so gently
  var ALERTS = {
    NOTE:    { cls: "note", label: "Note" },
    TIP:     { cls: "tip",  label: "Tip" },
    WARNING: { cls: "warn", label: "Remember" },
    CAUTION: { cls: "warn", label: "Remember" }
  };
  // After the marker use [ \t]* (not \s*) so a missing label doesn't swallow the
  // newline and capture the body text as the label. Leading \s* still absorbs any
  // newline the blockquote may start with.
  var ALERT_RE = /^\s*\[!(NOTE|TIP|WARNING|CAUTION)\][ \t]*([^\n]*)/;

  function upgradeCallouts(root) {
    var quotes = root.querySelectorAll("blockquote");
    for (var i = 0; i < quotes.length; i++) {
      var bq = quotes[i];
      var m = (bq.textContent || "").match(ALERT_RE);
      if (!m) continue;
      var spec = ALERTS[m[1]];
      var custom = (m[2] || "").trim();

      var box = el("div", "box " + spec.cls);
      while (bq.firstChild) box.appendChild(bq.firstChild);

      // Remove the "[!TYPE] label" text from the first non-empty text node,
      // then drop that first paragraph if it has become empty.
      var walker = document.createTreeWalker(box, NodeFilter.SHOW_TEXT, null);
      var node = walker.nextNode();
      while (node && node.nodeValue.trim() === "") node = walker.nextNode();
      if (node) node.nodeValue = node.nodeValue.replace(ALERT_RE, "");
      var first = box.firstElementChild;
      if (first && first.tagName === "P" && first.textContent.trim() === "") {
        box.removeChild(first);
      }

      var label = el("span", "label");
      label.textContent = custom || spec.label;
      box.insertBefore(label, box.firstChild);

      bq.parentNode.replaceChild(box, bq);
    }
  }

  // A paragraph that is just an image (![caption](diagram.svg)) becomes a
  // <figure class="diagram"> card, with the alt text as the <figcaption>.
  function upgradeFigures(root) {
    var imgs = root.querySelectorAll("img");
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      var p = img.parentNode;
      if (!p || p.tagName !== "P") continue;
      var lone = true;
      for (var c = 0; c < p.childNodes.length; c++) {
        var n = p.childNodes[c];
        if (n === img) continue;
        if (n.nodeType === 3 && n.nodeValue.trim() === "") continue;
        lone = false; break;
      }
      if (!lone) continue;

      var fig = el("figure", "diagram");
      var caption = (img.getAttribute("alt") || "").trim();
      fig.appendChild(img);
      if (caption) {
        var fc = document.createElement("figcaption");
        fc.textContent = caption;
        fig.appendChild(fc);
      }
      p.parentNode.replaceChild(fig, p);
    }
  }

  // A paragraph that opens with "Eg:" gets that lead-in wrapped in the teal
  // <span class="eg"> example marker — so the Markdown can stay plain text.
  function upgradeExamples(root) {
    var ps = root.querySelectorAll("p");
    for (var i = 0; i < ps.length; i++) {
      var first = ps[i].firstChild;
      if (!first || first.nodeType !== 3 || !/^Eg:(\s|$)/.test(first.nodeValue)) continue;
      var span = el("span", "eg");
      span.textContent = "Eg:";
      first.nodeValue = first.nodeValue.slice(3);
      ps[i].insertBefore(span, first);
    }
  }

  function findEntry(manifest, pageKey) {
    var found = null;
    (manifest.pages || []).forEach(function (p) {
      if (p.key === pageKey || p.key + ".html" === pageKey) found = p;
    });
    return found;
  }

  function buildNav(root, isHome) {
    var wrap = el("div", "wrap");
    wrap.appendChild(link(root + "index.html", "📘 Stock Market Notes", "brand"));
    if (!isHome) wrap.appendChild(link(root + "index.html", "Home"));
    wrap.appendChild(link(root + "how-to/glossary.html", "Glossary"));
    var nav = el("nav", "top");
    nav.appendChild(wrap);
    return nav;
  }

  function buildMiniToc(heads, label) {
    var box = el("div", "mini-toc");
    box.appendChild(el("strong", null, label));
    var ol = document.createElement("ol");
    heads.forEach(function (h) {
      var li = document.createElement("li");
      li.appendChild(link("#" + h.id, h.label));
      ol.appendChild(li);
    });
    box.appendChild(ol);
    return box;
  }

  function buildPager(manifest, pageKey, root) {
    var pages = manifest.pages || [];
    var idx = -1, cur = null;
    for (var i = 0; i < pages.length; i++) {
      if (pages[i].key === pageKey || pages[i].key + ".html" === pageKey) { idx = i; cur = pages[i]; break; }
    }
    if (!cur || !cur.chain) return null;
    function neighbour(step) {
      var j = idx + step;
      return (j >= 0 && j < pages.length && pages[j].chain === cur.chain) ? pages[j] : null;
    }
    var prev = neighbour(-1), next = neighbour(1);
    var pager = el("div", "pager");
    pager.appendChild(prev
      ? link(root + prev.key + ".html", "← " + (prev.short || prev.title))
      : link(root + "index.html", "← Home"));
    pager.appendChild(el("span", "spacer"));
    pager.appendChild(next
      ? link(root + next.key + ".html", "Next: " + (next.short || next.title) + " →")
      : link(root + "index.html", "Back to Home →"));
    return pager;
  }

  var DEFAULT_FOOTER =
    "These notes are for learning only and are <strong>not financial advice</strong>. Markets carry real risk.";

  function buildFooter(entry, isHome, manifest) {
    var f = el("footer");
    var home = isHome && manifest && manifest.home;
    if (entry && entry.footer) f.appendChild(el("p", null, entry.footer));
    else if (home && home.footer) f.innerHTML = home.footer;
    else f.appendChild(el("p", null, DEFAULT_FOOTER));
    var reviewed = (entry && entry.reviewed) || (home && home.reviewed);
    if (reviewed) f.appendChild(el("p", "reviewed", "Last reviewed: " + reviewed));
    return f;
  }

  // The home page's grouped module cards, built from the manifest.
  function buildHomeCards(manifest, root) {
    var frag = document.createDocumentFragment();
    (manifest.groups || []).forEach(function (g) {
      var h = document.createElement("h2");
      h.textContent = g.label;
      frag.appendChild(h);
      (manifest.pages || []).forEach(function (p) {
        if (p.group !== g.id) return;
        var sec = el("section", "module");
        var h2 = document.createElement("h2");
        h2.appendChild(link(root + p.key + ".html", p.title));
        sec.appendChild(h2);
        if (p.blurb) { var b = document.createElement("p"); b.textContent = p.blurb; sec.appendChild(b); }
        if (p.covers) {
          var cv = document.createElement("p");
          var s = document.createElement("strong"); s.textContent = "Covers:";
          cv.appendChild(s); cv.appendChild(document.createTextNode(" " + p.covers));
          sec.appendChild(cv);
        }
        frag.appendChild(sec);
      });
    });
    return frag;
  }

  function openFromHash() {
    var id = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    if (!id) return;
    var target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function showError(mount, err) {
    mount.innerHTML =
      '<main class="wrap"><div class="box warn" style="margin-top:3em">' +
      '<span class="label">Couldn’t load this page</span>' +
      '<p>The content loads from separate Markdown files, so the site needs a local ' +
      'server — opening the file directly (file://) won’t work.</p>' +
      '<p>From the project folder run <code>python3 -m http.server 8753</code>, ' +
      'then visit <code>http://localhost:8753</code>.</p></div></main>';
    if (window.console) console.error("[notes]", err);
  }

  function build(mount, manifest, mdText) {
    var root = mount.dataset.root || "./";
    var pageKey = mount.dataset.page || "";
    var isHome = pageKey === "" || pageKey === "index.html";
    var entry = findEntry(manifest, pageKey);

    var tmp = el("div");
    // ==text== -> teal example/highlight span (the rare non-"Eg:" .eg usages).
    mdText = mdText.replace(/==([^=\n]+)==/g, '<span class="eg">$1</span>');
    tmp.innerHTML = window.marked.parse(mdText);
    upgradeCallouts(tmp);
    upgradeFigures(tmp);
    upgradeExamples(tmp);

    // Title + lead paragraph (the first <p> after the <h1>).
    var h1 = tmp.querySelector("h1");
    if (h1) h1.id = resolveId(h1);
    document.title = (entry && entry.title) || (isHome && manifest.home && manifest.home.title) ||
      (h1 ? h1.textContent.trim() : document.title);
    var leadAnchor = h1;
    if (h1 && h1.nextElementSibling && h1.nextElementSibling.tagName === "P") {
      h1.nextElementSibling.className = "lead";
      leadAnchor = h1.nextElementSibling;
    }

    // Section ids + auto mini-toc from h2s; ids on h3s too (for deep links).
    var heads = [];
    Array.prototype.forEach.call(tmp.querySelectorAll("h2"), function (h) {
      h.id = resolveId(h);
      heads.push({ id: h.id, label: stripNum(h.textContent) });
    });
    Array.prototype.forEach.call(tmp.querySelectorAll("h3"), function (h) {
      h.id = resolveId(h);
    });
    if (heads.length && leadAnchor && !isHome) {
      var toc = buildMiniToc(heads, pageKey.indexOf("modules/") === 0 ? "In this module" : "In this guide");
      if (leadAnchor.nextSibling) tmp.insertBefore(toc, leadAnchor.nextSibling);
      else tmp.appendChild(toc);
    }

    var main = el("main", "wrap");
    while (tmp.firstChild) main.appendChild(tmp.firstChild);
    if (isHome) main.appendChild(buildHomeCards(manifest, root));
    var pager = buildPager(manifest, pageKey, root);
    if (pager) main.appendChild(pager);
    main.appendChild(buildFooter(entry, isHome, manifest));

    var frag = document.createDocumentFragment();
    frag.appendChild(buildNav(root, isHome));
    frag.appendChild(main);
    mount.parentNode.replaceChild(frag, mount);

    window.addEventListener("hashchange", openFromHash);
    openFromHash();
  }

  function init() {
    var mount = document.getElementById("app");
    if (!mount) return;
    if (!window.marked) { showError(mount, new Error("marked failed to load")); return; }
    var root = mount.dataset.root || "./";
    var mdPath = mount.dataset.md;
    Promise.all([
      fetch(root + "content/manifest.json", { cache: "no-cache" }).then(function (r) {
        if (!r.ok) throw new Error("manifest.json " + r.status); return r.json();
      }),
      fetch(mdPath, { cache: "no-cache" }).then(function (r) {
        if (!r.ok) throw new Error(mdPath + " " + r.status); return r.text();
      })
    ]).then(function (res) {
      build(mount, res[0], res[1]);
    }).catch(function (err) { showError(mount, err); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
