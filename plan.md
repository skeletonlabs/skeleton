# Dependency Update Plan — Skeleton Monorepo

## Context

Phased dependency upgrades for the `@skeletonlabs/monorepo` pnpm workspace. All version pins live in a single `pnpm-workspace.yaml` catalog (strict mode), so each phase primarily edits that file. After each phase we run `pnpm install`, verification tooling, then hand off for manual regression testing before proceeding.

## Key architecture notes

- All versions are managed in `pnpm-workspace.yaml` catalog (strict mode) — this is the single source of truth for every phase
- Root `package.json` has a `pnpm.overrides.vite` pointing to `catalog:` for consistency across workspaces
- Node 24.x is already in use — satisfies all upcoming runtime requirements (Node 20.19+ for Vite 8, Node 22+ for Astro 6)
- Shiki is already at v4 (`shiki: 4.0.2`, `@shikijs/*: 4.0.2`) — no Shiki migration needed for Astro 6

## Phase order

`@sveltejs/vite-plugin-svelte v7` has a hard requirement on Vite 8, so it must come after the Vite upgrade:

| Phase | Description                             |
| ----- | --------------------------------------- |
| 1     | Non-major deps                          |
| 2     | Astro v6.1 + related integrations       |
| 3     | Vite v8                                 |
| 4     | @sveltejs/vite-plugin-svelte v7         |
| 5     | TypeScript v6 (conditional — see phase) |

---

## Phase 1: Non-major dependencies

**Reference**: The `renovate/all-non-major-dependencies` branch (~2 weeks old) exists as a reference for what changed, but it will be **closed in favor of a fresh branch** for this update. Use it to identify which packages have non-major updates available, then apply those changes directly on the new branch.

**Steps:**

1. Create a new branch from `main`
2. Update all non-major version bumps in `pnpm-workspace.yaml` (use the renovate branch as reference for what changed)
3. Run `pnpm install`
4. Run verification suite
5. Hand off for manual regression testing

**Verification:**

```
pnpm install
pnpm test
pnpm check
pnpm format:check
pnpm lint:check
```

---

## Phase 2: Astro v6.1 + related integrations

**Breaking changes to address:**

- Astro 6 requires Node 22+ (already on Node 24 ✓)
- Astro 6 requires Vite 7 (already at 7.3.1 ✓)
- Shiki 4 already in catalog ✓
- Zod 4: imports from `astro:content` may need to change to `astro/zod` — scan `sites/skeleton.dev/` for usage

**Catalog entries to update in `pnpm-workspace.yaml`:**

```yaml
astro: 5.18.0 → 6.1.x
@astrojs/check: 0.9.6 → check latest compatible
@astrojs/mdx: 4.3.13 → 5.x (Astro 6 compatible)
@astrojs/react: 4.4.2 → 5.x (Astro 6 compatible)
@astrojs/svelte: 7.2.5 → 8.x (Astro 6 compatible)
@astrojs/vercel: 9.0.4 → 10.x (Astro 6 compatible)
@astrojs/partytown: may need bump
@astrojs/sitemap: may need bump
```

**Migration steps:**

1. Run `npx @astrojs/upgrade` inside `sites/skeleton.dev/` as starting reference point
2. Apply version bumps to catalog in `pnpm-workspace.yaml`
3. Search `sites/skeleton.dev/src/` for `astro:content` Zod imports and update to `astro/zod`
4. Check any custom `<Code />` component usage against Shiki 4 API (already on v4 but confirm no regressions)

**Critical files:**

- `pnpm-workspace.yaml` — catalog version bumps
- `sites/skeleton.dev/astro.config.mjs` — integration configs
- `sites/skeleton.dev/src/` — Zod import scan

**Verification:**

```
pnpm install
pnpm test
pnpm check
pnpm format:check
pnpm lint:check
```

---

## Phase 3: Vite v8

**Breaking changes to address:**

- Vite 8 distributed as ESM only (no CJS builds) — check for any `require('vite')` or CJS-style vite config
- Node 20.19+ or 22.12+ required (on Node 24 ✓)

**Catalog entries to update in `pnpm-workspace.yaml`:**

```yaml
vite: 7.3.1 → 8.x
```

**Migration steps:**

1. Update `vite` in catalog
2. Scan all `vite.config.*` files for CJS patterns (`require`, `module.exports`) — should be none given `"type": "module"` monorepo-wide
3. Check `@vitejs/plugin-react` and `@sveltejs/kit` / `@sveltejs/vite-plugin-svelte` for Vite 8 compatibility at their current versions (they will be upgraded in Phase 4)
4. The `pnpm.overrides.vite` in root `package.json` ensures all workspaces use the same Vite version

**Critical files:**

- `pnpm-workspace.yaml` — single version bump
- `packages/skeleton-svelte/vite.config.*`
- `packages/skeleton-react/vite.config.*`
- `playgrounds/*/vite.config.*`
- `sites/*/astro.config.*` (Astro manages its own Vite internally)

**Verification:**

```
pnpm install
pnpm test
pnpm check
pnpm format:check
pnpm lint:check
```

