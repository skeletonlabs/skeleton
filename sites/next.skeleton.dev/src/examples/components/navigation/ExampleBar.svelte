<script lang="ts">
	import { NavBar, NavTile } from '@skeletonlabs/skeleton-svelte';
	import IconBox from 'lucide-svelte/icons/box';

	let hrefExample = '#';
</script>

<div class="card border-[1px] border-surface-100-900 w-[320px] h-[480px] grid grid-rows-[1fr_auto]">
	<!-- Content -->
	<div class="flex justify-center items-center">
		<p class="opacity-20">(Content)</p>
	</div>
	<!-- Component -->
	<NavBar>
		<NavTile id="0" label="Tile 1" href={hrefExample}>
			<IconBox />
		</NavTile>
		<NavTile id="1" label="Tile 2" href={hrefExample}>
			<IconBox />
		</NavTile>
		<NavTile id="2" label="Tile 3" href={hrefExample}>
			<IconBox />
		</NavTile>
		<NavTile id="3" label="Tile 4" href={hrefExample}>
			<IconBox />
		</NavTile>
	</NavBar>
</div>
