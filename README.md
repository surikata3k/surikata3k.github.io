# Surikata3K

Source of **[surikata3k.com](https://surikata3k.com)**, the home page for my projects: systems notes, YouTube videos and web apps.

## What's on the site

- **Docs**: operating systems, networking, databases, virtual machines and containers, at [docs.surikata3k.com](https://docs.surikata3k.com/)
- **Videos**: the [@Surikata3K](https://www.youtube.com/@Surikata3K) YouTube channel
- **Code**: everything on [GitHub](https://github.com/surikata3k/)
- **Apps**: small apps that run in the browser, now at [apps.surikata3k.com](https://apps.surikata3k.com/) (repository [surikata3k/apps](https://github.com/surikata3k/apps)), plus [Dits Màgics](https://surikata3k.com/ditsmagics/en/)

## Repository layout

```
index.html     home page (HTML with inline CSS)
apps/          redirects from the old /apps/... URLs to apps.surikata3k.com
web-apps/      redirects from the original /web-apps/... URLs to apps.surikata3k.com
404.html       error page
robots.txt     instructions for search engines
sitemap.xml    sitemap for Google and Bing
img/           logo, favicon, icons and social images (og-image.png and og/ditsmagics*.png)
CNAME          custom domain for GitHub Pages (surikata3k.com)
```

Dits Màgics lives in its own repository and is served at `surikata3k.com/ditsmagics/` (Catalan), `/ditsmagics/es/` (Spanish) and `/ditsmagics/en/` (English). It keeps its own playful design for children.

The apps used to live in this repository; they moved to their own repository and are served at `apps.surikata3k.com`. The old URLs here are kept as redirects so existing links keep working.

## Publishing

Published with GitHub Pages from the `main` branch. The domain is managed in Cloudflare; every push to `main` goes live in a couple of minutes.

To preview locally:

```
python3 -m http.server
```

## Contact

[hello@surikata3k.com](mailto:hello@surikata3k.com)

## License

The apps are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en); see their repository.
