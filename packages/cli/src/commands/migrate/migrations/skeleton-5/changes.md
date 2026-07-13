Concise reference for changes to the Skeleton Core API between v4 and v5. Intended as source material for a migration skill/guide.

Columns follow v5 documentation conventions:

- **v4 Token** — the CSS custom property in a v4 theme file (e.g. `--base-font-family`)
- **v4 Class** — the Tailwind utility class generated from that token in v4 (e.g. `base-font-family`)
- **v5 Skeleton Token** — the CSS custom property in a v5 theme file (e.g. `--typo-base--font-family`)
- **v5 Tailwind Property** — the `@theme` property injected into Tailwind (e.g. `--font-typo-base`)
- **v5 Class** — the Tailwind utility class generated in v5 (e.g. `font-typo-base`)

---

## Animations (new in v5)

| v4 Token | v4 Class | v5 Skeleton Token                                    | v5 Tailwind Property                                 | v5 Class                                           |
| -------- | -------- | ---------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------- |
| —        | —        | `--animate-progress-linear-indeterminate-horizontal` | `--animate-progress-linear-indeterminate-horizontal` | `animate-progress-linear-indeterminate-horizontal` |
| —        | —        | `--animate-progress-linear-indeterminate-vertical`   | `--animate-progress-linear-indeterminate-vertical`   | `animate-progress-linear-indeterminate-vertical`   |
| —        | —        | `--animate-progress-circular-indeterminate`          | `--animate-progress-circular-indeterminate`          | `animate-progress-circular-indeterminate`          |

---

## Colors

### Standard

| v4 Token                           | v4 Class                              | v5 Skeleton Token                  | v5 Tailwind Property               | v5 Class                              |
| ---------------------------------- | ------------------------------------- | ---------------------------------- | ---------------------------------- | ------------------------------------- |
| `--color-[color]-[shade]`          | `[property]-[color]-[shade]`          | `--color-[color]-[shade]`          | `--color-[color]-[shade]`          | `[property]-[color]-[shade]`          |
| `--color-[color]-contrast-[shade]` | `[property]-[color]-contrast-[shade]` | `--color-[color]-contrast-[shade]` | `--color-[color]-contrast-[shade]` | `[property]-[color]-contrast-[shade]` |
| `--body-background-color`          | `body-background-color`               | `--color-root-bg-light`            | `--color-root-bg-light`            | `[property]-root-bg-light`            |
| `--body-background-color-dark`     | `body-background-color-dark`          | `--color-root-bg-dark`             | `--color-root-bg-dark`             | `[property]-root-bg-dark`             |
| —                                  | —                                     | `--color-[color]-contrast-light`   | `--color-[color]-contrast-light`   | `[property]-[color]-contrast-light`   |
| —                                  | —                                     | `--color-[color]-contrast-dark`    | `--color-[color]-contrast-dark`    | `[property]-[color]-contrast-dark`    |

### Brand (new in v5)

| v4 Token | v4 Class | v5 Skeleton Token              | v5 Tailwind Property           | v5 Class                          |
| -------- | -------- | ------------------------------ | ------------------------------ | --------------------------------- |
| —        | —        | `--color-brand-light`          | `--color-brand-light`          | `[property]-brand-light`          |
| —        | —        | `--color-brand-contrast-light` | `--color-brand-contrast-light` | `[property]-brand-contrast-light` |
| —        | —        | `--color-brand-dark`           | `--color-brand-dark`           | `[property]-brand-dark`           |
| —        | —        | `--color-brand-contrast-dark`  | `--color-brand-contrast-dark`  | `[property]-brand-contrast-dark`  |

### Color Pairings

| v4 Token                          | v4 Class                             | v5 Skeleton Token                          | v5 Tailwind Property                       | v5 Class                                      |
| --------------------------------- | ------------------------------------ | ------------------------------------------ | ------------------------------------------ | --------------------------------------------- |
| `--color-[color]-[shade]-[shade]` | `[property]-[color]-[shade]-[shade]` | `--color-[color]-[shade]-[shade]`          | `--color-[color]-[shade]-[shade]`          | `[property]-[color]-[shade]-[shade]`          |
| —                                 | —                                    | `--color-[color]-contrast-[shade]-[shade]` | `--color-[color]-contrast-[shade]-[shade]` | `[property]-[color]-contrast-[shade]-[shade]` |

