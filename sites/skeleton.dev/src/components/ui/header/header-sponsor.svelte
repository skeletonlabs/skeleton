<script>
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import HeartIcon from '@lucide/svelte/icons/heart';
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';

	// const links = [{ href: 'https://github.com/sponsors/skeletonlabs', title: 'News' }];
</script>

<Popover positioning={{ placement: 'top-end' }}>
	<Popover.Trigger class="hidden xl:flex btn p-2 hover:preset-tonal data-[state=open]:preset-tonal" title="Sponsor Us">
		<HeartIcon class="fill-surface-950-50 size-5" />
		<ChevronDownIcon class="size-4 opacity-50" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner>
			<Popover.Content class="card max-w-72 bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 z-50">
				<header class="space-y-2">
					<p class="font-bold">Sponsor Us</p>
					<p class="text-xs opacity-60">Sponsor Skeleton and help support the project. Available on the following services.</p>
				</header>
				<hr class="hr" />
				<div class="flex flex-col gap-1">
					<a
						class="btn hover:preset-tonal justify-between"
						href="https://github.com/sponsors/skeletonlabs"
						target="_blank"
						rel="noreferrer"
					>
						<span>Via GitHub</span>
						<ArrowUpRightIcon class="size-4 opacity-60" />
					</a>
					<a class="btn hover:preset-tonal justify-between" href="https://ko-fi.com/skeletonlabs" target="_blank" rel="noreferrer">
						<span>Via Ko-Fi</span>
						<ArrowUpRightIcon class="size-4 opacity-60" />
					</a>
				</div>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
