<script lang="ts">
	import { createId } from '$lib/internal/create-id.js';
	import { setListboxContext } from './context.js';
	import type { ListboxProps } from './types.js';

	let { selected = $bindable([]), multiple = false, base = 'flex flex-col', classes = '', children }: ListboxProps = $props();

	const id = createId();

	setListboxContext({
		id: id,
		get selected() {
			return selected;
		},
		set selected(v) {
			selected = v;
		},
		get multiple() {
			return multiple;
		},
		toggle: (v) => {
			if (multiple && Array.isArray(selected)) {
				selected = selected.includes(v) ? selected.filter((_v) => _v !== v) : [...selected, v];
			} else {
				selected = v;
			}
		},
		isSelected: (v) => {
			if (multiple) {
				return selected.includes(v);
			} else {
				return selected === v;
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
