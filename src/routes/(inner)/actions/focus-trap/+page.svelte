<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import { focusTrap } from '$lib/actions/FocusTrap/focusTrap';

	let isFocused = false;

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Action,
		name: 'Focus Trap',
		description: 'Allows you to contain focus within elements on-demand.',
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
				<SlideToggle bind:checked={isFocused}>Trap Focus</SlideToggle>
			</div>
			<!-- Form -->
			<form class="border border-surface-500 p-4 space-y-4 rounded-container-token" use:focusTrap={isFocused}>
				<label>
					<span>Name</span>
					<input type="text" placeholder="Enter name..." />
				</label>
				<label>
					<span>Phone Number</span>
					<input type="tel" placeholder="Enter phone..." />
				</label>
				<label>
					<span>Email</span>
					<input type="email" placeholder="Enter email address..." />
				</label>
				<button class="btn btn-filled-primary">Submit</button>
			</form>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<p>
				Apply <code>use:focusTrap</code> and set the value to <code>true</code> to trap focus, and <code>false</code> to release focus. This
				will auto-select the first focusable element when activated.
			</p>
			<CodeBlock language="html" code={`<div use:focusTrap={true}>Skeleton</div>`} />
		</div>
	</svelte:fragment>
</DocsShell>
