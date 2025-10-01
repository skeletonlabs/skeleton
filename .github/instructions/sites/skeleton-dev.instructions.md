---
applyTo: 'sites/skeleton.dev/**'
---

# Skeleton Documentation Site Guidelines

## Site Structure

The documentation site is built with **Astro** and uses MDX for content. Here's the key directory structure:

```
sites/skeleton.dev/src/
├── content/
│   ├── docs/           # All documentation pages (MDX)
│   └── types/          # Auto-generated type documentation (JSON)
├── examples/           # Live code examples shown in docs
├── components/
│   ├── docs/          # Documentation-specific components
│   └── mdx/           # MDX component overrides
├── layouts/           # Page layouts
├── lib/               # Utility functions
└── pages/             # Astro routing pages
```

## Documentation Pages

### Location and Organization

Documentation lives in `src/content/docs/` with the following structure:

- `components/` - Component documentation
- `design/` - Design system documentation
- `get-started/` - Getting started guides
- `guides/` - How-to guides and recipes
- `headless/` - Headless library integrations
- `integrations/` - Framework integrations
- `resources/` - Contributing, changelogs, etc.
- `tailwind/` - Tailwind-specific documentation

### Component Documentation Structure

Each component has its own directory with three files:

```
components/{component-name}/
├── meta.mdx        # Component metadata and overview
├── react.mdx       # React-specific examples and docs
└── svelte.mdx      # Svelte-specific examples and docs
```

## meta.mdx File

The `meta.mdx` file contains frontmatter metadata for the component:

```mdx
---
title: Component Name
description: Brief description of what the component does.
srcCss: '/src/classes/component-name'
srcSvelte: '/src/components/component-name'
srcReact: '/src/components/component-name'
srcZag: 'https://zagjs.com/components/react/component-name'
showDocsUrl: true
stability: 'stable' # Optional: 'alpha', 'beta', or 'stable' (default)
---
```

**Frontmatter Fields:**

- `title` - Component name (capitalized)
- `description` - One-sentence description
- `srcCss` - Path to CSS classes in skeleton-common
- `srcSvelte` - Path to Svelte component
- `srcReact` - Path to React component
- `srcZag` - URL to Zag.js documentation
- `showDocsUrl` - Whether to show GitHub source links
- `stability` - Component maturity level (shows warning banner if not 'stable')

## Framework-Specific MDX Files (react.mdx / svelte.mdx)

### Required Frontmatter

```mdx
---
layout: '@layouts/LayoutDoc.astro'
---
```

### Required Exports

Must include this line at the top after frontmatter:

```mdx
export const components = componentSet;

;
```

This enables custom MDX component overrides (styled headings, links, tables, etc.).

### Import Pattern

Import examples and their raw source code in **alphabetical order by feature name**:

```mdx
import Default from '@examples/components/avatar/react/default.tsx';
import DefaultRaw from '@examples/components/avatar/react/default.tsx?raw';

import Fallback from '@examples/components/avatar/react/fallback.tsx';
import FallbackRaw from '@examples/components/avatar/react/fallback.tsx?raw';

import Filter from '@examples/components/avatar/react/filter.tsx';
import FilterRaw from '@examples/components/avatar/react/filter.tsx?raw';

;
```

**Import Order Rules:**

1. Group by feature/example name (Default, Fallback, Filter, etc.)
2. Component import first, then raw source import
3. Alphabetical order by feature name
4. Add blank line between feature groups

### Preview Component Pattern

Use the `<Preview>` component to show interactive examples with code:

```mdx
<Preview client:load>
	<Fragment slot="preview">
		<Default client:visible />
	</Fragment>
	<Fragment slot="code">
		<Code code={DefaultRaw} lang="tsx" />
	</Fragment>
</Preview>
```

**Key Points:**

- `client:load` on `<Preview>` for interactivity
- `client:visible` on example component for lazy loading
- `lang="tsx"` for React, `lang="svelte"` for Svelte
- Use `<Fragment slot="...">` for slots

