<script lang="ts">
	import { setContext } from 'svelte';

	// Props
	export let separator: string = `&rsaquo;`;
	export let text: string | undefined = undefined;
	// Props (A11y)
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
