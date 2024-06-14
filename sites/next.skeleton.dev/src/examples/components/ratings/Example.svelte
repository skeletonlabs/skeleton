<script lang="ts">
    import { Rating } from '@skeletonlabs/skeleton-svelte';
	import Star from 'lucide-svelte/icons/star';
</script>

<Rating value={3} width="w-44">
    {#snippet iconFull()}
        <Star size={24} class="fill-surface-950-50" />
    {/snippet}
    {#snippet iconEmpty()}
        <Star size={24} />
    {/snippet}
</Rating>