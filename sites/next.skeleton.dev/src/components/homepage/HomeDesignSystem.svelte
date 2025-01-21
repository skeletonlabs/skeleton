<script lang="ts">
	const steps = [
		{
			label: 'Figma UI Kit',
			desc: 'Import Skeleton themes directly into Figma using our dedicated plugin. Switch between dark and light modes on the fly. Preview all available components instantly.'
		},
		{
			label: 'Themes',
			desc: 'Themes are the heart of the Skeleton’s design system, empowered by CSS custom properties, authored as CSS-in-JS to enable simple integration into Skeleton’s Tailwind plugin. Which allows for simple pre-registration and switching on demand.'
		},
		{
			label: 'Colors',
			desc: 'Manages your applications color palette, with support for contrast tones. Make use of Color Pairings for balancing dark mode and Presets to quickly style elements.'
		},
		{
			label: 'Presets',
			desc: 'Presets are complex utilty classes that combine various Skeleton primitives. Allowing you quickly style buttons, badges, cards, and more. Create any combination of styles by mixing Skeleton Presets and Tailwind primitives.'
		},
		{
			label: 'Typography',
			desc: 'Skeleton provides an array of opt-in utility classes for common typographic elements. As well as a number of primitives for extending and generating semantic typography sets. Use theme settings to provide the perfect typographic scale.'
		},
		{
			label: 'Spacing',
			desc: 'This extends the Tailwind spacing system, enabling dynamic scaling based on a theme-specified scale factor.'
		},
		{
			label: 'Iconography',
			desc: 'Skeleton takes an agnostic approach to icons, meaning you can use any combination of SVGs, emoji, unicode, or dedicated icon libraries. Mix and match to fulfill your project’s unique requirements.'
		}
	];
	// State
	let state = $state(0);
	// Button States
	const btnActive = 'btn preset-filled';
	const btnInactive = 'btn preset-outlined-surface-400-600 hover:preset-tonal';

	function setState(newState: number) {
		state = newState;
	}

	function setStateClass(buttonState: number) {
		return buttonState === state ? btnActive : btnInactive;
	}
</script>

<div class="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-10">
	<!-- Text -->
	<div class="space-y-8">
		<h2 class="h2">Design System</h2>
		<nav class="grid grid-cols-2 gap-4">
			{#each steps as step, i}
				<button type="button" onclick={() => setState(i)} class={setStateClass(i)}>{step.label}</button>
			{/each}
		</nav>
		<p class="opacity-60">{steps[state].desc}</p>
	</div>
	<!-- Carousel -->
	<div class="card bg-noise preset-filled-primary-500 aspect-video flex justify-center items-center overflow-hidden shadow-xl">
		{#if state === 0}
			<!-- Figma Image -->
			<img src="https://i.imgur.com/KOrl47B.png" alt="figma" class="w-full h-auto" />
		{:else if state == 1}
			<p>{steps[state].label} - {state}</p>
		{:else if state == 2}
			<p>{steps[state].label} - {state}</p>
		{:else if state == 3}
			<p>{steps[state].label} - {state}</p>
		{:else if state == 4}
			<p>{steps[state].label} - {state}</p>
		{:else if state == 5}
			<p>{steps[state].label} - {state}</p>
		{:else if state == 6}
			<p>{steps[state].label} - {state}</p>
		{:else if state == 7}
			<p>{steps[state].label} - {state}</p>
		{/if}
	</div>
</div>
