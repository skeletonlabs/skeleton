<script lang="ts">
	// State
	import {
		stateFormColors,
		stateFormBackgrounds,
		stateFormTypography,
		stateFormSpacing,
		stateFormEdges
	} from '$lib/state.svelte';
	// Utils
	import { genColorPalette } from '$lib/generator';

	// Local
	let colorPalette = $derived(genColorPalette(stateFormColors));
</script>

<div class="space-y-4 px-4 md:space-y-8 md:px-8">
	<!-- Palette Preview -->
	<div class="grid grid-cols-7 gap-0.5">
		{#each Object.values(colorPalette) as color}
			<div class="grid grid-rows-11 gap-0.5">
				{#each Object.values(color || {}) as shade}
					<div class="p-2 pt-6 text-center" style:background="rgb({shade})">
						<div class="bg-black/30">{shade}</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>

	<section class="space-y-4">
		<h2 class="h4">Color Palette</h2>
		<pre class="pre">{JSON.stringify(colorPalette, null, 2)}</pre>
	</section>

	<hr class="hr" />

	<section class="space-y-4">
		<h2 class="h4">Colors</h2>
		<pre class="pre">{JSON.stringify(stateFormColors, null, 2)}</pre>
	</section>

	<section class="space-y-4">
		<h2 class="h4">Backgrounds</h2>
		<pre class="pre">{JSON.stringify(stateFormBackgrounds, null, 2)}</pre>
	</section>

	<section class="space-y-4">
		<h2 class="h4">Typography</h2>
		<pre class="pre">{JSON.stringify(stateFormTypography, null, 2)}</pre>
	</section>

	<section class="space-y-4">
		<h2 class="h4">Spacing</h2>
		<pre class="pre">{JSON.stringify(stateFormSpacing, null, 2)}</pre>
	</section>

	<section class="space-y-4">
		<h2 class="h4">Edges</h2>
		<pre class="pre">{JSON.stringify(stateFormEdges, null, 2)}</pre>
	</section>
</div>
