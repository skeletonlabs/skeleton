<script lang="ts">
	import { storeOnboardMethod } from '$lib/stores/stores';
	// Components
	import { TabGroup, Tab, CodeBlock } from '@skeletonlabs/skeleton';
</script>

<section class="space-y-4">
	<h2 class="h2">Install Skeleton</h2>
	<TabGroup regionPanel="space-y-4">
		<!-- Tabs -->
		<Tab bind:group={$storeOnboardMethod} name="cli" value="cli">Skeleton CLI</Tab>
		<Tab bind:group={$storeOnboardMethod} name="manual" value="manual">Manual Install</Tab>
		<!-- Panel -->
		<svelte:fragment slot="panel">
			{#if $storeOnboardMethod === 'cli'}
				<aside class="alert variant-ghost p-4">
					<i class="fa-solid fa-circle-check" />
					<div class="alert-message">
						<p>The CLI will automatically install Skeleton and the Skeleton Tailwind plugin.</p>
					</div>
				</aside>
			{:else if $storeOnboardMethod === 'manual'}
				<!-- prettier-ignore -->
				<p>
					Install the packages for <a class="anchor" href="https://www.npmjs.com/package/@skeletonlabs/skeleton" target="_blank" rel="noreferrer">Skeleton</a> and the <a class="anchor" href="https://www.npmjs.com/package/@skeletonlabs/tw-plugin" target="_blank" rel="noreferrer">Skeleton Tailwind plugin</a>.
				</p>
				<!-- TODO: revert to `@latest` tag when v2 RC test period ends! -->
				<CodeBlock language="console" code={`npm i -D @skeletonlabs/skeleton@rc @skeletonlabs/tw-plugin@rc`} />
			{/if}
		</svelte:fragment>
	</TabGroup>
</section>
