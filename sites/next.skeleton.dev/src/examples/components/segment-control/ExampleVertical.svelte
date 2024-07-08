<script lang="ts">
	import { Segment } from '@skeletonlabs/skeleton-svelte';

	let size = $state('sm');
</script>

<Segment flexDirection="flex-col">
	<Segment.Item bind:group={size} name="size" id="sm" value="sm">Small</Segment.Item>
	<Segment.Item bind:group={size} name="size" id="md" value="md">Medium</Segment.Item>
	<Segment.Item bind:group={size} name="size" id="lg" value="lg" disabled>Large</Segment.Item>
</Segment>
