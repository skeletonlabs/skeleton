<!-- Navigation Rail Test Component -->

<script lang="ts">
	import { Navigation } from '$lib/index.js';
	interface Props {
		rootProps?: Record<string, unknown>;
		childProps?: Record<string, unknown>;
	}
	let { rootProps, childProps }: Props = $props();
</script>

<!-- Rail -->
<Navigation.Rail {...rootProps}>
	{#snippet header()}
		<Navigation.Tile labelExpanded="HeaderTileExpanded" href="/" {...childProps}>HeaderTile</Navigation.Tile>
	{/snippet}
	{#snippet tiles()}
		<Navigation.Tile label="Files" href="/" {...childProps}>TileOne</Navigation.Tile>
		<Navigation.Tile label="Images" href="/" {...childProps}>TileTwo</Navigation.Tile>
	{/snippet}
	{#snippet footer()}
		<Navigation.Tile labelExpanded="FooterTileExpanded" href="/" {...childProps}>FooterTile</Navigation.Tile>
	{/snippet}
</Navigation.Rail>
