<script lang="ts">
	import { setContext } from 'svelte';

	// Props
	export let separator: string = `&rsaquo;`;
	// Props (A11y)
	export let label: string | undefined = undefined;

	// Context
	setContext('separator', separator);

	// Base Classes
	const cBase: string = 'flex align-center space-x-4';

	// Reactive Classes
	$: classesBase = `${cBase} ${$$props.class || ''}`;
</script>

<div class="breadcrumb {classesBase}" data-testid="breadcrumb" aria-label={label}>
	<slot />
</div>
