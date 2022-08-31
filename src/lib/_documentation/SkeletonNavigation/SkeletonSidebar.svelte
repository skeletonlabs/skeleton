<script lang="ts">
    import { Badge, List, ListItem, Divider } from '@brainandbones/skeleton';
    // Stores
    import { storeCurrentUrl, storeMobileDrawer } from '$lib/_documentation/stores';   
    // Nav Links
    import { menuNavLinks } from './links';

    // Props
    export let embedded: boolean = false;

    // ListItem Click Handler
    function onListItemClick(): void {
        if (!embedded) return;
        storeMobileDrawer.set(false);
    }
</script>

<div class="mb-8 {$$props.class||''}">

    {#each menuNavLinks as { title, list }, i}

        <!-- Title -->
        <div class="text-primary-500 text-sm font-bold uppercase p-4">{title}</div>

        <!-- List -->
        <List tag="nav" selected={storeCurrentUrl} {title} label={title}>
            {#each list as { href, label, badge }}
                <ListItem {href} value={href} on:click={onListItemClick}>
                    <div class="flex justify-between">
                        <span>{label}</span>
                        {#if badge}<Badge background="bg-accent-500 dark/bg-accent-500/30">{badge}</Badge>{/if}
                    </div>
                </ListItem>
            {/each}
        </List>

        <!-- Divider -->
        {#if i + 1 < menuNavLinks.length}<Divider class="my-4 opacity-30" />{/if}
        
    {/each}
</div>
