<!-- https://tailwindcss.com/docs/dark-mode -->
<script lang="ts">
	import { onMount } from 'svelte';

	// Components
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	// Stores
	import { storePrefersDarkScheme, storeLightSwitch } from './stores';

	// Base Classes
	const cTrack =
		'inline-block bg-surface-200-700-token ring-[1px] ring-surface-300-600-token ring-inset w-12 h-6 rounded-full cursor-pointer transition-all duration-[100ms]';
	const cThumb =
		'bg-white dark:bg-black fill-white dark:fill-black w-6 h-6 flex justify-center items-center rounded-full shadow-lg transition-all duration-[100ms] scale-90';
	const cIcon = 'block w-4 h-4';

	// Set the users system prefers for light/dark mode
	function setPrefersDarkScheme(): void {
		const prefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
		storePrefersDarkScheme.set(prefersDark);
	}

	// Toggles a 'dark' class on the <html> element
	function setElemHtmlClass(): void {
		const elemHtmlClassList: DOMTokenList = document.documentElement.classList;
		// If $storeLightSwitch not set, match the OS preference
		if ($storeLightSwitch === undefined) {
			$storeLightSwitch = $storePrefersDarkScheme;
		}
		// Update HTML element class
		$storeLightSwitch === true ? elemHtmlClassList.add('dark') : elemHtmlClassList.remove('dark');
	}

	// On Click Handler
	function onClick(): void {
		// Set the Store Value
		storeLightSwitch.set(($storeLightSwitch = !$storeLightSwitch));
		// Apply to <html> Element
		setElemHtmlClass();
	}

	// A11y Input Handlers
	function onKeyDown(event: any): void {
		// Enter/Space triggers selecton event
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			event.target.click();
		}
	}

	// Lifecycle
	onMount(() => {
		// Determine OS Preference
		setPrefersDarkScheme();
		// Finally, update HTML element class as needed
		setElemHtmlClass();
	});

	// Reactive Classses
	$: classesPosition = $storeLightSwitch ? 'translate-x-full' : 'translate-x-0';
	$: classesBase = `${cTrack} ${$$props.class ?? ''}`;
	$: classesThumb = `${cThumb} ${classesPosition}`;
</script>

<!-- prettier-ignore -->
<div
	class="lightswitch {classesBase}"
	on:click={onClick}
	on:keydown={onKeyDown}
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
