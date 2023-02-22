<script lang="ts">
	import { page } from '$app/stores';

	// Docs
	import LayoutPage from '$docs/layouts/LayoutPage/LayoutPage.svelte';
	import DocsPreviewer from '$docs/components/DocsPreviewer/DocsPreviewer.svelte';
	// Components
	import Tab from '$lib/components/Tab/Tab.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	// Types
	import type { DocsShellSettings } from '$docs/layouts/DocsShell/types';
	// Partials
	import Header from '$docs/layouts/DocsShell/partials/Header.svelte';
	import PanelProps from '$docs/layouts/DocsShell/partials/PanelProps.svelte';
	// Utilities
	import { docSellDefaults } from '$docs/layouts/DocsShell/defaults';

	// Props
	export let settings: DocsShellSettings;

	// Classes
	const cBase = 'relative';
	const cTabs = 'max-w-5xl mx-auto'; // sticky top-0 z-[1]
	const cPanels = 'space-y-10';

	// Local
	let tabPanel: string = 'usage';

	// Page Data
	const pageData: DocsShellSettings = {
		// Define defaults first
		...docSellDefaults,
		// Local Overrides
		...{ docsPath: $page.url.pathname },
		// Prop Settings Values
		...settings
	};

	// Sveld Counts ---
	// Conditional tab display based on Sveld reference counts
	const sveldCounts = { props: 0, slots: 0, events: 0 };
	if (pageData.components && pageData.components?.length > 0) {
		pageData.components.forEach((comp) => {
			sveldCounts.props += comp.sveld.props.length;
			sveldCounts.slots += comp.sveld.slots.length;
			sveldCounts.events += comp.sveld.events.length;
		});
	}

	// Reactive
	$: classesBase = `${cBase}`;
	$: classesTabs = `${cTabs}`;
	$: classesPanels = `${cPanels}`;
</script>

<LayoutPage class="doc-shell {classesBase}">
	<!-- Header -->
	<Header {pageData} />

	<!-- Tabs -->
	<TabGroup class={classesTabs}>
		<Tab bind:group={tabPanel} name="panels" value="usage">Usage</Tab>
		{#if sveldCounts.props > 0}<Tab bind:group={tabPanel} name="properties" value="properties">Props</Tab>{/if}
		{#if pageData?.parameters?.length}<Tab bind:group={tabPanel} name="parameters" value="parameters">Params</Tab>{/if}
		{#if sveldCounts.slots > 0}<Tab bind:group={tabPanel} name="slots" value="slots">Slots</Tab>{/if}
		{#if pageData?.classes?.length}<Tab bind:group={tabPanel} name="classes" value="classes">Classes</Tab>{/if}
		{#if sveldCounts.events > 0}<Tab bind:group={tabPanel} name="events" value="events">Events</Tab>{/if}
		{#if pageData?.keyboard?.length}<Tab bind:group={tabPanel} name="keyboard" value="keyboard">Keyboard</Tab>{/if}
	</TabGroup>

	<!-- Panels -->
	<div id="panels" class={classesPanels}>
		<!-- Panel: Usage -->
		{#if tabPanel === 'usage'}
			<!-- Sandbox -->
			{#if $$slots.sandbox}
				<div class="bg-gradient-to-br from-primary-500 to-secondary-500 p-10 rounded-container-token"><slot name="sandbox" /></div>
			{/if}
			<!-- Slot -->
			<slot name="usage">(usage)</slot>
		{/if}
		<!-- Panel: properties -->
		{#if tabPanel === 'properties'}<PanelProps />{/if}
		<!-- Panel: parameters -->
		{#if tabPanel === 'parameters'}<div class="max-w-5xl mx-auto py-10">(panel-parameters)</div>{/if}
		<!-- Panel: slots -->
		{#if tabPanel === 'slots'}<div class="max-w-5xl mx-auto py-10">(panel-slots)</div>{/if}
		<!-- Panel: classes -->
		{#if tabPanel === 'classes'}<div class="max-w-5xl mx-auto py-10">(panel-classes)</div>{/if}
		<!-- Panel: events -->
		{#if tabPanel === 'events'}<div class="max-w-5xl mx-auto py-10">(panel-events)</div>{/if}
		<!-- Panel: keyboard -->
		{#if tabPanel === 'keyboard'}<div class="max-w-5xl mx-auto py-10">(panel-keyboard)</div>{/if}
	</div>
</LayoutPage>
