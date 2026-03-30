# Dependency Update Plan — Skeleton Monorepo

> **Reminder: Delete this file once all phases are complete.**

## Context

Phased dependency upgrades for the `@skeletonlabs/monorepo` pnpm workspace. All version pins live in a single `pnpm-workspace.yaml` catalog (strict mode), so each phase primarily edits that file. After each phase we run `pnpm install`, verification tooling, then hand off for manual regression testing before proceeding.

## Key architecture notes

- All versions are managed in `pnpm-workspace.yaml` catalog (strict mode) — this is the single source of truth for every phase
- Root `package.json` has a `pnpm.overrides.vite` pointing to `catalog:` for consistency across workspaces
- Node 24.x is already in use — satisfies all upcoming runtime requirements (Node 20.19+ for Vite 8, Node 22+ for Astro 6)
- Shiki is already at v4 (`shiki: 4.0.2`, `@shikijs/*: 4.0.2`) — no Shiki migration needed for Astro 6

## Phase order

`@sveltejs/vite-plugin-svelte v7` has a hard requirement on Vite 8, so it must come after the Vite upgrade:

| Phase | Description                             | Status     |
| ----- | --------------------------------------- | ---------- |
| 1     | Non-major deps                    | ✅ complete |
| 2     | Astro v6.1 + related integrations | ⬜ pending  |
| 3     | Vite v8                           | ⬜ pending  |
| 4     | @sveltejs/vite-plugin-svelte v7   | ⬜ pending  |

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
- `@vitejs/plugin-react v6` requires Vite 8 as a peer dep — must be bumped here alongside Vite

**Note on `@vitejs/plugin-react`:** Only used as a devDependency in `packages/skeleton-react` (browser testing) and `playgrounds/skeleton-react` (dev env). Not included in the published NPM output — `clean-package` strips all devDependencies before publish. Safe to bump without affecting consumers of `@skeletonlabs/skeleton-react`.

**Catalog entries to update in `pnpm-workspace.yaml`:**

```yaml
vite: 7.3.1 → 8.x
@vitejs/plugin-react: 5.1.4 → 6.x  (required by Vite 8 peer dep)
```

**Migration steps:**

1. Update `vite` and `@vitejs/plugin-react` in catalog
2. Scan all `vite.config.*` files for CJS patterns (`require`, `module.exports`) — should be none given `"type": "module"` monorepo-wide
3. Check `@sveltejs/kit` / `@sveltejs/vite-plugin-svelte` for Vite 8 compatibility at their current versions (vite-plugin-svelte will be upgraded in Phase 4)
4. The `pnpm.overrides.vite` in root `package.json` ensures all workspaces use the same Vite version

**Critical files:**

- `pnpm-workspace.yaml` — version bumps
- `packages/skeleton-react/vite.config.ts` — uses `@vitejs/plugin-react` for test runner
- `packages/skeleton-svelte/vite.config.*`
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

## Deferred / out of scope

These were identified during triage and intentionally excluded. Track as separate follow-up work:

| Package | Current → Latest | Reason deferred |
|---------|-----------------|-----------------|
| `@clack/prompts` | 0.11.0 → 1.x | Logged as follow-up; out of scope for these phases |
| `@lucide/svelte` / `lucide-react` | 0.577.0 → 1.x | Handled outside this feature branch |
| `@types/node` | 24.x → 25.x | Should track Node runtime upgrade; bump when/if Node upgrades to 25+ |
| `typescript` | 5.9.3 → 6.x | Removed from plan — ecosystem support uncertain, revisit separately |

---

## Session workflow

Each session:

1. Implement the current phase's changes
2. Run `pnpm install`
3. Run verification commands
4. Fix any failures surfaced
5. Hand off for manual regression testing
6. Await feedback before starting next phase
