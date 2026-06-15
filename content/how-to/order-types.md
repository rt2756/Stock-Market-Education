# Order Types Explained

When you buy or sell a share, you also choose *how* the order is placed — and that choice decides whether you control the price or just get filled fast.

## 1. Why order types matter {#why}

Most beginners think trading is just two buttons: **Buy** and **Sell**. But there's a second decision hiding behind those buttons — *how* you want the order placed. That's the **order type**.

Every order type is really about one trade-off:

- **Do you want to get filled for sure** — even if the exact price is a little uncertain?
- **Or do you want to control the price** — even if that means the trade might not happen at all?

You usually can't have both at once. Understanding the main order types lets you pick the right one for the situation, instead of clicking blindly and getting a nasty surprise.

## 2. Market order {#market}

A **market order** says: "Buy (or sell) this *right now*, at whatever the best available price is." It doesn't wait. It grabs the best price currently on offer in the market and executes almost instantly.

The upside is speed and certainty of getting done — a market order **almost always fills**. The catch is that the **exact price isn't guaranteed**. By the time your order reaches the exchange, the price may have moved a touch. This little gap between the price you saw and the price you got is called **slippage**, and it's worst in fast-moving or thinly traded (low-volume) stocks.

> [!NOTE] Eg:
>
> You see a share quoted at ₹500 and place a **market** buy order. The market is busy and by the time it executes you actually pay ₹501.50. You got filled instantly — but slightly above the price you spotted.

## 3. Limit order {#limit}

A **limit order** flips the priority. Here *you* set the exact price you're willing to accept, and the order only executes **at that price or better** — never worse.

- A **buy limit** at ₹495 means: buy only at ₹495 or lower.
- A **sell limit** at ₹510 means: sell only at ₹510 or higher.

So the **price is guaranteed**, but the **fill is not** — if the share never reaches your price, the order simply waits, and may not execute at all. That's a fair trade for the control you get, which is why a limit order is the **best default for beginners**.

> [!TIP] Eg:
>
> A share is at ₹500 but you only want it at ₹495. You place a **limit** buy at ₹495. If the price dips to ₹495 (or lower), you're filled at ₹495 or better. If it never falls that far, nothing happens — and you've avoided overpaying.

## 4. Stop-loss order {#stop-loss}

A **stop-loss order** is your safety net. It automatically sells (or buys) once the price hits a level you set in advance — called the **trigger** — so a small loss doesn't quietly grow into a big one while you're not watching.

You'll usually see two flavours:

| Type | What it does |
|---|---|
| **SL** (stop-loss limit) | Once the trigger is hit, it places a *limit* order at a price you set. Price is controlled, but the fill isn't guaranteed. |
| **SL-M** (stop-loss market) | Once the trigger is hit, it places a *market* order. The fill is near-certain, but the exact exit price isn't. |

> [!NOTE] Eg:
>
> You bought a share at ₹100. To cap your downside, you place a **stop-loss with a trigger at ₹90**. If the price falls to ₹90, the stop-loss fires and sells automatically — limiting your loss to roughly ₹10 a share instead of letting it slide further.

## 5. A couple more {#more}

Two others you'll bump into on most Indian broker apps:

- **GTT (Good-Till-Triggered):** a long-standing order that patiently waits *days or even months* for the price you want, instead of expiring at the end of the day.
- **AMO (After-Market Order):** an order you place when the market is *closed*; it simply queues up and is sent to the exchange when trading opens next.

## 6. Quick comparison {#compare}

Here's the whole thing on one page:

| Order type | You get… | You give up… |
|---|---|---|
| **Market** | A certain fill (fast) | Control of the exact price |
| **Limit** | A certain price (or better) | Certainty that it fills |
| **Stop-loss** | Automatic protection on a position | (It only acts once your trigger is hit) |

![Same share, three orders: a market order takes the price available now, a limit waits for the exact price you set, and a stop-loss fires automatically to limit a loss.](../assets/img/diagrams/order-types-1.svg)

> [!TIP] Beginner default
>
> When in doubt, use a **limit order**. It guarantees the price you pay or receive, so you're never blindsided by slippage. Reach for market orders only when getting filled *right now* matters more than the exact price.
