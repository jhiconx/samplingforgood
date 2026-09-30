# Sampling For Good / Iconx AI

Static, responsive PWA packaged for Vercel. No build or dependencies required.

## Deploy

Open Terminal in this extracted folder and run:

```sh
npx vercel --prod
```

Sign into your Vercel account if requested. Use the default new-project setup; the included vercel.json selects the public folder. Share the URL returned after successful deployment. Review access in Vercel before sharing.

## Included experience

1. Sampling For Good entry screen with supplied logo and updated sorority-house artwork.
2. Swipe opens Iconx AI with the campaign prompt and selectable example.
3. Campaign submission opens the configured Chi Omega campaign details and retargeting switch.
4. The approval slider redirects to https://admin.gftrewards.com/ in the same tab.

## Current limits

AI generation, campaign persistence, payments, and a GFT API connection are not implemented. The details page uses the supplied campaign example. Swiping does not process a payment or send campaign data to GFT. Retargeting is a UI selection only. Installability depends on browser support. Google Fonts requires an internet connection; system fonts are the fallback.
