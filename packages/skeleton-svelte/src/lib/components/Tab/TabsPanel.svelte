<script lang="ts">
	import type { TabsPanelProps } from './types.js';

	let {
		value,
		group,
		//A11y
		labelledBy,
		// Root
		base = '',
		classes = '',
		// Snippets
		children
	}: TabsPanelProps = $props();
</script>

<!-- @component A Tab Panel component. -->

{#if value === group && children}
	<section class="{base} {classes}" aria-labelledby={labelledBy}>
		{@render children()}
	</section>
{/if}
