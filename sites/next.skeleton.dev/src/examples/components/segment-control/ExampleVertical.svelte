<script lang="ts">
	import { Segment } from '@skeletonlabs/skeleton-svelte';

	let size = $state('sm');
</script>

<Segment name="size" value={size} onValueChange={(e) => (size = e.value!)} orientation="vertical">
	<Segment.Item value="sm">Small</Segment.Item>
	<Segment.Item value="md">Medium</Segment.Item>
	<Segment.Item value="lg">Large</Segment.Item>
</Segment>
