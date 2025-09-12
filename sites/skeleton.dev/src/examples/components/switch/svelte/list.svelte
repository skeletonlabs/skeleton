<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="grid gap-2 w-full">
	{#each ['Label 1', 'Label 2', 'Label 3'] as label, i (label)}
		<Switch class="flex justify-between p-2">
			<Switch.Label>{label}</Switch.Label>
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.HiddenInput />
		</Switch>
		{#if i < 2}
			<hr class="hr" />
		{/if}
	{/each}
</div>
