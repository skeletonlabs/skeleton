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
	export let regionHeader: string = 'page-container bg-white/75 dark:bg-black/10';
	export let regionDetails: string = 'text-xs md:text-sm lg:text-base space-y-4';
	export let regionPanels: string = 'page-container';

	// Classes
	const cBase: string = '';

	// Stores
	let storePageTabs: Writable<string> = writable('documentation');

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
		source: '',
		docs: $page.url.pathname,
		package: { name: '@brainandbones/skeleton', url: 'https://www.npmjs.com/package/@brainandbones/skeleton' },
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
	<header class="doc-shell-header {classesRegionHeader} !pb-0">
		<!-- Information -->
		<div class="container mx-auto space-y-8">
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
			<ul class={regionDetails}>
				<!-- Imports -->
				{#if pageSettings.imports?.length}
					<li>
						<span class="detail-header">Import</span>
						<code on:click={copyImports}>{formatImports()}</code>
					</li>
				{/if}
				<!-- Types -->
				{#if pageSettings.types?.length}
					<li>
						<span class="detail-header">Types</span>
						<code on:click={copyTypes}>{formatTypes()}</code>
					</li>
				{/if}
				<!-- Stylesheets -->
				{#if pageSettings.stylesheetIncludes?.length || pageSettings.stylesheets?.length}
					<li class="block md:flex items-start">
						<span class="detail-header">Stylesheets</span>
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
					</li>
				{/if}
				<!-- Source Code -->
				<li class="block md:flex items-center space-x-2">
					<span class="detail-header">Source</span>
					<SvgIcon width="w-4" height="h-4" class="!mr-1" name="github" />
					<a href={`${githubSourcePath}/lib/${pageSettings.source}`} target="_blank">View source code</a>
				</li>
				<!-- Doc Source -->
				<li class="block md:flex items-center space-x-2">
					<span class="detail-header">Docs</span>
					<SvgIcon width="w-4" height="h-4" class="!mr-1" name="pen-ruler" />
					<a href={`${githubSourcePath}/routes/(inner)${pageSettings.docs}/+page.svelte`} target="_blank">Edit this page</a>
				</li>
				<!-- Package -->
				<li class="block md:flex items-center space-x-2">
					<span class="detail-header">Package</span>
					<SvgIcon width="w-5" height="h-5" name="npm" />
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
				<Tab value="documentation">Documentation</Tab>
				{#if properties && properties.length}<Tab value="properties">Properties</Tab>{/if}
				{#if classes && classes.length}<Tab value="classes">Classes</Tab>{/if}
				{#if slots && slots.length}<Tab value="slots">Slots</Tab>{/if}
				{#if a11y && a11y.length}<Tab value="a11y">Accessibility</Tab>{/if}
			</TabGroup>
		</div>
	</header>

	<!-- Tab Panels -->
	<div class="doc-shell-tab-panels {classesRegionPanels}">
		<!-- Tab: documentation -->
		{#if $storePageTabs === 'documentation'}
			<div class="doc-shell-documentation {spacing}">
				<!-- Slot: Sandbox -->
				<div class="doc-shell-sandbox {spacing}"><slot name="sandbox">(sandbox)</slot></div>
				<!-- Slot: Default -->
				<div class="doc-shell-usage {spacing}"><slot name="usage">(usage)</slot></div>
				<!-- Slot: Default (footer) -->
				{#if $$slots.default}
					<footer class="doc-shell-footer"><slot /></footer>
				{/if}
			</div>
		{/if}

		<!-- Tab: Props -->
		{#if properties && properties.length && $storePageTabs === 'properties'}
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
		{#if classes && classes.length && $storePageTabs === 'classes'}
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
		{#if slots && slots.length && $storePageTabs === 'slots'}
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
		{#if a11y && a11y.length && $storePageTabs === 'a11y'}
			<div class="doc-shell-a11y {spacing}">
				{#each a11y as d}
					<section class="space-y-4">
						{#if d.label}<h2>{d.label}</h2>{/if}
						{#if d.description}<div>{@html d.description}</div>{/if}
						{#if d.links?.length}
							{#each d.links as link}
								<a class="btn btn-sm btn-ghost" href={link.url} target="_blank">{link.label}</a>
							{/each}
						{/if}
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
	.detail-header {
		@apply font-bold block md:inline-block w-full md:w-32 mb-2 md:mb-0;
	}
</style>
