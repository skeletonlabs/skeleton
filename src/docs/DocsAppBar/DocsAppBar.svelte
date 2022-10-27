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
		<!-- Logo -->
		<a href="/" class="sm:flex text-sm sm:text-lg md:text-3xl font-bold uppercase mr-4 space-x-4" title="Return to Homepage">
			<!-- Icon -->
			<svg class="fill-token w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 40">
				<path
					fill-rule="evenodd"
					d="M19.15 10.19c5.03 0 9.31 1.74 12.38 4.6.4-.13.75-.25 1.03-.39.87-.4 2.02-1.23 3.43-2.48a36.54 36.54 0 0 1-.74 4.8c-.14.56-.36 1.22-.66 2 .79 1.44 1.36 3 1.68 4.67 1.21 6.06-.86 8.74-5.66 10.24l.08.58c.17 1.77-.72 4.64-1.8 4.64-.7 0-1.17-1-1.66-2.43-.15 1.67-.91 3.58-1.8 3.58-.94 0-1.44-1.77-2.18-4.03-.37 1.78-.93 4.03-1.93 4.03-1 0-.45-3.18-2.16-4.53-8.62.47-15.88-2.72-15.88-11.92 0-1.7.4-3.35 1.14-4.9a9.88 9.88 0 0 1-.36-.73A53.9 53.9 0 0 1 2 12.2c2.05 1.53 3.62 2.44 4.72 2.73l.31.07a17.04 17.04 0 0 1 12.12-4.8Zm-2 12.46a5.2 5.2 0 0 0-5.27 5.12 5.2 5.2 0 0 0 5.28 5.11 5.2 5.2 0 0 0 5.27-5.11c0-2.76-2.24-5-5.05-5.12Zm7.5 6.4c-.89 0-1.35 1.87-1.35 2.71 0 .66.22 1.03.58 1.1.88.07.61-1.2 1.05-1.2.46 0 1 1.3 1.46 1.13.54-.32.33-1.03.15-1.58-.66-1.4-1.01-2.17-1.9-2.17Zm5.73-6.7c-2 0-3.63 2.01-3.63 4.5 0 2.48 1.63 4.49 3.63 4.49 2.01 0 3.64-2.01 3.64-4.5 0-2.48-1.63-4.5-3.64-4.5ZM19.98 0l.58 4.83 2.12-2.4.06 5.95-.42-.1c-1.23-.26-2.35-.4-3.35-.4-.99 0-1.92.13-2.79.4l-.47.15.39-7.44 1.94 3.68L20 0Z"
				/>
			</svg>
			<!-- Text -->
			<svg class="hidden sm:inline-block fill-token h-[24px] mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 40">
				<path
					d="m38.8 0 .6.1c.2.1.3.3.3.6V1l-1 8.5a843.3 843.3 0 0 1-1.2 12l1.7-1.9 2.7-3.2a63.8 63.8 0 0 0 2.8-3.3l9.8-.6h.3l.4.1c0 .2-.1.4-.5.8l-7.6 8.5a156.4 156.4 0 0 1-2.8 3L48 29l6.1 6.6.3.2a6.6 6.6 0 0 0 .5.2v.3l-.2.2c-.1.2-.4.3-.7.5a43.6 43.6 0 0 1-7 3l-.5-.1-.6-.6a52.5 52.5 0 0 1-4.3-5.4 5284 5284 0 0 0-4-5.3l-.3.2-.2.2-.2.2v.9a110.2 110.2 0 0 0-.8 6.3l-.9.3-6.4 2a28.9 28.9 0 0 1-1.5.4 1 1 0 0 1-.6-.1c-.2-.1-.3-.3-.3-.7l3.1-35v-.5l.1-.4c.2-.1.4-.3.9-.4L37.2.4l.7-.2.9-.2ZM96 .5c.2 0 .3 0 .3.2L93 35.5v.4c0 .2 0 .3-.2.4l-.8.3-6.3 2.3a6 6 0 0 1-.8.3 3 3 0 0 1-.8 0 1 1 0 0 1-.6 0 1 1 0 0 1-.3-.7v-.1A3265.1 3265.1 0 0 0 86 2.9c.1-.2.3-.4.6-.4l4.5-.9A41.2 41.2 0 0 0 96 .5ZM15.2 2l1.2.1A18.3 18.3 0 0 1 20 3a5 5 0 0 1 1.8.9l.4.4.2.6a166 166 0 0 1 .3 8.5l-.5.1-.4-.1a39.7 39.7 0 0 0-3-2.6L17 9.9c-.6-.2-1.3-.3-2-.3a8 8 0 0 0-1.4.1l-1.2.4-.8.8c-.2.4-.3.8-.3 1.3 0 .6 0 1 .2 1.5.1.4.4.8 1 1.1l5.8 4a12.5 12.5 0 0 1 4.2 4.5c.4.8.6 1.5.8 2.2l.2 2.1c0 1.2-.2 2.3-.6 3.3-.3 1-.9 1.9-1.5 2.8-.7.8-1.4 1.6-2.3 2.2a15.7 15.7 0 0 1-9 3.2 74.5 74.5 0 0 1-4.6-.2 13 13 0 0 1-2.1-.5c-.7-.2-1.3-.5-2-.9L1 28.8c0-.4.1-.5.4-.5.2 0 .3 0 .5.2.9.9 1.9 1.5 3 2a8.4 8.4 0 0 0 4.6.6c.5 0 .9-.2 1.3-.3a3 3 0 0 0 1-.7c.2-.3.4-.6.4-1 0-.5-.2-1-.4-1.3-.2-.4-.5-.7-.9-1a426.8 426.8 0 0 1-5.6-4.5c-1-.7-1.7-1.4-2.3-2.2a8.7 8.7 0 0 1-1.8-4.7L1 12.6c0-1.4.4-2.7 1-4A12 12 0 0 1 9.4 3a18 18 0 0 1 5.8-.9Zm55 8.6a10.8 10.8 0 0 1 9.5 6.2c.4 1.1.7 2.3.7 3.4 0 1-.3 2-1 3-.6 1-1.4 2-2.6 2.8a14 14 0 0 1-4 2 16.7 16.7 0 0 1-8.2.4 3.7 3.7 0 0 0 1.9 3 5 5 0 0 0 1.8.8l2 .2a12 12 0 0 0 4.4-.8 22.6 22.6 0 0 0 3.6-1.5 48.6 48.6 0 0 0 .7-.2v1.5a143 143 0 0 1 0 4.4c0 .2-.1.4-.5.6l-1.4.7a20.9 20.9 0 0 1-4.2 1.4 24.2 24.2 0 0 1-4 .5 14.6 14.6 0 0 1-9.6-3.5 12.7 12.7 0 0 1-4.2-9.6c0-2.1.4-4.1 1.1-6A14.7 14.7 0 0 1 64 12a15 15 0 0 1 6.1-1.2Zm42.9 0a10.8 10.8 0 0 1 9.5 6.2c.5 1.1.7 2.3.7 3.4 0 1-.3 2-.9 3-.6 1-1.5 2-2.6 2.8a14 14 0 0 1-4 2 16.7 16.7 0 0 1-8.2.4 3.7 3.7 0 0 0 1.9 3 5 5 0 0 0 1.8.8l2 .2a12 12 0 0 0 4.3-.8 22.6 22.6 0 0 0 3.7-1.5 48.6 48.6 0 0 0 .7-.2v1.5a143 143 0 0 1 0 4.4c0 .2-.1.4-.5.6l-1.4.7a20.9 20.9 0 0 1-4.2 1.4 24.2 24.2 0 0 1-4.1.5 14.6 14.6 0 0 1-9.5-3.5 12.7 12.7 0 0 1-4.2-9.6c0-2.1.4-4.1 1.1-6A14.7 14.7 0 0 1 107 12a15 15 0 0 1 6-1.2Zm27.6-7.1c.2 0 .3 0 .3.2a248.1 248.1 0 0 1-1 9.1h6.6l.4.2.1.4c0 .1 0 .4-.3.9l-.8 2-.9 2c0 .2-.2.4-.3.5l-.8.2h-4.5a381 381 0 0 0-1 9.9l.1 1.5c.1.5.3.8.5 1l.6.6 1 .1c.4 0 1 0 1.6-.2a14.9 14.9 0 0 0 2.4-.8h.3c.2 0 .3 0 .3.2l.2.7a56.6 56.6 0 0 0 .9 4.2c0 .2-.1.4-.3.5A108.2 108.2 0 0 1 139 39l-1.7.1c-2.8 0-4.7-.6-6-2-1.2-1.3-1.8-3.4-1.8-6.1a22.2 22.2 0 0 1 .1-3 289.3 289.3 0 0 0 .8-8.8h-2.5l-2-.1c-.3-.1-.5-.3-.5-.5l.2-.5a27.3 27.3 0 0 1 1.5-2.3 71.8 71.8 0 0 1 1.9-2.9h1.7a280.2 280.2 0 0 0 .9-7.1l.2-.3h.4a104.4 104.4 0 0 1 6.2-1.3 43.4 43.4 0 0 0 2.4-.6Zm19.8 6.6c3 0 5.7.4 8 1 2 .8 3.9 1.7 5.2 3a9.9 9.9 0 0 1 3 4.3 16.3 16.3 0 0 1-.3 11.8 14.1 14.1 0 0 1-8.3 7.8 17.3 17.3 0 0 1-12 0 12.3 12.3 0 0 1-7-7.3 14.7 14.7 0 0 1 2.4-14.2 13.7 13.7 0 0 1 8.4-4.9l.4-.1V11l-.1-.4v-.4h.3Zm32-.3.2.1v.8a57.3 57.3 0 0 0-.5 3 25.2 25.2 0 0 1 6-2.6 16.5 16.5 0 0 1 4.5-.5c2.3 0 4 .7 5 2a11 11 0 0 1 1.6 6.3 30.8 30.8 0 0 1-.2 2.5l-1 10.5a21 21 0 0 0-.2 4.4c0 .2 0 .3-.2.4l-.8.3-6 1.7c-.1 0-.4 0-.7.2l-.8.1a1 1 0 0 1-.6-.1c-.2-.1-.3-.3-.3-.6v-.2a523.3 523.3 0 0 0 1.6-17.7v-1.3a3 3 0 0 0-.5-1.1c-.1-.3-.4-.5-.7-.7-.3-.2-.8-.3-1.3-.3a7.6 7.6 0 0 0-3.5 1l-1.7 1.6a4 4 0 0 0-.9 2.2 225 225 0 0 1-1.2 13.8v.2c0 .1 0 .2-.2.3l-.8.3-6.5 2.3a28.9 28.9 0 0 1-1.5.3 1 1 0 0 1-.6-.1c-.2-.1-.3-.3-.3-.6l2.2-24.9.2-1.1c0-.2.3-.3.6-.4l4.5-.9c1.6-.3 3.1-.7 4.6-1.2Zm-24.3 7a2.5 2.5 0 0 0-3.4.9l-2.2 3.8-3.8-2.2a2.5 2.5 0 0 0-2.5 4.3L160 26l-2.2 3.9a2.5 2.5 0 1 0 4.3 2.5l2.2-3.9 3.8 2.2a2.5 2.5 0 0 0 2.5-4.3l-3.8-2.2 2.2-3.8.1-.2c.6-1.1.1-2.6-1-3.2Zm-96.8-2.3c-.7-.4-1.6-.2-2 .5L68 17.4l-2.2-1.3a1.5 1.5 0 0 0-1.5 2.6l2.3 1.3-1.3 2.2a1.5 1.5 0 1 0 2.5 1.5l1.3-2.3 2.3 1.3a1.5 1.5 0 0 0 1.5-2.5l-2.3-1.3 1.3-2.3v-.1c.4-.7.1-1.5-.5-1.9Zm38.8.7a1.5 1.5 0 0 0-2.2 1.9l1.7 2-2 1.7a1.5 1.5 0 1 0 1.9 2.2l2-1.7 1.6 2a1.5 1.5 0 0 0 2.3-1.9l-1.7-2 2-1.6.1-.1a1.5 1.5 0 0 0-2-2.2l-2 1.7Z"
				/>
			</svg>
		</a>
		<!-- Badge -->
		<a class="hidden sm:block badge badge-filled-surface" href="https://github.com/Brain-Bones/skeleton/releases" target="_blank" rel="noreferrer">
			v{pkg.version}
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
							<span>💀</span>
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
