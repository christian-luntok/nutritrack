<div align="center">
  <img alt="NutriTrack logo" src="/public/nutritrack.svg" width="100" />
</div>

<h1 align="center">
  NutriTrack - A landing page template 🚀
</h1>

NutriTrack is a user-friendly landing page template with NextJS and TailwindCSS. It's easy to customize, allowing you to create a minimalistic site that fits your style using its versatile components.

<hr>

![NutriTrack Mockup](/public/nutritrack.png)

## Key Features:

-   Minimal styling (make it your own!)
-   Accessible, semantic HTML markup
-   Blazingly Fast
-   100/100 Lighthouse performance
-   Responsive & SEO-friendly with canonical URLs, OpenGraph data and Meta tags.
-   Sitemap support
-   Made with NextJS and TailwindCSS

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example).

If you want to deploy on Netlify, use the following build command under site settings:

```bash
npm run build
```

You also want to make sure the publish directory is out.

## Lighthouse Score

NutriTrack scores 100/100 in the Lighthouse performance audit.

![NutriTrack Lighthouse Score](/lighthouse-score.png)

## Demo

Check out the [Demo](https://nutritrack.chrstnl.com/), hosted on Vercel.

## Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `npm install`   | Installs dependencies                        |
| `npm run dev`   | Starts local dev server at `localhost:3000`  |
| `npm run build` | Build your production site to `./next/`      |
| `npm run start` | Preview your build locally, before deploying |

## Update Site Metadata

```js
env: {
  siteTitle: 'Your Company',
  siteDescription: 'Your company description.',
  siteKeywords: 'your company keywords',
  siteUrl: 'https://nutritrack.chrstnl.com/',
  siteImagePreviewUrl: '/images/preview.jpeg',
  twitterHandle: '@your_handle'
}
```

## Update Colors

You can update the colors in tailwind.config.js file.

## Update Favicon

Update the manifest.json file and the icons under the public/images/icons folder.

You can use free tools online such as https://realfavicongenerator.net/ to quickly generate all the different icon sizes and favicon.ico file.

---

Made by [chrstnl](https://chrstnl.com/)
