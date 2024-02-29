<script lang="ts">
	import type { AppBarProps } from './types.js';

	let {
		// A11y
		label = '',
		labelledby = '',
		// Root
		base = 'flex flex-col',
		background = 'bg-surface-100-900',
		spaceY = 'space-y-4',
		border = '',
		padding = 'p-4',
		shadow = '',
		classes = '',
		// Toolbar
		toolbarBase = 'flex justify-between',
		toolbarClasses = '',
		// Lead
		leadBase = '',
		leadSpaceX = 'space-x-4',
		leadPadding = '',
		leadClasses = '',
		// Center
		centerBase = 'grow',
		centerAlign = 'text-center',
		centerPadding = '',
		centerClasses = '',
		// Trail
		trailBase = '',
		trailSpaceX = 'space-x-4',
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
	} = $props<AppBarProps>();
</script>

<div
	class="{base} {background} {spaceY} {border} {padding} {shadow} {classes}"
	role="toolbar"
	data-testid="app-bar"
	aria-label={label}
	aria-labelledby={labelledby}
>
	<div class="{toolbarBase} {toolbarClasses}">
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
	</div>

	{#if headline}
		<div class="{headlineBase} {headlineClasses}">
			{@render headline()}
		</div>
	{/if}
</div>
