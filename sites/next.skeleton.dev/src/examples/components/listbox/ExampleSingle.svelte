<script lang="ts">
	import { Listbox } from '@skeletonlabs/skeleton-svelte';

	const fruits = $state(['Apple', 'Banana', 'Orange', 'Pineapple']);

	let selectedFruit = $state('');
</script>

<Listbox name="fruit" bind:value={selectedFruit}>
	{#each fruits as fruit}
		<Listbox.Item value={fruit.toLowerCase()}>{fruit}</Listbox.Item>
	{/each}
</Listbox>
