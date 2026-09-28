---
title: "Why You Shouldn't Trust Google's ROAS Numbers (And What to Use Instead)"
description: "Google Ads almost always reports higher ROAS than businesses actually see in their books. Here's why platform-reported numbers are inflated and how to measure what's really happening."
publishDate: 2026-09-15
tags: ["Google Ads", "Analytics", "Attribution"]
faq:
  - q: "Why does Google Ads report higher ROAS than I actually see?"
    a: "Google Ads ROAS is inflated by several factors: cross-channel credit claims (Google, Facebook, and email each claim the same conversion), view-through attribution (conversions attributed to users who only saw an ad, not clicked it), modeled conversions that estimate rather than measure, and attribution model differences between the platform and your CRM. Each of these systematically overstates Google's contribution to revenue."
  - q: "What is view-through attribution in Google Ads?"
    a: "View-through attribution counts a conversion if a user saw your ad (without clicking it) and then converted within a set window, often 1 to 7 days. This means a user who sees your Display ad and then converts from a direct visit or another channel will show up in Google's conversion count. It dramatically inflates apparent ROAS for upper-funnel campaigns."
  - q: "What is blended ROAS and why does it matter?"
    a: "Blended ROAS is total revenue divided by total ad spend across all channels. Unlike individual platform ROAS numbers, it can't be inflated by cross-channel attribution overlap. If blended ROAS is significantly lower than what any individual platform reports, you're double-counting conversions. Blended ROAS is the most reliable metric for cross-channel budget decisions."
  - q: "How do I measure true Google Ads performance?"
    a: "Compare Google's reported revenue to actual closed revenue from your CRM, payment processor, or order management system for the same period. The gap shows how inflated the attribution is. Then calculate blended ROAS (total revenue / total ad spend). Use lead-to-close rate by source to evaluate lead quality beyond raw volume. Make budget decisions based on these metrics rather than platform dashboards."
---

Google Ads will almost always report better ROAS than you actually experience. This isn't a bug. It's how platform attribution works. Understanding the gap is essential for making good decisions about where to put your budget.

## Why does Google Ads report inflated ROAS?

**Cross-channel credit claims.** A user might click a Google ad, then see a Facebook ad, then convert from an email. Google claims the conversion. Facebook claims the conversion. Your email platform claims the conversion. Add up the ROAS from all three platforms and you'll typically see 3 to 5 times more revenue "attributed" than you actually generated. Each platform is counting the same conversion.

**View-through attribution.** Many campaigns include view-through conversions by default, counting conversions that happen within a window (often 1 to 7 days) after someone saw (not clicked) your ad. A user who sees your Google Display ad and then converts from a direct visit will show up in Google's conversion count. This dramatically inflates apparent ROAS for upper-funnel campaigns.

**Last-click vs. data-driven.** If your Google Ads account uses data-driven attribution but you're comparing the numbers to revenue in your CRM or Shopify, you're comparing different attribution models. The numbers won't match. For a deeper look at how different attribution approaches produce different answers, see [marketing attribution 101](/blog/marketing-attribution).

**Modeled conversions.** Google increasingly uses modeled conversions to fill in gaps created by cookie consent requirements and iOS privacy changes. Modeled conversions are estimates, not actual tracked conversions. They inflate reported totals, particularly for broad-match and PMAX campaigns.

## What should you use instead of Google's ROAS metric?

**Revenue from your source of truth.** Your CRM, your payment processor, your order management system. Whatever counts actual closed revenue is your benchmark. Compare Google's reported revenue to actual closed revenue in the same period. The gap tells you how inflated the attribution is.

**Lead quality metrics, not just volume.** If you're generating leads rather than direct sales, track conversion rate from ad-generated lead to closed deal. A campaign with a 20% lower lead-to-close rate is generating lower-quality leads, which won't show up in Google's ROAS metric.

**Incrementality.** The real question is: would these customers have bought anyway without the ad? Incrementality testing — pausing campaigns in geographic regions or for audience segments, then comparing conversion rates — gives you a view of actual lift rather than correlation. It's more work but much more accurate.

**Blended ROAS across all channels.** Take your total revenue divided by total ad spend across all channels. This number doesn't inflate. It just reflects business reality. If blended ROAS is significantly lower than any individual platform's reported ROAS, you're double-counting.

## How do you measure true Google Ads performance?

Start every reporting conversation with the question: what does our actual closed revenue look like this month, and what did we spend to get it?

From there:
- Calculate blended ROAS (total revenue / total ad spend)
- Compare to each platform's reported ROAS
- Understand the gap and what's driving it
- Make budget decisions based on blended metrics and lead quality, not platform dashboards

Google Ads reported ROAS is useful for within-platform optimization. It's a poor basis for strategic budget decisions. Before drawing conclusions from reported numbers, make sure your conversion tracking is clean — a [Google Ads account audit](/blog/google-ads-audit) will surface any double-counting or misconfigured conversion actions that are artificially inflating what you see.

---

d2b2 builds attribution frameworks that connect ad platform data to actual revenue. If your reported numbers and your books don't match, [that's a solvable problem](/#contact).
