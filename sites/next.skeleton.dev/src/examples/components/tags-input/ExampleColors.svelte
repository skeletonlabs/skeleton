<script lang="ts">
	import { TagsInput } from '@skeletonlabs/skeleton-svelte';

	// State
	let flavors = $state(['Vanilla', 'Chocolate', 'Stawberry']);
</script>

<section class="w-full space-y-4">
	<TagsInput bind:value={flavors} placeholder="Add Tag..." tagBackground="preset-filled-primary-500" />
	<TagsInput bind:value={flavors} placeholder="Add Tag..." tagBackground="preset-filled-secondary-500" />
	<TagsInput bind:value={flavors} placeholder="Add Tag..." tagBackground="preset-filled-tertiary-500" />
</section>
