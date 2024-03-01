<script lang="ts">
	import { codeToHtml } from 'shiki';
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
	// Components
	import CodeBlock from '../utilities/CodeBlock.svelte';

	// Local
	const theme = {
		properties: {
			foo: 'bar'
		}
	};

	// Reactive State
	let colorPalette = $derived(genColorPalette(stateFormColors));
</script>

<div class="px-4 md:px-8 space-y-4 md:space-y-8">
	<!-- Template Code Block -->
	<CodeBlock code={theme.properties} lang="ts" />

	<hr class="hr" />

	<!-- Palette Preview -->
	<div class="grid grid-cols-7 gap-0.5">
		{#each Object.values(colorPalette) as color}
			<div class="grid grid-rows-11 gap-0.5">
				{#each Object.values(color || {}) as shade}
					<div class="p-2 pt-6 text-center" style:background="rgb({shade})">
						<div class="bg-black/30 text-white">{shade}</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>

	<section class="space-y-4">
		<h2 class="h4">Color Palette</h2>
		<CodeBlock code={colorPalette} lang="ts" />
	</section>

	<hr class="hr" />

	<section class="space-y-4">
		<h2 class="h4">Colors</h2>
		<CodeBlock code={stateFormColors} lang="ts" />
	</section>

	<section class="space-y-4">
		<h2 class="h4">Backgrounds</h2>
		<CodeBlock code={stateFormBackgrounds} lang="ts" />
	</section>

	<section class="space-y-4">
		<h2 class="h4">Typography</h2>
		<CodeBlock code={stateFormTypography} lang="ts" />
	</section>

	<section class="space-y-4">
		<h2 class="h4">Spacing</h2>
		<CodeBlock code={stateFormSpacing} lang="ts" />
	</section>

	<section class="space-y-4">
		<h2 class="h4">Edges</h2>
		<CodeBlock code={stateFormEdges} lang="ts" />
	</section>
</div>
