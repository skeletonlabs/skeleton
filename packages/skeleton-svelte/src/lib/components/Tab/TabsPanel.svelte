<script lang="ts">
	import { getTabContext } from './context.js';
	import type { TabsPanelProps } from './types.js';

	let {
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

<!-- @component A Tab Panel component. -->

<div {...ctx.api.getContentProps(zagProps)} class="{base} {classes}">
	{@render children?.()}
</div>
