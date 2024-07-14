<script lang="ts">
	import { createId } from '$lib/internal/create-id.js';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { getListboxContext } from './context.js';
	import type { ListboxItemProps } from './types.js';
	import { getFirstElement, getLastElement, getNextElement, getPreviousElement } from '$lib/internal/elements.js';

	// Props
	let {
		value = createId(),
		// TODO: Split up into multiple props
		base = 'text-left px-4 py-2 rounded flex items-center gap-2',
		activeClasses = 'preset-filled',
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
	const selected = $derived(context.isSelected(value));

	// Local
	const id = createId();
	const listboxItemSelector = `[data-skeleton-id="${context.id}"] > [data-skeleton-part="listbox-item"]`;

	// Events
	const onclick: (typeof attributes)['onclick'] = (event) => {
		selected ? context.deselect(value) : context.select(value);
		attributes.onclick?.(event);
	};
	const onkeydown: HTMLButtonAttributes['onkeydown'] = (event) => {
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
	class="{base} {selected ? activeClasses : ''} {classes}"
	aria-selected={selected}
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
