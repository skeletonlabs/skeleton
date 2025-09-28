<script lang="ts">
	import BikeIcon from '@lucide/svelte/icons/bike';
	import BookIcon from '@lucide/svelte/icons/book';
	import HouseIcon from '@lucide/svelte/icons/house';
	import TreePalmIcon from '@lucide/svelte/icons/tree-palm';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';

	const links = [
		{ label: 'Home', href: '#', icon: HouseIcon },
		{ label: 'Entertainment', href: '#', icon: BookIcon },
		{ label: 'Recreation', href: '#', icon: BikeIcon },
		{ label: 'Relaxation', href: '#', icon: TreePalmIcon },
	];
	let anchorBar = 'btn hover:preset-tonal flex-col items-center gap-1';
</script>

<div class="w-[375px] h-[667px] grid grid-rows-[1fr_auto] border border-surface-200-800">
	<div class="flex justify-center items-center">
		<p>Contents</p>
	</div>
	<!-- --- -->
	<Navigation layout="bar">
		<Navigation.Menu class="grid grid-cols-4 gap-2">
			{#each links as link (link)}
				{@const Icon = link.icon}
				<a href={link.href} class={anchorBar}>
					<Icon class="size-5" />
					<span class="text-[10px]">{link.label}</span>
				</a>
			{/each}
		</Navigation.Menu>
	</Navigation>
	<!-- --- -->
</div>
