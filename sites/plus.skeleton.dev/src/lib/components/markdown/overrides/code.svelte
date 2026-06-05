<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export interface Props extends HTMLAttributes<HTMLElement> {}
</script>

<script lang="ts">
	const { children, ...rest }: Props = $props();
</script>

<code class="code" {...rest}>
	{@render children?.()}
</code>

<style>
	:global(.shiki) {
		background-color: var(--color-neutral-50);
		border-radius: var(--radius-container);
		padding: 1rem;
		font-size: var(--text-xs);
	}
	@media (prefers-color-scheme: dark) {
		:global(.shiki) {
			background-color: var(--color-neutral-950) !important;
			color: var(--shiki-dark) !important;
		}
		:global(.shiki span) {
			color: var(--shiki-dark) !important;
		}
	}
</style>
