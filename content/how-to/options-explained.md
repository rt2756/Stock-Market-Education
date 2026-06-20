# Options Explained — Step by Step

Lots, strikes, premiums, the option chain, placing one on Kite — and what really happens at expiry. The practical layer on top of [Module 9](../modules/09-futures-and-options.html).

> [!WARNING] Read this first
>
> This page explains the *machinery* of options so that nothing about them ever takes you by surprise. It is **not** encouragement to trade them — remember Module 9's number: roughly **9 out of 10** individual F&O traders lost money (a SEBI study). Understanding the table is free; sitting down at it is not. If you haven't read [Module 9 · Futures & Options](../modules/09-futures-and-options.html) yet, start there — this page assumes its ideas.

## 1. The 60-second recap {#recap}

An **option** is a contract that gives you a *right* (not a duty) on the underlying — usually an index like the **Nifty**, or a single stock. Four words define every option you'll ever see:

- **Call (CE)** — the right to **buy** at a fixed price. You'd buy one expecting a *rise*.
- **Put (PE)** — the right to **sell** at a fixed price. You'd buy one expecting a *fall*.
- **Strike** — that fixed price, written into the contract (e.g. "the 23,500 call").
- **Premium** — what the option itself costs you, per unit. This is the number that flickers all day.

And every option carries an **expiry date**, after which it stops existing — that side of the story lives in [Expiry Explained](expiry-explained.html). On screens you'll see options written like **NIFTY 23500 CE 16 JUN** — underlying, strike, call/put, expiry. Once you can read that, every option in the market is just those four pieces rearranged.

> [!NOTE] CE and PE?
>
> On Indian screens a call is tagged **CE** ("call European") and a put **PE** ("put European"). The "European" only means it settles at expiry — nothing to do with geography, and nothing you need to act on. Read CE = call, PE = put, and move on.

## 2. Lots & premiums — the actual money {#lots}

The premium you see quoted — say **₹120** — is *per unit*. But options never trade one unit at a time: they trade in a fixed bundle called a **lot**. As of this page's review, one Nifty lot is **75 units** (the exchange revises lot sizes now and then — Kite always shows the current one in the order window).

![A "₹120 option" actually costs ₹120 × 75 = ₹9,000. The buyer pays the full premium upfront — and that premium is the maximum the buyer can lose.](../assets/img/diagrams/options-explained-1.svg)

That's the buyer's side. The **seller** (writer) of the same option is playing a completely different game with completely different money:

|  | Option **buyer** | Option **seller** (writer) |
|---|---|---|
| Money in | Pays the premium (₹9,000 here) — that's all | Blocks a large **margin** — typically well over ₹1 lakh per Nifty lot (the exchange sets it; it changes) |
| Best case | Premium multiplies if the move comes | Keeps the small premium |
| Worst case | Premium gone — capped | **Very large loss**, can far exceed the premium collected |

> [!WARNING] This page is about buying
>
> Everything below assumes you'd be an option **buyer** — capped, known, paid-upfront risk. **Selling** options ("writing") needs lakhs in margin, strict risk control and experience; it is professional territory and not for a first year in the market. (Section 8 shows how to avoid selling one *by accident*.)

## 3. ITM, ATM, OTM — moneyness {#moneyness}

Strikes come in a ladder — for Nifty, usually steps of 50 or 100 points. Where a strike sits *relative to the current market price* (the **spot**) is called **moneyness**, and traders use three tags for it:

- **ITM — in the money.** The right is *already* worth using. For a call: strike *below* spot (the right to buy at 23,300 when the market is at 23,500 is genuinely useful).
- **ATM — at the money.** Strike ≈ spot. The coin-toss strike, and usually the busiest.
- **OTM — out of the money.** Worth nothing *today* — it only pays if the market travels to it. For a call: strike *above* spot.

![For a call with the market at 23,500: lower strikes are ITM (already useful), 23,500 is ATM, higher strikes are OTM. A put mirrors this exactly.](../assets/img/diagrams/options-explained-2.svg)

Moneyness explains the first thing you notice on any option screen: **ITM options are expensive, OTM options are cheap.** Cheap is tempting — but an OTM option is cheap *because it's unlikely*, the same way a ₹10 lottery ticket is cheap. Why exactly, is next.

## 4. What a premium is made of {#inside}

Every premium is just two ingredients added together:

