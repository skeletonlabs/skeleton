<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// Redirect
	onMount(() => goto('/themes/create'));
</script>

<main class="h-full flex justify-center items-center p-4">
	<section class="card bg-surface-100-900 p-4 space-y-4">
		<h2 class="h2">Themes</h2>
		<p>This will be the promotation homepage in a future update.</p>
		<a href="/themes/create" class="btn preset-filled">Browse to Generator &rarr;</a>
	</section>
</main>
