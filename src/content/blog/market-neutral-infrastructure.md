---
title: "FINDAC, a sleeping giant"
description: "Yes"
pubDate: 2026-03-03
heroImage: ../../assets/blog/market-microstructure.svg
heroImageAlt: "Abstract market microstructure illustration with bid and ask ladders."
tags:
  - Research
  - Execution
featured: true
---

The fastest way to overstate a strategy is to treat execution as a post-processing step. At QUARCC, we push the opposite view: microstructure belongs in the hypothesis, not just in the simulator. A spread, a queue position, or a liquidity drought can completely change whether a signal is still worth trading.

That mindset shapes how we teach and how we review student work. Before a paper portfolio ever receives capital, we ask a sequence of practical questions. How fragile is the edge to transaction costs? What assumptions are hidden in the fill model? Which market regimes produce the most slippage? The point is not to eliminate uncertainty. It is to make the uncertainty visible early enough to act on it.

The club benefits from treating research notes like operating documents rather than polished narratives. When members record the assumptions behind position sizing, rebalancing cadence, and execution constraints, it becomes much easier for another team to challenge or extend the work. Good quant process compounds because it is inspectable.

In practice, that means our portfolio discussions focus on implementation detail as much as on factor design. The cleanest backtest in the room is usually not the most useful one. The useful one is the version that survives contact with fees, turnover, and liquidity.
