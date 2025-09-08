<script lang="ts">
	import { createToaster, Toast } from '@skeletonlabs/skeleton-svelte';

	const toaster = createToaster({});
</script>

<button
	class="btn preset-filled"
	onclick={() => toaster.create({ type: '', title: 'Toast', description: 'This is a toast message.', duration: Infinity })}
>
	Show Toast
</button>
<Toast.Group {toaster}>
	{#snippet children(toast)}
		<Toast {toast}>
			<Toast.Title>{toast.title}</Toast.Title>
			<Toast.Description>{toast.description}</Toast.Description>
			<Toast.CloseTrigger>Close</Toast.CloseTrigger>
		</Toast>
	{/snippet}
</Toast.Group>
