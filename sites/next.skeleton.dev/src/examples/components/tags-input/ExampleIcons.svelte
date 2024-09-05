<script lang="ts">
	import { TagsInput } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconDelete from 'lucide-svelte/icons/x-circle';

	// State
	let flavors = $state(['Vanilla', 'Chocolate', 'Stawberry']);
</script>

<TagsInput bind:value={flavors} placeholder="Add Tag...">
	{#snippet buttonDelete()}<IconDelete class="size-4" />{/snippet}
</TagsInput>
