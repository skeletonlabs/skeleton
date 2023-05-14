<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	// Components
	import { TabGroup, Tab, CodeBlock } from '@skeletonlabs/skeleton';

	// Stores
	import { storeOnboardMethod } from '$docs/stores/stores';
	export const storeStylesheets: Writable<string> = writable('recommended');
	export const storeStylesheetElements: Writable<string> = writable('combined');
</script>

<!-- Header -->
<section class="space-y-4">
	<h2 class="h2">Stylesheets</h2>
	<TabGroup regionPanel="space-y-4">
		<!-- Tabs -->
		<Tab bind:group={$storeOnboardMethod} name="cli" value="cli">Skeleton CLI</Tab>
		<Tab bind:group={$storeOnboardMethod} name="manual" value="manual">Manual Install</Tab>
		<!-- Panel -->
		<svelte:fragment slot="panel">
			{#if $storeOnboardMethod === 'cli'}
				<div class="card variant-glass p-4">
					<p>
						The CLI will automatically import the Skeleton CSS stylesheet within
						<code class="code">src/routes/+layout.svelte</code>.
					</p>
				</div>
			{:else if $storeOnboardMethod === 'manual'}
				<p>Ensure the following stylesheets are added to your root layout in <code class="code">src/routes/+layout.svelte</code>.</p>
				<aside class="alert variant-ghost-warning">
					<i class="fa-solid fa-triangle-exclamation text-2xl" />
					<div class="alert-message">
						<p>The order shown is critical to ensure these work as expected. Please be careful when adding or modifying these!</p>
					</div>
				</aside>
				<CodeBlock
					language="ts"
					code={`
// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';\n
// This contains the bulk of Skeletons required styles:
// NOTE: this will be renamed skeleton.css in the v2.x release.
import '@skeletonlabs/skeleton/styles/skeleton.css';\n
// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';
						`}
				/>
			{/if}
		</svelte:fragment>
	</TabGroup>
</section>
