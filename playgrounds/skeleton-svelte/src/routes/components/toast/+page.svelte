<script lang="ts">
	import { Toast, createToaster } from '@skeletonlabs/skeleton-svelte';

	const toaster = createToaster({});
</script>

<button
	class="btn preset-filled"
	onclick={() =>
		toaster.info({
			title: 'Toast',
			description: 'This is a toast message.',
			duration: Infinity,
			action: { label: 'Undo', onClick: () => toaster.success({ title: 'Undone' }) },
		})}
>
	Toast
</button>

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
