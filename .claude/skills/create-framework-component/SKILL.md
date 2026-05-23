---
name: create-framework-component
description: Create framework components across all supported packages using the repository's anatomy/modules conventions.
---

# Create Framework Component

Scaffold a new component across all supported framework packages using the existing anatomy/modules authoring style and API conventions.

## Repository Structure

This repository contains implementations for multiple frameworks. Unless otherwise specified, apply the same patterns, conventions, and API design consistently across all framework packages.

### Component Sources

- Components: `packages/<framework>/src/components/`
- Component tests: `packages/<framework>/test/components/`
- Public package exports: `packages/<framework>/src/index.ts`

### Reference Components

Use existing components as implementation references:

- Static / non-machine component:
  - `packages/<framework>/src/components/app-bar/index.ts`

- Machine-backed component:
  - `packages/<framework>/src/components/accordion/index.ts`

### Framework Packages

Available framework package directories include:

- `packages/skeleton-react/`
- `packages/skeleton-svelte/`

Replace `<framework>` with the appropriate package when navigating the repository.

## File destination rules

Recommend structure based on component complexity, explain the reasoning, and accept overrides.

### Simple / Static component

Create the following in each framework package:

- `anatomy/*`
- `modules/anatomy.ts`
- `index.ts`

### Machine-backed component

To view the documentation of a machine: https://zagjs.com/api/mdx/components/<framework>/<machine>

In addition to anatomy files, include provider/context modules as needed:

#### React

- `modules/provider.ts`
- Context and hook files as needed

#### Svelte

- `modules/provider.svelte.ts`
- Context and store files as needed

### API consistency

Always mirror APIs across frameworks:

- Namespace members
- Part names
- Prop interface names
- Provider naming
- Hook/composable naming
- Context exports

## Conventions

Based on the existing `app-bar`, `accordion`, and `dialog` implementations.

### Naming

- Folder names use kebab-case:
  - `app-bar`
- Exported namespaces use PascalCase:
  - `AppBar`

### File organization

Maintain the anatomy/modules split:

#### `anatomy/*`

Renderable component parts only.

#### `modules/*`

Context, providers, namespace composition, machines, and framework glue.

#### `index.ts`

Type exports and namespace exports only.

### React conventions

- Anatomy files use `.tsx`
- `index.ts` type exports reference `.jsx` paths
- Use `PropsWithElement` + `HTMLAttributes`
- Build attributes with `mergeProps`
- Support element override fallback patterns

### Svelte conventions

- Anatomy files use `.svelte`
- Interfaces live in `<script lang="ts" module>`
- Maintain prop and slot parity with React where possible

### Namespace composition

Compose namespaces using:

```ts
Object.assign(Root, {
	...parts,
});
```

Inside:

- `modules/anatomy.ts`

### Static anatomy parts

Include:

- `data-scope`
- `data-part`

attributes on all renderable anatomy parts.

## Prompt flow

Ask one question at a time. Confirm each step. Do not generate files until all answers are confirmed.

### 1. Component name

Determine:

- kebab-case folder name
- PascalCase namespace

Recommend both and accept overrides.

### 2. Component type

Determine whether the component is:

- Static/simple
- Machine-backed (Zag or equivalent)

This determines required module/provider files.

### 3. Public exports

Determine whether to expose:

- `Provider`
- `Context`
- `useX`
- Other framework-specific hooks/composables

### 4. Confirmation

Before writing files, show:

- Planned file tree for every framework
- Planned namespace API
- Provider/context structure
- Public exports

Wait for confirmation before scaffolding.

## After scaffolding

### 1. Root exports

Add component re-exports to:

- `packages/<framework>/src/index.ts`

Keep ordering consistent with neighboring entries.

### 2. Tests

Add tests for every framework package.

#### Test files

- Fixture:
  - `packages/<framework>/test/components/<component>.<ext>`
- Suite:
  - `packages/<framework>/test/components/<component>.test.<ext>`

### Test coverage requirements

For every anatomy part:

- Include render assertions (`toBeInTheDocument`)
- Validate namespace exports
- Validate prop delegation and attribute forwarding
- Validate provider/context behavior where applicable

### 3. Playground integration

Add the component to each corresponding playground package:

- `playgrounds/skeleton-<framework>`

### 4. Docs generation

Update generated docs by running:

```bash
pnpm generate
```

inside:

```bash
packages/docs
```

### 5. Optional docs scaffolding

If requested, trigger:

```txt
/create-doc
```

using the new component slug.

## Final summary

Summarize:

- Files created per framework
- Namespace members exported
- Provider/context/hook files added
- Root index exports added
- Playground updates
- Test coverage added
- Prop delegation coverage
- Docs generation status
