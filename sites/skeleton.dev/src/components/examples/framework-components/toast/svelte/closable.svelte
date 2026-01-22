<script lang="ts">
	import { Toast, createToaster } from '@skeletonlabs/skeleton-svelte';

	const toaster = createToaster();
</script>

<button
	class="btn preset-filled"
	onclick={() =>
		toaster.info({
			title: 'Title',
			description: 'This is a description.',
			closable: false,
		})}
>
	Toast
</button>

<Toast.Group {toaster}>
	{#snippet children(toast, index)}
		<Toast {toast} {index}>
			<Toast.Message>
				<Toast.Title>{toast.title}</Toast.Title>
				<Toast.Description>{toast.description}</Toast.Description>
			</Toast.Message>
			{#if toast.closable}
				<Toast.CloseTrigger />
			{/if}
		</Toast>
	{/snippet}
</Toast.Group>
