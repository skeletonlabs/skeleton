<script lang="ts">
	import { Listbox } from '@skeletonlabs/skeleton-svelte';

	const fruits = $state(['Apple', 'Banana', 'Orange', 'Pineapple']);

	let selectedFruits = $state(['Apple', 'Banana']);
</script>

<Listbox name="fruits" bind:value={selectedFruits}>
	{#each fruits as fruit}
		<Listbox.Item value={fruit}>{fruit}</Listbox.Item>
	{/each}
</Listbox>
