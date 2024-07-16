<script lang="ts">
	import { Segment } from '@skeletonlabs/skeleton-svelte';

	let size = $state('sm');
</script>

<Segment bind:value={size} name="size">
	<Segment.Item id="sm" value="sm">sm</Segment.Item>
	<Segment.Item id="md" value="md">md</Segment.Item>
	<Segment.Item id="lg" value="lg" disabled>lg</Segment.Item>
</Segment>
