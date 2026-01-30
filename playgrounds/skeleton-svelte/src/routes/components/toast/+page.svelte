<script lang="ts">
	import { Toast, createToaster } from '@skeletonlabs/skeleton-svelte';

	let overlap = $state(false);
	let duration: number = $state(Infinity);

	let toaster = $derived(createToaster({ overlap }));

	const createToast = () => {
		toaster.info({
			title: 'Toast',
			description: 'This is a toast message.',
			duration,
			action: { label: 'Undo', onClick: () => toaster.success({ title: 'Undone' }) },
		});
	};
</script>

<button class="btn preset-filled" onclick={createToast}> Toast </button>

<label class="label">
	<span class="label-text">Options</span>
	<div class="rounded-container border border-surface-200-800 p-2 flex flex-col gap-2">
		<label class="flex items-center space-x-2">
			<input class="checkbox" type="checkbox" bind:checked={overlap} />
			<span>Overlap</span>
		</label>

		<label class="label">
			<span class="label-text">Duration (ms)</span>
			<input class="input w-32" type="number" bind:value={duration} />
		</label>
	</div>
</label>

{#key toaster}
	<Toast.Group {toaster}>
		{#snippet children(toast)}
			<Toast {toast}>
				<Toast.Message>
					<Toast.Title>{toast.title}</Toast.Title>
					<Toast.Description>{toast.description}</Toast.Description>
				</Toast.Message>
				{#if toast.action}
					<Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
				{/if}
				<Toast.CloseTrigger />
			</Toast>
		{/snippet}
	</Toast.Group>
{/key}
