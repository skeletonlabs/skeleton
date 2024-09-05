<script lang="ts">
	import { TagsInput } from '@skeletonlabs/skeleton-svelte';

	// State
	let flavors = $state(['Vanilla', 'Chocolate', 'Stawberry']);
</script>

<section class="w-full space-y-4">
	<p>Not Editable Tags</p>
	<TagsInput bind:value={flavors} placeholder="Add Tag..." editable={false} />
	<p>Add Tag on Paste</p>
	<TagsInput bind:value={flavors} placeholder="Add Tag..." addOnPaste />
</section>
