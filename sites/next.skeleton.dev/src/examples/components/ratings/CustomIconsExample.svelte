<script lang="ts">
	import { Rating } from '@skeletonlabs/skeleton-svelte';
	import Skull from 'lucide-svelte/icons/skull';
	import Bone from 'lucide-svelte/icons/bone';
</script>

<Rating value={3} max={6} width="w-44">
	{#snippet iconFull()}
		<Skull size={24} />
	{/snippet}
	{#snippet iconEmpty()}
		<Bone size={24} />
	{/snippet}
</Rating>
