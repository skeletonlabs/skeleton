<script lang="ts">
	import { getTabContext } from './context.js';
	import type { TabsPanelProps } from './types.js';

	const {
		// Root
		base = '',
		classes = '',
		// Children
		children,
		// Zag
		...zagProps
	}: TabsPanelProps = $props();

	// Get Context
	const ctx = getTabContext();
</script>

<!-- @component A individual tab panel of content. -->

<div {...ctx.api.getContentProps(zagProps)} class="{base} {classes}" data-testid="tabs-panel">
	{@render children?.()}
</div>
