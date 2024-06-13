<script lang="ts">
	import { NavRail, NavTile } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconMenu from 'lucide-svelte/icons/menu';
	import IconBox from 'lucide-svelte/icons/box';
	import IconSettings from 'lucide-svelte/icons/settings';

	let hrefExample = '#';
</script>

<div class="card border-[1px] border-surface-100-900 w-full h-[640px] grid grid-cols-[auto_1fr]">
    <!-- Component -->
    <NavRail>
        {#snippet header()}
            <NavTile href="/" title="Menu"><IconMenu /></NavTile>
        {/snippet}
        {#snippet tiles()}
            <NavTile id="0" label="Tile 1" href={hrefExample}>
                <IconBox />
            </NavTile>
            <NavTile id="1" label="Tile 2" href={hrefExample}>
                <IconBox />
            </NavTile>
            <NavTile id="2" label="Tile 3" href={hrefExample}>
                <IconBox />
            </NavTile>
        {/snippet}
        {#snippet footer()}
            <NavTile labelExpanded="Settings" href="/settings" title="settings"><IconSettings /></NavTile>
        {/snippet}
    </NavRail>
    <!-- Content -->
    <div class="flex justify-center items-center">
        <p class="opacity-20">(Content)</p>
    </div>
</div>