<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import type { TableSource } from '$lib/components/Table/types';

	// Components
	import AccordionGroup from '$lib/components/Accordion/AccordionGroup.svelte';
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';
	import Alert from '$lib/components/Alert/Alert.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Stores
	import { storeFramework } from '$docs/stores';
	export const storeStylesheets: Writable<string> = writable('recommended');
	export const storeStylesheetElements: Writable<string> = writable('combined');

	// Local
	const ghLibPathMaster: string = 'https://github.com/skeletonlabs/skeleton/tree/master/src/lib'; // master branch

	// Tables
	const tableStyleAll: TableSource = {
		head: ['Stylesheet', 'Description', 'View Source'],
		// prettier-ignore
		body: [
			[
				'<code>all.css</code>',
				'A universal stylesheet that imports all stylesheets in the optimal order.',
				`<a href="${ghLibPathMaster}/styles/all.css" target="_blank" rel="noreferrer">all.css</a>`,
			],
		]
	};
	const tableStylesUseful: TableSource = {
		head: ['Stylesheet', 'Description', 'Documentation', 'View Source', 'Required Plugin'],
		// prettier-ignore
		body: [
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
	const tableStyleElementsAll: TableSource = {
		head: ['Stylesheet', 'Documentation', 'View Source'],
		// prettier-ignore
		body: [
			[
				'<code>elements.css</code>',
				'Imports the full suite of Tailwind Elements.',
				`<a href="${ghLibPathMaster}/styles/elements.css" target="_blank" rel="noreferrer">elements.css</a>`,
			],
		]
	};
	const tableStyleElements: TableSource = {
		head: ['Stylesheet', 'Documentation', 'View Source'],
		// prettier-ignore
		body: [
			// Tailwind Elements
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
				'<code>elements/tables.css</code>',
				'<a href="/utilities/tables">tables</a>',
				`<a href="${ghLibPathMaster}/styles/elements/tables.css" target="_blank" rel="noreferrer">tables.css</a>`,
			],
			// Utilities
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
	const tableStylesheetOrder: TableSource = {
		head: ['Order', 'Stylesheet', 'Reason'],
		// prettier-ignore
		body: [
			[ '1.', 'Theme Stylesheet', 'Houses your themes use CSS properties for colors, border radius, etc.' ],
			[ '2.', 'Skeleton Stylesheet(s)', 'Imports Tailwind directives, generates design tokens, styles elements and components.' ],
			[ '3.', 'Global Stylesheet', 'Keep last so you can override the above styles. Project-specific styles go here.' ],
		]
	};
</script>

<div class="page-container">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Styling</h1>
		<p>This section covers best practices for stylesheet imports and overriding component styles.</p>
	</header>

	<hr />

	<!-- Stylesheets -->
	<section class="space-y-4">
		<h2>Skeleton Stylesheets</h2>
		<p>
			Skeleton provides a set of stylesheets for elements and components. Import these in your root layout, which differs per each
			framework.
		</p>
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		<!-- Framework: SvelteKit -->
		{#if $storeFramework === 'sveltekit'}
			<p>Import stylesheets in <code>src/routes/+layout.svelte</code>.</p>
			<!-- Framework: Vite (Svelte) -->
		{:else if $storeFramework === 'vite'}
			<p>Import stylesheets in <code>/src/main.js</code>.</p>
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
import '@skeletonlabs/skeleton/styles/${$storeStylesheets === 'recommended' ? 'all' : '{stylehsheets}'}.css';
			`}
		/>
		<TabGroup selected={storeStylesheets}>
			<Tab value="recommended">Recommended</Tab>
			<Tab value="advanced">Advanced</Tab>
		</TabGroup>
		{#if $storeStylesheets === 'recommended'}
			<p>
				We recommend <code>all.css</code> for most users. This includes everything required for Skeleton, with all imports in the correct order.
			</p>
			<Table source={tableStyleAll} />
		{:else if $storeStylesheets === 'advanced'}
			<p>
				For advanced users ONLY. Follow the instruction below to import each stylesheet individually. Please ensure you use the order shown.
			</p>
			<Table source={tableStylesUseful} />
			<!-- Elements -->
			<TabGroup selected={storeStylesheetElements}>
				<Tab value="combined">All Elements</Tab>
				<Tab value="separate">Select Elements</Tab>
			</TabGroup>
			{#if $storeStylesheetElements === 'combined'}
				<Table source={tableStyleElementsAll} />
			{:else if $storeStylesheetElements === 'separate'}
				<p>
					Import only the Tailwind Elements you are using. Make sure you set the path to <code>.../styles/elements/*.css</code> as shown.
				</p>
				<Table source={tableStyleElements} />
			{/if}
		{/if}
	</section>

	<hr />

	<!-- Global Styles -->
	<section class="space-y-4">
		<h2>Global Stylesheet</h2>
		<p>The location of your app's global stylesheet differs per framework. SvelteKit and Vite users must make one quick modification.</p>

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
				Astro does not create this by default, but we recommend <code>/src/styles/global.css</code>.
				<a href="/guides/frameworks/astro">See our Astro walkthrough</a> for assistance.
			</p>
		{/if}
		<Alert>
			<svelte:fragment slot="lead"><span class="text-xl">⚠️</span></svelte:fragment>
			For <u>SvelteKit</u> and <u>Vite</u> projects the following steps is required. This will ensures all styles display properly.
		</Alert>
		<!-- Directives -->
		<p>
			<strong>Svelte-Add</strong> automatically includes
			<a href="https://tailwindcss.com/docs/functions-and-directives" target="_blank" rel="noreferrer">@tailwind directives</a> in your global
			stylesheet. However, Skeleton handles this for you, so please remove the following:
		</p>
		<CodeBlock
			language="css"
			code={`
/* NOTE: If present, remove any @tailwind directives: */\n
@tailwind base;
@tailwind components;
@tailwind utilities;
			`}
		/>
	</section>

	<hr />

	<!-- Required Order -->
	<section class="space-y-4">
		<h2>Import Order</h2>
		<p>
			Skeleton has strict requirements for stylesheet import order. Please ensure your imports conform to the following order before you
			continue.
		</p>
		<Table source={tableStylesheetOrder} />
	</section>

	<hr />

	<section class="space-y-4">
		<div class="space-y-4">
			<h2>Customizing Styles</h2>
			<p>If you wish to customize Skeleton element or component styles, use the recommendations below.</p>
		</div>
		<div class="card card-body !bg-accent-500/5">
			<AccordionGroup>
				<AccordionItem spacing="space-y-4" open>
					<svelte:fragment slot="summary"><h3>Via Component Props</h3></svelte:fragment>
					<div slot="content" class="space-y-4">
						<p>
							This is the recommended manner to style most components. Each component provides a set of style <em>props</em> (aka properties)
							that allow you to override the default style classes. See a list of available options under the "Props" tab in the component documentation.
						</p>
						<CodeBlock
							language="html"
							code={`<ExampleComponent background="bg-accent-500" text="text-yellow-500">Skeleton</ExampleComponent>`}
						/>
						<blockquote>
							TIP: You may provide multiple utility classes per each prop, and use variations such as <code>dark:bg-green-500</code>.
						</blockquote>
					</div>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="summary"><h3>Via the Class Attribute</h3></svelte:fragment>
					<div slot="content" class="space-y-4">
						<p>
							If a style prop is not available, you can still provide arbitrary utility classes via the standard <code>class</code> attribute.
							These styles are always applied to the parent element in the component template.
						</p>
						<CodeBlock language="html" code={`<ExampleComponent class="text-3xl px-10 py-5">Skeleton</ExampleComponent>`} />
					</div>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="summary"><h3>Tailwind Abitrary Variants</h3></svelte:fragment>
					<div slot="content" class="space-y-4">
						<p>
							If you need to target deeper than the parent element, we recommend using <a
								href="https://tailwindcss.com/blog/tailwindcss-v3-1#arbitrary-values-but-for-variants"
								target="_blank"
								rel="noreferrer">Tailwind's arbitrary variant syntax</a
							>.
						</p>
						<CodeBlock language="html" code={`<ExampleComponent class="[&>.ExampleComponent-label]:p-4">...</ExampleComponent>`} />
					</div>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="summary"><h3>Global Styles Overrides</h3></svelte:fragment>
					<div slot="content" class="space-y-4">
						<p>
							Tailwind Elements and Svelte Components make use of unique selector classes, such as <code>.crumb-separator</code> for the Breadcrumb
							seperator element. Use these classes target global overrides in your global stylesheet.
						</p>
						<CodeBlock
							language="html"
							code={`<!-- Selector classes are always the first listed in the template element. -->\n<div class="crumb-separator ...">{seperator}</div>`}
						/>
						<p>Add the following to your global stylesheet to override the seperator's text color:</p>
						<CodeBlock language="css" code={`.crumb-separator { @apply !text-red-500; }`} />
						<blockquote>
							TIP: in some cases you may need to use <code>!</code>
							<a href="https://tailwindcss.com/docs/configuration#important-modifier" target="_blank" rel="noreferrer">important</a> to give
							precedence, or style both the light/dark mode variations.
						</blockquote>
					</div>
				</AccordionItem>
			</AccordionGroup>
		</div>
	</section>

	<hr />

	<!-- Next Steps -->
	<div class="card card-body !flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>View the <u>optional walkthroughs</u> for creating an example app using Skeleton.</p>
		<a class="btn btn-filled-primary" href="/guides/frameworks">
			<span>Framework Guides</span>
			<span>&rarr;</span>
		</a>
	</div>
</div>
