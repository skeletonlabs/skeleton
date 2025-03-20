<script lang="ts">
	import { getAppShellContext } from './context.js';
	import type { AppShellSidebarProps } from './types.js';

	// Props
	const {
		sticky = false,
		position,
		// Root
		classes,
		// Snippets
		children
	}: AppShellSidebarProps = $props();

	// Context
	const ctx = getAppShellContext();
</script>

<div style:grid-area="sidebar-{position}">
	<aside
		class={[sticky && 'sticky', classes]}
		style:top={sticky === 'header' ? ctx.headerHeight + 'px' : sticky === 'page' ? 0 : undefined}
	>
		{@render children?.()}
	</aside>
</div>
