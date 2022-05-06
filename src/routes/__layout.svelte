<script lang="ts">
	import { page } from '$app/stores';
	import { writable, type Writable } from 'svelte/store';
	import { afterNavigate } from '$app/navigation';

	import Drawer from '$lib/Drawer/Drawer.svelte';
	import LightSwitch from '$lib/LightSwitch/LightSwitch.svelte';
	import Divider from '$lib/Divider/Divider.svelte';
	import List from '$lib/List/List.svelte';
	import ListItem from '$lib/List/ListItem.svelte';
	import Button from '$lib/Button/Button.svelte';
	import Badge from '$lib/Badge/Badge.svelte';
	import { Apollo, BlueNight, Emerald, GreenFall, Noir, NoirLight, Rustic, Summer84, XPro } from '$lib/Filters/filter';
	
	// Import CSS
	import 'highlight.js/styles/github-dark.css'; // Highlight.js
	import '../theme-bb.css'; // bb|st
	import '../app.css';

	const currentPageStore: Writable<string> = writable($page.url.pathname);
	const drawer: Writable<boolean> = writable(false);
	const navigation: any = [
        {
            title: 'Docs',
            list: [
                {href: '/', label: 'Get Started'},
                {href: '/docs/tailwind', label: 'Tailwind'},
                {href: '/docs/themes', label: 'Themes'},
                {href: '/docs/contributions', label: 'Contributions'},
            ],
        },
        {
            title: 'Components',
            list: [
                {href: '/components/alerts', label: 'Alerts'},
                {href: '/components/avatars', label: 'Avatars'},
				        {href: '/components/badges', label: 'Badges'},
                {href: '/components/breadcrumbs', label: 'Breadcrumb'},
                {href: '/components/buttons', label: 'Buttons'},
                {href: '/components/cards', label: 'Cards'},
                {href: '/components/conic-gradients', label: 'Conic Gradients'},
                {href: '/components/dividers', label: 'Dividers'},
                {href: '/components/drawers', label: 'Drawers'},
                {href: '/components/gradient-headings', label: 'Gradient Heading'},
                {href: '/components/lightswitches', label: 'Lightswitch'},
                {href: '/components/lists', label: 'Lists'},
                {href: '/components/logo-clouds', label: 'Logo Clouds'},
                {href: '/components/progress-bars', label: 'Progress Bars'},
                {href: '/components/progress-radials', label: 'Progress Radial'},
                {href: '/components/radio-groups', label: 'Radio Groups'},
                {href: '/components/range-sliders', label: 'Range Sliders'},
                {href: '/components/slide-toggles', label: 'Slide Toggles'},
				{href: '/components/tabs', label: 'Tabs'},
            ],
        },
        {
            title: 'Utilities',
            list: [
                {href: '/utilities/filters', label: 'Filters', badge: 'Beta'},
            ],
        }
    ];

	// Drawer
	const drawerOpen = () => { console.log('open triggered'); drawer.set(true); }
	const drawerClose = () => { drawer.set(false); }

	afterNavigate(() => {
		// Scroll to top
		document.querySelector('#main').scrollTop = 0;
		// Update active drawer selection
		currentPageStore.set($page.url.pathname);
	});
</script>

<!-- <svelte:window bind:scrollY={y}/> -->
<svelte:head>
	<title>Skeleton</title>
</svelte:head>

<!-- Filter SVG Components -->
<Apollo />
<BlueNight />
<Emerald />
<GreenFall />
<Noir />
<NoirLight />
<Rustic />
<Summer84 />
<XPro />

<!-- Page Layout -->
<div class="flex flex-row">

	<!-- Drawer -->
	<Drawer visible={drawer} fixed>
		<!-- Header -->
		<svelte:fragment slot="header">
			<div class="flex justify-between items-center p-4">
				<a href="/"><h1 class="text-[26px] uppercase">Skeleton</h1></a>
				<nav class="flex justify-between items-center space-x-6">
					<!-- Github -->
					<a href="https://github.com/Brain-Bones/skeleton" target="_blank" class="fill-surface-500">
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
					</a>
					<!-- Light Switch -->
					<LightSwitch origin="origin-top-right" align="right-0" />
				</nav>
			</div>
			<Divider />
		</svelte:fragment>
		<!-- Main -->
		<svelte:fragment slot="main">
			<!-- Navigation -->
			<div class="space-y-6 mb-10">
			{#each navigation as {title,list}, i }
				<p class="text-sm text-primary-500 m-4">{title}</p>
				<List role="nav" selected={currentPageStore}>
					{#each list as {href,label, badge} }
					<ListItem {href} value={href} on:click={drawerClose}>
						<div class="flex justify-between">
							<span>{label}</span>
							{#if badge}<Badge background="bg-surface-500">{badge}</Badge>{/if}
						</div>
					</ListItem>
					{/each}
				</List>
				{#if i+1 < navigation.length}<Divider />{/if}
			{/each}
			</div>
		</svelte:fragment>
		<!-- Footer -->
		<svelte:fragment slot="footer">
			<Divider class="opacity-30" />
			<a href="https://www.brainandbonesllc.com/" target="_blank" class="block opacity-50 text-xs p-4">Brain & Bones</a>
		</svelte:fragment>
	</Drawer>

    <!-- Main -->
    <main id="main" class="w-screen h-screen overflow-y-auto p-8">

		<div class="container mx-auto">

			<!-- Hamburger Menu -->
			<header class="lg:hidden flex items-center mb-8 space-x-4">
				<Button variant="minimal" on:click={drawerOpen}>
					<svelte:fragment slot="lead">
						<svg class="fill-black dark:fill-white" viewBox="0 0 100 60" width="24" height="24">
							<rect width="100" height="10"></rect>
							<rect y="30" width="100" height="10"></rect>
							<rect y="60" width="100" height="10"></rect>
						</svg>
					</svelte:fragment>
					<span>Menu</span>
				</Button>
			</header>

			<!-- Page Slot -->
			<slot />

		</div>

    </main>

</div>
