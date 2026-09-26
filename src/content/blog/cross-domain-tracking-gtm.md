---
title: "Cross-Domain Tracking in GTM: How to Track Users Across Multiple Domains"
description: "When users move between domains, GA4 loses them by default. Here's how to implement cross-domain tracking in Google Tag Manager so you see the full user journey."
publishDate: 2026-09-08
tags: ["GTM", "GA4", "Tracking", "Analytics"]
---

If your business runs across multiple domains, such as a main site, a booking subdomain, a landing page domain, or a checkout provider, you're almost certainly losing data at every domain transition. By default, GA4 treats each domain as a separate session and a separate user. That means your funnel has invisible breaks in it, and your attribution data is wrong.

Cross-domain tracking fixes this by passing the user's session identifier across domain boundaries, letting GA4 stitch the journey together.

## How cross-domain measurement works in GA4

GA4 uses a client ID stored in a first-party cookie to identify users across sessions. When a user moves between domains, this client ID doesn't travel with them by default. Each domain sets its own cookie and starts a new session.

Cross-domain tracking works by appending a temporary `_gl` parameter to links between domains. When GA4 detects this parameter on the destination domain, it reads the client ID from it and sets the matching cookie, continuing the same session.

The key requirement: both domains must have GA4 tags installed and the `_gl` parameter must be read by the destination domain before the session starts.

## Setting it up in GTM

### Step 1: Update your GA4 Configuration tag

In GTM, open your GA4 Configuration tag (the one with your Measurement ID that fires on all pages). Under Fields to Set, add the `linker.accept_incoming` field with a value of `true` on every domain that should receive cross-domain sessions.

### Step 2: Configure cross-domain domains

In the same tag, go to More Settings > Cross-Domain and add every domain that should be linked. List each domain without `https://`, just the domain and TLD (example: `yourdomain.com`, `checkout.anotherdomain.com`).

When a user clicks a link to any of these domains, GA4 will automatically append the `_gl` parameter.

### Step 3: Verify the configuration

After publishing your GTM container:

1. Navigate to your site and click a link to the secondary domain
2. Check the URL for the `_gl=` parameter in the query string
3. On the destination domain, open DebugView in GA4 (Admin > DebugView) and verify that the session is being recognized as a continuation rather than a new session

A new session on the destination domain means the parameter isn't being read correctly. Common causes: the GA4 tag fires before the `_gl` parameter is processed, or the tag is not present on the first page load of the destination domain.

### Step 4: Check for referral exclusions

If the source domain appears as a referral source in your reports, it means cross-domain tracking isn't working correctly. Add the source domain to your referral exclusion list in GA4: Admin > Data Streams > your stream > More tagging settings > List unwanted referrals.

## Common mistakes

**Only configuring one side.** Cross-domain configuration needs to be set on every domain in the chain, not just the originating domain.

**Missing the first page hit.** The `_gl` parameter only works if it's read before any other GA4 hit fires. If the destination domain fires a page_view before reading the parameter, the session ID won't be captured.

**Confusing subdomains with cross-domain.** Subdomains (blog.yourdomain.com and yourdomain.com) share cookies by default and don't need cross-domain configuration. Cross-domain tracking is only needed when moving between different root domains.

**Using different Measurement IDs.** Cross-domain tracking only works if the same Measurement ID (G-XXXXXXX) is used on both domains. If you use separate GA4 properties, you can't stitch sessions.

## When it's working

When cross-domain tracking is set up correctly:
- Traffic from your main domain won't appear as "referral" in reports from the secondary domain
- User journeys that cross domain boundaries will show as single sessions
- Conversion attribution will correctly credit the original source, not the domain transition

This matters most when your checkout or booking flow lives on a different domain. Without cross-domain tracking, you're likely misattributing a significant portion of your conversions.

---

GTM and GA4 implementation is one of d2b2's core services. If you're seeing broken attribution or unexpected referral traffic, [get in touch](/#contact). This is usually fixable in a single engagement.
