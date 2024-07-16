<script lang="ts">
	import { Listbox } from '@skeletonlabs/skeleton-svelte';

	const fruits = $state(['Apple', 'Banana', 'Orange', 'Pineapple']);

	let selectedFruits = $state('');
</script>

<Listbox name="fruits" multiple bind:value={selectedFruits}>
	{#each fruits as fruit}
		<Listbox.Item value={fruit.toLowerCase()}>{fruit}</Listbox.Item>
	{/each}
</Listbox>
