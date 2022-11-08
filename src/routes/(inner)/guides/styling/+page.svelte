<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	// Components
	import AccordionGroup from '$lib/components/Accordion/AccordionGroup.svelte';
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';
	import Alert from '$lib/components/Alert/Alert.svelte';
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Stores
	import { storeFramework } from '$docs/stores';
	export const storeStylesheets: Writable<string> = writable('recommended');
	export const storeStylesheetElements: Writable<string> = writable('combined');

	// Local
	const ghLibPathMaster: string = 'https://github.com/Brain-Bones/skeleton/tree/master/src/lib'; // master branch

	// Tables
	const tableStyleAll: any = {
		headings: ['Stylesheet', 'Description', 'View Source'],
		// prettier-ignore
		source: [
			[
				'<code>all.css</code>',
				'A universal stylesheet that imports all stylesheets in the optimal order.',
				`<a href="${ghLibPathMaster}/styles/all.css" target="_blank" rel="noreferrer">all.css</a>`,
			],
		]
	};
	const tableStylesUseful: any = {
		headings: ['Stylesheet', 'Description', 'Documentation', 'View Source', 'Required Plugin'],
		// prettier-ignore
		source: [
			[
				'<code>tailwind.css</code>',
				'<u>IMPORTANT</u>: precedes all of the following stylesheets.',
				'<a href="https://tailwindcss.com/docs/functions-and-directives" target="_blank" rel="noreferrer">@tailwind directives</a>',
				`<a href="${ghLibPathMaster}/styles/tailwind.css" target="_blank" rel="noreferrer">tailwind.css</a>`,
				'-'
			],
			[
				'<code>tokens.css</code>',
				'Provides utility classes based on your theme CSS custom properties.',
				'<a href="/elements/tokens">Design Tokens</a>',
				`<a href="${ghLibPathMaster}/styles/tokens.css" target="_blank" rel="noreferrer">tokens.css</a>`,
				'-'
			],
			[
				'<code>core.css</code>',
				'Applies styles to body elements, scrollbars, and more.',
				'<a href="/elements/core">Core</a>',
				`<a href="${ghLibPathMaster}/styles/core.css" target="_blank" rel="noreferrer">core.css</a>`,
				'-'
			],
			[
				'<code>typography.css</code>',
				'Headings, paragraph, anchors, pre, code, and more.',
				'<a href="/elements/typography">Typography</a>',
				`<a href="${ghLibPathMaster}/styles/typography.css" target="_blank" rel="noreferrer">typography.css</a>`,
				'-'
			],
			[
				'<code>forms.css</code>',
				'Adapts form elements to utilize the Skeleton theme.',
				'<a href="/elements/forms">Forms</a>',
				`<a href="${ghLibPathMaster}/styles/forms.css" target="_blank" rel="noreferrer">forms.css</a>`,
				'<a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank" rel="noreferrer">tailwindcss-forms</a>'
			]
		]
	};
	const tableStyleElementsAll: any = {
		headings: ['Stylesheet', 'Documentation', 'View Source'],
		// prettier-ignore
		source: [
			[
				'<code>elements.css</code>',
				'Imports the full suite of Tailwind Elements.',
				`<a href="${ghLibPathMaster}/styles/elements.css" target="_blank" rel="noreferrer">elements.css</a>`,
			],
		]
	};
	const tableStyleElements: any = {
		headings: ['Stylesheet', 'Documentation', 'View Source'],
		// prettier-ignore
		source: [
			[
				'<code>elements/badges.css</code>',
				'<a href="/elements/badges">badges</a>',
				`<a href="${ghLibPathMaster}/styles/elements/badges.css" target="_blank" rel="noreferrer">badges.css</a>`,
			],
			[
				'<code>elements/buttons.css</code>',
				'<a href="/elements/buttons">buttons</a>',
				`<a href="${ghLibPathMaster}/styles/elements/buttons.css" target="_blank" rel="noreferrer">buttons.css</a>`,
			],
			[
				'<code>elements/cards.css</code>',
				'<a href="/elements/cards">cards</a>',
				`<a href="${ghLibPathMaster}/styles/elements/cards.css" target="_blank" rel="noreferrer">cards.css</a>`,
			],
			[
				'<code>elements/lists.css</code>',
				'<a href="/elements/lists">lists</a>',
				`<a href="${ghLibPathMaster}/styles/elements/lists.css" target="_blank" rel="noreferrer">lists.css</a>`,
			],
			[
				'<code>elements/logo-clouds.css</code>',
				'<a href="/elements/logo-clouds">logo-clouds</a>',
				`<a href="${ghLibPathMaster}/styles/elements/logo-clouds.css" target="_blank" rel="noreferrer">logo-clouds.css</a>`,
			],
			[
				'<code>elements/placeholders.css</code>',
				'<a href="/elements/placeholders">placeholders</a>',
				`<a href="${ghLibPathMaster}/styles/elements/placeholders.css" target="_blank" rel="noreferrer">placeholders.css</a>`,
			],
			[
				'<code>elements/menus.css</code>',
				'<a href="/utilities/menus">menus</a>',
				`<a href="${ghLibPathMaster}/styles/elements/menus.css" target="_blank" rel="noreferrer">menus.css</a>`,
			],
			[
				'<code>elements/tooltips.css</code>',
				'<a href="/utilities/tooltips">tooltips</a>',
				`<a href="${ghLibPathMaster}/styles/elements/tooltips.css" target="_blank" rel="noreferrer">tooltips.css</a>`,
			],
		]
	};
	const tableStylesheetOrder: any = {
		headings: ['Order', 'Stylesheet', 'Reason'],
		// prettier-ignore
		source: [
			[ '1.', 'Theme Stylesheet', 'Houses your themes use CSS properties for colors, border radius, etc.' ],
			[ '2.', 'Skeleton Stylesheet(s)', 'Imports Tailwind directives, generates design tokens, styles elemens and components.' ],
			[ '3.', 'Global Stylesheet', 'Keep this last so you can override styles provided by any of the above.' ],
		]
	};
