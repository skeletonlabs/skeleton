<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	// Stores
	import { storeOnboardMethod } from '$lib/stores/stores';
	// Components
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	// Section Components
	import SectionCli from './SectionCli.svelte';
	import SectionManual from './SectionManual.svelte';
</script>

<LayoutPage>
	<header class="space-y-4">
		<h1 class="h1">Get Started</h1>
		<p>Learn how to scaffold a new Skeleton project.</p>
	</header>
	<hr />
	<section class="space-y-4">
		<h2 class="h2">Requirements</h2>
		<p>Moderate experience with the following tooling is required before using Skeleton.</p>
		<div class="table-container">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Tooling</th>
						<th>Max Version</th>
						<th>More Information</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><a href="https://svelte.dev/" target="_blank" class="anchor">SvelteKit</a></td>
						<td>v2</td>
						<td>Additional frameworks coming in <a href="https://next.skeleton.dev/docs/get-started/installation" target="_blank" class="anchor">future versions</a>.</td>
					</tr>
					<tr>
						<td><a href="https://svelte.dev/" target="_blank" class="anchor">Svelte</a></td>
						<td>v4</td>
						<td>
							<a href="https://github.com/skeletonlabs/skeleton/discussions/2887" target="_blank" class="anchor">Svelte 5</a> is supported with some known issues.
						</td>
					</tr>
					<tr>
						<td><a href="https://v3.tailwindcss.com/" target="_blank" class="anchor">Tailwind</a></td>
						<td>v3</td>
						<td>
							<a href="https://tailwindcss.com/blog/tailwindcss-v4" target="_blank" class="anchor">Tailwind v4</a> is not supported by this version of Skeleton.
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
	<hr />
	<section class="space-y-4">
		<h2 class="h2">Create Your Project</h2>
		<TabGroup regionPanel="space-y-4">
			<!-- Tabs -->
			<Tab bind:group={$storeOnboardMethod} name="cli" value="cli">Skeleton CLI (recommended)</Tab>
			<Tab bind:group={$storeOnboardMethod} name="manual" value="manual">Manual Installation</Tab>
			<!-- Panel -->
			<svelte:fragment slot="panel">
				{#if $storeOnboardMethod === 'cli'}
					<SectionCli />
				{:else}
					<SectionManual />
				{/if}
			</svelte:fragment>
		</TabGroup>
	</section>
	<hr class="hr">
	<section class="space-y-4">
		<!-- Dark Mode -->
		<div class="card variant-glass p-4">
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn how to configure your application for dark mode.</p>
				<a class="btn variant-filled-secondary" href="/docs/dark-mode">Dark Mode &rarr;</a>
			</div>
		</div>
		<!-- Theme Customization -->
		<div class="card variant-glass p-4">
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn how to create or extend themes.</p>
				<a class="btn variant-filled-secondary" href="/docs/themes">Themes &rarr;</a>
			</div>
		</div>
	</section>
</LayoutPage>
