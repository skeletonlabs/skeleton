<script lang="ts">
	import { setContext } from 'svelte';
	import type { TabGroupProps } from './types.js';

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
		listJustify = 'justify-start',
		listBorder = 'border-b border-surface-400-600',
		listClasses = '',
		// Tab panel
		panelBase = '',
		panelClasses = '',
		// Tab Children
		tabBase = 'flex-none',
		tabActive = 'border-b-2 border-surface-950-50',
		tabBackground = 'hover:bg-surface-400-600',
		tabPadding = 'px-4 py-2',
		tabRounded = 'rounded-tl-container rounded-tr-container',
		tabSpacingY = 'space-y-1',
		tabClasses = '',
		// Snippets
		children,
		panel
	} = $props<TabGroupProps>();

	setContext('base', tabBase);
	setContext('active', tabActive);
	setContext('background', tabBackground);
	setContext('padding', tabPadding);
	setContext('rounded', tabRounded);
	setContext('spacingY', tabSpacingY);
	setContext('classes', tabClasses);
</script>

<!-- @component A Tab parent component. -->

<div class="{base} {spaceY} {classes}" data-testid="tab-group">
	{#if children}
		<div class="{listBase} {listJustify} {listBorder} {listClasses}" role="tablist" aria-labelledby={listLabelledBy}>
			{@render children()}
		</div>
	{/if}
	{#if panel}
		<div class="{panelBase} {panelClasses}" role="tabpanel" aria-labelledby={panelLabelledBy}>
			{@render panel()}
		</div>
	{/if}
</div>
