<script lang="ts">
	// Components
	import Edges from '$lib/components/Edges/Edges.svelte';
	// State
	import { settingsEdges } from '$lib/state/state.svelte';
</script>

<div class="space-y-4">
	<p class="opacity-60">Define radius shape and edge widths.</p>
	<div class="label">
		<span class="label-text">Rounded Base</span>
		<Edges name="rounded-base" items={[0, 2, 4, 6, 12, 24]} bind:value={settingsEdges['--radii-default']} />
	</div>
	<div class="label">
		<span class="label-text">Rounded Container</span>
		<Edges name="rounded-container" items={[0, 2, 4, 6, 12, 24, 9999]} bind:value={settingsEdges['--radii-container']} />
	</div>
	<hr class="hr" />
	<div class="label">
		<span class="label-text">Borders</span>
		<Edges name="borders" items={[0, 1, 2, 4, 6]} bind:value={settingsEdges['--border-width-default']} thickness />
	</div>
	<div class="label">
		<span class="label-text">Rings</span>
		<Edges name="rings" items={[0, 1, 2, 4, 6]} bind:value={settingsEdges['--divide-width-default']} thickness />
	</div>
	<div class="label">
		<span class="label-text">Outlines</span>
		<Edges name="outlines" items={[0, 1, 2, 4, 6]} bind:value={settingsEdges['--outline-width-default']} thickness />
	</div>
	<div class="label">
		<span class="label-text">Dividers</span>
		<Edges name="dividers" items={[0, 1, 2, 4, 6]} bind:value={settingsEdges['--ring-width-default']} thickness />
	</div>
</div>
