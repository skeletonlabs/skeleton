---
name: create-playground-entry
description: Create or update Skeleton React and Svelte playground component pages for a given component, including route generation steps.
---

# Create Playground Entry

Create playground pages for a component in one or both playground apps.

Use this when a component needs a hands-on demo page under `components/<slug>` in:

- [playgrounds/skeleton-react/](playgrounds/skeleton-react/)
- [playgrounds/skeleton-svelte/](playgrounds/skeleton-svelte/)

## Where things live

- React playground routes: [playgrounds/skeleton-react/src/routes/components/](playgrounds/skeleton-react/src/routes/components/)
- Svelte playground routes: [playgrounds/skeleton-svelte/src/routes/components/](playgrounds/skeleton-svelte/src/routes/components/)
- React route shell and nav list source: [playgrounds/skeleton-react/src/routes/\_\_root.tsx](playgrounds/skeleton-react/src/routes/__root.tsx)
- Svelte route shell and nav list source: [playgrounds/skeleton-svelte/src/routes/+layout.svelte](playgrounds/skeleton-svelte/src/routes/+layout.svelte)

## Important behavior

- Both playgrounds auto-build the component nav from filesystem globs in their root layouts.
- Adding a route file in the right folder is enough to make it appear in the sidebar.

## File destination rules

Recommend destination from component slug and target framework(s), explain why, then accept overrides.

- Component slug `my-component`:
  - React file: `playgrounds/skeleton-react/src/routes/components/my-component/index.tsx`
  - Svelte file: `playgrounds/skeleton-svelte/src/routes/components/my-component/+page.svelte`
- Usually create both files for framework components.
- If the component exists in only one framework, create only that framework's playground page.

## Conventions (from existing playground entries)

- Route folder is kebab-case and mirrors component slug.
- React files:
  - Include `'use client';`
  - Import component(s) from `@skeletonlabs/skeleton-react`
  - Export `Route` with `createFileRoute('/components/<slug>/')`
  - Define `function Page()` and return demo JSX
- Svelte files:
  - Start with `<script lang="ts">`
  - Import component(s) from `@skeletonlabs/skeleton-svelte`
  - Exported route is filesystem-based (`+page.svelte`), no explicit route helper
  - Use matching demo structure with idiomatic Svelte syntax
- Demo scope should be aligned across frameworks for parity.

Reference files:

- Simple: [playgrounds/skeleton-react/src/routes/components/accordion/index.tsx](playgrounds/skeleton-react/src/routes/components/accordion/index.tsx), [playgrounds/skeleton-svelte/src/routes/components/accordion/+page.svelte](playgrounds/skeleton-svelte/src/routes/components/accordion/+page.svelte)
- Multi-section: [playgrounds/skeleton-react/src/routes/components/carousel/index.tsx](playgrounds/skeleton-react/src/routes/components/carousel/index.tsx), [playgrounds/skeleton-svelte/src/routes/components/carousel/+page.svelte](playgrounds/skeleton-svelte/src/routes/components/carousel/+page.svelte)

## Prompt flow

Ask one at a time, confirm each answer, write nothing until all are answered and the user confirms.

1. **Component slug** - kebab-case route segment (for example `floating-panel`).
2. **Framework targets** - `react`, `svelte`, or both (recommend both when the component exists in both packages).
3. **Demo scope** - minimal single example or multi-section showcase.
4. **Feature coverage** - list the states/variants/interactions to include.
5. **Parity level** - strict parity or framework-idiomatic differences.
6. **Confirm** - show planned files and summarize route/codegen actions before writing.

## After scaffolding

1. Ensure the route files compile in each target playground.
2. Regenerate React route tree after new or renamed React route files:
   - `pnpm --filter @skeletonlabs/playground-skeleton-react exec tsr generate`
3. If requested, run checks:
   - React: `pnpm --filter @skeletonlabs/playground-skeleton-react run check`
   - Svelte: `pnpm --filter @skeletonlabs/playground-skeleton-svelte run check`

## Final summary

List: framework targets, files created/updated, whether React route generation was run, and any intentional parity differences between React and Svelte demos.
