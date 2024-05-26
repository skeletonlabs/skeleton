<script lang="ts">
    import { Rating } from '@skeletonlabs/skeleton-svelte';
	import Star from 'lucide-svelte/icons/star';
</script>

<Rating value={3} width="w-44" interactive>
    {#snippet iconFull()}
        <Star size={24} fill="white" />
    {/snippet}
    {#snippet iconEmpty()}
        <Star size={24} />
    {/snippet}
</Rating>