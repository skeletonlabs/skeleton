<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	// Components
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Stores
	import { storeFramework } from '$docs/stores/stores';
	export const storeStylesheets: Writable<string> = writable('recommended');
	export const storeStylesheetElements: Writable<string> = writable('combined');
</script>

<!-- Header -->
<section class="space-y-4">
	<h2>Stylesheets</h2>
	<TabGroup regionPanel="space-y-4">
		<!-- Tabs -->
		<Tab bind:group={$storeFramework} name="cli" value="cli">Skeleton CLI</Tab>
		<Tab bind:group={$storeFramework} name="manu" value="manual">Manual Install</Tab>
		<!-- Panel -->
		<svelte:fragment slot="panel">
			{#if $storeFramework === 'cli'}
				<p>The CLI will automatically import all required stylesheets in <code>src/routes/+layout.svelte</code>.</p>
			{:else if $storeFramework === 'manual'}
				<p>Ensure the following stylesheets are added to your root layout in <code>src/routes/+layout.svelte</code>.</p>
				<aside class="alert variant-ghost-warning">
					<i class="fa-solid fa-triangle-exclamation text-2xl" />
					<div class="alert-message ">
						<p>The following stylesheets are <u>required</u> and it is critical they are imported in the following order.</p>
					</div>
				</aside>
				<CodeBlock
					language="ts"
					code={`
// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-{someThemeName}.css';\n
// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/all.css';\n
// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';
						`}
				/>
			{/if}
		</svelte:fragment>
	</TabGroup>

	<!-- <p>
		View our <a href="/blog/deep-dive-skeleton-styling" target="_blank">comprehensive guide to styling</a> or review the quick intro below.
	</p> -->
	<!-- <Accordion autocollapse class="card p-4 variant-glass-surface">
		<AccordionItem spacing="space-y-4" open>
			<svelte:fragment slot="summary"><h4>Via Component Props</h4></svelte:fragment>
			<div slot="content" class="space-y-4">
				<p>
					This is the recommended manner to style most components. Each component provides a set of style <em>props</em> (read: properties) that
					allow you to override the default style classes. See a list of available options under the "Props" tab per each feature in Skeleton.
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
			<svelte:fragment slot="summary"><h4>Via the Class Attribute</h4></svelte:fragment>
			<div slot="content" class="space-y-4">
				<p>
					If a style prop is not available, you can still provide arbitrary utility classes via a standard <code>class</code> attribute. These
					styles are always applied to the parent element in the component template.
				</p>
				<CodeBlock language="html" code={`<ExampleComponent class="text-3xl px-10 py-5">Skeleton</ExampleComponent>`} />
			</div>
		</AccordionItem>
		<AccordionItem spacing="space-y-4">
			<svelte:fragment slot="summary"><h4>Tailwind Abitrary Variants</h4></svelte:fragment>
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
			<svelte:fragment slot="summary"><h4>Global Styles Overrides</h4></svelte:fragment>
			<div slot="content" class="space-y-4">
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
					<a href="https://tailwindcss.com/docs/configuration#important-modifier" target="_blank" rel="noreferrer">important</a> or style both
					the light/dark mode Tailwind variants to give precedence.
				</blockquote>
			</div>
		</AccordionItem>
	</Accordion> -->
</section>
