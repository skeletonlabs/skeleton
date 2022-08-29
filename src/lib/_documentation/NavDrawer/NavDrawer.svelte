<script lang="ts">
    import { page } from '$app/stores';
    import { writable, type Writable } from 'svelte/store';
    import { afterNavigate } from '$app/navigation';

    import { Badge, Drawer, LightSwitch, List, ListItem, Divider } from '@brainandbones/skeleton';
    import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';
    import { navigation } from './navigation';

    // Props
    export let visible: Writable<boolean> = writable(false);

    // Local
    const currentPageStore: Writable<string> = writable($page.url.pathname);

    // Drawer Handlers
    const drawerClose = () => {
		visible.set(false);
	};

    // Lifecycle Events
	afterNavigate(() => {
		// Update active drawer selection
		currentPageStore.set($page.url.pathname);
	});
</script>

<Drawer visible={visible} fixed="left">
    
    <!-- Header -->
    <svelte:fragment slot="header">
        <div class="flex justify-between items-center p-4">
            <a href="/" class="text-[26px] font-bold uppercase">Skeleton</a>
            <div class="flex justify-between items-center space-x-4">
                <!-- Github -->
                <a href="https://github.com/Brain-Bones/skeleton" target="_blank" aria-label="GitHub">
                    <SvgIcon name="github" class="opacity-80 hover:opacity-100" />
                </a>
                <!-- Light Switch -->
                <LightSwitch origin="tr" />
            </div>
        </div>
        <Divider />
    </svelte:fragment>

    <!-- Main -->
    <svelte:fragment slot="main">
        <div class="space-y-6 mb-10">
            {#each navigation as { title, list }, i}
                <!-- Title -->
                <div class="text-sm text-primary-500 m-4">{title}</div>
                <!-- List -->
                <List tag="nav" selected={currentPageStore} {title} label={title}>
                    {#each list as { href, label, badge }}
                        <ListItem {href} value={href} on:click={drawerClose}>
                            <div class="flex justify-between">
                                <span>{label}</span>
                                {#if badge}<Badge background="bg-accent-500 dark/bg-accent-500/30">{badge}</Badge>{/if}
                            </div>
                        </ListItem>
                    {/each}
                </List>
                <!-- Divider -->
                {#if i + 1 < navigation.length}<Divider />{/if}
            {/each}
        </div>
    </svelte:fragment>

    <!-- Footer -->
    <svelte:fragment slot="footer">
        <!-- Divider -->
        <Divider class="opacity-60" />
        <!-- Links -->
        <div class="text-xs opacity-50 p-4 flex justify-between">
            <a href="https://www.brainandbonesllc.com/" target="_blank">Brain & Bones</a>
            <a href="https://github.com/Brain-Bones/skeleton/blob/master/LICENSE" target="_blank">MIT License</a>
        </div>
    </svelte:fragment>

</Drawer>