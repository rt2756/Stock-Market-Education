# Module 9 · Futures & Options (Derivatives)

Derivatives let you bet on a stock's price without owning it — and they are the fastest way most beginners lose money, so this page is about understanding them, not trading them.

> [!WARNING] Read this first
>
> This is the highest-risk part of the market. A SEBI study found that roughly **9 out of 10** individual traders LOST money trading Futures & Options. This page is here to help you UNDERSTAND derivatives — not a suggestion to trade them.

## 1. What a derivative is {#what}

A **derivative** is a contract whose value is *derived* from something else — called the **underlying asset**. The underlying could be a single stock (like Reliance or Infosys) or a whole market index (like the **Nifty 50** or Bank Nifty).

The key idea: when you buy a derivative, **you do not own the share**. You are not a part-owner of the company. Instead, you are taking a **position** — a bet — on where the price of that underlying will go.

- Buy a **share** of TCS → you own a tiny slice of TCS. You can hold it for years.
- Buy a **derivative** on TCS → you own a *contract* that gains or loses value as the TCS price moves. It has an **expiry date**, after which it ceases to exist — see [Expiry Explained](../how-to/expiry-explained.html) for which day Nifty, Sensex & Bank Nifty settle, and weekly vs monthly.

Eg: You think Nifty will rise. Instead of buying 50 different shares, you buy one Nifty derivative. If Nifty goes up, your contract is worth more; if it falls, your contract is worth less. You never held a single share.

> [!NOTE] Two main types
>
> There are two everyday derivatives in India: **Futures** and **Options**. The next sections explain each in plain English.

## 2. Futures {#futures}

A **future** (or "futures contract") is an agreement to **buy or sell the underlying at a price set today, on a fixed date in the future** (the expiry). Both sides are locked in.

Three things make futures different from buying ordinary shares:

- **Lots, not single shares.** You can't trade one share at a time. Futures trade in a fixed bundle called a **lot**. Eg: a Nifty futures lot is a set number of units decided by the exchange — so each trade is large.
- **Margin (you pay only a fraction upfront).** You don't pay the full value of the contract. You deposit a small slice called the **margin**. This is what creates **leverage** (more on that in section 5).
- **Mark-to-market (settled daily).** Your profit or loss isn't calculated only at the end. Every single trading day, the exchange settles the day's gain or loss to your account. If the price moved against you, money is taken out *that day*. If your balance runs low, you get a **margin call** asking you to add more cash.

Eg: You buy a futures contract expecting the price to rise. It rises a little today — money is credited to you. Tomorrow it falls — money is debited. This happens daily until you close the position or it expires.

> [!WARNING] Why this matters
>
> Because futures are settled **daily** and you only put up a small margin, a few bad days in a row can wipe out your deposit fast — even before the contract expires.

## 2.1 Why futures came first, and why options were needed {#why-both}

The simplest reason futures exist is **certainty**.

If you are a buyer who knows you will need something later, or a seller who knows you will have something to deliver later, futures let you **lock the price today** and remove uncertainty. That is useful in the real world because businesses hate being surprised by prices.

Eg:

- A bakery knows it will need wheat next month. A futures contract lets it lock the purchase price now instead of gambling on where wheat will trade later.
- A farmer knows a crop will be ready in the future. A futures contract lets the farmer lock the selling price now instead of hoping the market is kind on harvest day.
- In markets, an investor or trader may want to lock in a price on a stock or index because they care more about planning than flexibility.

But futures have a limitation: they are **symmetrical**. Both sides are fully locked in. That is perfect when you want certainty, but bad when you want protection **without giving up upside**.

That is where options were needed.

An option adds **choice**. It says, “I want protection or leverage, but I do **not** want to be forced to act if the market moves against me.” You pay a premium for that freedom.

Eg:

- You own shares at ₹100 and fear a fall. A futures hedge would lock you into a sale or offset position and also cap your upside. A **put option** lets you protect the downside while still enjoying gains if the stock rises.
- You want to buy a stock only if it becomes attractive later. A futures contract would force you to buy even if the price falls badly. A **call option** lets you cap the purchase price, but you can simply walk away if the market turns out cheaper than expected.

So the clean distinction is:

- **Futures** = “I want certainty, and I accept obligation.”
- **Options** = “I want flexibility, and I am willing to pay for it.”

That is why options did not replace futures. They solved a different problem.

## 3. Options — calls & puts {#options}

