<script lang="ts">
	import { genThemeCode } from '$lib/generator.svelte';
	let theme = $derived(genThemeCode());
</script>

<div class="space-y-4 md:space-y-8">
	<!-- Template Code Block -->
	<pre class="pre"><code>{JSON.stringify(theme.properties, null, 2)}</code></pre>

	<!--
	<hr class="hr" />
	<section class="space-y-4">
		<h2 class="h4">Colors</h2>
		<pre class="pre"><code>{JSON.stringify(stateFormColors, null, 2)}</code></pre>
	</section>
	<section class="space-y-4">
		<h2 class="h4">Backgrounds</h2>
		<pre class="pre"><code>{JSON.stringify(stateFormBackgrounds, null, 2)}</code></pre>
	</section>
	<section class="space-y-4">
		<h2 class="h4">Typography</h2>
		<pre class="pre"><code>{JSON.stringify(stateFormTypography, null, 2)}</code></pre>
	</section>
	<section class="space-y-4">
		<h2 class="h4">Spacing</h2>
		<pre class="pre"><code>{JSON.stringify(stateFormSpacing, null, 2)}</code></pre>
	</section>
	<section class="space-y-4">
		<h2 class="h4">Edges</h2>
		<pre class="pre"><code>{JSON.stringify(stateFormEdges, null, 2)}</code></pre>
	</section>
	-->
</div>
