<script lang="ts">
    import { page } from '$app/stores';
    import { writable, type Writable } from 'svelte/store';
    import { afterNavigate } from '$app/navigation';

    import { Badge, Drawer, LightSwitch, List, ListItem, Divider } from '@brainandbones/skeleton';
    import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';

    // Props
    export let visible: Writable<boolean> = writable(false);

    // Local
    const currentPageStore: Writable<string> = writable($page.url.pathname);

    // Drawer Handlers
    const drawerClose = () => {
		visible.set(false);
	};

    // Nav Links
    const navigation: any = [
		{
			title: 'Guides',
			list: [
				{ href: '/', label: 'Get Started' },
				{ href: '/guides/tailwind', label: 'Tailwind Settings' },
				{ href: '/guides/themes', label: 'Themes' },
				{ href: '/guides/styling', label: 'Styling' },
				{ href: '/guides/forms', label: 'Forms' },
				{ href: '/guides/astro', label: 'Usage with Astro' }
			]
		},
		{
			title: 'Docs',
			list: [
				{ href: '/docs/why', label: 'Why Skeleton' },
				{ href: '/docs/comparisons', label: 'Comparisons' },
				{ href: '/docs/contributions', label: 'Contributions' }
			]
		},
		{
			title: 'Components',
			list: [
				{ href: '/components/accordions', label: 'Accordions' },
				{ href: '/components/alerts', label: 'Alerts' },
				{ href: '/components/avatars', label: 'Avatars' },
				{ href: '/components/badges', label: 'Badges' },
				{ href: '/components/breadcrumbs', label: 'Breadcrumbs' },
				{ href: '/components/buttons', label: 'Buttons' },
				{ href: '/components/cards', label: 'Cards' },
				// {href: '/components/conic-gradients', label: 'Conic Gradients'}, // keep disabled until further notice
				{ href: '/components/data-tables', label: 'Data Tables' },
				{ href: '/components/dividers', label: 'Dividers' },
				{ href: '/components/drawers', label: 'Drawers' },
				{ href: '/components/gradient-headings', label: 'Gradient Headings' },
				{ href: '/components/lists', label: 'Lists' },
				{ href: '/components/logo-clouds', label: 'Logo Clouds' },
				{ href: '/components/menus', label: 'Menus' },
				{ href: '/components/paginators', label: 'Paginators' },
				{ href: '/components/progress-bars', label: 'Progress Bars' },
				{ href: '/components/progress-radials', label: 'Progress Radials' },
				{ href: '/components/radio-groups', label: 'Radio Groups' },
				{ href: '/components/range-sliders', label: 'Range Sliders' },
				{ href: '/components/slide-toggles', label: 'Slide Toggles' },
				{ href: '/components/steppers', label: 'Steppers' },
				// { href: '/components/svg-icons', label: 'SVG Icons' }, // keep disabled until further notice
				{ href: '/components/tabs', label: 'Tabs' },
				{ href: '/components/tooltips', label: 'Tooltips' }
			]
		},
		{
			title: 'Utilities',
			list: [
				{href: '/utilities/codeblocks', label: 'Code Blocks'},
				{ href: '/utilities/dialogs', label: 'Dialogs' },
				{ href: '/utilities/toasts', label: 'Toasts' },
				{ href: '/utilities/lightswitches', label: 'Lightswitch' },
				{ href: '/utilities/filters', label: 'Filters', badge: 'Experimental' }
			]
		}
	];

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
        <Divider class="opacity-60" />
        <div class="text-xs opacity-50 p-4 flex justify-between">
            <a href="https://www.brainandbonesllc.com/" target="_blank">Brain & Bones</a>
            <a href="https://github.com/Brain-Bones/skeleton/blob/master/LICENSE" target="_blank">MIT License</a>
        </div>
    </svelte:fragment>
</Drawer>