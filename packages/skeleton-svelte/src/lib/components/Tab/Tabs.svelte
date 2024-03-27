<script lang="ts">
	import type { TabsProps } from './types.js';

	let {
		// Root
		base = 'w-fit',
		spaceY = 'space-y-4',
		classes = '',
		// Tab list
		listBase = 'flex overflow-x-auto hide-scrollbar',
		listSpaceX = 'space-x-4',
		listJustify = 'justify-start',
		listBorder = 'border-b border-surface-100-900',
		listClasses = '',
		// Tab panel
		panelClasses = '',
		// Snippets
		list,
		panel
	}: TabsProps = $props();

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

<div class="{base} {spaceY} {classes}" data-testid="tabs">
	{#if list}
		<div class="{listBase} {listSpaceX} {listJustify} {listBorder} {listClasses}" role="tablist">
			{@render list()}
		</div>
	{/if}
	{#if panel}
		<div
			bind:this={panelElem}
			class="{panelClasses}"
			role="tabpanel"
			tabindex={panelTabIndex}
		>
			{@render panel()}
		</div>
	{/if}
</div>
