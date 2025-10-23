<script>
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';
	import packageJson from '@skeletonlabs/skeleton/package.json';

	const versions = ['v3', 'v2', 'v1'];
</script>

<Popover positioning={{ placement: 'bottom' }}>
	<Popover.Trigger class="btn hover:preset-tonal px-2">
		<span>{packageJson.version}</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner class="z-[51]!">
			<Popover.Content class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-2 shadow-xl">
				<div class="grid grid-cols-1 gap-2">
					{#each versions as version (version)}
						<a href="https://{version}.skeleton.dev" target="_blank" class="btn justify-start hover:preset-tonal">
							<span>{version} Docs</span>
							<ArrowUpRight class="size-4" />
						</a>
					{/each}
				</div>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
