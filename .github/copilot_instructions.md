# Skeleton Component Implementation Guide

This guide provides step-by-step instructions for implementing new Skeleton components across React and Svelte frameworks using Zag.js primitives.

## Prerequisites

Before starting, ensure you have:

- Read the contribution guidelines: `sites/skeleton.dev/src/content/docs/resources/contribute/components.mdx`
- Identified the Zag.js primitive component you're implementing
- Access to Zag.js documentation for both React and Svelte versions

---

## Directory Structure

All components follow this structure:

```
packages/skeleton-{framework}/src/components/{component-name}/
├── anatomy/
│   ├── root.{tsx|svelte}
│   ├── root-provider.{tsx|svelte}
│   ├── root-context.{tsx|svelte}
│   └── [other-component-parts].{tsx|svelte}
├── modules/
│   ├── anatomy.ts
│   ├── provider.{ts|svelte.ts}
│   ├── root-context.ts
│   └── [other-context-files].ts
└── index.ts
```

---

## Implementation Checklist

### 1. Check if Styles Already Exist

- [ ] Check if `packages/skeleton-common/src/classes/{component-name}.ts` exists
- [ ] If not, create style classes following the pattern in other components
- [ ] Export the classes in `packages/skeleton-common/src/index.ts`

### 2. Create Module Files

#### `modules/provider.{ts|svelte.ts}`

**React** (`provider.ts`):

```typescript
import { type Api, connect, machine, type Props } from '@zag-js/{component}';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { useId } from 'react';

export function use{Component}(props: Omit<Props, 'id'> = {}): Api<PropTypes> {
	const service = useMachine(machine, {
		id: useId(),
		...props,
	});
	return connect(service, normalizeProps);
}
```

**Svelte** (`provider.svelte.ts`):

```typescript
import { connect, machine } from '@zag-js/{component}';
import type { Api, Props } from '@zag-js/{component}';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function use{Component}(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const {component} = $derived(connect(service, normalizeProps));
	return () => {component};
}
```

#### `modules/root-context.ts` (Same for both frameworks):

```typescript
import type { use{Component} } from './provider{.svelte}';
import { createContext } from '@/internal/create-context';

export const RootContext = createContext<ReturnType<typeof use{Component}>>();
```

#### Additional Context Files

Create context files for any child components that need to share state (e.g., `view-context.ts`, `table-cell-context.ts`).

**IMPORTANT for Svelte**: When creating non-root contexts, wrap the type in a function `() => Type` to preserve reactivity with Svelte's $state runes. React does not need this as it re-renders everything.

**React** - Direct type:

```typescript
import { createContext } from '@/internal/create-context';
import type { {Type}Props } from '@zag-js/{component}';

export const {Name}Context = createContext<{Type}Props>();
```

**Svelte** - Wrapped in function for reactivity:

```typescript
import { createContext } from '@/internal/create-context';
import type { {Type}Props } from '@zag-js/{component}';

export const {Name}Context = createContext<() => {Type}Props>();
```

**Example - View Context (Svelte)**:

```typescript
import { createContext } from '@/internal/create-context';
import type { ViewProps } from '@zag-js/date-picker';

export const ViewContext = createContext<() => Required<ViewProps>>();
```

### 3. Create Anatomy Components

#### Root Component Pattern

**React** (`anatomy/root.tsx`):

```tsx
import { use{Component} } from '../modules/provider';
import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classes{Component} } from '@skeletonlabs/skeleton-common';
import { type Props, splitProps } from '@zag-js/{component}';
import { mergeProps } from '@zag-js/react';

export interface {Component}RootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir'> {}

export default function Root(props: {Component}RootProps) {
	const [{component}Props, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const {component} = use{Component}({component}Props);

	const attributes = mergeProps(
		{component}.getRootProps(),
		{
			className: classes{Component}.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={{component}}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
```

**Svelte** (`anatomy/root.svelte`):

