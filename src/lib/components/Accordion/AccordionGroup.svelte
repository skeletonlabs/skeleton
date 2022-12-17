<script lang="ts">
	// Slots:
	// NOTE: we cannot describe the default slot.

	import { onMount, setContext } from 'svelte';

	/** Enable auto-collapse mode. */
	export let collapse = true;
	/** Provide classes to set the hover background color. */
	export let hover = 'bg-primary-hover-token';
	/** Provide classes to set vertical spacing. */
	export let spacing = 'space-y-4';
	/** Provide classes to set padding for summary and content regions. */
	export let padding = 'px-4 py-2';
	/** Provide classes to set summary border radius. */
	export let rounded = 'rounded-token';

	// Context
	setContext('hover', hover);
	setContext('spacing', spacing);
	setContext('padding', padding);
	setContext('rounded', rounded);

	// Classes
	const cBase = 'rounded-container-token';

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
					if (!e.currentTarget.open && active) active.open = false;
				});
			});
		}
	});

	// Reactive
	$: classesBase = `${cBase} ${spacing} ${$$props.class ?? ''}`;
</script>

<!-- @component The Accordion parent element. -->

<div bind:this={elemAccordian} class="accordion-group {classesBase}" data-testid="accordion-group">
	<slot />
</div>
