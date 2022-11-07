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
	export const storeStylesheets: Writable<string> = writable('simple');
	export const storeStylesheetElements: Writable<string> = writable('simple');

	// Local
	const ghLibPathMaster: string = 'https://github.com/Brain-Bones/skeleton/tree/master/src/lib'; // master branch

	// Tables
	const tableStylesheetOrder: any = {
		headings: ['Order', 'Stylesheet', 'Reason'],
		// prettier-ignore
		source: [
			[ '1.', '<a href="/guides/themes">Theme Stylesheet</a>', 'This provides the basic settings that all stylesheets adapt and utilize.' ],
			[ '2.', 'Skeleton Stylesheet(s)', 'Makes use of your theme values and imports the Tailwind Directives.' ],
			[ '3.', 'Global Stylesheet', 'Keep this last so you can override styles provided by any of the above.' ],
		]
	};
	const tableGlobalStylesheet: any = {
		headings: ['Framework', 'Created by Svelte-Add', 'Path'],
		// prettier-ignore
		source: [
			[ 'SvelteKit', 'Yes', '<code>/src/app.postcss</code>' ],
			[ 'Vite', 'Yes', '<code>/src/app.css</code>' ],
			[ 'Astro', 'No', '<code>/src/styles/global.css</code> (recommended)' ],
		]
	};
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
</script>

<div class="page-container">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Styling</h1>
		<p>Best practices for stylesheets and style overrides.</p>
	</header>

	<hr />

	<!-- Required Order -->
	<section class="space-y-4">
		<h2>Import Order</h2>
		<p>Skeleton has a strict requirement for the order in which stylesheets are imported. Import each stylesheet in your root layout file.</p>
		<DataTable headings={tableStylesheetOrder.headings} source={tableStylesheetOrder.source} />
	</section>

	<hr />

	<!-- Stylesheets -->
	<section class="space-y-4">
		<h2>Skeleton Stylesheets</h2>
		<p>Modular stylesheets that provide styles for a variety of Skeleton features.</p>
		<CodeBlock
			language="typescript"
			code={`
import '@brainandbones/skeleton/styles/${$storeStylesheets === 'simple' ? 'all' : '{stylehsheets}'}.css';
			`}
		/>
		<TabGroup selected={storeStylesheets}>
			<Tab value="simple">Simple</Tab>
			<Tab value="advanced">Advanced</Tab>
		</TabGroup>
		{#if $storeStylesheets === 'simple'}
			<DataTable headings={tableStyleAll.headings} source={tableStyleAll.source} />
		{:else if $storeStylesheets === 'advanced'}
			<p>For advanced users ONLY. Follow the instruction below to import each stylesheet individually. Please ensure you use the order shown.</p>
			<DataTable headings={tableStylesUseful.headings} source={tableStylesUseful.source} />
			<!-- Elements -->
			<TabGroup selected={storeStylesheetElements}>
				<Tab value="simple">All Elements</Tab>
				<Tab value="advanced">Select Elements</Tab>
			</TabGroup>
			{#if $storeStylesheetElements === 'simple'}
				<DataTable headings={tableStyleElementsAll.headings} source={tableStyleElementsAll.source} />
			{:else if $storeStylesheetElements === 'advanced'}
				<p>Import only the Tailwind Elements you are using. Make sure you set the path to <code>.../styles/elements/*.css</code> as shown.</p>
				<DataTable headings={tableStyleElements.headings} source={tableStyleElements.source} />
			{/if}
		{/if}
	</section>

	<hr />

	<!-- Global Styles -->
	<section class="space-y-4">
		<h2>Global Stylesheet</h2>
		<p>The location of your app's global stylesheet differs per framework. Note that Astro requires you to create this yourself.</p>
		<DataTable headings={tableGlobalStylesheet.headings} source={tableGlobalStylesheet.source} />
		<!-- Directives -->
		<h3>Remove Duplicate @Tailwind Directives</h3>
		<!-- Alert - this is important, keep it obvious! -->
		<p>
			For SvelteKit and Vite projects that use <strong>Svelte-Add</strong>, this adds
			<a href="https://tailwindcss.com/docs/functions-and-directives" target="_blank" rel="noreferrer">@tailwind directives</a> to your global stylesheet. This is not recommended for Skeleton projects
			as we handle the directive imports as part of the Skeleton Stylesheet imports. Please remove the following from your global stylesheet.
		</p>
		<Alert>
			<svelte:fragment slot="lead"><span class="text-xl">⚠️</span></svelte:fragment>
			<strong>REQUIRED:</strong> this step required to ensure your Skeleton features display properly.
		</Alert>
		<CodeBlock
			language="css"
			code={`
/* Remove the following @tailwind directives in your global stylesheet: */\n
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind variants;
			`}
		/>
	</section>

	<hr />

	<section class="space-y-4">
		<div class="space-y-4">
			<h2>Styling Components</h2>
			<p>Skeleton components automatically adapt to your theme. Below are the recommended means to customize component and element styles.</p>
		</div>
		<div class="card card-body !bg-accent-500/5">
			<AccordionGroup>
				<AccordionItem spacing="space-y-4" open>
					<svelte:fragment slot="summary"><h3>Via Component Props</h3></svelte:fragment>
					<div slot="content" class="space-y-4">
						<p>
							Skeleton components make heavy use of style "props" (aka properties), that allow you to override and customize the component styling. View each component's documentation for a full list
							of available props.
						</p>
						<CodeBlock language="html" code={`<Tab background="bg-accent-500">Prop Customized</Tab>`} />
					</div>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="summary"><h3>Via Arbitrary Classes</h3></svelte:fragment>
					<div slot="content" class="space-y-4">
						<p>All components support the <code>class</code> attribute, allowing you to pass abitrary CSS classes, including Tailwind utility classes.</p>
						<CodeBlock language="html" code={`<Tab class="text-3xl px-10 py-5">Big</Tab>`} />
					</div>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="summary"><h3>Targetted Selector Classes</h3></svelte:fragment>
					<div slot="content" class="space-y-4">
						<p>
							Keep in mind that components are a single line element that contains a set of HTML elements within their template. This means you should be mindful of your target, as the <code
								>class</code
							> attribute is only applied to the top-most parent element in the template. In some cases you may need to generate a chained class definition to reach further down the template tree. Though
							we advise using this technique sparingly.
						</p>
						<CodeBlock language="css" code={`.my-custom-class .some-child-element { @apply bg-red-500; }`} />
						<CodeBlock language="html" code={`<Tab class="my-custom-class">...</Tab>`} />
					</div>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="summary"><h3>Global Style Overrides</h3></svelte:fragment>
					<div slot="content" class="space-y-4">
						<p>
							Tailwind Elements and Svelte Components all contain a unique set of class names, such as <code>.crumb-separator</code> for the Breadcrumb component seperator element. Use these to target
							global style overrides.
						</p>
						<CodeBlock language="html" code={`<div class="crumb-separator ...">&rarr;</div>`} />
						<p>Add the following to your global stylesheet to override the seperator text color:</p>
						<CodeBlock language="css" code={`.crumb-separator { @apply !text-red-500; }`} />
						<p>
							Note that you may need to use <code>!</code>
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
