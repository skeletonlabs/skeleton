<script lang="ts">
	import { setContext } from 'svelte';
	import type { NavBarProps } from './types.js';

	let {
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
		// Snippets
		children
	}: NavBarProps = $props();

	// Context
	setContext('parent', 'bar');
</script>

<aside class="{base} {background} {width} {height} {padding} {classes}">
	{#if children}
		<nav class="{tilesBase} {tilesFlexDirection} {tilesJustify} {tilesItems} {tilesGap} {tilesClasses}">
			{@render children()}
		</nav>
	{/if}
</aside>
