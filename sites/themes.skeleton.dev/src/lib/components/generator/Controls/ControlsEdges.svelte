<script lang="ts">
	// Constants
	// Components
	import Edges from '$lib/components/generator/Edges/Edges.svelte';
	import * as constants from '$lib/constants/generator';
	// State
	import { settingsCorners, settingsEdges } from '$lib/state/generator.svelte';

	// The 'inherit' corner shape has no distinct visual, so it's excluded from the preview grid.
	const cornerShapeOptions = constants.cornerShapes.filter((shape) => shape !== 'inherit');
</script>

<div class="space-y-8">
	<section class="space-y-2">
		<header>
			<p class="opacity-60">Control settings for element edges.</p>
			<h2 class="h5">Border Radius</h2>
		</header>
		<div class="label">
			<span class="label-text">Base</span>
			<Edges
				name="rounded-base"
				items={['0rem', '0.063rem', '0.125rem', '0.25rem', '0.375rem', '0.75rem', '9999rem']}
				bind:value={settingsEdges['--radius-base']}
			/>
		</div>
		<div class="label">
			<span class="label-text">Container</span>
			<Edges
				name="rounded-container"
				items={['0rem', '0.063rem', '0.125rem', '0.25rem', '0.375rem', '0.75rem', '1.5rem']}
				bind:value={settingsEdges['--radius-container']}
			/>
		</div>
	</section>

	<!-- Corner Shape -->
	<section class="space-y-4">
		<header>
			<h2 class="h5">Corner Shape</h2>
			<p class="opacity-50">
				Implemented using the <a
					class="underline"
					href="https://skeleton.dev/docs/svelte/tailwind-utilities/corner-shapes"
					target="_blank"
					rel="noopener noreferrer">corner shape</a
				> utility.
			</p>
		</header>
		<div class="label">
			<span class="label-text">Base</span>
			<Edges name="--corner-shape-base" items={cornerShapeOptions} bind:value={settingsCorners['--corner-shape-base']} mode="corner" />
		</div>
		<div class="label">
			<span class="label-text">Container</span>
			<Edges
				name="--corner-shape-container"
				items={cornerShapeOptions}
				bind:value={settingsCorners['--corner-shape-container']}
				mode="corner"
			/>
		</div>
	</section>

	<!-- Edge Width -->
	<section class="space-y-4">
		<header>
			<h2 class="h5">Edge Defaults</h2>
			<p class="opacity-50">Set the default border, width, and outline sizes.</p>
		</header>
		<div class="label">
			<span class="label-text">Border Width</span>
			<Edges name="borders" items={['1px', '2px', '4px', '6px']} bind:value={settingsEdges['--default-border-width']} mode="thickness" />
		</div>
		<div class="label">
			<span class="label-text">Ring Width</span>
			<Edges name="rings" items={['1px', '2px', '4px', '6px']} bind:value={settingsEdges['--default-ring-width']} mode="thickness" />
		</div>
		<div class="label">
			<span class="label-text">Outline Width</span>
			<Edges name="outlines" items={['1px', '2px', '4px', '6px']} bind:value={settingsEdges['--default-outline-width']} mode="thickness" />
		</div>
	</section>
</div>
