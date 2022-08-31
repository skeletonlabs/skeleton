<script lang="ts">
    import { Badge, List, ListItem, Divider } from '@brainandbones/skeleton';
    import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';
    import { storeCurrentUrl, storeMobileDrawer } from '$lib/_documentation/stores';   
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
            {#each list as { href, label, badge, icon }}
                <ListItem {href} value={href} on:click={onListItemClick}>
                    <!-- Icon -->
                    <svelte:fragment slot="lead">
                        {#if icon}
                        <div class="bg-accent-500 w-7 h-7 flex justify-center items-center rounded shadow">
                            <SvgIcon name={icon} width="w-4" fill="fill-white" height="h-10" />
                        </div>
                        {/if}
                    </svelte:fragment>
                    <!-- Label -->
                    <span>{label}</span>
                    <!-- Badge -->
                    <svelte:fragment slot="trail">
                        {#if badge}<Badge background="bg-accent-500 dark/bg-accent-500/30">{badge}</Badge>{/if}
                    </svelte:fragment>
                </ListItem>
            {/each}
        </List>

        <!-- Divider -->
        {#if i + 1 < menuNavLinks.length}<Divider class="my-4 opacity-30" />{/if}
        
    {/each}
</div>
