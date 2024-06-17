<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';

	// Toasts
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	const toastStore = getToastStore();

	// Sveld
	import sveldToast from '@skeletonlabs/skeleton/utilities/Toast/Toast.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Toasts',
		description: 'Simple notifications utilizing a dynamic queue system.',
		imports: ['Toast', 'getToastStore'],
		types: ['ToastSettings', 'ToastStore'],
		source: 'packages/skeleton/src/lib/utilities/Toast',
		components: [{ sveld: sveldToast }],
		transitionIn: 'fly',
		transitionOut: 'fly'
	};

	// Local
	let toastId = '';

	// Triggers Toasts ---

	function toastDemo(): void {
		const t: ToastSettings = {
			message: '👋 Hello and welcome to Skeleton.',
			callback: (response) => console.log(response)
		};
		toastStore.trigger(t);
	}

	function toastDemoMulti(): void {
		toastStore.trigger({ message: 'Message will auto-hide after 2 seconds.', timeout: 2000 });
		toastStore.trigger({ message: 'Message will auto-hide after 4 seconds.', timeout: 4000 });
		toastStore.trigger({ message: 'Message will auto-hide after 6 seconds.', timeout: 6000 });
		toastStore.trigger({ message: 'Message will remain until dismissed.', autohide: false });
	}

	function toastBasic(): void {
		const t: ToastSettings = {
			message:
				// cspell:disable-next-line
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequuntur, blanditiis ducimus perspiciatis minima odit repellat rem iste incidunt laborum amet culpa officia maiores eum qui asperiores.',
			autohide: false
		};
		toastStore.trigger(t);
	}

	function toastAction(): void {
		const t: ToastSettings = {
			message: 'Message contains a unique action.',
			autohide: false,
			action: {
				label: 'Greeting',
				response: () => alert('Hello, Skeleton')
			}
		};
		toastStore.trigger(t);
	}

	function toastPersist(): void {
		const t: ToastSettings = {
			message: 'This message will remain until dismissed.',
			autohide: false
		};
		toastStore.trigger(t);
	}

	function toastTimeout(): void {
		const t: ToastSettings = {
			message: 'This message will auto-hide after 10 seconds.',
			timeout: 10000
		};
		toastStore.trigger(t);
	}

	function toastHiddenDismiss(): void {
		const t: ToastSettings = {
			message: 'The dismiss button is hidden.',
			hideDismiss: true,
			timeout: 10000
		};
		toastStore.trigger(t);
	}

	function toastRemainVisibleOnHover(): void {
		const t: ToastSettings = {
			message: 'remain visible on hover.',
			timeout: 5000,
			hoverable: true
		};
		toastStore.trigger(t);
	}

	function toastCloseProgrammatically(): void {
		const t: ToastSettings = {
			message: 'Programmatically closable toast',
			autohide: false
		};
		toastId = toastStore.trigger(t);
	}

	function closeToast(): void {
		toastStore.close(toastId);
	}

	function toastBackground(background: string): void {
		const t: ToastSettings = {
			message: `The background was set as <u>${background}</u>.`,
			background
		};
		toastStore.trigger(t);
	}
	function toastStyled(): void {
		const t: ToastSettings = {
			message: 'This message has custom styles.',
			background: 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white',
			// Add your custom classes here:
			classes: 'border-4 border-purple-500'
		};
		toastStore.trigger(t);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="flex gap-4">
					<button class="btn variant-filled" on:click={toastDemo}>Simple</button>
					<button class="btn variant-filled" on:click={toastDemoMulti}>Queue Multiple</button>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<p>There are several steps involved to utilize this feature. Please refer to the documented instructions below.</p>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- prettier-ignore -->
		<aside class="alert alert-message variant-ghost-warning">
			<p>
				This feature uses the <a class="anchor" href="https://en.wikipedia.org/wiki/Singleton_pattern" target="_blank" rel="noreferrer">Singleton pattern</a>, meaning you should aim to implement a <u>single instance of the component per project</u>, but it will remain globally scoped
				and reusable via a Svelte writable store. Do not reimplement this component for each route page.
			</p>
		</aside>
		<section class="space-y-4">
			<h2 class="h2">Prerequisites</h2>
			<h3 class="h3">Initialize Stores</h3>
			<!-- prettier-ignore -->
			<p>
				Implement the following in the root layout of your application. This is required only once when implementing Skeleton's Drawer, Modal, and Toast stores and will prevent known issues with <a class="anchor" href="https://github.com/skeletonlabs/skeleton/wiki/SvelteKit-SSR-Warning" target="_blank">SvelteKit SSR</a>.
			</p>
			<CodeBlock language="ts" code={`import { initializeStores } from '@skeletonlabs/skeleton';\n\ninitializeStores();`} />
			<h3 class="h3">Toast Component</h3>
			<p>Implement a single instance of the toast component in your app's root layout, above the App Shell (if present).</p>
			<CodeBlock language="html" code={`<Toast />\n\n<!-- <AppShell>...</AppShell> -->`} />
			<p>We'll cover triggering this feature on-demand in the documentation below.</p>
		</section>
		<!-- Toast Store -->
		<section class="space-y-4">
			<h2 class="h2">Toast Store</h2>
			<p>The Toast Store acts as a queue for your toast messages.</p>
			<blockquote class="blockquote">
				NOTE: To retrieve the store, <code class="code">getToastStore</code> must be invoked at the <u>top level</u> of your component!
			</blockquote>
			<CodeBlock
				language="ts"
				code={`import { getToastStore } from '@skeletonlabs/skeleton';\n\nconst toastStore = getToastStore();
			`}
			/>
			<!-- Trigger -->
			<h3 class="h3">Trigger</h3>
			<p>To add a message to the queue, use the <code class="code">toastStore.trigger()</code> method and pass a toast settings object.</p>
			<!-- Basic -->
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<button class="btn variant-filled" on:click={toastBasic}>Basic Toast</button>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<!-- cspell:disable -->
					<CodeBlock
						language="ts"
						code={`
const t: ToastSettings = {
	message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
};
toastStore.trigger(t);
`}
					/>
					<!-- cspell:enable -->
				</svelte:fragment>
			</DocsPreview>
			<!-- Action -->
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<button class="btn variant-filled" on:click={toastAction}>Action Toast</button>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const t: ToastSettings = {
	message: 'Message contains a unique action.',
	action: {
		label: 'Greeting',
		response: () => alert('Hello, Skeleton')
	}
};
toastStore.trigger(t);
`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<h3 class="h3">Timing</h3>
			<p>Use the following setting to adjust the toast timing.</p>
			<!-- No Timeout -->
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="flex gap-4">
						<button class="btn variant-filled" on:click={toastPersist}>No Timeout</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const t: ToastSettings = {
	message: 'This message will remain until dismissed.',
	autohide: false
};
toastStore.trigger(t);
`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<!-- Timeout -->
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="flex gap-4">
						<button class="btn variant-filled" on:click={toastTimeout}>Adjusted Timeout</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const t: ToastSettings = {
	message: 'This message will auto-hide after 10 seconds.',
	timeout: 10000
};
toastStore.trigger(t);
`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<h3 class="h3">Dismiss</h3>
			<p>
				Use the <code class="code">hideDismiss</code> option to disable the dismiss button. When using this setting
				<code class="code">autohide</code> option enabled by default.
			</p>
			<!-- Hidden dismiss -->
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="flex gap-4">
						<button class="btn variant-filled" on:click={toastHiddenDismiss}>Hide Dismiss</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const t: ToastSettings = {
	message: 'The dismiss button is hidden.',
	hideDismiss: true,
	timeout: 10000
};
toastStore.trigger(t);
`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<h3 class="h3">Hover State</h3>
			<p>Use the <code class="code">hoverable</code> option to keep the toast visible while hovering with a mouse cursor.</p>
			<!-- remain visible on hover -->
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="flex gap-4">
						<button class="btn variant-filled" on:click={toastRemainVisibleOnHover}>Visible on Hover</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const t: ToastSettings = {
	message: 'remain visible on hover.',
	timeout: 5000,
	hoverable: true
};
toastStore.trigger(t);
`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<!-- Clear -->
			<h3 class="h3">Clear</h3>
			<p>Use <code class="code">toastStore.clear()</code> to clear the entire toast store queue.</p>
			<CodeBlock language="ts" code={`toastStore.clear();`} />
		</section>
		<!-- Programmatic -->
		<section class="space-y-4">
			<h2 class="h2">Programmatic</h2>
			<p>Create a reference for your toast so that you may programmatically close it on demand.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="flex gap-4">
						<button class="btn variant-filled" on:click={toastCloseProgrammatically}>Show</button>
						<button class="btn variant-filled-error" on:click={closeToast}>Close</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const t: ToastSettings = {
	message: 'Programmatically closable toast',
};
toastId = toastStore.trigger(t);

// close toast
toastStore.close(toastId);
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Styling -->
		<section class="space-y-4">
			<h2 class="h2">Styling</h2>
			<p>We recommend applying global styles via the Toast component props. However, you may also provide styles per toast instance.</p>
			<h3 class="h3">Backgrounds</h3>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<!-- prettier-ignore -->
					<div class="grid grid-cols-3 gap-4">
						<button class="btn variant-filled" on:click={() => {toastBackground('variant-filled-primary')}}>Primary</button>
						<button class="btn variant-filled" on:click={() => {toastBackground('variant-filled-secondary')}}>Secondary</button>
						<button class="btn variant-filled" on:click={() => {toastBackground('variant-filled-tertiary')}}>Tertiary</button>
						<button class="btn variant-filled" on:click={() => {toastBackground('variant-filled-success')}}>Success</button>
						<button class="btn variant-filled" on:click={() => {toastBackground('variant-filled-warning')}}>Warning</button>
						<button class="btn variant-filled" on:click={() => {toastBackground('variant-filled-error')}}>Error</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p>
						You can directly control the background styling for each toasting using <code class="code">background.</code>. Accepts utility
						and variant classes.
					</p>
					<CodeBlock
						language="ts"
						code={`
const t: ToastSettings = {
	message: 'This message will have a colorful background.',
	// Provide any utility or variant background style:
	background: 'variant-filled-warning',
};
`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<h3 class="h3">Custom Styles</h3>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<button class="btn variant-filled" on:click={toastStyled}>Styled</button>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p>
						Append <code class="code">classes</code> to your toast settings to provide any arbitrary classes.
					</p>
					<CodeBlock
						language="ts"
						code={`
const t: ToastSettings = {
	message: 'This message has custom styles.',
	background: 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white',
	// Add your custom classes here:
	classes: 'border-4 border-purple-500'
};
`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<h3 class="h3">Positioning</h3>
			<p>
				Skeleton takes an opinionated stance on positioning, preferring to keep toast notifications in fixed location on your page. This
				position can be modified globally the <code class="code">position</code> property on the Toast component. However, we do not allow you
				to modify this per toast instance as we feel this would provide inconsistent UX.
			</p>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Callbacks</h2>
			<p>
				You can optionally add a callback function to your <code class="code">ToastSettings</code> to receive the unique ID assigned to each
				toast, as well as listen for when the <code class="code">queued</code> and <code class="code">closed</code> lifecycle events occur for
				that toast message.
			</p>
			<CodeBlock
				language="ts"
				code={`
const t: ToastSettings = {
	// ...
	callback: (response) => {
		console.log(response.id);
		if (response.status === 'queued') console.log('Toast was queued!');
		if (response.status === 'closed') console.log('Toast was closed!');
	}
};
`}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
