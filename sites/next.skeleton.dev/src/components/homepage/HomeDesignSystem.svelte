<script lang="ts">
	// Icons
	import IconFigma from 'lucide-svelte/icons/figma';
	import IconBookmark from 'lucide-svelte/icons/bookmark';
	import IconHeart from 'lucide-svelte/icons/heart';
	import IconUserRound from 'lucide-svelte/icons/user-round';
	import IconTriangle from 'lucide-svelte/icons/triangle';

	let state = $state(0);
	const steps = [
		{
			label: 'The Figma UI Kit',
			desc: 'This premium kit allows you to import Skeleton themes directly into Figma a dedicated plugin. Switch between dark and light modes on the fly. Preview all available components instantly.'
		},
		{
			label: 'Themes',
			desc: 'Themes are empowered by CSS custom properties, enabling simple integration into Skeleton’s Tailwind plugin. Allowing for simple registration and easy switching on demand.'
		},
		{
			label: 'Colors',
			desc: 'Manages your full color palette with support for contrast tones. Make use of Color Pairings for balancing dark mode. As well as Presets to apply canned styles to elements and components.'
		},
		{
			label: 'Presets',
			desc: 'Presets are utilty classes that combine Tailwind and Skeleton primitives. Quickly style buttons, badges, cards, and more. Create any combination by mixing and matching primitives.'
		},
		{
			label: 'Typography',
			desc: 'Skeleton provides an array of opt-in utility classes for typographic elements. Includes primitives for generating semantic typography. Adjust theme settings to set the perfect typographic scale.'
		},
		{
			label: 'Spacing',
			desc: 'This extends the Tailwind spacing system, adjust dynamic scaling using a single theme-specified scale factor.'
		},
		{
			label: 'Iconography',
			desc: 'Skeleton takes an agnostic approach to icons, allowing you to bring your own icon library or mix and match to fulfill your project’s aesthetic or requirements.'
		}
	];
	const btnActive = 'btn preset-filled';
	const btnInactive = 'btn preset-outlined-surface-400-600 hover:preset-tonal';

	export const spacing = ['w-4', 'w-8', 'w-16', 'w-24', 'w-32', 'w-48', 'w-56', 'w-64', 'w-72'];

	function setState(newState: number) {
		state = newState;
	}

	function setStateClass(buttonState: number) {
		return buttonState === state ? btnActive : btnInactive;
	}
</script>

