<script lang="ts">
	import { storeFramework } from '$docs/stores/stores';
	// Components
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<section class="space-y-4">
	<TabGroup regionPanel="space-y-4">
		<!-- Tabs -->
		<Tab bind:group={$storeFramework} name="cli" value="cli">Skeleton CLI</Tab>
		<Tab bind:group={$storeFramework} name="manu" value="manual">Manual Install</Tab>
		<!-- Panel -->
		<svelte:fragment slot="panel">
			{#if $storeFramework === 'cli'}
				<p>We provide an interactive CLI app to scaffold a new SvelteKit project and automatically configure Skeleton.</p>
				<CodeBlock
					language="console"
					code={`
npm create skeleton-app@latest my-skeleton-app
	- Enable SvelteKit's Typescript syntax (recommended)
cd my-skeleton-app
						`}
				/>
			{:else if $storeFramework === 'manual'}
				<!-- prettier-ignore -->
				<p>
					Use this option if you're migrating from an existing SvelteKit project. Otherwise use the <a href="https://kit.svelte.dev/docs/creating-a-project" target="_blank" rel="noreferrer">official documentation</a> to setup a new SvelteKit project.
				</p>
				<CodeBlock
					language="console"
					code={`
npm create svelte@latest my-skeleton-app
cd my-skeleton-app
npm install
		`}
				/>
				<!-- Install NPM Package -->
				<p>
					Install the <a href="https://www.npmjs.com/package/@skeletonlabs/skeleton" target="_blank" rel="noreferrer">Skeleton package</a> from
					NPM.
				</p>
				<CodeBlock language="console" code={`npm i @skeletonlabs/skeleton --save-dev`} />
			{/if}
		</svelte:fragment>
	</TabGroup>
</section>
