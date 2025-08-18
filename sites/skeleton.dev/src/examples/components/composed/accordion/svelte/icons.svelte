<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte/composed';
	import Club from '@lucide/svelte/icons/club';
	import Diamond from '@lucide/svelte/icons/diamond';
	import Heart from '@lucide/svelte/icons/heart';
	import Spade from '@lucide/svelte/icons/spade';
</script>

<Accordion>
	<Accordion.Item value="club">
		<Accordion.Heading>
			<Accordion.Trigger class="flex items-center gap-4">
				Club
				<Club size={24} />
			</Accordion.Trigger>
			<Accordion.Content>Content for Item 1</Accordion.Content>
		</Accordion.Heading>
	</Accordion.Item>
	<Accordion.Item value="diamond">
		<Accordion.Heading>
			<Accordion.Trigger class="flex items-center gap-4">
				Diamond
				<Diamond size={24} />
			</Accordion.Trigger>
			<Accordion.Content>Content for Item 2</Accordion.Content>
		</Accordion.Heading>
	</Accordion.Item>
	<Accordion.Item value="heart">
		<Accordion.Heading>
			<Accordion.Trigger class="flex items-center gap-4">
				Heart
				<Heart size={24} />
			</Accordion.Trigger>
			<Accordion.Content>Content for Item 3</Accordion.Content>
		</Accordion.Heading>
	</Accordion.Item>
	<Accordion.Item value="spade">
		<Accordion.Heading>
			<Accordion.Trigger class="flex items-center gap-4">
				Spade
				<Spade size={24} />
			</Accordion.Trigger>
			<Accordion.Content>Content for Item 4</Accordion.Content>
		</Accordion.Heading>
	</Accordion.Item>
</Accordion>
