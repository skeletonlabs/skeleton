<script lang="ts">
	import { getListboxContext } from './context.js';
	import type { ListboxItemProps } from './types.js';

	// Props
	let {
		name,
		value,
		// TODO: Split up into multiple props
		base = 'text-left px-4 py-2 rounded flex items-center gap-2 [&[aria-selected=true]]:bg-primary-500 [&[aria-selected=true]]:text-on-primary-950',
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

	// Events
	const onclick: (typeof attributes)['onclick'] = (event) => {
		selected ? context.deselect(value) : context.select(value);
		attributes.onclick?.(event);
	};
</script>

<button {...attributes} type="button" role="option" class="{base} {classes}" aria-selected={selected} {onclick}>
	{#if lead}
		<div class="{leadBase} {leadClasses}">{@render lead()}</div>
	{/if}
	{@render children?.()}
	{#if trail}
		<div class="{trailBase} {trailClasses}">{@render trail()}</div>
	{/if}
</button>

<input type="hidden" {...selected && { name, value }} />
