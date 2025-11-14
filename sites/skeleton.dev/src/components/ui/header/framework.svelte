<script lang="ts">
	import { ChevronDownIcon } from '@lucide/svelte';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
	import type { CollectionEntry } from 'astro:content';

	interface Props {
		url: URL;
		frameworks: CollectionEntry<'frameworks'>[];
		activeFramework: CollectionEntry<'frameworks'>;
	}

	const { url, frameworks, activeFramework }: Props = $props();
</script>

<Menu positioning={{ placement: 'bottom-end' }} closeOnSelect={false}>
	<Menu.Trigger class="btn hover:preset-tonal data-[state=open]:preset-tonal px-2">
		<img src={activeFramework.data.logo} alt={activeFramework.data.name} class="size-4 grayscale" />
		<span class="hidden xl:inline">{activeFramework.data.name}</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Menu.Trigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content class="z-50">
				{#each frameworks as framework (framework)}
					<Menu.Item class="aria-[current=page]:preset-filled" value={framework.id}>
						{#snippet element(attributes: Record<string, unknown>)}
							<a
								{...attributes}
								href={url.pathname.replace(activeFramework.id, framework.id)}
								aria-current={activeFramework.id === framework.id ? 'page' : undefined}
								data-astro-history="replace"
							>
								<Menu.ItemText>{framework.data.name}</Menu.ItemText>
								<Menu.ItemIndicator>
									<img src={framework.data.logo} alt={framework.data.name} class="size-5 grayscale" />
								</Menu.ItemIndicator>
							</a>
						{/snippet}
					</Menu.Item>
				{/each}
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
