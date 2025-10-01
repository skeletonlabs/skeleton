# Skeleton Monorepo Structure

## Overview

This is a pnpm workspace monorepo containing the Skeleton design system packages, documentation sites, and playgrounds. The monorepo uses:

- **pnpm workspaces** for package management
- **Changesets** for versioning and publishing
- **Prettier** and **oxlint** for code quality
- **Turbo** for build orchestration

## Workspace Structure

### Packages (`packages/`)

Core library packages that are published to npm:

- **`skeleton`** - Core CSS design system and Tailwind plugin
- **`skeleton-common`** - Shared utilities, CSS classes, and types used across all packages
- **`skeleton-react`** - React component library
- **`skeleton-svelte`** - Svelte component library
- **`cli`** - Command-line tool for migrations and scaffolding

#### Package-Specific Instructions

Each package has detailed guidelines in `.github/instructions/packages/`:

- [`skeleton-common.instructions.md`](./packages/skeleton-common.instructions.md) - Shared utilities and CSS classes
- [`skeleton-react.instructions.md`](./packages/skeleton-react.instructions.md) - React component patterns and conventions
- [`skeleton-svelte.instructions.md`](./packages/skeleton-svelte.instructions.md) - Svelte component patterns and conventions

### Sites (`sites/`)

Documentation and utility websites:

- **`skeleton.dev`** - Main documentation site built with Astro
- **`themes.skeleton.dev`** - Theme generator and showcase built with SvelteKit

#### Site-Specific Instructions

Each site has detailed guidelines in `.github/instructions/sites/`:

- [`skeleton-dev.instructions.md`](./sites/skeleton-dev.instructions.md) - Documentation site structure and content guidelines

### Playgrounds (`playgrounds/`)

Development playgrounds for testing packages:

- **`skeleton-react`** - Next.js playground for testing React components
- **`skeleton-svelte`** - SvelteKit playground for testing Svelte components

## Common Patterns

### Dependencies

- Use **pnpm catalog** for shared dependency versions
- Local packages reference each other using workspace protocol: `"@skeletonlabs/skeleton": "workspace:*"`
- All packages should specify peer dependencies for framework-specific packages

### Scripts

Common scripts available at root and in most packages:

- `pnpm dev` - Start all development servers in parallel
- `pnpm dev:docs` - Start documentation-related packages
- `pnpm dev:themes` - Start theme generator and core CSS
- `pnpm dev:svelte` - Start Svelte packages and playground
- `pnpm dev:react` - Start React packages and playground
- `pnpm build` - Build all packages
- `pnpm test` - Run all tests
- `pnpm check` - Type check all packages
- `pnpm format` - Format code with Prettier
- `pnpm lint` - Lint code with oxlint

### Versioning and Publishing

- Use **Changesets** for version management
- Create changesets with: `pnpm changeset`
- Version packages: `pnpm changeset:version`
- Publish: `pnpm changeset:publish`

### Code Quality

- **Prettier** configuration in `prettier.config.ts`
- **oxlint** for fast TypeScript-aware linting
- All code should be formatted before committing

### Build System

- Packages use various build tools:
  - **Vite** for the core CSS package and sites
  - **tsdown** for React and Svelte component packages
  - **tsc** for TypeScript-only packages

### Testing

- React packages use **Vitest** + **@testing-library/react**
- Svelte packages use **Vitest** + **@testing-library/svelte**
- Test files use `.test.ts` or `.test.tsx` extensions

## Directory Conventions

### File Naming

- Components: PascalCase (e.g., `Button.tsx`, `Button.svelte`)
- Utilities: camelCase (e.g., `mergeClasses.ts`)
- CSS files: kebab-case or extension (e.g., `index.css`, `constants.scss`)
- Config files: kebab-case (e.g., `vite.config.ts`)

### Import Paths

- Use relative imports within a package
- Import from package entry points for cross-package imports
- Internal utilities should be in `internal/` subdirectories

## Package Relationships

```
skeleton (core CSS)
    ↓
skeleton-common (shared utilities)
    ↓
    ├── skeleton-react
    └── skeleton-svelte
```

- `skeleton` is the foundation CSS design system
- `skeleton-common` depends on `skeleton` and provides shared utilities
- Framework packages (`skeleton-react`, `skeleton-svelte`) depend on both `skeleton` and `skeleton-common`

## Getting Started

1. **Install dependencies**: `pnpm install`
2. **Build packages**: `pnpm build`
3. **Start development**: `pnpm dev` (or use specific dev scripts)

## Contributing

For contribution guidelines, see the [contribution guide](https://www.skeleton.dev/docs/resources/contribute) on the documentation site.