> NOTE: Shade 500 does not include a pairing in either version.

---

## Edges

| v4 Token                 | v4 Class | v5 Skeleton Token         | v5 Tailwind Property      | v5 Class  | Notes                                 |
| ------------------------ | -------- | ------------------------- | ------------------------- | --------- | ------------------------------------- |
| `--default-border-width` | `border` | `--default-border-width`  | `--default-border-width`  | `border`  | Also controls `divide` in v5          |
| `--default-ring-width`   | `ring`   | `--default-ring-width`    | `--default-ring-width`    | `ring`    | Unchanged                             |
| `--default-divide-width` | `divide` | —                         | —                         | —         | Removed; use `--default-border-width` |
| —                        | —        | `--default-outline-width` | `--default-outline-width` | `outline` | New; never set to `0px` (a11y)        |

### Border Radius

| v4 Token             | v4 Class            | v5 Skeleton Token    | v5 Tailwind Property | v5 Class            |
| -------------------- | ------------------- | -------------------- | -------------------- | ------------------- |
| `--radius-base`      | `rounded-base`      | `--radius-base`      | `--radius-base`      | `rounded-base`      |
| `--radius-container` | `rounded-container` | `--radius-container` | `--radius-container` | `rounded-container` |

### Corner Shape (new in v5)

| v4 Token | v4 Class | v5 Skeleton Token          | v5 Tailwind Property | v5 Class                 |
| -------- | -------- | -------------------------- | -------------------- | ------------------------ |
| —        | —        | `--corner-shape-base`      | —                    | `corner-shape-base`      |
| —        | —        | `--corner-shape-container` | —                    | `corner-shape-container` |
| —        | —        | —                          | —                    | `corner-shape-*`         |

> Limited browser support; verify progressive fallbacks.

---

## Element Sizes (new in v5)

Tailwind-only scale; no Skeleton theme tokens required. Used with `size-*`, `w-*`, `h-*`.

| v4 Token | v4 Class | v5 Skeleton Token | v5 Tailwind Property  | v5 Class               |
| -------- | -------- | ----------------- | --------------------- | ---------------------- |
| —        | —        | —                 | `--spacing-elem-xs`   | `[property]-elem-xs`   |
| —        | —        | —                 | `--spacing-elem-sm`   | `[property]-elem-sm`   |
| —        | —        | —                 | `--spacing-elem-base` | `[property]-elem-base` |
| —        | —        | —                 | `--spacing-elem-lg`   | `[property]-elem-lg`   |
| —        | —        | —                 | `--spacing-elem-xl`   | `[property]-elem-xl`   |
| —        | —        | —                 | `--spacing-elem-2xl`  | `[property]-elem-2xl`  |
| —        | —        | —                 | `--spacing-elem-3xl`  | `[property]-elem-3xl`  |
| —        | —        | —                 | `--spacing-elem-4xl`  | `[property]-elem-4xl`  |
| —        | —        | —                 | `--spacing-elem-5xl`  | `[property]-elem-5xl`  |
| —        | —        | —                 | `--spacing-elem-6xl`  | `[property]-elem-6xl`  |
| —        | —        | —                 | `--spacing-elem-7xl`  | `[property]-elem-7xl`  |
| —        | —        | —                 | `--spacing-elem-8xl`  | `[property]-elem-8xl`  |
| —        | —        | —                 | `--spacing-elem-9xl`  | `[property]-elem-9xl`  |

---

## Spacing

| v4 Token    | v4 Class  | v5 Skeleton Token | v5 Tailwind Property | v5 Class  |
| ----------- | --------- | ----------------- | -------------------- | --------- |
| `--spacing` | (various) | `--spacing`       | `--spacing`          | (various) |

---

## Typography

Token naming scheme changed from `--{role}-{property}` to `--typo-{role}--{property}`. `--text-scaling` is now explicitly exposed.

