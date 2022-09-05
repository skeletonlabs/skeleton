<script lang="ts">
	import { storeFramework } from '$lib/_documentation/stores';
	import { Card, Button, DataTable, Divider, TabGroup, Tab } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import Alert from '$lib/Alert/Alert.svelte';

	// Tables
	const ghLibPathMaster: string = 'https://github.com/Brain-Bones/skeleton/tree/master/src/lib'; // master branch
	const tableStyleAddons: any = {
		headings: ['Stylesheet', 'Description', 'Plugin Required', 'Source', ],
		source: [
			[
				'<code>tailwind.css</code>',
				'Should proceed all other add-ons. Includes only the four primary <a href="https://tailwindcss.com/docs/functions-and-directives" target="_blank">@tailwind directives</a>.',
				'-',
				`<a href="${ghLibPathMaster}/styles/tailwind.css" target="_blank">View</a>`,
			],
			[
				'<code>core.css</code>',
				'General styles for for body elements, scrollbars, and more.',
				'-',
				`<a href="${ghLibPathMaster}/styles/core.css" target="_blank">View</a>`,
			],
			[
				'<code>typography.css</code>',
				'Styles headings, paragraph, anchors, pre, code, and more.',
				'-',
				`<a href="${ghLibPathMaster}/styles/typography.css" target="_blank">View</a>`,
			],
			[
				'<code>forms.css</code>',
				'Should only be used with the <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">Tailwind Forms</a> plugin. See the <a href="/guides/forms">Forms</a> for details.',
				'&check;',
				`<a href="${ghLibPathMaster}/styles/forms.css" target="_blank">View</a>`,
			],
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Styling</h1>
		<p>Review best practies for implementing global styles using the modular stylesheet system, as well as how to override and adjust styles per each component.</p>
	</header>

	<Divider />

	<!-- Global Styles -->
	<section class="space-y-4">
		<h2>Global Styles</h2>
		<p>Here's a few suggested best practices to follow when creating global styles:</p>
		<ul class="list-disc list-inside space-y-1">
			<li>
				Ensure you wrap your core page elements within a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main" target="_blank">main element</a>. The <a href="/components/app-shell">App Shell</a> component handles this for you.
			
			<li>
				The ideal use case for <a href="https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply" target="_blank">Tailwind @apply</a> is defining global styles. Please be leery of <a href="https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction" target="_blank">premature abstraction</a>.
			</li>
			<li>
				Utilize the CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:not" target="_blank">:not pseudo-class</a> to exclude and avoid conflicts with Skeleton component's inherit styles.
			</li>
			<li>
				Utilize the <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">Tailwind Forms plugin</a>
				to handle form input element styling. View the <a href="/guides/forms">Forms</a> guide for details.
			</li>
		</ul>
	</section>

	<Divider />

	<!-- Add-Ons -->
	<section class="space-y-4">
		<h2>Stylesheet Add-Ons</h2>
		<p>Skeleton provides a set of modular stylesheets that can adapt your project to use your theme colors and provide a more consistent aesthetic.</p>
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		<!-- Framework: SvelteKit | Vite (Svelte) -->
		{#if $storeFramework === 'sveltekit'}
			<p>Import desired CSS add-ons directly above your global stylesheet in <code>/src/routes/+layout.svelte</code>.</p>
			<CodeBlock language="typescript" code={`import '@brainandbones/skeleton/styles/{stylehsheet}.css'; // ex: tailwind.css\nimport '../app.postcss';`} />
		{:else if $storeFramework === 'vite'}
			<p>Import desired CSS add-ons directly above your global stylesheet in <code>/src/main.js</code>.</p>
			<CodeBlock language="typescript" code={`import '@brainandbones/skeleton/styles/{stylehsheet}.css'; // ex: tailwind.css\nimport '../app.css';`} />
			<!-- Framework: Astro -->
		{:else if $storeFramework === 'astro'}
			<p>Import desired CSS add-ons directly above your global stylesheet in <code>/src/layouts/LayoutBasic.astro</code>.</p>
			<CodeBlock language="typescript" code={`import '@brainandbones/skeleton/styles/{stylehsheet}.css'; // ex: tailwind.css\nimport '../styles/base.css';`} />
		{/if}
		<p>Import each add-on in the order shown below, from top-to-bottom. Be sure to pass the appropriate stylesheet filename as follows.</p>
		<DataTable headings={tableStyleAddons.headings} source={tableStyleAddons.source} />
		<Alert background="bg-accent-500/30">
			<svelte:fragment slot="message">
				<span class="text-black dark:text-white">
					Ensure you import the <code>tailwind.css</code> add-on before all others. Remove the @tailwind directives from your global stylesheet if you choose to use these add-ons. Failure to do so will mean you have two instances of the directives in your project.
				</span>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Button variant="filled" href="https://tailwindcss.com/docs/functions-and-directives" target="_blank">Tailwind Directives</Button>
			</svelte:fragment>
		</Alert>
	</section>

	<Divider />

	<!-- Per Component Styles -->
	<section class="space-y-4">
		<h2>Per Component Styles</h2>
		<p>
			Skeleton components automatically inherit and utilize your theme colors. However, there may be cases where you want to overwrite or extend the styling on a single component.
		</p>
		<p>Special style properties are provided to customize each component. See each component's documentation for instruction.</p>
		<CodeBlock language="html" code={`
<Button background="bg-accent-500">Prop Customized</Button>
        `.trim()}
		/>
		<p>To go beyond the pre-defined properties, pass a standard <code>class</code> attribute to any component. You can then apply any valid CSS or Tailwind class as expected.</p>
		<CodeBlock
			language="html"
			code={`
<Button variant="filled-primary" class="text-3xl px-10 py-5">Big</Button>
        `.trim()}
		/>
		<p>
			When overwriting inherited styles, you may need to mark the styles as <code>!important</code>. Tailwind uses a leading exclamation mark to handle this.
		</p>
		<CodeBlock language="html" code={`<Button class="!p-10">Big</Button>`} />
		<p>
			Keep in mind that components are a single line HTML element and represent a set of HTML elements within. This means you should be mindful of your target, as the <code>class</code> attribute
			is only applied to the top-most parent element. In rare cases you may need to generate a chained class definition, though we advise using this technique sparingly.
		</p>
		<CodeBlock language="css" code={`.my-custom-class .menu-content { @apply bg-red-500; }`} />
		<CodeBlock language="html" code={`<Menu class="my-custom-class">...</Menu>`} />
	</section>

	<Divider />

	<!-- Next Steps -->
	<Card body="flex justify-between items-center space-x-4 space-y-0">
		<p>Next, let's review how to handle forms and inputs.</p>
		<Button variant="filled-accent" href="/guides/forms">Handling Forms</Button>
	</Card>
</div>
