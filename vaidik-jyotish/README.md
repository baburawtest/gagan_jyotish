# Jyotish Darshan

A fast, bilingual (English/Hindi) Astro website for a Vedic Astrology, Vastu and Palmistry practice.

## Edit your content

1. Open `src/data/site.ts` to change your name, WhatsApp number, email and booking link.
2. The English and Hindi website text is in the same file, under `content.en` and `content.hi`.
3. Replace the decorative About image in `src/pages/index.astro` with your professional photograph when ready.

## Run locally

```sh
npm install
npm run dev
```

Open the local address shown in the terminal.

## Publish free with GitHub + Cloudflare Pages

1. Create a GitHub repository and push this folder to it.
2. In Cloudflare: **Workers & Pages → Create application → Pages → Connect to Git**.
3. Select the repository. Choose the **Astro** preset.
4. Build command: `npm run build`; output directory: `dist`.
5. Click **Save and Deploy**. Cloudflare will rebuild automatically after every GitHub update.

Before publishing, update the example WhatsApp number and email in `src/data/site.ts`.

## Online booking

Create a free Cal.com account, make a 15-minute event, set the price to ₹600, then replace `bookingLink` in `src/data/site.ts` with the event link. The website asks visitors to notify you on WhatsApp after booking, so no paid WhatsApp API is required.