| v4 Token | v4 Class | v5 Skeleton Token | v5 Tailwind Property | v5 Class |
| -------- | -------- | ----------------- | -------------------- | -------- |
| —        | —        | `--text-scaling`  | —                    | —        |

### Base

| v4 Token                 | v4 Class               | v5 Skeleton Token             | v5 Tailwind Property      | v5 Class                     |
| ------------------------ | ---------------------- | ----------------------------- | ------------------------- | ---------------------------- |
| `--base-font-family`     | `base-font-family`     | `--typo-base--font-family`    | `--font-typo-base`        | `font-typo-base`             |
| `--base-font-size`       | `base-font-size`       | `--typo-base--font-size`      | `--text-typo-base`        | `text-typo-base`             |
| `--base-font-color`      | `base-font-color`      | `--typo-base--color-light`    | `--color-typo-base-light` | `[property]-typo-base-light` |
| `--base-font-color-dark` | `base-font-color-dark` | `--typo-base--color-dark`     | `--color-typo-base-dark`  | `[property]-typo-base-dark`  |
| `--base-line-height`     | `base-line-height`     | `--typo-base--line-height`    | `--leading-typo-base`     | `leading-typo-base`          |
| `--base-font-weight`     | `base-font-weight`     | `--typo-base--font-weight`    | —                         | —                            |
| `--base-font-style`      | `base-font-style`      | `--typo-base--font-style`     | —                         | —                            |
| `--base-letter-spacing`  | `base-letter-spacing`  | `--typo-base--letter-spacing` | `--tracking-typo-base`    | `tracking-typo-base`         |
| —                        | —                      | `--typo-base--font-stretch`   | —                         | —                            |
| —                        | —                      | `--typo-base--font-kerning`   | —                         | —                            |
| —                        | —                      | `--typo-base--text-shadow`    | `--text-shadow-typo-base` | `text-shadow-typo-base`      |
| —                        | —                      | `--typo-base--word-spacing`   | —                         | —                            |
| —                        | —                      | `--typo-base--hyphens`        | —                         | —                            |
| —                        | —                      | `--typo-base--text-transform` | —                         | —                            |

### Heading

> `--heading-font-size` and `--heading-line-height` are removed in v5 — heading sizes are derived from the typographic scale.

| v4 Token                    | v4 Class                  | v5 Skeleton Token                | v5 Tailwind Property         | v5 Class                        |
| --------------------------- | ------------------------- | -------------------------------- | ---------------------------- | ------------------------------- |
| `--heading-font-family`     | `heading-font-family`     | `--typo-heading--font-family`    | `--font-typo-heading`        | `font-typo-heading`             |
| `--heading-font-color`      | `heading-font-color`      | `--typo-heading--color-light`    | `--color-typo-heading-light` | `[property]-typo-heading-light` |
| `--heading-font-color-dark` | `heading-font-color-dark` | `--typo-heading--color-dark`     | `--color-typo-heading-dark`  | `[property]-typo-heading-dark`  |
| `--heading-font-weight`     | `heading-font-weight`     | `--typo-heading--font-weight`    | —                            | —                               |
| `--heading-font-style`      | `heading-font-style`      | `--typo-heading--font-style`     | —                            | —                               |
| `--heading-letter-spacing`  | `heading-letter-spacing`  | `--typo-heading--letter-spacing` | `--tracking-typo-heading`    | `tracking-typo-heading`         |
| `--heading-font-size`       | `heading-font-size`       | —                                | —                            | —                               |
| `--heading-line-height`     | `heading-line-height`     | —                                | —                            | —                               |
| —                           | —                         | `--typo-heading--font-stretch`   | —                            | —                               |
| —                           | —                         | `--typo-heading--font-kerning`   | —                            | —                               |
| —                           | —                         | `--typo-heading--text-shadow`    | `--text-shadow-typo-heading` | `text-shadow-typo-heading`      |
| —                           | —                         | `--typo-heading--word-spacing`   | —                            | —                               |
| —                           | —                         | `--typo-heading--hyphens`        | —                            | —                               |
| —                           | —                         | `--typo-heading--text-transform` | —                            | —                               |

### Anchor

