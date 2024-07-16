<script lang="ts">
	import type { NavBarProps } from './types.js';
	import { setNavigationContext } from './context.js';

	let {
		value = $bindable(''),
		// Root
		base = 'h-full flex flex-col',
		background = 'preset-filled-surface-100-900',
		width = 'min-w-[320px] w-full',
		height = 'h-20',
		padding = 'p-1',
		classes = '',
		// Tiles
		tilesBase = 'flex-1 flex',
		tilesFlexDirection = '',
		tilesJustify = 'justify-center',
		tilesItems = 'items-center',
		tilesGap = 'gap-1',
		tilesClasses = '',
		// Events
		onchange,
		// Snippets
		children
	}: NavBarProps = $props();

	function onSelectionHandler(id: string) {
		value = id;
		if (onchange) onchange(id);
	}

	// Context
	setNavigationContext({
		parent: 'bar',
		get value() {
			return value;
		},
		expanded: false,
		onSelectionHandler
	});
</script>

<aside class="{base} {background} {width} {height} {padding} {classes}" data-testid="nav-bar">
	{#if children}
		<nav class="{tilesBase} {tilesFlexDirection} {tilesJustify} {tilesItems} {tilesGap} {tilesClasses}">
			{@render children()}
		</nav>
	{/if}
</aside>
