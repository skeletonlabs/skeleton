<script lang="ts">
	import type { AppBarProps } from './types.js';

	let {
		// A11y
		label = '',
		labelledby = '',
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
		toolbarClasses = '',
		// Lead
		leadBase = 'flex',
		leadSpaceX = 'space-x-4',
		leadPadding = '',
		leadClasses = '',
		// Center
		centerBase = 'grow',
		centerAlign = 'text-center',
		centerPadding = '',
		centerClasses = '',
		// Trail
		trailBase = 'flex',
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

	//A11y
	const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
	let appBarElement:HTMLDivElement|undefined = $state(undefined);
	function handleKeyDown(event:KeyboardEvent) {
		if(appBarElement === undefined) return;

		const focusable = Array.from(appBarElement.querySelectorAll(focusableElements)) as HTMLElement[];
        const focusedElementIndex = focusable.indexOf(document.activeElement as HTMLElement) || 0;

		switch (event.code) {
			case 'ArrowRight':
				event.preventDefault();
				if(focusedElementIndex < focusable.length - 1) {
					focusable[focusedElementIndex + 1].focus();
				} else {
					focusable[0].focus();
				}
				break;
			case 'ArrowLeft':
				event.preventDefault();
				if(focusedElementIndex > 0) {
					focusable[focusedElementIndex - 1].focus();
				} else {
					focusable[focusable.length - 1]?.focus();
				}
				break;
			case 'Home':
				event.preventDefault();
				focusable[0].focus();
				break;
			case 'End':
				event.preventDefault();
				focusable[focusable.length - 1]?.focus();
				break;
		}
	}
</script>

<div
	bind:this={appBarElement}
	class="{base} {background} {spaceY} {border} {padding} {shadow} {classes}"
	role="toolbar"
	data-testid="app-bar"
	aria-label={label}
	aria-labelledby={labelledby}
	tabindex="-1"
	onkeydown={handleKeyDown}
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
