<script lang="ts">
	import { SegmentedControl } from '@skeletonlabs/skeleton-svelte';

	let value = $state<string | null>('item-1');
</script>

<div class="flex flex-col items-center gap-4">
	<SegmentedControl {value} onValueChange={(details) => (value = details.value)}>
		<SegmentedControl.Control>
			<SegmentedControl.Indicator />
			{#each ['item-1', 'item-2', 'item-3'] as item (item)}
				<SegmentedControl.Item value={item}>
					<SegmentedControl.ItemText>{item}</SegmentedControl.ItemText>
					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
			{/each}
		</SegmentedControl.Control>
	</SegmentedControl>
	<pre class="pre">{value}</pre>
</div>
