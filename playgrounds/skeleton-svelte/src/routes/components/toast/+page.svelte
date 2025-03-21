<script lang="ts">
	import { Toaster, createToaster } from '@skeletonlabs/skeleton-svelte';

	const toaster = createToaster({
		placement: 'bottom-end'
	});

	function triggerInfo() {
		toaster.create({
			// title: 'Info!',
			description: 'This is an info toast.',
			type: 'info'
		});
	}

	function triggerError() {
		toaster.create({
			title: 'Error',
			description: 'An error occurred!',
			type: 'error'
		});
	}

	function triggerSuccess() {
		toaster.create({
			title: 'Success',
			description: 'The task was successful!',
			type: 'success'
		});
	}
</script>

<Toaster {toaster}></Toaster>

<div class="space-y-10">
	<header>
		<h1 class="h1">Toasts</h1>
	</header>
	<section class="border border-surface-200-800 flex justify-center items-center gap-4 p-20">
		<button class="btn preset-tonal" onclick={triggerInfo}>Toast: Info</button>
		<button class="btn preset-tonal" onclick={triggerError}>Toast: Error</button>
		<button class="btn preset-tonal" onclick={triggerSuccess}>Toast: Success</button>
	</section>
</div>
