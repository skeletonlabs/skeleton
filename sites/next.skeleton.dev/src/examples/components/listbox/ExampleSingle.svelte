<script lang="ts">
	import { Listbox } from '@skeletonlabs/skeleton-svelte';

	const fruits = $state(['Apple', 'Banana', 'Orange', 'Pineapple']);

	let selectedFruit = $state('Apple');
</script>

<Listbox name="fruit" bind:value={selectedFruit}>
	{#each fruits as fruit}
		<Listbox.Item value={fruit}>{fruit}</Listbox.Item>
	{/each}
</Listbox>
