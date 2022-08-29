<script lang="ts">
    import { page } from '$app/stores';
    import { writable, type Writable } from 'svelte/store';
    import { afterNavigate } from '$app/navigation';

    import { Badge, Drawer, List, ListItem, Divider } from '@brainandbones/skeleton';
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

    <!-- Navigation -->
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

</Drawer>