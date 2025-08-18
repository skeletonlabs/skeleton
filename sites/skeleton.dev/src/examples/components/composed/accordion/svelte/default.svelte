<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte/composed';
	import { loremIpsum } from '@lib/lorem-ipsum.js';
	import Club from '@lucide/svelte/icons/club';
	import Diamond from '@lucide/svelte/icons/diamond';
	import Heart from '@lucide/svelte/icons/heart';
</script>

<Accordion class="w-full">
	<Accordion.Item value="item-1">
		<Accordion.Heading>
			<Accordion.Trigger class="justify-start gap-4">
				<Club />
				Club
			</Accordion.Trigger>
		</Accordion.Heading>
		<Accordion.Content>
			{loremIpsum()}
		</Accordion.Content>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="item-2">
		<Accordion.Heading>
			<Accordion.Trigger class="justify-start gap-4">
				<Diamond />
				Diamond
			</Accordion.Trigger>
		</Accordion.Heading>
		<Accordion.Content>
			{loremIpsum()}
		</Accordion.Content>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="item-3">
		<Accordion.Heading>
			<Accordion.Trigger class="justify-start gap-4">
				<Heart />
				Heart
			</Accordion.Trigger>
		</Accordion.Heading>
		<Accordion.Content>
			{loremIpsum()}
		</Accordion.Content>
	</Accordion.Item>
</Accordion>
