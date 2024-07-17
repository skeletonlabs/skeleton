<script lang="ts">
	import { createId } from '$lib/internal/create-id.js';
	import { setListboxContext } from './context.js';
	import type { ListboxProps } from './types.js';

	// Props
	let {
		name,
		value = $bindable(),
		base = 'grid gap-2 overflow-y-auto',
		gap = 'gap-2',
		overflow = 'overflow-y-auto',
		padding = 'p-2',
		border = 'border border-surface-200-800',
		rounded = 'rounded-container',
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
		select: (v) => (Array.isArray(value) ? (value = [...value, v]) : (value = v)),
		deselect: (v) => (Array.isArray(value) ? (value = value.filter((_v) => _v !== v)) : (value = '')),
		isSelected: (v) => (Array.isArray(value) ? value.includes(v) : value === v)
	});
</script>

<!-- @component The Listbox parent component. -->

<div
	{...attributes}
	class="{base} {gap} {overflow} {padding} {border} {rounded} {classes}"
	role="listbox"
	aria-orientation="vertical"
	aria-multiselectable={Array.isArray(value)}
	data-skeleton-id={id}
	data-skeleton-part="listbox"
>
	{@render children?.()}
</div>
