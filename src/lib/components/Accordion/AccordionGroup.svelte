<script lang="ts">
	import { onMount, setContext } from 'svelte';

	// Props
	export let collapse: boolean = true;
	// Props (item)
	export let hover: string = 'bg-hover-theme';
	export let spacing: string = 'space-y-4';
	export let padding: string = 'px-4 py-2';
	export let rounded: string = 'rounded-theme';

	// Context
	setContext('hover', hover);
	setContext('spacing', spacing);
	setContext('padding', padding);
	setContext('rounded', rounded);

	// Classes
	const cBase: string = 'rounded-container-theme';

	// Local
	let elemAccordian: HTMLElement;

	// Lifecycle
	onMount(() => {
		if (collapse) {
			// Ensure only one detail element is open at a time
			// https://nikitahl.com/native-html-accordion
			const details = Array.from(elemAccordian.querySelectorAll('details'));
			details.forEach((detail) => {
				detail.addEventListener('click', (e: any) => {
					const active = details.find((d) => d.open);
					if (!e.currentTarget.open && active) {
						active.open = false;
					}
				});
			});
		}
	});

	// Reactive
	$: classesBase = `${cBase} ${spacing} ${$$props.class ?? ''}`;
</script>

<div bind:this={elemAccordian} class="accordian-group {classesBase}" data-testid="accordion-group">
	<slot />
</div>
