<script lang="ts">
	import { storeCurrentUrl, storeMobileDrawer } from '$docs/stores';
	// Compoonents
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	// Links
	import { menuNavLinks } from './links';

	// Props
	export let embedded: boolean = false;

	// ListItem Click Handler
	function onListItemClick(): void {
		if (!embedded) return;
		storeMobileDrawer.set(false);
	}

	// Reactive
	$: classesActive = (href: string) => ($storeCurrentUrl === href ? '!bg-primary-500' : '');
</script>

<div class="m-4 mb-20 {$$props.class || ''}">
	{#each menuNavLinks as { id, title, list }, i}
		<!-- Title -->
		<div {id} class="text-primary-500 text-sm font-bold uppercase p-4">{title}</div>
		<!-- Navigation List -->
		<nav class="list-nav">
			<ul>
				{#each list as { href, label, badge, icon }}
					<a {href} value={href} class={classesActive(href)} on:click={onListItemClick}>
						{#if icon}
							<span>
								<div class="bg-accent-500 w-7 h-7 flex justify-center items-center rounded shadow">
									<SvgIcon name={icon} width="w-4" fill="fill-white" height="h-10" />
								</div>
							</span>
						{/if}
						<span class="flex-auto">{label}</span>
						{#if badge}<span class="badge bg-accent-500 text-white">{badge}</span>{/if}
					</a>
				{/each}
			</ul>
		</nav>
		<!-- Divider -->
		{#if i + 1 < menuNavLinks.length}<hr class="my-4 opacity-50" />{/if}
	{/each}
</div>
