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
</section>
