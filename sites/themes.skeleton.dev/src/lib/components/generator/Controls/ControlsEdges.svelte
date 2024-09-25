<script lang="ts">
	// Components
	import Edges from '$lib/components/generator/Edges/Edges.svelte';
	// State
	import { settingsEdges } from '$lib/state/generator.svelte';
</script>

<div class="space-y-4">
	<p class="opacity-60">Set border radius and edge widths.</p>
	<h2 class="h5">Border Radius</h2>
	<div class="label">
		<span class="label-text">Base Border Radius</span>
		<Edges name="rounded-base" items={[0, 1, 2, 4, 6, 12, 9999]} bind:value={settingsEdges['--radii-default']} />
	</div>
	<div class="label">
		<span class="label-text">Container Border Radius</span>
		<Edges name="rounded-container" items={[0, 1, 2, 4, 6, 12, 24]} bind:value={settingsEdges['--radii-container']} />
	</div>
	<h2 class="h5">Edge Widths</h2>
	<div class="label">
		<span class="label-text">Border Width</span>
		<Edges name="borders" items={[0, 1, 2, 4, 6]} bind:value={settingsEdges['--border-width-default']} thickness />
	</div>
	<div class="label">
		<span class="label-text">Ring Width</span>
		<Edges name="rings" items={[0, 1, 2, 4, 6]} bind:value={settingsEdges['--ring-width-default']} thickness />
	</div>
	<div class="label">
		<span class="label-text">Divider Width</span>
		<Edges name="dividers" items={[0, 1, 2, 4, 6]} bind:value={settingsEdges['--divide-width-default']} thickness />
	</div>
	<div class="label">
		<span class="label-text">Outline Width</span>
		<Edges name="outlines" items={[0, 1, 2, 4, 6]} bind:value={settingsEdges['--outline-width-default']} thickness />
	</div>
</div>
