<script lang="ts">
	import { NavRail, NavTile } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconMenu from 'lucide-svelte/icons/menu';
	import IconFolder from 'lucide-svelte/icons/folder';
	import IconImage from 'lucide-svelte/icons/image';
	import IconMusic from 'lucide-svelte/icons/music';
	import IconVideo from 'lucide-svelte/icons/video';
	import IconSettings from 'lucide-svelte/icons/settings';

	let hrefExample = '#';
</script>

<div class="card border-surface-100-900 grid h-[640px] w-full grid-cols-[auto_1fr] border-[1px]">
	<!-- Component -->
	<NavRail>
		{#snippet header()}
			<NavTile href="/" title="Menu"><IconMenu /></NavTile>
		{/snippet}
		{#snippet tiles()}
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
		{/snippet}
		{#snippet footer()}
			<NavTile labelExpanded="Settings" href="/settings" title="settings"><IconSettings /></NavTile>
		{/snippet}
	</NavRail>
	<!-- Content -->
	<div class="flex items-center justify-center">
		<p class="opacity-20">(Content)</p>
	</div>
</div>
