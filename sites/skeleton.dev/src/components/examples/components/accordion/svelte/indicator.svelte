<script lang="ts">
	import { PlusIcon, MinusIcon } from '@lucide/svelte';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
</script>

<Accordion>
	{#each ['1', '2', '3'] as item (item)}
		<Accordion.Item value={item}>
			<h3>
				<Accordion.ItemTrigger class="flex justify-between items-center">
					Item {item}
					<Accordion.ItemIndicator>
						<Accordion.Context>
							{#snippet children(accordion)}
								{#if accordion().value.includes(item)}
									<PlusIcon class="size-4" />
								{:else}
									<MinusIcon class="size-4" />
								{/if}
							{/snippet}
						</Accordion.Context>
					</Accordion.ItemIndicator>
				</Accordion.ItemTrigger>
			</h3>
			<Accordion.ItemContent>Content for item {item}</Accordion.ItemContent>
		</Accordion.Item>
	{/each}
</Accordion>
