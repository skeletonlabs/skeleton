<script lang="ts">
	import { TagsInput } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconDelete from 'lucide-svelte/icons/circle-x';

	// State
	let flavors = $state(['Vanilla', 'Chocolate', 'Strawberry']);
</script>

<TagsInput value={flavors} onValueChange={(e) => (flavors = e.value)} placeholder="Add Tag...">
	{#snippet buttonDelete()}<IconDelete class="size-4" />{/snippet}
</TagsInput>
