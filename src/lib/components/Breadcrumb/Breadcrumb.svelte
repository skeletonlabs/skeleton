<script lang="ts">
	import { setContext } from 'svelte';

	// Props
	/** Defines the crumb separator. Supports SVG icons.*/ //AUDIT prop dissapears if template literal is used and gets interpreted if part of the comment
	export let separator: string = '&rsaquo;';
	/** Provide classes to set text size.*/
	export let text: string = '';

	// Props (A11y)
	/** A semantic ARIA label.*/
	export let label: string = 'breadcrumb';

	// Context
	setContext('separator', separator);

	// Base Classes
	const cBase: string = '';
	const cList: string = 'flex align-center space-x-4';

	// Reactive Classes
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesList = `${cList} ${text}`;
</script>

<nav class="breadcrumb {classesBase}" data-testid="breadcrumb" aria-label={label}>
	<ol class="breadcrumb-list {classesList}">
		<slot />
	</ol>
</nav>
