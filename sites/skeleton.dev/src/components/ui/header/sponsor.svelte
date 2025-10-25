<script>
	import { ChevronDownIcon, ArrowUpRightIcon, HeartIcon } from '@lucide/svelte';
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<Popover positioning={{ placement: 'bottom' }}>
	<Popover.Trigger
		class="hidden xl:flex btn p-2 hover:preset-tonal data-[state=open]:preset-tonal"
		title="Sponsor Us"
		aria-label="Sponsor Us"
	>
		<HeartIcon class="fill-surface-950-50 size-5" />
		<ChevronDownIcon class="size-4 opacity-50" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner>
			<Popover.Content class="card w-full max-w-xl bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 z-50">
				<header class="space-y-2">
					<p class="font-bold">Sponsor Us</p>
					<p class="text-xs opacity-60">Support the project!</p>
				</header>
				<hr class="hr" />
				<div class="flex flex-col gap-1">
					<a
						class="btn hover:preset-tonal justify-between"
						href="https://github.com/sponsors/skeletonlabs"
						target="_blank"
						rel="noreferrer noopener"
					>
						<span>Via GitHub</span>
						<ArrowUpRightIcon class="size-4 opacity-60" />
					</a>
					<a class="btn hover:preset-tonal justify-between" href="https://ko-fi.com/skeletonlabs" target="_blank" rel="noreferrer noopener">
						<span>Via Ko-Fi</span>
						<ArrowUpRightIcon class="size-4 opacity-60" />
					</a>
				</div>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
