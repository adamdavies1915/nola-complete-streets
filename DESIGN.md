---
name: New Orleans Complete Streets Coalition
description: A public coalition website for safe, sustainable and accessible streets.
colors:
  blue: "#004892"
  blue-dark: "#00366f"
  yellow: "#fdba12"
  paper: "#f7f7f2"
  white: "#fff"
  text: "#233749"
  muted: "#536371"
  line: "#d1d3d4"
  line-strong: "#7b8994"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(56px, 6.7vw, 96px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  page-title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(52px, 6.3vw, 88px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(40px, 4vw, 64px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.05
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Barlow, sans-serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Barlow, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  navigation:
    fontFamily: "Barlow, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.35
  button:
    fontFamily: "Barlow, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.35
  text-link:
    fontFamily: "Barlow, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  small: "4px"
spacing:
  "8": "8px"
  "12": "12px"
  "16": "16px"
  "20": "20px"
  "24": "24px"
  "28": "28px"
  "32": "32px"
  "40": "40px"
  "48": "48px"
  "64": "64px"
  "80": "80px"
  "100": "100px"
  gutter: "clamp(20px, 4.45vw, 72px)"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.blue-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.small}"
    padding: "15px 25px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.blue}"
    typography: "{typography.button}"
    rounded: "{rounded.small}"
    padding: "15px 25px"
  button-blue:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.small}"
    padding: "15px 25px"
  button-small:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.blue-dark}"
    typography: "{typography.navigation}"
    rounded: "{rounded.small}"
    padding: "11px 18px"
  text-link:
    textColor: "{colors.blue}"
    typography: "{typography.text-link}"
  navigation:
    backgroundColor: "{colors.white}"
    textColor: "{colors.blue}"
    typography: "{typography.navigation}"
  campaign-row:
    textColor: "{colors.text}"
    padding: "32px 0"
  resource-row:
    textColor: "{colors.text}"
    padding: "32px 0"
  report-table:
    textColor: "{colors.text}"
    width: "100%"
  callout:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.text}"
    padding: "40px"
---

# Design System: New Orleans Complete Streets Coalition

## Overview

**Creative North Star: "Light daytime streetscape"**

The coalition's original identity is the visual authority: its supplied logo, strong blue headings, yellow actions and grey dividers carry through a bright public website. Locally hosted Barlow Condensed gives headlines the sturdy character of the mark; full-width Barlow gives explanations, policies and evidence room to be read. This pairing is an explicit original-brand exception to generic font restrictions, not a license to substitute a different display face.

Real photographs from coalition materials establish place and show different ways of moving. The interface uses open editorial sections, plain language and visible source information. Short invitation pages can be spacious; policy, research and archive pages follow their content's natural height. The shared system is the palette, typography, alignment, imagery and interaction behavior; the homepage's particular sequence is recorded separately in its surface brief.

Documentation basis: the implemented Astro components, pages, global stylesheet and loaded motion assets. This is a code scan, not visual signoff. Browser captures and computed-style sampling were unavailable because the sandbox rejected localhost listeners with `EPERM`; responsive appearance and final visual quality still require browser verification.

**Key Characteristics:**

- Original coalition blue, yellow and grey on white and warm paper.
- Bold condensed headlines with readable full-width body text.
- Actual community photography with a clear connection to the content.
- Open rows, restrained dividers and content-led reading layouts.
- Visible keyboard focus, native disclosure controls and reduced-motion fallbacks.

## Colors

The palette pairs the coalition's saturated blue and yellow with quiet neutral reading surfaces. The frontmatter holds canonical values; source CSS names map directly to the color token keys.

The sidecar's synthesized tonal strips are preview metadata, not additional approved interface colors.

### Primary

- **Coalition Blue** (`blue`): headings, links, navigation, strong table rules, outline controls and full-width policy or closing sections.
- **Deep Blue** (`blue-dark`): readable lettering on yellow actions and image notes.

### Secondary

- **Coalition Yellow** (`yellow`): primary actions, invitation backgrounds, the page-header rule, menu accents and important meeting notices. On blue sections it also supplies action text and focus contrast.

### Neutral

- **White** (`white`): the page ground, header, footer and dropdown panels; text on blue sections.
- **Warm Paper** (`paper`): reading-page introductions, campaign backgrounds, table headers and callouts.
- **Reading Ink** (`text`): default body text.
- **Muted Slate** (`muted`): publication details, dates, source context and secondary explanations.
- **Coalition Grey** (`line`): dividers between records, table rows and navigation boundaries.
- **Strong Slate** (`line-strong`): the stronger link-rule value required by the shared motion layer.

