---
title: Kitchen Sink
author: Chris Simmons
date: 2026-5-28
tags:
  - markdown
  - documentation
---

A comprehensive test document covering CommonMark and GitHub Flavored Markdown features.

---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

## Inline Formatting

Regular paragraph with **bold text**, _italic text_, **_bold and italic_**, ~~strikethrough~~, and `inline code`.

You can also use **bold**, _italic_, and **_combined_** styles.

---

## Links and Images

[Inline link](https://skeleton.dev)

[Link with title](https://skeleton.dev 'Skeleton UI')

[Reference link][skeleton]

[skeleton]: https://skeleton.dev

![Alt text for an image](https://placehold.co/400x200/png 'Optional title')

---

## Lists

### Unordered

- Item one
- Item two
  - Nested item A
  - Nested item B
    - Deeply nested
- Item three

### Ordered

1. First item
2. Second item
   1. Nested ordered
   2. Nested ordered
3. Third item

### Task List (GFM)

- [x] Completed task
- [x] Another done item
- [ ] Pending task
- [ ] Another pending

---

## Blockquotes

> A simple blockquote.

> A blockquote with **formatting** and `code`.
>
> Multiple paragraphs inside a blockquote.

### Alerts (GFM)

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

---

## Code Blocks

### Language Only

```ts
interface Lesson {
	title: string;
	markdown: string;
}

async function getLesson(id: string): Promise<Lesson> {
	return fetch(`/api/lessons/${id}`).then((r) => r.json());
}
```

### With Filename

```ts [lesson.ts]
interface Lesson {
	title: string;
	markdown: string;
}
```

### With Line Highlighting

```ts {2-3}
interface Lesson {
	title: string;
	markdown: string;
}
```

### Combined Metadata (language + highlights + filename)

```ts {2-3} [lesson.ts]
interface Lesson {
	title: string;
	markdown: string;
}
```

### Svelte

```svelte
<script lang="ts">
	let count = $state(0);
</script>

<button onclick={() => count++}>
	Count: {count}
</button>
```

### Bash

```bash
pnpm install
pnpm dev
```

## Tables (GFM)

### Basic

| Name       | Type     | Default | Description          |
| ---------- | -------- | ------- | -------------------- |
| `title`    | `string` | —       | Page title           |
| `size`     | `number` | `16`    | Font size in pixels  |
| `disabled` | `bool`   | `false` | Disables the element |

### Aligned Columns

| Left         |     Center     |         Right |
| :----------- | :------------: | ------------: |
| left-aligned | center-aligned | right-aligned |
| data         |      data      |          data |

### Inline Markdown in Cells

| Feature  | Status     | Link                                             |
| -------- | ---------- | ------------------------------------------------ |
| **Bold** | _Italic_   | [Skeleton](https://skeleton.dev)                 |
| `Code`   | ~~Strike~~ | ![img](https://placehold.co/80x20/png 'example') |

---

## Horizontal Rules

Shown below:

---

## Hard Line Breaks

Line one  
Line two (two trailing spaces above)

Line one\
Line two (backslash above)

---

## Emojis

Using `:emoji_name:` syntax:

:wave: :rocket: :smile: :heart: :fire: :sparkles: :tada: :thinking: :eyes: :star: :zap: :bulb: :warning:

---

## Comments

HTML-style comments are preserved in the AST but not rendered:

<!-- This is a single-line comment -->

<!--
This is a multi-line comment.
It can contain any text and won't appear in output.
-->

Text continues after the comment above.

---

## HTML Inline

Text with a <kbd class="kbd">Ctrl</kbd> + <kbd class="kbd">S</kbd> shortcut.

Text with a <mark class="mark">highlighted</mark> word.

<details>
<summary>Expandable section</summary>

Content inside the details block. Supports **markdown** too.

</details>
