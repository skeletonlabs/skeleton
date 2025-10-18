<script lang="ts" module>
	import SkeletonFigmaUIKit from '@/assets/landing-page/skeleton-figma-ui-kit.png';

	const spacing = ['w-4', 'w-8', 'w-16', 'w-24', 'w-32', 'w-48', 'w-56', 'w-64', 'w-72'] as const;

	const steps = {
		figma: {
			label: 'The Figma UI Kit',
			description:
				'This premium kit allows you preview and mock all available interface elements, including dark mode support. Comes with a Figma plugin to import theme colors automatically.',
		},
		themes: {
			label: 'Themes',
			description:
				'Themes are empowered by CSS custom properties, enabling simple integration into Tailwind. Register multiple themes and easily switch on demand.',
		},
		colors: {
			label: 'Colors',
			description:
				'Manage your color palette with support for contrast tones. Make use of Color Pairings for balancing dark mode. As well as Presets to apply canned styles to elements and components.',
		},
		presets: {
			label: 'Presets',
			description:
				'Presets are utility classes combining Tailwind and Skeleton primitives. Style buttons, badges, cards, and more. Mix and match to create any look or feel.',
		},
		typography: {
			label: 'Typography',
			description:
				'Skeleton provides an array of opt-in utility classes for typographic elements. Includes primitives for generating semantic typography. Adjust theme settings to set the perfect typographic scale.',
		},
		spacing: {
			label: 'Spacing',
			description: 'Use the new Tailwind spacing system to dynamically scaling using a single theme-specified scale factor.',
		},
		iconography: {
			label: 'Iconography',
			description:
				"Skeleton takes an agnostic approach to icons, allowing you to bring your own icon library or mix and match to fulfill your project's aesthetic.",
		},
	} as const;
</script>

<script lang="ts">
	import { BookmarkIcon, HeartIcon, TriangleIcon, UserRoundIcon } from '@lucide/svelte';

	let activeStep = $state<(typeof steps)[keyof typeof steps]>(steps['figma']);

	const btnActive = 'btn preset-filled';
	const btnInactive = 'btn preset-outlined-surface-800-200 hover:preset-tonal';
</script>

<div class="grid grid-cols-1 xl:grid-cols-[0.75fr_2fr] gap-10">
	<!-- Text -->
	<div class="space-y-8">
		<h2 class="h2">Design System</h2>
		<nav class="grid grid-cols-2 gap-4">
			{#each Object.entries(steps) as [key, step] (key)}
				<button
					type="button"
					onclick={() => (activeStep = steps[key as keyof typeof steps])}
					class={{ 'col-span-2': key === 'figma', [activeStep.label === step.label ? btnActive : btnInactive]: true }}
				>
					{#if key === 'figma'}
						<svg
							class="size-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
							<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
							<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
							<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
							<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
						</svg>
					{/if}
					<span>{step.label}</span>
				</button>
			{/each}
		</nav>
		<div class="space-y-4">
			<p class="opacity-60">{activeStep.description}</p>
			{#if activeStep.label === 'The Figma UI Kit'}
				<a href="/figma" class="btn preset-tonal w-full">Learn More &rarr;</a>
			{/if}
		</div>
	</div>

	<div class="card bg-noise preset-filled-primary-500 aspect-video flex justify-center items-center overflow-hidden shadow-xl">
		{#if activeStep.label === 'The Figma UI Kit'}
			<img
				src={SkeletonFigmaUIKit.src}
				width={SkeletonFigmaUIKit.width}
				height={SkeletonFigmaUIKit.height}
				alt="figma"
				class="w-full h-auto"
			/>
		{/if}

		{#if activeStep.label === 'Themes'}
			<div class="w-full pt-10 pl-10">
				<pre class="pre box-border overflow-hidden w-full aspect-video mt-4 ml-4 xl:mt-10 xl:ml-10">
<code
						>{`[data-theme='cerberus'] {
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
    --anchor-text-decoration-focus: none;`.trim()}</code
					>
</pre>
			</div>
		{/if}

		{#if activeStep.label === 'The Figma UI Kit'}
			<div class="grid grid-cols-3 gap-5 md:gap-10">
				<div class="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-secondary-500"></div>
				<div class="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-tertiary-500"></div>
				<div class="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-success-500"></div>
				<div class="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-error-500"></div>
				<div class="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-warning-500"></div>
				<div class="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-surface-500"></div>
			</div>
		{/if}

		{#if activeStep.label === 'Presets'}
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
						<BookmarkIcon class="size-6" />
					</button>
				</div>
			</div>
		{/if}

		{#if activeStep.label === 'Typography'}
			<div class="text-center space-y-4">
				<h1 class="heading-font-family text-6xl md:text-9xl leading-none font-bold">Aa</h1>
				<p class="text-xs md:text-lg">The quick brown fox jumped over the lazy dog.</p>
			</div>
		{/if}

		{#if activeStep.label === 'Spacing'}
			<div class="scale-75 md:scale-150 flex flex-col items-start gap-1">
				{#each spacing as rowHeight}
					<div class="grid grid-cols-[32px_1fr] items-center gap-2">
						<span class="text-xs text-right">{rowHeight}</span>
						<div class={`bg-surface-50 h-2 ${rowHeight}`}></div>
					</div>
				{/each}
			</div>
		{/if}

		{#if activeStep.label === 'Iconography'}
			<div class="flex gap-5 md:gap-10">
				<HeartIcon class="size-16 md:size-24" />
				<UserRoundIcon class="size-16 md:size-24" />
				<TriangleIcon class="size-16 md:size-24" />
			</div>
		{/if}
	</div>
</div>
