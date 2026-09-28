---
title: "How to Audit a Google Ads Account: What to Look for First"
description: "A practical framework for auditing a Google Ads account — from conversion tracking to campaign structure to wasted spend. Know what's broken before you build anything new."
publishDate: 2026-09-01
tags: ["Google Ads", "Paid Marketing", "Analytics"]
faq:
  - q: "What should I check first when auditing a Google Ads account?"
    a: "Start with conversion tracking. If conversion tracking is broken or misconfigured, every metric in the account is suspect and the algorithm is optimizing toward the wrong thing. Verify conversions are firing, that you're tracking the right events, and that you have no duplicate tags before touching bids or budgets."
  - q: "How many keywords should an ad group have in Google Ads?"
    a: "Aim for 15 to 20 keywords per ad group at most. Tighter thematic grouping improves ad relevance and Quality Score. Ad groups with too many keywords usually have ad copy that doesn't closely match all of them, which hurts expected CTR and Ad Rank."
  - q: "What does below-average Quality Score mean in Google Ads?"
    a: "Below-average Quality Score on any component — expected CTR, ad relevance, or landing page experience — is a signal worth addressing. Low expected CTR means ad copy isn't matching user intent. Low ad relevance means keywords and copy aren't thematically tight. Low landing page experience usually means the page is slow, not mobile-friendly, or doesn't match what the ad promised."
  - q: "What is the search terms report in Google Ads?"
    a: "The search terms report shows the actual queries that triggered your ads, not just the keywords you're bidding on. It's one of the most useful views in Google Ads for finding irrelevant queries to add as negative keywords, high-spend zero-conversion terms to pause, and converting queries to add as exact match keywords."
---

Most Google Ads accounts accumulate problems over time. Campaigns get added, budgets get shuffled, old ad groups stick around, and nobody goes back to check whether the conversion tracking still works. Before you scale spend or change bidding strategies, you need to know what you're actually working with.

This is the framework used at the start of every paid marketing engagement.

## What should you check first in a Google Ads audit?

Everything else in the account depends on conversion tracking. If it's broken or misconfigured, the algorithm is optimizing toward the wrong thing and every metric in the account is suspect.

Check:
- Are conversions firing? Go to Tools > Conversions and look for recent activity. A conversion action with zero recent conversions on a live campaign is a red flag.
- Are you counting the right events? "Session started" and "page view" are not conversions. If those are set as primary conversions, the account is bidding toward traffic, not outcomes.
- Are conversions duplicated? Multiple tags firing on the same thank-you page inflate conversion counts and make ROAS look better than it is.
- Is the attribution window appropriate? The default is 30 days for clicks. For long sales cycles, extend it. For impulse purchases, shorten it.

Get this right before touching anything else.

## What makes a well-structured Google Ads campaign?

Poor structure leads to wasted spend and poor Quality Scores. Look for:

**Too many keywords per ad group.** If an ad group has more than 15 to 20 keywords, the ad copy probably isn't closely matched to all of them. Tight thematic grouping is better.

**Broad match without audience layering.** Broad match can work well, but not without audience signals. Check whether Smart Bidding has enough conversion data to use it effectively (minimum 30 to 50 conversions per month per campaign is a reasonable threshold).

**Conflicting campaigns.** Multiple campaigns bidding on the same or overlapping keywords create internal auction competition and inflate your own CPCs.

**Ad groups with no traffic.** If an ad group hasn't triggered impressions in 90 days, pause it. Dormant ad groups don't hurt performance directly, but they signal an account that hasn't been maintained.

## How do you use the search terms report?

The search terms report is the most useful view in Google Ads. It shows what actual queries triggered your ads.

Look for:
- Irrelevant queries eating budget. Add these as negative keywords immediately.
- High-spend, zero-conversion terms. These are often brand-adjacent queries that attract the wrong audience.
- Converting queries that aren't in your keyword list. Add them as exact match to capture them intentionally.

Spend at least 30 minutes in this report before touching bids or budgets.

## Which bidding strategy should you use?

The right bidding strategy depends on conversion volume. Broadly:
- Under 30 conversions/month per campaign: Maximize Conversions or manual CPC. Smart Bidding doesn't have enough data to work.
- 30 to 100 conversions/month: Target CPA or Target ROAS can work, but set targets conservatively.
- 100+ conversions/month: Smart Bidding works well. Set a Target ROAS based on actual business economics, not wishful thinking.

Check whether the current tROAS or tCPA targets are achievable. If Google is consistently missing targets by more than 20%, the targets are set too aggressively and the algorithm is throttling reach to hit them. For Performance Max campaigns specifically, see [why PMAX campaigns underperform](/blog/pmax-not-converting).

## What do Quality Score components tell you?

Quality Score isn't a number you optimize directly, but its components tell you where the account has problems:

**Expected CTR below average:** Ad copy isn't matching user intent. Rewrite the headlines.

**Ad relevance below average:** Keywords and ad copy aren't thematically tight. Restructure the ad group.

**Landing page experience below average:** The page is slow, not mobile-friendly, or doesn't match what the ad promised. This one often requires work outside the ad account.

## What should a Google Ads audit produce?

After this review, you should know:
1. Whether conversion tracking is reliable
2. Which campaigns are wasting the most budget
3. Where the biggest structural problems are
4. What the priority order of fixes should be

An audit isn't the end of the work. It's the foundation. Nothing built on top of broken tracking or poor structure will perform the way you expect it to. Once tracking is clean, make sure the revenue you're attributing to the account reflects [what you're actually seeing in your books](/blog/google-ads-roas-truth) — platform numbers almost always overstate real ROAS.

---

If you're working through a Google Ads audit and want a second opinion on what you're seeing, [get in touch](/#contact). This is one of the first things d2b2 does in every paid marketing engagement.
