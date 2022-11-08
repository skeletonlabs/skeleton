<script lang="ts">
	import { page } from '$app/stores';
	import DocsLogoAnim from '$docs/DocsLogo/DocsLogoAnim.svelte';
</script>

{#if $page}
	<div class="w-full h-full flex justify-center items-center">
		<div class="text-center space-y-4">
			<DocsLogoAnim />
			<h2>{$page.status}: {$page.error.message}</h2>
			<p>We're sorry, something went wrong.</p>
		</div>
	</div>
{/if}
