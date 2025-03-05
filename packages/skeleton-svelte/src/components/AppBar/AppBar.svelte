<script lang="ts">
	import type { AppBarProps } from './types.js';

	const {
		// Root
		base = 'w-full flex flex-col',
		background = 'bg-surface-100-900',
		spaceY = 'space-y-4',
		border = '',
		padding = 'p-4',
		shadow = '',
		classes = '',
		// Toolbar
		toolbarBase = 'flex justify-between',
		toolbarGridCols = 'grid-cols-[auto_1fr_auto]',
		toolbarGap = 'gap-4',
		toolbarClasses = '',
		// Lead
		leadBase = 'flex',
		leadSpaceX = 'space-x-4 rtl:space-x-reverse',
		leadPadding = '',
		leadClasses = '',
		// Center
		centerBase = 'grow',
		centerAlign = 'text-center',
		centerPadding = '',
		centerClasses = '',
		// Trail
		trailBase = 'flex',
		trailSpaceX = 'space-x-4 rtl:space-x-reverse',
		trailPadding = '',
		trailClasses = '',
		// Headline
		headlineBase = 'w-full',
		headlineClasses = '',
		// Snippets
		children,
		lead,
		trail,
		headline
	}: AppBarProps = $props();
</script>

<!-- @component A header element for the top of a page layout. -->

<header class="{base} {background} {spaceY} {border} {padding} {shadow} {classes}" role="toolbar" data-testid="app-bar">
	<section class="{toolbarBase} {toolbarGridCols} {toolbarGap} {toolbarClasses}" data-testid="app-bar-toolbar">
		{#if lead}
			<div class="{leadBase} {leadSpaceX} {leadPadding} {leadClasses}">
				{@render lead()}
			</div>
		{/if}

		{#if children}
			<div class="{centerBase} {centerAlign} {centerPadding} {centerClasses}">
				{@render children()}
			</div>
		{/if}

		{#if trail}
			<div class="{trailBase} {trailSpaceX} {trailPadding} {trailClasses}">
				{@render trail()}
			</div>
		{/if}
	</section>

	{#if headline}
		<section class="{headlineBase} {headlineClasses}" data-testid="app-bar-headline">
			{@render headline()}
		</section>
	{/if}
</header>
