<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { CodeBlock, SlideToggle, focusTrap } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Action,
		name: 'Focus Trap',
		description: 'Allows you to contain tab focus within a target element on-demand.',
		imports: ['focusTrap'],
		source: 'packages/skeleton/src/lib/actions/FocusTrap',
		parameters: [
			['<code class="code">(default)</code>', 'boolean', '-', '-', `When TRUE, enables focus capture.`],
			['<code class="code">enabled</code>', 'boolean', '-', '-', `When TRUE, enables focus capture.`],
			['<code class="code">tabIndex</code>', 'string', '-', '-', `Index of the element to focus on.`]
		]
	};

	// Local
	let isFocused = false;
	let isFocusedSpecified = false;
	$: console.log(isFocused);
	$: console.log(isFocusedSpecified);
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
		<!-- Specifying Focus -->
		<div class="space-y-4">
			<h2 class="h2">Specifying the target of the focus</h2>
			<p>
				Sometimes, you just don't want the first focusable element to get the focus. You can add <code class="code">data-tabindex</code> attributes
				to the elements you may want to focus, and pass an object to focusTrap() instead of a boolean.
			</p>

			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<form class="w-full card p-4 text-token space-y-4" use:focusTrap={{ enabled: isFocusedSpecified, tabIndex: '2' }}>
						<label class="label">
							<span>Name</span>
							<input data-tabindex="1" class="input" type="text" placeholder="Enter name..." />
						</label>
						<label class="label">
							<span>Email</span>
							<input data-tabindex="2" class="input" type="email" placeholder="Enter email address..." />
						</label>
						<div class="text-right">
							<button class="btn variant-filled">Submit Form</button>
						</div>
					</form>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="text-center">
						<SlideToggle name="trap-focus" bind:checked={isFocusedSpecified}>Enable Specified Focus Trap</SlideToggle>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="ts" code={`let isFocusedSpecified: boolean = true;`} />
					<CodeBlock
						language="html"
						code={`
<form use:focusTrap={{ enabled: isFocusedSpecified, tabIndex: '2' }}>
	<input data-tabindex="1" type="text" placeholder="Name" />
	<input data-tabindex="2" type="email" placeholder="Email" />
	<button class="btn variant-filled-primary">Submit</button>
</form>
							`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</div>
		<section class="space-y-4">
			<h2 class="h2">Navigation</h2>
			<p>
				When enabled this action will auto-select the first focusable element or the specified target. Press <kbd class="kbd">Tab</kbd> or
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
