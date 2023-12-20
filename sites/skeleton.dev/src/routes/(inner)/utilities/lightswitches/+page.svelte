<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { CodeBlock, LightSwitch, Tab, TabGroup } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldLightSwitch from '@skeletonlabs/skeleton/utilities/LightSwitch/LightSwitch.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Lightswitch',
		description: `Components and utilities for toggling <a class="anchor" href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noreferrer">Tailwind's dark mode</a>.`,
		imports: ['LightSwitch'],
		source: 'packages/skeleton/src/lib/utilities/LightSwitch',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/switch/',
		components: [{ sveld: sveldLightSwitch }],
		keyboard: [['<kbd class="kbd">Space</kbd> or <kbd class="kbd">Enter</kbd>', 'Toggle the switch state.']]
	};

	// Local
	let tabSection = 0;
	let tabInterface = 0;
	let osTabs = 0;
	// prettier-ignore
	const snippetAutoModeWatcher = '\<svelte:head\>{@html \'\<script\>(\' + autoModeWatcher.toString() + \')();\</script\>\'}\</svelte:head\>';
	// prettier-ignore
	const snippetSetInitClass = '\<svelte:head\>{@html \'\<script\>(\' + setInitialClassState.toString() + \')();\</script\>\'}\</svelte:head\>';
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<!-- <svelte:fragment slot="sandbox"></svelte:fragment> -->

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p class="!text-xl">Skeleton provides two strategies for toggling light and dark mode. Choose your preference.</p>
		<section class="space-y-4">
			<h2 class="h2">Strategy: Class</h2>
			<p>
				We recommend this approach for most users. Please note the Lightswitch copmonent must be present on page load in order to operate.
				For best results, insert this in a fixed element that appears on every page.
			</p>
			<CodeBlock
				language="ts"
				code={`
// tailwind.config.[ts|js|cjs]\n
module.exports = {
  darkMode: 'class', // <-- ADD THIS
  // ...
}
			`}
			/>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<LightSwitch />
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="ts" code={`<LightSwitch />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Strategy: OS Preference</h2>
			<p>
				Skeleton provides a utility method to adjust the mode based on operating system preference. This replaces both the class strategy
				and Lightswitch component.
			</p>
			<div class="alert variant-ghost-surface">
				<p>When adjusting your operating system setting, macOS is the only OS that does not require a browser refresh.</p>
			</div>
			<CodeBlock
				language="ts"
				code={`
// tailwind.config.[ts|js|cjs]\n
module.exports = {
	// darkMode // <-- REMOVE THIS
	// ...
}
		`}
			/>
			<TabGroup regionPanel="space-y-4">
				<Tab bind:group={osTabs} name="interface" value={0}>SSR Enabled</Tab>
				<Tab bind:group={osTabs} name="interface" value={1}>SSR Disabled</Tab>
				<Tab bind:group={osTabs} name="interface" value={2}>Other Frameworks</Tab>
				<svelte:fragment slot="panel">
					{#if osTabs === 0}
						<!-- SSR -->
						<p>First, import the following in <code class="code">/src/routes/+layout.svelte</code>.</p>
						<CodeBlock language="ts" code={`import { autoModeWatcher } from '@skeletonlabs/skeleton';`} />
						<p>In the same file, add the following at the top of the HTML markup.</p>
						<CodeBlock language="html" code={snippetAutoModeWatcher} />
					{:else if osTabs === 1}
						<!-- No SSR -->
						<p>Open <code class="code">/src/routes/+layout.ts</code> and set the <code class="code">ssr</code> value as shown.</p>
						<CodeBlock language="ts" code={`export const ssr = false;`} />
						<p>In the same file, add the following.</p>
						<CodeBlock
							language="ts"
							code={`
import { onMount } from 'svelte';
import { autoModeWatcher } from '@skeletonlabs/skeleton';\n
onMount(() => {										
	autoModeWatcher();
})`}
						/>
					{:else}
						<!-- Other Frameworks -->
						<p>
							If using Skeleton in a framework other than SvelteKit, ensure that <code class="code">autoModeWatcher()</code> is called as a
							script in <code class="code">html</code> head.
						</p>
						<aside class="alert alert-message variant-ghost-warning">
							<p>Please note this use case is not officially supported by Skeleton.</p>
						</aside>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</section>
		<hr />
		<section class="space-y-4">
			<h2 class="h2">Build Your Own Component</h2>
			<!-- Build Your Own -->
			<p>Skeleton exposes all utility methods used within the Lightswitch component. Use these to construct your own!</p>
			<aside class="alert alert-message variant-ghost">
				<p>
					Please consult the Skeleton <a
						class="anchor"
						href="https://github.com/skeletonlabs/skeleton/tree/master/packages/skeleton/src/lib/utilities/LightSwitch"
						target="_blank"
						rel="noreferrer">Lightswitch source code</a
					> for reference.
				</p>
				<!-- prettier-ignore -->
			</aside>
			<h3 class="h3">Set Initial Classes</h3>
			<p>
				Import and add the following to your component. This will set the <code class="code">.dark</code> class on the root HTML element in
				a highly performant manner. Please note that the CLI installer inserts <code class="code">class="dark"</code>
				statically in the <code class="code">html</code> element of app.html and you should remove it when going this route.
			</p>
			<CodeBlock language="ts" code={`import { setInitialClassState } from '@skeletonlabs/skeleton';`} />
			<CodeBlock language="html" code={snippetSetInitClass} />
			<h3 class="h3">Interface Methods</h3>
			<p>
				Light mode is represented by <code class="code">true</code>, while dark mode is represented by
				<code class="code">false</code>.
			</p>
			<TabGroup regionPanel="space-y-4">
				<Tab bind:group={tabInterface} name="interface" value={0}>Stores</Tab>
				<Tab bind:group={tabInterface} name="interface" value={1}>Getters</Tab>
				<Tab bind:group={tabInterface} name="interface" value={2}>Setters</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if tabInterface === 0}
						<!-- Stores -->
						<CodeBlock language="ts" code={`import { modeOsPrefers, modeUserPrefers, modeCurrent } from '@skeletonlabs/skeleton';`} />
						<div class="table-container">
							<table class="table table-hover">
								<thead>
									<tr>
										<th>Store</th>
										<th>Value</th>
										<th>Description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><code class="code">$modeOsPrefers</code></td>
										<td><em>true | false</em></td>
										<td>The current operating system setting preference.</td>
									</tr>
									<tr>
										<td><code class="code">$modeUserPrefers</code></td>
										<td><em>true | false | undefined</em></td>
										<td>The current user's selected preference.</td>
									</tr>
									<tr>
										<td><code class="code">$modeCurrent</code></td>
										<td><em>true | false</em></td>
										<td>The current currently active mode setting.</td>
									</tr>
								</tbody>
							</table>
						</div>
					{:else if tabInterface === 1}
						<!-- Getters -->
						<CodeBlock
							language="ts"
							code={`import { getModeOsPrefers, getModeUserPrefers, getModeAutoPrefers } from '@skeletonlabs/skeleton';`}
						/>
						<div class="table-container">
							<table class="table table-hover">
								<thead>
									<tr>
										<th>Store</th>
										<th>Return Type</th>
										<th>Description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><code class="code">getModeOsPrefers()</code></td>
										<td><em>true | false</em></td>
										<td>Returns the operating system setting preference.</td>
									</tr>
									<tr>
										<td><code class="code">getModeUserPrefers()</code></td>
										<td><em>true | false | undefined</em></td>
										<td>Returns the user's selected preference.</td>
									</tr>
									<tr>
										<td><code class="code">getModeAutoPrefers()</code></td>
										<td><em>true | false</em></td>
										<td>Returns the user preference if available, else the OS preference.</td>
									</tr>
								</tbody>
							</table>
						</div>
					{:else if tabInterface === 2}
						<!-- Setters -->
						<CodeBlock language="ts" code={`import { setModeUserPrefers, setModeCurrent } from '@skeletonlabs/skeleton';`} />
						<div class="table-container">
							<table class="table table-hover">
								<thead>
									<tr>
										<th>Store</th>
										<th>Description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><code class="code">setModeUserPrefers(value)</code></td>
										<td>Set the user preference value.</td>
									</tr>
									<tr>
										<td><code class="code">setModeCurrent(value)</code></td>
										<td>Set the current active mode value.</td>
									</tr>
								</tbody>
							</table>
						</div>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</section>
		<section>
			<h2 class="h2">Reference</h2>
			<aside class="alert alert-message variant-ghost">
				<!-- prettier-ignore -->
				<p>View the Skeleton <a class="anchor" href="https://github.com/skeletonlabs/skeleton/tree/master/packages/skeleton/src/lib/utilities/LightSwitch" target="_blank" rel="noreferrer">Lightswitch component source code</a> for a detailed reference. </p>
			</aside>
		</section>
	</svelte:fragment>
</DocsShell>
