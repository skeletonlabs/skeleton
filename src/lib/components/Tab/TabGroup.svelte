<script lang="ts">
	// Slots
	/**
	 * @slot panel - An optional region to house tab content.
	 */

	import { setContext } from 'svelte';

	// Types
	import type { CssClasses } from '$lib';

	// Props (Group)
	/** Provide classes to set the tab list flex justification. */
	export let justify: CssClasses = 'justify-start';
	/** Provide classes to set the tab group border width. */
	export let borderWidth: CssClasses = 'border-b';
	/** Provide classes to set the tab group border color. */
	export let borderColor: CssClasses = 'border-surface-400-500-token';

	// Props (Tab)
	/** Provide classes to style each tab's active styles. */
	export let active: CssClasses = 'border-b-2 border-surface-900-50-token';
	/** Provide classes to style each tab's hover styles. */
	export let hover: CssClasses = 'hover:variant-soft';
	/** Provide classes to style each tab's flex styles. */
	export let flex: CssClasses = 'flex-none';
	/** Provide classes to style each tab's padding styles. */
	export let padding: CssClasses = 'px-4 py-2';
	/** Provide classes to style each tab's box radius styles. */
	export let rounded: CssClasses = 'rounded-tl-container-token rounded-tr-container-token';

	// Props (regions)
	/** Provide arbitrary classes to style the tab list region. */
	export let regionList: CssClasses = '';
	/** Provide arbitrary classes to style the tab panel region. */
	export let regionPanel: CssClasses = '';

	// Props (a11y)
	/** Provide the ID of the element that labels the tab list. */
	export let labelledby: string = '';
	/** Matches the tab aria-control value, pairs with the panel. */
	export let panel: string = '';

	// Context
	setContext('active', active);
	setContext('hover', hover);
	setContext('flex', flex);
	setContext('padding', padding);
	setContext('rounded', rounded);

	// Classes
	const cBase = 'space-y-4 overflow-x-auto hide-scrollbars';
	const cList = 'flex';
	const cPanel = '';

	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesList = `${cList} ${justify} ${borderWidth} ${borderColor} ${regionList}`;
	$: classesPanel = `${cPanel} ${regionPanel}`;
</script>

<div class="tab-group {classesBase}" data-testid="tab-group" on:click on:keypress on:keydown on:keyup>
	<!-- Tab List -->
	<div class="tab-list {classesList}" role="tablist" aria-labelledby={labelledby}>
		<slot />
	</div>
	<!-- Tab Panel -->
	{#if $$slots.panel}
		<div class="tab-panel {classesPanel}" role="tabpanel" aria-labelledby={panel}><slot name="panel" /></div>
	{/if}
</div>
