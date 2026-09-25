# d2b2 — CLAUDE.md

Project context for Claude Code sessions. Read this before touching anything.

---

## What this is

A personal consulting website for **Danny Byers** (daniel.byers@clairvo.us), doing business as **d2b2**.

- **Brand name:** d2b2 (play on D. Byers + databases + data-driven B2B)
- **Target domain:** `d2b2.app` ($14.20/yr via Cloudflare Registrar — not yet registered as of Sept 2026)
- **Contact email:** `hello@d2b2.app` (Cloudflare Email Routing → personal Gmail, not yet live)
- **Positioning:** Revenue optimization + paid marketing setup for B2B companies. NOT automotive-specific.
- **Services:** Paid Marketing, Revenue Analytics/Data, Marketing Infrastructure (RevOps), SEO/AEO

---

## Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Astro 4.15.0 | `output: 'static'` — zero JS by default |
| Hosting | Cloudflare Pages | Free tier, CI/CD from GitHub |
| Domain | Cloudflare Registrar | `d2b2.app` — not yet purchased |
| Email | Cloudflare Email Routing | Free forwarding, not yet configured |
| Forms | Formspree (planned) | Free tier fine for consulting volume |
| Analytics | None yet | GA4 or Cloudflare Analytics to add later |

Build: `npm run build` → outputs to `dist/`  
Dev: `npm run dev` → localhost:4321  
Build verified clean: 1 page built in 1.26s

---

## Design system

### Vanderbilt palette (hard constraint — do not deviate)
```css
--bg:           #1C1C1C    /* Near-black base */
--surface:      #232323    /* Card/panel */
--surface-2:    #2A2A2A    /* Nested surface */
--gold:         #CFAE70    /* Primary gold */
--gold-bright:  #ECB748    /* Highlight gold */
--gold-deep:    #946E24    /* Deep/shadow gold */
--gold-pale:    rgba(207,174,112,0.09)  /* Subtle fill */
--border:       rgba(207,174,112,0.14) /* Default border */
--border-strong:rgba(207,174,112,0.32) /* Emphasized border */
--text:         #F5F3EF    /* Primary text (cream) */
--text-muted:   #A89F8C    /* Secondary text */
--text-dim:     #65605A    /* Tertiary / labels */
```

Single dark theme — no light mode toggle. This is intentional.

### Typography
- **Display/serif:** Cormorant Garamond (300, 400, 500, 600) — headings
- **Body/sans:** Outfit (300, 400, 500, 600) — body, UI
- **Mono:** JetBrains Mono (400, 500) — logo, labels, code
- Loaded from Google Fonts in `Layout.astro`

### Gold gradient text (hero headline)
```css
.gold-gradient {
  background: linear-gradient(135deg, #B49248 0%, #CFAE70 28%, #ECB748 52%, #CFAE70 72%, #946E24 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Design reference
Modeled after: https://clairvocars.com/cpc-fb/just-clairvo-it/  
Pattern: modular vertical sections, fixed/sticky nav, hero → services → approach → about → contact → footer.

---

## File structure

```
d2b2-site/
├── CLAUDE.md                        ← you are here
├── astro.config.mjs                 ← output: static, site: https://d2b2.app
├── package.json
├── tsconfig.json                    ← path aliases: @components, @layouts, @styles
├── .gitignore
├── public/
│   ├── favicon.svg                  ← black rect + "d2" in gold JetBrains Mono
│   └── robots.txt                   ← Allow all + sitemap ref
└── src/
    ├── layouts/
    │   └── Layout.astro             ← SEO head, OG tags, JSON-LD schema
    ├── pages/
    │   └── index.astro              ← Assembles all components
    ├── styles/
    │   └── global.css               ← All design tokens + shared classes
    └── components/
        ├── Nav.astro                ← Sticky, blur backdrop, mobile-safe
        ├── Hero.astro               ← h1 with .gold-gradient, stats row
        ├── Services.astro           ← 4 service cards (01–04)
        ├── Approach.astro           ← 4-step process (01–04)
        ├── About.astro              ← Two-col: bio + credentials
        ├── Contact.astro            ← Form + contact info (needs wiring)
        └── Footer.astro             ← Dynamic year, gold logo
