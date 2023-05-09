<script lang="ts">
	import { onMount } from 'svelte';
	import { modeCurrent, setModeUserPrefers, setModeCurrent, setInitialClassState, getModeOsPrefers } from './lightswitch';

	// Types
	import type { CssClasses } from '$lib';
	type OnKeyDownEvent = KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement };

	// Props
	/** Provide classes to set the light background color. */
	export let bgLight: CssClasses = 'bg-surface-50';
	/** Provide classes to set the dark background color. */
	export let bgDark: CssClasses = 'bg-surface-900';
	/** Provide classes to set the light SVG fill color. */
	export let fillLight: CssClasses = 'fill-surface-50';
	/** Provide classes to set the dark SVG fill color. */
	export let fillDark: CssClasses = 'fill-surface-900';
	/** Provide classes to set width styles. */
	export let width: CssClasses = 'w-12';
	/** Provide classes to set height styles. Should be half of width. */
	export let height: CssClasses = 'h-6';
	/** Provide classes to set ring styles. */
	export let ring: CssClasses = 'ring-[1px] ring-surface-500/30';
	/** Provide classes to set border radius styles. */
	export let rounded: CssClasses = 'rounded-token';

	// Classes
	const cTransition = `transition-all duration-[200ms]`;
	const cTrack = 'cursor-pointer';
	const cThumb = 'aspect-square scale-[0.8] flex justify-center items-center';
	const cIcon = 'w-[70%] aspect-square';

	// Local
	const svgPath = {
		sun: 'M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z',
		moon: 'M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z'
	};

	function onToggleHandler(): void {
		$modeCurrent = !$modeCurrent;
		setModeUserPrefers($modeCurrent);
		setModeCurrent($modeCurrent);
	}

	// A11y Input Handlers
	function onKeyDown(event: OnKeyDownEvent): void {
		// Enter/Space triggers selection event
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			event.currentTarget.click();
		}
	}

	// Lifecycle
	onMount(() => {
		// Sync lightswitch with the theme
		if (!('modeCurrent' in localStorage)) {
			setModeCurrent(getModeOsPrefers());
		}
	});

	// State
	$: trackBg = $modeCurrent === true ? bgLight : bgDark;
	$: thumbBg = $modeCurrent === true ? bgDark : bgLight;
	$: thumbPosition = $modeCurrent === true ? 'translate-x-[100%]' : '';
	$: iconFill = $modeCurrent === true ? fillLight : fillDark;
	// Reactive
	$: classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${ring} ${rounded} ${trackBg} ${$$props.class ?? ''}`;
	$: classesThumb = `${cThumb} ${cTransition} ${height} ${rounded} ${thumbBg} ${thumbPosition}`;
	$: classesIcon = `${cIcon} ${iconFill}`;
</script>

<svelte:head>
	{@html `<script nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<div
	class="lightswitch-track {classesTrack}"
	on:click={onToggleHandler}
	on:click
	on:keydown={onKeyDown}
	on:keydown
	on:keyup
	on:keypress
	role="switch"
	aria-label="Light Switch"
	aria-checked={$modeCurrent}
	title="Toggle {$modeCurrent === true ? 'Dark' : 'Light'} Mode"
	tabindex="0"
>
	<!-- Thumb -->
	<div class="lightswitch-thumb {classesThumb}">
		<!-- SVG -->
		<svg class="lightswitch-icon {classesIcon}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path d={$modeCurrent ? svgPath.sun : svgPath.moon} />
		</svg>
	</div>
</div>