**The Original Identity Rule.** Keep the coalition's supplied logo and blue, yellow and grey identity; derive new surfaces from their existing roles.

## Typography

**Display Font:** Barlow Condensed Bold, with Arial Narrow and sans-serif fallbacks.

**Body Font:** Barlow Regular and Semibold, with a sans-serif fallback.

The local font files provide display weight 700 and body weights 400 and 600. Headlines are compact, emphatic and balanced; body copy uses an open line height and sentence case. There is no separate mono face or decorative label style.

### Hierarchy

- **Display and page title:** use the frontmatter's separate homepage and reading-page scales. Mobile homepage titles use a fluid range of 56–80px, while reading-page titles use 48–68px. Intermediate widths have explicit fitting adjustments in the stylesheet.
- **Headline:** the fluid section scale is the default. Long-form article headings are more compact (40px, line-height 1.15; 35px on phones) so the reading hierarchy does not compete with the page title.
- **Title:** the base title scale serves campaign rows. Resource and directory titles enlarge to 36px on desktop. Avoid turning every record title into a hero headline.
- **Body and lead:** the base body becomes 18px on phones. Introductory leads remain larger; the homepage uses 22px on desktop and 19px on phones. Long-form prose is constrained to 69ch; shorter introductions have narrower measures.
- **Label:** small type carries real dates, publishers, source notes and update information. It is ordinary sentence-case metadata, not an invented pre-heading label.
- **Actions:** semibold full-width Barlow gives links, navigation and buttons a consistent practical voice. Small buttons share the navigation scale.

**The Brand Type Rule.** Use the supplied local Barlow families and their actual weights; preserve this explicit brand decision on future surfaces.

## Layout

Content shares a centered maximum width of 1440px and the fluid gutter token. Desktop editorial splits use near-equal columns (1.03fr / 1fr), usually separated by 64–80px. Directory and campaign photography layouts use two columns; report grades use three open columns. These are context-specific compositions, not mandatory templates for every page.

The repeated spacing values are extracted from the implementation rather than a fabricated mathematical scale. Main sections use 100px vertical padding on wide screens, 80px below the navigation breakpoint and 58px on phones. Reading content starts with 64px of top space and 80px below, reducing to 40px and 56px on phones. Text and data pages have no viewport-height requirement.

The shared photo and motion assets receive explicit compatibility bindings from the root stylesheet: their spacing steps use 8, 12, 16, 24, 32 and 48px; font aliases point to the same local Barlow families; their corner aliases use the same small radius. Their action colors inherit the active yellow or blue button context. Keep these bindings aligned with the coalition system rather than introducing a second visual identity inside a vendor component.

Navigation changes to an in-flow menu at 1099px and below. At 820px, the sticky contents rail becomes a normal block above the article and resource metadata moves below each record. At 639px, the hero stacks copy and action before imagery, campaign and member grids become single columns, grades become rows, and meeting details follow their introduction. The narrowest adjustments occur at 359px. A large-screen image adjustment begins at 1441px.

Articles with more than two second-level headings have a contents rail (230px on wide screens, 190px at the navigation breakpoint). Its desktop position is sticky with a 32px top offset. Main prose and source notes keep the same reading measure. Tables remain semantic tables, with fixed layout, wrapped cell content and tighter spacing on phones. Map embeds have separate descriptive titles and external fallback links.

**The Reading Length Rule.** Let policy, research and archive pages grow with their content; keep paragraphs, source lists and tables within readable measures.

## Elevation & Depth

The site is flat by default. Background changes, white space, photography and thin grey rules separate content. Campaigns, directories, resources and report grades remain open on their page surface. The desktop navigation dropdown is the one structural shadow: a soft blue-tinted shadow (`0 10px 20px #00366f14`) distinguishes the panel from the page. The mobile panel returns to normal document flow without that shadow.

**The Open Surface Rule.** Use alignment, spacing and dividers for editorial records; reserve elevated panels for controls that actually overlap the page.

## Shapes

The small radius token softens buttons, menu toggles and common photographic frames. Callouts, page bands, tables and open content rows remain rectangular. Fine grey rules define records; stronger blue and yellow rules identify a contents rail, page boundary or notice. Decorative pill shapes and ornamental card stacks are not part of the implemented vocabulary.

