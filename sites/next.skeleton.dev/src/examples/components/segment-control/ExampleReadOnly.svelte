<script lang="ts">
	import { Segment } from '@skeletonlabs/skeleton-svelte';

	let size = $state('sm');
</script>

<Segment name="size" value={size} onValueChange={(e) => (size = e.value)} readOnly>
	<Segment.Item value="sm">sm</Segment.Item>
	<Segment.Item value="md">md</Segment.Item>
	<Segment.Item value="lg">lg</Segment.Item>
</Segment>
