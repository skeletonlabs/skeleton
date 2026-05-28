# Kitchen Sink

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

---

## Code Blocks

Fenced with TypeScript:

```ts
interface Lesson {
	title: string;
	markdown: string;
}

async function getLesson(id: string): Promise<Lesson> {
	return fetch(`/api/lessons/${id}`).then((r) => r.json());
}
```

Fenced with Svelte:

```svelte
<script lang="ts">
	let count = $state(0);
</script>

<button onclick={() => count++}>
	Count: {count}
</button>
```

Fenced with Bash:

```bash
pnpm install
pnpm dev
```

Indented code block:

    const x = 1;
    const y = 2;
    console.log(x + y);

---

## Tables (GFM)

| Name       | Type     | Default | Description          |
| ---------- | -------- | ------- | -------------------- |
| `title`    | `string` | —       | Page title           |
| `size`     | `number` | `16`    | Font size in pixels  |
| `disabled` | `bool`   | `false` | Disables the element |

Left, center, and right aligned:

| Left         |     Center     |         Right |
| :----------- | :------------: | ------------: |
| left-aligned | center-aligned | right-aligned |
| data         |      data      |          data |

---

## Horizontal Rules

---

---

---

---

## Hard Line Breaks

Line one  
Line two (two trailing spaces above)

Line one\
Line two (backslash above)

---

## HTML Inline

Text with a <kbd>Ctrl</kbd> + <kbd>S</kbd> shortcut.

Text with a <mark>highlighted</mark> word.

<details>
<summary>Expandable section</summary>

Content inside the details block. Supports **markdown** too.

</details>
