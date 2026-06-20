# WhatsApp enquiry delivery (Meta WhatsApp Cloud API)

The contact/booking form posts to the serverless function `api/enquiry.js`, which
sends the enquiry to your WhatsApp via the **Meta WhatsApp Cloud API**. The visitor
just sees "Submitted" - they never need WhatsApp or to log in.

Until the env vars below are set, the form shows a graceful "please call us" message.

## 1. Create the WhatsApp app + sender
1. Go to https://developers.facebook.com -> My Apps -> Create App -> type **Business**
   (or reuse your existing Meta app - you already run the Meta Pixel).
2. Add the **WhatsApp** product.
3. In **WhatsApp -> API Setup** you get:
   - a **Sender** (Meta gives a free test number to start), with its **Phone number ID**
     -> this is `WA_PHONE_NUMBER_ID`
   - a temporary 24-hour token (for testing only).
4. Under "To", add your staff WhatsApp number (e.g. **917817863358**) as a recipient and
   verify it via the OTP Meta sends. In test mode you can only message verified recipients
   (up to 5). To message any number, register/verify your own sender number and add billing.

## 2. Get a permanent token (for production)
Business Settings -> **System Users** -> Add (Admin) -> **Generate token** -> pick the app ->
permissions **whatsapp_business_messaging** + **whatsapp_business_management** -> copy it.
This is `WA_TOKEN`.

## 3. Create the message template (needs Meta approval)
WhatsApp Manager -> **Message Templates** -> Create:
- **Name:** `new_enquiry`
- **Category:** Utility
- **Language:** English -> note the exact code shown (`en` or `en_US`)
- **Body** (4 variables, in this exact order):
  ```
  New website enquiry
  Name: {{1}}
  Phone: {{2}}
  Department: {{3}}
  Message: {{4}}
  ```
- Add sample values when prompted, then Submit. Approval is usually minutes to a few hours.

The variable order MUST stay Name, Phone, Department, Message - the function sends them in
that order.

## 4. Add env vars in Vercel, then redeploy
Vercel -> project -> **Settings -> Environment Variables** (Production), then
**Deployments -> Redeploy**:

| Name                 | Value                                            |
|----------------------|--------------------------------------------------|
| `WA_TOKEN`           | the permanent System User token                  |
| `WA_PHONE_NUMBER_ID` | the sender's Phone number ID                      |
| `WA_TO`              | recipient number, digits only e.g. `917817863358`|
| `WA_TEMPLATE`        | `new_enquiry`                                     |
| `WA_LANG`            | the template language code, e.g. `en`            |

## 5. Test
Submit the form on the live site. You should receive the WhatsApp on `WA_TO`, and the form
shows "Submitted". If you see "could not submit", check the function logs in
Vercel -> Deployments -> (latest) -> Functions -> `api/enquiry` for the Meta error.

### Common gotchas
- `WA_LANG` must match the template language code exactly (`en` vs `en_US`), or Meta returns
  "template not found".
- The Cloud API **sender** number is separate from `WA_TO` (the recipient). A number used in
  the Cloud API can no longer be used in the normal WhatsApp app.
- In test mode, `WA_TO` must be a verified recipient.
