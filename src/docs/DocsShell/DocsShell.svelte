<script lang="ts">
	import { page } from '$app/stores';
	import { writable, type Writable } from 'svelte/store';

	// Types
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Components
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';

	// Utilities
	import { toastStore, type ToastMessage } from '$lib/utilities/Toast/stores';
	import { sveldMapperProps, sveldMapperSlots, sveldeMapperEvents } from './sveldMapper';

	// Props
	export let settings: DocsShellSettings;
	// Props (styles)
	export let spacing: string = 'space-y-8';
	// Props (regions)
	export let regionHeader: string = 'bg-white/20 dark:bg-black/10';
	export let regionDetails: string = 'pb-4 overflow-x-auto whitespace-nowrap grid grid-cols-1 md:grid-cols-[128px_1fr] gap-3';
	export let regionPanels: string = 'page-container';

	// Classes
	const cBase: string = '';

	// Stores
	let storeActiveTab: Writable<string> = writable('usage');

	// Local
	const githubSourcePath: string = 'https://github.com/Brain-Bones/skeleton/tree/master/src'; // FIXME: hardcoded path
	const defaultSettings: DocsShellSettings = {
		// Intro
		feature: DocsFeature.Component,
		name: '(name)',
		description: '(description)',
		// Details
		imports: [],
		types: [],
		stylesheetIncludes: [],
		stylesheets: [],
		package: { name: '@brainandbones/skeleton', url: 'https://www.npmjs.com/package/@brainandbones/skeleton' },
		source: '',
		docsPath: $page.url.pathname,
		dependencies: [],
		// (added)
		sveld: [],
		parameters: [],
		classes: [],
		aria: undefined,
		keyboard: []
	};
	const pageSettings: DocsShellSettings = { ...defaultSettings, ...settings };

	function setFeatureIcon(): string {
		const index: number = Object.values(DocsFeature).indexOf(pageSettings.feature);
		// prettier-ignore
		switch(index) {
			case(0): return 'tailwind'; // Element
			case(1): return 'svelte'; // Component
			case(2): return 'svelte'; // Action
			default: return 'screwdriver'; // Default
		}
	}

	function toastCopied(noun: string): void {
		const t: ToastMessage = { message: `Copied ${noun} to clipboard.`, timeout: 2000 };
		toastStore.trigger(t);
	}

	// Sveld Counts ---
	// Conditional tab display based on Sveld reference counts

	const sveldCounts = { props: 0, slots: 0, events: 0 };

	if (pageSettings.sveld && pageSettings.sveld?.length > 0) {
		pageSettings.sveld.forEach((row) => {
			sveldCounts.props += row.source.props.length;
			sveldCounts.slots += row.source.slots.length;
			sveldCounts.events += row.source.events.length;
		});
	}

	// Format ---

	function formatImports(): string {
		return `import { ${pageSettings.imports?.join(', ')} } from '${pageSettings.package?.name}';`;
	}

	function formatTypes(): string {
		return `import type { ${pageSettings.types?.join(', ')} } from '${pageSettings.package?.name}';`;
	}

	function formatStylesheet(stylesheet: string): string {
		return `import '${pageSettings.package?.name}/styles/${stylesheet}.css';`;
	}

	// Copy ---

	function copyImports(): void {
		navigator.clipboard.writeText(formatImports());
		toastCopied('import');
	}

	function copyTypes(): void {
		navigator.clipboard.writeText(formatTypes());
		toastCopied('type import');
	}

	function copyStylesheet(stylesheet: string): void {
		navigator.clipboard.writeText(formatStylesheet(stylesheet));
		toastCopied('stylesheet');
	}

	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesRegionHeader = `${regionHeader}`;
	$: classesRegionPanels = `${regionPanels}`;
</script>

