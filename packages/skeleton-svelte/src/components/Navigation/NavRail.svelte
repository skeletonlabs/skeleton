<script lang="ts">
	import { setNavigationContext } from './context.js';
	import type { NavRailProps } from './types.js';

	const {
		value = '',
		expanded = false,
		// Root
		base = 'h-full flex flex-col',
		background = 'preset-filled-surface-100-900',
		padding = 'p-1',
		width = 'w-24',
		widthExpanded = 'w-64',
		height = 'h-full',
		classes = '',
		// Header
		headerBase = 'flex',
		headerFlexDirection = 'flex-col',
		headerJustify = 'justify-center',
		headerItems = 'items-center',
		headerGap = 'gap-1',
		headerClasses = '',
		// Tiles
		tilesBase = 'flex-1 flex',
		tilesFlexDirection = 'flex-col',
		tilesJustify = 'justify-center',
		tilesItems = 'items-center',
		tilesGap = 'gap-1',
		tilesClasses = '',
		// Footer
		footerBase = 'flex',
		footerFlexDirection = 'flex-col',
		footerJustify = 'justify-center',
		footerItems = 'items-center',
		footerGap = 'gap-1',
		footerClasses = '',
		// Events
		onValueChange,
		// Snippets
		header,
		tiles,
		footer
	}: NavRailProps = $props();

	// Context
	setNavigationContext({
		parent: 'rail',
		get value() {
			return value;
		},
		get expanded() {
			return expanded;
		},
		get onValueChange() {
			return onValueChange;
		}
	});

	// Reactive
	let rxWidth = $derived(expanded ? widthExpanded : width);
</script>

<!-- @component Provides a vertical navigation interface. -->

<aside class="{base} {background} {height} {padding} {rxWidth} {classes}" data-testid="nav-rail">
	<!-- Header -->
	{#if header}
		<header
			class="{headerBase} {headerFlexDirection} {headerJustify} {headerItems} {headerGap} {headerClasses}"
			data-testid="nav-rail-header"
		>
			{@render header()}
		</header>
	{/if}
	<!-- Tiles -->
	{#if tiles}
		<nav class="{tilesBase} {tilesFlexDirection} {tilesJustify} {tilesItems} {tilesGap} {tilesClasses}" data-testid="nav-rail-tiles">
			{@render tiles()}
		</nav>
	{/if}
	<!-- Footer -->
	{#if footer}
		<footer
			class="{footerBase} {footerFlexDirection} {footerJustify} {footerItems} {footerGap} {footerClasses}"
			data-testid="nav-rail-footer"
		>
			{@render footer()}
		</footer>
	{/if}
</aside>