### Section Structure

Organize examples with descriptive headings:

```mdx
## Feature Name

Brief description of the feature or pattern being demonstrated.

<Preview client:load>
	<!-- ... -->
</Preview>
```

**Heading Hierarchy:**

- Use `##` (h2) for main feature sections
- Use `###` (h3) for sub-features if needed
- First example usually doesn't need a heading (it's the default)

### API Reference Section

Always end with the API reference:

```mdx
## API Reference

<ApiTable />
```

The `<ApiTable />` component automatically loads and displays prop types from `src/content/types/`.

## Example Files

### Location

Examples live in `src/examples/` mirroring the docs structure:

```
examples/
├── components/
│   └── {component-name}/
│       ├── react/
│       │   ├── default.tsx
│       │   ├── fallback.tsx
│       │   └── filter.tsx
│       └── svelte/
│           ├── default.svelte
│           ├── fallback.svelte
│           └── filter.svelte
├── design/
├── guides/
├── integrations/
└── tailwind/
```

### Naming Convention

- Use kebab-case for file names: `default.tsx`, `auto-highlight.tsx`, `custom-filter.svelte`
- Match the feature name to the section heading in docs
- Keep names descriptive but concise

### Example File Structure

**React Example:**

```tsx
import { Component } from '@skeletonlabs/skeleton-react';

export default function ExampleName() {
	return <Component>{/* Implementation */}</Component>;
}
```

**Svelte Example:**

```svelte
<script lang="ts">
	import { Component } from '@skeletonlabs/skeleton-svelte';
</script>

<Component>
	{/* Implementation */}
</Component>
```

**Example Guidelines:**

- Keep examples focused on one feature/pattern
- Use realistic but simple data
- Include necessary state management
- Add comments for complex logic
- Make examples copy-pasteable and runnable
- Use appropriate Tailwind classes for styling

## Writing Style

### Descriptions

- Keep component descriptions to 1-2 sentences
- Focus on what the component does, not how to use it
- Use active voice

### Section Headers

- Use sentence case: "Auto highlight" not "Auto Highlight"
- Be descriptive: "Disabled item" not just "Disabled"
- Match the example file name semantically

### Content Guidelines

- Start with the simplest example (usually "default")
- Progress to more complex examples
- Add brief context before each `<Preview>` when needed
- Cross-reference related docs with markdown links: `[Link text](/docs/path)`
- Mention accessibility features when relevant
- Note framework-specific differences (e.g., `className` vs `class`)

## Special Components

### Code Component

Used within `<Preview>` to display source:

```mdx
<Code code={ExampleRaw} lang="tsx" />
```

Languages: `tsx`, `svelte`, `ts`, `js`, `css`, `astro`, `shell`

### Preview Component

Interactive example with preview/code tabs:

```mdx
<Preview client:load>
	<Fragment slot="preview">
		<Example client:visible />
	</Fragment>
	<Fragment slot="code">
		<Code code={ExampleRaw} lang="tsx" />
	</Fragment>
</Preview>
```

### ApiTable Component

Auto-generates API documentation from types:

```mdx
<ApiTable />
```

Optional props:

- `component` - Override component name detection
- `framework` - Override framework detection

### NavGrid Component

Creates a grid of navigation cards:

```mdx
<NavGrid collection="docs" path="installation/" classes="md:grid-cols-2" />
```

## Astro Directives

### Client Directives

- `client:load` - Load immediately on page load (for critical UI)
- `client:visible` - Load when component enters viewport (for lazy loading)
- `client:idle` - Load when browser is idle
- `client:only="react"` - Only render on client for specific framework

**Usage Pattern:**

- Use `client:load` on `<Preview>` components
- Use `client:visible` on example components inside Preview
- This optimizes initial page load while keeping examples interactive

## File Path Aliases

The following path aliases are configured:

- `@components/` → `src/components/`
- `@examples/` → `src/examples/`
- `@layouts/` → `src/layouts/`
- `@lib/` → `src/lib/`
- `@icons/` → `src/icons/`
- `@images/` → `src/images/`
- `@content/` → `src/content/`
- `@styles/` → `src/styles/`

