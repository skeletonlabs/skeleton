<script lang="ts">
	import { Tooltip } from '@skeletonlabs/skeleton-svelte';
	let openState = $state(false);
</script>

<Tooltip
	open={openState}
	onOpenChange={(e) => (openState = e.open)}
	positioning={{ placement: 'top' }}
	triggerBase="underline"
	contentBase="card preset-filled p-4"
	openDelay={200}
	arrow
>
	{#snippet trigger()}Hover Me{/snippet}
	{#snippet content()}This is a tooltip.{/snippet}
</Tooltip>
