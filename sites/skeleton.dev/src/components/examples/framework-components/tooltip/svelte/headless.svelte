<script lang="ts">
	import { Portal, Tooltip } from '@skeletonlabs/skeleton-svelte';
</script>

<Tooltip>
	<Tooltip.Trigger>Hover Me</Tooltip.Trigger>
	<Portal>
		<Tooltip.Positioner>
			<Tooltip.Content class="card max-w-md p-2 bg-surface-100-900 shadow-xl space-y-2">
				<img
					class="size-72"
					src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWVmbzcxanp6YmtxZ28xcXBqaXBscThsdDZ5Nm9ncWxkeWtqaHJ2bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/dn1PN6NtunfnUjUGFC/giphy.gif"
					alt="Skeleton Gif"
				/>
				<p>Three spooky skeletons!</p>
			</Tooltip.Content>
		</Tooltip.Positioner>
	</Portal>
</Tooltip>
