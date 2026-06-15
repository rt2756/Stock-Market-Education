# Module 8 · Technical Analysis

Technical analysis is the art of reading price charts to guess where a stock might go next — a tool for traders, and an optional topic you can happily skip as a beginner.

## 1. What technical analysis is {#what}

**Technical analysis** (often shortened to **TA**) means studying a stock's **price chart** — its past prices and the patterns they form — instead of studying the underlying business. A technical analyst doesn't ask "Is this a good company?" They ask "What is the price doing, and what might it do next?"

The idea rests on two beliefs:

- **Price already reflects everything known.** Every piece of news, every opinion, every hope and fear is supposedly baked into the current price.
- **Patterns tend to repeat.** Because human emotions (greed and fear) repeat, the shapes they leave on charts are thought to repeat too.

This is the opposite approach to **fundamental analysis**, which digs into a company's earnings and health (we covered that earlier in the course). TA is used mostly by **short-term traders** — people buying and selling over days, hours or minutes — rather than by long-term investors.

> [!NOTE] IN PLAIN WORDS
>
> Fundamental analysis asks *"what is this business worth?"* Technical analysis asks *"what is the crowd doing right now?"* They are two very different lenses on the same stock.

## 2. Reading a candlestick {#candles}

Most charts in India are drawn as **candlesticks**. Each little "candle" sums up the price action for one period — that could be one day, one hour, or one minute, depending on the chart. A single candle tells you four numbers:

- **Open** — the price when the period began.
- **High** — the highest price reached.
- **Low** — the lowest price reached.
- **Close** — the price when the period ended.

![Each candle packs four prices into one shape. This one is green because it closed higher than it opened — so the close sits at the top of the body.](../assets/img/diagrams/08-technical-analysis-1.svg)

The fat part is the **body** (between the open and close). The thin lines poking out the top and bottom are the **wick** or **shadow**, marking the high and the low. Colour tells you the direction at a glance:

| Candle colour | What it means |
|---|---|
| Green / white | Price closed **up** — it ended higher than it opened. |
| Red / black | Price closed **down** — it ended lower than it opened. |

![Same shape, opposite stories: on a green candle the close sits at the top of the body; on a red one it sits at the bottom.](../assets/img/diagrams/08-technical-analysis-2.svg)

Eg: a green candle with a long lower wick means the price dropped during the period but buyers pushed it back up before the close — a small clue about who won the tug-of-war.

## 3. Named candlestick patterns {#cpatterns}

Once you can read a single candle, the next thing you'll hear traders talk about is **patterns** — particular candle shapes, and short sequences of candles, thought to hint at what comes next. Zerodha Varsity spends six whole chapters on these; here are the famous few you'll bump into most, boiled down to the gist.

### Single candles

- **Marubozu** — a candle that is almost *all body*, with little or no wick. The price opened at one end and marched straight to the other. A green Marubozu (opens at its low, closes at its high) shouts one-sided **buying**; a red one, one-sided **selling**.
- **Doji** — the open and close land in almost the same spot, so the body shrinks to a sliver and the candle looks like a **cross**. The classic sign of **indecision**: buyers and sellers fought to a draw.
- **Spinning top** — a small body with wicks poking out both sides. Also indecision, but with more visible back-and-forth than a doji.
- **Hammer** — a small body sitting up top with a long *lower* wick, appearing **after a fall**. Sellers dragged the price right down, but buyers hauled it back up by the close — a possible sign the drop is running out of steam. (The 18 May candle later in this module is hammer-shaped.)
- **Hanging man** — the *exact same shape* as a hammer, but appearing **after a rise**, where it's read as a warning that the climb may be tiring.

