<script lang="ts">
	import type { TabsPanelProps } from './types.js';

	let {
		value,
		group,
		//A11y
		labelledBy,
		// Root
		classes = '',
		// Snippets
		children
	}: TabsPanelProps = $props();
</script>

<!-- @component A Tab Panel component. -->

{#if value === group && children}
	<div class="{classes}" aria-labelledby={labelledBy}>
		{@render children()}
	</div>
{/if}
