<!-- Navigation Bar Test Component -->

<script lang="ts">
	import { Navigation } from '$lib/index.js';
	interface Props {
		childProps?: Record<string, unknown>;
	}
	let { childProps }: Props = $props();
</script>

<Navigation.Bar value="0">
	<Navigation.Tile label="Files" {...childProps}>TileOne</Navigation.Tile>
	<Navigation.Tile label="Images" {...childProps}>TileTwo</Navigation.Tile>
</Navigation.Bar>
