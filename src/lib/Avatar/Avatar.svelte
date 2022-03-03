<script lang="ts">
	export let src: string = null;
	export let size: String = 'medium';
	export let cBase: String = 'flex justify-center items-center';
	export let outlined: boolean = false;

	export function makeStyle() {
		let style: string = 'rounded-full';
		if (!src) {
			style += ' bg-surface-400 dark:bg-surface-700';
		}
		if (outlined) {
			style += ' outline outline-2 outline-offset-2 outline-accent-600 dark:outline-accent-300';
		}

		switch (size) {
			case 'small': {
				style += ' w-8 h-8 text-base';
				break;
			}
			case 'medium': {
				style += ' w-12 h-12 text-lg';
				break;
			}
			case 'large': {
				style += ' w-16 h-16 text-2xl';
				break;
			}
			case 'xlarge': {
				style += ' w-24 h-24 text-4xl';
				break;
			}
		}
		return style;
	}
</script>

<div class="{cBase} {makeStyle()}">
	{#if src}
		<img class="rounded-full object-contain" {src} alt="" />
	{:else}
		<p data-testid="placeholder">A</p>
	{/if}
</div>

<style lang="postcss">
</style>
