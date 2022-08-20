<script lang="ts">
	import { storeFramework } from '../../stores';
	import { Card, Button, DataTable, Divider, TabGroup, Tab } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';

	// Tables
	const ghLibPathMaster: string = 'https://github.com/Brain-Bones/skeleton/tree/master/src/lib'; // master branch
	const tableStyleAddons: any = {
		headings: ['Stylesheet', 'Source', 'Description'],
		source: [
			[
				'<code>core.css</code>',
				`<a href="${ghLibPathMaster}/styles/core.css" target="_blank">View</a>`,
				'Styless body elements, scrollbars, code blocks, and more.',
			],
			[
				'<code>typography.css</code>',
				`<a href="${ghLibPathMaster}/styles/typography.css" target="_blank">View</a>`,
				'Styles headings, paragraph and anchors within the main element, and more.',
			],
			[
				'<code>forms.css</code>',
				`<a href="${ghLibPathMaster}/styles/forms.css" target="_blank">View</a>`,
				'For use with the <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">Tailwind Forms plugin</a> detailed in <a href="/guides/forms">Forms</a>.',
			],
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Styling</h1>
		<p>Below we'll review best practices for global styles, as well as how to override and adjust individual component styling.</p>
	</header>

	<Divider />

	<!-- Global Styles -->
	<section class="space-y-4">
		<h2>Global Styles</h2>
		<p>Here's a few suggested best practices to follow when creating global styles:</p>
		<ul class="list-disc list-inside space-y-1">
			<li>
				Ensure you wrap your core page elements within a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main" target="_blank">main element</a>, to target page-specific styling.
			
			<li>
				One of the best uses for <a href="https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply" target="_blank">Tailwind @apply</a> is when defining global styles. Just be leery of
				using this elsewhere.
			</li>
			<li>
				Utilize the CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:not" target="_blank">:not pseudo-class</a> to exclude and avoid overwriting Skeleton component's inherit styles.
			</li>
			<li>
				Utilize the <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">Tailwind Forms plugin</a>
				to handle form input styling. View our <a href="/guides/forms">Forms guide</a> for more details.
			</li>
		</ul>
	</section>

	<Divider />

	<!-- Add-Ons -->
	<section class="space-y-4">
		<h2>Stylesheet Add-Ons</h2>
		<p>Below are a set of optional stylesheets that work in unison with your Skeleton theme.</p>
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		<!-- Framework: SvelteKit | Vite (Svelte) -->
		{#if $storeFramework === 'sveltekit'}
			<p>Import all desired CSS add-ons after your global stylesheet in <code>/src/routes/+layout.svelte</code>.</p>
			<CodeBlock language="typescript" code={`import '../app.postcss';\nimport '@brainandbones/skeleton/styles/{stylehsheet}'; // ex: core.css`} />
		{:else if $storeFramework === 'vite'}
			<p>Import all desired CSS add-ons after your global stylesheet in <code>/src/main.js</code>.</p>
			<CodeBlock language="typescript" code={`import '../app.css';\nimport '@brainandbones/skeleton/styles/{stylehsheet}'; // ex: core.css`} />
			<!-- Framework: Astro -->
		{:else if $storeFramework === 'astro'}
			<p>Import all desired CSS add-ons after your global stylesheet in <code>/src/layouts/LayoutBasic.astro</code>.</p>
			<CodeBlock language="typescript" code={`import '../styles/base.css';\nimport '@brainandbones/skeleton/styles/{stylehsheet}'; // ex: core.css`} />
		{/if}
		<DataTable headings={tableStyleAddons.headings} source={tableStyleAddons.source} />
	</section>

	<Divider />

	<!-- Per Component Styles -->
	<section class="space-y-4">
		<h2>Per Component Styles</h2>
		<p>
			Skeleton components automatically inherit and utilize each theme color value. However, there may be cases where you want to overwrite or extend the styling on a single component. To do this,
			simply add a <code>class</code> attribute to any component. You can then apply any valid CSS or Tailwind class as expected.
		</p>
		<CodeBlock
			language="html"
			code={`
<Button variant="filled-primary">Standard</Button>
<Button variant="filled-primary" class="text-3xl px-10 py-5">Big</Button>
        `.trim()}
		/>
		<p>
			When overwriting inherited styles, you may need to mark the styles as <code>!important</code>. Tailwind uses a leading exclamation mark to handle this.
		</p>
		<CodeBlock language="html" code={`<Button class="!p-10">Big</Button>`} />
		<p>
			Keep in mind that components are a single line HTML element and represent and contain a set of HTML elements within. This means you should be mindful of your target, as the <code>class</code> attribute
			is only applied to the top-most parent element. In rare cases you may need to generate a chained class definition, though we recommend using this technique sparingly.
		</p>
		<CodeBlock language="css" code={`.my-custom-class .menu-content { @apply bg-red-500; }`} />
		<CodeBlock language="html" code={`<Menu class="my-custom-class">...</Menu>`} />
	</section>

	<Divider />

	<!-- Next Steps -->
	<Card class="flex justify-between items-center space-x-4 space-y-0">
		<p>Next, let's review how to handle forms and inputs.</p>
		<Button variant="filled-accent" href="/guides/forms">Handling Forms</Button>
	</Card>
</div>