![Four candles traders gave names to. The first three read the same whatever their colour; the hammer's message flips with where it appears — see the note below.](../assets/img/diagrams/08-technical-analysis-3.svg)

> [!TIP] SAME SHAPE, OPPOSITE MEANING
>
> The hammer and the hanging man are the *identical* candle — what changes the message is **where it appears**. After a fall (hammer) it hints "bottom"; after a rise (hanging man) it hints "top". With candlesticks, **location is everything**.

### Short sequences

Some patterns need two or three candles read together:

- **Bullish engulfing** — a small red candle is followed by a big green one whose body *completely swallows* it. After a downtrend, it's read as buyers wrestling control away from sellers.
- **Bearish engulfing** — the mirror image: a small green candle engulfed by a big red one after a rise.
- **Harami** — the reverse of an engulfing: a big candle followed by a small one tucked *inside* its body. The prior trend losing its grip — a hint of a possible pause or turn.
- **Morning star & evening star** — three-candle reversals. A **morning star** (big red → a small "pause" candle → big green) hints a *bottom*; an **evening star** is the upside-down warning at a *top*.

![In an engulfing pair the second candle's body completely covers the first — a visible handover of control from one side to the other.](../assets/img/diagrams/08-technical-analysis-4.svg)

![The little middle candle is the "star" — a pause where the prior trend stalls before the third candle swings the other way.](../assets/img/diagrams/08-technical-analysis-5.svg)

> [!NOTE] A PATTERN IS A HINT, NOT A TRIGGER
>
> None of these guarantee anything. Seasoned chart-readers wait for **confirmation** (the next candle agreeing) and weigh the pattern against the trend, support/resistance and volume — they never act on a shape alone. And two people can genuinely disagree on whether a pattern is even there.

## 4. Gap up & gap down openings {#gaps}

The Indian market is only open from **9:15 AM to 3:30 PM** — but the world doesn't stop overnight. Results get announced, global markets move, news breaks. So a stock often **opens at a very different price from where it closed the day before**, jumping straight there without trading at the levels in between. That jump leaves a visible **gap** on the chart: an empty band of prices where no candle exists. Because the market is shut overnight, gaps almost always show up right at the **open**.

There are two kinds:

- **Gap up opening** — today's candle **opens *above* yesterday's close** (often above yesterday's whole range), leaving an empty space *below* it. It usually means good news landed overnight — strong results, an upgrade, positive global cues — and buyers were willing to pay up the instant the market opened.
- **Gap down opening** — today's candle **opens *below* yesterday's close**, leaving an empty space *above* it. It usually points the other way — weak results, a downgrade, or a global sell-off.

![A gap up opens above yesterday's close, leaving an empty band below today's candle; a gap down opens below it, leaving the empty band above. That blank band — a price range where no trading happened — is the "gap".](../assets/img/diagrams/08-technical-analysis-16.svg)

### How to spot one

You don't need any tool — just compare **two numbers**: today's **open** and yesterday's **close**.

- Today opens clearly **higher**, with a blank space beneath the new candle → **gap up**.
- Today opens clearly **lower**, with a blank space above the new candle → **gap down**.

Eg: a stock closes at **₹500** on Monday. Overnight it posts strong results, and on Tuesday it **opens at ₹530** — it never traded between ₹500 and ₹530, so the chart shows a ₹30 **gap up**. Had bad news hit instead and it opened at **₹470**, the empty space *above* Tuesday's candle would be a ₹30 **gap down**.

> [!NOTE] Gaps often "fill" — and carry extra risk
>
> Traders watch whether a gap gets **filled** — the price later drifting back to cover the empty space (back toward ₹500 in the example). Many gaps do fill, but plenty don't, so it's a tendency, never a rule. And a gap is, by definition, an overnight move you *couldn't react to* while the market was shut — which is exactly why holding a position through results or big news is riskier than it looks.

## 5. Trends, support & resistance {#trends}

The first thing a chart-reader looks for is the **trend** — the general direction:

- **Uptrend** — the price keeps making *higher highs* and higher lows. Stairs going up.
- **Downtrend** — the price keeps making *lower lows*. Stairs going down.
- **Sideways** — the price drifts in a range, going nowhere in particular.

![The three directions a price can travel. Working out which one you're in is a chart-reader's very first move.](../assets/img/diagrams/08-technical-analysis-6.svg)

Two related ideas come up constantly:

- **Support** — a price *floor* where buyers have tended to step in before, stopping the fall. Think of it as a level the price keeps bouncing up from.
- **Resistance** — a price *ceiling* where sellers have tended to appear, capping the rise. The price keeps getting turned back down here.

![The price keeps turning at the same two levels — bouncing up off support and getting capped at resistance.](../assets/img/diagrams/08-technical-analysis-7.svg)

There's an old trader's saying: **"the trend is your friend"** — meaning it's usually easier to go along with the prevailing direction than to bet against it. Eg: if the Nifty keeps bouncing off 22,000 every time it dips, traders start treating 22,000 as support.

> [!TIP]
>
> Support and resistance are not exact lines drawn by some authority — they are rough zones that different people draw slightly differently. Treat them as fuzzy areas, not precise prices.

### Trends within trends — a nod to Dow Theory

One of the oldest ideas in charting comes from **Charles Dow** (the same Dow behind the Dow Jones index, around 1900). His insight: a trend is never a straight line — it's built from *smaller* trends nested inside it. Dow split a market's movement into three:

- **Primary trend** — the big tide, lasting months to years: the main up- or down-move everyone talks about.
- **Secondary trend** — the waves against that tide: pullbacks and bounces lasting a few weeks, which retrace part of the primary move before it resumes.
- **Minor trend** — the daily ripples and noise, mostly ignored.

![A trend is never a straight line. Inside one primary up-move sit many secondary dips — the reason a single red day (or week) needn't mean the rise is over.](../assets/img/diagrams/08-technical-analysis-8.svg)

The practical lesson for a beginner is simple: **don't mistake a secondary dip for the end of the world.** In a healthy uptrend the price pulls back again and again before climbing on — a dip is not automatically a reversal. (Zerodha gives Dow Theory two full chapters if you want the complete set of principles.)

## 6. Moving averages {#ma}

A **moving average** is simply the average closing price over the last N days, recalculated each day so it "moves" along with the price. Its job is to **smooth out the daily noise** so the underlying direction is easier to see.

Two are especially popular:

- **50-day average** — a medium-term view of the trend.
- **200-day average** — a long-term view, watched by big investors.

![The bumpy line is the daily price; the smooth amber line is its moving average — the very same data with the day-to-day noise ironed out.](../assets/img/diagrams/08-technical-analysis-9.svg)

As a rough rule of thumb, when the price is **above** its moving average, the trend is generally considered healthy; when it slips **below**, traders grow cautious. Eg: a stock trading comfortably above its 200-day average is often described as being "in an uptrend." It's a gauge, not a guarantee.

## 7. Volume {#volume}

**Volume** is simply how many shares changed hands in a period — drawn as **bars along the bottom** of most charts, one bar under each candle. On its own it says nothing about *direction*; its job is to show how much **conviction** is behind a move.

The rule of thumb: a price move on **high volume** is more trustworthy than the same move on thin volume, because more people are putting real money behind it.

- A breakout to new highs on **heavy** volume looks convincing — the crowd is taking part.
- The same breakout on **feeble** volume is suspect; few are behind it, and it may quietly fizzle.
- A big volume **spike** often marks the moment something changed — news, results, or big institutions ("smart money") stepping in.

![Quiet days draw stubby grey volume bars. The breakout candle is matched by one tall teal bar — heavy volume that says the crowd showed up, which is what makes the move more believable.](../assets/img/diagrams/08-technical-analysis-10.svg)

Eg: if a stock jumps 5% but on its lowest volume in weeks, a chart-reader treats the move with suspicion — a rise nobody turned up for rarely lasts.

## 8. Popular indicators {#indicators}

Indicators are formulas applied to price (and volume) to highlight things the eye might miss. You'll hear these names thrown around — here's the one-line gist of each:

- **RSI** (Relative Strength Index) — a gauge from 0 to 100. High readings suggest a stock may be **overbought** (risen too fast); low readings suggest it may be **oversold** (fallen too far).
- **MACD** — a **momentum** tool that tries to show whether buying or selling pressure is building or fading.
- **Bollinger Bands** — a pair of bands drawn above and below the price that **widen** when the market turns volatile and **squeeze** tight when it's calm. Price pushing the upper band is read as strong (or stretched); hugging the lower band, weak. A tight "squeeze" is watched as a hint that a big move may be brewing.

![RSI rolls momentum into a single 0–100 reading. Down near 30 a stock is called oversold; up near 70, overbought — hints, never guarantees.](../assets/img/diagrams/08-technical-analysis-11.svg)

> [!NOTE] DON'T MEMORISE THE MATH
>
> You do not need to calculate any of these by hand — charting apps draw them for you. The point is just to recognise the names and roughly what each one is hinting at.

## 9. Fibonacci retracements {#fib}

You'll bump into "Fibonacci" (or just "the Fibs") constantly. It starts from a famous number sequence — **0, 1, 1, 2, 3, 5, 8, 13, 21, 34…** where each number is the sum of the two before it. Divide any number by the next one and you keep landing near **0.618** — a proportion (the "golden ratio") that crops up oddly often in nature and art, and which traders believe shows up in markets too.

In charting, the idea is used for **retracements**. After a strong move, price rarely travels in a straight line — it *pulls back* part of the way before, often, resuming. Traders draw horizontal lines at the classic Fibonacci levels — **23.6%, 38.2%, 50% and 61.8%** of the prior move — and watch them as possible support zones where the pullback might run out of steam.

![After the rally from Low to High, the Fibonacci levels fan out across the pullback. Here the dip steadies right at the 61.8% line — the golden ratio — and bounces.](../assets/img/diagrams/08-technical-analysis-12.svg)

Eg: if the Nifty rallies from 23,000 to 24,000 (a 1,000-point move) and then dips, the 38.2% line (~23,618) and the 61.8% line (~23,382) are the spots Fib traders watch for a bounce.

> [!NOTE] A SELF-FULFILLING TOOL
>
> Fibonacci levels "work" partly because *enough traders watch the same lines* — a level can become support simply because everyone treats it as one. (And the 50% level isn't even a true Fibonacci ratio; it's kept because round-number pullbacks are common.) Useful, but hardly the magic some claim.

## 10. Common chart patterns {#patterns}

Traders also look for repeating **shapes** in the chart that supposedly hint at what comes next. A few you'll hear about:

- **Double top** — the price rises to a high, falls, rises to roughly the same high again, then turns down. Seen as a possible sign the uptrend is tiring.
- **Double bottom** — the mirror image: two dips to a similar low, then a turn upward. Seen as a possible sign the downtrend is ending.
- **Head and shoulders** — three peaks, with the middle one (the "head") highest and two lower "shoulders" on either side. Often read as a warning that a rise may be reversing.

![Three shapes traders watch for. The dashed "neckline" is the level thought to confirm the pattern — though all of them are only truly clear in hindsight.](../assets/img/diagrams/08-technical-analysis-13.svg)

Crucially, these patterns are **hints, not certainties**. A "double top" only counts as a double top in hindsight; in the moment, the price can do anything. Two people can even disagree on whether a pattern is forming at all.

## 11. A real month of Nifty, decoded {#example}

Enough theory — here is an **actual chart**. Below is the **Nifty 50** (India's benchmark index of 50 large companies) drawn as daily candlesticks for roughly one month, from **4 May to 2 June 2026**. Each candle is one trading day, built from that day's real open, high, low and close. This one picture quietly uses almost everything in this module at once.

![An actual month of the Nifty 50 — one candle per trading day (4 May–2 June 2026). Green candles closed up, red closed down; the dotted line marks the support zone near 23,300 that buyers defended five times (green dots) before the 2 June bounce.](../assets/img/diagrams/08-technical-analysis-14.svg)

Take a moment to just *read* it, the way the earlier sections taught:

- **Green vs red.** Green days closed higher than they opened; red days closed lower. Skim the colours alone and you can feel the mood swing from day to day.
- **Bodies vs wicks.** A tall body (like 6 or 12 May) means the open and close were far apart — a decisive, one-sided day. A thin tail sticking out is a wick: a price the market briefly touched but didn't want to hold.
- **The trend.** This was *not* a clean one-way move. The index drifted broadly **sideways-to-lower** — from about 24,100 down to 23,480 — bouncing around inside a range of roughly **23,230 to 24,480**. A textbook *range-bound* month, not a trending one.

### Two sharp falls and a floor that held

Two days jump out as **tall red candles**: **12 May** and **29 May**. On each, the index opened, sold off hard all day, and closed near its low — the unmistakable shape of a session where sellers were firmly in charge. Together they mark the month's two down-legs.

Now look along the bottom of the chart. **Five times** the price was dragged down toward **~23,300** (the dotted line and the green dots), and five times the dip was bought back up. That repeatedly-defended floor is a **support zone** — the exact idea from earlier in this module, now in live data instead of a sketch. The thin **lower wicks** stabbing down to those dots are the fingerprints of buyers stepping in: on 18 May, for instance, sellers forced the price down to 23,317 during the day, but buyers won it all the way back to close at 23,650 — leaving a long tail behind. The final candle, **2 June**, opened right at the month's low (23,229) and closed firmly higher: a green **bounce** off that same floor.

### Four candles, decoded

Reading one candle at a time is the core skill. Here are four real ones from the chart above, each a different "shape" worth being able to recognise on sight:

| Day | Open · High · Low · Close | Shape | What it's telling you |
|---|---|---|---|
| 6 May | 24,171 · 24,357 · 23,998 · 24,331 | Tall green body | Strong buying — it closed right near the top of the day's range. |
| 12 May | 23,723 · 23,758 · 23,348 · 23,380 | Tall red body, close near the low | Heavy, one-sided selling — the day the index broke lower. |
| 18 May | 23,482 · 23,696 · 23,317 · 23,650 | Green with a long lower wick | Sellers pushed it to 23,317, buyers fought it back to 23,650 — a floor being defended. |
| 2 Jun | 23,229 · 23,557 · 23,229 · 23,484 | Green, opens at its low | A bounce — it opened at the month's low and rallied for the rest of the day. |

> [!NOTE] WHERE ARE THE MOVING AVERAGES?
>
> The 50- and 200-day averages from the moving-averages section need *months* of past closes to calculate, so they simply can't be drawn on a single month of candles. On a real charting app you'd switch to a 6-month or 1-year view to see them ride through the price.

> [!WARNING] THIS IS A FROZEN SNAPSHOT
>
> These are real prices from **May–June 2026**, captured here as a teaching example — **not** a prediction, and not a live feed. By the time you read this, the Nifty is somewhere else entirely. The skill to carry away isn't *these* numbers; it's being able to pull up *any* live chart and read its colours, bodies, wicks, trend and support in just the same way. (Prices: Yahoo Finance / NSE.)

## 12. If you really want to try {#discipline}

If, after all the caveats, you still want to experiment, the most important thing isn't a clever indicator — it's **discipline**. Two habits matter more than any pattern on this page.

### Risk-reward: know your exit before your entry

Before you ever click buy, fix three prices in your mind: your **entry**, your **stop-loss** (the price at which you'll admit you're wrong and get out), and your **target** (where you'll take profit). The gap from entry to stop is your **risk**; the gap from entry to target is your **reward**. The ratio between them is the heart of trading.

![Decide all three prices before you enter. Here the reward band is twice the height of the risk band — a 1:2 trade, where you can be wrong more often than right and still finish ahead.](../assets/img/diagrams/08-technical-analysis-15.svg)

- Eg: buy at ₹100, stop at ₹95 (risk ₹5), target ₹110 (reward ₹10) → a **1:2** ratio. You're risking ₹1 to make ₹2.
- **Why it matters:** with a 1:2 ratio you can be *wrong more than half the time* and still come out ahead. Good traders obsess over this far more than over being "right".

### A starter checklist

If you must trade, do it the careful way:

- Practise first with a **tiny amount** you can afford to lose — or paper-trade (fake money) until you're consistent.
- Always set a **stop-loss before you enter** — and actually honour it.
- Risk only a **small slice** of your capital on any one trade (many use 1–2%).
- **Trade with the trend**, not against it — remember "the trend is your friend".
- Wait for **confluence** — a few signals agreeing — rather than acting on one shape alone.
- Keep a **journal** of every trade and why you took it; review it honestly.
- Avoid **leverage** and F&O until you genuinely understand them (see [Module 9](09-futures-and-options.html)).

> [!NOTE] OTHER NAMES YOU'LL BUMP INTO
>
> TA is a deep rabbit hole. Beyond this module you'll hear about the **ADX** (trend strength), **pivot points** and the Central Pivot Range, **VWAP**, **Ichimoku clouds**, **Elliott Waves** and **Supertrend**. None are required to be a good investor — but if you want the full, rigorous tour, the [Zerodha Varsity Technical Analysis module](https://zerodha.com/varsity/module/technical-analysis/) is the standard free reference.

## 13. Reality check {#reality}

Time for some honesty. Technical analysis can be fascinating, but it is easy to overrate.

> [!WARNING] PLEASE READ THIS
>
> TA is **hard, subjective, and guarantees nothing.** The same chart can look bullish to one person and bearish to another. It is mainly a tool for **active traders** who watch the market closely — long-term investors don't need it at all. And TA without strict **risk management** (knowing your exit before you enter) is genuinely dangerous and a fast way to lose money.

For most beginners, patient **long-term investing** — buying solid businesses or index funds and holding for years — tends to work out far better than trying to trade charts. If that sounds more like you, head back to **Module 3** on personal finance and long-term investing rather than chasing candlesticks.

There's no shame in skipping this topic entirely. It's an **optional, advanced** corner of the market — interesting to know about, but absolutely not required to be a successful investor.
