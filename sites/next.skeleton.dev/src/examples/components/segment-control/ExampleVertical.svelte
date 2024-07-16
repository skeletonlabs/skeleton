<script lang="ts">
	import { Segment } from '@skeletonlabs/skeleton-svelte';

	let size = $state('sm');
</script>

<Segment bind:value={size} name="size" flexDirection="flex-col">
	<Segment.Item id="sm" value="sm">Small</Segment.Item>
	<Segment.Item id="md" value="md">Medium</Segment.Item>
	<Segment.Item id="lg" value="lg" disabled>Large</Segment.Item>
</Segment>
