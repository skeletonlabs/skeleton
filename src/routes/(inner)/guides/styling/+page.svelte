<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import type { TableSource } from '$lib/components/Table/types';

	// Components
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Stores
	import { storeFramework } from '$docs/stores/stores';
	export const storeStylesheets: Writable<string> = writable('recommended');
	export const storeStylesheetElements: Writable<string> = writable('combined');

	// Tables
	const tableStylesheetOrder: TableSource = {
		head: ['Order', 'Stylesheet', 'Filename', 'Reason'],
		// prettier-ignore
		body: [
			[ '1.', 'Theme Stylesheet', '<code>theme-[name].css</code>', 'Houses your themes use CSS properties for colors, border radius, etc.' ],
			[ '2.', 'Skeleton Stylesheet(s)', '<code>all.css</code>', 'Imports Tailwind directives and Skeleton stylesheets in the recommended order.' ],
			[ '3.', 'Global Stylesheet', '<code>app.postcss</code>', 'Keep last so you can override styles. Your project-specific styles go here.' ],
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
		<TabGroup regionPanel="space-y-4">
			<!-- Tabs -->
			<Tab bind:group={$storeFramework} name="cli" value="cli">Skeleton CLI</Tab>
			<Tab bind:group={$storeFramework} name="manu" value="manual">Manual Install</Tab>
			<!-- Panel -->
			<svelte:fragment slot="panel">
				{#if $storeFramework === 'cli'}
					<p>The CLI will automatically import Skeleton's <code>all.css</code> stylesyeet into <code>src/routes/+layout.svelte</code>.</p>
				{:else if $storeFramework === 'manual'}
					<!-- prettier-ignore -->
					<p>
						Import the Skeleton <code>all.css</code> stylesheet into <code>src/routes/+layout.svelte</code> betweeen your <a href="/guides/themes">Theme stylesheet</a> and SvelteKit's global stylesheet, called <code>app.postcss</code>.
					</p>
					<CodeBlock
						language="ts"
						code={`
import '@skeletonlabs/skeleton/styles/${$storeStylesheets === 'recommended' ? 'all' : '{stylehsheets}'}.css';
						`}
					/>
				{/if}
			</svelte:fragment>
		</TabGroup>
	</section>

	<!-- Required Order -->
	<section class="space-y-4">
		<div class="flex items-center space-x-2">
			<h2>Import Order</h2>
			<span class="badge variant-filled-warning">Important</span>
		</div>
		<p>Skeleton has strict requirements for stylesheet import order. We've explained the purpose of each stylesheet below.</p>
		<Table source={tableStylesheetOrder} />
		<p>Here's an example of the stylesheets using the Skeleton theme.</p>
		<CodeBlock
			language="ts"
			code={`
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
import '@skeletonlabs/skeleton/styles/all.css';
import '../app.postcss';
		`}
		/>
	</section>

	<section class="space-y-4">
		<div class="space-y-4">
			<h2>Customizing Styles</h2>
			<!-- prettier-ignore -->
			<p>
				Learn the basics with our quick start guide below, or view our <a href="/blog/deep-dive-skeleton-styling" target="_blank">comprehensive guide here</a>.
			</p>
		</div>
		<div class="card p-4 variant-glass-surface">
			<Accordion autocollapse>
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
						<!-- prettier-ignore -->
						<p>
							Skeleton components include selector classes, such as <code>.avatar-image</code> within the <a href="/components/avatars">Avatar component</a>. Selector classes are always the first listed.
						</p>
						<CodeBlock language="html" code={`<img class="avatar-image ...">...</img>`} />
						<p>
							Use these selector classes to target and provide global style overrides to all instances of this feature in your global
							stylesheet.
						</p>
						<CodeBlock language="css" code={`.avatar-image { @apply border-2 border-red-500; }`} />
						<blockquote>
							TIP: in some cases you may need to use <code>!</code>
							<a href="https://tailwindcss.com/docs/configuration#important-modifier" target="_blank" rel="noreferrer">important</a> or style
							both the light/dark mode Tailwind variants to give precedence.
						</blockquote>
					</div>
				</AccordionItem>
			</Accordion>
		</div>
	</section>

	<!-- Next Steps -->
	<section class="space-y-4">
		<h2>What's Next?</h2>
		<p>Choose your own adventure. We recommend you review each section listed below.</p>
		<div class="card p-4 variant-glass-surface space-y-4">
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn more about Skeleton's Tailwind features.</p>
				<a class="btn variant-ghost-surface" href="/elements/tokens">Tailwind Features &rarr;</a>
			</div>
			<hr class="opacity-30" />
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn more about Skeleton's Svelte features.</p>
				<a class="btn variant-ghost-surface" href="/actions/clipboard">Svelte Features &rarr;</a>
			</div>
			<hr class="opacity-30" />
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn more about Skeleton's utility features.</p>
				<a class="btn variant-ghost-surface" href="/utilities/codeblocks">Utility Features &rarr;</a>
			</div>
		</div>
	</section>
</div>
