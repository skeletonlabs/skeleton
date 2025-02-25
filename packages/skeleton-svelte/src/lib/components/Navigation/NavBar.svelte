<script lang="ts">
	import type { NavBarProps } from './types.js';
	import { setNavigationContext } from './context.js';

	const {
		value,
		// Root
		base = 'flex flex-col',
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
		onValueChange,
		// Snippets
		children
	}: NavBarProps = $props();

	// Context
	setNavigationContext({
		parent: 'bar',
		get value() {
			return value;
		},
		expanded: false,
		get onValueChange() {
			return onValueChange;
		}
	});
</script>

<!-- @component Provides a horizontal navigation interface. -->

<aside class="{base} {background} {width} {height} {padding} {classes}" data-testid="nav-bar">
	{#if children}
		<nav class="{tilesBase} {tilesFlexDirection} {tilesJustify} {tilesItems} {tilesGap} {tilesClasses}" data-testid="nav-bar-tileset">
			{@render children()}
		</nav>
	{/if}
</aside>
