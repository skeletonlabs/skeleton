<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let select: boolean = false;
	export let open: boolean = false;
	export let origin: string = 'auto'; // auto | tl | tr | bl | br
	export let duration: number = 100; // ms
	export let disabled: boolean = false;

	let elemMenu: HTMLElement;
	let autoOriginMode: boolean = origin === 'auto' ? true : false; // Persist `origin: auto` state

	// Base Classes
	const cBaseMenu: string = 'relative inline-block';
	const cBaseContent: string = 'absolute z-10';

	// Set content anchor origin
	let cOrigin: string;
	function setOrigin(): void {
		// prettier-ignore
		switch (origin) {
			case 'tl': cOrigin = 'origin-top-left left-0 mt-0'; break;
			case 'tr': cOrigin = 'origin-top-right right-0 mt-0'; break;
			case 'bl': cOrigin = 'origin-bottom-left top-[-5px] left-0 -translate-y-full'; break;
			case 'br': cOrigin = 'origin-bottom-right top-[-5px] right-0 -translate-y-full'; break;
			default: setAutoOrigin(); break;
		}
	}
	setOrigin(); // on init

	// Auto-update origin based on viewport position
	function setAutoOrigin(): void {
		if (!elemMenu) return;
		// Get the Menu's bounds
		let elemMenuBounds = elemMenu.getBoundingClientRect();
		// Set verticle and horizontal values
		let vert: string = elemMenuBounds.y < window.innerHeight / 2 ? 't' : 'b'; // top/bottom
		let horz: string = elemMenuBounds.x < window.innerWidth / 2 ? 'l' : 'r'; // left/right
		// Update origin styles
		origin = `${vert}${horz}`;
		setOrigin();
	}

	// Searches for the first parent node that can scroll
	// https://thewebdev.info/2021/06/27/how-to-find-the-first-scrollable-parent-element-with-javascript/
	function getFirstScrollableParent(node): any {
		if (node === null) {
			return null;
		}
		return node.scrollHeight > node.clientHeight ? node : getFirstScrollableParent(node.parentNode);
	}

	// Toggle Visibility
	// NOTE: 1ms delay required to avoid race condition for select mode
	function toggle(): void {
		if (disabled) return;
		setTimeout(() => {
			open = !open;
		}, 1);
	}

	// Handle click on <body> element
	// Source: https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783?version=3.16.7
	function handleBodyClick(event: any): void {
		if (!open) return;
		// If click is outside menu, close menu
		if (elemMenu && !elemMenu.contains(event.target) && !event.defaultPrevented) {
			open = false;
			return;
		}
		// If select enabled and click is inside menu, close menu
		if (select === true) {
			open = false;
			return;
		}
	}

	// A11y Input Handler
	function onKeyDown(event: any): void {
		if (open && event.code === 'Escape') {
			toggle();
		}
	}

	// Lifecycle Events
	onMount(() => {
		// Event: Window Keydown (ESC)
		window.addEventListener('keydown', onKeyDown);
		// If auto-origin enabled, add event listeners
		if (autoOriginMode === true) {
			// Event: Window Resize
			window.addEventListener('resize', setAutoOrigin);
			// Event: Parent Scroll
			const scrollParent = getFirstScrollableParent(elemMenu);
			scrollParent.addEventListener('scroll', setAutoOrigin);
		}
	});

	onDestroy(() => {
		// Close when navigating away
		open = false;
	});

	// Responsive Classes
	$: classesMenu = `${cBaseMenu}`;
	$: classesContent = `${cBaseContent} ${cOrigin}`;
</script>

<svelte:body on:click={handleBodyClick} />

<div bind:this={elemMenu} class="menu-wrapper {classesMenu} {$$props.class}" data-testid="menu-wrapper">
	<!-- Trigger Button -->
	<div class="menu-trigger" on:click={toggle} data-testid="menu-trigger">
		{#if $$slots.trigger}<slot name="trigger" />{/if}
	</div>

	<!-- Content -->
	{#if open}
		<div role="menu" class="menu-content {classesContent}" data-testid="menu-content" in:fade={{ duration }} out:fade={{ duration }}>
			{#if $$slots.content}<slot name="content" />{/if}
		</div>
	{/if}
</div>
