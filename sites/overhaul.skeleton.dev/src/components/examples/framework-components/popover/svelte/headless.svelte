<script>
	import { SkullIcon } from '@lucide/svelte';
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<Popover>
	<Popover.Trigger>
		<SkullIcon class="size-12" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner>
			<Popover.Content>
				<div class="card border border-surface-500/30 bg-surface-200-800/30 backdrop-blur-sm max-w-md p-2 space-y-2 shadow-xl">
					<header class="flex justify-between items-center">
						<Popover.Title class="font-bold">Hello Skeleton</Popover.Title>
						<Popover.CloseTrigger class="btn-icon hover:preset-tonal">&times</Popover.CloseTrigger>
					</header>
					<img
						class="size-72"
						src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWVmbzcxanp6YmtxZ28xcXBqaXBscThsdDZ5Nm9ncWxkeWtqaHJ2bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/dn1PN6NtunfnUjUGFC/giphy.gif"
						alt="Skeleton Gif"
					/>
					<Popover.Description class="text-xs text-center">Three spooky skeletons!</Popover.Description>
				</div>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
