<script lang="ts">
	// Icons
	import IconBookmark from '@lucide/svelte/icons/bookmark';
	import IconFigma from '@lucide/svelte/icons/figma';
	import IconHeart from '@lucide/svelte/icons/heart';
	import IconTriangle from '@lucide/svelte/icons/triangle';
	import IconUserRound from '@lucide/svelte/icons/user-round';

	let state = $state(0);
	const steps = [
		{
			label: 'The Figma UI Kit',
			desc: 'This premium kit allows you preview and mock all available interface elements, including dark mode support. Comes with a Figma plugin to import theme colors automatically.',
		},
		{
			label: 'Themes',
			desc: 'Themes are empowered by CSS custom properties, enabling simple integration into Tailwind. Register multiple themes and easily switch on demand.',
		},
		{
			label: 'Colors',
			desc: 'Manage your color palette with support for contrast tones. Make use of Color Pairings for balancing dark mode. As well as Presets to apply canned styles to elements and components.',
		},
		{
			label: 'Presets',
			desc: 'Presets are utility classes combining Tailwind and Skeleton primitives. Style buttons, badges, cards, and more. Mix and match to create any look or feel.',
		},
		{
			label: 'Typography',
			desc: 'Skeleton provides an array of opt-in utility classes for typographic elements. Includes primitives for generating semantic typography. Adjust theme settings to set the perfect typographic scale.',
		},
		{
			label: 'Spacing',
			desc: 'Use the new Tailwind spacing system to dynamically scaling using a single theme-specified scale factor.',
		},
		{
			label: 'Iconography',
			desc: 'Skeleton takes an agnostic approach to icons, allowing you to bring your own icon library or mix and match to fulfill your project’s aesthetic.',
		},
	];
	const btnActive = 'btn preset-filled';
	const btnInactive = 'btn preset-outlined-surface-800-200 hover:preset-tonal';

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
			{#each steps as step, i (step)}
				<button type="button" onclick={() => setState(i)} class={`${setStateClass(i)} ${i === 0 ? 'col-span-2' : ''}`}>
					{#if i === 0}<IconFigma class="size-4" />{/if}
					<span>{step.label}</span>
				</button>
			{/each}
		</nav>
		<div class="space-y-4">
			<p class="opacity-60">{steps[state].desc}</p>
			{#if state === 0}
				<a href="/figma" class="btn preset-tonal w-full">Learn More &rarr;</a>
			{/if}
		</div>
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
<code>{`[data-theme='cerberus'] {
	--spacing: 0.25rem;
	--text-scaling: 1.067;
	--base-font-color: var(--color-surface-950);
	--base-font-color-dark: var(--color-surface-50);
	--base-font-family: system-ui;
	--base-font-size: inherit;
	--base-line-height: inherit;
	--base-font-weight: normal;
	--base-font-style: normal;
	--base-letter-spacing: 0em;
	--heading-font-color: inherit;
	--heading-font-color-dark: inherit;
	--heading-font-family: inherit;
	--heading-font-weight: bold;
	--heading-font-style: normal;
	--heading-letter-spacing: inherit;
	--anchor-font-color: var(--color-primary-500);
	--anchor-font-color-dark: var(--color-primary-400);
	--anchor-font-family: inherit;
	--anchor-font-size: inherit;
	--anchor-line-height: inherit;
	--anchor-font-weight: inherit;
	--anchor-font-style: inherit;
	--anchor-letter-spacing: inherit;
	--anchor-text-decoration: none;
	--anchor-text-decoration-hover: underline;
	--anchor-text-decoration-active: none;
	--anchor-text-decoration-focus: none;`.trim()}
</code>
</pre>
			</div>
		{:else if state == 2}
			<!-- Step 3: Colors -->
			<div class="grid grid-cols-3 gap-5 md:gap-10">
				<div class="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-secondary-500"></div>
				<div class="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-tertiary-500"></div>
				<div class="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-success-500"></div>
				<div class="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-error-500"></div>
				<div class="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-warning-500"></div>
				<div class="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-surface-500"></div>
			</div>
		{:else if state == 3}
			<!-- Step 4: Presets -->
			<div class="md:scale-125 xl:scale-150 grid grid-cols-3 gap-4 xl:gap-10">
				<div class="flex flex-col items-center">
					<button type="button" class="btn preset-filled">Filled</button>
				</div>
				<div class="flex flex-col items-center">
					<button type="button" class="btn preset-tonal hover:preset-filled hover:brightness-100">Tonal</button>
				</div>
				<div class="flex flex-col items-center">
					<button type="button" class="btn preset-outlined hover:brightness-100">Outlined</button>
				</div>
				<div class="flex flex-col items-center">
					<button type="button" class="btn preset-filled shadow-xl">Elevated</button>
				</div>
				<div class="flex flex-col items-center">
					<button type="button" class="btn hover:preset-filled hover:brightness-100">Ghost</button>
				</div>
				<div class="flex flex-col items-center">
					<button type="button" class="btn hover:preset-filled hover:brightness-100">
						<IconBookmark className="size-6" />
					</button>
				</div>
			</div>
		{:else if state == 4}
			<!-- Step 5: Typography -->
			<div class="text-center space-y-4">
				<h1 class="heading-font-family text-6xl md:text-9xl leading-none font-bold">Aa</h1>
				<p class="text-xs md:text-lg">The quick brown fox jumped over the lazy dog.</p>
			</div>
		{:else if state == 5}
			<!-- Step 6: Spacing -->
			<div class="scale-75 md:scale-150 flex flex-col items-start gap-1">
				{#each spacing as rowHeight (rowHeight)}
					<div class="grid grid-cols-[32px_1fr] items-center gap-2">
						<span class="text-xs text-right">{rowHeight}</span>
						<div class="bg-surface-50 h-2 {rowHeight}"></div>
					</div>
				{/each}
			</div>
		{:else if state == 6}
			<!-- Step 7: Iconography -->
			<div class="flex gap-5 md:gap-10">
				<IconHeart class="size-16 md:size-24" />
				<IconUserRound class="size-16 md:size-24" />
				<IconTriangle class="size-16 md:size-24" />
			</div>
		{/if}
	</div>
</div>
