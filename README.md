# Surikata3K

Source of **[surikata3k.com](https://surikata3k.com)**, the home page for my projects: systems notes, YouTube videos and web apps.

## What's on the site

- **Docs**: operating systems, networking, databases, virtual machines and containers, at [docs.surikata3k.com](https://docs.surikata3k.com/)
- **Videos**: the [@Surikata3K](https://www.youtube.com/@Surikata3K) YouTube channel
- **Code**: everything on [GitHub](https://github.com/surikata3k/)
- **Apps**: small apps that run in the browser, with nothing to install and no server:
  - *tools*: [Dits Màgics](https://surikata3k.com/ditsmagics/en/) (English, [Catalan](https://surikata3k.com/ditsmagics/), [Spanish](https://surikata3k.com/ditsmagics/es/)), [Learning outcome hours planner](https://surikata3k.com/apps/learning-outcome-hours/)
  - *passwords*: [PassForge](https://surikata3k.com/apps/passforge/), [Password generator](https://surikata3k.com/apps/password-generator/), [Password strength checker](https://surikata3k.com/apps/password-strength-checker/), [Entropy calculator](https://surikata3k.com/apps/password-entropy-calculator/)
  - *cryptography and security*: [Asymmetric key simulator](https://surikata3k.com/apps/asymmetric-key-simulator/) (with [the maths of RSA](https://surikata3k.com/apps/asymmetric-key-simulator/rsa-math.html)), [Blockchain simulator](https://surikata3k.com/apps/blockchain-simulator/)

## Repository layout

```
index.html     home page (HTML with inline CSS)
apps/          the web apps, one folder each (formerly the web-apps repository)
apps/assets/   shared files for the apps: compiled Tailwind CSS, Lucide icons and site.css (site bar and fonts)
apps/<old>/    redirects from the earlier Spanish URLs to the English ones
web-apps/      redirects from the original /web-apps/... URLs to /apps/...
404.html       error page
robots.txt     instructions for search engines
sitemap.xml    sitemap for Google and Bing
img/           logo, favicon, icons and social images (og-image.png and og/<app>.png)
tools/         build for the apps' Tailwind CSS and Lucide icons
CNAME          custom domain for GitHub Pages (surikata3k.com)
```

Dits Màgics lives in its own repository and is served at `surikata3k.com/ditsmagics/` (Catalan), `/ditsmagics/es/` (Spanish) and `/ditsmagics/en/` (English). It keeps its own playful design for children.

### Design

Every app shares the home page's look: Instrument Serif for titles, IBM Plex Sans and IBM Plex Mono for text, the rust accent (`#B23A0A`) and the warm neutral background (`#FBFBF9`). In Tailwind, the `indigo` scale is the accent and `slate` is the neutral palette (see `tools/tailwind.config.js`), and every app starts with the shared site bar (`.s3k-bar`, in `apps/assets/site.css`).

### Adding a new app

1. Create `apps/<english-name>/index.html`.
2. In the `<head>`: `<title>`, `meta description`, `canonical`, Open Graph and the JSON-LD block (copy them from another app).
3. Load `/apps/assets/tailwind.min.css`, `/apps/assets/site.css` and `/apps/assets/lucide.min.js` (not the Tailwind or Lucide CDNs), and add the site bar at the top of `<body>`.
4. Add the about section at the end (what it is, how to use it, FAQ and related apps).
5. Add its card to `index.html` (and to the `ItemList` in its JSON-LD) and its URL to `sitemap.xml`.
6. Rebuild the CSS and icons (see below).

### Rebuilding the CSS and icons

The apps use a compiled Tailwind stylesheet and a bundle with only the Lucide icons they need. If you add new classes or icons, rebuild them:

```
cd tools
npm install
npm run build
```

## Publishing

Published with GitHub Pages from the `main` branch. The domain is managed in Cloudflare; every push to `main` goes live in a couple of minutes.

To preview locally:

```
python3 -m http.server
```

## Contact

[hello@surikata3k.com](mailto:hello@surikata3k.com)

## License

The apps are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en) (see [apps/LICENSE](apps/LICENSE)).
