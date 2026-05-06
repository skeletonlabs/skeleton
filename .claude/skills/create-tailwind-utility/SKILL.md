---
name: create-tailwind-utility
description: Scaffold a new Tailwind utility (CSS-only utility class) in the Skeleton core package, following @utility conventions used by buttons, badges, cards, etc.
---

# Create Tailwind Component

Scaffold a new CSS-only utility class in the Skeleton core package at [packages/skeleton/src/utilities/](packages/skeleton/src/utilities/). Tailwind v4 `@utility` syntax.

## Where things live

- Utilities source: [packages/skeleton/src/utilities/](packages/skeleton/src/utilities/)
- Import registry: [packages/skeleton/src/index.css](packages/skeleton/src/index.css) — every new file must be added here
- Reference files to model after:
  - Tailwind Utility: [masks.css](packages/skeleton/src/utilities/masks.css)
  - Tailwind Component: [buttons.css](packages/skeleton/src/utilities/buttons.css), [badges.css](packages/skeleton/src/utilities/badges.css), [cards.css](packages/skeleton/src/utilities/cards.css), [chips.css](packages/skeleton/src/utilities/chips.css)
  - Form-related: [form-inputs.css](packages/skeleton/src/utilities/form-inputs.css), [form-selects.css](packages/skeleton/src/utilities/form-selects.css), etc.
  - Typography: [typography.css](packages/skeleton/src/utilities/typography.css)

## File destination rules

Recommend placement based on feature type, explain the reasoning, accept overrides.

- **Tailwind Utility** → extend [utilities/masks.css](packages/skeleton/src/utilities/masks.css). Document under [design/masks.mdx](sites/skeleton.dev/src/content/docs/tailwind-utilities/masks.mdx).
- **Tailwind Component** → new file at `utilities/<plural-name>.css` (e.g. `buttons.css`). Document under `tailwind-components/<plural-name>.mdx` modeled after [buttons.mdx](sites/skeleton.dev/src/content/docs/tailwind-components/buttons.mdx).

## Conventions (from buttons.css / badges.css)

- Top comment: `/* Components: <Name> */` or `/* Utilities: <Name> */`
- Base utility uses kebab-case class name: `@utility <name> { ... }`
- Variants use suffixes: `<name>-<modifier>` (e.g. `btn-icon`, `badge-dot`)
- Sizes use `--element-size-{xs,sm,base,lg,xl, ...}` design tokens; expose them via local CSS vars (`--btn-size`) so size variants override cleanly
- Wrap interactive states in `@variant not-disabled { @variant hover { ... } }`

## Prompt flow

Ask one at a time, confirm each, write nothing until all are answered and the user confirms.

1. **Feature name** — singular concept; derive the utility class (kebab-case singular, e.g. `btn`, `badge`) and the CSS filename (plural, e.g. `buttons.css`). Recommend both, accept overrides.
2. **Goal** — one-line description of what the component does and when to reach for it.
3. **Target HTML element(s)** — what the user is expected to apply this class to (e.g. `<button>`, `<a>`, `<span>`, `<input>`).
4. **Category** — utility, component → resolves file destination per the rules above. Surface the existing file option when a form/typography fit exists.
5. **Design requirements** — size variants? icon variant? state variants (active, disabled)? group wrapper? Anything else (radius, transitions, hover behavior).
6. **Confirm** — show the planned file path, utility class names, and design-token usage before writing.

## After scaffolding

1. Add the new file's `@import` to [packages/skeleton/src/index.css](packages/skeleton/src/index.css). Order matches the existing alphabetical-ish grouping.
2. Trigger `/create-doc` to scaffold the documentation page. Pass along the utility name and CSS filename so the doc skill can derive the doc slug per its naming conventions.

## Final summary

List: file path, utility or component class names defined, the index.css import line added, and the doc page that `/create-doc` will scaffold next.