Always use these aliases in imports for consistency.

## Type Documentation

Type documentation is auto-generated from component source code and stored in `src/content/types/{framework}/{component}.json`.

**Do not manually edit these JSON files** - they are generated by the build process.

The generation script is in `scripts/generate-type-documentation/`.

## Common Patterns

### Basic Component Example

```mdx
---
layout: '@layouts/LayoutDoc.astro'
---

export const components = componentSet;

import Default from '@examples/components/example/react/default.tsx';
import DefaultRaw from '@examples/components/example/react/default.tsx?raw';

<Preview client:load>
	<Fragment slot="preview">
		<Default client:visible />
	</Fragment>
	<Fragment slot="code">
		<Code code={DefaultRaw} lang="tsx" />
	</Fragment>
</Preview>

## API Reference

<ApiTable />
```

### Multiple Examples Pattern

```mdx
import Default from '@examples/components/example/react/default.tsx';
import DefaultRaw from '@examples/components/example/react/default.tsx?raw';

import Advanced from '@examples/components/example/react/advanced.tsx';
import AdvancedRaw from '@examples/components/example/react/advanced.tsx?raw';

<Preview client:load>
	<Fragment slot="preview">
		<Default client:visible />
	</Fragment>
	<Fragment slot="code">
		<Code code={DefaultRaw} lang="tsx" />
	</Fragment>
</Preview>

## Advanced Usage

This example demonstrates more complex functionality.

<Preview client:load>
	<Fragment slot="preview">
		<Advanced client:visible />
	</Fragment>
	<Fragment slot="code">
		<Code code={AdvancedRaw} lang="tsx" />
	</Fragment>
</Preview>
```

### Cross-Reference Pattern

Reference other documentation:

```mdx
See the [Installation Guide](/docs/get-started/installation) for setup instructions.

Combine with [SVG Filters](/docs/guides/cookbook/svg-filters) for visual effects.

Learn more about [Zag.js](https://zagjs.com/) state machines.
```

## Framework Differences to Note

When documenting components, be aware of these framework-specific differences:

**React:**

- Uses `className` for CSS classes
- Uses `onChange`, `onClick` event handlers
- Camel-case SVG attributes: `strokeWidth`

**Svelte:**

- Uses `class` for CSS classes
- Uses `on:change`, `on:click` event handlers
- Kebab-case SVG attributes: `'stroke-width'`

Mention these differences in examples when relevant, especially for styling examples.

## Best Practices

1. **Consistency:** Follow existing patterns in similar component docs
2. **Progressive complexity:** Start simple, add complexity gradually
3. **Real-world examples:** Use realistic data and use cases
4. **Accessibility:** Highlight a11y features when present
5. **Visual clarity:** Use examples that clearly demonstrate the feature
6. **Performance:** Use `client:visible` for lazy loading when appropriate
7. **Completeness:** Always include the API Reference section
8. **Alphabetical imports:** Keep import statements organized
9. **Descriptive sections:** Use clear headings that explain what's being shown
10. **Cross-reference:** Link to related docs when helpful

## Testing Documentation

Before submitting documentation:

1. Run the dev server: `pnpm dev:docs`
2. Navigate to your component page
3. Verify all examples load and are interactive
4. Check that code snippets display correctly
5. Ensure API table loads with proper types
6. Test on both React and Svelte tabs (if applicable)
7. Verify responsive behavior
8. Check for broken links

## Common Mistakes to Avoid

- Forgetting `export const components = componentSet;` at the top
- Incorrect import paths (use `@examples/` alias)
- Missing `.tsx` or `.svelte` extensions in imports
- Not using `?raw` suffix for source code imports
- Forgetting `client:load` on Preview
- Forgetting `client:visible` on examples
- Wrong `lang` attribute on Code component
- Not including API Reference section
- Inconsistent example naming between files
- Out-of-order imports (should be alphabetical)
