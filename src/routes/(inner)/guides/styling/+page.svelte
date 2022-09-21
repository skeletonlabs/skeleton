<script lang="ts">
	import { DataTable, TabGroup, Tab } from '@brainandbones/skeleton';
	import Alert from '$lib/components/Alert/Alert.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import { writable, type Writable } from 'svelte/store';

	// Stores
	export const storeStylesheets: Writable<string> = writable('simple');
	export const storeStylesheetElements: Writable<string> = writable('simple');

	// Tables
	const ghLibPathMaster: string = 'https://github.com/Brain-Bones/skeleton/tree/master/src/lib'; // master branch
	const tableStyleAll: any = {
		headings: ['Stylesheet', 'Description', 'View Source'],
		// prettier-ignore
		source: [
			[
				'<code>all.css</code>',
				'A universal stylesheet that imports all stylesheets in the optimal order.',
				`<a href="${ghLibPathMaster}/styles/all.css" target="_blank">all.css</a>`,
			],
		]
	};
	const tableStylesUseful: any = {
		headings: ['Stylesheet', 'Description', 'Documentation', 'View Source', 'Required Plugin'],
		// prettier-ignore
		source: [
			[
				'<code>tailwind.css</code>',
				'<u>IMPORTANT</u>: should proceed all other stylesheets.',
				'<a href="https://tailwindcss.com/docs/functions-and-directives" target="_blank">@tailwind directives</a>',
				`<a href="${ghLibPathMaster}/styles/tailwind.css" target="_blank">tailwind.css</a>`,
				'-'
			],
			[
				'<code>core.css</code>',
				'Applies styles to body elements, scrollbars, and more.',
				'<a href="/tailwind/core">Core</a>',
				`<a href="${ghLibPathMaster}/styles/core.css" target="_blank">core.css</a>`,
				'-'
			],
			[
				'<code>typography.css</code>',
				'Headings, paragraph, anchors, pre, code, and more.',
				'<a href="/tailwind/typography">Typography</a>',
				`<a href="${ghLibPathMaster}/styles/typography.css" target="_blank">typography.css</a>`,
				'-'
			],
			[
				'<code>forms.css</code>',
				'Adapts form elements to utilize the Skeleton theme.',
				'<a href="/tailwind/forms">Forms</a>',
				`<a href="${ghLibPathMaster}/styles/forms.css" target="_blank">forms.css</a>`,
				'<a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">tailwindcss-forms</a>'
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
				`<a href="${ghLibPathMaster}/styles/elements.css" target="_blank">elements.css</a>`,
			],
		]
	};
	const tableStyleElements: any = {
		headings: ['Stylesheet', 'Documentation', 'View Source'],
		// prettier-ignore
		source: [
			[
				'<code>elements/badges.css</code>',
				'<a href="/tailwind/badges">badges</a>',
				`<a href="${ghLibPathMaster}/styles/elements/badges.css" target="_blank">badges.css</a>`,
			],
			[
				'<code>elements/buttons.css</code>',
				'<a href="/tailwind/buttons">buttons</a>',
				`<a href="${ghLibPathMaster}/styles/elements/buttons.css" target="_blank">buttons.css</a>`,
			],
			[
				'<code>elements/cards.css</code>',
				'<a href="/tailwind/cards">cards</a>',
				`<a href="${ghLibPathMaster}/styles/elements/cards.css" target="_blank">cards.css</a>`,
			],
			[
				'<code>elements/lists.css</code>',
				'<a href="/tailwind/lists">lists</a>',
				`<a href="${ghLibPathMaster}/styles/elements/lists.css" target="_blank">lists.css</a>`,
			],
			[
				'<code>elements/logo-clouds.css</code>',
				'<a href="/tailwind/logo-clouds">logo-clouds</a>',
				`<a href="${ghLibPathMaster}/styles/elements/logo-clouds.css" target="_blank">logo-clouds.css</a>`,
			],
			[
				'<code>elements/placeholders.css</code>',
				'<a href="/tailwind/placeholders">placeholders</a>',
				`<a href="${ghLibPathMaster}/styles/elements/placeholders.css" target="_blank">placeholders.css</a>`,
			],
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Styling</h1>
		<p>Review best practies for implementing stylesheets, handling global styles, as well as how to styling each each component.</p>
	</header>

	<hr />

	<!-- Stylesheets -->
	<section class="space-y-4">
		<h2>Stylesheets</h2>
		<p>
			Skeleton provides a set of modular stylesheets that adapt to your theme. The easiest option is to use the <code>all.css</code> stylesheet. Import the following in your root layout.
		</p>
		<CodeBlock
			language="typescript"
			code={`
// (theme stylesheet here)
import '@brainandbones/skeleton/styles/${$storeStylesheets === 'simple' ? 'all' : '{stylehsheet}'}.css'; // <--
// (global stylesheet here)
			`}
		/>
		<TabGroup selected={storeStylesheets} class="pt-4">
			<Tab value="simple">All Styles</Tab>
			<Tab value="advanced">Select Styles</Tab>
		</TabGroup>
		{#if $storeStylesheets === 'simple'}
			<DataTable headings={tableStyleAll.headings} source={tableStyleAll.source} />
		{:else if $storeStylesheets === 'advanced'}
			<p>For advanced users, you may wish to import stylesheets individually. Please ensure you import these stylesheets in the order shown below.</p>
			<DataTable headings={tableStylesUseful.headings} source={tableStylesUseful.source} />
			<!-- Elements -->
			<TabGroup selected={storeStylesheetElements} class="pt-4">
				<Tab value="simple">All Elements</Tab>
				<Tab value="advanced">Select Elements</Tab>
			</TabGroup>
			{#if $storeStylesheetElements === 'simple'}
				<DataTable headings={tableStyleElementsAll.headings} source={tableStyleElementsAll.source} />
			{:else if $storeStylesheetElements === 'advanced'}
				<p>Import only the Tailwind Elements you are using. Make sure you set the path to <code>.../elements/*.css</code> as shown.</p>
				<DataTable headings={tableStyleElements.headings} source={tableStyleElements.source} />
			{/if}
		{/if}
		<Alert>
			Either import method includes the required <a href="https://tailwindcss.com/docs/functions-and-directives" target="_blank">@tailwind directives</a>, which means you can and should prune these
			from your global stylesheet.
		</Alert>
	</section>

	<hr />

	<!-- Global Styles -->
	<section class="space-y-4">
		<h2>Global Stylesheet</h2>
		<p>Here's a few suggested best practices to follow when creating global styles:</p>
		<ul class="list-disc list-inside space-y-1">
			<li>
				Ensure your <a href="https://tailwindcss.com/docs/functions-and-directives" target="_blank">@tailwind directives</a> are imported only once per project. The <code>all.css</code> stylesheet handles
				this for you.
			</li>
			<li>
				Wrap your core page elements within a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main" target="_blank">main element</a>. The
				<a href="/components/app-shell">App Shell</a> component handles this for you.
			</li>
			<li>
				The ideal use case for <a href="https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply" target="_blank">Tailwind @apply</a> is defining global styles. Please be leery of
				<a href="https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction" target="_blank">premature abstraction</a>.
			</li>
			<li>
				Utilize the CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:not" target="_blank">:not pseudo-class</a> to exclude and avoid conflicts with inherent component styles.
			</li>
			<li>You can overwrite any imported stylesheet styles in your global stylesheet.</li>
		</ul>
	</section>

	<hr />

	<!-- Per Component Styles -->
	<section class="space-y-4">
		<h2>Styling Components</h2>
		<p>Skeleton components automatically adapt to your theme. If you would like to customize a single component, see the instruction below.</p>
		<h3>Using Component Props</h3>
		<p>All components support style props that accept Tailwind utility classes. See each component's documentation for details.</p>
		<CodeBlock language="html" code={`<Tab background="bg-accent-500">Prop Customized</Tab>`} />
		<h3>Appending Arbitrary Classes</h3>
		<p>All components support the standard <code>class</code> attribute, allowing you to pass any valid CSS or Tailwind class.</p>
		<CodeBlock language="html" code={`<Tab class="text-3xl px-10 py-5">Big</Tab>`} />
		<h3>Targetting Component Elements</h3>
		<p>
			Keep in mind that components are a single line element that contains a set of HTML elements within their template. This means you should be mindful of your target, as the <code>class</code> attribute
			is only applied to the top-most parent element in the template. In some cases you may need to generate a chained class definition, though we advise using this technique sparingly.
		</p>
		<CodeBlock language="css" code={`.my-custom-class .some-child-element { @apply bg-red-500; }`} />
		<CodeBlock language="html" code={`<Menu class="my-custom-class">...</Menu>`} />
		<h3>Component Element Classes</h3>
		<p>If you inspect rendered components using your browser inpector, you'll note that most have named classes, like <code>crumb-seperator</code> for the breadcrumb component.</p>
		<CodeBlock language="html" code={`<div class="crumb-seperator ...">&rarr;</div>`} />
		<p>If you wish to adjust the styling of this element, you can target the <code>.crumb-seperator</code> class in your global stylesheet like so.</p>
		<CodeBlock language="css" code={`.crumb-seperator { @apply text-red-500; }`} />
		<h3>Important</h3>
		<p>
			Note that when overwriting styles, you may need to mark the style <a href="https://tailwindcss.com/docs/configuration#important-modifier" target="_blank">important</a> to take precedence.
		</p>
		<CodeBlock language="html" code={`<Tab class="!p-10">Big</Tab>`} />
		<CodeBlock language="css" code={`.crumb-crumb { @apply !text-green-500; }`} />
	</section>

	<hr />

	<!-- Next Steps -->
	<!-- <div class="card card-body !flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Finally, let's scaffold our project.</p>
		<a class="btn btn-filled-accent" href="/guides/tailwind">Scaffold Project</a>
	</div> -->
</div>
