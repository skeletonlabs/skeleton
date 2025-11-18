# Custom Agent Instructions for Contributing Zag-based Components to Skeleton

## Overview

These instructions are for AI agents contributing new Zag.js-based framework components to the Skeleton UI library. Follow these patterns to ensure consistency with existing components.

## Repository Structure

- **skeleton-common**: Shared classes and utilities (`packages/skeleton-common/src/classes/`)
- **skeleton-svelte**: Svelte 5 components (`packages/skeleton-svelte/src/components/`)
- **skeleton-react**: React components (`packages/skeleton-react/src/components/`)
- **Documentation**: Component docs (`sites/skeleton.dev/src/content/docs/framework-components/`)
- **Examples**: Live examples (`sites/skeleton.dev/src/components/examples/framework-components/`)

## Step-by-Step Implementation Guide

### 1. Add Zag.js Dependency

**File**: `pnpm-workspace.yaml`

- Add the Zag package to the `catalog` section in alphabetical order
- Use version `1.28.0` (or latest stable)

**Files**: `packages/skeleton-svelte/package.json` and `packages/skeleton-react/package.json`

- Add dependency in alphabetical order: `"@zag-js/{component-name}": "catalog:"`

**Install dependencies**:

```bash
pnpm install --no-frozen-lockfile
```

### 2. Create Classes in skeleton-common

**File**: `packages/skeleton-common/src/classes/{component-name}.ts`

```typescript
import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classes{ComponentName} = defineSkeletonClasses({
	// List all anatomy parts from Zag component
	trigger: '',
	positioner: '',
	content: '',
	// ... etc
});
```

**File**: `packages/skeleton-common/src/index.ts`

- Export the new classes file in alphabetical order

### 3. Implement Svelte Component

**Directory**: `packages/skeleton-svelte/src/components/{component-name}/`

Create subdirectories:

- `anatomy/` - Individual component parts
- `modules/` - Provider and context logic

**Provider** (`modules/provider.svelte.ts`):

```typescript
import { type Api, connect, machine, type Props } from '@zag-js/{component-name}';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function use{ComponentName}(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const {componentName} = $derived(connect(service, normalizeProps));
	return () => {componentName};
}
```

**Root Context** (`modules/root-context.ts`):

```typescript
import type { use{ComponentName} } from './provider.svelte.js';
import { createContext } from '@/internal/create-context.js';

export const RootContext = createContext<ReturnType<typeof use{ComponentName}>>();
```

**Anatomy Module** (`modules/anatomy.ts`):

```typescript
import Part1 from '../anatomy/part1.svelte';
// ... import all anatomy parts
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';

export const { ComponentName } = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Part1: Part1,
	// ... all parts
});
```

**Anatomy Components** (e.g., `anatomy/trigger.svelte`):

```svelte
<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes.js';
	import type { PropsWithElement } from '@/internal/props-with-element.js';

	export interface {ComponentName}TriggerProps
		extends PropsWithElement<'button'>,
			HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { classes{ComponentName} } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: {ComponentName}TriggerProps = $props();
	const {componentName} = RootContext.consume();
	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			{componentName}().getTriggerProps(),
			{
				class: classes{ComponentName}.trigger,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
```

**Index** (`index.ts`):

- Export all prop types from anatomy files
- Export the main component from modules/anatomy
- Export the hook from modules/provider

### 4. Implement React Component

**Directory**: `packages/skeleton-react/src/components/{component-name}/`

**Provider** (`modules/provider.ts`):

```typescript
import { type Api, connect, machine, type Props } from '@zag-js/{component-name}';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { useId } from 'react';

export function use{ComponentName}(props: Omit<Props, 'id'> = {}): Api<PropTypes> {
	const service = useMachine(machine, {
		id: useId(),
		...props,
	});
	return connect(service, normalizeProps);
}
```

**Root Context** (`modules/root-context.ts`):

```typescript
import type { use{ComponentName} } from './provider.js';
import { createContext } from '@/internal/create-context.js';

export const RootContext = createContext<ReturnType<typeof use{ComponentName}>>();
```

**Anatomy Components** (e.g., `anatomy/trigger.tsx`):

```typescript
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classes{ComponentName} } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface {ComponentName}TriggerProps
	extends PropsWithElement<'button'>,
		HTMLAttributes<'button'> {}

export default function Trigger(props: {ComponentName}TriggerProps) {
	const {componentName} = use(RootContext);
	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		{componentName}.getTriggerProps(),
		{
			className: classes{ComponentName}.trigger,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
```

**Key React Patterns**:

- Use `use()` hook instead of `useContext()` for context consumption
- Use `className` instead of `class`
- Use `PropsWithElement` and `HTMLAttributes` from internal modules
- Element prop is a render function: `element(attributes)` not `<Element {...attributes}>`
- For components with Zag-specific props (not HTML attributes), don't add them to HTMLAttributes second generic
- If using `splitProps` helpers, cast the result as needed: `as ZagPropsType`

### 5. Create Tests

**Svelte Tests** (`packages/skeleton-svelte/test/components/{component-name}/`):

**test.svelte**:

```svelte
<script lang="ts">
	import { {ComponentName} } from '@/index.js';
</script>

<{ComponentName}>
	<{ComponentName}.Trigger data-testid="trigger" />
	<!-- Add all anatomy parts with data-testid -->
</{ComponentName}>
```

**index.test.ts**:

```typescript
import Test from './test.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('{ComponentName}', () => {
	describe('Trigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});
	// ... test all parts
});
```

**React Tests** (`packages/skeleton-react/test/components/{component-name}/`):

- Follow same pattern with JSX syntax
- Use `client:visible` for hydration

**Test Conventions**:

- Don't add dummy text to children slots - just self-close: `<Component />`
- Use `data-testid` for all tested elements
- Test all anatomy parts for rendering

