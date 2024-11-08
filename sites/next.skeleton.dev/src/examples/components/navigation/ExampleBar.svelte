<script lang="ts">
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	import IconFolder from 'lucide-svelte/icons/folder';
	import IconImage from 'lucide-svelte/icons/image';
	import IconMusic from 'lucide-svelte/icons/music';
	import IconVideo from 'lucide-svelte/icons/video';

	// You may optionally bind a selected state value
	// Pass the ID item you wish to be selected by default.
	let value = $state('0');
</script>

<div class="card border-surface-100-900 grid h-[512px] w-[320px] grid-rows-[1fr_auto] border-[1px]">
	<!-- Content -->
	<div class="flex items-center justify-center">
		<p class="opacity-20">(Content)</p>
	</div>
	<!-- Component -->
	<Navigation.Bar bind:value onchange={console.log}>
		<Navigation.Tile id="0" label="Files">
			<IconFolder />
		</Navigation.Tile>
		<Navigation.Tile id="1" label="Images">
			<IconImage />
		</Navigation.Tile>
		<Navigation.Tile id="2" label="Music">
			<IconMusic />
		</Navigation.Tile>
		<Navigation.Tile id="3" label="Videos">
			<IconVideo />
		</Navigation.Tile>
	</Navigation.Bar>
</div>
