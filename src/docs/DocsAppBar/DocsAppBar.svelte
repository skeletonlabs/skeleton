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
			elemSidebarLeft.scrollTo({ top: targetOffsetTop - 160, behavior: 'smooth' });
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
		<a href="/" class="hidden sm:inline-block text-sm sm:text-lg md:text-3xl font-bold uppercase mr-4" title="Return to Homepage">Skeleton</a>
		<!-- Badge -->
		<a class="hidden sm:block" href="https://github.com/Brain-Bones/skeleton/releases" target="_blank" rel="noreferrer">
			<span class="badge badge-filled-surface">v{pkg.version}</span>
		</a>
	</svelte:fragment>

	<!-- Navigation -->
	<svelte:fragment slot="trail">
		<!-- Links -->
		<!-- prettier-ignore -->
		<section class="hidden lg:flex space-x-1">
			<a class="btn btn-sm" href="/guides/install" on:click={() => { scrollSidebarTo('#nav-guides'); }}>Guides</a>
			<a class="btn btn-sm" href="/docs/why" on:click={() => { scrollSidebarTo('#nav-docs'); }}>Docs</a>
			<div class="relative">
				<button class="btn btn-sm space-x-1" use:menu={{ menu: 'features' }}>
					<span>Features</span>
					<span class="opacity-50">▾</span>
				</button>
				<nav class="list-nav card card-body w-56 shadow-xl space-y-4" data-menu="features">
					<ul>
						<li><a href="/elements/core" on:click={() => { scrollSidebarTo('#nav-elements'); }}>Tailwind Elements</a></li>
						<li><a href="/components/accordions" on:click={() => { scrollSidebarTo('#nav-components'); }}>Svelte Components</a></li>
						<li><a href="/actions/clipboard" on:click={() => { scrollSidebarTo('#nav-actions'); }}>Svelte Actions</a></li>
						<li><a href="/utilities/codeblocks" on:click={() => { scrollSidebarTo('#nav-utilities'); }}>Utilities</a></li>
					</ul>
				</nav>
			</div>
		</section>

		<Divider vertical borderWidth="hidden lg:block border-l-2" />

		<!-- Theme -->
		<!-- prettier-ignore -->
		<div class="relative">
			<button class="btn btn-sm" use:menu={{ menu: 'theme' }}>
				<SvgIcon name="swatchbook" width="w-4" height="w-4" />
				<span class="hidden md:inline-block">Theme</span>
				<span class="opacity-50">▾</span>
			</button>
			<div class="card card-body w-56 shadow-xl space-y-6" data-menu="theme">
				<section class="flex justify-between">
					<h6>Set Mode</h6>
					<LightSwitch origin="tr" />
				</section>
				<hr>
				<nav class="list-nav">
					<ul>
						<li class="option" class:!bg-primary-500={$storeTheme === 'skeleton'} on:click={() => { storeTheme.set('skeleton') }} on:keypress> 
							<span>🦴</span>
							<span>Skeleton</span>
						</li>
						<li class="option" class:!bg-primary-500={$storeTheme === 'modern'} on:click={() => { storeTheme.set('modern') }} on:keypress>
							<span>🤖</span>
							<span>Modern</span>
						</li>
						<li class="option" class:!bg-primary-500={$storeTheme === 'rocket'} on:click={() => { storeTheme.set('rocket') }} on:keypress> 
							<span>🚀</span>
							<span>Rocket</span>
						</li>
						<li class="option" class:!bg-primary-500={$storeTheme === 'seafoam'} on:click={() => { storeTheme.set('seafoam') }} on:keypress>
							<span>🐚</span>
							<span>Seafoam</span>
						</li>
						<li class="option" class:!bg-primary-500={$storeTheme === 'vintage'} on:click={() => { storeTheme.set('vintage') }} on:keypress>
							<span>📺</span>
							<span>Vintage</span>
						</li>
						<li class="option" class:!bg-primary-500={$storeTheme === 'sahara'} on:click={() => { storeTheme.set('sahara') }} on:keypress>
							<span>🏜️</span>
							<span>Sahara</span>
						</li>
						<!-- <li class="option" class:!bg-primary-500={$storeTheme === 'seasonal'} on:click={() => { storeTheme.set('seasonal') }} on:keypress>
							<span>🎃</span>
							<span>Seasonal</span>
						</li> -->
					</ul>
				</nav>
				<hr>
				<a class="btn btn-ghost w-full" href="/guides/themes/generator">Theme Generator</a>
			</div>
		</div>

		<Divider vertical borderWidth="border-l-2" />

		<!-- Community -->
		<section class="flex">
			<a class="btn btn-sm" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer" aria-label="Discord">
				<SvgIcon name="discord" viewBox="0 0 640 512" />
			</a>
			<a class="btn btn-sm" href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer" aria-label="Twitter">
				<SvgIcon name="twitter" />
			</a>
			<a class="btn btn-sm" href="https://github.com/Brain-Bones/skeleton" target="_blank" rel="noreferrer" aria-label="GitHub">
				<SvgIcon name="github" />
			</a>
		</section>
	</svelte:fragment>
</AppBar>
