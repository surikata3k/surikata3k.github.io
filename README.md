# Surikata3K

Source of **[surikata3k.com](https://surikata3k.com)**, the landing page for my projects: sysadmin docs, YouTube videos and small web apps.

## What's on the page

- **Docs**: notes on systems, networks and databases, at [docs.surikata3k.com](https://docs.surikata3k.com/)
- **Videos**: the [@Surikata3K](https://www.youtube.com/@Surikata3K) YouTube channel
- **Code**: everything on [GitHub](https://github.com/surikata3k/)
- **Apps**: small browser apps that need no install or server, grouped by topic:
  - *tools*: Dits Màgics, Learning Outcome Hours
  - *passwords*: PassForge, Password Generator, Password Strength Checker, Entropy Calculator
  - *security*: Asymmetric Key Simulator, Blockchain Simulator

## Repository layout

```
index.html   the whole landing page (HTML with inline CSS)
img/         logo, favicon and touch icons
CNAME        custom domain for GitHub Pages (surikata3k.com)
```

The apps themselves live in their own repositories and are served under their own paths (for example `surikata3k.com/web-apps/...`).

## Hosting

Published with GitHub Pages from the `main` branch. The domain is managed in Cloudflare; any push to `main` goes live in a couple of minutes.

To preview locally, open `index.html` in a browser or run:

```
python3 -m http.server
```

## Contact

[hello@surikata3k.com](mailto:hello@surikata3k.com)

## License

The apps are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en).
