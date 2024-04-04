<script lang="ts">
	import type { TabsPanelProps } from './types.js';

	let {
		id,
		value,
		group = $bindable(),
		// A11y
		labelledBy,
		// Root
		classes = '',
		// Snippets
		children
	}: TabsPanelProps = $props();
</script>

<!-- @component A Tab Panel component. -->

{#if value === group && children}
	<div {id} role="tabpanel" tabindex="0" aria-labelledby={labelledBy} class={classes}>
		{@render children()}
	</div>
{/if}
