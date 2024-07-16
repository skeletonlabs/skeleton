<script lang="ts">
	import { createId } from '$lib/internal/create-id.js';
	import { getListboxContext } from './context.js';
	import { getFirstElement, getLastElement, getNextElement, getPreviousElement } from '$lib/internal/elements.js';
	import type { ListboxItemProps } from './types.js';

	// Props
	let {
		value,
		base = 'flex items-center gap-2 text-left',
		padding = 'py-2 px-4',
		rounded = 'rounded',
		selected = 'preset-filled',
		classes,
		leadBase,
		leadClasses,
		trailBase,
		trailClasses,
		children,
		lead,
		trail,
		...attributes
	}: ListboxItemProps = $props();

	// Context
	const ctx = getListboxContext();

	// Local
	const id = createId();
	const listboxItemSelector = `[data-skeleton-id="${ctx.id}"] > [data-skeleton-part="listbox-item"]`;

	// Events
	const onclick: (typeof attributes)['onclick'] = (event) => {
		ctx.isSelected(value) ? ctx.deselect(value) : ctx.select(value);
		attributes.onclick?.(event);
	};
	const onkeydown: (typeof attributes)['onkeydown'] = (event) => {
		switch (event.key) {
			case 'ArrowUp': {
				event.preventDefault();
				const previous = getPreviousElement(listboxItemSelector, event.currentTarget);
				previous?.focus();
				break;
			}
			case 'ArrowDown': {
				event.preventDefault();
				const next = getNextElement(listboxItemSelector, event.currentTarget);
				next?.focus();
				break;
			}
			case 'Home': {
				event.preventDefault();
				const first = getFirstElement(listboxItemSelector);
				first?.focus();
				break;
			}
			case 'End': {
				event.preventDefault();
				const last = getLastElement(listboxItemSelector);
				last?.focus();
				break;
			}
		}
		attributes.onkeydown?.(event);
	};
</script>

<!-- @component The ListboxItem component. -->

<button
	{...attributes}
	type="button"
	role="option"
	class="{base} {padding} {rounded} {ctx.isSelected(value) ? selected : null} {classes}"
	aria-selected={ctx.isSelected(value)}
	data-skeleton-part="listbox-item"
	data-skeleton-id={id}
	{onclick}
	{onkeydown}
>
	{#if lead}
		<div class="{leadBase} {leadClasses}">{@render lead()}</div>
	{/if}
	{@render children?.()}
	{#if trail}
		<div class="{trailBase} {trailClasses}">{@render trail()}</div>
	{/if}
</button>

{#if ctx.isSelected(value)}
	<input type="hidden" name={ctx.name} {value} />
{/if}
