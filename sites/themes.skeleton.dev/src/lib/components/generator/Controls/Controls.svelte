<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';

	// State
	const settings = $state([]);
</script>

<section class="relative h-screen bg-surface-100-900 overflow-y-auto">
	<!-- Header -->
	<header class="sticky top-0 z-10 bg-surface-100/90 dark:bg-surface-900/90 backdrop-blur-xl p-5">
		<button type="button" class="btn preset-filled w-full" disabled>Generate Theme</button>
	</header>
	<!-- Settings -->
	<div class="p-5">
		<Accordion value={settings} collapsible>
			<Accordion.Item value="colors" controlHover="hover:preset-tonal">
				{#snippet lead()}
					<span class="btn preset-tonal">&star;</span>
				{/snippet}
				{#snippet control()}
					<span class="h4">Colors</span>
				{/snippet}
				{#snippet panel()}
					<p>(pane-colors)</p>
				{/snippet}
			</Accordion.Item>
			<Accordion.Item value="typography" controlHover="hover:preset-tonal">
				{#snippet lead()}
					<span class="btn preset-tonal">&star;</span>
				{/snippet}
				{#snippet control()}
					<span class="h4">Typography</span>
				{/snippet}
				{#snippet panel()}
					<p>(pane-typography)</p>
				{/snippet}
			</Accordion.Item>
			<Accordion.Item value="spacing" controlHover="hover:preset-tonal">
				{#snippet lead()}
					<span class="btn preset-tonal">&star;</span>
				{/snippet}
				{#snippet control()}
					<span class="h4">Spacing</span>
				{/snippet}
				{#snippet panel()}
					<p>(pane-spacing)</p>
				{/snippet}
			</Accordion.Item>
			<Accordion.Item value="edges" controlHover="hover:preset-tonal">
				{#snippet lead()}
					<span class="btn preset-tonal">&star;</span>
				{/snippet}
				{#snippet control()}
					<span class="h4">Edges</span>
				{/snippet}
				{#snippet panel()}
					<p>(pane-edges)</p>
				{/snippet}
			</Accordion.Item>
		</Accordion>
	</div>
	<!-- Footer -->
	<!-- <footer class="p-5"><p>(footer)</p></footer> -->
</section>
