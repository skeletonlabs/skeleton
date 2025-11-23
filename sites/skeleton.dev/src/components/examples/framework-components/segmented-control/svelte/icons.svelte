<script lang="ts">
	import { AlignCenterVerticalIcon, AlignEndVerticalIcon, AlignStartVerticalIcon } from '@lucide/svelte';
	import { SegmentedControl } from '@skeletonlabs/skeleton-svelte';
</script>

<SegmentedControl defaultValue="start">
	<SegmentedControl.Control>
		<SegmentedControl.Indicator />
		<SegmentedControl.Item value="start" title="start" aria-label="start">
			<SegmentedControl.ItemText>
				<AlignStartVerticalIcon class="size-4" />
			</SegmentedControl.ItemText>
			<SegmentedControl.ItemHiddenInput />
		</SegmentedControl.Item>
		<SegmentedControl.Item value="center" title="center" aria-label="center">
			<SegmentedControl.ItemText>
				<AlignCenterVerticalIcon class="size-4" />
			</SegmentedControl.ItemText>
			<SegmentedControl.ItemHiddenInput />
		</SegmentedControl.Item>
		<SegmentedControl.Item value="end" title="end" aria-label="end">
			<SegmentedControl.ItemText>
				<AlignEndVerticalIcon class="size-4" />
			</SegmentedControl.ItemText>
			<SegmentedControl.ItemHiddenInput />
		</SegmentedControl.Item>
	</SegmentedControl.Control>
</SegmentedControl>
