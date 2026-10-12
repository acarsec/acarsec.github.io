# GitHub Pages

Upload this project's contents to the repository root: package.json, package-lock.json, astro.config.mjs, tsconfig.json, src/, public/, and .github/workflows/deploy-pages.yml.

Do not upload node_modules/, dist/, .astro/, .cache/, test-results/ or .npm-cache/.

On GitHub delete the obsolete .github/workflows/astro.yml and .github/workflows/ci.yml. Keep only the updated deploy-pages.yml. Browser uploads do not delete old files already in the repository.

If .github is skipped during upload, use Add file → Create new file with the name .github/workflows/deploy-pages.yml and paste the local workflow text. The new workflow explicitly uses Node 24, npm ci and npm run build. No test, source comparison or separate validation runs.

Set Settings → Pages → Source to GitHub Actions. A commit on main or master automatically builds and publishes the site. Manual runs remain available. Do not upload a ZIP itself; GitHub does not unpack it as project source.

Local commands: npm ci, npm run dev, npm run build, npm run preview. The site's dated publication URLs and existing images remain unchanged.
After replacement, obsolete repository files can be deleted: tests/, scripts/, playwright.config.ts, legacy/, _posts/, _layouts/, _includes/, _data/, pages/, root assets/, Gemfile, Gemfile.lock, _config.yml, root index.html, root 404.html and root search.json. Current pages are in src/ and public assets in public/. Do not delete src/content/publications/ or public/assets/.
