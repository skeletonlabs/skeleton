<script lang="ts">
	import { ChevronDownIcon, ArrowUpRightIcon, HeartIcon } from '@lucide/svelte';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<Menu positioning={{ placement: 'bottom-end' }}>
	<Menu.Trigger class="hidden xl:flex btn p-2 hover:preset-tonal data-[state=open]:preset-tonal" title="Sponsor Us" aria-label="Sponsor Us">
		<HeartIcon class="fill-surface-950-50 size-5" />
		<ChevronDownIcon class="size-4 opacity-50" />
	</Menu.Trigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content class="z-50">
				<Menu.ItemGroup>
					<Menu.ItemGroupLabel>Support Skeleton</Menu.ItemGroupLabel>
					<Menu.Item value="github">
						{#snippet element(attributes: Record<string, unknown>)}
							<a {...attributes} href="https://github.com/sponsors/skeletonlabs" target="_blank" rel="noreferrer noopener">
								<Menu.ItemText>Via GitHub</Menu.ItemText>
								<ArrowUpRightIcon class="size-4 opacity-60" />
							</a>
						{/snippet}
					</Menu.Item>
					<Menu.Item value="kofi">
						{#snippet element(attributes: Record<string, unknown>)}
							<a {...attributes} href="https://ko-fi.com/skeletonlabs" target="_blank" rel="noreferrer noopener">
								<Menu.ItemText>Via Ko-Fi</Menu.ItemText>
								<ArrowUpRightIcon class="size-4 opacity-60" />
							</a>
						{/snippet}
					</Menu.Item>
				</Menu.ItemGroup>
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
