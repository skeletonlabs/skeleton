<script lang="ts">
	import { toaster } from './toaster-svelte';
</script>

<button
	class="btn preset-filled"
	onclick={() => {
		toaster.info({
			title: 'This is a toast!'
		});
	}}
>
	Toast
</button>
