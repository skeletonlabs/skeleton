<script lang="ts">
	import { setContext } from 'svelte';
	import type { TabsProps } from './types.js';

	let {
		// A11Y
		listLabelledBy = '',
		panelLabelledBy = '',
		// Root
		base = '',
		spaceY = 'space-y-4',
		classes = '',
		// Tab list
		listBase = 'flex overflow-x-auto hide-scrollbar',
		listWidth = 'w-fit',
		listJustify = 'justify-start',
		listBorder = 'border-b border-surface-50-950',
		listClasses = '',
		// Tab panel
		panelBase = '',
		panelClasses = '',
		// Tab Controls
		controlsBase = 'flex-none',
		controlsActive = 'border-b-2 border-surface-950-50',
		controlsBackground = 'hover:bg-surface-400-600',
		controlsPadding = 'px-4 py-2',
		controlsRounded = 'rounded-tl-container rounded-tr-container',
		controlsSpacingY = 'space-y-1',
		controlsClasses = '',
		// Snippets
		list,
		panel
	} = $props<TabsProps>();

	setContext('base', controlsBase);
	setContext('active', controlsActive);
	setContext('background', controlsBackground);
	setContext('padding', controlsPadding);
	setContext('rounded', controlsRounded);
	setContext('spacingY', controlsSpacingY);
	setContext('classes', controlsClasses);
</script>

<!-- @component A Tab parent component. -->

<div class="{base} {spaceY} {classes}" data-testid="tab-group">
	{#if list}
		<div class="{listBase} {listWidth} {listJustify} {listBorder} {listClasses}" role="tablist" aria-labelledby={listLabelledBy}>
			{@render list()}
		</div>
	{/if}
	{#if panel}
		<div class="{panelBase} {panelClasses}" role="tabpanel" aria-labelledby={panelLabelledBy}>
			{@render panel()}
		</div>
	{/if}
</div>
