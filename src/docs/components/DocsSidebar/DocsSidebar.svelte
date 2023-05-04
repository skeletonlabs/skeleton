<script lang="ts">
	import { page } from '$app/stores';
	import { writable, type Writable } from 'svelte/store';

	import DocsIcon from '$docs/components/DocsIcon/DocsIcon.svelte';
	import { menuNavLinks } from '../../links';
	import AppRail from '$lib/components/AppRail/AppRail.svelte';
	import AppRailTile from '$lib/components/AppRail/AppRailTile.svelte';

	// Stores
	import { storeCurrentUrl } from '$docs/stores/stores';
	import { drawerStore } from '$lib/utilities/Drawer/stores';

	// Props
	export let embedded = false;

	// Local
	const storeCategory: Writable<string> = writable('guides'); // guides | docs | tailwind | svelte | utilities
	let filteredMenuNavLinks: any[] = menuNavLinks;

	// ListItem Click Handler
	function onListItemClick(): void {
		// On Drawer embed Only:
		if (!embedded) return;
		drawerStore.close();
	}

	function setNavCategory(c: string): void {
		if (c === 'blog') return;
		storeCategory.set(c);
		// prettier-ignore
		switch($storeCategory) {
			case('docs'):
				filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => ['docs', 'essentials', 'resources'].includes(linkSet.id));
				break;
			case('elements'):
				filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => ['tokens', 'base', 'elements', 'blocks'].includes(linkSet.id));
				break;
			case('svelte'):
				filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => ['components', 'actions'].includes(linkSet.id));
				break;
			case('utilities'):
				filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'utilities');
				break;
		}
	}

	// Lifecycle
	page.subscribe((p) => {
		let pathMatch: string = p.url.pathname.split('/')[1];
		if (!pathMatch) return;
		if (['components', 'actions'].includes(pathMatch)) pathMatch = 'svelte';
		setNavCategory(pathMatch);
	});
	storeCategory.subscribe((c: string) => setNavCategory(c));

	// Reactive
	$: classesActive = (href: string) => ($storeCurrentUrl?.includes(href) ? 'bg-primary-active-token' : '');
</script>

<div class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 {$$props.class ?? ''}">
	<!-- App Rail -->
	<AppRail selected={storeCategory} background="bg-transparent" border="border-r border-surface-500/30">
		<div class="lg:hidden">
			<AppRailTile label="Home" href="/" value={'home'} on:click={onListItemClick}>
				<i class="fa-solid fa-home text-2xl" />
			</AppRailTile>
			<hr class="opacity-30" />
		</div>
		<AppRailTile label="Docs" value={'docs'}>
			<i class="fa-solid fa-book text-2xl" />
		</AppRailTile>
		<hr class="opacity-30" />
		<AppRailTile label="Tailwind" value={'elements'}>
			<DocsIcon name="tailwind" width="w-6" height="h-6" />
		</AppRailTile>
		<AppRailTile label="Svelte" value={'svelte'}>
			<DocsIcon name="svelte" width="w-6" height="h-6" />
		</AppRailTile>
		<AppRailTile label="Utilities" value={'utilities'}>
			<i class="fa-solid fa-screwdriver-wrench text-2xl" />
		</AppRailTile>
		<div class="lg:hidden">
			<hr class="opacity-30" />
			<AppRailTile label="Blog" href="/blog" value={'blog'} on:click={onListItemClick}>
				<i class="fa-solid fa-bullhorn text-2xl" />
			</AppRailTile>
		</div>
	</AppRail>
	<!-- Nav Links -->
	<section class="p-4 pb-20 space-y-4 overflow-y-auto">
		{#each filteredMenuNavLinks as { id, title, list }, i}
			{#if list.length > 0}
				<!-- Title -->
				<div {id} class="text-primary-700 dark:text-primary-500 font-bold uppercase px-4">{title}</div>
				<!-- Navigation List -->
				<nav class="list-nav">
					<ul>
						{#each list as { href, label, badge }}
							<li on:click={onListItemClick} on:keypress>
								<a {href} class={classesActive(href)} data-sveltekit-preload-data="hover">
									<span class="flex-auto">{@html label}</span>
									{#if badge}<span class="badge variant-filled-secondary">{badge}</span>{/if}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
				<!-- Divider -->
				{#if i + 1 < filteredMenuNavLinks.length}<hr class="!my-6 opacity-50" />{/if}
			{/if}
		{/each}
	</section>
</div>
