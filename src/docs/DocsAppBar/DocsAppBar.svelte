<script lang="ts">
	// @ts-ignore
	const pkg = __PACKAGE__;

	import AppBar from '$lib/components/AppBar/AppBar.svelte';
	import Divider from '$lib/components/Divider/Divider.svelte';
	import LightSwitch from '$lib/utilities/LightSwitch/LightSwitch.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

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
		<a href="/" class="text-sm sm:text-lg md:text-3xl font-bold uppercase mr-4" title="Return to Homepage">Skeleton</a>
		<!-- Badge -->
		<a class="hidden sm:block" href="https://github.com/Brain-Bones/skeleton/releases" target="_blank">
			<span class="badge bg-surface-500/30">v{pkg.version}</span>
		</a>
	</svelte:fragment>

	<!-- Navigation -->
	<svelte:fragment slot="trail">
		<!-- Links -->
		<section class="hidden lg:flex space-x-4">
			<a
				href="/guides/install"
				class="navlink"
				on:click={() => {
					scrollSidebarTo('#nav-guides');
				}}>Guides</a
			>
			<a
				href="/docs/why"
				class="navlink"
				on:click={() => {
					scrollSidebarTo('#nav-docs');
				}}>Docs</a
			>
			<a
				href="/tailwind/core"
				class="navlink"
				on:click={() => {
					scrollSidebarTo('#nav-elements');
				}}>Elements</a
			>
			<a
				href="/components/app-shell"
				class="navlink"
				on:click={() => {
					scrollSidebarTo('#nav-components');
				}}>Components</a
			>
			<a
				href="/actions/clipboard"
				class="navlink"
				on:click={() => {
					scrollSidebarTo('#nav-actions');
				}}>Actions</a
			>
			<a
				href="/utilities/codeblocks"
				class="navlink"
				on:click={() => {
					scrollSidebarTo('#nav-utilities');
				}}>Utilities</a
			>
		</section>

		<Divider vertical borderWidth="border-l-2" />

		<select bind:value={$storeTheme}>
			<optgroup label="Theme">
				<option value="skeleton">Skeleton</option>
				<option value="rocket">Rocket</option>
				<option value="modern">Modern</option>
				<option value="seafoam">Seafoam</option>
				<option value="vintage">Vintage</option>
				<option value="sahara">Sahara</option>
			</optgroup>
		</select>

		<!-- Light Switch -->
		<section class="flex space-x-4">
			<LightSwitch origin="tr" />
		</section>

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
