<script lang="ts">
	import { createId } from '$lib/internal/create-id.js';
	import { setListboxContext } from './context.js';
	import type { ListboxProps } from './types.js';

	// Props
	let {
		name = '',
		value = $bindable(),
		multiple = false,
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
		select: (v) => (multiple && Array.isArray(value) ? (value = [...value, v]) : (value = v)),
		deselect: (v) => (multiple && Array.isArray(value) ? (value = value.filter((_v) => _v !== v)) : (value = '')),
		isSelected: (v) => (multiple && Array.isArray(value) ? value.includes(v) : value === v)
	});
</script>

<!-- @component The Listbox parent component. -->

<div
	{...attributes}
	role="listbox"
	aria-orientation="vertical"
	class="{base} {gap} {overflow} {padding} {border} {rounded} {classes}"
	aria-multiselectable={multiple}
	data-skeleton-part="listbox"
	data-skeleton-id={id}
>
	{@render children?.()}
</div>
