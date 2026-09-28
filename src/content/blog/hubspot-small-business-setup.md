---
title: "HubSpot for Small Business: What to Set Up First"
description: "HubSpot has hundreds of features. Most small businesses need about ten of them. Here's what to configure first to get value quickly without building a system you can't maintain."
publishDate: 2026-09-12
tags: ["HubSpot", "CRM", "Marketing Automation", "RevOps"]
faq:
  - q: "What should I set up first in HubSpot?"
    a: "Before building anything in HubSpot, map your actual sales pipeline stages on paper. Then connect your email, install the tracking code on your website, and create forms for your key conversion points. In that order. Most HubSpot setups fail because automation gets built before the basic data infrastructure is in place."
  - q: "How many pipeline stages should a small business have in HubSpot?"
    a: "Five or fewer well-defined stages that match your actual sales process is almost always better than eight or ten stages where deals pile up at stage two. Each stage should have a clear definition of what makes a deal belong there and what action moves it forward. Build around real behavior, not aspirational behavior."
  - q: "How do I connect HubSpot to my website?"
    a: "Add HubSpot's tracking snippet to your site, either directly in the <head> tag or through Google Tag Manager. This enables contact timeline activity showing which pages contacts have visited, automatic contact creation from form submissions, and traffic source attribution for deals. Without the tracking code, HubSpot is just a contact database."
  - q: "What HubSpot features should I avoid setting up too early?"
    a: "Defer lead scoring until you have 6 months of data to calibrate it. Avoid complex multi-branch workflows before you've seen a simple linear sequence work. Skip custom objects until the standard contacts, companies, and deals structure has been proven insufficient. Predictive analytics requires significant historical data to be useful."
---

HubSpot's free and starter tiers have enough functionality to run a real sales process. The problem most small businesses run into isn't a lack of features. It's setting up too much too fast, building workflows nobody actually uses, and ending up with a CRM that doesn't reflect how the business actually works.

Here's the order that makes sense for most small businesses starting with HubSpot.

## Should you define pipeline stages before building in HubSpot?

Yes — this is the most important decision in HubSpot setup and it happens before you log in.

Default pipeline stages in HubSpot (Appointment Scheduled, Qualified to Buy, etc.) don't match most businesses' real processes. Before creating any deals or contacts, map your actual stages:

- What does a prospect look like at each point in your process?
- What action moves a deal from one stage to the next?
- What's the average time spent in each stage?

Build your pipeline around real behavior, not aspirational behavior. Five clear stages you actually use beats ten stages where deals pile up in stage two.

## Why should you connect email to HubSpot?

HubSpot's value multiplies when it has access to your email. Connect Gmail or Outlook through HubSpot's inbox integration. This lets you:
- Log emails to contact records automatically
- Use email templates from your inbox
- Track opens and clicks

The two-way sync means your CRM doesn't require manual logging for every interaction, which is usually why CRMs fail.

## How does the HubSpot tracking code work?

Add HubSpot's tracking snippet to your website (or connect through Google Tag Manager). This enables:
- Contact timeline activity showing which pages contacts have visited
- Form submissions creating contacts automatically
- Traffic source attribution for deals

Without the tracking code, HubSpot is just a contact database. With it, you have behavioral context for every lead.

## How do you set up HubSpot forms correctly?

Create HubSpot forms for your contact page, any lead magnets, and any places where prospects request information. Keep forms short. Name, email, and one qualifying question is enough to start.

Forms automatically create contacts, trigger workflows, and give you lead source attribution. Replace whatever forms you're currently using on your site with HubSpot forms, or use the HubSpot JavaScript embed to capture submissions from third-party form tools.

## What is the right first HubSpot workflow to build?

The most common HubSpot mistake is building complex automation before you know what you need to automate. Start with one workflow:

A basic lead nurture sequence:
- Trigger: contact submits a form
- Action: send an immediate confirmation email
- Action: wait 2 days, send a relevant piece of content
- Action: wait 3 days, send a direct outreach email from the salesperson

This single workflow handles follow-up consistently, without manual effort, for every new lead. It's the foundation. Add more automation only after you've seen this one work.

## How do you configure HubSpot deal properties for reporting?

Out of the box, HubSpot's deal properties include Close Date, Amount, and Deal Stage. For useful reporting, add:
- Lead source (where did this deal originate?)
- Deal type (new business vs. existing client)
- Close reason when deals are lost

These properties make your pipeline reports meaningful rather than just showing you how many deals are open. This is also what enables you to later run [SQL queries that compare close rate and revenue by lead source](/blog/sql-for-marketers) — without consistent source data in the CRM, those queries won't produce reliable answers.

## What reports should you build in HubSpot?

HubSpot's reporting module can produce dozens of charts. Build one dashboard with five to eight reports:
- Open deals by stage
- New deals created this month vs. last month
- Close rate
- Average deal value
- Lead source breakdown

Pin this dashboard to your home view. If you're not looking at your HubSpot dashboard weekly, you've probably built too much and maintained too little.

## What HubSpot features should you set up later?

These are features that seem important early but should wait until you have baseline operations running:

**Lead scoring** requires enough lead volume to calibrate. Build this after 6 months of data.

**Complex multi-branch workflows**: start with linear sequences.

**Custom objects**: the standard contacts/companies/deals structure handles most SMB use cases.

**Predictive analytics**: only useful once you have significant historical data.

For a broader view of how HubSpot fits into your revenue operations setup, the [RevOps explainer](/blog/what-is-revops) covers the foundational concepts that determine whether your CRM configuration will actually stick.

---

d2b2 sets up HubSpot for small businesses and growth-stage companies as part of marketing infrastructure engagements. If you're starting from scratch or cleaning up a system that's gotten out of control, [get in touch](/#contact).
