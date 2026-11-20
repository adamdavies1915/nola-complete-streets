# Verification record

## Passed in the build workspace

- `npm run check`: all four meaningful event/date tests, Astro static build, and generated-site checks pass.
- Root deployment: 27 content pages, custom 404, 15 redirects and one calendar file generated. Site checker inspects 43 HTML files and over 1,190 internal links/assets.
- GitHub Pages subdirectory: `BASE_PATH=/completeStreets/ SITE_URL=https://example.github.io npm run check` passed. Markdown links, navigation, images, CSS fonts, calendar links, redirects, canonicals and sitemap use the base path.
- Future-time build: `BUILD_TIME=2027-01-21T12:00:00Z npm run check` passed. Assertions confirmed that the finished January meeting and December notice disappear from Home and Get involved, while the contact fallback remains.
- Event tests cover cancelled/unpublished events, exact end-time expiry, ordering without mutation, Central daylight/standard time and UTC date boundaries.
- Build-time content schemas validate public files. Unpublished member entries remain absent from rendered HTML.
- Internal link checks include local files and anchors, image alt attributes, iframe titles, unique element IDs, a single h1, title and description presence, and the absence of the bike-map iframe on Home.
- Source provenance scan: 9 public raster assets, 0 missing provenance records. WebP records use the skill’s sidecar format; PNG records are embedded.
- Supplied Taste motion files were copied unmodified. The project binds the kit's required font, spacing, radius and action tokens to the coalition’s own system.
- Additional source checks verified all eight CMS editor paths and unique field names, both mapping integration URLs, calendar UTC timestamps and 75-octet line folding. Byte comparison confirmed the shipping vendor CSS/JS matches the original skill files.

## Environment limits, not passing checks

The workspace forbids local listeners: opening `127.0.0.1:4321` returned `EPERM`. The Taste screenshot runner could not open ports 5300–5399. No browser screenshots were produced, and responsive appearance, keyboard interactions, contrast, motion and third-party embeds have **not** received browser sign-off.

The required fresh Impeccable reviewer returned **`disposition: recapture`**, stopping at its missing-evidence check. It made no source or visual assessment. Required evidence: desktop/mobile captures; Home at 1440, 1024, 820, 768, 390 and 320px; representative reading pages; open menu; maps; reduced motion. This is not a visual approval.

The Taste finish gate returned the following result and was not rerun:

```text
GATE: ERROR (consistency.mjs gave no report (exit 1: Error: no free port in 5200-5299); check.mjs could not run (exit 2: (node:60654) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 listening listeners added to [Server]. MaxListeners is 10. Use emitter.))
```

Only the copy check ran; it produced an em-dash warning. The gate's browser consistency, accessibility, interaction and layout checks did not run. Subsequent token bindings and final source edits have passed the static build, not the blocked visual gate.

Shell DNS is also restricted: the external-link sweep returned `ENOTFOUND` for all 37 URLs present at that check. This is not evidence those URLs are broken. Public sources were separately looked up using the web tool, and targeted official links were corrected. The storymap and Better Streets could not be verified by that tool. Public ArcGIS access must be confirmed before enabling the storymap embed.

Pages CMS is configured but not connected to a destination repository, and no hosted editor acceptance test or deployment has occurred. Docker/Coolify runtime deployment has not been tested in this workspace.

## Staging acceptance pass

1. Run `npm ci`, `npm run check`, and `npm run preview` in a shell that permits localhost. Preview defaults to `http://127.0.0.1:4321`.
2. Capture Home at the six widths above. Check long headings, hero photo cropping, action visibility, report grades, campaign images and footer. Open each capture before accepting it.
3. Tab through navigation, open each dropdown, press Escape, and test the mobile Menu button. Confirm focus is visible, returned sensibly on closing, and never trapped. Try touch input and 200% zoom.
4. Turn JavaScript off: content and normal navigation must remain available. Enable reduced motion: the hero and photo story must remain readable without animation.
5. Follow the primary action, campaign links, report download, policy download and calendar download. Import the calendar and confirm January 20, 2027, 3–4:30 p.m. America/Chicago.
6. Open Bike Streets and its direct-link fallback. Test the storymap signed out and Better Streets in a normal browser.
7. Inspect the report table at 320px, a long resource title, the 404, draft exclusions and no-future-meeting fallback.
8. Check screen-reader landmarks, heading order, image descriptions and announcement of links. Run accessibility and performance audits against staging; do not substitute a static build for these checks.
9. Exercise Pages CMS on a staging branch: edit text, upload an image, save a draft, publish, confirm CI and revert the test content. Check a failed validation does not replace the last successful production deployment.
10. Submit valid screenshots for the fresh Impeccable finish review and run the Taste gate from the functioning browser environment before launch.
