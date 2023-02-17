<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import type { ToastSettings } from '$lib/utilities/Toast/types';
	import { toastStore } from '$lib/utilities/Toast/stores';

	import sveldToast from '$lib/utilities/Toast/Toast.svelte?raw&sveld';

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

	function toastBasic(): void {
		const t: ToastSettings = {
			message: '👋 Hello and welcome to Skeleton.',
			callback: (response) => console.log(response)
		};
		toastStore.trigger(t);
	}

	function toastParagraph(): void {
		const t: ToastSettings = {
			message:
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

	function toastMultiple(): void {
		toastStore.trigger({ message: 'Message will auto-hide after 2 seconds.', timeout: 2000 });
		toastStore.trigger({ message: 'Message will auto-hide after 4 seconds.', timeout: 4000 });
		toastStore.trigger({ message: 'Message will auto-hide after 6 seconds.', timeout: 6000 });
		toastStore.trigger({ message: 'Message will remain until dismissed.', autohide: false });
	}

	function toastPreset(background: string): void {
		const t: ToastSettings = {
			message: `The background was set as <u>${background}</u>.`,
			background
		};
		toastStore.trigger(t);
	}
	function toastStyled(): void {
		const t: ToastSettings = {
			message: 'This message has custom styles.',
			classes: 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white'
		};
		toastStore.trigger(t);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="space-y-4">
			<section class="card variant-glass p-4">
				<div class="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-[700px] mx-auto">
					<button class="btn variant-filled" on:click={toastBasic}>Basic</button>
					<button class="btn variant-filled" on:click={toastParagraph}>Paragraph</button>
					<button class="btn variant-filled" on:click={toastAction}>Action</button>
					<button class="btn variant-filled" on:click={toastMultiple}>Multiple</button>
					<button class="btn variant-filled" on:click={toastStyled}>Styled</button>
				</div>
			</section>
			<section class="card variant-glass p-4">
				<!-- prettier-ignore -->
				<div class="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-[700px] mx-auto">
					<button class="btn variant-filled" on:click={() => {toastPreset('variant-filled-primary')}}>Primary</button>
					<button class="btn variant-filled" on:click={() => {toastPreset('variant-filled-secondary')}}>Secondary</button>
					<button class="btn variant-filled" on:click={() => {toastPreset('variant-filled-tertiary')}}>Tertiary</button>
					<button class="btn variant-filled" on:click={() => {toastPreset('variant-filled-success')}}>Success</button>
					<button class="btn variant-filled" on:click={() => {toastPreset('variant-filled-warning')}}>Warning</button>
					<button class="btn variant-filled" on:click={() => {toastPreset('variant-filled-error')}}>Error</button>
				</div>
			</section>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- prettier-ignore -->
		<aside class="alert alert-message variant-ghost-warning">
			<p>
				This feature uses a <a href="https://en.wikipedia.org/wiki/Singleton_pattern" target="_blank" rel="noreferrer">Singleton pattern</a>. Meaning you should aim to implement a <u>single instance of the component per project</u>, but it will remain globally scoped
				and reusable via a Svelte writable store. Do not reimplement this component for each route page.
			</p>
		</aside>
		<section class="space-y-4">
			<p>
				Import and add a single instance of the Toast component in your app's root layout. Since this is in global scope it will be possible
				to reuse this feature throughout your entire application.
			</p>
			<CodeBlock language="html" code={`<Toast />`} />
		</section>
		<!-- Toast Store -->
		<section class="space-y-4">
			<h2>Toast Store</h2>
			<p>The Modal Store acts as a queue for your toast messages.</p>
			<CodeBlock
				language="ts"
				code={`import { toastStore } from '@skeletonlabs/skeleton';
			`}
			/>
			<!-- Trigger -->
			<h3>Trigger</h3>
			<p>To add a message to the queue, use the <code>toastStore.trigger()</code> method and pass a toast settings object.</p>
			<CodeBlock
				language="ts"
				code={`
function triggerToast(): void {
	const t: ToastSettings = {
		message: '👋 Hello and welcome to Skeleton.',
		// Optional: Presets for primary | secondary | tertiary | warning
		preset: 'primary',
		// Optional: The auto-hide settings
		autohide: true,
		timeout: 5000,
		// Optional: Adds a custom action button
		action: {
			label: 'Greeting',
			response: () => alert('Hello, Skeleton')
		}
		// Optional: Set a callback method
		callback: (response) => console.log(response)
	};
	toastStore.trigger(t);
}
			`}
			/>
			<!-- Clear -->
			<h3>Clear</h3>
			<p>Use <code>toastStore.clear()</code> to clear the entire toast store queue.</p>
			<CodeBlock language="ts" code={`toastStore.clear();`} />
			<!-- Debug -->
			<h3>Debug</h3>
			<p>Use the following technique to visualize the contents of the store for debugging.</p>
			<CodeBlock language="html" code={`<pre>queue: {JSON.stringify($toastStore, null, 2)}</pre>`} />
		</section>
		<!-- Styling -->
		<section class="space-y-4">
			<h2>Styling</h2>
			<h3>Backgrounds</h3>
			<p>
				You can directly control the background styling for each toasting using <code>background.</code>. This accepts utility classes and
				variant styles.
			</p>
			<CodeBlock
				language="ts"
				code={`
const t: ToastSettings = {
	message: 'This message will have a colorful background.',
	// Provide any background class
	preset: 'variant-filled-warning',
};
			`}
			/>
			<h3>Custom Styles</h3>
			<p>
				To customize an individual toast, append <code>classes</code> to your settings and add CSS classes you wish to be applied to the toast.
			</p>
			<CodeBlock
				language="ts"
				code={`
const t: ToastSettings = {
	message: 'This message will have a colorful background.',
	background: 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white',
	// Add your custom classes here:
	classes: 'border-token border-purple-500'
};
			`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Callbacks</h2>
			<p>
				You can optionally add a callback function to your <code>ToastSettings</code> to receive the unique ID assigned to each toast, as
				well as listen for when the <code>queued</code> and <code>closed</code> lifecycle events occur for that toast message.
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
