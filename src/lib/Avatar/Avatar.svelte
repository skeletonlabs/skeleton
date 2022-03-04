<script lang="ts">

	export let src:         string = ''; // Image is defaulting to null
	export let size:        String = 'md'; // Size for the component
	export let outlined:    boolean = false;
    export let interactive: boolean = false;
	
	let cBase:       		String = 'flex justify-center items-center rounded-full bg-surface-300 dark:bg-surface-700'; // Refers to the overlaying div container + alignment props

    /**
     * Function to generate the colors, sizes, etc of the component
     */
	export function makeStyle(): String {
		let style: string = '';
		
		if (outlined) { // Outlined props
			style += ' outline outline-2 outline-offset-2 outline-accent-600 dark:outline-accent-300';
		}
        if(interactive) { // Hover state
            style += ' hover:outline hover:outline-2 outline-accent-600 outline-offset-4 dark:outline-accent-300 cursor-pointer transition-all ease-in-out';
        }

		switch (size) {
			case 'sm': {
				style += ' w-8 h-8 text-base';
				break;
			}
			case 'md': {
				style += ' w-12 h-12 text-lg';
				break;
			}
			case 'lg': {
				style += ' w-16 h-16 text-2xl';
				break;
			}
			case 'xl': {
				style += ' w-24 h-24 text-4xl';
				break;
			}
		}
		return style;
	}
</script>

<!-- Avatar Component -->
<div on:click class="{cBase} {makeStyle()}">
	{#if src}
		<img class="rounded-full object-contain" {src} alt="" />
	{:else}
		<p data-testid="placeholder">A</p>
	{/if}
</div>

