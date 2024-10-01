<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		// NOTE: Redirect to Generator page
		goto('/themes/create');
	});
</script>

<div class="card preset-tonal-warning p-4 text-center">
	<p>Future home of the <u>browse</u> page.</p>
</div>
