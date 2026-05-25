# PRD: Blocks — Dynamic Content via Vite Glob

**Branch:** `feature/blocks-structure-and-glob`
**Issue:** [#4482](https://github.com/skeletonlabs/skeleton/issues/4482)
**Status:** In Progress

---

## Goal

Replace the static placeholder data in `get-blocks.remote.ts` with real data derived from the filesystem using Vite's `import.meta.glob`. The listing page needs accurate per-framework counts, and the detail page needs live Svelte component previews with swappable code by framework.

---

## Content Directory Structure

```
sites/plus.skeleton.dev/src/lib/content/
  {free,premium}/
    blocks/
      {category}/          ← e.g. applications, marketing, ecommerce
        {slug}/             ← e.g. alerts, hero-sections
          {framework}/      ← svelte, react, vue, solid, astro
            NNN-name.ext    ← e.g. 001-basics.svelte
```

---

## Decisions

| Topic | Decision |
|---|---|
| Block labels | Derived from slug (`hero-sections` → `Hero Sections`) |
| Block icon + description | Static lookup map keyed by slug (extracted from existing data) |
| Counts | Per-framework: free + premium file counts summed, exposed as `frameworkCounts: Record<string, number>` |
| Framework list on detail page | Dynamic — only show frameworks that have actual files for the block |
| Preview rendering | Both free + premium Svelte components, free first then premium, each in a `<Preview>` block |
| Svelte fallback | If no `.svelte` file exists for a component, render `(Svelte Preview Missing)` |
| URL structure | Keep `[category]/[slug]` — no changes to routing |
| Glob path style | Use `/src/lib/content/...` (absolute from Vite project root) — `$lib` alias does NOT resolve in `import.meta.glob` |

---

## Tasks

### 1 — Refactor `get-blocks.remote.ts`

**File:** `sites/plus.skeleton.dev/src/lib/remote/blocks/get-blocks.remote.ts`

#### Updated types

```ts
export type BlockCategory = string;

export interface Block {
  slug: string;
  label: string;
  description: string;
  iconName: string;
  category: string;
  frameworkCounts: Record<string, number>; // framework key → free+premium count
}

export interface BlockComponent {
  tier: 'free' | 'premium';
  name: string;                   // filename without extension, e.g. '001-basics'
  code: Record<string, string>;   // framework key → raw source string
}

export interface BlockDetail extends Block {
  frameworks: string[];           // ordered framework keys with files for this block
  components: BlockComponent[];   // sorted: free first, then premium; each tier by name
}
```

#### Glob patterns (static string literals — no dynamic values allowed)

```ts
// Reused for both counting (enumerate keys) and code loading (call factory)
const freeFiles    = import.meta.glob('$lib/content/free/blocks/*/*/*.*',    { as: 'raw' });
const premiumFiles = import.meta.glob('$lib/content/premium/blocks/*/*/*.*', { as: 'raw' });
```

Vite resolves `$lib` at build time; glob keys will be absolute paths like `/src/lib/content/free/...`.

#### Helpers

```ts
// '/src/lib/content/free/blocks/applications/alerts/svelte/001-basics.svelte'
// → { category: 'applications', slug: 'alerts', framework: 'svelte', name: '001-basics' }
function parseContentPath(path: string): { category: string; slug: string; framework: string; name: string } | null {
  const match = path.match(/\/blocks\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)\.[^.]+$/);
  if (!match) return null;
  return { category: match[1], slug: match[2], framework: match[3], name: match[4] };
}

// 'hero-sections' → 'Hero Sections'
function slugToLabel(slug: string): string {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// Returns Map<category, Map<slug, Map<framework, count>>>  (key enumeration only — no I/O)
function buildCountMap(): Map<string, Map<string, Map<string, number>>> { ... }
```

#### Refactored query functions

- **`getCategories()`** — derives category IDs from `buildCountMap()` keys; labels via `slugToLabel`
- **`getFrameworks()`** — unchanged; returns static `frameworkList`
- **`getBlocks()`** — builds `Block[]` from count map; `frameworkCounts` = free + premium per framework key; metadata from `blockMeta` lookup (fallback: `{ iconName: 'BoxIcon', description: '' }`)
- **`getBlocksByCategory()`** — filters `getBlocks()` result by `params.category`
- **`getBlockBySlug()`** — returns `BlockDetail | undefined`:
  1. Get `{ category, slug }` from `getRequestEvent().params`
  2. Filter glob keys to paths matching `/${category}/${slug}/`
  3. Load matched files lazily (`await loader()`) — only this block's files
  4. Determine `frameworks`: distinct keys present, filtered to known frameworks, in `frameworkList` order
  5. Group by `(tier, name)` → `BlockComponent[]`; sort free-first then by name
  6. Return `{ ...block, frameworks, components }`

#### Static metadata lookup

Replace the `blocks[]` array with a `blockMeta` record. Extract `iconName` and `description` from the existing static array — all existing slugs move into this map.

```ts
const blockMeta: Record<string, { iconName: string; description: string }> = {
  alerts: { iconName: 'CircleAlertIcon', description: '...' },
  // ...
};
```

---

### 2 — Update `[category]/[slug]/+page.svelte` (detail page)

**File:** `sites/plus.skeleton.dev/src/routes/(app)/content/blocks/[category]/[slug]/+page.svelte`

#### Client-side glob for live Svelte rendering

```ts
// Glob keyed at build time; filtered at runtime by category/slug
const allSvelteModules = import.meta.glob('$lib/content/{free,premium}/blocks/*/*/svelte/*.svelte');
```

#### Framework-to-lang mapping (for syntax highlighting)

```ts
const frameworkLang: Record<string, string> = {
  svelte: 'svelte',
  react: 'tsx',
  vue: 'vue',
  solid: 'tsx',
  astro: 'astro',
};
```

#### Framework selector

Replace `getFrameworks()` source with `block.frameworks` (only frameworks that have files for this block). Map keys to labels using the static `frameworkList` or a local lookup.

#### Render loop — replace `blockExamples` placeholder

Drive iteration from `block.components` (the server-side list covering all framework files). For each component, look up its Svelte module in `allSvelteModules` by constructing the resolved key path. Show fallback if missing:

```svelte
{#each block.components as comp (comp.tier + comp.name)}
  {@const svelteKey = `/src/lib/content/${comp.tier}/blocks/${block.category}/${block.slug}/svelte/${comp.name}.svelte`}
  {@const svelteLoader = allSvelteModules[svelteKey]}
  <Preview
    title={humanize(comp.name)}
    code={comp.code[selectedFramework] ?? ''}
    lang={frameworkLang[selectedFramework] ?? selectedFramework}
  >
    {#if svelteLoader}
      {#await svelteLoader() then mod}
        {@const Component = mod.default}
        <Component />
      {/await}
    {:else}
      <p class="opacity-60 italic">(Svelte Preview Missing)</p>
    {/if}
  </Preview>
{/each}
```

`humanize(name)`: strip leading `NNN-` prefix, title-case the remainder (e.g. `001-basics` → `Basics`).

---

### 3 — Update `/content/blocks/+page.svelte` (listing page)

**File:** `sites/plus.skeleton.dev/src/routes/(app)/content/blocks/+page.svelte`

#### Framework picker

Add `selectedFramework` state (default `'svelte'`). Add a framework picker to the `{#snippet trail()}` in `<PageHeader>` alongside existing buttons. Source the list from `frameworks` (all 5, static).

#### Block cards

- Count display: `item.frameworkCounts[selectedFramework] ?? 0`
- Hide blocks where count is 0 for the selected framework

#### Dynamic categories

Replace hardcoded `{@render categorySection(...)}` calls:

```svelte
{#each categories as category (category.id)}
  {@render categorySection(category.id, category.label)}
{/each}
```

The `categorySection` snippet already skips empty sections, so categories with no blocks for the selected framework disappear automatically.

#### Clean up drawer

Remove the `<!-- TODO: implement -->` framework checkbox section in the filter drawer — framework selection moves to the PageHeader.

---

## Edge Cases

- **Missing tier directory** (e.g. free has no `marketing/` yet): glob returns no matching keys → count = 0, no error
- **`.gitkeep` files**: excluded by default (micromatch doesn't match dotfiles with `*`)
- **Unknown slug in `blockMeta`**: fallback to `{ iconName: 'BoxIcon', description: '' }`
- **Framework has no files for a block**: not shown in detail page dropdown; `frameworkCounts[fw] === 0` hides block on listing page for that framework
- **No Svelte file for a component**: `(Svelte Preview Missing)` shown in the Preview shell

---

## Verification

1. `pnpm --filter plus.skeleton.dev dev`
2. `/content/blocks` — `alerts` appears under `applications` with count `2` (Svelte selected)
3. Switch framework picker → React — count for `alerts` stays `2`; blocks with no React files disappear
4. `/content/blocks/applications/alerts` — both `001-basics` components render live in `<Preview>` blocks
5. Switch detail page framework dropdown → React — code panel shows TSX; Svelte preview unchanged
6. Remove `svelte/001-basics.svelte` temporarily — `(Svelte Preview Missing)` appears; restore file
7. Navigate to a non-existent slug — graceful empty state, no crash

---

> Delete this file when all tasks above are complete and the branch is merged.
