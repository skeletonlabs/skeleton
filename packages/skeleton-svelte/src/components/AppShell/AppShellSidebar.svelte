<script lang="ts">
	import { getAppShellContext } from './context.js';
	import type { AppShellSidebarProps } from './types.js';

	// Props
	const {
		sticky = false,
		position,
		// Root
		leftBase = '[grid-area:sidebar-left]',
		rightBase = '[grid-area:sidebar-right]',
		classes,
		// Snippets
		children
	}: AppShellSidebarProps = $props();

	// Context
	const ctx = getAppShellContext();

	// Reactive
	const rxPosition = $derived(position === 'left' ? leftBase : rightBase);
	const rxSticky = $derived(sticky ? 'sticky' : '');
</script>

<!-- @component AppShell sidebar subcomponent. -->

<div class={rxPosition}>
	<aside class="{rxSticky} {classes}" style:top={sticky === 'header' ? ctx.headerHeight + 'px' : sticky === 'page' ? 0 : undefined}>
		{@render children?.()}
	</aside>
</div>
