<script lang="ts">
	import { page } from '$app/stores';
	import { writable, type Writable } from 'svelte/store';

	// Types
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	// Components
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';

	// Props
	export let settings: DocsShellSettings;
	export let properties: DocsShellTable[];
	export let classes: DocsShellTable[];
	export let slots: DocsShellTable[];
	export let a11y: DocsShellTable[];
	// Props (styles)
	export let padding: string = ' p-4 md:p-10';
	// Props (regions)
	export let regionHeader: string = 'bg-white/75 dark:bg-black/10';
	export let regionPanels: string = 'container mx-auto';

	// Classes
	const cBase: string = '';
	const cPanel: string = 'space-y-8';

	// Stores
	let storePageTabs: Writable<string> = writable('usage');

	// Local
	const githubSourcePath: string = 'https://github.com/Brain-Bones/skeleton/tree/dev/src'; // hardcoded
	// prettier-ignore
	const defaultSettings: DocsShellSettings = {
		// Intro
		feature: DocsFeature.Component,
		name: '(name)',
		description: '(description)',
		// Details
		imports: [],
		stylesheetIncludes: [],
		stylesheets: [],
		source: '',
		docs: $page.url.pathname,
		package: { name: '@brainandbones/skeleton', url: 'https://www.npmjs.com/package/@brainandbones/skeleton' },
        dependencies: [],
	};
	const pageSettings: DocsShellSettings = { ...defaultSettings, ...settings };

	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesRegionHeader = `${regionHeader} ${padding}`;
	$: classesRegionPanels = `${regionPanels} ${padding}`;
	$: classesPanel = `${cPanel}`;
</script>

<div class="doc-shell {classesBase}">
	<!-- Region: Header -->
	<header class="doc-shell-header {classesRegionHeader} !pb-0">
		<!-- Information -->
		<div class="container mx-auto space-y-8">
			<!-- Intro -->
			<section class="space-y-4">
				<span class="text-xs opacity-80">{@html pageSettings.feature}</span>
				<h1>{@html pageSettings.name}</h1>
				<p>{@html pageSettings.description}</p>
			</section>

			<!-- Details -->
			<ul class="text-sm space-y-4">
				<!-- Imports -->
				{#if pageSettings.imports}
					<li>
						<span class="detail-header">Import</span>
						<span>import {`{ ${pageSettings.imports.join(' ')} }`} '{pageSettings.package?.name}';</span>
					</li>
				{/if}
				<!-- Stylesheets -->
				{#if pageSettings.stylesheetIncludes?.length || pageSettings.stylesheets?.length}
					<li class="flex items-start">
						<span class="detail-header">Stylesheets</span>
						<div class="grid grid-cols-1 gap-2">
							<!-- Stylesheet Includes -->
							{#if pageSettings.stylesheetIncludes?.length}
								<div class="flex space-x-2">
									{#each pageSettings.stylesheetIncludes as si}
										<span class="badge badge-ghost">{si}.css</span>
									{/each}
								</div>
							{/if}
							{#each Array.from(pageSettings.stylesheets || []) as s}
								<span>import '@brainandbones/skeleton/styles/{s}.css';</span>
							{/each}
						</div>
					</li>
				{/if}
				<!-- Source Code -->
				<li>
					<span class="detail-header">Source</span>
					<a href={githubSourcePath + '/lib/' + pageSettings.source} target="_blank">View source code</a>
				</li>
				<!-- Doc Source -->
				<li>
					<span class="detail-header">Docs</span>
					<a href={githubSourcePath + '/routes/(inner)' + pageSettings.docs} target="_blank">Edit this page</a>
				</li>
				<!-- Package -->
				<li>
					<span class="detail-header">Package</span>
					<a href={pageSettings.package?.url} target="_blank">{pageSettings.package?.name}</a>
				</li>
				<!-- Dependencies -->
				{#if pageSettings.dependencies?.length}
					<li class="flex items-start">
						<span class="detail-header">Dependencies</span>
						<div class="grid grid-cols-1 gap-2">
							{#each pageSettings.dependencies as d}
								<a href={d.url} target="_blank">{d.label}</a>
							{/each}
						</div>
					</li>
				{/if}
			</ul>

			<!-- Tabs -->
			<TabGroup selected={storePageTabs}>
				<Tab value="usage">Usage</Tab>
				{#if properties.length}<Tab value="properties">Properties</Tab>{/if}
				{#if classes.length}<Tab value="classes">Classes</Tab>{/if}
				{#if slots.length}<Tab value="slots">Slots</Tab>{/if}
				{#if a11y.length}<Tab value="a11y">Accessibility</Tab>{/if}
			</TabGroup>
		</div>
	</header>

	<!-- Tab Panels -->
	<div class="doc-shell-tab-panels {classesRegionPanels}">
		<!-- Tab: Usage -->
		{#if $storePageTabs === 'usage'}
			<section class="doc-shell-usage {classesPanel}">
				<slot name="sandbox" />
				<h2>Usage</h2>
				<slot />
			</section>
		{/if}

		<!-- Tab: Props -->
		{#if properties.length && $storePageTabs === 'properties'}
			<section class="doc-shell-props {classesPanel}">
				{#each properties as d}
					{#if d.label}<h3>{d.label}</h3>{/if}
					{#if d.description}<div>{@html d.description}</div>{/if}
					<DataTable headings={d.headings} source={d.source} />
				{/each}
			</section>
		{/if}

		<!-- Tab: Classes -->
		{#if classes.length && $storePageTabs === 'classes'}
			<section class="doc-shell-classes {classesPanel}">
				{#each classes as d}
					{#if d.label}<h3>{d.label}</h3>{/if}
					{#if d.description}<div>{@html d.description}</div>{/if}
					<DataTable headings={d.headings} source={d.source} />
				{/each}
			</section>
		{/if}

		<!-- Tab: Slots -->
		{#if slots.length && $storePageTabs === 'slots'}
			<section class="doc-shell-slots {classesPanel}">
				{#each slots as d}
					{#if d.label}<h3>{d.label}</h3>{/if}
					{#if d.description}<div>{@html d.description}</div>{/if}
					<DataTable headings={d.headings} source={d.source} />
				{/each}
			</section>
		{/if}

		<!-- Tab: A11y -->
		{#if a11y.length && $storePageTabs === 'a11y'}
			<section class="doc-shell-a11y {classesPanel}">
				{#each a11y as d}
					{#if d.label}<h3>{d.label}</h3>{/if}
					{#if d.description}<div>{@html d.description}</div>{/if}
					<DataTable headings={d.headings} source={d.source} />
				{/each}
			</section>
		{/if}
	</div>
</div>

<style lang="postcss">
	.detail-header {
		@apply inline-block w-28 mr-4;
	}
</style>
