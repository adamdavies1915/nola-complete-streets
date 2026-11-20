# Editing and publishing

## First-time setup

Connect the destination GitHub repository to Pages CMS using an owner account, then invite coalition editors. The editor reads `.pages.yml`; the site continues to deploy as static files. See the official [Pages CMS quick start](https://pagescms.org/docs/quick-start/) and [collaborator documentation](https://pagescms.org/docs/configuration/collaborators/).

Use a staging branch/site for the first editor session. Change a headline, upload a photo, save a draft campaign, publish it, and confirm the resulting GitHub build. Restore the test content before production. This acceptance test requires the connected repository and has not yet been run.

## Routine changes

1. Open the relevant editor section: Home page, Website pages, Campaigns, Meetings & events, resources, projects or members.
2. Make the change. Use clear image descriptions and link to original agency sources.
3. Keep new or uncertain material unpublished. Publish after the content is reviewed.
4. Save and check the GitHub Actions build. A validation failure means the live site keeps its last successful build.
5. Review the resulting page, including on a phone.

Existing page paths are protected from creation, renaming and deletion in the page editor. Adding a new top-level page or changing navigation needs a small code change. Campaigns, events, resources, projects and members can be added through their collection editors.

## Meeting dates

Enter specific dates rather than a repeating event. Start and end fields use ISO time with a Central-time offset:

```text
Winter: 2027-01-20T15:00:00-06:00
Summer: 2027-07-21T15:00:00-05:00
```

Choose `cancelled` when a meeting will not occur. Only published, scheduled events whose end time has not passed appear as the next meeting. The daily build applies expiry. A temporary meeting notice has its own expiry in Site settings. When no future meeting is confirmed, the page directs visitors to ask the coalition rather than inventing a date.

Calendar downloads use UTC timestamps derived from the entered offset and import correctly into a visitor's calendar timezone.

## Newsletter and maps

The newsletter URL is intentionally blank. Until a provider is selected, visitors can email the coalition; no form implies a successful subscription. Set an HTTPS signup URL after testing the provider's real flow and updating the privacy page as needed.

The Bike Streets embed and direct link are configured in Site settings. The project storymap is linked first, with the agency directory available independently. Turn on the storymap embed only after testing it while signed out of ArcGIS. Better Streets remains a separate link and application.

## Members and event recognition

Draft member entries are private. Confirm each name, role, organization and permission to list them before setting Publish to true. Meeting attendance alone does not establish membership or an executive role. A confirmed organization appears under Member organizations; a confirmed executive entry appears in a separate section.

The certification checklist links to the source recovered from the archive. Verify that it is the approved version. Add the final flyer URL when it exists. Event recognition remains coordinated with the coalition; this website does not automatically issue certificates.

## Sources and uploads

Use the Sources fields for dated public evidence. Keep status claims tied to a reporting period. A map dot, design concept or study does not mean a project is under construction.

Upload only public photos, logos and final documents. Keep contact sheets, minutes, attendance lists and drafts outside `public/`. Add photographer credit and permission information to `docs/asset-sources.json` when adding images. The source archive itself is not part of the website.
