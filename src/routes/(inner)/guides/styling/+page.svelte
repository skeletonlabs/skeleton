<script lang="ts">
	import { DataTable, Divider, TabGroup, Tab } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Tables
	const ghLibPathMaster: string = 'https://github.com/Brain-Bones/skeleton/tree/master/src/lib'; // master branch
	const tableStyleAddons: any = {
		headings: ['Stylesheet', 'Description', 'Documentation', 'View Source', 'Plugin'],
		// prettier-ignore
		source: [
			[
				'<code>tailwind.css</code>',
				'<u>IMPORTANT</u>: should proceed all other add-ons.<br>Includes all <a href="https://tailwindcss.com/docs/functions-and-directives" target="_blank">@tailwind directives</a>.',
				'-',
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
				'<code>buttons.css</code>',
				'Provides a variety of button and button icon styles.',
				'<a href="/tailwind/buttons">Buttons</a>',
				`<a href="${ghLibPathMaster}/styles/buttons.css" target="_blank">buttons.css</a>`,
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
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Styling</h1>
		<p>Review best practies for implementing stylesheets, handling global styles, as well as how to styling each each component.</p>
	</header>

	<Divider />

	<!-- Add-Ons -->
	<section class="space-y-4">
		<h2>Stylesheet Add-Ons</h2>
		<p>Skeleton provides a set of modular stylesheets that adapt to your theme and provide a more consistent aesthetic. These are optional, but highly recommended.</p>
		<CodeBlock
			language="typescript"
			code={`
// (theme stylesheet here)
import '@brainandbones/skeleton/styles/{stylehsheet}.css'; // <--
// (global stylesheet here)
			`.trim()}
		/>
		<p>Import each desired add-on in the order shown below. Be sure to set the appropriate file name as follows.</p>
		<!-- Table -->
		<DataTable headings={tableStyleAddons.headings} source={tableStyleAddons.source} />
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
			<li>We recommend you inspect each imported stylesheet add-on. If you wish to override these, you can do so in your global stylesheet.</li>
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
