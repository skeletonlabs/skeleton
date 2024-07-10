<script lang="ts">
	import { getListboxContext } from './context.js';
	import type { ListboxItemProps } from './types.js';

	let { value = '', base, classes, children }: ListboxItemProps = $props();

	const ctx = getListboxContext();
</script>

<button class="{base} {classes}" role="option" aria-selected={ctx.has(value)} onclick={() => ctx.toggle(value)}>
	{@render children?.()}
	<p>{ctx.has(value)}</p>
</button>
