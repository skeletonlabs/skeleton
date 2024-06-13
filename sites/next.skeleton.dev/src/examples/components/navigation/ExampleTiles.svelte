<script lang="ts">
	import { NavTile } from '@skeletonlabs/skeleton-svelte';
	import IconBox from 'lucide-svelte/icons/box';

	let hrefExample = '#';
</script>

<div class="card preset-filled-surface-100-900 p-4 grid grid-cols-3 gap-4">
	<!-- By default tiles are <button> elements -->
	<NavTile id="0" label="Button">
		<IconBox />
	</NavTile>
	<!-- When adding an href, they are converted to anchors -->
	<NavTile id="0" label="Anchor" href={hrefExample}>
		<IconBox />
	</NavTile>
	<!-- Add the selected prop to enable the active state -->
	<NavTile id="0" label="Active" selected>
		<IconBox />
	</NavTile>
</div>
