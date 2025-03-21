<script lang="ts">
	import { Toaster, createToaster } from '@skeletonlabs/skeleton-svelte';

	const toaster = createToaster();
</script>

<Toaster {toaster}></Toaster>

<div class="flex gap-2">
	<button
		class="btn preset-filled"
		onclick={() => {
			toaster.info({
				title: 'This is a toast!'
			});
		}}>Info</button
	>
	<button
		class="btn preset-tonal-success"
		onclick={() => {
			toaster.success({
				title: 'This is a toast!'
			});
		}}>Success</button
	>
	<button
		class="btn preset-tonal-warning"
		onclick={() => {
			toaster.warning({
				title: 'This is a toast!'
			});
		}}>Warning</button
	>
	<button
		class="btn preset-tonal-error"
		onclick={() => {
			toaster.error({
				title: 'This is a toast!'
			});
		}}>Error</button
	>
</div>
