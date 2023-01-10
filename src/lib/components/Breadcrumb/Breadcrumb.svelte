<script lang="ts">
	import { setContext } from 'svelte';

	// Props
	/** Accepts text or HTML and defines the crumb seperator. */
	export let separator = '&rsaquo;';
	/** Provide classes to set text size. */
	export let text = '';

	// Props (A11y)
	/** A semantic ARIA label. */
	export let label = 'breadcrumb';

	// Context
	setContext('separator', separator);

	// Base Classes
	const cBase = '';
	const cList = 'flex align-center space-x-4';

	// Reactive Classes
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesList = `${cList} ${text}`;
</script>

<nav class="breadcrumb {classesBase}" data-testid="breadcrumb" aria-label={label}>
	<ol class="breadcrumb-list {classesList}">
		<slot />
	</ol>
</nav>
