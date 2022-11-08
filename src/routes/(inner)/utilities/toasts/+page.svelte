<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import type { ToastSettings } from '$lib/utilities/Toast/types';
	import { toastStore } from '$lib/utilities/Toast/stores';

	// @ts-ignore
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
		const t: ToastSettings = { message: '👋 Hello and welcome to Skeleton.' };
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
		toastStore.trigger({ message: 'Message will last 2 second.', timeout: 2000 });
		toastStore.trigger({ message: 'Message will remain until dismissed.' });
		toastStore.trigger({ message: 'Message will auto-hide after 5 seconds.' });
	}

	function toastStyled(): void {
		const t: ToastSettings = {
			message: 'This message will have a warning color background.',
			classes: 'bg-warning-500'
		};
		toastStore.trigger(t);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card card-body">
			<div class="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-[640px] mx-auto">
				<button class="btn btn-ghost-surface" on:click={toastBasic}>Basic</button>
				<button class="btn btn-ghost-surface" on:click={toastParagraph}>Paragraph</button>
				<button class="btn btn-ghost-surface" on:click={toastAction}>Action</button>
				<button class="btn btn-ghost-surface" on:click={toastMultiple}>Multiple</button>
				<button class="btn btn-ghost-surface" on:click={toastStyled}>Styled</button>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<p>Import and add a single instance of the Toast component in your app's root layout. This is only required ONCE per app since it exists in global scope.</p>
			<CodeBlock language="html" code={`<Toast />`} />
		</div>
		<!-- Toast Store -->
		<div class="space-y-4">
			<h2>Toast Store</h2>
			<p>The Dialog Store acts as a queue for your toast messages.</p>
			<CodeBlock
				language="ts"
				code={`import { toastStore } from '@brainandbones/skeleton';
			`}
			/>
			<!-- Trigger -->
			<h3>Trigger</h3>
			<p>To add a message to your queue, use the <code>toastStore.trigger()</code> method and pass a toast settings object.</p>
			<CodeBlock
				language="ts"
				code={`
function triggerToast(): void {
	const t: ToastSettings = {
		message: '👋 Hello and welcome to Skeleton.'
		// Optional: Set whether the toast will automatically and timeout duration
		autohide: true,
		timeout: 5000,
		// Optional: Create an action button
		action: {
			label: 'Greeting',
			response: () => alert('Hello, Skeleton')
		}
	};
	toastStore.trigger(t);
}
			`}
			/>
			<!-- Clear -->
			<h3>Clear</h3>
			<p>Use the <code>toastStore.clear()</code> to clear the entire toast store queue.</p>
			<CodeBlock language="ts" code={`toastStore.clear();`} />
			<!-- Debug -->
			<h3>Debug</h3>
			<p>You can visualize the contents of the store at any time, which can be helpful for debugging.</p>
			<CodeBlock language="html" code={`<pre>queue: {JSON.stringify($toastStore, null, 2)}</pre>`} />
		</div>
		<!-- Styled -->
		<div class="space-y-4">
			<h2>Styled</h2>
			<p>To customize an individual toast, append <code>classes</code> to your settings and add CSS classes you wish to be applied to the toast.</p>
			<CodeBlock
				language="ts"
				code={`
const t: ToastSettings = {
	message: 'This message will have a warning color background.',
	classes: 'bg-warning-500'
};
			`}
			/>
		</div>
	</svelte:fragment>
</DocsShell>
