<script lang="ts">
	import { page } from '$app/stores';
	import { writable, type Writable } from 'svelte/store';

	// Types
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Components
	import Table from '$lib/components/Table/Table.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';

	// Utilities
	import { toastStore } from '$lib/utilities/Toast/stores';
	import type { ToastSettings } from '$lib/utilities/Toast/types';
	import { sveldMapperProps, sveldMapperSlots, sveldeMapperEvents } from './sveldMapper';

	// Props
	export let settings: DocsShellSettings;
	// Props (styles)
	export let spacing = 'space-y-8 md:space-y-12';
	// Props (regions)
	export let regionHeader = 'bg-accent-900/5 dark:bg-accent-900/20 border-b border-black/5 dark:border-white/5';
	export let regionDetails = 'overflow-x-auto whitespace-nowrap grid grid-cols-1 md:grid-cols-[128px_1fr] gap-3';
	export let regionPanels = 'page-container';

	// Classes
	const cBase = '';

	// Stores
	let storeActiveTab: Writable<string> = writable('usage');

	// Local
	const githubSourcePath = 'https://github.com/skeletonlabs/skeleton/tree/master/src'; // FIXME: hardcoded path
	const defaultSettings: DocsShellSettings = {
		// Heading
		feature: DocsFeature.Component,
		name: '(name)',
		description: '(description)',
		// Meta
		imports: [],
		types: [],
		stylesheetIncludes: [],
		stylesheets: [],
		package: { name: '@skeletonlabs/skeleton', url: 'https://www.npmjs.com/package/@skeletonlabs/skeleton' },
		source: '',
		docsPath: $page.url.pathname,
		aria: undefined,
		dependencies: [],
		// Docs
		components: [],
		restProps: undefined,
		parameters: [],
		classes: [],
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
		const t: ToastSettings = { message: `Copied ${noun} to clipboard.`, timeout: 2000 };
		toastStore.trigger(t);
	}

	// Sveld Counts ---
	// Conditional tab display based on Sveld reference counts

	const sveldCounts = { props: 0, slots: 0, events: 0 };

	if (pageSettings.components && pageSettings.components?.length > 0) {
		pageSettings.components.forEach((comp) => {
			sveldCounts.props += comp.sveld.props.length;
			sveldCounts.slots += comp.sveld.slots.length;
			sveldCounts.events += comp.sveld.events.length;
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
			<!-- Intro -->
			<section class="space-y-4">
				<div class="flex items-center space-x-4">
					<h1>{@html pageSettings.name}</h1>
					<!-- Feature -->
					<span class="badge bg-surface-500/30 translate-y-1">
						<SvgIcon width="w-4" height="h-4" name={setFeatureIcon()} />
						<span>{@html pageSettings.feature}</span>
					</span>
				</div>
				<p>{@html pageSettings.description}</p>
			</section>

			<!-- Details -->
			<!-- TODO: replace w/ chip elements -->
			<section class="doc-shell-details {regionDetails}">
				<!-- Imports -->
				{#if pageSettings.imports?.length}
					<p class="hidden md:inline-block w-32">Import</p>
					<div>
						<button on:click={copyImports}>
							<code>{formatImports()}</code>
						</button>
					</div>
				{/if}
				<!-- Types -->
				{#if pageSettings.types?.length}
					<p class="hidden md:inline-block w-32">Types</p>
					<div>
						<button on:click={copyTypes}>
							<code>{formatTypes()}</code>
						</button>
					</div>
				{/if}
				<!-- Stylesheets -->
				{#if pageSettings.stylesheetIncludes?.length || pageSettings.stylesheets?.length}
					<p class="hidden md:inline-block w-32">Stylesheets</p>
					<!-- prettier-ignore -->
					<div class="flex space-x-1">
						<!-- Stylesheet Includes -->
						{#if pageSettings.stylesheetIncludes?.length}
							{#each pageSettings.stylesheetIncludes as si}
								<button on:click={() => {copyStylesheet(si)}}>
									<code>{si}.css</code>
								</button>
							{/each}
						{/if}
						<!-- Stylesheets -->
						{#if pageSettings.stylesheets?.length}
							{#each pageSettings.stylesheets as s}
								<button on:click={() => {copyStylesheet(s)}}>
									<code>{s}.css</code>
								</button>
							{/each}
						{/if}
					</div>
				{/if}
				<!-- Package -->
				<p class="hidden md:inline-block w-32">Package</p>
				<div class="flex items-end space-x-2">
					<SvgIcon width="w-5" height="h-5" name="npm" />
					<a href={pageSettings.package?.url} target="_blank" rel="noreferrer">{pageSettings.package?.name}</a>
				</div>
				<!-- Source Code -->
				<p class="hidden md:inline-block w-32">Source</p>
				<div class="flex items-end space-x-2">
					<SvgIcon width="w-4" height="h-4" class="!mr-1" name="github" />
					<a href={`${githubSourcePath}/lib/${pageSettings.source}`} target="_blank" rel="noreferrer">View Source</a>
				</div>
				<!-- Doc Source -->
				<p class="hidden md:inline-block w-32">Docs</p>
				<div class="flex items-end space-x-2">
					<SvgIcon width="w-4" height="h-4" class="!mr-1" name="book" />
					<a href={`${githubSourcePath}/routes/(inner)${pageSettings.docsPath}/+page.svelte`} target="_blank" rel="noreferrer">Doc Source</a
					>
				</div>
				<!-- Dependencies -->
				{#if pageSettings.dependencies?.length}
					<p class="hidden md:inline-block w-32">Dependencies</p>
					<div class="grid grid-cols-1 gap-2">
						{#each pageSettings.dependencies as d}
							<a href={d.url} target="_blank" rel="noreferrer">{d.label}</a>
						{/each}
					</div>
				{/if}
				<!-- Accessibility -->
				{#if pageSettings.aria}
					<p class="hidden md:inline-block w-32">WAI-ARIA</p>
					<div class="grid grid-cols-1 gap-2">
						<a href={pageSettings.aria} target="_blank" rel="noreferrer">Accessibility Reference</a>
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
	<div class="doc-shell-tab-panels">
		<!-- Tab: Usage -->
		{#if $storeActiveTab === 'usage'}
			<div class="doc-shell-usage {classesRegionPanels}">
				<!-- Slot: Examples Sandbox -->
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
				<!-- Slot: Overflow -->
				{#if $$slots.default}
					<footer class="doc-shell-footer"><slot /></footer>
				{/if}
			</div>
		{/if}

		<!-- Tab: Component Properties -->
		{#if $storeActiveTab === 'properties'}
			<div class="doc-shell-properties {classesRegionPanels}">
				<!-- Supports restProps -->
				{#if pageSettings.restProps}
					<p>
						This component makes use of <a
							href="https://svelte.dev/docs#template-syntax-attributes-and-props"
							target="_blank"
							rel="noreferrer">restProps</a
						>
						for the
						<code>{pageSettings.restProps}</code> element.
					</p>
				{/if}
				<!-- Tables -->
				{#if pageSettings.components}
					{#each pageSettings.components as comp}
						{#if comp.sveld.props.length > 0}
							{@const tableSource = sveldMapperProps(comp)}
							<section class="space-y-4">
								{#if comp.label}<h2>{comp.label}</h2>{/if}
								{#if comp.descProps}<div>{@html comp.descProps}</div>{/if}
								{#if tableSource.body.length > 0}<Table source={tableSource} />{/if}
								{#if comp.overrideProps}<div>
										<em>{comp.label} can override: <span class="text-primary-500">{comp.overrideProps.join(', ')}</span>.</em>
									</div>{/if}
							</section>
						{/if}
					{/each}
				{/if}
			</div>
		{/if}

		<!-- Tab: Component Slots -->
		{#if $storeActiveTab === 'slots'}
			<div class="doc-shell-slots {classesRegionPanels}">
				{#if pageSettings.components}
					{#each pageSettings.components as comp}
						{#if comp.sveld.slots.length > 0}
							{@const tableSource = sveldMapperSlots(comp)}
							<section class="space-y-4">
								{#if comp.label}<h2>{comp.label}</h2>{/if}
								{#if comp.descSlots}<div>{@html comp.descSlots}</div>{/if}
								{#if tableSource.body.length > 0}<Table source={tableSource} />{/if}
							</section>
						{/if}
					{/each}
				{/if}
			</div>
		{/if}

		<!-- Tab: Component Events -->
		{#if $storeActiveTab === 'events'}
			<div class="doc-shell-events {classesRegionPanels}">
				{#if pageSettings.components}
					{#each pageSettings.components as comp}
						{#if comp.sveld.events.length > 0}
							{@const tableSource = sveldeMapperEvents(comp)}
							<section class="space-y-4">
								{#if comp.label}<h2>{comp.label}</h2>{/if}
								{#if comp.descEvents}<div>{@html comp.descEvents}</div>{/if}
								{#if tableSource.body.length > 0}<Table source={tableSource} />{/if}
							</section>
						{/if}
					{/each}
				{/if}
			</div>
		{/if}

		<!-- Tab: Action Parameters -->
		{#if pageSettings.parameters?.length && $storeActiveTab === 'parameters'}
			<div class="doc-shell-parameters {classesRegionPanels}">
				<Table
					source={{
						head: ['Prop', 'Type', 'Default', 'Values', 'Description'],
						body: pageSettings.parameters
					}}
				/>
			</div>
		{/if}

		<!-- Tab: Tailwind Element Classes -->
		{#if pageSettings.classes?.length && $storeActiveTab === 'classes'}
			<div class="doc-shell-classes {classesRegionPanels}">
				<Table
					source={{
						head: ['Keys', 'Values', 'Description'],
						body: pageSettings.classes
					}}
				/>
			</div>
		{/if}

		<!-- Tab: Keyboard Interactions -->
		{#if $storeActiveTab === 'keyboard'}
			{#if pageSettings.keyboard?.length}
				<div class="doc-shell-keyboard {classesRegionPanels}">
					<Table
						source={{
							head: ['Keys', 'Description'],
							body: pageSettings.keyboard
						}}
					/>
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
