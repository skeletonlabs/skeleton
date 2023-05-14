<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { CodeBlock, SlideToggle, focusTrap } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Action,
		name: 'Focus Trap',
		description: 'Allows you to contain tab focus within a target element on-demand.',
		imports: ['focusTrap'],
		source: 'actions/FocusTrap',
		parameters: [['<code class="code">(default)</code>', 'boolean', '-', '-', `When TRUE, enables focus capture.`]]
	};

	// Local
	let isFocused = false;
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<form class="w-full card p-4 text-token space-y-4" use:focusTrap={isFocused}>
					<label class="label">
						<span>Name</span>
						<input class="input" type="text" placeholder="Enter name..." />
					</label>
					<label class="label">
						<span>Email</span>
						<input class="input" type="email" placeholder="Enter email address..." />
					</label>
					<div class="text-right">
						<button class="btn variant-filled">Submit Form</button>
					</div>
				</form>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<div class="text-center">
					<SlideToggle name="trap-focus" bind:checked={isFocused}>Enable Focus Trap</SlideToggle>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="ts" code={`let isFocused: boolean = true;`} />
				<CodeBlock
					language="html"
					code={`
<form use:focusTrap={isFocused}>
	<input type="text" placeholder="Name" />
	<button class="btn variant-filled-primary">Submit</button>
</form>
`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>
			Apply <code class="code">use:focusTrap</code>and then set the action value to either <code class="code">true</code> or
			<code class="code">false</code> to enable or disable focus.
		</p>
		<section class="space-y-4">
			<h2 class="h2">Navigation</h2>
			<p>
				When enabled this action will auto-select the first focusable element. Press <kbd class="kbd">Tab</kbd> or
				<kbd class="kbd">Shift + Tab</kbd> to cycle through focusable elements within the target region. When the last item is focused, it will
				loop to the start, and vice versa.
			</p>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Focusing Overlays</h2>
			<p>
				Skeleton automatically enables this action for overlays such as <a class="anchor" href="/utilities/modals">modals</a> and
				<a class="anchor" href="/utilities/drawers">drawers</a> to aid accessibility.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
