<script lang="ts">
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconFolder from '@lucide/svelte/icons/folder';
	import IconImage from '@lucide/svelte/icons/image';
	import IconMusic from '@lucide/svelte/icons/music';
	import IconVideo from '@lucide/svelte/icons/video';
</script>

<div class="card border-surface-100-900 grid h-[512px] w-[320px] grid-rows-[1fr_auto] border-[1px]">
	<!-- Content -->
	<div class="flex items-center justify-center">
		<p class="opacity-20">(Content)</p>
	</div>
	<!-- Component -->
	<Navigation.Bar>
		<Navigation.Tile label="Files" href="#/files"><IconFolder /></Navigation.Tile>
		<Navigation.Tile label="Images" href="#/images"><IconImage /></Navigation.Tile>
		<Navigation.Tile label="Music" href="#/music"><IconMusic /></Navigation.Tile>
		<Navigation.Tile label="Videos" href="#/videos"><IconVideo /></Navigation.Tile>
	</Navigation.Bar>
</div>
