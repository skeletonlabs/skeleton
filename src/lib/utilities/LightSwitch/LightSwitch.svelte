<!-- https://tailwindcss.com/docs/dark-mode -->
<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Components
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

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
		<!-- SVG Icon -->
		<SvgIcon name={$storeLightSwitch === false ? 'sun' : 'moon'} class="lightswitch-icon {cIcon}" />
	</div>
</div>
