<script>
	import toast, { Toaster } from 'svelte-french-toast';

	function triggerInfo() {
		toast('Hello World! 👋', { duration: 5000 });
	}

	function triggerError() {
		toast.error('Uh oh, something went wrong.', { duration: 5000 });
	}

	function triggerSuccess() {
		toast.success('The task was was completed successfully!', { duration: 2000 });
	}
</script>

<div class="flex gap-4">
	<button class="btn preset-tonal" on:click={triggerInfo}>Toast: Info</button>
	<button class="btn preset-tonal" on:click={triggerError}>Toast: Error</button>
	<button class="btn preset-tonal" on:click={triggerSuccess}>Toast: Success</button>
</div>

<!-- Place the provider in the global scope of your app -->
<Toaster position="bottom-right" />
