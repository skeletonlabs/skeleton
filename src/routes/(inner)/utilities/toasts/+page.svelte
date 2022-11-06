<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Types
	import type { ToastMessage } from '$lib/utilities/Toast/types';
	// Stores
	import { toastStore } from '$lib/utilities/Toast/stores';

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
		const t: ToastMessage = { message: '👋 Hello and welcome to Skeleton.' };
		toastStore.trigger(t);
	}

	function toastParagraph(): void {
		const t: ToastMessage = {
			message:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequuntur, blanditiis ducimus perspiciatis minima odit repellat rem iste incidunt laborum amet culpa officia maiores eum qui asperiores.',
			autohide: false
		};
		toastStore.trigger(t);
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

	function toastMultiple(): void {
		toastStore.trigger({ message: 'Message will last 2 second.', timeout: 2000 });
		toastStore.trigger({ message: 'Message will remain until dismissed.', autohide: false });
		toastStore.trigger({ message: 'Message will auto-hide after 5 seconds.' });
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card card-body">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[640px] mx-auto">
				<button class="btn btn-ghost-surface" on:click={toastBasic}>Basic</button>
				<button class="btn btn-ghost-surface" on:click={toastParagraph}>Paragraph</button>
				<button class="btn btn-ghost-surface" on:click={toastAction}>Action</button>
				<button class="btn btn-ghost-surface" on:click={toastMultiple}>Multiple</button>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>(usage)</p>
	</svelte:fragment>
</DocsShell>
