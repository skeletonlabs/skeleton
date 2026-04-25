---
name: create-doc
description: Scaffold a new documentation page for the Skeleton documentation site (sites/skeleton.dev), including frontmatter, optional boilerplate, examples, and API reference.
---

# Create Doc

Scaffold a new `.mdx` documentation page for [sites/skeleton.dev/](sites/skeleton.dev/) (Astro + MDX).

## Where things live

- Pages: [sites/skeleton.dev/src/content/docs/](sites/skeleton.dev/src/content/docs/)
- Examples (mirrors docs structure): [sites/skeleton.dev/src/components/examples/](sites/skeleton.dev/src/components/examples/)
- Frontmatter schema (Zod): [sites/skeleton.dev/src/content.config.ts](sites/skeleton.dev/src/content.config.ts) — `docs` collection
- `<Preview>`, `<Framework>`, `<ApiReference>` are globally available in MDX (no import needed)

## Categories

| Category                | Reference page to model after                                                                                                                      |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `framework-components/` | [accordion.mdx](sites/skeleton.dev/src/content/docs/framework-components/accordion.mdx) — Default + per-feature sections + Anatomy + API Reference |
| `tailwind-components/`  | [buttons.mdx](sites/skeleton.dev/src/content/docs/tailwind-components/buttons.mdx) — Default `.astro` + per-feature sections                       |
| `design/`               | [colors.mdx](sites/skeleton.dev/src/content/docs/design/colors.mdx) — long-form prose with `summary`                                               |
| `get-started/`          | [introduction.mdx](sites/skeleton.dev/src/content/docs/get-started/introduction.mdx)                                                               |
| `guides/`               | [mode.mdx](sites/skeleton.dev/src/content/docs/guides/mode.mdx)                                                                                    |
| `integrations/`         | [melt-ui.mdx](sites/skeleton.dev/src/content/docs/integrations/melt-ui.mdx) — `<Process>` + `linker` CTAs                                          |
| `resources/`            | [llms.mdx](sites/skeleton.dev/src/content/docs/resources/llms.mdx)                                                                                 |

Match the structure of the reference page for the chosen category.

## Naming conventions

Filename and title must be **derived from the source artifact**, never invented. Recommend the derived name, explain the source, accept overrides.

- **Framework Components** — derived from `packages/skeleton-{framework}/src/components/{ComponentName}`. `Accordion` → `accordion.mdx`, title `Accordion`. If the component doesn't exist yet, flag this — user may need `/create-component` first.
- **Tailwind Components** — derived from the CSS filename. `@btn` lives in `buttons.css` → `buttons.mdx`, title `Buttons`. Plural CSS filename verbatim.
- **Tailwind exceptions (no new page)** — typography utilities go into [design/typography.mdx](sites/skeleton.dev/src/content/docs/design/typography.mdx); form/input fields go into [tailwind-components/forms.mdx](sites/skeleton.dev/src/content/docs/tailwind-components/forms.mdx). Recommend extending those instead of creating a new page.
- **All other categories** — kebab-case slug from the topic, Title Case title.

## Prompt flow

Ask one at a time, confirm each answer, write nothing until all are answered and the user confirms.

1. **Topic** — title and one-line description.
2. **Destination** — recommend `<category>/<slug>.mdx` per naming conventions, explain the derivation, surface the typography/forms exception when relevant. Allow override.
3. **Boilerplate vs blank** — blank = frontmatter only; boilerplate = match the category reference page.
4. **Examples** — collect a list of example names (always include `Default` as the first). Per example, **infer** the type from the parent category — don't re-prompt: tailwind pages → `.astro`; framework pages → react + svelte pair. Note any exceptions the user mentions (e.g. "make `group` framework-specific on a tailwind page").
5. **API Reference** — append `<ApiReference id="<framework>/<slug>" />` blocks (see accordion.mdx). The id must match an entry in the components collection loader; warn if the component isn't registered yet.
6. **Other notes** — `linker` CTA, `summary`/`order`/`stability` overrides, `references` URLs, cross-links.

## Frontmatter

See [content.config.ts](sites/skeleton.dev/src/content.config.ts) for the full schema. Required: `title`, `description`. Useful optionals: `summary`, `order`, `stability`, `references.{source,styles,a11y,zag}`.

## Examples

Refer to the `/create-example` skill for general best practices. Avoid the prompt-flow for each example as this could be tedious. Just use your best judgement from the information received and the skill spec.

## Final summary

After writing files, list: page path, examples handed to `/create-example`, anything needing manual follow-up (e.g. component registration for `<ApiReference>`, asset imports, populating example bodies).
