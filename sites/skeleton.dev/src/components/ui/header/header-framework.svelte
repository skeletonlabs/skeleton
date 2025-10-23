<script>
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';

	let { frameworks, activeFramework } = $props();

	let currentPath = $state('');

	onMount(() => {
		currentPath = window.location.pathname;
	});
</script>

<Popover>
	<Popover.Trigger class="btn hover:preset-tonal px-2">
		<img src={activeFramework.data.logo} alt={activeFramework.data.name} class="size-4" />
		{activeFramework.data.name}
		<ChevronDownIcon class="size-4 opacity-50" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner class="z-[51]!">
			<Popover.Content class="card bg-surface-50-950 border border-surface-200-800 p-4 shadow-xl">
				<div class="grid grid-cols-2 gap-2">
					{#each frameworks as framework (framework)}
						<a
							href={currentPath.replace(activeFramework.id, framework.id)}
							class="aspect-square flex flex-col items-center space-2 p-4 rounded-base hover:preset-tonal aria-[current=page]:preset-filled aria-[current=page]:pointer-events-none"
							aria-current={activeFramework.id === framework.id ? 'page' : undefined}
							data-astro-history="replace"
						>
							<img src={framework.data.logo} alt={framework.data.name} class="size-8" />
							<span class="text-sm">{framework.data.name}</span>
						</a>
					{/each}
				</div>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