---

## Phase 4: @sveltejs/vite-plugin-svelte v7

**Prerequisites:** Vite 8 (Phase 3) ✓, Svelte 5.46.4+ (currently 5.53.7 ✓)

**Breaking changes to address:**

- Removed: `vitePlugin.hot` → use `compilerOptions.hmr` instead
- Removed: `vitePlugin.ignorePluginPreprocessors` (no longer needed)
- Removed: `api.idFilter` → use `api.filter` instead
- Removed: `plugin.api.sveltePreprocess` (affects other Vite plugins)
- `compilerOptions.cssHash` no longer overridden (Svelte 5 produces stable hash — likely a no-op)
- vite-plugin-svelte-inspector now integrated directly (remove separate package if present)

**Catalog entries to update in `pnpm-workspace.yaml`:**

```yaml
@sveltejs/vite-plugin-svelte: 6.2.4 → 7.x
```

**Migration steps:**

1. Update catalog version
2. Search svelte vite configs for deprecated options: `vitePlugin.hot`, `vitePlugin.ignorePluginPreprocessors`, `api.idFilter`, `api.sveltePreprocess`, `compilerOptions.cssHash`
3. Check `packages/skeleton-svelte/vite.config.*` and `playgrounds/skeleton-svelte/vite.config.*`
4. Check `sites/themes.skeleton.dev/vite.config.*`

**Critical files:**

- `pnpm-workspace.yaml`
- `packages/skeleton-svelte/vite.config.*`
- `playgrounds/skeleton-svelte/vite.config.*`
- `sites/themes.skeleton.dev/svelte.config.js` or `vite.config.*`

**Verification:**

```
pnpm install
pnpm test
pnpm check
pnpm format:check
pnpm lint:check
```

---

## Phase 5: TypeScript v6 _(conditional)_

**⚠️ Pre-flight check before starting this phase**: Verify TypeScript 6 support across critical dependencies. If any key dependency lacks support, skip this phase until they catch up.

Check the following for TypeScript 6 compatibility:

- **Astro** — check `astro` release notes and GitHub issues
- **Svelte / svelte-check** — check Svelte 5 compatibility announcements
- **@sveltejs/kit** — check SvelteKit release notes
- **@sveltejs/vite-plugin-svelte** — check for TS 6 peer dep requirements
- **Vite / @vitejs/plugin-react** — check Vite 8 TS compatibility
- **@zag-js/** — check for any typing breakages
- **oxlint / oxlint-tsgolint** — check TypeScript 6 parser support

If support is not confirmed across all of the above, we will skip this phase and revisit when the ecosystem catches up.

**Breaking changes to address (new defaults):**

- `strict: true` is now default (was `false`) — may expose new errors if not already set
- `module` defaults to `"esnext"` (was `"commonjs"`)
- `target` defaults to `"es2025"` (floating)
- `types` defaults to `[]` — no longer auto-includes `@types/*`; must explicitly list (e.g., `"types": ["node"]`)

**Deprecated/removed:**

- `target: es5` (min is now ES2015)
- `--baseUrl` (deprecated, prefer `paths`)
- `moduleResolution: node` / `classic` — use `bundler` or `node16`/`nodenext`
- `esModuleInterop: false` and `allowSyntheticDefaultImports: false` (deprecated)
- `module: amd/umd/systemjs/none` removed
- `asserts` import attribute keyword → `with`
- `module` declaration keyword → `namespace`

**Catalog entries to update in `pnpm-workspace.yaml`:**

```yaml
typescript: 5.9.3 → 6.x
```

**Migration steps:**

1. Update catalog version
2. Audit all `tsconfig.json` files across the monorepo to explicitly set options that were previously implicit (to avoid surprise from new defaults):
   - Confirm `strict: true` is explicit (if it wasn't, new errors may surface)
   - Add `"types": ["node"]` (or equivalent) where ambient node types are needed
   - Confirm `module` and `moduleResolution` are explicit, not relying on defaults
3. Scan for deprecated import attribute syntax (`assert` → `with`)
4. Scan for `module` keyword used as namespace in `.d.ts` files

**tsconfig files to audit:**

- `packages/skeleton-svelte/tsconfig.json`
- `packages/skeleton-react/tsconfig.json`
- `packages/cli/tsconfig.json`
- `playgrounds/skeleton-svelte/tsconfig.json`
- `playgrounds/skeleton-react/tsconfig.json`
- `sites/skeleton.dev/tsconfig.json`
- `sites/themes.skeleton.dev/tsconfig.json`

**Temporary escape hatch** (if needed during migration):

```json
{ "compilerOptions": { "ignoreDeprecations": "6.0" } }
```

**Verification:**

```
pnpm install
pnpm test
pnpm check
pnpm format:check
pnpm lint:check
```

---

## Session workflow

Each session:

1. Implement the current phase's changes
2. Run `pnpm install`
3. Run verification commands
4. Fix any failures surfaced
5. Hand off for manual regression testing
6. Await feedback before starting next phase
