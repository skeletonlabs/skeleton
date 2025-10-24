<script lang="ts">
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';
	import type { CollectionEntry } from 'astro:content';

	interface Props {
		url: URL;
		frameworks: CollectionEntry<'frameworks'>[];
		activeFramework: CollectionEntry<'frameworks'>;
	}

	const { url, frameworks, activeFramework }: Props = $props();
</script>

<Popover>
	<Popover.Trigger class="btn hover:preset-tonal data-[state=open]:preset-tonal px-2">
		<img src={activeFramework.data.logo} alt={activeFramework.data.name} class="size-4 grayscale" />
		<span class="hidden xl:inline">{activeFramework.data.name}</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner class="z-[51]!">
			<Popover.Content class="card bg-surface-50-950 border border-surface-200-800 p-4 shadow-xl">
				<div class="grid grid-cols-1 gap-2">
					{#each frameworks as framework (framework)}
						<!-- class="aspect-square flex flex-col items-center space-2 p-4 rounded-base hover:preset-tonal aria-[current=page]:preset-filled aria-[current=page]:pointer-events-none" -->
						<a
							class="btn btn-lg justify-start hover:preset-tonal aria-[current=page]:preset-filled aria-[current=page]:pointer-events-none"
							href={url.pathname.replace(activeFramework.id, framework.id)}
							aria-current={activeFramework.id === framework.id ? 'page' : undefined}
							data-astro-history="replace"
						>
							<img src={framework.data.logo} alt={framework.data.name} class="size-5 grayscale" />
							<span class="text-sm">{framework.data.name}</span>
						</a>
					{/each}
				</div>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
