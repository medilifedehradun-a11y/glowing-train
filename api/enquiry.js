/**
 * Vercel serverless function: receives a contact/booking enquiry and sends it
 * to the hospital's WhatsApp via the Meta WhatsApp Cloud API (server-side, so
 * the visitor never needs WhatsApp or to log in).
 *
 * Required environment variables (set in Vercel -> Settings -> Environment Variables):
 *   WA_TOKEN            Permanent access token (System User token recommended)
 *   WA_PHONE_NUMBER_ID  The Cloud API sender's Phone Number ID
 *   WA_TO               Recipient number in international format, digits only
 *                       (e.g. 917817863358) - where enquiries should land
 *   WA_TEMPLATE         Approved template name (default: new_enquiry)
 *   WA_LANG             Template language code (default: en)
 */

const GRAPH_VERSION = 'v21.0';

// WhatsApp template parameters may not contain newlines, tabs or long runs of
// spaces. Collapse whitespace and cap length.
const clean = (s, max = 600) =>
  String(s == null ? '' : s).replace(/\s+/g, ' ').trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  // Vercel parses JSON and urlencoded bodies into req.body.
  const b = (req.body && typeof req.body === 'object') ? req.body : {};

  // Honeypot: silently accept bot submissions without sending.
  if (b.botcheck) return res.status(200).json({ ok: true });

  const token = process.env.WA_TOKEN;
  const phoneId = process.env.WA_PHONE_NUMBER_ID;
  const to = (process.env.WA_TO || '917817863358').replace(/\D/g, '');
  const template = process.env.WA_TEMPLATE || 'new_enquiry';
  const lang = process.env.WA_LANG || 'en';

  if (!token || !phoneId) {
    return res.status(503).json({ ok: false, error: 'WhatsApp delivery is not configured yet.' });
  }

  const name = clean([b.first, b.last].filter(Boolean).join(' ')) || 'Not provided';
  const phone = clean(b.phone) || 'Not provided';
  const dept = clean(b.department) || 'Not specified';
  const message = clean(b.message) || 'No message';

  const payload = {
    messaging_product: 'whatsapp',
    to,
    type: 'template',
    template: {
      name: template,
      language: { code: lang },
      components: [
        {
          type: 'body',
          parameters: [
            { type: 'text', text: name },
            { type: 'text', text: phone },
            { type: 'text', text: dept },
            { type: 'text', text: message },
          ],
        },
      ],
    },
  };

  try {
    const r = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/${phoneId}/messages`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) {
      console.error('WhatsApp Cloud API error:', JSON.stringify(data));
      return res.status(502).json({ ok: false, error: data?.error?.message || 'Send failed' });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('WhatsApp request failed:', e);
    return res.status(500).json({ ok: false, error: 'Network error' });
  }
}
