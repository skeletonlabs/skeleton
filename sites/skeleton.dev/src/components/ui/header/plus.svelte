<script>
	import { ArrowUpRightIcon, ChevronDownIcon } from '@lucide/svelte';
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';

	const links = [{ href: 'https://themes.skeleton.dev/', title: 'Theme Generator', target: '_blank' }];
	const linksMore = [
		{ href: 'https://www.etesie.dev/figma', title: 'Figma Kit', target: '_blank' },
		{ href: 'https://www.etesie.dev/guides/figma/01_basics', title: 'Figma Kit Tutorials', target: '_blank' },
	];
</script>

<Popover>
	<Popover.Trigger class="btn hover:preset-tonal data-[state=open]:preset-tonal">
		<span>LLM</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner class="z-[51]!">
			<Popover.Content class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 shadow-xl">
				<div class="grid grid-cols-1 gap-2">
					{#each links as link (link)}
						<a href={link.href} target={link.target} class="btn justify-between hover:preset-tonal">
							<span>{link.title}</span>
							{#if link.target === '_blank'}<ArrowUpRightIcon class="size-4" />{/if}
						</a>
					{/each}
				</div>
				<hr class="hr" />
				<p class="text-xs ml-4 opacity-60">Community Tools</p>
				<div class="grid grid-cols-1 gap-2">
					{#each linksMore as link (link)}
						<a href={link.href} target={link.target} class="btn justify-between hover:preset-tonal">
							<span>{link.title}</span>
							{#if link.target === '_blank'}<ArrowUpRightIcon class="size-4" />{/if}
						</a>
					{/each}
				</div>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
