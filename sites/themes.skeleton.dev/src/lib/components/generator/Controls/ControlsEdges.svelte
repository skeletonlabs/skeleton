<script lang="ts">
	// Constants
	// Components
	import Edges from '$lib/components/generator/Edges/Edges.svelte';
	import * as constants from '$lib/constants/generator';
	// State
	import { settingsCorners, settingsEdges } from '$lib/state/generator.svelte';
</script>

<div class="space-y-4">
	<p class="opacity-60">Control settings for element edges.</p>
	<h2 class="h5">Border Radius</h2>
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

	<!-- Corner Shape -->
	<h2 class="h5">Corner Shape</h2>
	<p class="opacity-50">
		Implemented using the <a
			class="underline"
			href="https://skeleton.dev/docs/svelte/tailwind-utilities/corner-shapes"
			target="_blank"
			rel="noopener noreferrer">corner shape</a
		> utility.
	</p>
	<div class="grid grid-cols-2 gap-4">
		<label class="label">
			<span class="label-text">Base</span>
			<select class="select" name="--corner-shape-base" bind:value={settingsCorners['--corner-shape-base']}>
				{#each constants.cornerShapes as cornerShape}
					<option value={cornerShape}>{cornerShape}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Container</span>
			<select class="select" name="--corner-shape-container" bind:value={settingsCorners['--corner-shape-container']}>
				{#each constants.cornerShapes as cornerShape}
					<option value={cornerShape}>{cornerShape}</option>
				{/each}
			</select>
		</label>
	</div>

	<!-- Edge Width -->
	<h2 class="h5">Edge Defaults</h2>
	<p class="opacity-50">Set the default border, width, and outline sizes.</p>
	<div class="label">
		<span class="label-text">Border Width</span>
		<Edges name="borders" items={['1px', '2px', '4px', '6px']} bind:value={settingsEdges['--default-border-width']} thickness />
	</div>
	<div class="label">
		<span class="label-text">Ring Width</span>
		<Edges name="rings" items={['1px', '2px', '4px', '6px']} bind:value={settingsEdges['--default-ring-width']} thickness />
	</div>
	<div class="label">
		<span class="label-text">Outline Width</span>
		<Edges name="outlines" items={['1px', '2px', '4px', '6px']} bind:value={settingsEdges['--default-outline-width']} thickness />
	</div>
</div>
