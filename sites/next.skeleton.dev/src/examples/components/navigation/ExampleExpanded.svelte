<script lang="ts">
	import { NavRail, NavTile } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconLogo from 'lucide-svelte/icons/skull';
    import IconFolder from 'lucide-svelte/icons/folder';
	import IconImage from 'lucide-svelte/icons/image';
	import IconMusic from 'lucide-svelte/icons/music';
	import IconVideo from 'lucide-svelte/icons/video';
	import IconGames from 'lucide-svelte/icons/gamepad';
	import IconSettings from 'lucide-svelte/icons/settings';

	let hrefExample = '#';
</script>

<div class="card border-[1px] border-surface-100-900 w-full h-[760px] grid grid-cols-[auto_1fr]">
    <!-- Component -->
    <NavRail expanded>
        {#snippet header()}
            <a href="/" class="w-full aspect-square flex flex-col justify-center items-center gap-2">
                <IconLogo size={48} />
                <span class="type-scale-5 font-bold">Skeleton</span>
            </a>
        {/snippet}
        {#snippet tiles()}
            <NavTile id="0" labelExpanded="Browse Files" href={hrefExample}>
                <IconFolder />
            </NavTile>
            <NavTile id="1" labelExpanded="Browse Images" href={hrefExample}>
                <IconImage />
            </NavTile>
            <NavTile id="2" labelExpanded="Browse Music" href={hrefExample}>
                <IconMusic />
            </NavTile>
            <NavTile id="2" labelExpanded="Browse Videos" href={hrefExample}>
                <IconVideo />
            </NavTile>
            <NavTile id="2" labelExpanded="Browse Games" href={hrefExample}>
                <IconGames />
            </NavTile>
        {/snippet}
        {#snippet footer()}
            <NavTile labelExpanded="Settings" href="/settings" title="Settings"><IconSettings /></NavTile>
        {/snippet}
    </NavRail>
    <!-- Content -->
    <div class="flex justify-center items-center">
        <p class="opacity-20">(Content)</p>
    </div>
</div>