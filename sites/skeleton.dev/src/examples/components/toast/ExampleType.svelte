<script lang="ts">
	import { Toaster, createToaster } from '@skeletonlabs/skeleton-svelte';

	const toaster = createToaster();
</script>

<Toaster {toaster}></Toaster>

<div class="grid gap-2">
	<button
		class="btn preset-filled"
		onclick={() => {
			toaster.info({
				type: 'info',
				title: 'This is a toast!'
			});
		}}>Info</button
	>

	<button
		class="btn preset-tonal-success"
		onclick={() => {
			toaster.info({
				type: 'error',
				title: 'This is a toast!'
			});
		}}>Success</button
	>

	<button
		class="btn preset-tonal-error"
		onclick={() => {
			toaster.info({
				type: 'error',
				title: 'This is a toast!'
			});
		}}>Toast!</button
	>
</div>
