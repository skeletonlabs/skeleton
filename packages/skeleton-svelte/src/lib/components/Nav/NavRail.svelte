<script lang="ts">
	import { setContext } from 'svelte';
	import type { NavigationProps } from './types.js';

	let {
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
		// Snippets
		header,
		tiles,
		footer
	}: NavigationProps = $props();

	// Context
	setContext('parent', 'rail');
	setContext('expanded', expanded);

	// Reactive
	let rxWidth = $derived(expanded ? widthExpanded : width);
</script>

<aside class="{base} {background} {height} {padding} {rxWidth} {classes}">
	<!-- Header -->
	{#if header}
		<header class="{headerBase} {headerFlexDirection} {headerJustify} {headerItems} {headerGap} {headerClasses}">
			{@render header()}
		</header>
	{/if}
	<!-- Tiles -->
	{#if tiles}
		<nav class="{tilesBase} {tilesFlexDirection} {tilesJustify} {tilesItems} {tilesGap} {tilesClasses}">
			{@render tiles()}
		</nav>
	{/if}
	<!-- Footer -->
	{#if footer}
		<footer class="{footerBase} {footerFlexDirection} {footerJustify} {footerItems} {footerGap} {footerClasses}">
			{@render footer()}
		</footer>
	{/if}
</aside>