An **option** gives you a *right*, but **not the obligation**, to buy or sell the underlying at a fixed price. You pay a fee for this right, called the **premium**. Every option has a **strike price** (the agreed price) and an **expiry date** (after which it is worthless if unused).

There are two kinds:

- **Call option** — the right to **BUY** the underlying at the strike price. You'd want a call if you expect the price to *rise*.
- **Put option** — the right to **SELL** the underlying at the strike price. You'd want a put if you expect the price to *fall*.

![For the buyer, the loss is capped at the premium (the flat part), while the upside grows as the price moves your way — a call profits on a rise, a put on a fall.](../assets/img/diagrams/09-futures-and-options-1.svg)

Eg: You pay a small premium for a call on a stock with a strike of ₹100. If the stock climbs to ₹120, your right to buy at ₹100 is valuable. If it stays below ₹100 until expiry, your call expires worthless and you lose only the premium you paid.

> [!WARNING] Buyer vs seller — a crucial difference
>
> An option **buyer** can lose at most the **premium** paid — the loss is capped. But an option **seller** (also called a **writer**) collects the small premium and in exchange takes on the obligation — and can face **very large, sometimes unlimited, losses** if the market moves sharply against them. Many beginners are lured into selling options for the steady premium and are badly burned by one big move.

> [!NOTE] Time is against the buyer
>
> Options lose value as expiry approaches — this is called **time decay**. Even if the price doesn't move, a bought option can quietly bleed value every day and end up worthless.

> [!NOTE] When you want the practical layer
>
> This module stays at the *idea* level on purpose. When you're ready for the machinery — lots and what they cost, ITM/ATM/OTM, what's inside a premium, the option chain, placing one on Kite, and exactly what happens at expiry (including 0DTE) — walk through [Options Explained](../how-to/options-explained.html) and [Expiry Explained](../how-to/expiry-explained.html). They pick up precisely where this section stops.

## 4. What moves an option's price — a cricket match {#cricket}

