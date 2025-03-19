<script lang="ts">
	import { getToastContext } from '@skeletonlabs/skeleton-svelte';

	const toastContext = getToastContext();

	function triggerInfo() {
		toastContext.toaster.create({
			// title: 'Info!',
			description: 'This is an info toast.',
			type: 'info'
		});
	}

	function triggerError() {
		toastContext.toaster.create({
			title: 'Error',
			description: 'An error occurred!',
			type: 'error'
		});
	}

	function triggerSuccess() {
		toastContext.toaster.create({
			title: 'Success',
			description: 'The task was successful!',
			type: 'success'
		});
	}
</script>

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
