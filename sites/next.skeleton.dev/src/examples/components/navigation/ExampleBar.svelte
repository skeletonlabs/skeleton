<script lang="ts">
	import { Nav } from '@skeletonlabs/skeleton-svelte';
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
	<Nav.Bar bind:value onchange={console.log}>
		<Nav.Tile id="0" label="Files">
			<IconFolder />
		</Nav.Tile>
		<Nav.Tile id="1" label="Images">
			<IconImage />
		</Nav.Tile>
		<Nav.Tile id="2" label="Music">
			<IconMusic />
		</Nav.Tile>
		<Nav.Tile id="3" label="Videos">
			<IconVideo />
		</Nav.Tile>
	</Nav.Bar>
</div>
