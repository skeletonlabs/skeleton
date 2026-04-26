---
name: create-functional-component
description: Create Skeleton functional components in both React and Svelte packages using the repository's anatomy/modules conventions.
---

# Create Functional Component

Scaffold a new framework component in both Skeleton packages using the existing anatomy/modules authoring style.

## Where things live

- React components: [packages/skeleton-react/src/components/](packages/skeleton-react/src/components/)
- Svelte components: [packages/skeleton-svelte/src/components/](packages/skeleton-svelte/src/components/)
- Public package exports: [packages/skeleton-react/src/index.ts](packages/skeleton-react/src/index.ts), [packages/skeleton-svelte/src/index.ts](packages/skeleton-svelte/src/index.ts)
- Reference components to model after:
  - Static/non-machine: [app-bar](packages/skeleton-react/src/components/app-bar/index.ts), [app-bar](packages/skeleton-svelte/src/components/app-bar/index.ts)
  - Machine-backed: [accordion](packages/skeleton-react/src/components/accordion/index.ts), [accordion](packages/skeleton-svelte/src/components/accordion/index.ts)

## File destination rules

Recommend structure based on component complexity, explain the reasoning, accept overrides.

- **Simple/static component** → create `anatomy/*`, `modules/anatomy.ts`, and `index.ts` in both framework folders.
- **Machine-backed component** → add provider/context modules in both frameworks:
  - React: `modules/provider.ts`, context files as needed.
  - Svelte: `modules/provider.svelte.ts`, context files as needed.
- **Always mirror APIs** across React and Svelte (part names, prop interface names, namespace members).

## Conventions (from app-bar / accordion / dialog)

- Folder is kebab-case; exported namespace is PascalCase (`app-bar` -> `AppBar`).
- Keep anatomy/modules split:
  - `anatomy/*` = renderable parts
  - `modules/*` = context/providers/namespace composition
  - `index.ts` = type exports + namespace export
- Use `PropsWithElement` + `HTMLAttributes` in part prop interfaces.
- Build attributes with `mergeProps` and render with element override fallback.
- React anatomy files are `.tsx`; `index.ts` type exports reference `.jsx` paths.
- Svelte anatomy files are `.svelte`; interfaces are in `<script lang="ts" module>`.
- Namespace composition uses `Object.assign(Root, { ...parts })` in `modules/anatomy.ts`.
- For static parts, include `data-scope` and `data-part` attributes.

## Prompt flow

Ask one at a time, confirm each, write nothing until all are answered and the user confirms.

1. **Component name** — kebab-case folder and PascalCase namespace. Recommend both, accept overrides.
2. **Type** — static/simple or machine-backed (Zag). This resolves required module files.
3. **Parts list** — root-only or full anatomy list (`root`, `trigger`, `content`, etc.).
4. **Elements per part** — default HTML tag for each part (`div`, `button`, `header`, etc.).
5. **Exports** — whether to include `Provider`, `Context`, and `useX` public exports.
6. **Confirm** — show planned file tree for both frameworks and namespace API before writing.

## After scaffolding

1. Add new component re-exports to [packages/skeleton-react/src/index.ts](packages/skeleton-react/src/index.ts) and [packages/skeleton-svelte/src/index.ts](packages/skeleton-svelte/src/index.ts).
2. Keep export ordering consistent with neighboring component entries.
3. If requested, trigger `/create-doc` using the new component slug for framework docs scaffolding.

## Final summary

List: files created in each framework, namespace members exported, provider/context/hook files added (if any), and top-level index exports added.
