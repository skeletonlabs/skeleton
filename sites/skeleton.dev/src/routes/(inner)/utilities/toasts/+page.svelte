<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	// Toasts
	import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldToast from '@skeletonlabs/skeleton/utilities/Toast/Toast.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Toasts',
		description: 'Simple notifications utilizing a dynamic queue system.',
		imports: ['Toast', 'toastStore'],
		types: ['ToastSettings'],
		source: 'utilities/Toast',
		components: [{ sveld: sveldToast }]
	};

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
				<p>
					Import and add a single instance of the Toast component in your app's root layout. Since this is in global scope it will be
					possible to reuse this feature throughout your entire application.
				</p>
				<CodeBlock language="html" code={`<Toast />`} />
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
		<!-- Toast Store -->
		<section class="space-y-4">
			<h2 class="h2">Toast Store</h2>
			<p>The Modal Store acts as a queue for your toast messages.</p>
			<CodeBlock
				language="ts"
				code={`import { toastStore } from '@skeletonlabs/skeleton';
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
			<!-- Fixed -->
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
			<!-- Clear -->
			<h3 class="h3">Clear</h3>
			<p>Use <code class="code">toastStore.clear()</code> to clear the entire toast store queue.</p>
			<CodeBlock language="ts" code={`toastStore.clear();`} />
		</section>
		<!-- Styling -->
		<section class="space-y-4">
			<h2 class="h2">Styling</h2>
			<p>We recommend applying global styles via the Toast component props. Though you can provide styles per toast instance.</p>
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
		<!-- SvelteKit SSR Warning -->
		<!-- prettier-ignore -->
		<section class="space-y-4">
			<h2 class="h2">SvelteKit SSR Warning</h2>
			<div class="space-y-4">
				<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
					<p>There are known security risks when using Svelte writable stores within SvelteKit load functions.</p>
					<a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton/wiki/SvelteKit-SSR-Warning" target="_blank" rel="noreferrer">Details &rarr;</a>
				</div>
			</div>
		</section>
	</svelte:fragment>
</DocsShell>
