<script lang="ts">
	import { appToaster } from './toaster-svelte';
</script>

<button
	class="btn preset-filled"
	onclick={() => {
		appToaster.info({
			title: 'This is a toast!'
		});
	}}
>
	Toast
</button>
