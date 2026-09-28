---
title: "GA4 Setup for Small Business: The Minimum Viable Configuration"
description: "GA4 has a lot of features. Most small businesses need about 20% of them. Here's what to configure first to get reliable data without over-engineering your analytics."
publishDate: 2026-09-19
tags: ["GA4", "Analytics", "GTM"]
faq:
  - q: "What should I set up first in GA4?"
    a: "Start by creating a data stream, installing the tag (ideally through Google Tag Manager), and verifying it fires correctly using DebugView. Then define and mark your actual conversion events. Everything else — linked accounts, custom reports, channel groupings — is secondary to having reliable conversion data."
  - q: "What events should I mark as conversions in GA4?"
    a: "Mark events as conversions that represent meaningful business outcomes: form submission confirmation page views, thank-you page views after a purchase, phone number clicks, and booking confirmations. Avoid marking session_start, page_view, or scroll events as conversions — these don't represent actual business value and will cause Google Ads to optimize toward the wrong thing."
  - q: "Should I enable Google Signals in GA4?"
    a: "Not immediately for small businesses. Google Signals enables cross-device tracking but introduces data thresholding that suppresses report rows when traffic is low. This causes more confusion than insight until you have significant traffic volume. Enable it later once your GA4 setup is stable and your traffic warrants it."
  - q: "How do I fix (not set) traffic sources in GA4?"
    a: "Traffic attributed to (not set) in GA4 usually means UTM parameters are missing from paid or promotional links. Implement consistent UTM tagging — utm_source, utm_medium, and utm_campaign — on every paid link, email, and social post. This lets GA4 correctly classify the traffic source and gives you accurate channel attribution."
---

GA4 replaced Universal Analytics in 2024, and many small businesses are still running an underconfigured version that's collecting data but not the data they need. This guide covers the minimum setup required to get reliable, actionable information from GA4.

## How do you set up a GA4 data stream?

Start in GA4 Admin > Data Streams. Create a web data stream for your domain. You'll get a Measurement ID (G-XXXXXXXXX).

Install this tag either directly in your site's `<head>` or through Google Tag Manager (GTM is strongly recommended if you plan to add any other tracking later).

Verify the tag is firing: open your site in Chrome with GA4's DebugView active (Admin > DebugView). You should see events appearing in real time. If you see nothing, the tag isn't installed correctly.

## Should you enable GA4 enhanced measurement?

GA4's enhanced measurement automatically tracks scrolls, outbound clicks, video views, file downloads, and form interactions. The default setting is to enable all of these.

Turn off what you don't need. Scroll events in particular generate enormous volumes of data without proportional insight for most small businesses. Keep page_view, outbound clicks, and any form interactions relevant to your goals.

## How do you set up conversion events in GA4?

GA4 tracks events automatically (page_view, session_start, first_visit, etc.) but doesn't know which ones matter to your business. You need to mark specific events as conversions.

In Admin > Events, find or create the events that represent meaningful actions:
- Form submission confirmation page view (create an event triggered by a specific page path)
- Thank-you page view after purchase
- Phone number click
- Booking confirmation

Mark these as conversions by toggling the "Mark as conversion" option. These become your primary success metrics and feed into bidding algorithms in Google Ads if you've linked the accounts.

## Should you link Google Ads and Search Console to GA4?

Yes. In GA4 Admin > Product Links:
- Link Google Ads to import GA4 conversions into Google Ads and see ad performance data in GA4
- Link Search Console to see organic search query data in GA4

Both take under 5 minutes and significantly expand what you can see without leaving GA4.

## How do you fix GA4 channel groupings?

GA4 tries to automatically classify traffic sources, but the defaults are imperfect. Check your traffic source reports (Reports > Acquisition > Traffic Acquisition) for sessions attributed to "(not set)" or misclassified sources.

The fix is consistent UTM parameters on every paid and promotional link. When every campaign uses `utm_source`, `utm_medium`, and `utm_campaign`, GA4 can correctly classify the traffic and you have accurate channel attribution. If your traffic crosses multiple domains before converting, [cross-domain tracking](/blog/cross-domain-tracking-gtm) needs to be configured too — otherwise GA4 attributes the conversion to a direct visit rather than the original source.

## What reports should you build in GA4?

GA4's Explore section lets you build custom reports. Create one with:
- Rows: Session source / medium
- Columns: Sessions, Conversions, Conversion rate

This gives you a weekly view of which channels are driving conversions. Save it. Check it weekly.

## What should you avoid when setting up GA4?

**Don't import all Universal Analytics goals as GA4 conversions.** UA goals often tracked page views and session depth, which aren't meaningful conversions. Start fresh with events that represent actual business outcomes.

**Don't enable Google Signals immediately.** Google Signals enables cross-device tracking but introduces data thresholding that suppresses rows in reports with low traffic. For small businesses, this causes more confusion than insight. Enable it only when you have traffic volume to support it.

**Don't use GA4 as your only analytics source.** GA4 samples data in Explore reports once you exceed certain event thresholds, and privacy changes have increased the percentage of unattributable traffic. Supplement GA4 with server-side data (CRM, order management, email platform) for a complete picture.

## What are the most important GA4 reports for small businesses?

Most of the decisions a small business needs to make can be answered by three reports:
1. Which pages are driving the most engagement?
2. Which channels are driving conversions?
3. How is conversion volume trending over time?

Configure GA4 to answer these three questions reliably before adding complexity. Once you have clean data, connect it to a [Google Ads audit](/blog/google-ads-audit) — accurate GA4 conversion data is the foundation every paid campaign optimization depends on.

---

d2b2 implements GA4 and GTM configurations for businesses that need clean, reliable tracking. If your GA4 data doesn't feel trustworthy, [let's fix it](/#contact).
