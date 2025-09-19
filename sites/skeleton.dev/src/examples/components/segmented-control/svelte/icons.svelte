<script lang="ts">
	import AlignCenterIcon from '@lucide/svelte/icons/align-center-horizontal';
	import AlignEndIcon from '@lucide/svelte/icons/align-end-horizontal';
	import AlignStartIcon from '@lucide/svelte/icons/align-start-horizontal';
	import { SegmentedControl } from '@skeletonlabs/skeleton-svelte';
</script>

<SegmentedControl defaultValue="start">
	<SegmentedControl.Indicator />
	<SegmentedControl.Item value="start">
		<SegmentedControl.ItemText>
			<AlignStartIcon />
		</SegmentedControl.ItemText>
		<SegmentedControl.ItemHiddenInput />
	</SegmentedControl.Item>
	<SegmentedControl.Item value="center">
		<SegmentedControl.ItemText>
			<AlignCenterIcon />
		</SegmentedControl.ItemText>
		<SegmentedControl.ItemHiddenInput />
	</SegmentedControl.Item>
	<SegmentedControl.Item value="end">
		<SegmentedControl.ItemText>
			<AlignEndIcon />
		</SegmentedControl.ItemText>
		<SegmentedControl.ItemHiddenInput />
	</SegmentedControl.Item>
</SegmentedControl>
