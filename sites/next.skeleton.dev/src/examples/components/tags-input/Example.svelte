<script lang="ts">
	import { TagsInput } from '@skeletonlabs/skeleton-svelte';

	// State
	let flavors = $state(['Vanilla', 'Chocolate', 'Stawberry']);
</script>

<TagsInput name="example" bind:value={flavors} placeholder="Add Tag..." />