| v4 Token                   | v4 Class                 | v5 Skeleton Token               | v5 Tailwind Property        | v5 Class                       |
| -------------------------- | ------------------------ | ------------------------------- | --------------------------- | ------------------------------ |
| `--anchor-font-family`     | `anchor-font-family`     | `--typo-anchor--font-family`    | `--font-typo-anchor`        | `font-typo-anchor`             |
| `--anchor-font-size`       | `anchor-font-size`       | `--typo-anchor--font-size`      | `--text-typo-anchor`        | `text-typo-anchor`             |
| `--anchor-font-color`      | `anchor-font-color`      | `--typo-anchor--color-light`    | `--color-typo-anchor-light` | `[property]-typo-anchor-light` |
| `--anchor-font-color-dark` | `anchor-font-color-dark` | `--typo-anchor--color-dark`     | `--color-typo-anchor-dark`  | `[property]-typo-anchor-dark`  |
| `--anchor-line-height`     | `anchor-line-height`     | `--typo-anchor--line-height`    | `--leading-typo-anchor`     | `leading-typo-anchor`          |
| `--anchor-font-weight`     | `anchor-font-weight`     | `--typo-anchor--font-weight`    | —                           | —                              |
| `--anchor-font-style`      | `anchor-font-style`      | `--typo-anchor--font-style`     | —                           | —                              |
| `--anchor-letter-spacing`  | `anchor-letter-spacing`  | `--typo-anchor--letter-spacing` | `--tracking-typo-anchor`    | `tracking-typo-anchor`         |
| —                          | —                        | `--typo-anchor--font-stretch`   | —                           | —                              |
| —                          | —                        | `--typo-anchor--font-kerning`   | —                           | —                              |
| —                          | —                        | `--typo-anchor--text-shadow`    | `--text-shadow-typo-anchor` | `text-shadow-typo-anchor`      |
| —                          | —                        | `--typo-anchor--word-spacing`   | —                           | —                              |
| —                          | —                        | `--typo-anchor--hyphens`        | —                           | —                              |
| —                          | —                        | `--typo-anchor--text-transform` | —                           | —                              |

#### Anchor Decoration

Decoration model changed from 4 flat tokens (v4) to 24 granular tokens across 4 states × 6 properties (v5). None of the v5 anchor decoration tokens generate Tailwind classes directly.

| v4 Token                          | v4 Class                        | v5 Skeleton Token                                  |
| --------------------------------- | ------------------------------- | -------------------------------------------------- |
| `--anchor-text-decoration`        | `anchor-text-decoration`        | `--typo-anchor--text-decoration-line`              |
| `--anchor-text-decoration`        | `anchor-text-decoration`        | `--typo-anchor--text-decoration-color`             |
| `--anchor-text-decoration`        | `anchor-text-decoration`        | `--typo-anchor--text-decoration-style`             |
| `--anchor-text-decoration`        | `anchor-text-decoration`        | `--typo-anchor--text-decoration-thickness`         |
| `--anchor-text-decoration`        | `anchor-text-decoration`        | `--typo-anchor--text-underline-offset`             |
| `--anchor-text-decoration`        | `anchor-text-decoration`        | `--typo-anchor--text-underline-position`           |
| `--anchor-text-decoration-hover`  | `anchor-text-decoration-hover`  | `--typo-anchor--hover--text-decoration-line`       |
| `--anchor-text-decoration-hover`  | `anchor-text-decoration-hover`  | `--typo-anchor--hover--text-decoration-color`      |
| `--anchor-text-decoration-hover`  | `anchor-text-decoration-hover`  | `--typo-anchor--hover--text-decoration-style`      |
| `--anchor-text-decoration-hover`  | `anchor-text-decoration-hover`  | `--typo-anchor--hover--text-decoration-thickness`  |
| `--anchor-text-decoration-hover`  | `anchor-text-decoration-hover`  | `--typo-anchor--hover--text-underline-offset`      |
| `--anchor-text-decoration-hover`  | `anchor-text-decoration-hover`  | `--typo-anchor--hover--text-underline-position`    |
| `--anchor-text-decoration-active` | `anchor-text-decoration-active` | `--typo-anchor--active--text-decoration-line`      |
| `--anchor-text-decoration-active` | `anchor-text-decoration-active` | `--typo-anchor--active--text-decoration-color`     |
| `--anchor-text-decoration-active` | `anchor-text-decoration-active` | `--typo-anchor--active--text-decoration-style`     |
| `--anchor-text-decoration-active` | `anchor-text-decoration-active` | `--typo-anchor--active--text-decoration-thickness` |
| `--anchor-text-decoration-active` | `anchor-text-decoration-active` | `--typo-anchor--active--text-underline-offset`     |
| `--anchor-text-decoration-active` | `anchor-text-decoration-active` | `--typo-anchor--active--text-underline-position`   |
| `--anchor-text-decoration-focus`  | `anchor-text-decoration-focus`  | `--typo-anchor--focus--text-decoration-line`       |
| `--anchor-text-decoration-focus`  | `anchor-text-decoration-focus`  | `--typo-anchor--focus--text-decoration-color`      |
| `--anchor-text-decoration-focus`  | `anchor-text-decoration-focus`  | `--typo-anchor--focus--text-decoration-style`      |
| `--anchor-text-decoration-focus`  | `anchor-text-decoration-focus`  | `--typo-anchor--focus--text-decoration-thickness`  |
| `--anchor-text-decoration-focus`  | `anchor-text-decoration-focus`  | `--typo-anchor--focus--text-underline-offset`      |
| `--anchor-text-decoration-focus`  | `anchor-text-decoration-focus`  | `--typo-anchor--focus--text-underline-position`    |

