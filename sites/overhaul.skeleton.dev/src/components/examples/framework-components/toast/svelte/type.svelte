<script lang="ts">
	import { Toast, createToaster } from '@skeletonlabs/skeleton-svelte';

	const toaster = createToaster({});
</script>

<div class="grid grid-cols-2 gap-2">
	<button
		class="btn preset-filled"
		onclick={() =>
			toaster.info({
				title: 'Info',
				description: 'This is an info toast.',
			})}
	>
		Info
	</button>
	<button
		class="btn preset-filled-success-500"
		onclick={() =>
			toaster.success({
				title: 'Success',
				description: 'This is a success toast.',
			})}
	>
		Success
	</button>
	<button
		class="btn preset-filled-warning-500"
		onclick={() =>
			toaster.warning({
				title: 'Warning',
				description: 'This is a warning toast.',
			})}
	>
		Warning
	</button>
	<button
		class="btn preset-filled-error-500"
		onclick={() =>
			toaster.error({
				title: 'Error',
				description: 'This is an error toast.',
			})}
	>
		Error
	</button>
</div>

<Toast.Group {toaster}>
	{#snippet children(toast)}
		<Toast {toast}>
			<Toast.Message>
				<Toast.Title>{toast.title}</Toast.Title>
				<Toast.Description>{toast.description}</Toast.Description>
			</Toast.Message>
			<Toast.CloseTrigger />
		</Toast>
	{/snippet}
</Toast.Group>
