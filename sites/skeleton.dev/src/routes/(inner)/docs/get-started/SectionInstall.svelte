<script lang="ts">
	import { storeOnboardMethod } from '$lib/stores/stores';
	// Components
	import { TabGroup, Tab, CodeBlock } from '@skeletonlabs/skeleton';
</script>

<section class="space-y-4">
	<h2 class="h2">Create Your Project</h2>
	<TabGroup regionPanel="space-y-4">
		<!-- Tabs -->
		<Tab bind:group={$storeOnboardMethod} name="cli" value="cli">Skeleton CLI</Tab>
		<Tab bind:group={$storeOnboardMethod} name="manual" value="manual">Manual Install</Tab>
		<!-- Panel -->
		<svelte:fragment slot="panel">
			{#if $storeOnboardMethod === 'cli'}
				<p>
					We <u>highly recommend</u> the Skeleton CLI for creating new Skeleton projects. This will automatically scaffold a new SvelteKit application,
					install Tailwind, configure Skeleton, and more.
				</p>
				<!-- TODO: revert to `@latest` tag when v2 RC test period ends! -->
				<CodeBlock
					language="console"
					code={`
npm create skeleton-app@rc my-skeleton-app
	- Enable Typescript when prompted (recommended)
cd my-skeleton-app
						`}
				/>
			{:else if $storeOnboardMethod === 'manual'}
				<!-- prettier-ignore -->
				<p>
					First we'll generate a new <a class="anchor" href="https://kit.svelte.dev/docs/creating-a-project" target="_blank" rel="noreferrer">SvelteKit project</a>. If you already have a SvelteKit project, skip to the next step.
				</p>
				<CodeBlock
					language="console"
					code={`
npm create svelte@latest my-skeleton-app
	- Enable Typescript when prompted (recommended)
cd my-skeleton-app
npm install
		`}
				/>
			{/if}
		</svelte:fragment>
	</TabGroup>
</section>