---

## @utility

### Presets

Now a first-class `@utility` entry. Was listed under a separate "Optional" section in v4.

---

## Removed in v5

| v4 Token                       | v4 Class                     | Notes                                               |
| ------------------------------ | ---------------------------- | --------------------------------------------------- |
| `--default-divide-width`       | `divide`                     | Removed; `divide` now uses `--default-border-width` |
| `--body-background-color`      | `body-background-color`      | Replaced by `--color-root-bg-light`                 |
| `--body-background-color-dark` | `body-background-color-dark` | Replaced by `--color-root-bg-dark`                  |
| `--heading-font-size`          | `heading-font-size`          | Derived from typographic scale; no direct token     |
| `--heading-line-height`        | `heading-line-height`        | Derived from typographic scale; no direct token     |
| —                              | `theme-[name]:`              | `@variant` theme utilities removed from Core API    |

Reference for migrating a Skeleton **theme CSS file** from v4 to v5.

---

## How to apply this spec

1. **Rename** every key in the "Renamed" tables (copy the v4 value onto the new v5 key name).
2. **Remove** every key in the "Removed" table.
3. **Add** every key in the "Added" tables. For added keys, use `inherit` unless a different
   default is noted; they are inert until set, so `inherit` is a safe migration default.
4. **Leave unchanged** every key in the "Unchanged keys" section (same key name in both versions).
   This includes the entire color ramp — it is byte-identical across versions.

---

## Renamed keys (carry value across)

### Typography — Base (`--base-*` → `--typo-base--*`)

| v4 Key                   | v5 Key                        |
| ------------------------ | ----------------------------- |
| `--base-font-family`     | `--typo-base--font-family`    |
| `--base-font-size`       | `--typo-base--font-size`      |
| `--base-font-color`      | `--typo-base--color-light`    |
| `--base-font-color-dark` | `--typo-base--color-dark`     |
| `--base-line-height`     | `--typo-base--line-height`    |
| `--base-font-weight`     | `--typo-base--font-weight`    |
| `--base-font-style`      | `--typo-base--font-style`     |
| `--base-letter-spacing`  | `--typo-base--letter-spacing` |

### Typography — Heading (`--heading-*` → `--typo-heading--*`)

| v4 Key                      | v5 Key                           |
| --------------------------- | -------------------------------- |
| `--heading-font-family`     | `--typo-heading--font-family`    |
| `--heading-font-color`      | `--typo-heading--color-light`    |
| `--heading-font-color-dark` | `--typo-heading--color-dark`     |
| `--heading-font-weight`     | `--typo-heading--font-weight`    |
| `--heading-font-style`      | `--typo-heading--font-style`     |
| `--heading-letter-spacing`  | `--typo-heading--letter-spacing` |

