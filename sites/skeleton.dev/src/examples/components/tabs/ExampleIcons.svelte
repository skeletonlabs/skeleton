<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconPlane from 'lucide-svelte/icons/plane';
	import IconBoat from 'lucide-svelte/icons/sailboat';
	import IconCar from 'lucide-svelte/icons/car';

	let group = $state('plane');
	const lorem =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo ipsa fugit suscipit autem vitae numquam et cumque praesentium vero eos minus itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo.';
</script>

<Tabs value={group} onValueChange={(e) => (group = e.value)}>
	{#snippet list()}
		<Tabs.Control value="plane">
			<IconPlane size={20} />
		</Tabs.Control>
		<Tabs.Control value="boat">
			<IconBoat size={20} />
		</Tabs.Control>
		<Tabs.Control value="car">
			<IconCar size={20} />
		</Tabs.Control>
	{/snippet}
	{#snippet content()}
		<Tabs.Panel value="plane">Plane Panel - {lorem}</Tabs.Panel>
		<Tabs.Panel value="boat">Boat Panel - {lorem}</Tabs.Panel>
		<Tabs.Panel value="car">Car Panel - {lorem}</Tabs.Panel>
	{/snippet}
</Tabs>
