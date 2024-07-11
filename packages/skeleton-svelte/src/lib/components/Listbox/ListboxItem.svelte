<script lang="ts">
	import { getSibling } from '$lib/internal/get-sibling.js';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { getListboxContext } from './context.js';
	import type { ListboxItemProps } from './types.js';

	let {
		name,
		value,
		base = 'text-left px-4 py-2 rounded flex items-center gap-2',
		classes = '',
		leadBase = '',
		leadClasses = '',
		trailBase = '',
		trailClasses = '',
		children,
		lead,
		trail,
		...attributes
	}: ListboxItemProps = $props();

	const ctx = getListboxContext();
	const selected = $derived(ctx.isSelected(value));

	const onclick: HTMLButtonAttributes['onclick'] = (event) => {
		attributes.onclick?.(event);
		ctx.toggle(value);
	};

	const onkeydown: HTMLButtonAttributes['onkeydown'] = (event) => {
		attributes.onkeydown?.(event);
		if (!(event.currentTarget instanceof HTMLElement) || !['ArrowUp', 'ArrowDown'].includes(event.key)) {
			return;
		}
		const sibling = getSibling(
			event.currentTarget as HTMLElement,
			`[data-skeleton-part="listbox"][data-skeleton-id="${ctx.id}"] > [data-skeleton-part="listbox-item"]`,
			event.key === 'ArrowUp' ? 'previous' : 'next'
		);
		if (sibling === undefined) {
			return;
		}
		event.preventDefault();
		sibling.focus();
	};
</script>

<button
	{...attributes}
	data-skeleton-part="listbox-item"
	class="{base} {classes} {selected && 'bg-primary-500'}"
	type="button"
	role="option"
	aria-selected={selected}
	disabled={attributes.disabled}
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
	<input {name} {value} type="hidden" />
{/if}
