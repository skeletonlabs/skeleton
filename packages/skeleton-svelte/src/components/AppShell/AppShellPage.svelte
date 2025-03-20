<script lang="ts">
	import type { AppShellPageProps } from './types.js';

	// Props
	const {
		// Root
		base = 'grow',
		classes,
		// Snippets
		children
	}: AppShellPageProps = $props();
</script>

<div id="appShell-page" class="{base} {classes}">
	{@render children()}
</div>

<style>
	#appShell-page {
		grid-area: page;
	}
</style>
