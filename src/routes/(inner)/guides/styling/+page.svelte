<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import type { TableSource } from '$lib/components/Table/types';

	// Components
	import AccordionGroup from '$lib/components/Accordion/AccordionGroup.svelte';
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';
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
	const ghLibPathMaster = 'https://github.com/skeletonlabs/skeleton/tree/master/src/lib'; // master branch

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
				'<code>elements/chips.css</code>',
				'<a href="/elements/chips">chips</a>',
				`<a href="${ghLibPathMaster}/styles/elements/chips.css" target="_blank" rel="noreferrer">chips.css</a>`,
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
			[ '2.', 'Skeleton Stylesheet(s)', 'Imports Tailwind directives, element, and components styles.' ],
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
		<TabGroup selected={storeFramework}>
			<Tab value="cli">Skeleton CLI</Tab>
			<Tab value="manual">Manual Install</Tab>
		</TabGroup>
		{#if $storeFramework === 'cli'}
			<p>The CLI will automatically import <code>all.css</code> into <code>src/routes/+layout.svelte</code>.</p>
		{:else if $storeFramework === 'manual'}
			<p>For most users we recommend importing <code>all.css</code> into <code>src/routes/+layout.svelte</code>.</p>
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
		<TabGroup selected={storeFramework}>
			<Tab value="cli">Skeleton CLI</Tab>
			<Tab value="manual">Manual Install</Tab>
		</TabGroup>
		{#if $storeFramework === 'cli'}
			<p>
				SvelteKit's global stylesheet is located in <code>/src/app.postcss</code>. The CLI will automatically purge
				<a href="https://tailwindcss.com/docs/functions-and-directives" target="_blank" rel="noreferrer">@tailwind directives</a> from Svelte-Add
				and add required styles.
			</p>
		{:else if $storeFramework === 'manual'}
			<aside class="alert">
				<i class="fa-solid fa-triangle-exclamation text-2xl" />
				<div class="alert-message">
					The following step is <strong>REQUIRED</strong> to ensure your styles display properly in your application.
				</div>
			</aside>
			<p>
				SvelteKit's global stylesheet is located in <code>/src/app.postcss</code>. <strong>Svelte-Add</strong> automatically includes
				<a href="https://tailwindcss.com/docs/functions-and-directives" target="_blank" rel="noreferrer">@tailwind directives</a> in your
				global stylesheet. However, Skeleton imports these for you via <code>all.css</code>. Including these twice can cause issues, so
				please remove the following from your global stylesheet.
			</p>
			<CodeBlock
				language="css"
				code={`
/* NOTE: If present, remove the following @tailwind directives: */\n
@tailwind base;
@tailwind components;
@tailwind utilities;
				`}
			/>
		{/if}
	</section>

	<hr />

	<!-- Required Order -->
	<section class="space-y-4">
		<h2>Import Order</h2>
		<p>Skeleton has strict requirements for stylesheet import order. We've explained the purpose of each stylesheet below.</p>
		<Table source={tableStylesheetOrder} />
		<p>See the reference below. Please ensure your imports conform to the following order before you continue.</p>
		<CodeBlock
			language="ts"
			code={`
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
import '@skeletonlabs/skeleton/styles/all.css';
import '../app.postcss';
		`}
		/>
	</section>

	<hr />

	<section class="space-y-4">
		<div class="space-y-4">
			<h2>How to Customize Styles</h2>
			<p>Learn how to customize Skeleton components and elements below.</p>
		</div>
		<div class="card p-4 card-glass-surface">
			<AccordionGroup>
				<AccordionItem spacing="space-y-4" open>
					<svelte:fragment slot="summary"><h3>Via Component Props</h3></svelte:fragment>
					<div slot="content" class="space-y-4">
						<p>
							This is the recommended manner to style most components. Each component provides a set of style <em>props</em> (read: properties)
							that allow you to override the default style classes. See a list of available options under the "Props" tab per each feature in
							Skeleton.
						</p>
						<CodeBlock
							language="html"
							code={`<ExampleComponent background="bg-secondary-500" text="text-yellow-500 md:text-green-500">Skeleton</ExampleComponent>`}
						/>
						<blockquote>
							TIP: You may provide multiple utility classes per each prop, as well as use variations such as <code>dark:bg-green-500</code>.
						</blockquote>
					</div>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="summary"><h3>Via the Class Attribute</h3></svelte:fragment>
					<div slot="content" class="space-y-4">
						<p>
							If a style prop is not available, you can still provide arbitrary utility classes via a standard <code>class</code> attribute.
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
						<CodeBlock language="html" code={`<ExampleComponent class="[&>.foo-label]:p-4">...</ExampleComponent>`} />
						<p>This will affect the Parent > .foo-label element and apply a Tailwind class of <code>p-4</code>.</p>
					</div>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="summary"><h3>Global Styles Overrides</h3></svelte:fragment>
					<div slot="content" class="space-y-4">
						<p>
							Tailwind Elements and Svelte Components make use of unique selector classes, such as <code>.crumb-separator</code> for the Breadcrumb
							seperator element. Use these classes target and provide global overrides in your app's global stylesheet.
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
	<section class="space-y-4">
		<h2>What's Next?</h2>
		<p>Choose your own adventure. We recommend you review each section listed below.</p>
		<div class="card p-4 card-glass-surface space-y-4">
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn more about Skeleton's Tailwind features.</p>
				<a class="btn btn-ghost-surface" href="/elements/tokens">Tailwind Features &rarr;</a>
			</div>
			<hr class="opacity-30" />
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn more about Skeleton's Svelte features.</p>
				<a class="btn btn-ghost-surface" href="/actions/clipboard">Svelte Features &rarr;</a>
			</div>
			<hr class="opacity-30" />
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn more about Skeleton's utility features.</p>
				<a class="btn btn-ghost-surface" href="/utilities/codeblocks">Utility Features &rarr;</a>
			</div>
		</div>
	</section>
</div>
