<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import IconClub from '@lucide/svelte/icons/club';
	import IconDiamond from '@lucide/svelte/icons/diamond';
	import IconHeart from '@lucide/svelte/icons/heart';
	import IconSpade from '@lucide/svelte/icons/spade';
	let value = $state(['item-1']);
	const lorem =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';
</script>

<Accordion {value} onValueChange={(e) => (value = e.value)}>
	<Accordion.Item value="item-1">
		<Accordion.Heading>
			<Accordion.Trigger class="grid-cols-[auto_1fr_auto]">
				<IconClub />
				<span>Club</span>
				<Accordion.Indicator>{value.includes('item-1') ? '-' : '+'}</Accordion.Indicator>
			</Accordion.Trigger>
		</Accordion.Heading>
		<Accordion.Content>{lorem}</Accordion.Content>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="item-2">
		<Accordion.Heading>
			<Accordion.Trigger class="grid-cols-[auto_1fr_auto]">
				<IconDiamond />
				<span>Diamond</span>
				<Accordion.Indicator>{value.includes('item-2') ? '-' : '+'}</Accordion.Indicator>
			</Accordion.Trigger>
		</Accordion.Heading>
		<Accordion.Content>{lorem}</Accordion.Content>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="item-3">
		<Accordion.Heading>
			<Accordion.Trigger class="grid-cols-[auto_1fr_auto]">
				<IconHeart />
				<span>Heart</span>
				<Accordion.Indicator>{value.includes('item-3') ? '-' : '+'}</Accordion.Indicator>
			</Accordion.Trigger>
		</Accordion.Heading>
		<Accordion.Content>{lorem}</Accordion.Content>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="item-4">
		<Accordion.Heading>
			<Accordion.Trigger class="grid-cols-[auto_1fr_auto]">
				<IconSpade />
				<span>Spade</span>
				<Accordion.Indicator>{value.includes('item-4') ? '-' : '+'}</Accordion.Indicator>
			</Accordion.Trigger>
		</Accordion.Heading>
		<Accordion.Content>{lorem}</Accordion.Content>
	</Accordion.Item>
</Accordion>
