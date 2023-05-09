<script lang="ts">
	import { storeOnboardMethod } from '$docs/stores/stores';
	// Components
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
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
				<p>
					If you're creating a new project we <u>highly recommend</u> this option. The CLI will not only scaffold a new SvelteKit project for
					you, but automatically configure Skeleton, install Tailwind, and add optional dependencies on demand.
				</p>
				<CodeBlock
					language="console"
					code={`
npm create skeleton-app@latest my-skeleton-app
	- Enable SvelteKit's Typescript syntax (recommended)
cd my-skeleton-app
						`}
				/>
			{:else if $storeOnboardMethod === 'manual'}
				<!-- prettier-ignore -->
				<p>
					If you have an existing SvelteKit application, skip to installing the Skeleton package from NPM. Otherwise let's begin by creating a new <a class="anchor" href="https://kit.svelte.dev/docs/creating-a-project" target="_blank" rel="noreferrer">SvelteKit project</a>.
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
					Install the <a class="anchor" href="https://www.npmjs.com/package/@skeletonlabs/skeleton" target="_blank" rel="noreferrer"
						>Skeleton package</a
					> from NPM.
				</p>
				<CodeBlock language="console" code={`npm i @skeletonlabs/skeleton --save-dev`} />
			{/if}
		</svelte:fragment>
	</TabGroup>
</section>
