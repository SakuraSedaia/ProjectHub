# Sakura's Project Hub

A central hub for all of [SakuraSedaia](https://codeberg.org/SakuraSedaia)'s
open-source software projects — primarily Blender extensions and JetBrains
plugins built around the Blender and Intellij ecosystems.

The hub provides a single landing site that links every project to its
documentation, downloads, changelogs, and the official platform listings
(Blender Extensions, JetBrains Marketplace, Codeberg, etc.).

## Project status

🚧 **Ongoing website — no versioned releases.**

This project is an ongoing website and will not have dedicated
versioned releases. The hub is continuously deployed from the main
branch, and updates ship as soon as they land — there are no tagged
`v1.0`, `v2.0`, etc. milestones for the site itself. Individual
projects hosted on the hub (Blender extensions, JetBrains plugins) keep
their own independent versioning; only the site/wrapper is unversioned.

Expect frequent changes to the homepage, navigation, and individual
project pages as more projects are migrated in from the standalone
portfolio site.

Currently included:

- **SACR Interface** — Blender extension for the Sakura Minecraft Character
  Rig (downloads, instructions, changelogs).
- **Blender Development** — PyCharm plugin for developing and debugging
  Blender extensions (downloads, instructions, known issues).
- **Changelogs** — Per-version release notes for every published build, accessed via the "View changelog" button on the project page.
- **Homepage** — landing page summarizing the projects, latest updates,
  and community links.

## Goals

1. **One place for everything.** Replace scattered repo READMEs and
   forum posts with a single, well-organized site that documents every
   project, version, and known issue.
2. **First-class download experience.** Provide rich version/build
   tables (size, license, compatibility, notes) for both stable and
   development branches, sourced from a single JSON index
   (`src/json-data/addon-index.json`).
3. **Tight integration with official platforms.** Each project links
   directly to its Blender Extensions / JetBrains Marketplace /
   Codeberg page rather than re-hosting binaries unnecessarily.
4. **Maintainable, accessible, and fast.** Built on SolidStart + SCSS,
   deployed on Vercel, with semantic HTML, `Suspense`/`ErrorBoundary`
   wrappers on every route, and CSS-variable-driven theming.

## Tech stack

- [SolidJS](https://www.solidjs.com/) +
  [SolidStart](https://start.solidjs.com/)
- SCSS (mirrored partial structure under `src/styles/`)
- Vercel (deployment)
- pnpm (package manager)

## Project structure

| Path | Purpose |
| --- | --- |
| `src/routes/` | File-based routes (pages). |
| `src/sections/` | Page-specific sections, mirroring route names. |
| `src/components/` | Reusable UI components (`IconBundle`, `PluginHero`, nav, etc.). |
| `src/json-data/` | JSON sources for plugin/version metadata. |
| `src/styles/` | SCSS framework, variables, page and component partials. |
| `public/images/` | Static images (headers, card backgrounds, vectors, platform icons). |
| `utils/` | Helper scripts. |
| `.junie/` | Agent guidelines and project metadata. |

## Development

```bash
pnpm install
pnpm dev      # start the dev server
pnpm build    # production build
```

## License

The source code of this hub website is licensed under the
[BSD 3-Clause License](./LICENSE) — Copyright (c) 2025 SakuraSedaia.

Each individual project hosted on this hub is licensed independently
(typically GNU/GPL V3 — see each project's repository for details).


