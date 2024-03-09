<script lang="ts">
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';

	let tabSet: number = 0;
</script>

<h1 class="h1">Tabs</h1>
<TabGroup>
	test
	{#snippet panel()}
		{#if tabSet === 0}
			(tab panel 1 contents)
		{:else if tabSet === 1}
			(tab panel 2 contents)
		{:else if tabSet === 2}
			(tab panel 3 contents)
		{/if}
	{/snippet}
</TabGroup>