Icons are simple inline SVG strokes that inherit their text color. Internal actions use a right-pointing arrow and external actions a diagonal arrow. Preserve meaningful labels; icons support them rather than replacing them.

## Components

### Buttons and action links

Buttons are compact, sturdy controls with the small radius, a transparent two-pixel border and a minimum height of 54px. Primary buttons pair yellow with deep blue. Outline buttons use a blue border and blue lettering on a transparent background. Blue buttons with white lettering appear inside the yellow invitation band. Small navigation buttons have a 48px minimum height and the smaller padding recorded in frontmatter.

Fine-pointer hover raises buttons by one pixel; press moves them one pixel down and scales to 0.985. Hover entry takes 150ms, exit 120ms and press 90ms using the shared ease-out curve. These existing variants do not change their fill on hover. Reduced motion removes the translation and scale. Text actions remain underlined, with a 44px minimum height and an inline arrow.

Keyboard focus is immediate: a three-pixel blue outline offset by five pixels. Action links inside blue sections switch that outline to yellow. Focus is not conveyed by motion alone.

### Navigation

The supplied logo anchors a white header with a thin grey bottom rule. Group menus use native `details` and `summary`, a rotating SVG chevron and a white dropdown with a yellow top edge. A current destination receives an underline. Dropdown links use warm paper on hover or keyboard focus.

Only one group remains open at a time. Escape closes an open group and returns focus to its summary; Escape also closes the mobile menu and returns focus to the menu button. Outside clicks close open menus. The mobile trigger reports `aria-expanded`, and the navigation stays available when JavaScript is absent. A focusable skip link leads directly to the main content.

### Editorial rows and photographs

Campaign rows, resource rows and directory entries use prominent linked headings, short explanations and thin top rules. Dates and publishers remain beside the content they qualify. Resource metadata occupies a narrower secondary column before stacking at the tablet breakpoint. Campaign photographs appear above open text, with gently softened frames and a restrained 1.03 zoom inside the image mask on pointer hover.

Use real coalition images with appropriate alternative text. An image link duplicated by the adjacent campaign title is removed from the keyboard and accessibility sequence. Detail-page images preserve the whole image where its content needs to be read; optional article images retain their natural proportions. A concept image is identified as such in its existing contextual text.

### Report grades and tables

The homepage grade summary uses large condensed blue letters and ordinary full-width descriptions, separated by thin rules. The linked report is a reading page with a semantic table: warm-paper headers, blue header text, grey row dividers and a stronger blue closing rule. Keep the report year and source-year context visible; the presentation must not imply a live rating.

### Notices and callouts

Meeting notices use a yellow left rule and comfortable text inset. Larger calls to action use a warm-paper rectangle with a yellow left edge and normal heading, explanation and action order. An invitation can occupy a full yellow band. The meeting block preserves the actual date, time, location and full address as readable text.

### Reading-page frame

Breadcrumbs precede a blue title on warm paper, finished with a yellow bottom rule. The article, optional contents rail, sources and update date follow in natural document order. The closing blue invitation is separate from the reading measure. Print styles remove navigation and embedded maps, simplify colored surfaces, and append external destinations to article links.

### Motion and photo moments

One hero entrance introduces the title, introduction, actions and photograph. The photograph settles within its own frame rather than moving the surrounding layout. The homepage also uses the existing picture-development treatment; the complete-streets explainer uses the existing photo-chapter component. These are selected surface treatments, not an invitation to animate every section. Native scrolling and reduced-motion, no-script and failed-module fallbacks remain part of the implementation contract. Final timing and vendor-component appearance need browser verification.

## Do's and Don'ts

### Do:

- **Do** preserve the supplied logo, original palette and local Barlow font pairing.
- **Do** use real coalition photographs and identify a design concept as a concept.
- **Do** keep body copy readable, record titles clear and source context close to the claim.
- **Do** let reading pages follow their content's natural height.
- **Do** use visible focus, native disclosure controls and explicit external links for embedded maps.
- **Do** retain reduced-motion and no-script access to the complete content.

### Don't:

- **Don't** replace the approved brand typography with a generic display or system-font identity.
- **Don't** introduce decorative pre-heading labels, invented statistics or unsupported claims.
- **Don't** put long reading copy directly over a busy photograph; use a solid surface for image notes.
- **Don't** turn editorial lists and report measures into floating card grids.
- **Don't** make a surface's particular narrative sequence a mandatory template for every page.
- **Don't** describe code inspection as completed browser or visual verification.
