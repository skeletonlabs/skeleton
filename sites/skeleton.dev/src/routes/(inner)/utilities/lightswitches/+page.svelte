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
		description: `Components and utilities to toggle <a class="anchor" href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noreferrer">Tailwind's dark mode</a>.`,
		imports: ['LightSwitch'],
		source: 'utilities/LightSwitch',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/switch/',
		components: [{ sveld: sveldLightSwitch }],
		keyboard: [['<kbd class="kbd">Space</kbd> or <kbd class="kbd">Enter</kbd>', 'Toggle the switch state.']]
	};

	// Local
	let tabSection = 0;
	let tabInterface = 0;
	// prettier-ignore
	const snippetAutoModeWatcher = '\<svelte:head\>{@html `\<script\>${autoModeWatcher.toString()} autoModeWatcher();\</script\>`}\</svelte:head\>';
	// prettier-ignore
	const snippetSetInitClass = '\<svelte:head\>{@html `\<script\>(${setInitialClassState.toString()})();\</script\>`}\</svelte:head\>';
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<!-- <svelte:fragment slot="sandbox"></svelte:fragment> -->

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Skeleton provides multiple methods for toggling light and dark mode within your application. We recommend you select one method and
				utilize that as your primary solution for your application.
			</p>
			<TabGroup regionPanel="space-y-4">
				<Tab bind:group={tabSection} name="section" value={0}>Lightswitch</Tab>
				<Tab bind:group={tabSection} name="section" value={1}>OS Preference</Tab>
				<Tab bind:group={tabSection} name="section" value={2}>Build Your Own</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if tabSection === 0}
						<!-- Lightswitch Component -->
						<DocsPreview>
							<svelte:fragment slot="preview">
								<LightSwitch />
							</svelte:fragment>
							<svelte:fragment slot="source">
								<CodeBlock language="ts" code={`<LightSwitch />`} />
							</svelte:fragment>
						</DocsPreview>
						<p>
							For most users we recommend using the Lightswitch component. Please note this must be present on page load in order to
							operate. It is best suited within a fixed header element that's always visible on the page.
						</p>
					{:else if tabSection === 1}
						<!-- OS Preference -->
						<p>
							Alternatively, Skeleton provides a utility method to adjust the mode based on operating system preference. Use this in place
							of a Lightswitch component.
						</p>
						<p>First, import the following in <code class="code">/src/routes/+layout.svelte</code>.</p>
						<CodeBlock language="ts" code={`import { autoModeWatcher } from '@skeletonlabs/skeleton';`} />
						<p>Then add the following in your root layout template markup.</p>
						<CodeBlock language="html" code={snippetAutoModeWatcher} />
						<p>Note that Mac OS will update immediately, while other operating systems require a browser refresh.</p>
					{:else if tabSection === 2}
						<!-- Build Your Own -->
						<p>
							Finally, Skeleton provides utility methods to interface with the all settings and data the Lightswitch uses under the hood.
							This provides a way for you to generate a custom toggle interface.
						</p>
						<h2 class="h2">Set Initial Classes</h2>
						<p>
							Import and add the following to your component. This will set the <code class="code">.dark</code> class on the root HTML element
							in a highly performant manner.
						</p>
						<CodeBlock language="ts" code={`import { setInitialClassState } from '@skeletonlabs/skeleton';`} />
						<CodeBlock language="html" code={snippetSetInitClass} />
						<h2 class="h2">Interface Methods</h2>
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
						<h2 class="h2">Reference</h2>
						<aside class="alert alert-message variant-ghost">
							<!-- prettier-ignore -->
							<p>View the Skeleton <a class="anchor" href="https://github.com/skeletonlabs/skeleton/tree/master/src/lib/utilities/LightSwitch" target="_blank" rel="noreferrer">Lightswitch component source code</a> for a detailed reference. </p>
						</aside>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</section>
	</svelte:fragment>
</DocsShell>
