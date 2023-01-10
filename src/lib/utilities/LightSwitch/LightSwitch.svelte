<!-- https://tailwindcss.com/docs/dark-mode -->
<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Stores
	import { storePrefersDarkScheme, storeLightSwitch } from './stores';

	// Types
	type OnClickEvent = MouseEvent & { currentTarget: EventTarget & HTMLDivElement };
	type OnKeyDownEvent = KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement };

	// Base Classes
	const cTrack =
		'inline-block bg-surface-200-700-token ring-[1px] ring-surface-300-600-token ring-inset w-12 h-6 rounded-full cursor-pointer transition-all duration-[100ms]';
	const cThumb =
		'bg-white dark:bg-black fill-white dark:fill-black w-6 h-6 flex justify-center items-center rounded-full shadow-lg transition-all duration-[100ms] scale-90';
	const cIcon = 'block w-4 h-4';

	// Set the users system prefers for light/dark mode
	function setPrefersDarkScheme(): void {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		storePrefersDarkScheme.set(prefersDark);
		// If $storeLightSwitch not set, match the OS preference
		if ($storeLightSwitch === undefined) {
			$storeLightSwitch = $storePrefersDarkScheme;
		}
	}

	// Toggles a 'dark' class on the <html> element
	function setElemHtmlClass(): void {
		const elemHtmlClassList = document.documentElement.classList;
		// Update HTML element class
		$storeLightSwitch ? elemHtmlClassList.add('dark') : elemHtmlClassList.remove('dark');
	}

	// Sets the color scheme based on localStorage or OS preference in
	// the <head> of the document.
	function setColorScheme() {
		if (
			localStorage.getItem('storeLightSwitch') === 'true' ||
			(!('storeLightSwitch' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	// On Click Handler
	function onClick(event: OnClickEvent): void {
		// Set the Store Value
		storeLightSwitch.set(($storeLightSwitch = !$storeLightSwitch));
		// Apply to <html> Element
		setElemHtmlClass();
		/** @event {{ event }} click - Fires when the component is clicked.  */
		dispatch('click', event);
	}

	// A11y Input Handlers
	function onKeyDown(event: OnKeyDownEvent): void {
		// Enter/Space triggers selecton event
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			event.currentTarget.click();
		}
		/** @event {{ event }} keydown - Fires when the component has keydown event.  */
		dispatch('keydown', event);
	}

	// Lifecycle
	onMount(() => {
		// Determine OS Preference
		setPrefersDarkScheme();
	});

	// Reactive Classses
	$: classesPosition = $storeLightSwitch ? 'translate-x-full' : 'translate-x-0';
	$: classesBase = `${cTrack} ${$$props.class ?? ''}`;
	$: classesThumb = `${cThumb} ${classesPosition}`;
</script>

<svelte:head>
	{@html `<script>${setColorScheme.toString()} setColorScheme();</script>`}
</svelte:head>

<!-- prettier-ignore -->
<div
	class="lightswitch {classesBase}"
	on:click={onClick}
	on:keydown={onKeyDown}
	on:keyup
	on:keypress
	role="switch"
	aria-label="Light Switch"
	aria-checked={$storeLightSwitch}
	title="Toggle {$storeLightSwitch ? 'Light' : 'Dark'} Mode"
	tabindex="0"
>
	<!-- Thumb -->
	<div class="lightswitch-thumb {classesThumb}">
		{#if $storeLightSwitch === false}
			<!-- Icon Light -->
			<svg class="lightswitch-icon fill-black {cIcon}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"/>
			</svg>
		{:else}
			<!-- Icon Dark -->
			<svg class="lightswitch-icon fill-white {cIcon}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
				<path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
			</svg>
		{/if}
	</div>
</div>
