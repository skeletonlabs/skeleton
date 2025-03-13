<script lang="ts">
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconFolder from '@lucide/svelte/icons/folder';
	import IconImage from '@lucide/svelte/icons/image';
	import IconMusic from '@lucide/svelte/icons/music';
	import IconVideo from '@lucide/svelte/icons/video';

	// State
	let value = $state('files');
</script>

<div class="card border-surface-100-900 grid h-[640px] w-full grid-cols-[auto_1fr] border-[1px]">
	<!-- Component -->
	<Navigation.Rail {value} onValueChange={(newValue) => (value = newValue)}>
		{#snippet tiles()}
			<Navigation.Tile id="files" label="Files"><IconFolder /></Navigation.Tile>
			<Navigation.Tile id="images" label="Images"><IconImage /></Navigation.Tile>
			<Navigation.Tile id="music" label="Music"><IconMusic /></Navigation.Tile>
			<Navigation.Tile id="videos" label="Videos"><IconVideo /></Navigation.Tile>
		{/snippet}
	</Navigation.Rail>
	<!-- Content -->
	<div class="flex items-center justify-center">
		<pre class="pre">value: {value}</pre>
	</div>
</div>
