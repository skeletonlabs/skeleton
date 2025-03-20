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

	// Reactive
	const rxSticky = $derived(sticky ? 'sticky top-0' : '');
	const rxHideOnScroll = $derived(sticky && hideOnScroll ? 'transition-[translate] duration-300' : '');
	const rxHidden = $derived(sticky && hideOnScroll && ctx.shouldHideHeader ? 'translate-y-full' : '');

	// Remove contexts/styles set by this component on unmount
	onMount(() => () => {
		ctx.footerHeight = 0;
	});
</script>

<!-- @component AppShell footer subcomponent. -->

<footer id="appShell-footer" bind:offsetHeight={ctx.footerHeight} class="{rxSticky} {rxHideOnScroll} {rxHidden} {classes}">
	{@render children()}
</footer>

<style>
	footer {
		grid-area: footer;
	}
</style>
