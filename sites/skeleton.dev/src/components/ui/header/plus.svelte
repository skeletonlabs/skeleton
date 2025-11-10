<script lang="ts">
	import { ArrowUpRightIcon, ChevronDownIcon } from '@lucide/svelte';
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';

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
	<div class="grid grid-cols-1 gap-2">
		{#each links as link (link)}
			<a href={link.href} target="_blank" rel="noopener noreferrer" class="btn justify-between hover:preset-tonal">
				<span>{link.title}</span>
				<ArrowUpRightIcon class="size-4" />
			</a>
		{/each}
	</div>
{/snippet}

<Popover>
	<Popover.Trigger class="btn hover:preset-tonal data-[state=open]:preset-tonal">
		<span>More</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner class="z-51!">
			<Popover.Content class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 shadow-xl">
				{@render links(skeletonTools)}
				<hr class="hr" />
				<p class="text-xs ml-4 opacity-60">Community Tools</p>
				{@render links(communityTools)}
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
