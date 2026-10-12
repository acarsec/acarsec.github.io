# Content guide

Add selected Markdown to `src/content/`, then run npm run build. All output is static.

## Collections and authoring

- **Note:** a concept explained, useful commands, review questions, or lessons collected.
- **Lab:** a concise practice record: objectives, methods, findings, and lessons.
- **Write-up:** detailed evidence, investigation, analysis, reasoning, and verdict. A lab links to it without duplicating its body.
- **Research:** a question, reproducible methods, findings, limitations, and references.
- **Project:** a real tool, automation, or home lab build. CVE/severity are optional, only for actual vulnerability research.

Notes/write-ups/research are views of one publications collection. Templates in `docs/templates/` are not loaded or copied to the website.

Dates are quoted `YYYY-MM-DD`. Add `updatedAt` only for real changes. Common fields: title, description, publishedAt, permalink, tags, lang, draft. Publications require contentId/contentType/categories; labs labId/platform/labStatus/categories; projects projectId/status. Full rules: `src/lib/schemas.ts`.

Optional study metadata: platform, difficulty, tools, durationMinutes. Duration measures practice, not reading time. Publication image is an existing `/assets/...` path and requires imageAlt. Include images once in the Markdown body; layout uses metadata for SEO without a second illustration.

`relatedLabId`/`relatedWriteupId` use permanent logical IDs. A related publication must be a writeup. Public entries cannot reference nonpublic entries. Astro validates the front matter schema during compilation.

## Taxonomy and permanent URLs

Single source: `src/data/taxonomy.ts`. Categories: fundamentals, blue-team, offensive, dfir, malware, networking, programming, osint. Practice platforms: tryhackme, letsdefend, cyberdefenders, htb, local. Platform is independent of category. Bounty profiles remain in `platforms.ts`, outside practice filter taxonomy. Tags are specific concepts; their generated normalized slugs must be unique.

IDs and permalinks never change with filenames or titles. New URLs: `/notes/<slug>/`, `/writeups/<platform>/<slug>/`, `/research/<slug>/`, `/labs/<platform>/<slug>/`, `/projects/<slug>/`. Old publications keep `/blog/2023/.../`. Never duplicate an article to categorize it.

## Drafts and selected Obsidian export

Shared `publicContent()` excludes draft and future calendar dates (UTC) from routes, lists, relations, feed, search, and sitemap. No draft preview bypass is provided. For private local inspection use a local copy with draft disabled/nonfuture date; never commit that temporary edit. Drafts in a public Git repository are not private. Do not import private notes or a full vault.

Convert `[[Note]]` to actual Markdown links and `![[image.png]]` to `![Useful alt text](/assets/...)`. Copy only public assets to `public/assets/`. Use standard Markdown and supported HTML. Standard fenced code supports Shiki; old unlabelled fences remain unchanged.

`comments` enables Giscus per publication, retaining pathname mapping and matching article language. IOC/MITRE sections appear only when provided. Site/service identities: `src/data/site.ts`. GoatCounter loads only on the production hostname.
