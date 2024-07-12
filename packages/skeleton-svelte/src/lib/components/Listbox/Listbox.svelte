<script lang="ts">
	import { createId } from '$lib/internal/create-id.js';
	import { setListboxContext } from './context.js';
	import type { ListboxProps } from './types.js';

	let { value = $bindable(''), multiple = false, base = 'flex flex-col', classes = '', children }: ListboxProps = $props();

	const id = createId();

	setListboxContext({
		id: id,
		toggle: (v) => {
			if (multiple && Array.isArray(value)) {
				value = value.includes(v) ? value.filter((_v) => _v !== v) : [...value, v];
			} else {
				value = v;
			}
		},
		isSelected: (v) => {
			if (multiple) {
				return value.includes(v);
			} else {
				return value === v;
			}
		}
	});
</script>

<div
	class="{base} {classes}"
	role="listbox"
	aria-orientation="vertical"
	aria-multiselectable={multiple}
	data-skeleton-part="listbox"
	data-skeleton-id={id}
>
	{@render children?.()}
</div>
