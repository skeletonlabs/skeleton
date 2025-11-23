<script lang="ts">
	import { Toast, createToaster } from '@skeletonlabs/skeleton-svelte';

	const toaster = createToaster();

	function generatePositiveNumber() {
		return new Promise<number>((resolve, reject) => {
			setTimeout(() => {
				const number = Math.random() - 0.5;
				if (number > 0) {
					resolve(number);
				} else {
					reject(number);
				}
			}, 2000);
		});
	}
</script>

<button
	class="btn preset-filled"
	onclick={() =>
		toaster.promise(generatePositiveNumber(), {
			loading: {
				title: 'Loading...',
				description: 'Please wait while generating your number',
			},
			success: (number) => ({
				title: 'Success',
				description: `Your number is ${number}`,
			}),
			error: (number) => ({
				title: 'Error',
				description: `Your number is ${number}`,
			}),
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
			<Toast.CloseTrigger />
		</Toast>
	{/snippet}
</Toast.Group>