### Typography — Anchor (`--anchor-*` → `--typo-anchor--*`)

| v4 Key                     | v5 Key                          |
| -------------------------- | ------------------------------- |
| `--anchor-font-family`     | `--typo-anchor--font-family`    |
| `--anchor-font-size`       | `--typo-anchor--font-size`      |
| `--anchor-font-color`      | `--typo-anchor--color-light`    |
| `--anchor-font-color-dark` | `--typo-anchor--color-dark`     |
| `--anchor-line-height`     | `--typo-anchor--line-height`    |
| `--anchor-font-weight`     | `--typo-anchor--font-weight`    |
| `--anchor-font-style`      | `--typo-anchor--font-style`     |
| `--anchor-letter-spacing`  | `--typo-anchor--letter-spacing` |

### Typography — Anchor decoration (flat → `-line` suffix + `--state--` infix)

The single v4 decoration token per state maps to the `…--text-decoration-line` token in v5.
(The remaining five decoration sub-properties per state are _new_ — see "Added" below.)

| v4 Key                            | v5 Key                                        |
| --------------------------------- | --------------------------------------------- |
| `--anchor-text-decoration`        | `--typo-anchor--text-decoration-line`         |
| `--anchor-text-decoration-hover`  | `--typo-anchor--hover--text-decoration-line`  |
| `--anchor-text-decoration-active` | `--typo-anchor--active--text-decoration-line` |
| `--anchor-text-decoration-focus`  | `--typo-anchor--focus--text-decoration-line`  |

### Root background (`--body-*` → `--color-root-bg-*`)

| v4 Key                         | v5 Key                  |
| ------------------------------ | ----------------------- |
| `--body-background-color`      | `--color-root-bg-light` |
| `--body-background-color-dark` | `--color-root-bg-dark`  |

---

## Removed keys (delete)

| v4 Key                   | Notes                                                        |
| ------------------------ | ------------------------------------------------------------ |
| `--default-divide-width` | Removed; `divide` now derives from `--default-border-width`. |
| `--heading-font-size`    | Removed; heading sizes derive from the typographic scale.    |
| `--heading-line-height`  | Removed; derives from the typographic scale.                 |

> Note: `--body-background-color` / `--body-background-color-dark` and the `--base/heading/anchor-*`
> keys are not "removed" — they are renamed (see above). Migrate them, do not drop them.

---

## Added keys (insert; default `inherit` unless noted)

### Typography — extended properties (Base, Heading, Anchor each gain these six)

| v5 Key (Base)                 | v5 Key (Heading)                 | v5 Key (Anchor)                 |
| ----------------------------- | -------------------------------- | ------------------------------- |
| `--typo-base--font-stretch`   | `--typo-heading--font-stretch`   | `--typo-anchor--font-stretch`   |
| `--typo-base--font-kerning`   | `--typo-heading--font-kerning`   | `--typo-anchor--font-kerning`   |
| `--typo-base--text-shadow`    | `--typo-heading--text-shadow`    | `--typo-anchor--text-shadow`    |
| `--typo-base--word-spacing`   | `--typo-heading--word-spacing`   | `--typo-anchor--word-spacing`   |
| `--typo-base--hyphens`        | `--typo-heading--hyphens`        | `--typo-anchor--hyphens`        |
| `--typo-base--text-transform` | `--typo-heading--text-transform` | `--typo-anchor--text-transform` |

### Typography — Anchor decoration sub-properties (each of 4 states gains these five)

For each state group — default (no infix), `--hover--`, `--active--`, `--focus--` — add:

| Suffix (append to `--typo-anchor--[state--]`) |
| --------------------------------------------- |
| `text-decoration-color`                       |
| `text-decoration-style`                       |
| `text-decoration-thickness`                   |
| `text-underline-offset`                       |
| `text-underline-position`                     |

Producing the 20 new keys:

