<script lang="ts">
	import { NavBar, NavTile } from '@skeletonlabs/skeleton-svelte';
	import IconFolder from 'lucide-svelte/icons/folder';
	import IconImage from 'lucide-svelte/icons/image';
	import IconMusic from 'lucide-svelte/icons/music';
	import IconVideo from 'lucide-svelte/icons/video';

	let hrefExample = '#';
</script>

<div class="card border-surface-100-900 grid h-[512px] w-[320px] grid-rows-[1fr_auto] border-[1px]">
	<!-- Content -->
	<div class="flex items-center justify-center">
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
