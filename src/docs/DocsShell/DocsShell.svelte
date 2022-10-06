<script lang="ts">
	import { page } from '$app/stores';
	import { writable, type Writable } from 'svelte/store';

	// Types
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	// Components
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	// Utilities
	import { toastStore, type ToastMessage } from '$lib/utilities/Toast/stores';

	// Props
	export let settings: DocsShellSettings;
	export let properties: DocsShellTable[] | undefined = undefined;
	export let classes: DocsShellTable[] | undefined = undefined;
	export let slots: DocsShellTable[] | undefined = undefined;
	export let a11y: DocsShellTable[] | undefined = undefined;
	// Props (styles)
	export let spacing: string = 'space-y-8';
	// Props (regions)
	export let regionHeader: string = 'bg-white/20 dark:bg-black/10';
	export let regionDetails: string = 'grid grid-cols-1 md:grid-cols-[128px_1fr] gap-4';
	export let regionPanels: string = 'page-container';

	// Classes
	const cBase: string = '';

	// Stores
	let storeActiveTab: Writable<string> = writable('usage');

	// Local
	const githubSourcePath: string = 'https://github.com/Brain-Bones/skeleton/tree/dev/src'; // FIXME: hardcoded dev
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
		docs: $page.url.pathname,
		dependencies: []
	};
	const pageSettings: DocsShellSettings = { ...defaultSettings, ...settings };

	function setFeatureIcon(): string {
		const index: number = Object.values(DocsFeature).indexOf(pageSettings.feature);
		// prettier-ignore
		switch(index) {
            case(1): return 'tailwind'; // Element
            case(2): return 'svelte'; // Component
            case(3): return 'svelte'; // Action
            default: return 'screwdriver'; // Utility
        }
	}

	function toastCopied(noun: string): void {
		const t: ToastMessage = { message: `Copied ${noun} to clipboard.`, timeout: 2000 };
		toastStore.trigger(t);
	}

	// Format ---

	function formatImports(): string {
		return `import { ${pageSettings.imports?.join(', ')} } '${pageSettings.package?.name}';`;
	}

	function formatTypes(): string {
		return `import { ${pageSettings.types?.join(', ')} } '${pageSettings.package?.name}';`;
	}

	function formatStylesheet(stylesheet: string): string {
		return `import '${pageSettings.package?.name}/styles/${stylesheet}.css;`;
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
		<div class="page-container !pb-0">
			<!-- Feature -->
			<span class="badge badge-ghost">
				<SvgIcon width="w-4" height="h-4" name={setFeatureIcon()} />
				<span>{@html pageSettings.feature}</span>
			</span>
			<!-- Intro -->
			<section class="space-y-4">
				<h1>{@html pageSettings.name}</h1>
				<p>{@html pageSettings.description}</p>
			</section>

			<!-- Details -->
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
					<a href={`${githubSourcePath}/routes/(inner)${pageSettings.docs}/+page.svelte`} target="_blank">Doc Source</a>
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
			</section>

			<!-- Tabs -->
			<TabGroup selected={storeActiveTab} rail={false}>
				<Tab value="usage">Usage</Tab>
				{#if properties && properties.length}<Tab value="properties">Properties</Tab>{/if}
				{#if classes && classes.length}<Tab value="classes">Classes</Tab>{/if}
				{#if slots && slots.length}<Tab value="slots">Slots</Tab>{/if}
				{#if a11y && a11y.length}<Tab value="a11y">Accessibility</Tab>{/if}
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
					<div class="doc-shell-sandbox {spacing}"><slot name="sandbox">(sandbox)</slot></div>
				{/if}
				<!-- Slot: Usage -->
				{#if $$slots.usage}
					<div class="doc-shell-usage {spacing}"><slot name="usage">(usage)</slot></div>
				{/if}
				<!-- Slot: Default (footer) -->
				{#if $$slots.default}
					<footer class="doc-shell-footer"><slot /></footer>
				{/if}
			</div>
		{/if}

		<!-- Tab: Props -->
		{#if properties && properties.length && $storeActiveTab === 'properties'}
			<div class="doc-shell-props {spacing}">
				{#each properties as d}
					<section class="space-y-4">
						{#if d.label}<h2>{d.label}</h2>{/if}
						{#if d.description}<div>{@html d.description}</div>{/if}
						<DataTable headings={d.headings} source={d.source} />
					</section>
				{/each}
			</div>
		{/if}

		<!-- Tab: Classes -->
		{#if classes && classes.length && $storeActiveTab === 'classes'}
			<div class="doc-shell-classes {spacing}">
				{#each classes as d}
					<section class="space-y-4">
						{#if d.label}<h2>{d.label}</h2>{/if}
						{#if d.description}<div>{@html d.description}</div>{/if}
						<DataTable headings={d.headings} source={d.source} />
					</section>
				{/each}
			</div>
		{/if}

		<!-- Tab: Slots -->
		{#if slots && slots.length && $storeActiveTab === 'slots'}
			<div class="doc-shell-slots {spacing}">
				{#each slots as d}
					<section class="space-y-4">
						{#if d.label}<h2>{d.label}</h2>{/if}
						{#if d.description}<div>{@html d.description}</div>{/if}
						<DataTable headings={d.headings} source={d.source} />
					</section>
				{/each}
			</div>
		{/if}

		<!-- Tab: A11y -->
		{#if a11y && a11y.length && $storeActiveTab === 'a11y'}
			<div class="doc-shell-a11y {spacing}">
				{#each a11y as d}
					<section class="space-y-4">
						{#if d.label}<h2>{d.label}</h2>{/if}
						{#if d.description}<div>{@html d.description}</div>{/if}
						{#if d.aria}<p>Adheres to <a href={d.aria} target="_blank">WAI-ARIA guidelines</a> for accessibility.</p>{/if}
						<DataTable headings={d.headings} source={d.source} />
					</section>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	code {
		@apply cursor-pointer hover:!bg-primary-500/20 transition-colors duration-100;
	}
</style>
