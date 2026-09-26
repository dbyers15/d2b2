---
title: "GA4 Setup for Small Business: The Minimum Viable Configuration"
description: "GA4 has a lot of features. Most small businesses need about 20% of them. Here's what to configure first to get reliable data without over-engineering your analytics."
publishDate: 2026-09-19
tags: ["GA4", "Analytics", "GTM"]
---

GA4 replaced Universal Analytics in 2024, and many small businesses are still running an underconfigured version that's collecting data but not the data they need. This guide covers the minimum setup required to get reliable, actionable information from GA4.

## 1. Set up your data stream and verify the tag is firing

Start in GA4 Admin > Data Streams. Create a web data stream for your domain. You'll get a Measurement ID (G-XXXXXXXXX).

Install this tag either directly in your site's `<head>` or through Google Tag Manager (GTM is strongly recommended if you plan to add any other tracking later).

Verify the tag is firing: open your site in Chrome with GA4's DebugView active (Admin > DebugView). You should see events appearing in real time. If you see nothing, the tag isn't installed correctly.

## 2. Enable enhanced measurement selectively

GA4's enhanced measurement automatically tracks scrolls, outbound clicks, video views, file downloads, and form interactions. The default setting is to enable all of these.

Turn off what you don't need. Scroll events in particular generate enormous volumes of data without proportional insight for most small businesses. Keep page_view, outbound clicks, and any form interactions relevant to your goals.

## 3. Define and configure your conversion events

GA4 tracks events automatically (page_view, session_start, first_visit, etc.) but doesn't know which ones matter to your business. You need to mark specific events as conversions.

In Admin > Events, find or create the events that represent meaningful actions:
- Form submission confirmation page view (create an event triggered by a specific page path)
- Thank-you page view after purchase
- Phone number click
- Booking confirmation

Mark these as conversions by toggling the "Mark as conversion" option. These become your primary success metrics and feed into bidding algorithms in Google Ads if you've linked the accounts.

## 4. Link Google Ads and Search Console

In GA4 Admin > Product Links:
- Link Google Ads to import GA4 conversions into Google Ads and see ad performance data in GA4
- Link Search Console to see organic search query data in GA4

Both take under 5 minutes and significantly expand what you can see without leaving GA4.

## 5. Set up channel groupings correctly

GA4 tries to automatically classify traffic sources, but the defaults are imperfect. Check your traffic source reports (Reports > Acquisition > Traffic Acquisition) for sessions attributed to "(not set)" or misclassified sources.

The fix is consistent UTM parameters on every paid and promotional link. When every campaign uses `utm_source`, `utm_medium`, and `utm_campaign`, GA4 can correctly classify the traffic and you have accurate channel attribution.

## 6. Build one report you'll actually use

GA4's Explore section lets you build custom reports. Create one with:
- Rows: Session source / medium
- Columns: Sessions, Conversions, Conversion rate

This gives you a weekly view of which channels are driving conversions. Save it. Check it weekly.

## What not to do

**Don't import all Universal Analytics goals as GA4 conversions.** UA goals often tracked page views and session depth, which aren't meaningful conversions. Start fresh with events that represent actual business outcomes.

**Don't enable Google Signals immediately.** Google Signals enables cross-device tracking but introduces data thresholding that suppresses rows in reports with low traffic. For small businesses, this causes more confusion than insight. Enable it only when you have traffic volume to support it.

**Don't use GA4 as your only analytics source.** GA4 samples data in Explore reports once you exceed certain event thresholds, and privacy changes have increased the percentage of unattributable traffic. Supplement GA4 with server-side data (CRM, order management, email platform) for a complete picture.

## The 80/20 of GA4

Most of the decisions a small business needs to make can be answered by three reports:
1. Which pages are driving the most engagement?
2. Which channels are driving conversions?
3. How is conversion volume trending over time?

Configure GA4 to answer these three questions reliably before adding complexity.

---

d2b2 implements GA4 and GTM configurations for businesses that need clean, reliable tracking. If your GA4 data doesn't feel trustworthy, [let's fix it](/#contact).
