<script lang="ts">
	// @ts-ignore
	const pkg = __PACKAGE__;

	// Components
	import AppBar from '$lib/components/AppBar/AppBar.svelte';
	import Divider from '$lib/components/Divider/Divider.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	// Utilities
	import LightSwitch from '$lib/utilities/LightSwitch/LightSwitch.svelte';
	import { menu } from '$lib/utilities/Menu/menu';

	// Stores
	import { storeTheme, storeMobileDrawer } from '$docs/stores';

	// Drawer Handler
	function drawerOpen(): void {
		storeMobileDrawer.set(true);
	}

	// Sidebar Scroll Handler
	function scrollSidebarTo(targetId: string): void {
		const elemSidebarLeft: HTMLElement | null = document.querySelector('#sidebar-left');
		const targetElem: HTMLElement | null = document.querySelector(targetId);
		const targetOffsetTop = targetElem?.offsetTop;
		if (elemSidebarLeft && targetOffsetTop) {
			elemSidebarLeft.scrollTo({ top: targetOffsetTop - 85, behavior: 'smooth' });
		}
	}
</script>

<AppBar border="border-b border-b-surface-300 dark:border-b-surface-900">
	<!-- Branding -->
	<svelte:fragment slot="lead">
		<!-- Drawer Menu -->
		<button on:click={drawerOpen} class="lg:hidden mr-2 p-1 cursor-pointer">
			<SvgIcon name="bars" width="w-6" height="h-6" fill="fill-black dark:fill-white" />
		</button>
		<!-- Skeleton -->
		<a href="/" class="text-sm sm:text-lg md:text-3xl font-bold uppercase mr-4" title="Return to Homepage">Skeleton</a>
		<!-- Badge -->
		<a class="hidden sm:block" href="https://github.com/Brain-Bones/skeleton/releases" target="_blank">
			<span class="badge bg-surface-500/30">v{pkg.version}</span>
		</a>
	</svelte:fragment>

	<!-- Navigation -->
	<svelte:fragment slot="trail">
		<!-- Links -->
		<!-- prettier-ignore -->
		<section class="hidden lg:flex space-x-6">
			<a href="/guides/install" class="navlink" on:click={() => { scrollSidebarTo('#nav-guides'); }}>Guides</a>
			<a href="/docs/why" class="navlink" on:click={() => { scrollSidebarTo('#nav-docs'); }}>Docs</a>
			<div class="relative">
				<button class="navlink space-x-1" use:menu={{ menu: 'features' }}>
					<span>Features</span>
					<span>▾</span>
				</button>
				<nav class="list-nav card p-4 w-48 shadow-xl space-y-4" data-menu="features">
					
					<ul>
						<li><a href="/tailwind/core" on:click={() => { scrollSidebarTo('#nav-elements'); }}>Elements</a></li>
						<li><a href="/components/app-shell" on:click={() => { scrollSidebarTo('#nav-components'); }}>Components</a></li>
						<li><a href="/actions/clipboard" on:click={() => { scrollSidebarTo('#nav-actions'); }}>Actions</a></li>
						<li><a href="/utilities/codeblocks" on:click={() => { scrollSidebarTo('#nav-utilities'); }}>Utilities</a></li>
					</ul>
				</nav>
			</div>
			<!-- <a href="/blog" class="navlink">Blog</a> -->
		</section>

		<Divider vertical borderWidth="border-l-2" />

		<!-- Light Switch -->
		<section class="flex space-x-4">
			<LightSwitch origin="tr" />
		</section>

		<!-- Theme Picker -->
		<!-- prettier-ignore -->
		<div class="relative">
			<button class="navlink capitalize space-x-1" use:menu={{ menu: 'theme' }}>
				<span>Theme</span>
				<span>▾</span>
			</button>
			<div class="card p-4 w-56 shadow-xl space-y-4" data-menu="theme">
				<nav class="list-nav space-y-4">
					<ul>
						<li class="option" class:!bg-primary-500={$storeTheme === 'skeleton'} on:click={() => { storeTheme.set('skeleton') }}> 
							<span>🦴</span>
							<span>Skeleton</span>
						</li>
						<li class="option" class:!bg-primary-500={$storeTheme === 'rocket'} on:click={() => { storeTheme.set('rocket') }}> 
							<span>🚀</span>
							<span>Rocket</span>
						</li>
						<li class="option" class:!bg-primary-500={$storeTheme === 'modern'} on:click={() => { storeTheme.set('modern') }}>
							<span>🤖</span>
							<span>Modern</span>
						</li>
						<li class="option" class:!bg-primary-500={$storeTheme === 'seafoam'} on:click={() => { storeTheme.set('seafoam') }}>
							<span>🐚</span>
							<span>Seafoam</span>
						</li>
						<li class="option" class:!bg-primary-500={$storeTheme === 'vintage'} on:click={() => { storeTheme.set('vintage') }}>
							<span>📺</span>
							<span>Vintage</span>
						</li>
						<li class="option" class:!bg-primary-500={$storeTheme === 'sahara'} on:click={() => { storeTheme.set('sahara') }}>
							<span>🏜️</span>
							<span>Sahara</span>
						</li>
					</ul>
				</nav>
				<a class="btn btn-ghost w-full" href="/guides/themes/generator">Make a Theme</a>
			</div>
		</div>

		<Divider vertical borderWidth="border-l-2" />

		<!-- Community -->
		<section class="flex space-x-4">
			<a href="https://discord.gg/EXqV7W8MtY" target="_blank" aria-label="Discord">
				<SvgIcon name="discord" viewBox="0 0 640 512" />
			</a>
			<a href="https://twitter.com/SkeletonUI" target="_blank" aria-label="Twitter">
				<SvgIcon name="twitter" />
			</a>
			<a href="https://github.com/Brain-Bones/skeleton" target="_blank" aria-label="GitHub">
				<SvgIcon name="github" />
			</a>
		</section>
	</svelte:fragment>
</AppBar>

<style lang="postcss">
	.navlink {
		@apply font-bold opacity-80 hover:opacity-100 hover:text-primary-500 transition-all;
	}
</style>
