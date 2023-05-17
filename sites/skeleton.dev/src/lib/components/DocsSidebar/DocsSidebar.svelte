<script lang="ts">
	import { page } from '$app/stores';

	import DocsIcon from '$lib/components/DocsIcon/DocsIcon.svelte';
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { menuNavLinks } from '$lib/links';

	// Local
	let currentRailCategory: keyof typeof menuNavLinks | undefined = undefined;

	function onClickAnchor(): void {
		currentRailCategory = undefined;
		drawerStore.close();
	}

	// Lifecycle
	page.subscribe((page) => {
		// ex: /basePath/...
		let basePath: string = page.url.pathname.split('/')[1];
		if (!basePath) return;
		// Translate base path to link section
		if (['docs', 'essentials', 'resources'].includes(basePath)) currentRailCategory = '/docs';
		if (['tokens', 'base', 'elements', 'blocks'].includes(basePath)) currentRailCategory = '/elements';
		if (['components', 'actions'].includes(basePath)) currentRailCategory = '/svelte';
		if (['utilities'].includes(basePath)) currentRailCategory = '/utilities';
	});

	// Reactive
	$: submenu = menuNavLinks[currentRailCategory ?? '/docs'];
	$: listboxItemActive = (href: string) => ($page.url.pathname?.includes(href) ? 'bg-primary-active-token' : '');
</script>

<div class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 {$$props.class ?? ''}">
	<!-- App Rail -->
	<AppRail background="bg-transparent" border="border-r border-surface-500/30">
		<!-- Mobile Only -->
		<!-- prettier-ignore -->
		<AppRailAnchor href="/" class="lg:hidden" on:click={() => { onClickAnchor() }}>
			<svelte:fragment slot="lead"><i class="fa-solid fa-home text-2xl" /></svelte:fragment>
			<span>Home</span>
		</AppRailAnchor>
		<!-- prettier-ignore -->
		<AppRailAnchor href="/blog" class="lg:hidden" on:click={() => { onClickAnchor() }}>
			<svelte:fragment slot="lead"><i class="fa-solid fa-bullhorn text-2xl" /></svelte:fragment>
			<span>Blog</span>
		</AppRailAnchor>
		<!-- --- / --- -->
		<AppRailTile bind:group={currentRailCategory} name="docs" value={'/docs'}>
			<svelte:fragment slot="lead"><i class="fa-solid fa-book text-2xl" /></svelte:fragment>
			<span>Docs</span>
		</AppRailTile>
		<hr class="opacity-30" />
		<AppRailTile bind:group={currentRailCategory} name="elements" value={'/elements'}>
			<svelte:fragment slot="lead"><DocsIcon name="tailwind" width="w-6" height="h-6" /></svelte:fragment>
			<span>Tailwind</span>
		</AppRailTile>
		<AppRailTile bind:group={currentRailCategory} name="svelte" value={'/svelte'}>
			<svelte:fragment slot="lead"><DocsIcon name="svelte" width="w-6" height="h-6" /></svelte:fragment>
			<span>Svelte</span>
		</AppRailTile>
		<AppRailTile bind:group={currentRailCategory} name="utilities" value={'/utilities'}>
			<svelte:fragment slot="lead"><i class="fa-solid fa-screwdriver-wrench text-2xl" /></svelte:fragment>
			<span>Utilities</span>
		</AppRailTile>
	</AppRail>
	<!-- Nav Links -->
	<section class="p-4 pb-20 space-y-4 overflow-y-auto">
		{#each submenu as segment, i}
			<!-- Title -->
			<p class="font-bold pl-4 text-2xl">{segment.title}</p>
			<!-- Nav List -->
			<nav class="list-nav">
				<ul>
					{#each segment.list as { href, label, badge }}
						<li on:keypress on:click={drawerStore.close}>
							<a {href} class={listboxItemActive(href)} data-sveltekit-preload-data="hover">
								<span class="flex-auto">{@html label}</span>
								{#if badge}<span class="badge variant-filled-secondary">{badge}</span>{/if}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
			<!-- Divider -->
			{#if i + 1 < submenu.length}<hr class="!my-6 opacity-50" />{/if}
		{/each}
	</section>
</div>
