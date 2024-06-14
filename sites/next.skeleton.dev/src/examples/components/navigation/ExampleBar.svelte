<script lang="ts">
	import { NavBar, NavTile } from '@skeletonlabs/skeleton-svelte';
	import IconFolder from 'lucide-svelte/icons/folder';
	import IconImage from 'lucide-svelte/icons/image';
	import IconMusic from 'lucide-svelte/icons/music';
	import IconVideo from 'lucide-svelte/icons/video';

	let hrefExample = '#';
</script>

<div class="card border-[1px] border-surface-100-900 w-[320px] h-[512px] grid grid-rows-[1fr_auto]">
	<!-- Content -->
	<div class="flex justify-center items-center">
		<p class="opacity-20">(Content)</p>
	</div>
	<!-- Component -->
	<NavBar>
		<NavTile id="0" label="Files" href={hrefExample}>
			<IconFolder />
		</NavTile>
		<NavTile id="1" label="Images" href={hrefExample}>
			<IconImage />
		</NavTile>
		<NavTile id="2" label="Music" href={hrefExample}>
			<IconMusic />
		</NavTile>
		<NavTile id="3" label="Videos" href={hrefExample}>
			<IconVideo />
		</NavTile>
	</NavBar>
</div>
