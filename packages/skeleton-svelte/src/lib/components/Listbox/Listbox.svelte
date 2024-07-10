<script lang="ts">
	import { setListboxContext } from './context.js';
	import type { ListboxProps } from './types.js';

	let { value = $bindable(), base = '', classes = '', children }: ListboxProps = $props();

	setListboxContext({
		get value() {
			return value;
		},
		toggle: (v: string) => {
			if (Array.isArray(value)) {
				if (value.includes(v)) {
					value = value.filter((_v) => _v !== v);
				} else {
					value = [...value, v];
				}
			} else if (value !== v) {
				value = v;
			}
		},
		has: (v: string) => {
			return Array.isArray(value) ? value.includes(v) : value === v;
		}
	});
</script>

<div role="listbox" class="{base} {classes}">
	{@render children?.()}
</div>
