<script lang="ts">
	import { Segment } from '@skeletonlabs/skeleton-svelte';

	let size = $state('sm');
</script>

<Segment name="size" bind:value={size}>
	<Segment.Item value="sm">sm</Segment.Item>
	<Segment.Item value="md" disabled>md</Segment.Item>
	<Segment.Item value="lg">lg</Segment.Item>
</Segment>
