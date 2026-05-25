<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		class?: ClassValue;
		children?: Snippet;
	}

	let { class: classList, children }: Props = $props();
</script>

<section class={['stripes', classList]}>
	{@render children?.()}
</section>

<style>
	.stripes {
		position: relative;
		isolation: isolate;
	}
	.stripes::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background-color: var(--color-surface-200-800);
		mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cline x1='0' y1='4' x2='4' y2='0' stroke='white' stroke-width='0.75'/%3E%3C/svg%3E");
		mask-repeat: repeat;
	}
</style>
