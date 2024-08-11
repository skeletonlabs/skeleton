<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';

	let group = $state('item-1');
	const lorem =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo ipsa fugit suscipit autem vitae numquam et cumque praesentium vero eos minus itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo.';
</script>

<Tabs bind:value={group} dir="rtl">
	{#snippet list()}
		<Tabs.Control value="item-1">Control-1</Tabs.Control>
		<Tabs.Control value="item-2">Control-2</Tabs.Control>
		<Tabs.Control value="item-3">Control-3</Tabs.Control>
	{/snippet}
	{#snippet content()}
		<Tabs.Panel value="item-1">Panel-1 - {lorem}</Tabs.Panel>
		<Tabs.Panel value="item-2">Panel-2 - {lorem}</Tabs.Panel>
		<Tabs.Panel value="item-3">Panel-3 - {lorem}</Tabs.Panel>
	{/snippet}
</Tabs>