```

---

## SEO / GEO setup (already in Layout.astro)

- Canonical URL via `Astro.site`
- Full Open Graph + Twitter Card meta
- JSON-LD `Person` schema (`@id: https://d2b2.app/#danny`)
- JSON-LD `ProfessionalService` schema (`@id: https://d2b2.app/#business`)
- serviceType array: Paid Marketing, Revenue Operations, Marketing Analytics, SEO, Answer Engine Optimization
- `robots.txt` with sitemap reference
- Update `astro.config.mjs` `site:` value once domain is live (currently hardcoded to `https://d2b2.app`)

---

## Pending tasks (priority order)

### 1. Git + Cloudflare Pages deployment
```bash
cd d2b2-site
git init
git add .
git commit -m "Initial d2b2 site scaffold"
# Create repo on GitHub (e.g. github.com/dbyers/d2b2-site)
git remote add origin git@github.com:USERNAME/d2b2-site.git
git push -u origin main
```
Then in Cloudflare dashboard:
- Pages → Create project → Connect to Git → select repo
- Build command: `npm run build`
- Output directory: `dist`
- Node version env var: `NODE_VERSION = 20`

### 2. Register d2b2.app domain
- Cloudflare Registrar → $14.20/yr flat (no first-year discount trap)
- Add as custom domain in Cloudflare Pages after DNS propagates

### 3. Cloudflare Email Routing
- Cloudflare → Email → Email Routing
- Add rule: `hello@d2b2.app` → forward to Danny's personal Gmail
- Free, no Google Workspace needed

### 4. Wire up contact form (Formspree — easiest path)
In `Contact.astro`, replace the `<form>` tag and the `<script>` block:
```html
<!-- Replace action with your Formspree ID after signing up at formspree.io -->
<form class="form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Then remove the entire `<script>` block (Formspree handles redirect/success natively).
Or keep the script and use Formspree's AJAX API for a smoother UX — their docs have a copy-paste example.

### 5. Hero stats — fill in real numbers
Currently placeholders in `Hero.astro`. Update with real figures:
- Years of experience (currently "3+")
- Number of service areas (currently "4")  
- Location label (currently "SD")
- Consider: ad spend managed, number of clients, revenue impact — whatever Danny can verify

### 6. Analytics
Options: Cloudflare Web Analytics (free, privacy-friendly, no cookie banner needed) or GA4.
Cloudflare: add one `<script>` tag in `Layout.astro` head — get the tag from Cloudflare dashboard after connecting the domain.

### 7. Open Solo 401k (separate from site — deadline Dec 31, 2026)
Fidelity Self-Employed 401k. Must open before year-end even if contributions come later.

### 8. Create LinkedIn for d2b2
Set up a LinkedIn company page for d2b2. Establishes professional presence, creates a backlink to d2b2.co, and is a common trust signal for prospective clients vetting a consultant.

---

## Key decisions already made (don't relitigate)

- **Single dark theme** — no light/dark toggle. Vanderbilt Black is the brand ground. Intentional.
- **d2b2.app TLD** — chosen over .co ($30), .dev ($12.20), .us ($6.50). Best value + right signal.
- **.app not .consulting** — "d2b2" stands alone; "consulting" suffix was dropped as unnecessary.
- **Astro static** — no SSR, no edge functions needed for a consulting site.
- **Formspree over Pages Functions** — simpler, no serverless code to maintain.
- **No CMS** — content is simple enough to edit directly in .astro files.

---

## Content notes

- Danny is based in **San Diego, CA**
- St. John's College, class of **2018**
- Background: RevOps + Paid Growth (Google Ads, Meta Ads, HubSpot, GA4/GTM, SQL)
- Current primary client: **Clairvo** (automotive marketplace — partners.carwiser.com)
- d2b2 is positioned as general B2B, NOT automotive-specific
- Project-based engagements only (not retainer/FTE)

---

## Constraints

- Before overwriting any existing file, show what will change and wait for confirmation
- Never expose data externally
- Accuracy over completeness — flag uncertainty explicitly
- When in doubt about content (stats, claims), leave a TODO comment rather than fabricating
