<script lang="ts">
	import { onMount } from 'svelte';
	import { getAppShellContext } from './context.js';
	import type { AppShellFooterProps } from './types.js';

	// Props
	const {
		sticky = true,
		hideOnScroll = false,
		// Root
		base = '[grid-area:footer] transition-[translate] duration-300',
		stickyBase = 'sticky top-0',
		hiddenBase = 'translate-y-full',
		classes,
		// Snippets
		children
	}: AppShellFooterProps = $props();

	// Context
	const ctx = getAppShellContext();

	// Reactive
	const rxSticky = $derived(sticky && stickyBase);
	const rxHidden = $derived(sticky && hideOnScroll && ctx.shouldHideHeader && hiddenBase);

	// Remove contexts/styles set by this component on unmount
	onMount(() => () => {
		ctx.footerHeight = 0;
	});
</script>

<!-- @component AppShell footer subcomponent. -->

<footer id="appShell-footer" bind:offsetHeight={ctx.footerHeight} class="{base} {rxSticky} {rxHidden} {classes}">
	{@render children()}
</footer>