### 6. Create Documentation

**Main Doc** (`sites/skeleton.dev/src/content/docs/framework-components/{component-name}.mdx`):

````mdx
---
title: { Component Name }
description: Brief description of the component
stability: beta
---

import DefaultReact from '@/components/examples/framework-components/{component-name}/react/default';
import DefaultReactRaw from '@/components/examples/framework-components/{component-name}/react/default?raw';
import ProviderPatternReact from '@/components/examples/framework-components/{component-name}/react/provider-pattern';
import ProviderPatternReactRaw from '@/components/examples/framework-components/{component-name}/react/provider-pattern?raw';
import DefaultSvelte from '@/components/examples/framework-components/{component-name}/svelte/default.svelte';
import DefaultSvelteRaw from '@/components/examples/framework-components/{component-name}/svelte/default.svelte?raw';
import ProviderPatternSvelte from '@/components/examples/framework-components/{component-name}/svelte/provider-pattern.svelte';
import ProviderPatternSvelteRaw from '@/components/examples/framework-components/{component-name}/svelte/provider-pattern.svelte?raw';

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

Breaking convention in Skeleton, this component is provided "headless". Meaning no default styles are applied out of the box. This ensures you retain full control of all styling for maximum flexibility.

## Provider Pattern

Use the [Provider Pattern](/docs/[framework]/get-started/fundamentals#provider-pattern) to gain access to the inner component APIs.

<Framework id="react">
	<Preview framework="react" files={{ 'app.tsx': ProviderPatternReactRaw }} client:visible>
		<ProviderPatternReact client:visible />
	</Preview>
</Framework>
<Framework id="svelte">
	<Preview framework="svelte" files={{ 'app.svelte': ProviderPatternSvelteRaw }} client:visible>
		<ProviderPatternSvelte client:visible />
	</Preview>
</Framework>

## Anatomy

Here's an overview of how the {Component Name} component is structured in code:

<Framework id="react">

```tsx
import { {ComponentName} } from '@skeletonlabs/skeleton-react';

export default function Anatomy() {
	return (
		<{ComponentName}>
			<!-- Show all anatomy parts -->
		</{ComponentName}>
	);
}
```
````

</Framework>
<Framework id="svelte">

```svelte
<script lang="ts">
	import { {ComponentName} } from '@skeletonlabs/skeleton-svelte';
</script>

<{ComponentName}>
	<!-- Show all anatomy parts -->
</{ComponentName}>
```

</Framework>

## API Reference

<Framework id="react">
	<ApiReference id="react/{component-name}" />
</Framework>
<Framework id="svelte">
	<ApiReference id="svelte/{component-name}" />
</Framework>
```

**Example Files** (`sites/skeleton.dev/src/components/examples/framework-components/{component-name}/`):

Create both `react/` and `svelte/` subdirectories with:

- `default.{tsx|svelte}` - Basic usage (NO `defaultOpen` prop unless needed)
- `provider-pattern.{tsx|svelte}` - Provider pattern example

**Documentation Conventions**:

- Mark all new components as `stability: beta`
- Use ApiReference component, not links to Zag docs
- Don't use `defaultOpen` in examples (it defaults to false)
- Include "headless" disclaimer
- Show Provider Pattern example
- Show complete Anatomy
- Use ApiReference for API docs

### 7. Build and Validate

```bash
# Build packages
pnpm --filter @skeletonlabs/skeleton-common build
pnpm --filter @skeletonlabs/skeleton-svelte build
pnpm --filter @skeletonlabs/skeleton-react build

# Run checks
pnpm check          # TypeScript checks
pnpm format        # Format code
pnpm format:check  # Verify formatting
pnpm test          # Run all tests
```

### 8. Common Patterns and Gotchas

**Type Safety**:

- When Zag props conflict with HTML attributes, don't exclude them from HTMLAttributes
- Use type assertions when `splitProps` returns partial types: `as ZagPropsType`
- HTMLAttributes second generic is for excluding HTML attribute keys, not Zag-specific props

**Portal Usage**:

- Most Zag components don't need Portal wrapper for Positioner
- Check existing components (Dialog, Popover) to see if they use Portal
- FloatingPanel specifically doesn't use Portal

**Formatting**:

- Always run `pnpm format` before committing
- Prettier will handle all code style

**Testing**:

- All tests must pass before PR
- Don't add dummy content to test components
- Use self-closing tags when no children needed

**Branch Naming**:

- Use `feature/{component-name}` for new components
- Example: `feature/floating-panel`

## Example Workflow

1. Add dependency to catalog and packages
2. Install with `pnpm install --no-frozen-lockfile`
3. Create classes in skeleton-common
4. Implement Svelte component (provider, anatomy, tests)
5. Implement React component (provider, anatomy, tests)
6. Create documentation and examples
7. Build all packages
8. Run `pnpm check` and `pnpm format`
9. Run all tests
10. Create PR with description following template

## Quality Checklist

- [ ] Dependency added to catalog and both framework packages
- [ ] Classes created in skeleton-common
- [ ] Svelte component fully implemented with all anatomy parts
- [ ] React component fully implemented with all anatomy parts
- [ ] Both components follow framework conventions
- [ ] Tests created and passing for both frameworks
- [ ] Documentation created with stability: beta
- [ ] ApiReference component used (not Zag.js links)
- [ ] Examples don't use unnecessary defaultOpen
- [ ] All builds passing
- [ ] `pnpm check` passing
- [ ] `pnpm format:check` passing
- [ ] All tests passing

## Resources

- Check existing components for patterns: Dialog, Popover, Menu, Tooltip
- Zag.js documentation: https://zagjs.com
- Skeleton contribution guide: https://skeleton.dev/docs/resources/contribute/