<div class="grid grid-cols-1 xl:grid-cols-[0.75fr_2fr] gap-10">
	<!-- Text -->
	<div class="space-y-8">
		<h2 class="h2">Design System</h2>
		<nav class="grid grid-cols-2 gap-4">
			{#each steps as step, i}
				<button type="button" onclick={() => setState(i)} class={`${setStateClass(i)} ${i === 0 ? 'col-span-2' : ''}`}>
					{#if i === 0}<IconFigma class="size-4" />{/if}
					<span>{step.label}</span>
				</button>
			{/each}
		</nav>
		<p class="opacity-60">{steps[state].desc}</p>
	</div>
	<!-- Carousel -->
	<div class="card bg-noise preset-filled-primary-500 aspect-video flex justify-center items-center overflow-hidden shadow-xl">
		{#if state === 0}
			<!-- Step 1: Figma -->
			<img src="https://i.imgur.com/KOrl47B.png" alt="figma" class="w-full h-auto" />
		{:else if state == 1}
			<!-- Step 2: Themes -->
			<div class="w-full pt-10 pl-10">
				<!-- <img src="https://i.imgur.com/6cnOrZ4.png" alt="code" class="w-full h-auto rounded-tl-container" /> -->
				<!-- prettier-ignore -->
				<pre class="pre box-border overflow-hidden w-full aspect-video mt-4 ml-4 xl:mt-10 xl:ml-10">
<code>{`import type { Theme } from '@skeletonlabs/skeleton/themes';\n
const theme = {
  "name": "theme",
  "properties": {
    "--type-scale-factor": "1.067",
    "--type-scale-1": "calc(0.75rem * var(--type-scale-factor))",
    "--type-scale-2": "calc(0.875rem * var(--type-scale-factor))",
    "--type-scale-3": "calc(1rem * var(--type-scale-factor))",
    "--type-scale-4": "calc(1.125rem * var(--type-scale-factor))",
    "--type-scale-5": "calc(1.25rem * var(--type-scale-factor))",
    "--type-scale-6": "calc(1.5rem * var(--type-scale-factor))",
    "--type-scale-7": "calc(1.875rem * var(--type-scale-factor))",
    "--type-scale-8": "calc(2.25rem * var(--type-scale-factor))",
    "--type-scale-9": "calc(3rem * var(--type-scale-factor))",
    "--type-scale-10": "calc(3.75rem * var(--type-scale-factor))",
    "--type-scale-11": "calc(4.5rem * var(--type-scale-factor))",
    "--type-scale-12": "calc(6rem * var(--type-scale-factor))",
    "--type-scale-13": "calc(8rem * var(--type-scale-factor))",
    "--base-font-color": "var(--color-surface-950)",
    "--base-font-color-dark": "var(--color-surface-50)",
    "--base-font-family": "system-ui, sans-serif",
    "--base-font-size": "inherit",
    "--base-line-height": "inherit",
    "--base-font-weight": "normal",
    "--base-font-style": "normal",
    "--base-letter-spacing": "0em",`.trim()}
</code>
</pre>
			</div>
		{:else if state == 2}
			<!-- Step 3: Colors -->
			<div class="grid grid-cols-3 gap-5 md:gap-10">
				<div class="w-16 md:w-32 aspect-square rounded-full shadow-xl bg-secondary-500"></div>
				<div class="w-16 md:w-32 aspect-square rounded-full shadow-xl bg-tertiary-500"></div>
				<div class="w-16 md:w-32 aspect-square rounded-full shadow-xl bg-success-500"></div>
				<div class="w-16 md:w-32 aspect-square rounded-full shadow-xl bg-error-500"></div>
				<div class="w-16 md:w-32 aspect-square rounded-full shadow-xl bg-warning-500"></div>
				<div class="w-16 md:w-32 aspect-square rounded-full shadow-xl bg-surface-500"></div>
			</div>
		{:else if state == 3}
			<!-- Step 4: Presets -->
			<div class="md:scale-125 xl:scale-150 grid grid-cols-3 gap-6 xl:gap-10">
				<div class="flex flex-col items-center gap-4">
					<button type="button" class="btn preset-filled">Filled</button>
				</div>
				<div class="flex flex-col items-center gap-4">
					<button type="button" class="btn preset-tonal hover:preset-filled">Tonal</button>
				</div>
				<div class="flex flex-col items-center gap-4">
					<button type="button" class="btn preset-outlined-surface">Outlined</button>
				</div>
				<div class="flex flex-col items-center gap-4">
					<button type="button" class="btn preset-filled shadow-xl">Elevated</button>
				</div>
				<div class="flex flex-col items-center gap-4">
					<button type="button" class="btn hover:preset-filled">Ghost</button>
				</div>
				<div class="flex flex-col items-center gap-4">
					<button type="button" class="btn hover:preset-filled">
						<IconBookmark className="size-6" />
					</button>
				</div>
			</div>
		{:else if state == 4}
			<!-- Step 5: Typography -->
			<div class="text-center space-y-4">
				<h1 class="heading-font-family type-scale-11 md:type-scale-13 leading-none font-bold">Aa</h1>
				<p class="md:text-lg">The quick brown fox jumped over the lazy dog.</p>
			</div>
		{:else if state == 5}
			<!-- Step 6: Spacing -->
			<div class="md:scale-150 flex flex-col items-start gap-1">
				{#each spacing as rowHeight}
					<div class="grid grid-cols-[32px_1fr] items-center gap-2">
						<span class="text-xs text-right">{rowHeight}</span>
						<div class="bg-surface-50 h-2 {rowHeight}"></div>
					</div>
				{/each}
			</div>
		{:else if state == 6}
			<!-- Step 7: Iconography -->
			<div class="flex gap-10">
				<IconHeart class="size-16 md:size-24" />
				<IconUserRound class="size-16 md:size-24" />
				<IconTriangle class="size-16 md:size-24" />
			</div>
		{/if}
	</div>
</div>
