<script lang="ts">
	import { setContext } from 'svelte';

	// Props (Cloud)
	export let gridCols: string = 'md:grid-cols-1';
	export let gridGap: string = 'gap-1';
	export let rounded: string = 'rounded-lg';
	// Props (Logo)
	export let background: string = 'bg-surface-300 dark:bg-surface-800';
	export let color: string = 'text-black dark:text-white';
	export let text: string = 'text-base font-bold';
	export let padding: string = 'py-4 md:py-10';

	// Context
	setContext('background', background);
	setContext('color', color);
	setContext('text', text);
	setContext('padding', padding);

	// Base Classes
	const cCloud: string = 'grid grid-cols-1 gap-4 overflow-hidden';

	// Reactive Clases
	$: classesCloud = `${cCloud} ${gridCols} ${rounded} ${gridGap}`;
</script>

<div class="{classesCloud} {$$props.class}" data-testid="logo-cloud">
	<slot />
</div>
