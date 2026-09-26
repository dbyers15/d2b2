---
title: "SQL for Marketers: Five Queries Every Growth Team Should Know"
description: "SQL lets marketers get answers from their data without waiting on an analyst. Here are five practical queries that answer the questions marketing teams ask most."
publishDate: 2026-09-24
tags: ["SQL", "Analytics", "Data Analysis"]
---

Most marketing decisions involve questions that your analytics dashboards almost answer. You can see how many leads you generated, but not which campaigns produced leads that actually closed. You can see traffic by channel, but not average order value by channel. The extra step to get from "almost" to "actually" is usually a SQL query.

SQL isn't hard to learn at the level marketers need. Here are five queries that answer common marketing questions.

## Before you start: connect to your data

You need access to a database or data warehouse to run SQL. Common setups for marketing teams:

- **BigQuery** (Google Cloud): GA4 exports data to BigQuery. Free for moderate usage.
- **Redshift or Snowflake**: enterprise data warehouses, often used by companies with BI teams.
- **HubSpot or Salesforce direct query**: some CRMs allow SQL access to their data models.
- **Metabase or Looker Studio**: these provide SQL access to connected data sources with friendlier interfaces.

The examples below assume a standard database with a `leads` table containing columns for `id`, `created_at`, `source`, `status`, `deal_value`, and `closed_at`.

## Query 1: Leads by source this month

```sql
SELECT
  source,
  COUNT(*) AS lead_count
FROM leads
WHERE created_at >= DATE_TRUNC('month', CURRENT_DATE)
GROUP BY source
ORDER BY lead_count DESC;
```

This tells you how many leads came from each channel in the current month. Replace `DATE_TRUNC('month', CURRENT_DATE)` with a specific date range if needed: `WHERE created_at BETWEEN '2026-09-01' AND '2026-09-30'`.

## Query 2: Close rate by lead source

```sql
SELECT
  source,
  COUNT(*) AS total_leads,
  SUM(CASE WHEN status = 'closed_won' THEN 1 ELSE 0 END) AS closed_leads,
  ROUND(
    100.0 * SUM(CASE WHEN status = 'closed_won' THEN 1 ELSE 0 END) / COUNT(*),
    1
  ) AS close_rate_pct
FROM leads
GROUP BY source
ORDER BY close_rate_pct DESC;
```

This is one of the most important queries for marketing teams. A channel with a high lead count but low close rate is generating unqualified leads. A channel with a low lead count but high close rate may deserve more budget.

## Query 3: Revenue by source

```sql
SELECT
  source,
  SUM(deal_value) AS total_revenue,
  AVG(deal_value) AS avg_deal_value,
  COUNT(*) AS deals_closed
FROM leads
WHERE status = 'closed_won'
GROUP BY source
ORDER BY total_revenue DESC;
```

This shows actual revenue contribution by channel, not just lead volume or even close rate, but dollars. A channel that drives high-value deals is worth more than its lead count suggests.

## Query 4: Average time to close by source

```sql
SELECT
  source,
  AVG(
    DATE_PART('day', closed_at - created_at)
  ) AS avg_days_to_close
FROM leads
WHERE status = 'closed_won'
  AND closed_at IS NOT NULL
GROUP BY source
ORDER BY avg_days_to_close ASC;
```

Sales cycle length varies by channel. Referrals often close faster than cold outbound. Paid search leads may close faster than organic. This query surfaces those patterns, which matters for revenue forecasting and understanding how different channels contribute at different points in the pipeline.

## Query 5: Lead volume trend by month

```sql
SELECT
  DATE_TRUNC('month', created_at) AS month,
  source,
  COUNT(*) AS leads
FROM leads
WHERE created_at >= CURRENT_DATE - INTERVAL '6 months'
GROUP BY month, source
ORDER BY month, leads DESC;
```

This produces a month-by-month breakdown of leads by source for the last six months. When exported to a spreadsheet or visualization tool, it makes trends visible: which channels are growing, which are declining, and whether overall volume is tracking in the right direction.

## Getting more out of SQL

These five queries assume a simple data model. Real marketing databases are usually more complex: leads join to accounts, accounts join to deals, deals join to revenue line items. But the logic is the same. Define what you're counting, group by the dimension you care about, filter for the time period you want.

The highest-value SQL skill for marketers isn't writing complex queries. It's knowing what question to ask and how to translate it into the simple operations of SELECT, FROM, WHERE, and GROUP BY.

---

d2b2 builds SQL-based reporting and analytics for marketing teams. If you have data but can't get answers from it, [let's talk](/#contact).
