<script lang="ts">
	import { onMount } from 'svelte';
	import { getAppShellContext } from './context.js';
	import type { AppShellHeaderProps } from './types.js';

	// Props
	const {
		sticky = true,
		hideOnScroll = false,
		// Root
		classes,
		// Snippets
		children
	}: AppShellHeaderProps = $props();

	// Context
	const ctx = getAppShellContext();

	// Remove contexts/styles set by this component on unmount
	onMount(() => () => {
		ctx.footerHeight = 0;
	});
</script>

<footer
	id="appShell-footer"
	bind:offsetHeight={ctx.footerHeight}
	class={[
		sticky && 'sticky bottom-0',
		sticky && hideOnScroll && 'transition-[translate] duration-300',
		sticky && hideOnScroll && ctx.shouldHideFooter && 'translate-y-full',
		classes
	]}
>
	{@render children()}
</footer>

<style>
	footer {
		grid-area: footer;
	}
</style>