</script>

<div class="page-container">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Styling</h1>
		<p>Best practices for stylesheets and style overrides.</p>
	</header>

	<hr />

	<!-- Stylesheets -->
	<section class="space-y-4">
		<h2>Skeleton Stylesheets</h2>
		<p>Skeleton provides a set of modular stylesheets for styling elements and components. The import location differs per framework.</p>
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		<!-- Framework: SvelteKit -->
		{#if $storeFramework === 'sveltekit'}
			<p>Import all stylesheets in <code>src/routes/+layout.svelte</code>.</p>
			<!-- Framework: Vite (Svelte) -->
		{:else if $storeFramework === 'vite'}
			<p>Import all stylesheets in <code>/src/main.js</code>.</p>
			<!-- Framework: Astro -->
		{:else if $storeFramework === 'astro'}
			<p>
				Astro does not provide a layout by default, but we recommend <code>/src/layouts/LayoutRoot.astro</code>. See our
				<a href="/guides/frameworks/astro">See our Astro walkthrough</a> for assistance.
			</p>
		{/if}
		<CodeBlock
			language="typescript"
			code={`
import '@brainandbones/skeleton/styles/${$storeStylesheets === 'simple' ? 'all' : '{stylehsheets}'}.css';
			`}
		/>
		<TabGroup selected={storeStylesheets}>
			<Tab value="recommended">Recommended</Tab>
			<Tab value="advanced">Advanced</Tab>
		</TabGroup>
		{#if $storeStylesheets === 'recommended'}
			<p>We recommend <code>all.css</code> for most users. This includes everything required for Skeleton, with all imports in the correct order.</p>
			<DataTable headings={tableStyleAll.headings} source={tableStyleAll.source} />
		{:else if $storeStylesheets === 'advanced'}
			<p>For advanced users ONLY. Follow the instruction below to import each stylesheet individually. Please ensure you use the order shown.</p>
			<DataTable headings={tableStylesUseful.headings} source={tableStylesUseful.source} />
			<!-- Elements -->
			<TabGroup selected={storeStylesheetElements}>
				<Tab value="combined">All Elements</Tab>
				<Tab value="seperate">Select Elements</Tab>
			</TabGroup>
			{#if $storeStylesheetElements === 'combined'}
				<DataTable headings={tableStyleElementsAll.headings} source={tableStyleElementsAll.source} />
			{:else if $storeStylesheetElements === 'seperate'}
				<p>Import only the Tailwind Elements you are using. Make sure you set the path to <code>.../styles/elements/*.css</code> as shown.</p>
				<DataTable headings={tableStyleElements.headings} source={tableStyleElements.source} />
			{/if}
		{/if}
	</section>

	<hr />

	<!-- Global Styles -->
	<section class="space-y-4">
		<h2>Global Stylesheet</h2>
		<p>The location of your app's global stylesheet differs per framework. SvelteKit and Vite users are required to make one quick modification.</p>

		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		<!-- Framework: SvelteKit -->
		{#if $storeFramework === 'sveltekit'}
			<p>Your global stylesheet can be found at <code>/src/app.postcss</code>.</p>
			<!-- Framework: Vite (Svelte) -->
		{:else if $storeFramework === 'vite'}
			<p>Your global stylesheet can be found at <code>/src/app.css</code>.</p>
			<!-- Framework: Astro -->
		{:else if $storeFramework === 'astro'}
			<p>
				Astro does not create this by default, but we recommend <code>/src/styles/global.css</code>. <a href="/guides/frameworks/astro">See our Astro walkthrough</a> for assistance.
			</p>
		{/if}
		<Alert>
			<svelte:fragment slot="lead"><span class="text-xl">⚠️</span></svelte:fragment>
			For <u>SvelteKit</u> and <u>Vite</u> projects the following steps is required. This will ensures all styles display properly.
		</Alert>
		<!-- Directives -->
		<p>
			When using <strong>Svelte-Add</strong> this creates
			<a href="https://tailwindcss.com/docs/functions-and-directives" target="_blank" rel="noreferrer">@tailwind directives</a> in your global stylesheet. This is not recommended as Skeleton handles this
			as part of the stylesheet imports above. If present, remove the following from your global stylesheet.
		</p>
		<CodeBlock
			language="css"
			code={`
/* If present, drop the following four directives: */\n
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind variants;
			`}
		/>
	</section>

	<hr />

	<!-- Required Order -->
	<section class="space-y-4">
		<h2>Import Order</h2>
		<p>Skeleton has strict requirements for stylesheet import order. Please ensure your imports conform to the following order.</p>
		<DataTable headings={tableStylesheetOrder.headings} source={tableStylesheetOrder.source} />
	</section>

	<hr />

	<section class="space-y-4">
		<div class="space-y-4">
			<h2>Styling Components</h2>
			<p>Skeleton components automatically adapt to your theme. However, you may wish to customize your components and elements. View instruction for this below.</p>
		</div>
		<div class="card card-body !bg-accent-500/5">
			<AccordionGroup>
				<AccordionItem spacing="space-y-4" open>
					<svelte:fragment slot="summary"><h3>Via Component Props</h3></svelte:fragment>
					<div slot="content" class="space-y-4">
						<p>
							This is the recommended way to style most components. Provide style "props" (aka properties) that allow you to provide utility classes to override styles. See a full list of available
							settings under the "Props" tab for each component's documentation.
						</p>
						<CodeBlock language="html" code={`<Tab background="bg-accent-500" style="bg-yellow-500">Prop Customized</Tab>`} />
					</div>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="summary"><h3>Via the Class Attribute</h3></svelte:fragment>
					<div slot="content" class="space-y-4">
						<p>
							If a particular style prop is not provided, you can still provide arbitrary utility classes via the standard <code>class</code> attribute on any component. Note these classes are applied
							to the parent element in the component template.
						</p>
						<CodeBlock language="html" code={`<Tab class="text-3xl px-10 py-5">Big</Tab>`} />
					</div>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="summary"><h3>Tailwind Abitrary Variants</h3></svelte:fragment>
					<div slot="content" class="space-y-4">
						<p>
							If you need to target deeper than the parent element, we recommend using <a
								href="https://tailwindcss.com/blog/tailwindcss-v3-1#arbitrary-values-but-for-variants"
								target="_blank"
								rel="noreferrer">Tailwind's abitrary variant syntax</a
							>.
						</p>
						<CodeBlock language="html" code={`<Tab class="[&>.tab-label]:p-4">...</Tab>`} />
					</div>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="summary"><h3>Global Styles</h3></svelte:fragment>
					<div slot="content" class="space-y-4">
						<p>
							Tailwind Elements and Svelte Components contain a unique selector classes, such as <code>.crumb-separator</code> for the Breadcrumb component seperator element. Use these to target global
							style overrides.
						</p>
						<CodeBlock language="html" code={`<!--  The first class is the "selector" class -->\n<div class="crumb-separator ...">&rarr;</div>`} />
						<p>Add the following to your global stylesheet to override the seperator text color:</p>
						<CodeBlock language="css" code={`.crumb-separator { @apply !text-red-500; }`} />
						<p>
							Note that in some cases you may need to use <code>!</code>
							<a href="https://tailwindcss.com/docs/configuration#important-modifier" target="_blank" rel="noreferrer">important</a> to give the class precedence.
						</p>
					</div>
				</AccordionItem>
			</AccordionGroup>
		</div>
	</section>

	<hr />

	<!-- Next Steps -->
	<div class="card card-body !flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>View the <u>optional walkthroughs</u> for creating an example app using Skeleton.</p>
		<a class="btn btn-filled-accent" href="/guides/frameworks">
			<span>Framework Guides</span>
			<span>&rarr;</span>
		</a>
	</div>
</div>
