<script lang="ts">
	import { onMount } from 'svelte';
	import type { AppShellHeaderProps } from './types.js';
	import { getAppShellContext } from './context.js';

	// Props
	const {
		scrollPadding = 'calc({height}px + 1rem)',
		sticky = true,
		hideOnScroll = false,
		// Root
		base = '[grid-area:header] transition-[translate] duration-300',
		stickyBase = 'sticky top-0',
		hiddenBase = '-translate-y-full',
		classes,
		// Snippets
		children
	}: AppShellHeaderProps = $props();

	// Context
	const ctx = getAppShellContext();

	// Reactive
	const rxSticky = $derived(sticky && stickyBase);
	const rxHidden = $derived(sticky && hideOnScroll && ctx.shouldHideHeader && hiddenBase);

	// Scroll padding logic
	$effect(() => {
		if (sticky && scrollPadding != null)
			document.documentElement.style.scrollPaddingTop = scrollPadding.replace('{height}', String(ctx.headerHeight));
		else document.documentElement.style.scrollPaddingTop = '';
	});

	// Remove contexts/styles set by this component on unmount
	// So, for example, header is in an {#if} block, the scroll padding is correctly removed when the header is removed
	// Use onMount return instead of onDestroy as onDestroy runs during SSR
	onMount(() => () => {
		ctx.headerHeight = 0;
		document.documentElement.style.scrollPaddingTop = '';
	});
</script>

<!-- @component AppShell header subcomponent. -->

<header id="appShell-header" bind:offsetHeight={ctx.headerHeight} class="{base}{rxSticky} {rxHidden} {classes}">
	{@render children()}
</header>
