<!-- https://tailwindcss.com/docs/dark-mode -->
<script lang="ts">
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import { storePrefersDarkScheme, storeLightSwitch } from './stores';
	import { onMount } from 'svelte';

	// Base Classes
	const cTrack: string = 'inline-block bg-surface-500/50 w-12 h-6 rounded-full cursor-pointer transition-all duration-[100ms] hover:brightness-110';
	const cThumb: string = 'w-6 h-6 flex justify-center items-center rounded-full shadow-lg transition-all duration-[100ms] scale-90';
	const cIcon: string = 'block w-4 h-4';

	// Set the users system prefers for light/dark mode
	function setPrefersDarkScheme(): void {
		const prefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
		storePrefersDarkScheme.set(prefersDark);
	}

	// Toggles a 'dark' class on the <html> element
	function setElemHtmlClass(): void {
		const elemHtmlClassList: DOMTokenList = document.documentElement.classList;
		let preference: boolean = false;
		// If $storeLightSwitch not set, match the OS preference
		if ($storeLightSwitch === undefined) {
			preference = $storePrefersDarkScheme;
		} else {
			preference = $storeLightSwitch;
		}
		// Update HTML element class
		preference === true ? elemHtmlClassList.add('dark') : elemHtmlClassList.remove('dark');
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
	$: classesThumbBg = $storeLightSwitch ? 'fill-neutral-100 bg-neutral-900' : 'fill-neutral-900 bg-neutral-100';
	$: classesBase = `${cTrack} ${$$props.class ?? ''}`;
	$: classesThumb = `${cThumb} ${classesThumbBg} ${classesPosition}`;
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
