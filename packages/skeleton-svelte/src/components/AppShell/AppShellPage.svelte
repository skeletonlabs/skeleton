<script lang="ts">
	import type { AppShellPageProps } from './types.js';

	// Props
	const {
		// Root
		classes,
		// Snippets
		children
	}: AppShellPageProps = $props();
</script>

<!-- @component AppShell page subcomponent. -->

<div id="appShell-page" class="{classes}">
	{@render children()}
</div>

<style>
	#appShell-page {
		grid-area: page;
	}
</style>
