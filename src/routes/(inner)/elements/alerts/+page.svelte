<script lang="ts">
	import { fade } from 'svelte/transition';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Alerts',
		description: 'Display customizable alerts to garner attention and provide critical actions.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/alerts'],
		source: 'styles/elements/alerts.css',
		classes: [
			['<code>alert</code>', '-', 'Provide basic alert styles to a block element.'],
			['<code>alert-message</code>', '-', 'The message body styles, contains a title and message.'],
			['<code>alert-actions</code>', '-', 'The message action styles, contains buttons.'],
			['<code>alert-[color]</code>', '<a href="/guides/themes/colors">Theme Colors</a>', 'Set the alert variant styles.']
		]
	};

	// Local
	let visible = true;
	let message =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, cupiditate eveniet in neque magnam quos ad cumque quae numquam voluptatum magni atque vitae dolore voluptatibus.';

	// Functions
	function triggerAction(): void {
		alert('Action button was triggered!');
	}
	function toggleVisible(): void {
		visible = !visible;
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="space-y-4">
			<!-- Default -->
			<div class="card p-4 space-y-4">
				<!-- Primary -->
				<div class="text-center">
					<button class="btn btn-filled-secondary" on:click={toggleVisible}>Toggle {!visible ? 'On' : 'Off'}</button>
				</div>
				{#if visible}
					<aside class="alert" transition:fade|local={{ duration: 200 }}>
						<i class="fa-solid fa-triangle-exclamation text-4xl" />
						<div class="alert-message">
							<h3>Warning</h3>
							<p>{message}</p>
						</div>
						<div class="alert-actions">
							<button class="btn btn-filled-warning" on:click={triggerAction}>Action</button>
							<button class="btn-icon btn-ghost-warning" on:click={toggleVisible}>
								<i class="fa-solid fa-xmark" />
							</button>
						</div>
					</aside>
				{/if}
				<!-- Success / Error -->
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<aside class="alert alert-primary">
						<h3 class="alert-message">Primary</h3>
						<button class="btn btn-filled-primary" on:click={triggerAction}>Action</button>
					</aside>
					<aside class="alert alert-secondary">
						<h3 class="alert-message">Secondary</h3>
						<button class="btn btn-filled-secondary" on:click={triggerAction}>Action</button>
					</aside>
					<aside class="alert alert-tertiary">
						<h3 class="alert-message">Tertiary</h3>
						<button class="btn btn-filled-tertiary" on:click={triggerAction}>Action</button>
					</aside>
					<aside class="alert alert-surface">
						<h3 class="alert-message">Surface</h3>
						<button class="btn btn-filled-surface" on:click={triggerAction}>Action</button>
					</aside>
					<aside class="alert alert-success">
						<i class="fa-solid fa-circle-check text-2xl" />
						<h3 class="alert-message">Success</h3>
						<button class="btn btn-filled-success" on:click={triggerAction}>Action</button>
					</aside>
					<aside class="alert alert-error">
						<i class="fa-solid fa-circle-xmark text-2xl" />
						<h3 class="alert-message">Error</h3>
						<button class="btn btn-filled-error" on:click={triggerAction}>Action</button>
					</aside>
				</div>
			</div>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>Create an element with the <code>.alert</code> class. Wrap in a Svelte <em>if</em> statement to handle the visible state.</p>
			<CodeBlock language="ts" code={`let visible: boolean = true;`} />
			<CodeBlock
				language="html"
				code={`
{#if visible}
    <aside class="alert">
        <!-- Icon -->
        <div>(icon)</div>
        <!-- Message -->
        <div class="alert-message">
            <h3>(title)</h3>
            <p>{message}</p>
        </div>
        <!-- Actions -->
        <div class="alert-actions">(buttons)</div>
    </aside>
{/if}
            `}
			/>
			<h3>Message Content</h3>
			<p>Use the <code>.alert-message</code> to create a vertical set of text information that fills the available width of the alert.</p>
			<CodeBlock language="html" code={`<div class="alert-message">\n\t<h3>(title)</h3>\n\t<p>{message}</p>\n</div>`} />
			<CodeBlock language="html" code={`<h3 class="alert-message">(title)</h3>`} />
			<h3>Action Buttons</h3>
			<p>Use the <code>.alert-actions</code> to create a trailing area to house interactive action buttons.</p>
			<CodeBlock language="html" code={`<div class="alert-actions">(buttons)</div>`} />
		</section>
		<section class="space-y-4">
			<h2>Using Variants</h2>
			<p>
				The alert will use <em>warning</em> colors by default. Append the <code>.alert-[color]</code> variant adjust the color styles.
			</p>
			<CodeBlock language="html" code={`<div class="alert alert-primary">...</div>`} />
		</section>
		<section class="space-y-4">
			<h2>Adding Animations</h2>
			<!-- prettier-ignore -->
			<p><a href="https://svelte.dev/tutorial/transition" target="_blank" rel="noreferrer">Svelte Transitions</a> can provide smooth transitions when the alert state changes.</p>
			<CodeBlock language="html" code={`<aside class="alert" transition:fade|local={{ duration: 200 }}>...</div>`} />
		</section>
	</svelte:fragment>
</DocsShell>
