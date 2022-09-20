<script lang="ts">
	import { DataTable, Divider, TabGroup, Tab } from '@brainandbones/skeleton';
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

	<Divider />

	<!-- Stylesheets -->
	<section class="space-y-4">
		<h2>Stylesheets</h2>
		<p>
			Skeleton provides a set of modular stylesheets that adapt to your theme and provide a more consistent aesthetic. However, most users should opt for the <code>all.css</code> stylesheet, which ensures
			all stylesheets are included and imported in the optimal order.
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

	<Divider />

	<!-- Global Styles -->
	<section class="space-y-4">
		<h2>Global Styles</h2>
		<p>Here's a few suggested best practices to follow when creating global styles:</p>
		<ul class="list-disc list-inside space-y-1">
			<li>
				Ensure you wrap your core page elements within a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main" target="_blank">main element</a>. The
				<a href="/components/app-shell">App Shell</a> component handles this for you.
			</li>
			<li>
				The ideal use case for <a href="https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply" target="_blank">Tailwind @apply</a> is defining global styles. Please be leery of
				<a href="https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction" target="_blank">premature abstraction</a>.
			</li>
			<li>
				Utilize the CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:not" target="_blank">:not pseudo-class</a> to exclude and avoid conflicts with Skeleton component's inherit styles.
			</li>
			<li>
				Utilize the <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">Tailwind Forms plugin</a>
				to handle form input element styling. View the <a href="/guides/forms">Forms</a> guide for details.
			</li>
			<li>We recommend you inspect each imported stylesheet. If you wish to override these, you can do so in your global stylesheet.</li>
		</ul>
	</section>

	<Divider />

	<!-- Per Component Styles -->
	<section class="space-y-4">
		<h2>Styling Components</h2>
		<p>Skeleton components automatically inherit and utilize your theme colors. However, there may be cases where you want to overwrite or extend the styling on a single component.</p>
		<h4>Using Component Props</h4>
		<p>Various style properties are available to customize components. These accept Tailwind utility classes. See each component's documentation page for details.</p>
		<CodeBlock language="html" code={`<Tab background="bg-accent-500">Prop Customized</Tab>`} />
		<h4>Appending Arbitrary Classes</h4>
		<p>To go beyond the pre-defined properties, pass a standard <code>class</code> attribute to any component. You can then apply any valid CSS or Tailwind class as expected.</p>
		<CodeBlock language="html" code={`<Tab class="text-3xl px-10 py-5">Big</Tab>`} />
		<p>
			When overwriting inherited styles, you may need to mark the styles as <code>!important</code>. Tailwind uses a leading exclamation mark to handle this.
		</p>
		<CodeBlock language="html" code={`<Tab class="!p-10">Big</Tab>`} />
		<h4>Targetting Component Elements</h4>
		<p>
			Keep in mind that components are a single line HTML element and represent a set of HTML elements within. This means you should be mindful of your target, as the <code>class</code> attribute is only
			applied to the top-most parent element. In rare cases you may need to generate a chained class definition, though we advise using this technique sparingly.
		</p>
		<CodeBlock language="css" code={`.my-custom-class .some-child-element { @apply bg-red-500; }`} />
		<CodeBlock language="html" code={`<Menu class="my-custom-class">...</Menu>`} />
		<h4>Template Element Classes</h4>
		<p>Finally, if you inspect rendered components in your browser's element DOM, you'll notice that most have classes. There's the Breadcrumb seperator for example:</p>
		<CodeBlock language="html" code={`<div class="crumb-seperator ...">&rarr;</div>`} />
		<p>If you wish to adjust the styling of this element, you can target the <code>.crumb-seperator</code> class in your global stylesheet like so:</p>
		<CodeBlock language="css" code={`.crumb-seperator { @apply text-red-500; }`} />
	</section>
</div>
