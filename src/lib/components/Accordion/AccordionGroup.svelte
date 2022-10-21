<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import type { CSSClasses } from '$lib/types';

	// Props
	export let collapse: boolean = true;
	// Props (item)
	/**
	 * All about the hover
	 * @a11y The a11y comment
	 * @childOf the child of
	 * @parentOf asdfasdf
	 * @see https://dev.skeleton.dev
	 * @type {CSSClasses}
	 */
	export let hover: CSSClasses = 'bg-hover-token';
	/** Spacing */
	export let spacing: CSSClasses = 'space-y-4';
	/** Padding */
	export let padding: CSSClasses = 'px-4 py-2';
	/** Rounding */
	export let rounded: CSSClasses = 'rounded-token';

	// Context
	setContext('hover', hover);
	setContext('spacing', spacing);
	setContext('padding', padding);
	setContext('rounded', rounded);

	// Classes
	const cBase: string = 'rounded-container-token';

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
	<!-- @component This is the component description
	-->
<div bind:this={elemAccordian} class="accordian-group {classesBase}" data-testid="accordion-group">
	<slot />
</div>
