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
		<Accordion.Heading>
			<Accordion.Trigger class="grid-cols-[auto_1fr_auto]">
				<IconClub />
				<span>Club</span>
				<Accordion.Indicator>
					<Accordion.Context>
						{#snippet children(accordion)}
							{accordion().value.includes('item-1') ? '-' : '+'}
						{/snippet}
					</Accordion.Context>
				</Accordion.Indicator>
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
				<Accordion.Indicator>
					<Accordion.Context>
						{#snippet children(accordion)}
							{accordion().value.includes('item-2') ? '-' : '+'}
						{/snippet}
					</Accordion.Context>
				</Accordion.Indicator>
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
				<Accordion.Indicator>
					<Accordion.Context>
						{#snippet children(accordion)}
							{accordion().value.includes('item-3') ? '-' : '+'}
						{/snippet}
					</Accordion.Context>
				</Accordion.Indicator>
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
				<Accordion.Indicator>
					<Accordion.Context>
						{#snippet children(accordion)}
							{accordion().value.includes('item-4') ? '-' : '+'}
						{/snippet}
					</Accordion.Context>
				</Accordion.Indicator>
			</Accordion.Trigger>
		</Accordion.Heading>
		<Accordion.Content>{lorem}</Accordion.Content>
	</Accordion.Item>
</Accordion>
