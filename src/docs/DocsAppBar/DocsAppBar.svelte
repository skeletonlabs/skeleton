<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance, type SubmitFunction } from '$app/forms';

	// Types
	import type { ModalSettings, ModalComponent } from '$lib/utilities/Modal/types';
	import type { DrawerSettings } from '$lib/utilities/Drawer/types';

	// Docs
	import DocsLogoFull from '$docs/DocsLogo/DocsLogoFull.svelte';
	import DocsLogoIcon from '$docs/DocsLogo/DocsLogoIcon.svelte';
	import DocsSearch from '$docs/DocsSearch/DocsSearch.svelte';

	// Components
	import AppBar from '$lib/components/AppBar/AppBar.svelte';
	import Divider from '$lib/components/Divider/Divider.svelte';
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
		const modalComponent: ModalComponent = { ref: DocsSearch };
		const d: ModalSettings = {
			type: 'component',
			component: modalComponent,
			backdropClasses: '!items-start',
			modalClasses: '!bg-surface-100/60 dark:!bg-surface-800/60 backdrop-blur-lg border border-surface-500/50 !p-0 xl:!max-w-[700px]'
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
		{ type: 'crimson', name: 'Crimson', icon: '⭕' },
		{ type: 'seasonal', name: 'Seasonal', icon: '🎆' }
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

<AppBar>
	<!-- Branding -->
	<svelte:fragment slot="lead">
		<!-- Drawer Menu -->
		<button on:click={drawerOpen} class="lg:!hidden btn btn-sm">
			<i class="fa-solid fa-bars text-xl" />
		</button>
		<!-- Logo -->
		<a href="/" title="Go to Homepage">
			<span class="hidden sm:inline"><DocsLogoFull /></span>
			<span class="inline sm:hidden"><DocsLogoIcon /></span>
		</a>
	</svelte:fragment>

	<!-- Search -->
	<div class="hidden md:inline md:ml-4">
		<button class="btn btn-ghost-surface btn-sm" on:click={triggerSearch}>
			<i class="fa-solid fa-magnifying-glass" />
			<span>Search</span>
			<span class="text-[11px] font-bold opacity-60 pl-2">{isOsMac ? '⌘' : 'Ctrl'}+K</span>
		</button>
	</div>

	<!-- Navigation -->
	<svelte:fragment slot="trail">
		<!-- Links -->
		<!-- prettier-ignore -->
		<section class="hidden lg:flex">
			<!-- Docs -->
			<a class="unstyled hover:bg-primary-hover-token px-4 py-2 rounded-token" href="/docs/why" data-sveltekit-preload-data="hover">Docs</a>
			<!-- Guides -->
			<a class="unstyled hover:bg-primary-hover-token px-4 py-2 rounded-token" href="/guides/install" data-sveltekit-preload-data="hover">Guides</a>
			<!-- Features -->
			<div class="relative">
				<button class="unstyled hover:bg-primary-hover-token px-4 py-2 rounded-token space-x-2" use:menu={{ menu: 'features' }}>
					<span>Features</span>
					<i class="fa-solid fa-caret-down opacity-50" />
				</button>
				<div class="card overflow-hidden w-60 shadow-xl grid grid-cols-1" data-menu="features">
					<!-- Tailwind -->
					<a class="block space-y-4 p-4 hover:bg-primary-hover-token" href="/elements/core" data-sveltekit-preload-data="hover">
						<h4>Tailwind</h4>
						<small>Design tokens and CSS elements.</small>
					</a>
					<hr>
					<!-- Svelte -->
					<a class="block space-y-4 p-4 hover:bg-primary-hover-token" href="/actions/clipboard" data-sveltekit-preload-data="hover">
						<h4>Svelte</h4>
						<small>Actions and Components.</small>
					</a>
					<hr>
					<!-- Utilities -->
					<a class="block space-y-4 p-4 hover:bg-primary-hover-token" href="/utilities/codeblocks" data-sveltekit-preload-data="hover">
						<h4>Utilities</h4>
						<small>Powerful utility features.</small>
					</a>
				</div>
			</div>
			<!-- Blog -->
			<a class="unstyled hover:bg-primary-hover-token px-4 py-2 rounded-token" href="/blog" data-sveltekit-preload-data="hover">Blog</a>
		</section>

		<Divider vertical borderWidth="hidden lg:block border-l-2 opacity-20" />

		<!-- Theme -->
		<div class="relative">
			<button
				class="unstyled hover:bg-primary-hover-token px-4 py-2 rounded-token space-x-2"
				use:menu={{ menu: 'theme', interactive: true }}
			>
				<i class="fa-solid fa-palette md:hidden" />
				<span class="hidden md:inline-block">Theme</span>
				<i class="fa-solid fa-caret-down opacity-50" />
			</button>
			<div class="card w-64 shadow-xl" data-menu="theme">
				<section class="flex justify-between items-center p-4">
					<h6>Theme</h6>
					<LightSwitch />
				</section>
				<hr />
				<nav class="list-nav p-4 max-h-64 lg:max-h-[480px] overflow-y-auto">
					<form action="/?/setTheme" method="POST" use:enhance={setTheme}>
						<ul>
							{#each themes as { icon, name, type }}
								<li>
									<button
										class="option w-full h-full"
										type="submit"
										name="theme"
										value={type}
										class:bg-primary-active-token={$storeTheme === type}
									>
										<span>{icon}</span>
										<span>{name}</span>
									</button>
								</li>
							{/each}
						</ul>
					</form>
				</nav>
				<hr />
				<div class="p-4">
					<a class="btn btn-ghost-surface w-full" href="/guides/themes/generator">Theme Generator</a>
				</div>
			</div>
		</div>

		<Divider vertical borderWidth="border-l-2 opacity-20" />

		<!-- Social -->
		<section class="grid grid-cols-3 gap-6">
			<a href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer" aria-label="Discord">
				<i class="fa-brands fa-discord" />
			</a>
			<a href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer" aria-label="Twitter">
				<i class="fa-brands fa-twitter" />
			</a>
			<a href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer" aria-label="GitHub">
				<i class="fa-brands fa-github" />
			</a>
		</section>
	</svelte:fragment>
</AppBar>
