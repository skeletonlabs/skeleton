---
applyTo: 'packages/skeleton-react/**'
---

# Skeleton React Component Guidelines

## React-Specific Patterns

When creating or modifying React components in this package:

### Props and Destructuring

- Destructure props directly: `const { element, children, ...rest } = props`
- No need for derived values or reactivity primitives

### Context Usage

- Consume contexts using React's `use()` hook: `const api = use(RootContext)`
- Provide contexts with `<Context.Provider value={api}>...</Context.Provider>`
- All context types are direct (not wrapped in functions): `createContext<ReturnType<typeof useComponent>>()`

### API Access

- Call API methods directly: `api.getProps()`, `api.value`, etc.
- No function wrapper needed

### Component Structure

- Use `mergeProps` from `@zag-js/react` to combine props
- Use `className` (not `class`) for CSS classes
- Use `normalizeProps` from `@zag-js/react` in provider
- Import `type PropTypes` from `@zag-js/react`

### Provider Pattern

```typescript
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { useId } from 'react';

export function useComponent(props: Omit<Props, 'id'> = {}): Api<PropTypes> {
	const service = useMachine(machine, {
		id: useId(),
		...props,
	});
	return connect(service, normalizeProps);
}
```

### Default Children

Use JSX directly for default children: `const { children = <IconComponent /> } = props`

### Conditional Rendering

Use ternary or `&&` operators: `{element ? element(attributes) : <div {...attributes}>{children}</div>}`

### SVG Attributes

Use camelCase: `strokeWidth`, `strokeLinecap`, `strokeLinejoin`

### Testing

- Import from `@testing-library/react`
- Use `.tsx` extension for test components
- Render with `render(<Component />)`

## File Extensions

- Components: `.tsx`
- Providers: `.ts`
- Tests: `.test.tsx`
- Type-only modules: `.ts`