| Default                                    | Hover                                             | Active                                             | Focus                                             |
| ------------------------------------------ | ------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------- |
| `--typo-anchor--text-decoration-color`     | `--typo-anchor--hover--text-decoration-color`     | `--typo-anchor--active--text-decoration-color`     | `--typo-anchor--focus--text-decoration-color`     |
| `--typo-anchor--text-decoration-style`     | `--typo-anchor--hover--text-decoration-style`     | `--typo-anchor--active--text-decoration-style`     | `--typo-anchor--focus--text-decoration-style`     |
| `--typo-anchor--text-decoration-thickness` | `--typo-anchor--hover--text-decoration-thickness` | `--typo-anchor--active--text-decoration-thickness` | `--typo-anchor--focus--text-decoration-thickness` |
| `--typo-anchor--text-underline-offset`     | `--typo-anchor--hover--text-underline-offset`     | `--typo-anchor--active--text-underline-offset`     | `--typo-anchor--focus--text-underline-offset`     |
| `--typo-anchor--text-underline-position`   | `--typo-anchor--hover--text-underline-position`   | `--typo-anchor--active--text-underline-position`   | `--typo-anchor--focus--text-underline-position`   |

### Edges

| v5 Key                    | Default | Notes                                    |
| ------------------------- | ------- | ---------------------------------------- |
| `--default-outline-width` | `1px`   | New. Never set to `0px` (accessibility). |

### Corner shape (new in v5)

| v5 Key                     | Default   | Notes                                                  |
| -------------------------- | --------- | ------------------------------------------------------ |
| `--corner-shape-base`      | `initial` | Limited browser support; verify progressive fallbacks. |
| `--corner-shape-container` | `initial` | Limited browser support; verify progressive fallbacks. |

### Brand colors (new in v5)

| v5 Key                         | Default                             |
| ------------------------------ | ----------------------------------- |
| `--color-brand-light`          | `var(--color-primary-500)`          |
| `--color-brand-contrast-light` | `var(--color-primary-contrast-500)` |
| `--color-brand-dark`           | `var(--color-primary-500)`          |
| `--color-brand-contrast-dark`  | `var(--color-primary-contrast-500)` |

---

## Unchanged keys (same key name; keep value as-is)

These keys exist in both v4 and v5 with the same name. Do not touch the value during migration.

| Key                                        | Notes                                                                                                                            |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `--spacing`                                | Unchanged. (v5 theme files may add an illustrative comment; cosmetic only.)                                                      |
| `--text-scaling`                           | Key unchanged. (v5 default differs per theme; do not change unless intended.)                                                    |
| `--radius-base`                            | Unchanged.                                                                                                                       |
| `--radius-container`                       | Unchanged.                                                                                                                       |
| `--default-border-width`                   | Unchanged. Now also controls `divide`.                                                                                           |
| `--default-ring-width`                     | Unchanged.                                                                                                                       |
| `--color-[color]-[shade]`                  | Full color ramp — `primary/secondary/tertiary/success/warning/error/surface`, shades `50`–`950`. Byte-identical across versions. |
| `--color-[color]-contrast-dark` / `-light` | Unchanged.                                                                                                                       |
| `--color-[color]-contrast-[shade]`         | Unchanged.                                                                                                                       |

---

## Migration checklist (per theme file)

- [ ] Rename all `--base-*` → `--typo-base--*`
- [ ] Rename all `--heading-*` → `--typo-heading--*` (except removed size/line-height keys)
- [ ] Rename all `--anchor-*` → `--typo-anchor--*` (decoration tokens get `-line` suffix)
- [ ] Rename `--body-background-color[-dark]` → `--color-root-bg-light` / `--color-root-bg-dark`
- [ ] Delete `--default-divide-width`, `--heading-font-size`, `--heading-line-height`
- [ ] Add 18 extended typography keys (6 each for base/heading/anchor)
- [ ] Add 20 anchor decoration sub-property keys (5 each for default/hover/active/focus)
- [ ] Add `--default-outline-width`
- [ ] Add `--corner-shape-base` / `--corner-shape-container`
- [ ] Add 4 `--color-brand-*` keys
- [ ] Verify the color ramp and remaining unchanged keys are untouched
