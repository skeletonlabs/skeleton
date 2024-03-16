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
		listSpaceX = 'space-x-4',
		listJustify = 'justify-start',
		listBorder = 'border-b border-surface-50-950',
		listClasses = '',
		// Tab panel
		panelBase = '',
		panelClasses = '',
		// Tab Controls
		controlsBase = 'flex',
		controlsText = 'hover:text-primary-600-400',
		controlsJustify = 'justify-center',
		controlsActive = 'border-b-2 border-surface-950-50 text-surface-950-50',
		controlsInactive = 'text-surface-600-400 fill-surface-600-400',
		controlsBackground = '',
		controlsPadding = 'px-4 py-2',
		controlsRounded = '',
		controlsSpacingY = 'space-y-1',
		controlsCursor = 'cursor-pointer',
		controlsClasses = '',
		// Events
		onclick = () => {},
		onkeypress = () => {},
		onkeydown = () => {},
		onkeyup = () => {},
		onchange = () => {},
		// Snippets
		list,
		panel
	}: TabsProps = $props();

	setContext('base', controlsBase);
	setContext('text', controlsText);
	setContext('justify', controlsJustify);
	setContext('active', controlsActive);
	setContext('inactive', controlsInactive);
	setContext('background', controlsBackground);
	setContext('padding', controlsPadding);
	setContext('rounded', controlsRounded);
	setContext('spacingY', controlsSpacingY);
	setContext('cursor', controlsCursor);
	setContext('classes', controlsClasses);
	setContext('onclick', onclick);
	setContext('onkeypress', onkeypress);
	setContext('onkeydown', onkeydown);
	setContext('onkeyup', onkeyup);
	setContext('onchange', onchange);

	let panelElem: HTMLDivElement | undefined = $state(undefined);
	let panelTabIndex = $state(0);
	// if the tabpanel doesn't contain focusable element, it will be focusable following the ARIA guidelines.
	$effect(() => {
		if (!panelElem) return;
		const hasFocusableElements =
			panelElem.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').length > 0;
		panelTabIndex = hasFocusableElements ? -1 : 0;
	});
</script>

<!-- @component A Tab parent component. -->

<div class="{base} {spaceY} {classes}" data-testid="tab-group">
	{#if list}
		<ul class="{listBase} {listSpaceX} {listJustify} {listBorder} {listClasses}" role="tablist" aria-labelledby={listLabelledBy}>
			{@render list()}
		</ul>
	{/if}
	{#if panel}
		<div
			bind:this={panelElem}
			class="{panelBase} {panelClasses}"
			role="tabpanel"
			aria-labelledby={panelLabelledBy}
			tabindex={panelTabIndex}
		>
			{@render panel()}
		</div>
	{/if}
</div>
