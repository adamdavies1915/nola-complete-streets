# New Orleans Complete Streets Coalition

A static Astro rebuild of nolacompletestreets.org. The site includes 27 content pages, a custom 404, 15 legacy redirects, a Bike Streets embed, project storymap and Better Streets links, downloadable reports, calendar downloads and browser editing configuration for Pages CMS.

## Run it

Use Node 22.12 or newer (Node 22 is pinned in `.nvmrc`).

```sh
npm ci
npm run dev
```

Open **http://127.0.0.1:4321**. To review the production output:

```sh
npm run check
npm run preview
```

The output in `dist/` is entirely static. There is no database or production Node server. Fonts, photographs, PDFs and the small navigation/motion scripts are served locally. Only the route-map page loads the Bike Streets widget.

## Deploy to GitHub Pages

1. Put this project in the destination GitHub repository on its `main` branch.
2. In **Settings → Pages**, select **GitHub Actions** as the source.
3. For a project URL such as `https://owner.github.io/repository/`, the included workflow derives the origin and repository subdirectory automatically.
4. For a user/organization site (`owner.github.io`), set repository variable `BASE_PATH` to `/`.
5. For the eventual custom domain, set `SITE_URL=https://nolacompletestreets.org`, `BASE_PATH=/` and `CUSTOM_DOMAIN=nolacompletestreets.org`. Only set the domain and update DNS when the launch is approved.

`.github/workflows/deploy.yml` validates pull requests and deploys successful `main` builds. A daily scheduled rebuild removes expired meeting notices and stops promoting finished meetings. GitHub can suspend schedules on inactive public repositories; check that the scheduled workflow remains enabled. Failed checks prevent deployment.

Build settings are read from the build process environment. `.env.example` documents them; export them in your shell or use your host's build settings rather than assuming a local `.env` is loaded by the postbuild script.

Test the subdirectory build locally:

```sh
BASE_PATH=/completeStreets/ SITE_URL=https://example.github.io npm run check
```

## Coolify alternative

Use a static-site build: Node 22, install command `npm ci`, build command `npm run check`, publish directory `/dist`. Set `SITE_URL` to the preview or production origin and `BASE_PATH=/`. The supplied Dockerfile is an alternative: it builds Astro and serves the result with nginx. No CMS or application service needs to run on the box. Schedule a daily rebuild if meeting expiry must update without a content edit.

## Edit in a browser

The included [.pages.yml](.pages.yml) defines the Pages CMS editor. An owner must connect the destination repository to [Pages CMS](https://pagescms.org/) and invite editors. No live CMS account or repository connection has been provisioned by this build. See [the editor guide](docs/EDITING.md) for the publishing workflow and [the launch checklist](docs/LAUNCH.md) for the remaining editorial decisions.

Content lives in:

| Location | Purpose |
| --- | --- |
| `src/data/home.json` | Homepage copy and photograph |
| `src/data/settings.json` | Contact, map, newsletter and meeting settings |
| `src/content/pages/` | Public pages and resource hubs |
| `src/content/campaigns/` | Current and past campaigns |
| `src/content/events/` | Explicit meeting dates and cancellations |
| `src/content/resources/` | Plan and research links |
| `src/content/projects/` | Official project directory |
| `src/content/members/` | Draft or confirmed public member listings |
| `public/images/` / `public/downloads/` | Public assets only |

Astro validates content on every build. Entries with `published: false` do not render. No internal meeting minutes or contact spreadsheets are published.

## Verification

`npm run check` runs meeting/date tests, builds all routes, and checks internal links, anchors, downloads, CSS assets, metadata, image alternatives, iframe titles, duplicate IDs and draft member visibility. `npm run check:links` checks external URLs; bot protection and temporary failures need manual review.

Root and subdirectory builds have passed. See [verification notes](docs/VERIFICATION.md) for the exact checks and the browser checks this execution environment could not perform. Do not treat a successful static build as accessibility or visual sign-off.

## Brand and assets

Original blue `#004892`, yellow `#FDBA12`, grey `#D1D3D4`; locally hosted Barlow Condensed headlines and Barlow body text. Font license: `public/fonts/OFL.txt`. Photos and logos were extracted from the supplied coalition archive; provenance is in `docs/asset-sources.json`. The daylighting image is explicitly identified as a concept. Review image permission and attribution before launch.

The unmodified Taste skill motion modules live in `public/vendor/taste/`. Layout and design decisions are documented in `DESIGN.md`. The built site can be served by any static host.
