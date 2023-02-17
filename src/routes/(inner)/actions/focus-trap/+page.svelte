<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import { focusTrap } from '$lib/actions/FocusTrap/focusTrap';

	let isFocused = false;

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Action,
		name: 'Focus Trap',
		description: 'Allows you to contain tab focus within a target element on-demand.',
		imports: ['focusTrap'],
		source: 'actions/FocusTrap',
		parameters: [['<code>(default)</code>', 'boolean', '-', '-', `When TRUE, enables focus capture.`]]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card p-4 space-y-4">
			<!-- Toggle -->
			<div class="text-center">
				<SlideToggle name="trap-focus" bind:checked={isFocused}>Trap Focus</SlideToggle>
			</div>
			<!-- Form -->
			<form class="variant-ringed p-4 space-y-4 rounded-container-token" use:focusTrap={isFocused}>
				<label class="label">
					<span>Name</span>
					<input class="input" type="text" placeholder="Enter name..." />
				</label>
				<label class="label">
					<span>Phone Number</span>
					<input class="input" type="tel" placeholder="Enter phone..." />
				</label>
				<label class="label">
					<span>Email</span>
					<input class="input" type="email" placeholder="Enter email address..." />
				</label>
				<button class="btn variant-filled-primary">Submit Form</button>
			</form>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Apply <code>use:focusTrap</code> then set either <code>true</code> or <code>false</code> to enable or disable focus.
			</p>
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
		</section>
		<section class="space-y-4">
			<h2>Navigation</h2>
			<p>
				When enabled this action will auto-select the first focusable element. Press <kbd>Tab</kbd> or <kbd>Shift + Tab</kbd> to cycle through
				focusable elements within the target region. When the last item is reached focus will loop to the start, and vice versa.
			</p>
		</section>
		<section class="space-y-4">
			<h2>Focusing Overlays</h2>
			<p>
				Skeleton automatically enables this action for overlays such as <a href="/utilities/modals">modals</a> and
				<a href="/utilities/drawers">drawers</a> to aid accessability.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
