# Marketing TODO (noted for after staging sign-off)

Status: the site is **deploy-ready** (static Astro, works on Vercel). SEO/marketing
**foundations are already in place**: unique titles + meta descriptions on every page,
canonical, Open Graph + Twitter cards, JSON-LD schema (Hospital, Physician, FAQ,
Breadcrumb, Blog), sitemap, RSS, robots, strong Core Web Vitals, mobile + WCAG AA,
clear CTAs, trust badges, consent-gated GTM + Meta Pixel, working keyless contact form.

Do these **after the owner verifies the staging deploy**:

## On-site (we can do)
1. **Conversion-event tracking** (highest value). Currently GTM + Meta Pixel only fire
   pageviews. Add events on: appointment/contact form submit (Lead / generate_lead),
   click-to-call (tel: links), WhatsApp click, and Book Appointment button clicks.
   Push to dataLayer + `fbq('track','Lead')`, gated behind cookie consent.
2. **Tighten long meta** - a few descriptions run ~200-290 chars (ideal <=155) and some
   titles exceed ~60 chars; trim for cleaner SERP snippets.
3. **Blog content** - only 1 post exists. Add SEO-targeted articles
   (e.g. "Laser kidney-stone treatment in Dehradun", "When to see a urologist",
   "FESS for chronic sinusitis").
4. **Per-page Open Graph images** - currently one shared social card.
5. **Live Google reviews** - paste a widget embed into `integrations.reviewsWidgetEmbed`
   in `src/data/site.ts` (Elfsight / Trustindex). CTA fallback is live now.

## Owner / external (account setups)
- Google Business Profile optimisation.
- Google Search Console: verify domain + submit `/sitemap-index.xml`.
- Connect the GTM container, Meta Pixel, and Google Ads accounts.
- Activate the contact form: submit one test enquiry on the live site, then click the
  FormSubmit activation link emailed to medilife.dehradun@gmail.com (one-time).

## Deploy notes
- **Staging subdomain (Vercel):** set env var `NOINDEX=true` so the staging site is not
  indexed by search engines (emits robots `Disallow: /` + `noindex` meta sitewide).
- **Production:** do NOT set NOINDEX (defaults to indexable). Attach the real domain so
  canonical URLs (pointed at https://www.medilifesuperspeciality.com) match.
