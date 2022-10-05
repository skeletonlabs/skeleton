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
	export let spacing: string = 'space-y-8';
	// Props (regions)
	export let regionHeader: string = 'bg-white/75 dark:bg-black/10';
	export let regionPanels: string = 'container mx-auto';
	export let regionExtra: string = 'container mx-auto';

	// Classes
	const cBase: string = '';

	// Stores
	let storePageTabs: Writable<string> = writable('documentation');

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
        types: [],
		stylesheetIncludes: [],
		stylesheets: [],
		source: '',
		docs: $page.url.pathname,
		package: { name: '@brainandbones/skeleton', url: 'https://www.npmjs.com/package/@brainandbones/skeleton' },
        dependencies: [],
	};
	const pageSettings: DocsShellSettings = { ...defaultSettings, ...settings };

	// Format ---

	function formatImports(): string {
		return `import { ${pageSettings.imports?.join(', ')} } '${pageSettings.package?.name}';`;
	}

	function formatTypes(): string {
		return `import { ${pageSettings.types?.join(', ')} } '${pageSettings.package?.name}';`;
	}

	function formatStylesheet(stylesheet: string): string {
		return `'${pageSettings.package?.name}'/styles/${stylesheet}.css;`;
	}

	// Copy ---

	function copyImports(): void {
		navigator.clipboard.writeText(formatImports());
	}

	function copyTypes(): void {
		navigator.clipboard.writeText(formatTypes());
	}

	function copyStylesheet(stylesheet: string): void {
		navigator.clipboard.writeText(formatStylesheet(stylesheet));
	}

	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesRegionHeader = `${regionHeader} ${padding}`;
	$: classesRegionPanels = `${regionPanels} ${padding}`;
	$: classesRegionExtras = `${regionExtra} ${padding} ${spacing}`;
</script>

<div class="doc-shell {classesBase}">
	<!-- Region: Header -->
	<header class="doc-shell-header {classesRegionHeader} !pb-0">
		<!-- Information -->
		<div class="container mx-auto space-y-8">
			<span class="badge badge-ghost">{@html pageSettings.feature}</span>
			<!-- Intro -->
			<section class="space-y-4">
				<h1>{@html pageSettings.name}</h1>
				<p>{@html pageSettings.description}</p>
			</section>

			<!-- Details -->
			<ul class="text-sm space-y-4">
				<!-- Imports -->
				<li>
					<span class="detail-header">Import</span>
					<!-- prettier-ignore -->
					<code class="unstyled detail-code" on:click={copyImports}>{formatImports()}</code>
				</li>
				<!-- Types -->
				{#if pageSettings.types?.length}
					<li>
						<span class="detail-header">Types</span>
						<code class="unstyled detail-code" on:click={copyTypes}>{formatTypes()}</code>
					</li>
				{/if}
				<!-- Stylesheets -->
				{#if pageSettings.stylesheetIncludes?.length || pageSettings.stylesheets?.length}
					<li class="flex items-start">
						<span class="detail-header">Stylesheets</span>
						<div class="grid grid-cols-1 gap-1">
							<!-- Stylesheet Includes -->
							{#if pageSettings.stylesheetIncludes?.length}
								<div class="flex space-x-1">
									{#each pageSettings.stylesheetIncludes as si}
										<span class="badge badge-ghost">{si}.css</span>
									{/each}
								</div>
							{/if}
							{#each Array.from(pageSettings.stylesheets || []) as s}
								<code
									class="unstyled detail-code"
									on:click={() => {
										copyStylesheet(s);
									}}>{formatStylesheet(s)}</code
								>
							{/each}
						</div>
					</li>
				{/if}
				<!-- Source Code -->
				<li>
					<span class="detail-header">Source</span>
					<a href={`${githubSourcePath}/lib/${pageSettings.source}`} target="_blank">View source code</a>
				</li>
				<!-- Doc Source -->
				<li>
					<span class="detail-header">Docs</span>
					<a href={`${githubSourcePath}/routes/(inner)${pageSettings.docs}/+page.svelte`} target="_blank">Edit this page</a>
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
				<Tab value="documentation">Documentation</Tab>
				{#if properties.length}<Tab value="properties">Properties</Tab>{/if}
				{#if classes.length}<Tab value="classes">Classes</Tab>{/if}
				{#if slots.length}<Tab value="slots">Slots</Tab>{/if}
				{#if a11y.length}<Tab value="a11y">Accessibility</Tab>{/if}
			</TabGroup>
		</div>
	</header>

	<!-- Tab Panels -->
	<div class="doc-shell-tab-panels {classesRegionPanels}">
		<!-- Tab: documentation -->
		{#if $storePageTabs === 'documentation'}
			<div class="doc-shell-documentation {spacing}">
				<!-- Slot: Sandbox -->
				<div class={spacing}><slot name="sandbox">(sandbox)</slot></div>
				<!-- Slot: Default -->
				<div class={spacing}><slot name="usage">(usage)</slot></div>
			</div>
		{/if}

		<!-- Tab: Props -->
		{#if properties.length && $storePageTabs === 'properties'}
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
		{#if classes.length && $storePageTabs === 'classes'}
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
		{#if slots.length && $storePageTabs === 'slots'}
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
		{#if a11y.length && $storePageTabs === 'a11y'}
			<div class="doc-shell-a11y {spacing}">
				{#each a11y as d}
					<section class="space-y-4">
						{#if d.label}<h2>{d.label}</h2>{/if}
						{#if d.description}<div>{@html d.description}</div>{/if}
						<DataTable headings={d.headings} source={d.source} />
					</section>
				{/each}
			</div>
		{/if}
	</div>

	<!-- Slot: Default -->
	<!-- Use this to extend the page with unique features or information features. -->
	{#if $$slots.default}<div class="doc-shell-extras {classesRegionExtras}"><slot /></div>{/if}
</div>

<style lang="postcss">
	.detail-header {
		@apply inline-block w-28 mr-4;
	}
	.detail-code {
		@apply bg-surface-500/10 text-xs py-1 px-2 rounded cursor-pointer hover:bg-primary-500/10;
	}
</style>
