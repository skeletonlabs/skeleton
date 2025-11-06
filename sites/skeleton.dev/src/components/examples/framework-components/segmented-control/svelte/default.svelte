<script lang="ts">
	import { SegmentedControl } from '@skeletonlabs/skeleton-svelte';

	let value = $state<string | null>('music');
</script>

<div class="flex flex-col items-center gap-4">
	<SegmentedControl {value} onValueChange={(details) => (value = details.value)}>
		<SegmentedControl.Label>Browse</SegmentedControl.Label>
		<SegmentedControl.Control>
			<SegmentedControl.Indicator />
			<SegmentedControl.Item value="music">
				<SegmentedControl.ItemText>Music</SegmentedControl.ItemText>
				<SegmentedControl.ItemHiddenInput />
			</SegmentedControl.Item>
			<SegmentedControl.Item value="images">
				<SegmentedControl.ItemText>Images</SegmentedControl.ItemText>
				<SegmentedControl.ItemHiddenInput />
			</SegmentedControl.Item>
			<SegmentedControl.Item value="videos">
				<SegmentedControl.ItemText>Videos</SegmentedControl.ItemText>
				<SegmentedControl.ItemHiddenInput />
			</SegmentedControl.Item>
		</SegmentedControl.Control>
	</SegmentedControl>

	<!-- Message -->
	<p><span class="opacity-60">You selected</span> <code class="code">{value}</code></p>
</div>
