<script lang="ts">
	import { untrack } from 'svelte';
	import { setListboxContext } from './context.js';
	import type { ListboxProps } from './types.js';
	import { createId } from '$lib/internal/create-id.js';

	// Props
	let {
		name = '',
		value = $bindable(),
		multiple = false,
		base = 'grid gap-2 overflow-y-auto',
		paddingClasses = 'p-4',
		borderClasses = 'border border-surface-200-800',
		radiiClasses = 'rounded-container',
		classes,
		children,
		...attributes
	}: ListboxProps = $props();

	// Local
	const id = createId();

	// Context
	setListboxContext({
		id: id,
		get name() {
			return name;
		},
		select: (v) => (multiple && Array.isArray(value) ? (value = [...value, v]) : (value = v)),
		deselect: (v) => (multiple && Array.isArray(value) ? (value = value.filter((_v) => _v !== v)) : (value = '')),
		isSelected: (v) => (multiple && Array.isArray(value) ? value.includes(v) : value === v)
	});

	// Effects
	$effect(() => {
		if (multiple) {
			untrack(() => (value = []));
		} else {
			untrack(() => (value = ''));
		}
	});
</script>

<!-- @component The Listbox parent component. -->

<div
	{...attributes}
	role="listbox"
	aria-orientation="vertical"
	class="{base} {paddingClasses} {borderClasses} {radiiClasses} {classes}"
	aria-multiselectable={multiple}
	data-skeleton-part="listbox"
	data-skeleton-id={id}
>
	{@render children?.()}
</div>