```svelte
<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Props } from '@zag-js/{component}';

	export interface {Component}RootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { use{Component} } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context';
	import { classes{Component} } from '@skeletonlabs/skeleton-common';
	import { splitProps } from '@zag-js/{component}';
	import { mergeProps } from '@zag-js/svelte';

	const props: {Component}RootProps = $props();

	const [{component}Props, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const {component} = use{Component}(() => ({
		id: id,
		...{component}Props,
	}));

	const attributes = $derived(
		mergeProps(
			{component}().getRootProps(),
			{
				class: classes{Component}.root,
			},
			rest,
		),
	);

	RootContext.provide(() => {component}());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
```

#### Root Provider Pattern (Similar to Root, but accepts external API)

**React**:

```tsx
export interface {Component}RootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	value: ReturnType<typeof use{Component}>;
}

export default function RootProvider(props: {Component}RootProviderProps) {
	const { element, children, value: {component}, ...rest } = props;

	const attributes = mergeProps(
		{component}.getRootProps(),
		{
			className: classes{Component}.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={{component}}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
```

**Svelte**: Similar pattern, destructure `value` from props and use it instead of creating new instance.

#### Root Context Pattern (Exposes API to children)

**React**:

```tsx
import type { use{Component} } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context';
import { type ReactNode, use } from 'react';

export interface {Component}RootContextProps {
	children: (component: ReturnType<typeof use{Component}>) => ReactNode;
}

export default function RootContext(props: {Component}RootContextProps) {
	const {component} = use(RootContext_);
	const { children } = props;
	return children({component});
}
```

**Svelte**:

```svelte
<script lang="ts" module>
	import type { use{Component} } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface {Component}RootContextProps {
		children: Snippet<[ReturnType<typeof use{Component}>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';

	const props: {Component}RootContextProps = $props();
	const {component} = RootContext.consume();
	const { children } = $derived(props);
</script>

{@render children({component})}
```

#### Child Component Pattern

**React**:

```tsx
import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classes{Component} } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface {Component}{Part}Props extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function {Part}(props: {Component}{Part}Props) {
	const {component} = use(RootContext);
	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		{component}.get{Part}Props(),
		{
			className: classes{Component}.{part},
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
```

**Svelte**:

```svelte
<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface {Component}{Part}Props extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { classes{Component} } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: {Component}{Part}Props = $props();
	const {component} = RootContext.consume();
	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			{component}().get{Part}Props(),
			{
				class: classes{Component}.{part},
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
```

#### Components with Default Icon/Content Snippets

For components with default children (like triggers with icons):

**React**:

```tsx
import IconComponent from '@/internal/components/icon-component';

export default function Trigger(props: {Component}TriggerProps) {
	const {component} = use(RootContext);
	const { element, children = <IconComponent />, ...rest } = props;
	// ... rest of implementation
}
```

**Svelte**:

```svelte
<script lang="ts">
	import IconComponent from '@/internal/components/icon-component.svelte';

	const props: {Component}TriggerProps = $props();
	const {component} = RootContext.consume();
	const { element, children = defaultIcon, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			{component}().getTriggerProps(),
			{ class: classes{Component}.trigger },
			rest,
		),
	);
</script>

{#snippet defaultIcon()}
	<IconComponent />
{/snippet}

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
```

### 4. Create Internal Icon Components (if needed)

If the component requires new icons, create them in `packages/skeleton-{framework}/src/internal/components/`:

**React** (`icon-name.tsx`):

```tsx
import type { HTMLAttributes } from '../html-attributes';
import { mergeProps } from '@zag-js/react';

export type IconNameProps = HTMLAttributes<'svg', 'children'>;

export default function IconName(props: IconNameProps) {
	const { ...rest } = props;

	const attributes = mergeProps(
		{
			xmlns: 'http://www.w3.org/2000/svg',
			width: '24',
			height: '24',
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: '2',
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		},
		rest,
	);

	return <svg {...attributes}>{/* SVG paths */}</svg>;
}
```

**Svelte** (`icon-name.svelte`):

