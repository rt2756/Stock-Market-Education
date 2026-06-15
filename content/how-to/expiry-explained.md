# Expiry Explained

Only derivatives expire — here's what that means, and which day Nifty, Sensex and Bank Nifty settle.

> [!NOTE] First, a relief
>
> The ordinary shares you buy and hold (delivery / [CNC](using-zerodha.html#product)) **never expire** — they're yours until you sell. "Expiry" belongs only to **Futures & Options**, so this page is the companion to [Module 9](../modules/09-futures-and-options.html) and [Options Explained](options-explained.html). If you're not trading F&O, this is just useful background.

## 1. What "expiry" means {#what}

Every Futures & Options contract is a **dated agreement**. Unlike a share — which can sit in your demat forever — a derivative has a built-in end date called the **expiry**. On that day the contract is **settled** (any profit or loss is finalised) and then it simply **ceases to exist**.

- Indian **index** options and futures (Nifty, Sensex, Bank Nifty) are **cash-settled** — no shares change hands, just the cash difference is paid.
- After expiry, an option that ended up worthless is gone, and you keep nothing. An option that finished "in the money" pays out its value. Either way, the contract is over. (The exact mechanics, with numbers, are in [section 5](#settlement).)

Eg: You buy a weekly Nifty call. Whatever happens, on its expiry day it's settled and removed from your account — you can't "hold it a bit longer" the way you can a share.

## 2. Weekly, monthly & quarterly {#weekly-monthly}

Contracts come in different lengths. The three you'll hear about:

- **Weekly** — index *options* expire every week. A fresh weekly contract starts as the old one dies, so there's an expiry to trade almost constantly.
- **Monthly** — the *last* weekly of a month *is* the monthly contract. Stock options, and all *futures*, settle monthly (in that last week). The monthly is usually the most heavily traded.
- **Quarterly & beyond** — index *futures* are also listed a few months out (the "near", "next" and "far" months). Index *options* go further still, with quarter-end and half-year expiries stretching years out — thinly traded, but they exist. (How to choose between all these deadlines: [Options Explained](options-explained.html#expiries).)

![An index option expires every week. The last weekly of the month is also the monthly contract — the biggest and most traded.](../assets/img/diagrams/expiry-explained-1.svg)

## 3. Which day does what expire? {#which-day}

This is the part everyone wants pinned down. After a SEBI rule that lets each exchange hold just **one weekly expiry**, the days settled (as of this page's review date) into a simple split:

![Each exchange keeps one weekly contract: Nifty on the NSE (Tuesday) and Sensex on the BSE (Thursday). Everything else settles monthly on the same weekday.](../assets/img/diagrams/expiry-explained-2.svg)

| Contract | Exchange | Weekly? | Monthly expiry |
|---|---|---|---|
| **Nifty 50** | NSE | Yes — every Tuesday | last Tuesday |
| **Bank Nifty** | NSE | No (weekly discontinued) | last Tuesday |
| **Stock F&O** | NSE | No | last Tuesday |
| **Sensex** | BSE | Yes — every Thursday | last Thursday |
| **Bankex** | BSE | No | last Thursday |

> [!WARNING] These days have changed before — always check
>
> This Tuesday/Thursday split only began in **September 2025**, ending a 25-year tradition where *everything* expired on Thursday. The exchanges set these days and **can change them again**. Treat the days above as a dated snapshot, and before trading any contract, confirm the live expiry on the official [NSE](https://www.nseindia.com/) / [BSE](https://www.bseindia.com/) site or in your broker's contract details.

## 4. The holiday rule {#holiday}

One simple wrinkle: if an expiry day falls on a **market holiday**, the expiry doesn't skip — it moves to the **previous trading day**.

Eg: If a Tuesday is a holiday, that week's Nifty contracts expire on the **Monday** instead. Your broker and the exchange calendar will always show the actual date, so when in doubt, check rather than assume.

## 5. What actually happens at the bell {#settlement}

Here's the part almost nobody explains plainly. It's **3:30 pm on expiry day** and you still hold an option. What now? Answer: **nothing — the exchange takes over.** Every contract still open is settled automatically against the exchange's official **closing settlement price** (a precise number it computes from the last half-hour of trading — so don't be surprised if it differs a hair from the last tick you saw).

![Hold to the bell and one of two things happens by itself: an ITM option is auto-exercised and pays its cash difference; an OTM option becomes zero and disappears. No clicks, no choices.](../assets/img/diagrams/expiry-explained-3.svg)

Eg: You hold a weekly Nifty **23,500 call** you'd bought for ₹120 (one lot of 75 = ₹9,000), and you let it expire:

- Nifty's settlement price is **23,800** → ITM by 300 points → auto-exercised → **300 × 75 = ₹22,500** is credited (minus STT and charges) → net profit ≈ ₹13,400.
- Settlement is **23,560** → ITM by just 60 → **₹4,500** credited → you still *lost* ₹4,500. Finishing ITM is **not** the same as finishing in profit.
- Settlement is **anything below 23,500** → OTM → worth ₹0 → the ₹9,000 premium is the loss.

> [!NOTE] Why many traders exit before the bell anyway
>
> Auto-exercise is convenient, but it has two small stings: **STT** is charged on an exercised option's settled value (a touch more than the tax on simply selling it), and you surrender all control over the final settlement price. That's why most traders **square off** — sell the option back — sometime before the close instead. The three ways out of an option are compared in [Options Explained](options-explained.html#exit).

> [!WARNING] Stock F&O settles in actual shares
>
> Everything above describes **index** contracts (Nifty, Sensex), which settle in **cash**. A **stock** option or future held ITM to expiry is settled **physically** — real shares change hands, a whole lot's worth, which can run into lakhs. Brokers demand steep extra margins in expiry week for such positions and may square them off themselves. If you ever trade stock F&O, exit before expiry week unless you truly intend to take or give delivery — Zerodha's rules are here: [policy on physical settlement](https://support.zerodha.com/category/trading-and-markets/margins/margin-leverage-and-product-and-order-types/articles/policy-on-physical-settlement).

## 6. 0DTE — the expiry-day option {#zero-dte}

You'll keep meeting the term **0DTE** ("zero days to expiry"). It isn't a special product — it's just an ordinary option *on its final day*. Every Tuesday, that week's Nifty contracts are 0DTE from the opening bell; every Thursday, Sensex's are. A huge share of all index-option trading happens on these last days, which is exactly why they need their own warning.

On its last morning an option has almost no time value left to lose slowly — so what remains behaves like a firecracker:

![A 0DTE premium is nearly all reaction and no cushion: it can double on a 60-point pop, give everything back in a quiet hour, and — unless the market finishes past its strike — it will be zero by 3:30.](../assets/img/diagrams/expiry-explained-4.svg)

Why it behaves this way, in plain words:

- **No cushion.** With hours left instead of days, there's no time value to absorb mistakes — the premium is a raw, magnified bet on the next move.
- **Violent percentages.** A ₹40 option swinging to ₹80 and back to ₹15 within a day is normal 0DTE behaviour. The rupee amounts look small; the percentage swings are wild.
- **The clock always wins by 3:30.** Whatever drama happens in between, every 0DTE option ends the day at exactly its intrinsic value — for most strikes, zero.
- **It looks cheap.** Morning-of-expiry options cost the least they ever will — which is precisely the lottery-ticket lure from the list below.

> [!WARNING] Watch, don't trade
>
> Expiry-day options are where beginners lose money fastest — small tickets, instant feedback, casino feel. The genuinely useful version of 0DTE for a learner costs nothing: open the [option chain](options-explained.html#chain) on a Tuesday after lunch and just *watch* the premiums melt and snap around until close. One watched expiry teaches more than ten articles — and it charges no tuition.

## 7. Why expiry matters to a beginner {#why}

Even if you never trade F&O, it helps to know *why* expiry day is so talked about — and so dangerous for newcomers.

- **Time decay speeds up.** A bought option loses value every day just from time passing (called **time decay** or *theta*), and that drain **accelerates** as expiry nears. In the final hours a weekly option's value can melt to almost nothing.
- **Expiry days are wild.** Huge volumes pile into soon-to-die contracts, so prices can swing violently on expiry day — great for stories, brutal for beginners.
- **The lottery-ticket trap.** Far-out-of-the-money weekly options are *cheap*, which makes them tempting. But cheap usually means unlikely — most expire worthless, and buying them again and again quietly bleeds money.

![Time value leaks out slowly at first, then plunges in the last days before expiry. Buy too early or hold too long and the clock alone can wipe out a "correct" bet.](../assets/img/diagrams/expiry-explained-5.svg)

> [!WARNING] Keep Module 9's number in mind
>
> A SEBI study found roughly **9 out of 10** individual F&O traders lost money — and the expiry-day rush is exactly where a lot of that loss happens. Understanding expiry is worth it; *chasing* expiry-day options usually isn't. For the full picture, read [Module 9 · Futures & Options](../modules/09-futures-and-options.html), then the practical walkthrough in [Options Explained](options-explained.html) and, if you want depth, [Zerodha Varsity's F&O modules](https://zerodha.com/varsity/modules/).

Source: NSE & BSE official expiry circulars (SEBI expiry-day rationalisation, effective 1 September 2025). Days are a frozen snapshot as of the review date below — not live data.
