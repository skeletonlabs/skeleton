<!-- Navigation Bar Test Component -->

<script lang="ts">
	import { Navigation } from '../../index.js';
	interface Props {
		childProps?: Record<string, unknown>;
	}
	let { childProps }: Props = $props();
</script>

<Navigation.Bar value="0">
	<Navigation.Tile id="0" label="Files" {...childProps}>TileOne</Navigation.Tile>
	<Navigation.Tile id="1" label="Images" {...childProps}>TileTwo</Navigation.Tile>
</Navigation.Bar>