<div class="doc-shell {classesBase}">
	<!-- Region: Header -->
	<header class="doc-shell-header {classesRegionHeader}">
		<!-- Information -->
		<div class="doc-shell-info page-container !pb-0 lg:!space-y-10">
			<!-- Feature -->
			<span class="badge badge-filled-surface">
				<SvgIcon width="w-4" height="h-4" name={setFeatureIcon()} />
				<span>{@html pageSettings.feature}</span>
			</span>

			<!-- Intro -->
			<section class="space-y-2">
				<h1>{@html pageSettings.name}</h1>
				<p>{@html pageSettings.description}</p>
			</section>

			<!-- Details -->
			<!-- TODO: replace w/ chip elements -->
			<section class="doc-shell-details {regionDetails}">
				<!-- Imports -->
				{#if pageSettings.imports?.length}
					<p class="hidden md:inline-block w-32">Import</p>
					<div><code on:click={copyImports}>{formatImports()}</code></div>
				{/if}
				<!-- Types -->
				{#if pageSettings.types?.length}
					<p class="hidden md:inline-block w-32">Types</p>
					<div><code on:click={copyTypes}>{formatTypes()}</code></div>
				{/if}
				<!-- Stylesheets -->
				{#if pageSettings.stylesheetIncludes?.length || pageSettings.stylesheets?.length}
					<p class="hidden md:inline-block w-32">Stylesheets</p>
					<!-- prettier-ignore -->
					<div class="flex space-x-1">
						<!-- Stylesheet Includes -->
						{#if pageSettings.stylesheetIncludes?.length}
							{#each pageSettings.stylesheetIncludes as si}
								<code on:click={() => {copyStylesheet(si)}}>{si}.css</code>
							{/each}
						{/if}
						<!-- Stylesheets -->
						{#each Array.from(pageSettings.stylesheets || []) as s}
							<code on:click={() => {copyStylesheet(s)}}>{s}.css</code>
						{/each}
					</div>
				{/if}
				<!-- Package -->
				<p class="hidden md:inline-block w-32">Package</p>
				<div class="flex items-end space-x-2">
					<SvgIcon width="w-5" height="h-5" name="npm" />
					<a href={pageSettings.package?.url} target="_blank">{pageSettings.package?.name}</a>
				</div>
				<!-- Source Code -->
				<p class="hidden md:inline-block w-32">Source</p>
				<div class="flex items-end space-x-2">
					<SvgIcon width="w-4" height="h-4" class="!mr-1" name="github" />
					<a href={`${githubSourcePath}/lib/${pageSettings.source}`} target="_blank">View Source</a>
				</div>
				<!-- Doc Source -->
				<p class="hidden md:inline-block w-32">Docs</p>
				<div class="flex items-end space-x-2">
					<SvgIcon width="w-4" height="h-4" class="!mr-1" name="book" />
					<a href={`${githubSourcePath}/routes/(inner)${pageSettings.docsPath}/+page.svelte`} target="_blank">Doc Source</a>
				</div>
				<!-- Dependencies -->
				{#if pageSettings.dependencies?.length}
					<p class="hidden md:inline-block w-32">Dependencies</p>
					<div class="grid grid-cols-1 gap-2">
						{#each pageSettings.dependencies as d}
							<a href={d.url} target="_blank">{d.label}</a>
						{/each}
					</div>
				{/if}
				<!-- Accessibility -->
				{#if pageSettings.aria}
					<p class="hidden md:inline-block w-32">Accessibility</p>
					<div class="grid grid-cols-1 gap-2">
						<a href={pageSettings.aria} target="_blank">WAI-ARIA Reference</a>
					</div>
				{/if}
			</section>

			<!-- Tabs -->
			<TabGroup selected={storeActiveTab} rail={false}>
				<Tab value="usage">Usage</Tab>
				<!-- Based on Sveld -->
				{#if sveldCounts.props > 0}<Tab value="properties">Props</Tab>{/if}
				{#if sveldCounts.slots > 0}<Tab value="slots">Slots</Tab>{/if}
				{#if sveldCounts.events > 0}<Tab value="events">Events</Tab>{/if}
				<!-- Based on Page Settings -->
				{#if pageSettings.parameters?.length}<Tab value="parameters">Params</Tab>{/if}
				{#if pageSettings.classes?.length}<Tab value="classes">Classes</Tab>{/if}
				{#if pageSettings.keyboard?.length}<Tab value="keyboard">Keyboard</Tab>{/if}
			</TabGroup>
		</div>
	</header>

	<!-- Tab Panels -->
	<div class="doc-shell-tab-panels {classesRegionPanels}">
		<!-- Tab: Usage -->
		{#if $storeActiveTab === 'usage'}
			<div class="doc-shell-usage {spacing}">
				<!-- Slot: Sandbox -->
				{#if $$slots.sandbox}
					<div>
						<h2 class="sr-only">Examples</h2>
						<div class="doc-shell-sandbox {spacing}">
							<slot name="sandbox">(sandbox)</slot>
						</div>
					</div>
				{/if}
				<!-- Slot: Usage -->
				{#if $$slots.usage}
					<div>
						<h2 class="sr-only">Usage</h2>
						<div class="doc-shell-usage {spacing}">
							<slot name="usage">(usage)</slot>
						</div>
					</div>
				{/if}
				<!-- Slot: Default (footer) -->
				{#if $$slots.default}
					<footer class="doc-shell-footer"><slot /></footer>
				{/if}
			</div>
		{/if}

		<!-- Tab: Properties -->
		{#if $storeActiveTab === 'properties'}
			<div class="doc-shell-properties {spacing}">
				{#if pageSettings.sveld}
					{#each pageSettings.sveld as row}
						{#if row.source.props.length}
							{@const table = sveldMapperProps(row)}
							<section class="space-y-4">
								{#if row.label}<h2>{row.label}</h2>{/if}
								<!-- {#if row.description}<div>{@html row.description}</div>{/if} -->
								{#if table.source.length}
									<DataTable headings={table.headings} source={table.source} />
								{/if}
							</section>
						{/if}
					{/each}
				{/if}
			</div>
		{/if}

		<!-- Tab: Slots -->
		{#if $storeActiveTab === 'slots'}
			<div class="doc-shell-slots {spacing}">
				{#if pageSettings.sveld}
					{#each pageSettings.sveld as row}
						{#if row.source.slots.length}
							{@const table = sveldMapperSlots(row)}
							<section class="space-y-4">
								{#if row.label}<h2>{row.label}</h2>{/if}
								<!-- {#if row.description}<div>{@html row.description}</div>{/if} -->
								{#if table.source.length}
									<DataTable headings={table.headings} source={table.source} />
								{/if}
							</section>
						{/if}
					{/each}
				{/if}
			</div>
		{/if}

		<!-- Tab: Events -->
		{#if $storeActiveTab === 'events'}
			<div class="doc-shell-events {spacing}">
				{#if pageSettings.sveld}
					{#each pageSettings.sveld as row}
						{#if row.source.events.length}
							{@const table = sveldeMapperEvents(row)}
							<section class="space-y-4">
								{#if row.label}<h2>{row.label}</h2>{/if}
								<!-- {#if row.description}<div>{@html row.description}</div>{/if} -->
								{#if table.source.length}
									<DataTable headings={table.headings} source={table.source} />
								{/if}
							</section>
						{/if}
					{/each}
				{/if}
			</div>
		{/if}

		<!-- Tab: Parameters -->
		{#if pageSettings.parameters?.length && $storeActiveTab === 'parameters'}
			<div class="doc-shell-parameters {spacing}">
				<DataTable headings={['Prop', 'Type', 'Default', 'Values', 'Description']} source={pageSettings.parameters} />
			</div>
		{/if}

		<!-- Tab: Classes -->
		{#if pageSettings.classes?.length && $storeActiveTab === 'classes'}
			<div class="doc-shell-classes {spacing}">
				{#each pageSettings.classes as d}
					<section class="space-y-4">
						{#if d.label}<h2>{d.label}</h2>{/if}
						{#if d.description}<div>{@html d.description}</div>{/if}
						{#if d.source}<DataTable headings={['Keys', 'Description']} source={d.source} />{/if}
					</section>
				{/each}
			</div>
		{/if}

		<!-- Tab: Keyboard Interactions -->
		{#if $storeActiveTab === 'keyboard'}
			{#if pageSettings.keyboard?.length}
				<div class="doc-shell-keyboard {spacing}">
					<DataTable headings={['Keys', 'Description']} source={pageSettings.keyboard} />
				</div>
			{/if}
		{/if}
	</div>
</div>

<style lang="postcss">
	.doc-shell-info code {
		@apply hover:!bg-primary-500/30 transition-colors duration-100 cursor-pointer;
	}
</style>
