<script lang="ts">
	import MinusIcon from "@lucide/svelte/icons/minus";
	import PlusIcon from "@lucide/svelte/icons/plus";
	import { Accordion } from "@skeletonlabs/skeleton-svelte";
</script>

<Accordion>
	{#each ["1", "2", "3"] as item (item)}
		<Accordion.Item value={item}>
			<h3>
				<Accordion.ItemTrigger class="flex items-center justify-between">
					Item {item}
					<Accordion.ItemIndicator class="group">
						<MinusIcon class="hidden size-4 group-data-[state=open]:block" />
						<PlusIcon class="block size-4 group-data-[state=open]:hidden" />
					</Accordion.ItemIndicator>
				</Accordion.ItemTrigger>
			</h3>
			<Accordion.ItemContent>Content for item {item}</Accordion.ItemContent>
		</Accordion.Item>
	{/each}
</Accordion>
