<script lang="ts">
	import { setListboxContext } from './context.js';
	import type { ListboxProps } from './types.js';

	let {
		multiple = false,
		value = $bindable(multiple ? [] : ''),
		// TODO: Split up into multiple props
		base = 'flex flex-col gap-2 p-4 rounded border border-surface-200-800',
		classes,
		children,
		...attributes
	}: ListboxProps = $props();

	setListboxContext({
		select: (v) => (multiple && Array.isArray(value) ? (value = [...value, v]) : (value = v)),
		deselect: (v) => (multiple && Array.isArray(value) ? (value = value.filter((_v) => _v !== v)) : (value = '')),
		isSelected: (v) => (multiple && Array.isArray(value) ? value.includes(v) : value === v)
	});
</script>

<div {...attributes} class="{base} {classes}" role="listbox" aria-orientation="vertical" aria-multiselectable={multiple}>
	{@render children?.()}
</div>
