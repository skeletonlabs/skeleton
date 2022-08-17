<script lang="ts">
	import { onMount } from 'svelte';

	// Props
	export let collapse: boolean = true;
	export let spacing: string = 'space-y-4';

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
</script>

<div
	bind:this={elemAccordian}
	class="accordian-group {spacing} {$$props.classes}"
	data-testid="accordion-group"
>
	<slot />
</div>