- **Intrinsic value** — the *real* part: how far the option is in the money right now. A 23,400 call with spot at 23,500 has ₹100 of intrinsic value. It can never be negative — an OTM option simply has zero.
- **Time value** — the *hope* part: what traders will pay for the chance that the market moves further before expiry. More time (and more expected drama) = more time value.

![The green intrinsic layer (₹100 here) is real and survives to expiry. The amber time value quietly melts to zero by the closing bell — whatever the market does.](../assets/img/diagrams/options-explained-3.svg)

Now connect this to moneyness, and two big truths fall out:

- An **OTM option is 100% time value** — pure hope. If the market doesn't reach its strike, there is *nothing* left at expiry. That's the whole "cheap option" trap in one sentence.
- At expiry, **only intrinsic value remains**. Every option finishes worth exactly how far it ended in the money — or zero.

## 5. How the premium moves {#moves}

Module 9's [cricket-match section](../modules/09-futures-and-options.html#cricket) gave you the three forces that move a premium — worth re-reading slowly. In one line each:

- **Direction** — the market moving toward your strike makes your option dearer; away, cheaper. (Calls and puts move as mirror images.)
- **Time** — every passing day drains a little time value, faster and faster near expiry — even if the market goes nowhere.
- **Expected drama (volatility)** — big-event nerves (budget day, election results) puff *both* calls and puts up; calm deflates both. When an event passes, that extra air rushes out at once — the "volatility crush" that hurts buyers who were even *right* about direction.

There's one more instinct this page should add: premiums don't all move at the same **speed**. When the index steps 100 points, each strike responds differently:

