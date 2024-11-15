<!-- Navigation Rail Test Copmonent -->

<script lang="ts">
	import { Navigation } from '$lib/index.js';
	let { rootProps = {}, childProps = {} } = $props();
	let rootPropsSpread = rootProps ?? {};
	let childPropsSpread = childProps ?? {};
</script>

<!-- Rail -->
<Navigation.Rail {...rootPropsSpread}>
	{#snippet header()}
		<Navigation.Tile labelExpanded="HeaderTileExpanded" href="/" {...childPropsSpread}>HeaderTile</Navigation.Tile>
	{/snippet}
	{#snippet tiles()}
		<Navigation.Tile id="0" label="Files" href="/" {...childPropsSpread}>TileOne</Navigation.Tile>
		<Navigation.Tile id="1" label="Images" href="/" {...childPropsSpread}>TileTwo</Navigation.Tile>
	{/snippet}
	{#snippet footer()}
		<Navigation.Tile labelExpanded="FooterTileExpanded" href="/" {...childPropsSpread}>FooterTile</Navigation.Tile>
	{/snippet}
</Navigation.Rail>
