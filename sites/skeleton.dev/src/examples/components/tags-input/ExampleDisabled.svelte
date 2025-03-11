<script lang="ts">
	import { TagsInput } from '@skeletonlabs/skeleton-svelte';

	// State
	let flavors = $state(['Vanilla', 'Chocolate', 'Strawberry']);
</script>

<TagsInput name="example" value={flavors} onValueChange={(e) => (flavors = e.value)} placeholder="Add Tag..." disabled />
