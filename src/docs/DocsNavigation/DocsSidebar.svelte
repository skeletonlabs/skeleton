<script lang="ts">
	import { page } from '$app/stores';

	import { storeCurrentUrl, storeMobileDrawer } from '$docs/stores';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import { menuNavLinks } from './links';

	// Props
	export let embedded: boolean = false;

	// Local
	let elemSearch: HTMLElement;
	// let inputSearch: string = '';
	let filteredMenuNavLinks: any[] = menuNavLinks;

	let category: string = 'guides'; // guides | docs | tailwind | svelte | utilities

	function setNavCategory(c: string): void {
		category = c;
		// prettier-ignore
		switch(category) {
			case('guides'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'nav-guides'); break;
			case('docs'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'nav-docs'); break;
			case('elements'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'nav-elements'); break;
			case('svelte'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'nav-components' || linkSet.id === 'nav-actions'); break;
			case('utilities'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'nav-utilities'); break;
		}
	}
	page.subscribe((p) => {
		let pathMatch: string = p.url.pathname.split('/')[1];
		if (['components', 'actions'].includes(pathMatch)) {
			pathMatch = 'svelte';
		}
		setNavCategory(pathMatch);
	});

	// ListItem Click Handler
	function onListItemClick(): void {
		// clearSearch();
		// On Drawer embed Only:
		if (!embedded) return;
		storeMobileDrawer.set(false);
	}

	// Search Handler
	// function onSearch(): void {
	// 	// Reset with Deep Copy
	// 	filteredMenuNavLinks = JSON.parse(JSON.stringify(menuNavLinks));
	// 	// If search value
	// 	if (inputSearch?.length > 0) {
	// 		// Loop each set
	// 		filteredMenuNavLinks.forEach((linkSet: any) => {
	// 			// Filter the links
	// 			linkSet.list = linkSet.list.filter((linkObj: any) => {
	// 				const target: string = JSON.stringify(linkObj).toLowerCase();
	// 				const searchTerm: string | undefined = inputSearch?.toLowerCase();
	// 				return target.includes(searchTerm);
	// 			});
	// 		});
	// 	}
	// }

	// Clear Search -- NOTE: timeout prevents anchor race condition
	// function clearSearch(): void {
	// 	setTimeout(() => {
	// 		inputSearch = '';
	// 		onSearch();
	// 	}, 1);
	// }

	// Keyboard Shortcut (⌘+K) to Focus Search
	let pressedKeys: string[] = [];
	function onWindowKeydown(e: any): void {
		if (e.code === 'MetaLeft' || e.code === 'KeyK') {
			// Set pressed keys
			pressedKeys = [...pressedKeys, e.code];
			// If both keys pressed, focus input
			if (pressedKeys.includes('MetaLeft') && pressedKeys.includes('KeyK')) {
				elemSearch.focus();
			}
		}
	}
	function onWindowKeyup(e: any): void {
		pressedKeys = [];
	}

	// Reactive
	$: classesActive = (href: string) => ($storeCurrentUrl?.includes(href) ? '!bg-primary-500' : '');
</script>

<!-- NOTE: using stopPropagation to override Chrome for Windows search shortcut -->
<svelte:window on:keydown|stopPropagation={onWindowKeydown} on:keyup={onWindowKeyup} />

<div class="grid grid-cols-[auto_1fr] h-full border-r border-black/5 dark:border-white/5 {$$props.class ?? ''}">
	<!-- Rail -->
	<!-- bg-surface-200-700-token -->
	<section class="bg-white/30 dark:bg-black/30 w-20 overflow-y-auto">
		<button
			class="block w-full aspect-square space-y-1 hover:bg-primary-500/30"
			class:!bg-primary-500={category === 'guides'}
			on:click={() => {
				setNavCategory('guides');
			}}
		>
			<SvgIcon name="cubes" width="w-6" height="h-6" />
			<div class="text-xs capitalize font-bold">guides</div>
		</button>
		<button
			class="block w-full aspect-square space-y-1 hover:bg-primary-500/30"
			class:!bg-primary-500={category === 'docs'}
			on:click={() => {
				setNavCategory('docs');
			}}
		>
			<SvgIcon name="book" width="w-6" height="h-6" />
			<div class="text-xs capitalize font-bold">docs</div>
		</button>
		<button
			class="block w-full aspect-square space-y-1 hover:bg-primary-500/30"
			class:!bg-primary-500={category === 'elements'}
			on:click={() => {
				setNavCategory('elements');
			}}
		>
			<SvgIcon name="tailwind" width="w-6" height="h-6" />
			<div class="text-xs capitalize font-bold">tailwind</div>
		</button>
		<button
			class="block w-full aspect-square space-y-1 hover:bg-primary-500/30"
			class:!bg-primary-500={category === 'svelte'}
			on:click={() => {
				setNavCategory('svelte');
			}}
		>
			<SvgIcon name="svelte" width="w-6" height="h-6" />
			<div class="text-xs capitalize font-bold">svelte</div>
		</button>
		<button
			class="block w-full aspect-square space-y-1 hover:bg-primary-500/30"
			class:!bg-primary-500={category === 'utilities'}
			on:click={() => {
				setNavCategory('utilities');
			}}
		>
			<SvgIcon name="screwdriver" width="w-6" height="h-6" />
			<div class="text-xs capitalize font-bold">utilities</div>
		</button>
	</section>
	<!-- Navigation -->
	<section class="space-y-4 p-4 overflow-y-auto">
		<!-- Lists -->
		{#each filteredMenuNavLinks as { id, title, list }, i}
			{#if list.length > 0}
				<!-- Title -->
				<div {id} class="text-primary-500 font-bold uppercase px-4">{title}</div>
				<!-- Navigation List -->
				<nav class="list-nav">
					<ul>
						{#each list as { href, label, badge }}
							<li on:click={onListItemClick} on:keypress>
								<a {href} value={href} class={classesActive(href)} data-sveltekit-prefetch>
									<span class="flex-auto">{label}</span>
									{#if badge}<span class="badge bg-accent-500 text-white">{badge}</span>{/if}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
				<!-- Divider -->
				{#if i + 1 < filteredMenuNavLinks.length}<hr class="my-4 opacity-50" />{/if}
			{/if}
		{/each}
	</section>
</div>
