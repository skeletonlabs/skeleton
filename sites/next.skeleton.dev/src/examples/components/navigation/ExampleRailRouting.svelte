<script lang="ts">
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconMenu from 'lucide-svelte/icons/menu';
	import IconFolder from 'lucide-svelte/icons/folder';
	import IconImage from 'lucide-svelte/icons/image';
	import IconMusic from 'lucide-svelte/icons/music';
	import IconVideo from 'lucide-svelte/icons/video';
	import IconSettings from 'lucide-svelte/icons/settings';
</script>

<div class="card border-surface-100-900 grid h-[640px] w-full grid-cols-[auto_1fr] border-[1px]">
	<!-- Component -->
	<Navigation.Rail>
		{#snippet header()}
			<Navigation.Tile href="#" title="Menu"><IconMenu /></Navigation.Tile>
		{/snippet}
		{#snippet tiles()}
			<Navigation.Tile label="Files" href="#/files"><IconFolder /></Navigation.Tile>
			<Navigation.Tile label="Images" href="#/images"><IconImage /></Navigation.Tile>
			<Navigation.Tile label="Music" href="#/music"><IconMusic /></Navigation.Tile>
			<Navigation.Tile label="Videos" href="#/videos"><IconVideo /></Navigation.Tile>
		{/snippet}
		{#snippet footer()}
			<Navigation.Tile labelExpanded="Settings" href="#settings" title="settings"><IconSettings /></Navigation.Tile>
		{/snippet}
	</Navigation.Rail>
	<!-- Content -->
	<div class="flex items-center justify-center">
		<p class="opacity-20">(Content)</p>
	</div>
</div>
