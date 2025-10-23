<script>
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';

	const links = [
		{ href: 'https://themes.skeleton.dev/', title: 'Themes', target: '_blank' },
		{ href: '/figma', title: 'Figma Kit' },
		{ href: '/showcase', title: 'Showcase' },
	];
</script>

<Popover>
	<Popover.Trigger class="btn hover:preset-tonal">
		<span>More</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner class="z-[51]!">
			<Popover.Content class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-2 shadow-xl">
				<div class="grid grid-cols-1 gap-2">
					{#each links as link (link)}
						<a href={link.href} target="_blank" class="btn justify-start hover:preset-tonal">
							{link.title}
						</a>
					{/each}
				</div>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
