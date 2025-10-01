---
applyTo: 'packages/skeleton-common/**'
---

# Skeleton Common Package Guidelines

## Purpose

This package contains shared utilities, CSS classes, and types used across all Skeleton framework packages (React, Svelte, and core CSS).

## CSS Classes

### Location

Component class definitions live in `src/classes/{component-name}.ts`

### Pattern

Export an object with class names for each component part:

```typescript
export const classesComponent = {
	root: 'skeleton-component',
	trigger: 'skeleton-component-trigger',
	content: 'skeleton-component-content',
	// ... other parts
} as const;
```

### Naming Convention

- Prefix all classes with `skeleton-`
- Use kebab-case
- Structure: `skeleton-{component}` for root, `skeleton-{component}-{part}` for sub-parts

### Export

Add to `src/index.ts` in alphabetical order:

```typescript
export { classesComponent } from './classes/component';
```

## Themes

Theme configuration and utilities live in `src/themes.ts`

## Internal Utilities

Shared internal utilities that both React and Svelte packages need should be placed in `src/internal/`

## Types

When creating types that need to be shared across frameworks:

- Place in appropriate directory under `src/`
- Export from `src/index.ts`
- Ensure types are framework-agnostic

## Best Practices

- Keep code framework-agnostic (no React or Svelte specific code)
- Use TypeScript for all files
- Export everything through `src/index.ts` for clean imports
- Follow existing patterns for consistency
- Maintain alphabetical ordering in exports

## Package Dependencies

This package should have minimal dependencies. It's a foundational package that others depend on, so:

- Avoid framework-specific dependencies
- Keep bundle size small
- Only include truly shared code
