<script lang="ts">
	import { onMount } from 'svelte';
	import { MediaQuery } from 'svelte/reactivity';
	import type { AppShellContext, AppShellProps } from './types.js';
	import { setAppShellContext } from './context.js';

	// Props
	const {
		hideOnScrollQuery = 'max-width: 600px',
		// Root
		classes,
		base = 'grid [grid-template-areas:"header_header_header"_"sidebar-left_page_sidebar-right"_"footer_footer_footer"] overflow-clip',
		// Snippets
		children
	}: AppShellProps = $props();

	// Auto-hide state
	let shouldHide = $state(false);
	let canHideHeader = $state(false);
	let canHideFooter = $state(false);
	const smallScreen = $derived(new MediaQuery(hideOnScrollQuery));
	const shouldHideHeader = $derived(shouldHide && canHideHeader && smallScreen.current);
	const shouldHideFooter = $derived(shouldHide && canHideFooter && smallScreen.current);
	let lastScrollTop = 0;

	// Context
	const ctx = $state<AppShellContext>({
		scrollTop: 0,
		scrollBottom: 0,
		get shouldHideHeader() {
			return shouldHideHeader;
		},
		get shouldHideFooter() {
			return shouldHideFooter;
		},
		headerHeight: 0,
		footerHeight: 0
	});
	setAppShellContext(ctx);

	// Auto-hide logic
	function onDocumentScroll() {
		const scrollTop = document.documentElement.scrollTop;
		const scrollBottom = document.documentElement.scrollHeight - document.documentElement.clientHeight - scrollTop;

		// Can't hide the header/footer if there is no content to replace the hidden header/footer
		canHideHeader = scrollTop > ctx.headerHeight + 50;
		canHideFooter = scrollBottom > ctx.footerHeight + 50;

		// Show/hide header after 100px of scrolling in respective direction
		const delta = scrollTop - lastScrollTop;
		if (!shouldHide && delta > 0) {
			if (delta > 100) shouldHide = true;
			else return;
		} else if (shouldHide && delta < 0) {
			if (delta < -100) shouldHide = false;
			else return;
		}
		lastScrollTop = scrollTop;
	}

	onMount(() => {
		document.addEventListener('scroll', onDocumentScroll, { passive: true });
		return () => document.removeEventListener('scroll', onDocumentScroll);
	});
</script>

<!-- @component Base application layout component. -->

<div id="appShell" class="{base} {classes}">
	{@render children()}
</div>
