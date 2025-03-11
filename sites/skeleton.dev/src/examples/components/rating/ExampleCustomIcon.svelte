<script lang="ts">
	import { Rating } from '@skeletonlabs/skeleton-svelte';
	import { Bone, Skull } from 'lucide-svelte';
</script>

<Rating value={2}>
	{#snippet iconEmpty()}
		<Bone size={24} />
	{/snippet}
	{#snippet iconFull()}
		<Skull size={24} />
	{/snippet}
</Rating>
