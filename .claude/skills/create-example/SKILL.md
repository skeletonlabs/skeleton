---
name: create-example
description: Scaffold an example file (Astro or framework-specific) for a Skeleton documentation page, including the MDX import wiring and Preview/Framework blocks.
---

# Create Example

Scaffold a new example for a Skeleton doc page under [sites/skeleton.dev/src/components/examples/](sites/skeleton.dev/src/components/examples/), and add the import + render wiring to the parent `.mdx`.

Folder layout mirrors the docs tree: `examples/<category>/<slug>/`.

## Example types

| Type            | Path                          | When to use                                                                      |
| --------------- | ----------------------------- | -------------------------------------------------------------------------------- |
| Astro (neutral) | `<slug>/<name>.astro`         | HTML/CSS-only demo; no state, events, or framework imports needed                |
| React           | `<slug>/react/<name>.tsx`     | Demo needs React state/events or imports from `@skeletonlabs/skeleton-react`     |
| Svelte          | `<slug>/svelte/<name>.svelte` | Demo needs Svelte runes/snippets or imports from `@skeletonlabs/skeleton-svelte` |

A single doc page can mix types per example. Defaults:

- Tailwind-component pages → `.astro`, fall back to framework-specific only when the demo requires state/events (see [buttons/](sites/skeleton.dev/src/components/examples/tailwind-components/buttons/) — `default.astro` + `react/group.tsx` + `svelte/group.svelte`).
- Framework-component pages → both `react/` and `svelte/`, always paired (see [accordion/](sites/skeleton.dev/src/components/examples/framework-components/accordion/)).

## File conventions

- First example on a page is always named `default` (lowercase). Subsequent examples use descriptive kebab-case (e.g. `sizes`, `controlled`, `indicator`).
- Astro file starts with an Astro frontmatter block (`---\n...imports...\n---`) even when empty.
- React file `default-export`s a function component; import icons from `lucide-react`.
- Svelte file uses `<script lang="ts">`; import icons from `@lucide/svelte/icons/<name>`.

Reference files:

- Astro: [buttons/sizes.astro](sites/skeleton.dev/src/components/examples/tailwind-components/buttons/sizes.astro)
- React: [accordion/react/default.tsx](sites/skeleton.dev/src/components/examples/framework-components/accordion/react/default.tsx)
- Svelte: [accordion/svelte/default.svelte](sites/skeleton.dev/src/components/examples/framework-components/accordion/svelte/default.svelte)

## MDX wiring

In the parent `.mdx`, import both the component and its raw source:

```mdx
import Default from '@/components/examples/<category>/<slug>/default.astro';
import DefaultRaw from '@/components/examples/<category>/<slug>/default.astro?raw';
```

For framework-specific examples, append framework suffix to the import name:

```mdx
import DefaultReact from '@/components/examples/<category>/<slug>/react/default';
import DefaultReactRaw from '@/components/examples/<category>/<slug>/react/default?raw';
import DefaultSvelte from '@/components/examples/<category>/<slug>/svelte/default.svelte';
import DefaultSvelteRaw from '@/components/examples/<category>/<slug>/svelte/default.svelte?raw';
```

### `<Preview>` block

Wraps the rendered example in a card with a code-toggle and (when `framework` is set) a Stackblitz button.

```mdx
<Preview files={{ 'app.astro': DefaultRaw }} client:visible>
	<Default />
</Preview>
```

- `files` — `{ '<filename>': RawSource }`. Multiple keys render tabs; first key shows by default. Filename extension drives syntax highlighting.
- `framework="react" | "svelte"` — required for framework examples; enables Stackblitz.
- `client:visible` — always set on `<Preview>` and (for React/Svelte) on the rendered child.

### `<Framework>` block

Only renders its children when the active framework switcher matches `id`. Use it to show parallel React/Svelte versions of the same example.

```mdx
<Framework id="react">
	<Preview framework="react" files={{ 'app.tsx': DefaultReactRaw }} client:visible>
		<DefaultReact client:visible />
	</Preview>
</Framework>
<Framework id="svelte">
	<Preview framework="svelte" files={{ 'app.svelte': DefaultSvelteRaw }} client:visible>
		<DefaultSvelte client:visible />
	</Preview>
</Framework>
```

Astro examples do **not** need a `<Framework>` wrapper — they render universally.

### Placement in the page

- The `default` example is rendered at the top of the page with no heading.
- Each subsequent example gets its own `## SectionName` heading (PascalCase or Title Case), with the `<Preview>` (or `<Framework>` pair) directly underneath.

## Standalone invocation

Ask only what can't be inferred:

1. **Target doc page** — the `.mdx` file the example will be added to.
2. **Example name** — kebab-case, used as filename and (PascalCase) MDX import name.
3. **Type** — astro, react, svelte, or framework-pair (react + svelte). Recommend a default based on the parent page's category and accept overrides.
4. **What it should demonstrate** — one line; informs the placeholder body.

When invoked from `/create-doc` with a list of examples and an inferred type per example, skip prompting and scaffold directly.

## Output

For each example, produce:

- Example file(s) with minimal placeholder body matching the reference convention.
- Inserted import lines at the top of the parent `.mdx`.
- Inserted `<Preview>` (and `<Framework>` if applicable) block in the appropriate location — top of page for `default`, under a new `## SectionName` heading otherwise.

Summarize: files created, import lines added, section headings inserted.
