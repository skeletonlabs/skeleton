<script lang="ts">
	import IconClub from '@lucide/svelte/icons/club';
	import IconDiamond from '@lucide/svelte/icons/diamond';
	import IconHeart from '@lucide/svelte/icons/heart';
	import IconSpade from '@lucide/svelte/icons/spade';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
</script>

<Accordion>
	<Accordion.Item value="club">
		<Accordion.ItemHeading>
			<Accordion.ItemTrigger class="grid grid-cols-[1fr_auto]">
				<span>Club</span>
				<IconClub />
			</Accordion.ItemTrigger>
		</Accordion.ItemHeading>
		<Accordion.ItemContent>Content for Item 1</Accordion.ItemContent>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="diamond">
		<Accordion.ItemHeading>
			<Accordion.ItemTrigger class="grid grid-cols-[1fr_auto]">
				<span>Diamond</span>
				<IconDiamond />
			</Accordion.ItemTrigger>
		</Accordion.ItemHeading>
		<Accordion.ItemContent>Content for Item 2</Accordion.ItemContent>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="heart">
		<Accordion.ItemHeading>
			<Accordion.ItemTrigger class="grid grid-cols-[1fr_auto]">
				<span>Heart</span>
				<IconHeart />
			</Accordion.ItemTrigger>
		</Accordion.ItemHeading>
		<Accordion.ItemContent>Content for Item 3</Accordion.ItemContent>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="spade">
		<Accordion.ItemHeading>
			<Accordion.ItemTrigger class="grid grid-cols-[1fr_auto]">
				<span>Spade</span>
				<IconSpade />
			</Accordion.ItemTrigger>
		</Accordion.ItemHeading>
		<Accordion.ItemContent>Content for Item 4</Accordion.ItemContent>
	</Accordion.Item>
</Accordion>
