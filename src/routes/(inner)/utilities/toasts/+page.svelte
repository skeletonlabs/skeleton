<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import { toastStore, type ToastMessage } from '$lib/utilities/Toast/stores';

	// @ts-ignore
	import sveldToast from '$lib/utilities/Toast/Toast.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Toasts',
		description: 'Simple notifications utilizing a dynamic queue system.',
		imports: ['Toast', 'toastStore'],
		types: ['ToastMessage'],
		source: 'utilities/Toast',
		components: [{ sveld: sveldToast }]
	};

	// Triggers Toasts ---

	function toastBasic(): void {
		const t: ToastMessage = { message: 'Hello and welcome to Skeleton.' };
		toastStore.trigger(t);
	}

	function toastLong(): void {
		const t: ToastMessage = {
			message:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequuntur, blanditiis ducimus perspiciatis minima odit repellat rem iste incidunt laborum amet culpa officia maiores eum qui asperiores.',
			autohide: false
		};
		toastStore.trigger(t);
	}

	function toastMultiple(): void {
		toastStore.trigger({ message: 'Message will auto-hide after 5 seconds.' });
		toastStore.trigger({ message: 'Message will remain until dismissed.', autohide: false });
		toastStore.trigger({ message: 'Message will last 2 second.', timeout: 2000 });
	}

	function toastAction(): void {
		const t: ToastMessage = {
			message: 'Message contains a unique action.',
			autohide: false,
			button: {
				label: 'Greeting',
				action: () => {
					alert('Hello, Skeleton');
				}
			}
		};
		toastStore.trigger(t);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card card-body">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full md:max-w-[320px] lg:max-w-[640px] mx-auto">
				<button class="btn btn-ghost" on:click={toastBasic}>Short</button>
				<button class="btn btn-ghost" on:click={toastLong}>Long</button>
				<button class="btn btn-ghost" on:click={toastMultiple}>Multiple</button>
				<button class="btn btn-ghost" on:click={toastAction}>Action</button>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Import Component -->
		<section class="space-y-4">
			<p>For the best results, add the following to your app's root component to make toasts available in global scope.</p>
			<CodeBlock language="html" code={`<Toast background="bg-accent-500" position="tr" variant="filled" duration={250} />`} />
		</section>
		<!-- Toast Message -->
		<section class="space-y-4">
			<h2>Create a Toast Message</h2>
			<p>Config the toast message object to your preference.</p>
			<CodeBlock
				language="typescript"
				code={`
const toastMessage: ToastMessage = {
    message: 'Your Message Here',
    // Optional:
    autohide: true, 
    timeout: 5000,
    button: { label: 'Greeting', action: () => { alert('Hello, Skeleton'); }}
};
        `}
			/>
		</section>
		<!-- Queue -->
		<section class="space-y-4">
			<h2>Toast Queue</h2>
			<p>Use the Toast store to manipulate the toast queue using the following methods.</p>
			<CodeBlock
				language="javascript"
				code={`
import { toastStore } from '@brainandbones/skeleton';

// Trigger a toast
toastStore.trigger(toastMessage);

// Close the foremost open toast.
toastStore.close();

// Clear all toasts from the queue.
toastStore.clear();
			`}
			/>
		</section>
		<!-- Debugging -->
		<section class="space-y-4">
			<h2>Debugging</h2>
			<h3>Log the Queue</h3>
			<p>Use the following to monitor the queue in your console as it updates. Note that Svelte store contents are only visible for the current logged line.</p>
			<CodeBlock language="js" code={`toastStore.subscribe(() => { console.log($toastStore); });`} />
			<h3>Visualize the Queue</h3>
			<p>Use the following to display the queue in your UI.</p>
			<CodeBlock language="html" code={`<pre>queue: {JSON.stringify($toastStore, null, 2)}</pre>`} />
		</section>
		<!-- Accessibility -->
		<section class="space-y-4">
			<h2>Accessibility</h2>
			<p>Meets the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/alert/" target="_blank" rel="noreferrer">ARIA Guidelines</a>.</p>
		</section>
	</svelte:fragment>
</DocsShell>
