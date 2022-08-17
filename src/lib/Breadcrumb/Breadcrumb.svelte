<script lang="ts">
	import { setContext } from 'svelte';

	// Props
	export let separator: string = `&rsaquo;`;
	// A11y
	export let label: string = undefined;

	// Base Classes
	const cBaseBreadcrumb: string = 'flex align-center space-x-4';

	// Context
	setContext('separator', separator);
</script>

<div class="breadcrumb {cBaseBreadcrumb} {$$props.class}" data-testid="breadcrumb" aria-label={label}>
	<slot />
</div>
