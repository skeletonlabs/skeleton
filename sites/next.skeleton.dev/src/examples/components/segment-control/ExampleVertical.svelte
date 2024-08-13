<script lang="ts">
	import { Segment } from '@skeletonlabs/skeleton-svelte';

	let size = $state('sm');
</script>

<Segment name="size" bind:value={size} orientation="vertical">
	<Segment.Item value="sm">Small</Segment.Item>
	<Segment.Item value="md">Medium</Segment.Item>
	<Segment.Item value="lg">Large</Segment.Item>
</Segment>
