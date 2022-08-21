<script lang="ts">
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '$lib/CodeBlock/stores';
	storeHighlightJs.set(hljs);

	import { page } from '$app/stores';
	import { writable, type Writable } from 'svelte/store';
	import { afterNavigate } from '$app/navigation';

	import { Drawer, LightSwitch, Divider, List, ListItem, Button, Badge, Dialog, Toast } from '@brainandbones/skeleton';
	import { Apollo, BlueNight, Emerald, GreenFall, Noir, NoirLight, Rustic, Summer84, XPro } from '@brainandbones/skeleton';
	import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';
	
	// Import CSS
	import '../themes/theme-skeleton.css'; // skeleton|rocket|modern|seafoam|vintage|sahara|test
	import '../app.postcss';

	const currentPageStore: Writable<string> = writable($page.url.pathname);
	const drawer: Writable<boolean> = writable(false);
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

	// Drawer
	const drawerOpen = () => {
		console.log('open triggered');
		drawer.set(true);
	};
	const drawerClose = () => {
		drawer.set(false);
	};

	// Lifecycle Events
	afterNavigate(() => {
		// Scroll to top
		const elemMain = document.querySelector('#main');
		if (elemMain !== null) { elemMain.scrollTop = 0; }
		// Update active drawer selection
		currentPageStore.set($page.url.pathname);
	});
</script>

<!-- Notification Components -->
<Dialog />
<Toast />

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
<main class="flex flex-row">
	<!-- Drawer -->
	<Drawer visible={drawer} fixed="left">
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
					<div class="text-sm text-primary-500 m-4">{title}</div>
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

	<!-- Page Content -->
	<div id="main" class="w-screen h-screen overflow-y-auto">
		<header class="lg:hidden flex p-8 space-x-4">
			<!-- Hamburger Menu -->
			<Button variant="minimal" on:click={drawerOpen}>
				<svelte:fragment slot="lead">
					<SvgIcon name="bars" width="w-6" height="h-6" class="!block opacity-50" />
				</svelte:fragment>
				<span class="text-surface-500 font-bold">Menu</span>
			</Button>
		</header>

		<!-- Page Slot -->
		<div class="container mx-auto p-8">
			<slot />
		</div>
	</div>
</main>
