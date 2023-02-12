<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import LightSwitch from '$lib/utilities/LightSwitch/LightSwitch.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';

	import sveldLightSwitch from '$lib/utilities/LightSwitch/LightSwitch.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Lightswitch',
		description: `Allows users to toggle between light and dark themes using <a href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noreferrer">Tailwind's dark mode</a> feature.`,
		imports: ['LightSwitch'],
		source: 'utilities/LightSwitch',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/switch/',
		components: [{ sveld: sveldLightSwitch }],
		keyboard: [['<kbd>Space</kbd> or <kbd>Enter</kbd>', 'Toggle the switch state.']]
	};

	// Local
	let tabInterface: number = 0;
	// prettier-ignore
	const snippetAutoModeWatcher = '{@html `\<script\>${autoModeWatcher.toString()} autoModeWatcher();\</script\>`}';
	// prettier-ignore
	const snippetSetInitClass = '{@html `\<script\>${setInitialClassState.toString()} setInitialClassState();\</script\>`}';
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card variant-glass p-10 flex flex-col justify-center items-center gap-4">
			<LightSwitch />
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>Add the following component. For best results this will be present on page load.</p>
			<CodeBlock language="ts" code={`LightSwitch />`} />
		</section>
		<hr />
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<h2>Using OS Preference</h2>
				<span class="badge variant-ghost">Alternative</span>
			</div>
			<aside class="alert alert-message variant-ghost-warning">
				<p>Use this as an alterative to the <strong>Lightswitch</strong> component, <u>do not</u> mix and match the two.</p>
			</aside>
			<!-- prettier-ignore -->
			<p>
				To automatically adjust the mode based on operating system preference, import the following in <code>/src/routes/+layout.svelte</code>.
			</p>
			<CodeBlock language="ts" code={`import { autoModeWatcher } from '$lib/utilities/LightSwitch/lightswitch';`} />
			<p>Then add the following in your layout markup.</p>
			<CodeBlock language="html" code={snippetAutoModeWatcher} />
		</section>
		<hr />
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<h2>Custom Lightswitch</h2>
				<span class="badge variant-filled-error">Advanced</span>
			</div>
			<!-- prettier-ignore -->
			<p>Skeleton uses <a href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noreferrer">Tailwind's dark mode</a> feature to control light and dark mode. However, we expose all tools used if you wish to create your own custom Lightswitch or interface with the current state.</p>
			<aside class="alert alert-message variant-ghost">
				<!-- prettier-ignore -->
				<p>View the Skeleton <a href="https://github.com/skeletonlabs/skeleton/tree/master/src/lib/utilities/LightSwitch" target="_blank" rel="noreferrer">Lightswitch component source code</a> for a detailed reference. </p>
			</aside>
			<!-- Set Initial Classes -->
			<h3>Set Initial Classes</h3>
			<p>
				Import and add the following to your component. This will set the <code>.dark</code> class on the root HTML element in a highly performant
				manner.
			</p>
			<CodeBlock language="ts" code={`import { setInitialClassState } from '$lib/utilities/LightSwitch/lightswitch';`} />
			<CodeBlock language="html" code={snippetSetInitClass} />
			<!-- Interface Methods -->
			<h3>Interface Methods</h3>
			<p>
				Skeleton provides several options to interface with the lightswitch settings. Note that light mode is <code>true</code>, dark mode
				is
				<code>false</code>.
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
										<td><code>$modeOsPrefers</code></td>
										<td><em>true | false</em></td>
										<td>The current operating system setting preference.</td>
									</tr>
									<tr>
										<td><code>$modeUserPrefers</code></td>
										<td><em>true | false | undefined</em></td>
										<td>The current user's selected preference.</td>
									</tr>
									<tr>
										<td><code>$modeCurrent</code></td>
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
							code={`import { getModeOsPrefers, getModeUserPrefers, getAutoPrefers } from '@skeletonlabs/skeleton';`}
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
										<td><code>getModeOsPrefers()</code></td>
										<td><em>true | false</em></td>
										<td>Returns the operating system setting preference.</td>
									</tr>
									<tr>
										<td><code>getModeUserPrefers()</code></td>
										<td><em>true | false | undefined</em></td>
										<td>Returns the user's selected preference.</td>
									</tr>
									<tr>
										<td><code>getModeAutoPrefers()</code></td>
										<td><em>true | false</em></td>
										<td>Returns the user preference if available, else the OS preference.</td>
									</tr>
								</tbody>
							</table>
						</div>
					{:else if tabInterface === 2}
						<!-- Setters -->
						<CodeBlock language="ts" code={`import { setUserPrefers, setMode } from '@skeletonlabs/skeleton';`} />
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
										<td><code>setModeUserPrefers(value)</code></td>
										<td>Set the user preference value.</td>
									</tr>
									<tr>
										<td><code>setModeCurrent(value)</code></td>
										<td>Set the current active mode value.</td>
									</tr>
								</tbody>
							</table>
						</div>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</section>
	</svelte:fragment>
</DocsShell>
