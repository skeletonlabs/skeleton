<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance, type SubmitFunction } from '$app/forms';

	// Types
	import type { ModalSettings, ModalComponent } from '$lib/utilities/Modal/types';
	import type { DrawerSettings } from '$lib/utilities/Drawer/types';

	// Docs
	import DocsLogoFull from '$docs/DocsLogo/DocsLogoFull.svelte';
	import SvgIcon from '$docs/SvgIcon/SvgIcon.svelte';

	// Components
	import AppBar from '$lib/components/AppBar/AppBar.svelte';
	// Utilities
	import LightSwitch from '$lib/utilities/LightSwitch/LightSwitch.svelte';
	import { menu } from '$lib/utilities/Menu/menu';
	import { modalStore } from '$lib/utilities/Modal/stores';

	// Stores
	import { storeTheme } from '$docs/stores';
	import { drawerStore } from '$lib/utilities/Drawer/stores';

	// Local
	let isOsMac = false;

	// Set Search Shortkey Keys
	if (browser) {
		let os = navigator.userAgent;
		isOsMac = os.search('Mac') !== -1;
	}

	// Drawer Handler
	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'doc-sidenav' };
		drawerStore.open(s);
	}

	// Search
	function triggerSearch(): void {
		const d: ModalSettings = {
			type: 'component',
			component: 'modalSearch',
			position: 'item-start'
		};
		modalStore.trigger(d);
	}

	// Keyboard Shortcut (CTRL/⌘+K) to Focus Search
	function onWindowKeydown(e: KeyboardEvent): void {
		if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
			// Prevent default browser behavior of focusing URL bar
			e.preventDefault();
			// If modal currently open, close modal (allows to open/close search with CTRL/⌘+K)
			$modalStore.length ? modalStore.close() : triggerSearch();
		}
	}

	const themes = [
		{ type: 'skeleton', name: 'Skeleton', icon: '💀' },
		{ type: 'modern', name: 'Modern', icon: '🤖' },
		{ type: 'rocket', name: 'Rocket', icon: '🚀' },
		{ type: 'seafoam', name: 'Seafoam', icon: '🧜‍♀️' },
		{ type: 'vintage', name: 'Vintage', icon: '📺' },
		{ type: 'sahara', name: 'Sahara', icon: '🏜️' },
		{ type: 'hamlindigo', name: 'Hamlindigo', icon: '👔' },
		{ type: 'gold-nouveau', name: 'Gold Nouveau', icon: '💫' },
		{ type: 'crimson', name: 'Crimson', icon: '⭕' }
		// { type: 'seasonal', name: 'Seasonal', icon: '🎆' }
		// { type: 'test', name: 'Test', icon: '🚧' },
	];

	const setTheme: SubmitFunction = () => {
		return async ({ result, update }) => {
			await update();
			if (result.type === 'success') {
				const theme = result.data?.theme as string;
				storeTheme.set(theme);
			}
		};
	};
</script>

<!-- NOTE: using stopPropagation to override Chrome for Windows search shortcut -->
<svelte:window on:keydown|stopPropagation={onWindowKeydown} />

<AppBar shadow="shadow-lg">
	<svelte:fragment slot="lead">
		<div class="flex items-center space-x-4">
			<!-- Hamburger Menu -->
			<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
				<i class="fa-solid fa-bars text-xl" />
			</button>
			<!-- Logo -->
			<a class="lg:!ml-0 w-[38px] lg:w-auto overflow-hidden" href="/" title="Go to Homepage">
				<DocsLogoFull />
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<!-- Search -->
		<div class="md:inline md:ml-4">
			<button class="btn btn-sm variant-ghost-surface hidden lg:inline-block" on:click={triggerSearch}>
				<i class="fa-solid fa-magnifying-glass" />
				<span class="hidden lg:inline-block">Search</span>
				<span class="hidden lg:inline-block text-[11px] font-bold opacity-60 pl-2">{isOsMac ? '⌘' : 'Ctrl'}+K</span>
			</button>
		</div>

		<!-- Navigate -->
		<div class="relative hidden lg:block">
			<button class="btn hover:variant-soft-primary" use:menu={{ menu: 'features' }}>
				<span>Navigate</span>
				<i class="fa-solid fa-caret-down opacity-50" />
			</button>
			<!-- prettier-ignore -->
			<div class="card p-4 w-60 shadow-xl" data-menu="features">
				<nav class="list-nav">
					<ul>
						<li>
							<a href="/">
								<span class="w-6 text-center"><i class="fa-solid fa-home" /></span>
								<span>Homepage</span>
							</a>
							<a href="/blog">
								<span class="w-6 text-center"><i class="fa-solid fa-bullhorn" /></span>
								<span>Blog</span>
							</a>
							<hr class="my-4">
							<a href="/docs/why">
								<span class="w-6 text-center"><i class="fa-solid fa-sheet-plastic" /></span>
								<span>Docs</span>
							</a>
							<a href="/guides/install">
								<span class="w-6 text-center"><i class="fa-solid fa-book" /></span>
								<span>Guides</span>
							</a>
							<hr class="my-4">
							<a href="/elements/core">
								<span class="w-6 text-center"><SvgIcon name="tailwind" width="w-5" height="h-5" /></span>
								<span>Tailwind</span>
							</a>
							<a href="/actions/clipboard">
								<span class="w-6 text-center"><SvgIcon name="svelte" width="w-6" height="h-6" /></span>
								<span>Svelte</span>
							</a>
							<a href="/utilities/codeblocks">
								<span class="w-6 text-center"><i class="fa-solid fa-screwdriver-wrench" /></span>
								<span>Utilities</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>

		<!-- Theme -->
		<div class="relative">
			<button class="btn hover:variant-soft-primary" use:menu={{ menu: 'theme', fixed: true, interactive: true }}>
				<i class="fa-solid fa-palette text-lg md:hidden" />
				<span class="hidden md:inline-block">Theme</span>
				<i class="fa-solid fa-caret-down opacity-50" />
			</button>
			<!-- <div class="card w-64 shadow-xl max-w-fit menu-tr sm:max-w-none" data-menu="theme"> -->
			<div class="card p-4 w-60 shadow-xl menu-tr " data-menu="theme">
				<section class="flex justify-between items-center">
					<h6>Mode</h6>
					<LightSwitch />
				</section>
				<hr class="my-4" />
				<nav class="list-nav p-4 -m-4 max-h-64 lg:max-h-[500px] overflow-y-auto">
					<form action="/?/setTheme" method="POST" use:enhance={setTheme}>
						<ul>
							{#each themes as { icon, name, type }}
								<li>
									<!-- prettier-ignore -->
									<button class="option w-full h-full" type="submit" name="theme" value={type} class:bg-primary-active-token={$storeTheme === type}>
										<span>{icon}</span>
										<span>{name}</span>
									</button>
								</li>
							{/each}
						</ul>
					</form>
				</nav>
				<hr class="my-4" />
				<div>
					<a class="btn variant-ghost-surface w-full" href="/guides/themes/generator">Theme Generator</a>
				</div>
			</div>
		</div>

		<!-- Social -->
		<!-- prettier-ignore -->
		<section class="flex space-x-1">
			<a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-discord text-lg" />
			</a>
			<!-- <a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-twitter text-lg" />
			</a> -->
			<a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-github text-lg" />
			</a>
		</section>
	</svelte:fragment>
</AppBar>
