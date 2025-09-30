<script lang="ts">
	import IconClub from '@lucide/svelte/icons/club';
	import IconDiamond from '@lucide/svelte/icons/diamond';
	import IconHeart from '@lucide/svelte/icons/heart';
	import IconSpade from '@lucide/svelte/icons/spade';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';

	const lorem =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';
</script>

<Accordion>
	<Accordion.Item value="item-1">
		<Accordion.ItemHeading>
			<Accordion.ItemTrigger class="grid grid-cols-[auto_1fr_auto] gap-2">
				<IconClub />
				<span>Club</span>
				<Accordion.ItemIndicator>
					<Accordion.Context>
						{#snippet children(accordion)}
							{accordion().value.includes('item-1') ? '-' : '+'}
						{/snippet}
					</Accordion.Context>
				</Accordion.ItemIndicator>
			</Accordion.ItemTrigger>
		</Accordion.ItemHeading>
		<Accordion.ItemContent>{lorem}</Accordion.ItemContent>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="item-2">
		<Accordion.ItemHeading>
			<Accordion.ItemTrigger class="grid grid-cols-[auto_1fr_auto] gap-2">
				<IconDiamond />
				<span>Diamond</span>
				<Accordion.ItemIndicator>
					<Accordion.Context>
						{#snippet children(accordion)}
							{accordion().value.includes('item-2') ? '-' : '+'}
						{/snippet}
					</Accordion.Context>
				</Accordion.ItemIndicator>
			</Accordion.ItemTrigger>
		</Accordion.ItemHeading>
		<Accordion.ItemContent>{lorem}</Accordion.ItemContent>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="item-3">
		<Accordion.ItemHeading>
			<Accordion.ItemTrigger class="grid grid-cols-[auto_1fr_auto] gap-2">
				<IconHeart />
				<span>Heart</span>
				<Accordion.ItemIndicator>
					<Accordion.Context>
						{#snippet children(accordion)}
							{accordion().value.includes('item-3') ? '-' : '+'}
						{/snippet}
					</Accordion.Context>
				</Accordion.ItemIndicator>
			</Accordion.ItemTrigger>
		</Accordion.ItemHeading>
		<Accordion.ItemContent>{lorem}</Accordion.ItemContent>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="item-4">
		<Accordion.ItemHeading>
			<Accordion.ItemTrigger class="grid grid-cols-[auto_1fr_auto] gap-2">
				<IconSpade />
				<span>Spade</span>
				<Accordion.ItemIndicator>
					<Accordion.Context>
						{#snippet children(accordion)}
							{accordion().value.includes('item-4') ? '-' : '+'}
						{/snippet}
					</Accordion.Context>
				</Accordion.ItemIndicator>
			</Accordion.ItemTrigger>
		</Accordion.ItemHeading>
		<Accordion.ItemContent>{lorem}</Accordion.ItemContent>
	</Accordion.Item>
</Accordion>
