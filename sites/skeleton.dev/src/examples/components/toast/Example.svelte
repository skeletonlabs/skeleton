<script lang="ts">
	import { Toaster, createToaster } from '@skeletonlabs/skeleton-svelte';

	const toaster = createToaster();
</script>

<Toaster {toaster}></Toaster>

<button
	class="btn preset-filled"
	onclick={() => {
		toaster.info({
			title: 'This is a toast!'
		});
	}}>Toast</button
>
