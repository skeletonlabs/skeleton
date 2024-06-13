<script lang="ts">
	import { NavRail, NavTile } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconLogo from 'lucide-svelte/icons/skull';
	import IconBox from 'lucide-svelte/icons/box';
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
            <NavTile id="0" labelExpanded="Expanded Tile 1" href={hrefExample}>
                <IconBox />
            </NavTile>
            <NavTile id="1" labelExpanded="Expanded Tile 2" href={hrefExample}>
                <IconBox />
            </NavTile>
            <NavTile id="2" labelExpanded="Expanded Tile 3" href={hrefExample}>
                <IconBox />
            </NavTile>
            <NavTile id="2" labelExpanded="Expanded Tile 4" href={hrefExample}>
                <IconBox />
            </NavTile>
            <NavTile id="2" labelExpanded="Expanded Tile 5" href={hrefExample}>
                <IconBox />
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