<script lang="ts">
	import IconClub from '@lucide/svelte/icons/club';
	import IconDiamond from '@lucide/svelte/icons/diamond';
	import IconHeart from '@lucide/svelte/icons/heart';
	import IconSpade from '@lucide/svelte/icons/spade';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
</script>

<Accordion>
	<Accordion.Item value="club">
		<Accordion.Heading>
			<Accordion.Trigger class="grid-cols-[1fr_auto]">
				<span>Club</span>
				<IconClub />
			</Accordion.Trigger>
			<Accordion.Content>Content for Item 1</Accordion.Content>
		</Accordion.Heading>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="diamond">
		<Accordion.Heading>
			<Accordion.Trigger class="grid-cols-[1fr_auto]">
				<span>Diamond</span>
				<IconDiamond />
			</Accordion.Trigger>
			<Accordion.Content>Content for Item 2</Accordion.Content>
		</Accordion.Heading>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="heart">
		<Accordion.Heading>
			<Accordion.Trigger class="grid-cols-[1fr_auto]">
				<span>Heart</span>
				<IconHeart />
			</Accordion.Trigger>
			<Accordion.Content>Content for Item 3</Accordion.Content>
		</Accordion.Heading>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="spade">
		<Accordion.Heading>
			<Accordion.Trigger class="grid-cols-[1fr_auto]">
				<span>Spade</span>
				<IconSpade />
			</Accordion.Trigger>
			<Accordion.Content>Content for Item 4</Accordion.Content>
		</Accordion.Heading>
	</Accordion.Item>
</Accordion>
