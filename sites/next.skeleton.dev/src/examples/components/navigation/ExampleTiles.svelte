<script lang="ts">
	import { Nav } from '@skeletonlabs/skeleton-svelte';
	import IconBox from 'lucide-svelte/icons/box';

	let hrefExample = '#';
</script>

<div class="card preset-filled-surface-100-900 grid grid-cols-3 gap-5 p-5">
	<!-- By default tiles are <button> elements -->
	<Nav.Tile id="0" label="Button">
		<IconBox />
	</Nav.Tile>
	<!-- Add selected to button tiles to enable the active state -->
	<Nav.Tile id="0" label="Button" selected>
		<IconBox />
	</Nav.Tile>
	<!-- When adding an href, they are converted to anchors -->
	<Nav.Tile id="0" label="Anchor" href={hrefExample}>
		<IconBox />
	</Nav.Tile>
</div>