![Deep ITM premiums track the index almost ₹-for-₹, ATM moves at roughly half speed, and far OTM barely stirs until the market actually approaches it — which is why "cheap" options can stay stubbornly cheap even when you're right.](../assets/img/diagrams/options-explained-4.svg)

> [!NOTE] About the Greeks
>
> Traders bundle these behaviours into measures with Greek names — **delta** (speed of the premium), **theta** (the daily rent time charges), **vega** (sensitivity to expected drama). You don't need their maths for a long time, if ever — the three instincts above *are* the Greeks, in plain clothes. When you're ready for the formal version, it's in [Zerodha Varsity's options module](https://zerodha.com/varsity/module/option-theory/).

## 6. Weekly, monthly & long-dated — choosing a deadline {#expiries}

Buying an option always includes choosing its **expiry date** — and many expiries trade *at the same time*. On a given day you can pick the option dying next Tuesday, the one at month-end, a quarter-end one, even contracts more than a year away:

![All of these trade simultaneously (dates shown are this page's review week). Nearer expiries are cheaper but melt fast; further ones cost more time value but give your idea room to play out.](../assets/img/diagrams/options-explained-5.svg)

- **Weekly** — index options only (Nifty on NSE, Sensex on BSE). The cheapest and the most dangerous: their whole life is days, so time decay is savage. The week's final trading hours are the famous **0DTE** — covered properly in [Expiry Explained](expiry-explained.html#zero-dte).
- **Monthly** — the last weekly of the month; the most traded contract. **Stock options come only in monthly form** — there are no weekly stock options.
- **Long-dated** — index options also list with quarter-end and half-year expiries stretching years out (the international word is **LEAPS**). They give a slow idea time to breathe, but they trade *thinly* in India — wide bid-ask gaps, few buyers when you want out. Know they exist; don't start there.

> [!NOTE] Which day is expiry day?
>
> As of this page's review: NSE contracts (Nifty) expire on **Tuesdays**, BSE contracts (Sensex) on **Thursdays**, and the monthly is the last such weekday of the month. These days have changed before and can change again — the full picture, holiday rule included, is in [Expiry Explained](expiry-explained.html).

## 7. Reading the option chain {#chain}

Every screen you'll trade options from is a version of the same table: the **option chain**. Strikes run down the middle; everything about **calls** sits on one side, everything about **puts** on the other; and you pick one expiry at a time to look at:

![Reading down the call column: premiums fall as strikes climb away from the spot (more OTM = cheaper = less likely). The put column mirrors it. The amber ATM row is where the spot sits, and OI (open interest) tells you how busy each strike is.](../assets/img/diagrams/options-explained-6.svg)

Two practical habits when reading one:

- **Stay where it's busy.** High OI and volume mean tight gaps between the buying and selling price. A sleepy far-away strike can quote a wide gap, so you lose a few rupees just entering and leaving.
- **Check you're on the right expiry.** The chain shows one expiry at a time, and the same strike exists for every expiry. Many a beginner has bought the wrong week by accident.

> [!NOTE] See it on Zerodha
>
> Kite has a built-in chain: [how to view & read the option chain on Kite](https://support.zerodha.com/category/trading-and-markets/charts-and-orders/order/articles/option-chain-on-kite). The classic public one is on the NSE site: [nseindia.com/option-chain](https://www.nseindia.com/option-chain).

## 8. Placing one on Kite {#placing}

If you've read [Using Zerodha](using-zerodha.html), there is no new screen here — an option order uses the *same* order window as a share. Only four things change:

1. **Find the contract.** Search the underlying in Marketwatch (e.g. "NIFTY") and pick the exact contract — strike, CE/PE, expiry — or tap into the **option chain** and choose from there. The instrument name should read back exactly as the bet you mean: *NIFTY 23500 CE 16 JUN*.
2. **Product type:** **NRML** to hold the position overnight (up to expiry), or MIS for intraday-only (auto-squared around 3:20 pm). There's no CNC here — options never become Holdings; they live in **Positions** until closed or expired.
3. **Quantity is in units, not lots.** One Nifty lot = 75 units, so for one lot you enter **75** (Kite steps the field by the lot size and rejects anything that isn't a whole lot).
4. **Use a Limit order.** Option prices gap around more than share prices, so set the price you're willing to pay rather than taking a market fill. The money needed is simply **premium × units** — ₹9,000 in our example — debited like any purchase.

After that it's the familiar flow: the order appears under **Orders**, and once executed the contract sits in **Positions** with a live, wobbling P&L until you exit.

> [!WARNING] The SELL button has two meanings
>
> If you *hold* an option and sell the same contract, you've simply **exited** — fine, that's how everyone takes profit or cuts a loss. But selling an option you *don't* hold means **writing** a fresh one — the high-risk, margin-hungry side from section 2. Kite won't stop you; the tell-tale sign is the **margin required**: exiting a bought option needs roughly nothing, while writing one demands **lakhs**. If the order window ever asks for far more money than the premium, stop — you're about to sell something you don't own.

## 9. Three ways out of an option {#exit}

Unlike a share, an option position always ends — the only question is how. There are exactly three exits:

- **1 · Square off (sell it back) — the normal exit.** Any time before expiry you can sell what you bought at the going premium, pocketing whatever direction, time and drama have done to it. This is how most positions end, and it's the only exit where any remaining *time value* is recovered — hold to the bell and that part evaporates by definition.
- **2 · Let it expire worthless.** If it finishes OTM, it quietly becomes zero and disappears. Nothing to click, nothing owed — the premium was the loss.
- **3 · Hold ITM to the bell.** The exchange **auto-exercises** it: for index options the cash difference lands in your account (minus STT and charges); the mechanics, with numbers, are in [Expiry Explained](expiry-explained.html#settlement).

> [!WARNING] Stock options are a different animal at expiry
>
> Index options (Nifty, Sensex) settle in **cash**. But a **stock** option held ITM to expiry settles **physically** — actual shares change hands, a full lot's worth, which can mean lakhs of rupees and heavy margins in expiry week. Brokers ramp up requirements and may square off your position themselves. If you ever trade stock options, square off before expiry week unless you genuinely intend to take or give delivery — and read [Zerodha's physical-settlement policy](https://support.zerodha.com/category/trading-and-markets/margins/margin-leverage-and-product-and-order-types/articles/policy-on-physical-settlement) first.

## 10. A full worked example, start to finish {#example}

Let's run one trade end to end with honest numbers. It's Wednesday; Nifty is at **23,500**. You expect a rise within the week, so you buy next Tuesday's weekly **23,500 CE at ₹120** — one lot, 75 units, **₹9,000** paid (NRML, limit order). Tuesday's bell decides the ending:

![Below the strike the whole premium is lost (the flat red floor). Between 23,500 and 23,620 you get something back but still lose. Only beyond breakeven = strike + premium does the trade actually profit.](../assets/img/diagrams/options-explained-7.svg)

| Nifty at Tuesday's bell | The 23,500 CE is worth | Your ₹9,000 became |
|---|---|---|
| 23,400 (below strike) | ₹0 — expires worthless | **₹0** — full premium lost |
| 23,560 (ITM, but barely) | 60 × 75 = ₹4,500 | **₹4,500** — a loss of ₹4,500. *ITM ≠ profitable!* |
| 23,620 (breakeven) | 120 × 75 = ₹9,000 | **₹9,000** — flat (slightly down after costs) |
| 23,800 (well past it) | 300 × 75 = ₹22,500 | **₹22,500** — profit ₹13,500 before charges |

> [!NOTE] The quiet cost of every round trip
>
> Each executed order costs flat brokerage (₹20 a side at Zerodha) plus STT, exchange fees, GST and stamp duty — typically **under ₹100 in total** for a one-lot round trip, a little more if an ITM option is auto-exercised (STT then applies on its settled value, which is one reason many traders square off before the bell rather than let exercise happen). Small numbers — but they mean a "flat" trade still ends slightly red, and frequent trading bleeds steadily.

Notice what the middle rows teach: you can be *right about direction* and still lose. The market must move past **strike + premium** — and do it *before the clock runs out*. That double hurdle is the whole difficulty of buying options, in one sentence.

## 11. Beginner traps — and a safe way to learn {#traps}

Every one of these is common enough to have a name. Read the list twice:

- **The lottery-ticket habit.** Buying far-OTM weekly options because they're "only ₹15". They're cheap because they almost always finish at zero — and ₹15 × 75, week after week, is a steady leak dressed up as a bargain.
- **Holding and hoping.** A bought option that's going wrong doesn't owe you a comeback — and time decay accelerates against it daily. Decide your exit *before* you enter.
- **Averaging a melting premium.** "It's even cheaper now" is usually time decay doing exactly what it does. Adding money to a dying option is buying more of the same mistake.
- **"Selling options is easy income."** You'll hear this constantly. The sellers who survive run lakhs of margin, strict hedges and exit rules — and one wild day still hurts them. As a beginner, don't write options. Full stop.
- **Trading the sleepy strikes.** Thin OI means wide bid-ask gaps; you can lose 5–10% of the premium just getting in and out. Stay near the busy ATM strikes.
- **Expiry-day adrenaline.** The cheapest, fastest, most violent options trade in the final hours — see [0DTE in Expiry Explained](expiry-explained.html#zero-dte) — and they're where beginners lose quickest of all. Watch your first few expiry days; don't trade them.
- **Sizing by hope instead of loss.** The only honest size question for a buyer: *"am I fine losing this entire premium?"* — because that is the normal, expected outcome for most bought options. If ₹9,000 vanishing would sting, the position is too big (or shouldn't exist).

> [!TIP] The zero-rupee apprenticeship
>
> Before any real money: **paper-trade one full expiry cycle**. On a Wednesday, pick a Nifty strike, write down its premium, and note it every day through to the next Tuesday's close — watch direction, time and drama tug at it exactly as section 5 promised. Do that for two or three weeks (a notebook is enough; apps like Sensibull also offer a virtual mode). It costs nothing, and it will teach you more than any thread, tip or video — including, very possibly, that you'd rather stay an investor. That's a perfectly good ending too. ☕

## 12. Quick reference — the cheat sheet {#cheat-sheet}

Three cards that hold the whole page in miniature. Screenshot them, print them, prop them by the screen — between them they settle most "wait, which way…?" moments. *(They use small round numbers for clarity, not the 23,500 example above.)*

**The vocabulary** — every option on every screen is built from the same six words:

![The six terms behind every contract — strike price, expiry, lot size, premium, strike type (CE = call, PE = put) and strike difference. "CE / PE" just mean "European": they settle at expiry.](../assets/img/diagrams/options-explained-8.svg)

**Which way it moves** — a call profits from a rise, a put from a fall; the two are mirror images:

![When the stock or index rises, a call (CE) premium rises while a put (PE) premium falls. When it falls, the call falls and the put rises.](../assets/img/diagrams/options-explained-9.svg)

**The chain, decoded** — where each strike sits, and what it's worth the moment the bell rings:

![With the spot at expiry at 203: call strikes below it are ITM, the 200 strike is ATM, strikes above are OTM — and the value at expiry counts down 63, 53, 43 … 3, then zero. Puts mirror it exactly, climbing 7, 17, 27 … upward. Every OTM contract expires at 0; option price = intrinsic value + time value; and intrinsic value is simply that value-at-expiry column.](../assets/img/diagrams/options-explained-10.svg)

Read that last card top to bottom and the single most important truth about *buying* options falls out: the instant it expires, an option is worth only how far it finished in the money — and most strikes finish at exactly zero.