Knowing what a call and a put *are* is the easy part. The hard part — and where beginners get blindsided — is why the **premium** (the option's price) leaps around the way it does. The clearest way to feel it is to imagine holding a **call or put option on a live T20 run chase** and watching its price flicker up and down after every single ball.

- A **call option** pays out if the chasing team **wins** — it is the bet that the price will *rise*, so it gets dearer as the chase goes well.
- A **put option** pays out if the chase **collapses** — it is the bet that the price will *fall*, so it gets dearer as wickets tumble.

Now watch the option's price as the match unfolds. **Three different forces** tug on it at once — and only the first is the one beginners think about:

- **1 · Which way the game is swinging (the score).** Every ball shifts who is likely to win. A boundary or a flurry of runs makes the chase look easy, so the **call** gets dearer and the **put** gets cheaper. A wicket or a run of dot balls makes a collapse look likely, so the **put** gets dearer and the **call** gets cheaper. Eg: 40 needed off 30 balls with wickets in hand, then a flat six sails over — instantly the call (betting they win) jumps and the put (betting they collapse) sinks. The two move as mirror images.
- **2 · How many overs are left (time decay).** The option is priced not just on the score but on how much *time remains for things to change*. An option backing an outcome that hasn't happened yet quietly loses value with every over that passes — **even if the score doesn't move at all**. Eg: you hold the call and the team needs 50 off 24 balls. An over goes by with just three singles — no wicket, no boundary, nothing — yet your call is now **cheaper**, because six balls of opportunity just disappeared. The clock alone drained it, and it drains fastest in the closing overs.
- **3 · How wild the finish is expected to be (volatility).** The market also prices in how much *drama* it expects from the balls still to come. When fireworks look likely — a famous big-hitter on strike, dew making the ball skid, a short boundary — **both** the call and the put get more expensive, because a violent swing either way is on the cards. When the game goes quiet — two cautious batsmen blocking on a dead pitch — **both** get cheaper. Eg: the dangerous hitter everyone feared gets out and two blockers walk in; the finish suddenly feels predictable, so both get cheaper *even though the score hasn't changed*.

Lined up on a scoreboard, the same event pushes the two options in tell-tale ways:

| What just happened (and the price parallel) | Call option | Put option |
|---|---|---|
| Runs flow — boundary, quick singles *(price rises)* | ↑ dearer | ↓ cheaper |
| Wicket falls — a collapse looks on *(price falls)* | ↓ cheaper | ↑ dearer |
| An over passes, score barely moves *(time ticks away)* | ↓ bleeds | ↓ bleeds |
| Chaos expected — big-hitter in, dew, short ground *(volatility up)* | ↑ dearer | ↑ dearer |
| Game goes quiet — blockers in, dead pitch *(volatility down)* | ↓ cheaper | ↓ cheaper |

The scoreboard reveals the whole trick: the **score** moves the call and the put in *opposite* directions, but the **clock** drains *both* bought options, and a change in **expected drama** lifts or sinks *both* together.

> [!WARNING] Why "I was right and still lost" happens
>
> Here is the trap that catches beginners: you can pick the right side of the match and **still** watch your option lose money. The overs running out (time decay) and the expected drama fading (traders call it a **"volatility crush"**) can drain the premium faster than a slow-building score adds to it. Buy the right side but too early, or buy when everyone expects fireworks that then fizzle, and you lose anyway. Guessing the *direction* right is only one of the three forces — the other two work quietly against the buyer the whole time.

> [!NOTE] And whoever sold you the option?
>
> The person on the other side is the **bookmaker** — the option **writer** from the last section. They pocket your premium the instant you buy, and they keep it every time an option expires worthless — which long-shot options usually do, with time decay quietly on their side. But if a miracle finish lands, the bookmaker is the one who must pay out big. That is the capped-gain, large-risk bargain an option seller signs up for.

## 5. Leverage, the double-edged sword {#leverage}

**Leverage** is the heart of why derivatives are so dangerous. Because you put up only a small margin to control a much larger position, every price move is **magnified** — your gains *and* your losses are multiplied. You can make or lose money very fast, and in some cases lose **more than you put in**.

Eg: Suppose a futures position is worth ₹5,00,000 but you only deposit ₹50,000 as margin. That's roughly **10× leverage**.

- The price moves just **2% up** → the position gains ₹10,000 → that's a **+20%** return on your ₹50,000. Feels amazing.
- The price moves just **2% down** → the position loses ₹10,000 → that's a **−20%** hit to your ₹50,000. Painful.
- A **10% fall** → a ₹50,000 loss → your **entire margin is gone**, and you may owe more.

![Because a small margin controls a position ten times larger, a gentle 2% move in the stock becomes a 20% swing in your money — magnified the same way whether you win or lose.](../assets/img/diagrams/09-futures-and-options-2.svg)

A tiny 2% wobble in the stock became a 20% swing in your money. The same leverage that makes the wins exciting is exactly what makes the losses devastating. The market doesn't have to crash to ruin you — a small move is enough.

## 6. Legit use vs speculation {#hedging}

Derivatives are not evil — they exist for a sensible reason. The problem is *how* most retail traders use them.

- **Hedging** — using a derivative as **insurance** to protect something you already own. Eg: a long-term investor holding a large share portfolio buys put options so that if the market drops, gains on the puts cushion the loss on the shares. This is a real, careful, defensive use.
- **Speculation** — a pure **bet on direction**, with no underlying holding to protect. You buy a contract simply hoping the price goes the way you guessed. This is where **most retail traders operate — and where most of them lose**.

> [!TIP] The honest line
>
> Hedging is using derivatives to *reduce* risk on assets you hold. Speculation is using them to *take on* risk for a quick profit. Most beginners think they're doing the clever thing — but they're almost always speculating.

## 7. Why beginners should stay away {#beginners}

> [!WARNING] The odds are stacked against you
>
> Futures & Options combine four things that quietly work against a beginner: **complexity** (the products are genuinely hard to fully understand), **leverage** (small moves cause big losses, fast), **time-decay** (bought options lose value as expiry nears, even if you're "right" eventually), and **high trading costs** (brokerage, taxes and fees pile up and eat into every trade). Put together, these stack the odds heavily against you.
>
> Remember the SEBI finding: roughly **9 out of 10** individual F&O traders **lost money**. That is not bad luck — it is the structure of the game.

![It isn't bad luck — a SEBI study found roughly 9 in 10 individual F&O traders lost money. That's the structure of the game, not a run of misfortune.](../assets/img/diagrams/09-futures-and-options-3.svg)

If you are genuinely curious and want to learn:

- **Learn deeply first.** Understand margins, expiry, strikes, premiums and time-decay thoroughly before risking a single rupee.
- **Practise on paper.** "Paper trading" means tracking imaginary trades on paper or in a simulator — you learn the mechanics with *zero* real money at stake.
- **Never risk money you can't afford to lose.** Not your savings, not your emergency fund, not borrowed money. Ever.

For most beginners, the smartest move with derivatives is simply: **understand them, then leave them alone.** There is no shame in skipping the riskiest table in the room.
