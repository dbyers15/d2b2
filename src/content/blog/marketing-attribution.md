---
title: "Marketing Attribution 101: How to Know What's Actually Driving Revenue"
description: "Attribution tells you which marketing activities are responsible for revenue. Here's how different attribution models work and which one to use for your business."
publishDate: 2026-09-17
tags: ["Analytics", "Attribution", "GA4"]
faq:
  - q: "What is marketing attribution?"
    a: "Marketing attribution is the practice of assigning credit to the marketing touchpoints that contributed to a sale or conversion. It answers the question: when a customer buys, which channels, campaigns, or interactions deserve credit for that outcome?"
  - q: "Which attribution model should I use for my business?"
    a: "For most small and mid-size businesses, use data-driven attribution in GA4 if you have 1,000 or more conversions per month. Otherwise, use linear attribution as the default. It's not perfect, but it doesn't systematically mislead you the way last-click attribution does."
  - q: "Why is last-click attribution misleading?"
    a: "Last-click attribution gives 100% of conversion credit to the final touchpoint before purchase. This systematically undervalues awareness channels like organic content, social, and display ads, and overvalues direct traffic and branded search — which often just capture demand that other channels created."
  - q: "How do I build a practical marketing attribution framework?"
    a: "Start by defining your conversion event clearly. Then implement consistent UTM parameters on every paid link and email. Connect GA4 to your CRM so you can trace leads to closed revenue by channel. Run a quarterly review comparing ad platform attribution to actual closed revenue in your source of truth."
---

Marketing attribution answers one question: when a customer buys, which touchpoints get credit for the sale?

The answer seems like it should be simple. It isn't. Most businesses are running attribution models that give them systematically wrong answers, and making budget decisions based on those answers.

## Why is marketing attribution so difficult?

Most customers touch your brand multiple times before buying. They might find you through organic search, see a retargeting ad, read a blog post, get an email, and then convert after clicking a branded search ad. Seven interactions, one conversion.

Which one caused the sale? The honest answer is all of them and none of them. But your ad platforms, CRM, and analytics tools each claim credit for the ones they can see, which usually means they're all overcounting.

## What are the main attribution models?

**Last-click attribution** gives 100% of credit to the last touchpoint before conversion. It's the default in many systems. It systematically undervalues awareness and mid-funnel activities (organic content, social, display) and overvalues direct traffic and branded search.

**First-click attribution** gives 100% of credit to the first touchpoint. It overvalues top-of-funnel channels and undervalues the channels that actually close customers.

**Linear attribution** splits credit evenly across all touchpoints. It's more accurate than last-click or first-click but treats a brief retargeting impression the same as a long blog post read.

**Time-decay attribution** gives more credit to touchpoints closer to the conversion. It's better for short sales cycles but may still undervalue awareness channels.

**Data-driven attribution** (available in GA4 and Google Ads for accounts with sufficient data) uses statistical modeling to assign credit based on observed patterns across many user journeys. It's the most accurate model available in standard tools, but requires minimum conversion volume to work and operates as a black box.

## Which attribution model should I use?

For most small and mid-size businesses, the practical recommendation is: use data-driven attribution in GA4 if you have the volume (typically 1,000 or more conversions per month across your property). Otherwise, use linear attribution as the default. It's not perfect but it doesn't systematically mislead you the way last-click does.

More importantly, don't rely on a single attribution model for strategic decisions. Use your ad platform data for within-platform optimization, and make cross-channel budget decisions using blended metrics from your source of truth (CRM, payment processor, order data). For a deeper look at why platform numbers diverge from actual revenue, see [why you shouldn't trust Google's ROAS numbers](/blog/google-ads-roas-truth).

## How do I build a practical attribution framework?

**Step 1: Define your conversion event clearly.** Is a "conversion" a lead form submission? A qualified sales call booked? A closed deal? The answer changes everything downstream.

**Step 2: Implement consistent UTM parameters.** Every paid link, every email, every social post should have UTM parameters. Without them, you can't see channel attribution in GA4.

**Step 3: Connect GA4 to your CRM.** GA4 can tell you where traffic comes from. Your CRM can tell you which leads actually closed. Connecting them, even manually through UTM capture in your forms, lets you see lead-to-close rates by channel. That's far more useful than conversion rates alone. If your funnel runs across multiple domains, make sure [cross-domain tracking is set up correctly](/blog/cross-domain-tracking-gtm) first — otherwise GA4 loses the session at domain boundaries.

**Step 4: Run a quarterly attribution review.** Look at revenue by channel using your source of truth, compare to ad platform reported metrics, and understand the gaps. This review should take one hour and should directly inform your next quarter's budget allocation.

## What doesn't attribution tell you?

Attribution models describe correlation, not causation. A channel that appears in many customer journeys may be riding the wave of demand rather than creating it. Channels that work well together often can't be evaluated independently.

The best supplement to attribution modeling is incrementality testing: measuring whether removing a channel actually reduces conversions. This is harder to set up but gives you much more reliable signal.

---

d2b2 builds attribution frameworks for small businesses and growth-stage companies. If you want to actually understand where your customers are coming from, [let's talk](/#contact).
