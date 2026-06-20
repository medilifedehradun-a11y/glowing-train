# Go-Live Runbook — medilifesuperspeciality.com (Wix → Astro/Vercel)

The code is production-ready. The remaining steps are account/DNS actions that must
be done in the Vercel and Wix dashboards. Do them in this order.

## 0. Before you start
- The current Wix site keeps serving until DNS is repointed, so there is no downtime
  and a safe rollback (just revert DNS to Wix).
- The domain (medilifesuperspeciality.com) is staying the same, only the host changes.
  So Google Search Console "Change of Address" is NOT needed.
- Confirm whether any **email** uses this domain (e.g. you@medilifesuperspeciality.com).
  You currently use a gmail.com inbox, so there is likely no domain email. If there is,
  note the existing MX records so you can preserve them when editing DNS.

## 1. Add the domain in Vercel
Vercel → the project → **Settings → Domains → Add**:
- Add `www.medilifesuperspeciality.com`  → set this as the **Primary** domain.
- Add `medilifesuperspeciality.com` (apex) → choose **Redirect to www** (308).

Vercel will then show the exact DNS records to create. They are normally:
- `www`  →  **CNAME**  →  `cname.vercel-dns.com`
- `@` (apex)  →  **A**  →  `76.76.21.21`

(Use whatever values Vercel shows you — they are authoritative.)

## 2. Point DNS at Wix to Vercel
Wix dashboard → **Domains → (medilifesuperspeciality.com) → Manage DNS Records**:
- Edit the **A record** for host `@` to Vercel's A value (`76.76.21.21`).
- Edit/add the **CNAME** for host `www` to `cname.vercel-dns.com`.
- **Leave MX / email records untouched** if any exist.
- If Wix blocks editing because the domain is "connected to a Wix site", first
  disconnect it from the Wix site, then edit the DNS records.

Then wait for propagation + Vercel to issue the SSL certificate (usually minutes,
up to a few hours). In Vercel → Domains the domain should turn to "Valid / SSL".

## 3. Turn OFF the staging no-index (CRITICAL)
Right now a `NOINDEX=true` env var keeps the site out of Google. For production:
- Vercel → **Settings → Environment Variables → delete `NOINDEX`** (or set it to `false`).
- Then **Deployments → redeploy** the latest commit so the change takes effect.

Do this only once the custom domain is live. After redeploy:
- `https://www.medilifesuperspeciality.com/robots.txt` must show `Allow: /` + the Sitemap
  line (NOT `Disallow: /`).
- View-source of the homepage must NOT contain `noindex`.

## 4. Post-launch verification (5 minutes)
- `https://www.medilifesuperspeciality.com` loads with the HTTPS padlock.
- `https://medilifesuperspeciality.com` (no www) redirects to the www version.
- Old Wix URLs redirect (301/308):
  - `/post/introducing-medilife-superspeciality-hospital-your-partner-in-health-and-wellness`
    → `/blog/...same-slug`
  - `/members` → `/`
  - `/category/all-products` → `/`
- Spot-check pages: `/`, `/urology`, `/ent`, `/oncology`, `/orthopedics`,
  `/doctors`, `/departments`, `/photo-gallery`, `/contact-us`. No broken images.

## 5. Google Search Console
- Add/confirm the property for `https://www.medilifesuperspeciality.com`
  (or a Domain property for medilifesuperspeciality.com).
- Submit the sitemap: `https://www.medilifesuperspeciality.com/sitemap-index.xml`
- Use **URL Inspection → Request indexing** for the homepage and a few key pages.
- (Same domain, so no Change-of-Address. Google will recrawl and follow the new
  sitemap + redirects.)
- Optional: do the same in Bing Webmaster Tools.

## 6. Activate the contact form (one-time)
The contact/booking forms email via FormSubmit (no API key). On the LIVE site:
- Submit the contact form once.
- Open the activation email FormSubmit sends to **medilife.dehradun@gmail.com** and
  click the confirm link. Until you do this, submissions will not be delivered.

## 7. Analytics (consent-gated)
- Google Tag Manager `GTM-T882DX8` and Meta Pixel `258130693596440` load only after a
  visitor clicks **Accept** on the cookie banner. Confirm these IDs are the hospital's
  (they were carried over from the Wix site).
- After consenting on the live site, confirm hits arrive in GA4 / GTM Preview and in
  Meta Events Manager.

## 8. Keep as fallback
- Leave the Wix subscription active for a few days after cutover as a rollback option.
- If anything is wrong, revert the Wix DNS A/CNAME records to their previous values to
  fall back to Wix.

## Later (non-blocking, see MARKETING-TODO.md)
- Conversion-event tracking (form submit / call / WhatsApp clicks).
- More blog posts; per-page OG images; live Google reviews widget.
