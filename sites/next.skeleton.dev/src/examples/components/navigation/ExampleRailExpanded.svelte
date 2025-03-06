<script lang="ts">
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconMenu from 'lucide-svelte/icons/menu';
	import IconFolder from 'lucide-svelte/icons/folder';
	import IconImage from 'lucide-svelte/icons/image';
	import IconMusic from 'lucide-svelte/icons/music';
	import IconVideo from 'lucide-svelte/icons/video';
	import IconGames from 'lucide-svelte/icons/gamepad';
	import IconSettings from 'lucide-svelte/icons/settings';

	let isExpansed = $state(true);

	function toggleExpanded() {
		isExpansed = !isExpansed;
	}
</script>

<div class="card border-surface-100-900 grid h-[760px] w-full grid-cols-[auto_1fr] border-[1px]">
	<!-- Component -->
	<Navigation.Rail expanded={isExpansed}>
		{#snippet header()}
			<Navigation.Tile labelExpanded="Menu" onclick={toggleExpanded} title="Toggle Menu Width"><IconMenu /></Navigation.Tile>
		{/snippet}
		{#snippet tiles()}
			<Navigation.Tile labelExpanded="Browse Files" href="#/files">
				<IconFolder />
			</Navigation.Tile>
			<Navigation.Tile labelExpanded="Browse Images" href="/images">
				<IconImage />
			</Navigation.Tile>
			<Navigation.Tile labelExpanded="Browse Music" href="/music">
				<IconMusic />
			</Navigation.Tile>
			<Navigation.Tile labelExpanded="Browse Videos" href="/videos">
				<IconVideo />
			</Navigation.Tile>
			<Navigation.Tile labelExpanded="Browse Games" href="/games">
				<IconGames />
			</Navigation.Tile>
		{/snippet}
		{#snippet footer()}
			<Navigation.Tile labelExpanded="Settings" href="/settings" title="Settings"><IconSettings /></Navigation.Tile>
		{/snippet}
	</Navigation.Rail>
	<!-- Content -->
	<div class="flex items-center justify-center">
		<p class="opacity-20">(Content)</p>
	</div>
</div>
