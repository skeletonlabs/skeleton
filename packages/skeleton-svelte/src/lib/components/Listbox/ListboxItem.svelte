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
		radii = 'rounded',
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
	const context = getListboxContext();

	// Local
	const id = createId();
	const listboxItemSelector = `[data-skeleton-id="${context.id}"] > [data-skeleton-part="listbox-item"]`;

	// Events
	const onclick: (typeof attributes)['onclick'] = (event) => {
		context.isSelected(value) ? context.deselect(value) : context.select(value);
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
	class="{base} {padding} {radii} {context.isSelected(value) ? selected : null} {classes}"
	aria-selected={context.isSelected(value)}
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

{#if selected}
	<input type="hidden" name={context.name} {value} />
{/if}
