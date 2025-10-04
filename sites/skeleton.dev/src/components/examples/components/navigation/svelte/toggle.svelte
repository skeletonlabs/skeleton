<script lang="ts">
	import ArrowLeftRightIcon from '@lucide/svelte/icons/arrow-left-right';
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

	const buttonClasses = 'btn hover:preset-tonal';
	let anchorRail = `${buttonClasses} aspect-square w-full max-w-[84px] flex flex-col items-center gap-0.5`;
	let anchorSidebar = `${buttonClasses} justify-start px-2 w-full`;

	let layoutRail = $state(true);

	function toggleLayout() {
		layoutRail = !layoutRail;
	}
</script>

<div class="w-full h-[728px] grid grid-cols-[auto_1fr] items-stretch border border-surface-200-800">
	<!-- --- -->
	<Navigation layout={layoutRail ? 'rail' : 'sidebar'} class={layoutRail ? '' : 'grid grid-rows-[1fr_auto] gap-4'}>
		<Navigation.Content>
			<Navigation.Menu>
				{#each links as link (link)}
					{@const Icon = link.icon}
					<a href={link.href} class={layoutRail ? anchorRail : anchorSidebar}>
						<Icon class={layoutRail ? 'size-5' : 'size-4'} />
						<span class={layoutRail ? 'text-[10px]' : ''}>{link.label}</span>
					</a>
				{/each}
			</Navigation.Menu>
		</Navigation.Content>
		<Navigation.Footer>
			<button type="button" class={layoutRail ? anchorRail : anchorSidebar} onclick={toggleLayout}>
				<ArrowLeftRightIcon class={layoutRail ? 'size-5' : 'size-4'} />
				{#if !layoutRail}<span>Resize</span>{/if}
			</button>
		</Navigation.Footer>
	</Navigation>
	<!-- --- -->
	<div class="flex justify-center items-center">
		<pre class="pre">Layout: {layoutRail ? 'Rail' : 'Sidebar'}</pre>
	</div>
</div>
