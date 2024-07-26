<script lang="ts">
	import { Nav } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconMenu from 'lucide-svelte/icons/menu';
	import IconFolder from 'lucide-svelte/icons/folder';
	import IconImage from 'lucide-svelte/icons/image';
	import IconMusic from 'lucide-svelte/icons/music';
	import IconVideo from 'lucide-svelte/icons/video';
	import IconGames from 'lucide-svelte/icons/gamepad';
	import IconSettings from 'lucide-svelte/icons/settings';

	let hrefExample = '#';
</script>

<div class="card border-surface-100-900 grid h-[760px] w-full grid-cols-[auto_1fr] border-[1px]">
	<!-- Component -->
	<Nav.Rail expanded>
		{#snippet header()}
			<Nav.Tile href="/" labelExpanded="Menu"><IconMenu /></Nav.Tile>
		{/snippet}
		{#snippet tiles()}
			<Nav.Tile id="0" labelExpanded="Browse Files" href={hrefExample}>
				<IconFolder />
			</Nav.Tile>
			<Nav.Tile id="1" labelExpanded="Browse Images" href={hrefExample}>
				<IconImage />
			</Nav.Tile>
			<Nav.Tile id="2" labelExpanded="Browse Music" href={hrefExample}>
				<IconMusic />
			</Nav.Tile>
			<Nav.Tile id="2" labelExpanded="Browse Videos" href={hrefExample}>
				<IconVideo />
			</Nav.Tile>
			<Nav.Tile id="2" labelExpanded="Browse Games" href={hrefExample}>
				<IconGames />
			</Nav.Tile>
		{/snippet}
		{#snippet footer()}
			<Nav.Tile labelExpanded="Settings" href="/settings"><IconSettings /></Nav.Tile>
		{/snippet}
	</Nav.Rail>
	<!-- Content -->
	<div class="flex items-center justify-center">
		<p class="opacity-20">(Content)</p>
	</div>
</div>