```svelte
<script lang="ts" module>
	import type { HTMLAttributes } from '../html-attributes';

	export interface IconNameProps extends HTMLAttributes<'svg', 'children'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';

	const props: IconNameProps = $props();
	const { ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			{
				xmlns: 'http://www.w3.org/2000/svg',
				width: '24',
				height: '24',
				viewBox: '0 0 24 24',
				fill: 'none',
				stroke: 'currentColor',
				'stroke-width': '2',
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
			},
			rest,
		),
	);
</script>

<svg {...attributes}>
	{/* SVG paths */}
</svg>
```

### 5. Create modules/anatomy.ts

```typescript
import ComponentPart1 from '../anatomy/component-part1{.svelte}';
import ComponentPart2 from '../anatomy/component-part2{.svelte}';
import RootContext from '../anatomy/root-context{.svelte}';
import RootProvider from '../anatomy/root-provider{.svelte}';
import Root from '../anatomy/root{.svelte}';

export const { Component } = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Part1: ComponentPart1,
	Part2: ComponentPart2,
	// ... all other parts
});
```

### 6. Create index.ts

```typescript
export type { {Component}Part1Props } from './anatomy/component-part1{.svelte}';
export type { {Component}Part2Props } from './anatomy/component-part2{.svelte}';
export type { {Component}RootProps } from './anatomy/root{.svelte}';
export type { {Component}RootContextProps } from './anatomy/root-context{.svelte}';
export type { {Component}RootProviderProps } from './anatomy/root-provider{.svelte}';
export { {Component} } from './modules/anatomy';
export { use{Component} } from './modules/provider{.svelte}';
```

### 7. Update Package Exports

Add to `packages/skeleton-{framework}/src/index.ts` (in alphabetical order):

```typescript
export * from './components/{component-name}/index';
```

### 8. Add Zag.js Dependency

Add to `packages/skeleton-{framework}/package.json` dependencies (in alphabetical order):

```json
"@zag-js/{component-name}": "catalog:",
```

### 9. Create Tests

#### Test File (`test/components/{component}/index.test.{tsx|ts}`)

**React**:

```tsx
import Test from './test';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('{Component}', () => {
	describe('Root', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	// ... test for each component part
});
```

**Svelte**:

```typescript
import Test from './test.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('{Component}', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	// ... test for each component part
});
```

#### Test Component (`test/components/{component}/test.{tsx|svelte}`)

Create a comprehensive test component that includes all component parts with `data-testid` attributes.

### 10. Create Playground Example

#### React (`playgrounds/skeleton-react/src/app/components/{component}/page.tsx`)

```tsx
'use client';

import { {Component}, Portal } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<{Component}>
			{/* Full component implementation */}
		</{Component}>
	);
}
```

#### Svelte (`playgrounds/skeleton-svelte/src/routes/components/{component}/+page.svelte`)

```svelte
<script lang="ts">
	import { {Component}, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<{Component}>
	{/* Full component implementation */}
</{Component}>
```

---

## Key Differences Between React and Svelte

| Feature                   | React                            | Svelte                                      |
| ------------------------- | -------------------------------- | ------------------------------------------- |
| **Context consumption**   | `use(Context)`                   | `Context.consume()`                         |
| **Context provision**     | `<Context.Provider value={...}>` | `Context.provide(() => ...)`                |
| **Props destructuring**   | Direct: `const { x } = props`    | Derived: `const { x } = $derived(props)`    |
| **Runes**                 | N/A                              | `$props()`, `$derived()`, `$state()`        |
| **Class attribute**       | `className`                      | `class`                                     |
| **SVG attributes**        | camelCase: `strokeWidth`         | kebab-case: `'stroke-width'`                |
| **Conditional rendering** | `{condition && <div />}`         | `{#if condition}<div />{/if}`               |
| **Lists**                 | `.map((item) => ...)`            | `{#each items as item}...{/each}`           |
| **Render props**          | `{(api) => <div />}`             | `{#snippet children(api)}<div />{/snippet}` |
| **API access in context** | `api.method()`                   | `api().method()` (function call)            |

---

## Common Patterns

