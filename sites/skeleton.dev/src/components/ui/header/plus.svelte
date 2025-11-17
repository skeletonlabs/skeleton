<script lang="ts">
	import { ArrowUpRightIcon, ChevronDownIcon } from '@lucide/svelte';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';

	const skeletonTools = [
		{
			href: 'https://themes.skeleton.dev/',
			title: 'Theme Generator',
		},
	] as const;

	const communityTools = [
		{
			href: 'https://www.etesie.dev/figma',
			title: 'Figma Kit',
		},
		{
			href: 'https://www.etesie.dev/guides/figma/01_basics',
			title: 'Figma Kit Tutorials',
		},
	] as const;
</script>

{#snippet links(links: typeof skeletonTools | typeof communityTools)}
	{#each links as link (link)}
		<Menu.Item value={link.title}>
			{#snippet element(attributes: Record<string, unknown>)}
				<a {...attributes} href={link.href} target="_blank" rel="noopener noreferrer">
					<Menu.ItemText>{link.title}</Menu.ItemText>
					<ArrowUpRightIcon class="size-4 opacity-60" />
				</a>
			{/snippet}
		</Menu.Item>
	{/each}
{/snippet}

<Menu class="hidden xl:block" positioning={{ placement: 'bottom-start' }}>
	<Menu.Trigger class="btn hover:preset-tonal data-[state=open]:preset-tonal">
		<span>More</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Menu.Trigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content class="z-50">
				<Menu.ItemGroup>
					<Menu.ItemGroupLabel>Skeleton Tools</Menu.ItemGroupLabel>
					{@render links(skeletonTools)}
				</Menu.ItemGroup>
				<Menu.Separator />
				<Menu.ItemGroup>
					<Menu.ItemGroupLabel>Community Tools</Menu.ItemGroupLabel>
					{@render links(communityTools)}
				</Menu.ItemGroup>
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
