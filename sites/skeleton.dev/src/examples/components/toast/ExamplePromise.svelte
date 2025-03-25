<script lang="ts">
	import { Toaster, createToaster } from '@skeletonlabs/skeleton-svelte';

	const toaster = createToaster();

	function getTask() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.5) {
					resolve(undefined);
				} else {
					reject();
				}
			}, 2000);
		});
	}
</script>

<Toaster {toaster}></Toaster>

<button
	class="btn preset-filled"
	onclick={() => {
		toaster.promise(getTask(), {
			loading: {
				title: 'Loading...',
				description: 'Please wait while the task is being processed.'
			},
			success: () => ({
				title: 'Success',
				description: 'Your request has been completed'
			}),
			error: () => ({
				title: 'Error',
				description: 'An error has occurred'
			})
		});
	}}>Execute Task</button
>
