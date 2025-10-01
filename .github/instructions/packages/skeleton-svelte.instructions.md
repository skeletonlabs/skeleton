---
applyTo: 'packages/skeleton-svelte/**'
---

# Skeleton Svelte Component Guidelines

## Svelte-Specific Patterns

When creating or modifying Svelte components in this package:

### Props and Reactivity

- Declare props with `$props()` rune: `const props: ComponentProps = $props()`
- Use `$derived()` for computed values: `const { element, children, ...rest } = $derived(props)`
- Props destructuring must always use `$derived`

### Context Usage

- Consume contexts with `.consume()` method: `const api = RootContext.consume()`
- Provide contexts with `.provide()` method: `RootContext.provide(() => api())`
- **CRITICAL**: Non-root contexts (ViewContext, TableCellContext, etc.) must wrap types in functions for reactivity:
  - Non-root: `createContext<() => Type>()`
  - Root: `createContext<ReturnType<typeof useComponent>>()`

### API Access

- **CRITICAL**: Root API is a function that must be called: `api().getProps()`, `api().value`
- This is because the provider returns `() => api` for reactivity
- Always call the function before accessing properties or methods

### Component Structure

- Use `mergeProps` from `@zag-js/svelte` to combine props
- Use `class` (not `className`) for CSS classes
- Use `normalizeProps` from `@zag-js/svelte` in provider
- Import `type PropTypes` from `@zag-js/svelte`

### Provider Pattern

```typescript
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useComponent(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const api = $derived(connect(service, normalizeProps));
	return () => api;
}
```

Note: Provider always accepts `Props | (() => Props)` and returns `() => Api`

### Module Script vs Component Script

- Use `<script lang="ts" module>` for type exports
- Use `<script lang="ts">` for component logic
- Module script runs once, component script runs per instance

### Default Children (Snippets)

Create a snippet for defaults:

```svelte
{#snippet defaultIcon()}
	<IconComponent />
{/snippet}

const {(children = defaultIcon)} = $derived(props);
```

### Conditional Rendering

Use `{#if}` blocks:

```svelte
{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
```

### Render Props

Use snippets with parameters: `children: Snippet<[Api]>`
Render with `{@render children(api())}`

### SVG Attributes

Use kebab-case in quotes: `'stroke-width'`, `'stroke-linecap'`, `'stroke-linejoin'`

### Testing

- Import from `@testing-library/svelte`
- Use `.svelte` extension for test components
- Render with `render(Component)`

## File Extensions

- Components: `.svelte`
- Providers: `.svelte.ts`
- Tests: `.test.ts`
- Type-only modules: `.ts`

## Common Pitfalls

- Forgetting to call `api()` before accessing methods/properties
- Using direct context types instead of function-wrapped types for non-root contexts
- Not using `$derived()` when destructuring props
- Using `className` instead of `class`
- Forgetting to call `children?.()` when rendering snippets
