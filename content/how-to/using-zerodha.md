# Using Zerodha (Kite)

A calm tour of what the screens actually mean — so the app feels familiar *before* you place a single order.

> [!NOTE] Why Zerodha here?
>
> We use **Zerodha** as the example because it's India's most-used discount broker, and this whole site already follows [Zerodha Varsity](https://zerodha.com/varsity/). Other apps — Groww, Upstox, Angel One — work the *same* way: same ideas, different buttons. Learn it once here and any app will feel familiar.

## 1. The three Zerodha apps {#family}

Zerodha isn't one app — it's three, each with a different job. Knowing which is which saves a lot of confusion early on.

- **Kite** — where you actually *trade*: see live prices, place orders, and track your holdings. This is the one you'll use most, and the rest of this page is about it.
- **Console** — the back office: detailed *reports*, your overall profit & loss, and tax statements at year-end. You look here to review, not to trade.
- **Coin** — for buying *mutual funds* and setting up SIPs (the slow, steady investing from [Module 5](../modules/05-mutual-funds.html)), separate from share trading.

![Kite is the trading screen, Console is where you review reports and taxes, and Coin is for mutual funds. Most of your time is spent in Kite.](../assets/img/diagrams/using-zerodha-1.svg)

## 2. The Kite screen at a glance {#screen}

Open Kite and it can look busy, but it's really just a few parts:

- **Marketwatch** — your personal watchlist down the left. You *search* for a stock (say RELIANCE or INFY) and add it here so its live price sits in front of you.
- **The chart** — click any stock to see its price chart (the candlesticks from [Module 8](../modules/08-technical-analysis.html)).
- **The order window** — hover or tap a stock and a small **Buy** / **Sell** box pops up. That box is where every trade is placed — so it's worth understanding properly. That's next.

> [!NOTE] See it on Zerodha
>
> Zerodha's own walkthrough has real annotated screenshots of the terminal: [Varsity — The Trading Terminal](https://zerodha.com/varsity/chapter/the-trading-terminal/).

## 3. Placing an order — the Buy/Sell window {#order}

When you tap **Buy** or **Sell**, a small window opens. It looks like a lot of fields, but each one is just answering a plain question:

![Every field answers a plain question: buy or sell, what kind of trade (product), how it should fill (order type), how much and at what price. In Kite the Buy side is blue and Sell is red.](../assets/img/diagrams/using-zerodha-2.svg)

Reading the window top to bottom:

- **① Buy or Sell** — which way you're trading. Buy is shown in blue, Sell in red.
- **② Product type** — is this a trade you'll *keep*, or close the same day? This is the box beginners most often get wrong, so it has its own section below.
- **③ Order type** — *how* the order fills: Market, Limit, SL or SL-M. This site already explains these in full — see [Order Types Explained](order-types.html). (Beginner default: a **Limit** order.)
- **④ Quantity & price** — how many shares, and (for a Limit order) the price you're willing to pay or accept.
- **⑤ Margin required** — the money the trade needs right now. For a normal delivery buy that's the full amount; for intraday or F&O it's a smaller slice (that's [leverage](../modules/09-futures-and-options.html#leverage) — handle with care).
- **⑥ The Buy/Sell button** — swipe or tap to send the order to the exchange.

> [!NOTE] See it on Zerodha
>
> Real screenshots of the live order window: [How to place orders on Kite](https://support.zerodha.com/category/trading-and-markets/charts-and-orders/order/articles/placing-orders-on-kite) and [the order window explained](https://support.zerodha.com/category/trading-and-markets/charts-and-orders/order/articles/kite-app-order-window).

## 4. Product type — CNC vs MIS vs NRML {#product}

These three little tags decide what *kind* of trade you're making. Picking the wrong one is the classic beginner mistake — so go slowly here.

| Tag | Means | Use it when… |
|---|---|---|
| **CNC** CashNCarry | **Delivery** — you buy shares and *keep* them (a day, a year, forever). They sit in your demat. | You're investing in shares to hold. **This is the beginner's setting.** |
| **MIS** Margin Intraday Square-off | **Intraday** — the position is automatically closed the *same day* (around 3:20 pm). Gives extra margin (leverage). | Day-trading only. The leverage cuts both ways — risky for beginners. |
| **NRML** Normal | **Carry-forward** for Futures & Options — hold a derivatives position overnight, up to expiry. | F&O trading. See [Module 9](../modules/09-futures-and-options.html) first — and for the option-specific twists (lots, premiums, the chain), [Options Explained](options-explained.html). |

> [!WARNING] The MIS trap
>
> If you buy with **MIS** by mistake, your broker will **auto-sell it the same afternoon**, whether you wanted to keep it or not — and you'll have paid intraday costs for nothing. When you just want to *own* a share, always choose **CNC**. (You can convert a position from MIS to CNC during the day if you catch it in time.)

> [!NOTE] See it on Zerodha
>
> [What CNC, MIS & NRML mean](https://support.zerodha.com/category/trading-and-markets/charts-and-orders/order/articles/what-does-cnc-mis-and-nrml-mean) · [how to convert MIS ↔ CNC / NRML](https://support.zerodha.com/category/trading-and-markets/product-and-order-types/product/articles/how-to-convert-mis-to-cnc-nrml-and-vice-versa).

## 5. Orders, Positions & Holdings {#tabs}

Along the bottom of Kite are three tabs that confuse almost everyone at first. Here's what each one really shows.

### Orders — today's instruction log

The **Orders** tab is the record of orders you placed *today* and what became of them. An order moves through a few states:

![You place an order; it sits open until the market meets your price, then it's executed and becomes a holding or position — or it's rejected/cancelled and nothing happens.](../assets/img/diagrams/using-zerodha-3.svg)

A **Limit** order can sit as *Open* for a while (it's waiting for your price). A **Market** order usually fills at once. If something's wrong — not enough funds, market closed — it shows as *Rejected*, with the reason.

### Positions vs Holdings — the big one

This is the distinction worth getting straight, because the two look similar but mean different things:

![Positions are live, unsettled trades (intraday and F&O). Holdings are settled shares resting in your demat. A delivery (CNC) buy shows in Positions today and quietly moves to Holdings after T+1 settlement.](../assets/img/diagrams/using-zerodha-4.svg)

- **Positions** = trades still in motion — today's intraday trades and any open Futures & Options. They show a live, wobbling profit/loss (called **M2M**) and need watching.
- **Holdings** = shares that have settled and are simply *yours*. They rest in your demat account until you decide to sell — no daily action needed.

> [!NOTE] See it on Zerodha
>
> Zerodha's guide to the Orders, Positions and Holdings pages (with screenshots): [Updates to the orders, holdings & positions page](https://support.zerodha.com/category/trading-and-markets/general-kite/others-kite/articles/kite-positions-update).

## 6. Funds & your first tiny order {#first}

Before any order goes through, your trading account needs money in it. In Kite that's the **Funds** section — you *add funds* from your linked bank account, and they're available to trade almost instantly. (When you sell, money flows back the other way, reaching your bank in a day or two.)

Once funded, placing your very first trade — exactly as [Module 1](../modules/01-stock-market-basics.html#getting-started) suggested, just to see how it works — looks like this:

1. **Search** for a company you know in the Marketwatch search bar and add it.
2. Tap it and choose **Buy**.
3. Set **Product = CNC** (you want to keep the share), and **Order type = Limit**.
4. Enter **Qty = 1** and a **Price** at or near the current price, then place the order.
5. Check the **Orders** tab — once it's *Executed*, the share appears in **Positions** today and in **Holdings** from the next day.

> [!TIP] Start tiny
>
> One share is plenty for a first go. Watching a real ₹500 move teaches more than ten articles — and keeps the stakes near zero while the buttons are still new. There's no rush. ☕

> [!NOTE] See it on Zerodha
>
> Setting up and funding the account, step by step: [Everything you need to get started with your Zerodha account](https://support.zerodha.com/category/trading-and-markets/trading-faqs/general/articles/everything-you-need-to-know-to-get-started-with-your-zerodha-account).
