<script lang="ts">
	import type { AppShellPageProps } from './types.js';

	// Props
	const {
		// Root
		base = '[grid-area:page]',
		classes,
		// Snippets
		children
	}: AppShellPageProps = $props();
</script>

<!-- @component AppShell page subcomponent. -->

<div id="appShell-page" class={classes}>
	{@render children()}
</div>
