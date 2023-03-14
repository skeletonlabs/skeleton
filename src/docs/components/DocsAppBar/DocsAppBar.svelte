<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance, type SubmitFunction } from '$app/forms';

	// Types
	import type { ModalSettings } from '$lib/utilities/Modal/types';
	import type { DrawerSettings } from '$lib/utilities/Drawer/types';

	// Docs
	import DocsLogoFull from '$docs/components/DocsLogos/DocsLogoFull.svelte';
	import DocsIcon from '$docs/components/DocsIcon/DocsIcon.svelte';

	// Components
	import AppBar from '$lib/components/AppBar/AppBar.svelte';
	// Utilities
	import LightSwitch from '$lib/utilities/LightSwitch/LightSwitch.svelte';
	import { popup } from '$lib/utilities/Popup/popup';
	import { modalStore } from '$lib/utilities/Modal/stores';

	// Stores
	import { storeTheme } from '$docs/stores/stores';
	import { drawerStore } from '$lib/utilities/Drawer/stores';
	import { themes } from '../../../routes/(inner)/docs/get-started/themes';

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

	const setTheme: SubmitFunction = () => {
		return async ({ result, update }) => {
			await update();
			if (result.type === 'success') {
				const theme = result.data?.theme as string;
				storeTheme.set(theme);
			}
		};
	};
	console.log(themes);
</script>

<!-- NOTE: using stopPropagation to override Chrome for Windows search shortcut -->
<svelte:window on:keydown|stopPropagation={onWindowKeydown} />

<AppBar shadow="shadow-xl">
	<svelte:fragment slot="lead">
		<div class="flex items-center space-x-4">
			<!-- Hamburger Menu -->
			<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
				<i class="fa-solid fa-bars text-xl" />
			</button>
			<!-- Logo -->
			<a class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden" href="/" title="Go to Homepage">
				<DocsLogoFull />
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<!-- Explore -->
		<div class="relative hidden lg:block">
			<!-- trigger -->
			<button class="btn hover:variant-soft-primary" use:popup={{ event: 'click', target: 'features' }}>
				<span>Explore</span>
				<i class="fa-solid fa-caret-down opacity-50" />
			</button>
			<!-- popup -->
			<!-- prettier-ignore -->
			<div class="card p-4 w-60 shadow-xl" data-popup="features">
				<nav class="list-nav">
					<ul>
						<li>
							<a href="/">
								<span class="w-6 text-center"><i class="fa-solid fa-home" /></span>
								<span>Homepage</span>
							</a>
							<a href="/docs/get-started">
								<span class="w-6 text-center"><i class="fa-solid fa-book" /></span>
								<span>Documentation</span>
							</a>
							<a href="/blog">
								<span class="w-6 text-center"><i class="fa-solid fa-bullhorn" /></span>
								<span>Blog</span>
							</a>
							<hr class="my-4">
							<a href="/elements/core">
								<span class="w-6 text-center"><DocsIcon name="tailwind" width="w-5" height="h-5" /></span>
								<span>Tailwind</span>
							</a>
							<a href="/actions/clipboard">
								<span class="w-6 text-center"><DocsIcon name="svelte" width="w-6" height="h-6" /></span>
								<span>Svelte</span>
							</a>
							<a href="/utilities/codeblocks">
								<span class="w-6 text-center"><i class="fa-solid fa-screwdriver-wrench" /></span>
								<span>Utilities</span>
							</a>
						</li>
					</ul>
				</nav>
				<!-- Arrow -->
				<div class="arrow bg-surface-100-800-token" />
			</div>
		</div>

		<!-- Theme -->
		<div>
			<!-- trigger -->
			<button class="btn hover:variant-soft-primary" use:popup={{ event: 'click', target: 'theme' }}>
				<i class="fa-solid fa-palette text-lg md:hidden" />
				<span class="hidden md:inline-block">Theme</span>
				<i class="fa-solid fa-caret-down opacity-50" />
			</button>
			<!-- popup -->
			<div class="card p-4 w-60 shadow-xl" data-popup="theme">
				<div class="space-y-4">
					<section class="flex justify-between items-center">
						<h6>Mode</h6>
						<LightSwitch />
					</section>
					<nav class="list-nav p-4 -m-4 max-h-64 lg:max-h-[500px] overflow-y-auto">
						<form action="/?/setTheme" method="POST" use:enhance={setTheme}>
							<ul>
								{#each themes as { icon, name, file }}
									<li>
										<button
											class="option w-full h-full"
											type="submit"
											name="theme"
											value={file}
											class:bg-primary-active-token={$storeTheme === file}
										>
											<span>{icon}</span>
											<span>{name}</span>
										</button>
									</li>
								{/each}
							</ul>
						</form>
					</nav>
					<div>
						<a class="btn variant-ghost-surface w-full" href="/docs/generator">Create a Theme</a>
					</div>
				</div>
				<!-- Arrow -->
				<div class="arrow bg-surface-100-800-token" />
			</div>
		</div>

		<!-- Social -->
		<!-- prettier-ignore -->
		<section class="hidden sm:inline-flex space-x-4">
			<a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-discord text-lg" />
			</a>
			<a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-github text-lg" />
			</a>
		</section>

		<!-- Search -->
		<div class="md:inline md:ml-4">
			<button class="btn p-2 px-4 space-x-4 variant-soft hover:variant-soft-primary" on:click={triggerSearch}>
				<i class="fa-solid fa-magnifying-glass" />
				<span class="hidden md:inline-block badge variant-soft">{isOsMac ? '⌘' : 'Ctrl'}+K</span>
			</button>
		</div>

		<!-- Sponsor -->
		<div>
			<!-- trigger -->
			<button
				class="btn py-1.5 variant-soft hover:variant-soft-primary hidden sm:inline-block"
				use:popup={{ event: 'click', target: 'sponsor' }}
			>
				<i class="fa-solid fa-heart" />
				<span class="hidden md:inline-block">Sponsor</span>
			</button>
			<!-- popup -->
			<div class="card p-4 w-60 shadow-xl" data-popup="sponsor">
				<nav class="list-nav">
					<ul>
						<li>
							<a href="https://ko-fi.com/skeletonlabs" target="_blank" rel="noreferrer">
								<span class="w-6 text-center"><i class="fa-solid fa-mug-saucer" /></span>
								<span>Ko-Fi</span>
							</a>
						</li>
						<li>
							<a href="https://github.com/sponsors/skeletonlabs" target="_blank" rel="noreferrer">
								<span class="w-6 text-center"><i class="fa-brands fa-github" /></span>
								<span>GitHub</span>
							</a>
						</li>
						<li>
							<a href="https://patreon.com/user?u=83786276" target="_blank" rel="noreferrer">
								<span class="w-6 text-center"><i class="fa-brands fa-patreon" /></span>
								<span>Patreon</span>
							</a>
						</li>
					</ul>
				</nav>
				<!-- Arrow -->
				<div class="arrow bg-surface-100-800-token" />
			</div>
		</div>
	</svelte:fragment>
</AppBar>
