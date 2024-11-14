<!-- Navigation Bar Test Copmonent -->

<script lang="ts">
	import { Navigation } from '$lib/index.js';
	let { childProps = {} } = $props();
	let childPropsSpread = childProps ?? {};
</script>

<!-- Bar -->
<Navigation.Bar value="0">
	<Navigation.Tile id="0" label="Files" {...childPropsSpread}>TileOne</Navigation.Tile>
	<Navigation.Tile id="1" label="Images" {...childPropsSpread}>TileTwo</Navigation.Tile>
</Navigation.Bar>
