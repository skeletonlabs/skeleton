<script lang="ts">
	import { ArrowUpRightIcon, ChevronDownIcon } from '@lucide/svelte';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
	import packageJson from '@skeletonlabs/skeleton/package.json';

	const versions = ['v3', 'v2', 'v1'];
</script>

<Menu class="hidden xl:block" positioning={{ placement: 'bottom-end' }}>
	<Menu.Trigger class="btn hover:preset-tonal data-[state=open]:preset-tonal px-2 hidden xl:flex">
		<span>v{packageJson.version}</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Menu.Trigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content class="z-50">
				{#each versions as version (version)}
					<Menu.Item value={version}>
						{#snippet element(attributes: Record<string, unknown>)}
							<a {...attributes} href={`https://${version}.skeleton.dev`} target="_blank" rel="noopener noreferrer">
								<Menu.ItemText>{version} Docs</Menu.ItemText>
								<ArrowUpRightIcon class="size-4" />
							</a>
						{/snippet}
					</Menu.Item>
				{/each}
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
