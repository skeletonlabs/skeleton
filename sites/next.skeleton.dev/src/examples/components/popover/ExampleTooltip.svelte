<script lang="ts">
	import { Tooltip } from '@skeletonlabs/skeleton-svelte';
	let openState = $state(false);
</script>

<Tooltip
	bind:open={openState}
	positioning={{ placement: 'top' }}
	triggerBase="btn preset-tonal"
	contentBase="card preset-filled p-4"
	openDelay={200}
>
	{#snippet trigger()}Hover Me{/snippet}
	{#snippet content()}This is a tooltip.{/snippet}
</Tooltip>
