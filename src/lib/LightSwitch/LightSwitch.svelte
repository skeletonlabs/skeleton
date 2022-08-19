<!-- https://tailwindcss.com/docs/dark-mode -->
<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';

	// Share checked state between all component instances
	const checked: Writable<boolean> = writable(false); // false:light | true:dark
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	// Local
	let lsDefinedMode: string;

	// Base Classes
	const cTrack: string = 'inline-block bg-surface-500/50 w-12 h-6 rounded-full cursor-pointer transition-all duration-[100ms] hover:brightness-110';
	const cThumb: string = 'w-6 h-6 flex justify-center items-center rounded-full shadow-lg transition-all duration-[100ms] scale-90';
	const cIcon: string = 'block w-4 h-4';

	// On Mount: Set the users system prefers for light/dark mode
	function setPreferredScheme(): void {
		const prefersDarkScheme: any = window.matchMedia('(prefers-color-scheme: dark)').matches;
		checked.set(prefersDarkScheme);
		setElemHtmlClass();
	}

	// On Mount: sets the defined mode via LocalStorage
	function setDefinedMode(): void {
		checked.set(lsDefinedMode === 'dark');
		setElemHtmlClass();
	}

	// Toggles a 'dark' class on the <html> element
	function setElemHtmlClass(): void {
		const elemHtmlClassList: DOMTokenList = document.documentElement.classList;
		$checked ? elemHtmlClassList.add('dark') : elemHtmlClassList.remove('dark');
	}

	// On Click Handler
	function onClick(): void {
		// Set the Store Value
		checked.set(($checked = !$checked));
		// Cache to LocalStorage
		localStorage.setItem('mode', $checked === true ? 'dark' : 'light');
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
		lsDefinedMode = localStorage.mode;
		lsDefinedMode === undefined ? setPreferredScheme() : setDefinedMode();
	});

	// Reactive Classses
	$: classesPosition = $checked ? 'translate-x-full' : 'translate-x-0';
	$: classesThumbBg = $checked ? 'fill-neutral-100 bg-neutral-900' : 'fill-neutral-900 bg-neutral-100';
	$: classesBase = `${cTrack} ${$$props.class || ''}`;
	$: classesThumb = `${cThumb} ${classesThumbBg} ${classesPosition}`;
</script>

<!-- prettier-ignore -->
<div
	class="lightswitch-track {classesBase}"
	on:click={onClick}
	on:keydown={onKeyDown}
	role="switch"
	aria-label="Light Switch"
	aria-checked={$checked}
	title="Toggle {$checked ? 'Light' : 'Dark'} Mode"
	tabindex="0"
>
	<!-- Thumb -->
	<div class="lightswitch-thumb {classesThumb}">
		<!-- SVG Icon -->
		<SvgIcon name={$checked === false ? 'sun' : 'moon'} class="lightswitch-icon {cIcon}" />
	</div>
</div>
