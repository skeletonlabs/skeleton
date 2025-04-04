<script lang="ts">
	import { Toaster, createToaster } from '@skeletonlabs/skeleton-svelte';

	const toaster = createToaster();
</script>

<Toaster {toaster}></Toaster>

<div class="w-full max-w-72 grid grid-cols-2 gap-2">
	<button
		class="btn preset-filled"
		onclick={() => {
			toaster.info({
				title: 'This is a toast!'
			});
		}}>Info</button
	>
	<button
		class="btn preset-filled-success-500"
		onclick={() => {
			toaster.success({
				title: 'This is a toast!'
			});
		}}>Success</button
	>
	<button
		class="btn preset-filled-warning-500"
		onclick={() => {
			toaster.warning({
				title: 'This is a toast!'
			});
		}}>Warning</button
	>
	<button
		class="btn preset-filled-error-500"
		onclick={() => {
			toaster.error({
				title: 'This is a toast!'
			});
		}}>Error</button
	>
</div>