### Components with Zag Props that Need Splitting

When a component accepts both Zag-specific props and HTML props:

```typescript
// React
const [zagProps, componentProps] = splitProps(props);
const { element, children, ...rest } = componentProps;

// Svelte
const [zagProps, componentProps] = $derived(splitProps(props));
const { element, children, ...rest } = $derived(componentProps);
```

### Components that Provide Additional Context

When a component needs to provide context for its children (like View or TableCell):

**Svelte** - Provide the context wrapped in a function:

```typescript
// After mergeProps, before return
{
	Context;
}
Context.provide(() => contextValue);
```

**Consuming non-root context in Svelte**:

```typescript
// Because the context type is () => Type, you must call it
const viewProps = ViewContext.consume();
const view = viewProps().view; // Call the function to get the actual value
```

**React** - Direct provision (no function wrapper needed):

```typescript
<{Context}Context.Provider value={contextValue}>
	{children}
</{Context}Context.Provider>
```

### Components with Dynamic Getter Methods

When getter methods need to switch based on context (like TableCell with day/month/year views):

```typescript
function getTableCellProps(props: Props) {
	switch (viewProps{()}.view) {
		case 'day':
			return api{()}.getDayTableCellProps(props);
		case 'month':
			return api{()}.getMonthTableCellProps(props);
		case 'year':
			return api{()}.getYearTableCellProps(props);
	}
}
```

---

## Final Checklist

- [ ] All component parts created in anatomy/
- [ ] All module files created
- [ ] Component exported in package index.ts
- [ ] Zag.js dependency added to package.json
- [ ] Tests created and passing
- [ ] Playground examples created for both frameworks
- [ ] Styles exist in skeleton-common (if needed)
- [ ] Internal icons created (if needed)
- [ ] All TypeScript errors resolved (except expected Zag.js type issues)
- [ ] Code follows existing patterns and conventions
- [ ] Component matches React/Svelte implementation across frameworks

---

## Tips for AI Assistants

1. **Always read the contribution guide first**: `sites/skeleton.dev/src/content/docs/resources/contribute/components.mdx`

2. **Reference existing components**: Look at similar components (Avatar, Combobox, etc.) for patterns

3. **Check both frameworks**: Ensure React and Svelte implementations are consistent

4. **CRITICAL for Svelte contexts**: Non-root contexts (like ViewContext, TableCellContext) MUST use `createContext<() => Type>()` (function wrapper) to preserve reactivity. Root contexts use `createContext<ReturnType<typeof useComponent>>()` (no wrapper). React uses direct types for all contexts.

5. **Use the documentation**: Refer to Zag.js docs for the specific component being implemented

6. **Ask before inventing**: If a pattern isn't documented, ask the maintainer before implementing

7. **Test incrementally**: Create files in the order listed in this guide to catch issues early

8. **Match the style**: Keep whitespace, naming, and structure consistent with existing code

9. **Context is key**: Remember that Svelte context methods require function calls: `api()` not `api`

---

## Common Issues and Solutions

### Issue: TypeScript errors about missing Zag.js modules

**Solution**: Add the dependency to package.json and run `pnpm install`

### Issue: Context not available in child components

**Solution**: Ensure `Context.provide()` (Svelte) or `<Context.Provider>` (React) is called in parent

### Issue: "Property does not exist" on destructured props

**Solution**: Add `// @ts-expect-error` comment if it's a known Zag.js typing issue

### Issue: Icon not showing in trigger/button

**Solution**: Create a snippet/default children pattern with the icon component

### Issue: Tests failing with "not in document"

**Solution**: Check that test.svelte/test.tsx has all required props (like `view="day"`)

---

## Quick Reference: File Templates

See the detailed sections above for complete templates for:

- Root components (React & Svelte)
- Root provider components
- Root context components
- Child components
- Icon components
- Context files
- Module anatomy
- Index exports
- Test files
- Playground examples

---

**Last Updated**: October 1, 2025
**Maintainer**: Skeleton Labs Team
**Version**: 2.0.0-next
