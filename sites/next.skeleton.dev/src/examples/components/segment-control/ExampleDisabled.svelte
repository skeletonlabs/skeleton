<script lang="ts">
	import { Segment } from '@skeletonlabs/skeleton-svelte';

	let size = $state('sm');
</script>

<Segment>
	<Segment.Item bind:group={size} name="size" id="sm" value="sm">sm</Segment.Item>
	<Segment.Item bind:group={size} name="size" id="md" value="md">md</Segment.Item>
	<Segment.Item bind:group={size} name="size" id="lg" value="lg" disabled>lg</Segment.Item>
</Segment>
