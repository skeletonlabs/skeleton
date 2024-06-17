<script lang="ts">
	import { Rating } from '@skeletonlabs/skeleton-svelte';
	import Star from 'lucide-svelte/icons/star';

	let value = $state(2.5);
</script>

<div dir="rtl">
	<Rating bind:value step={2} width="w-44" interactive>
		{#snippet iconFull()}
			<Star size={24} class="fill-surface-950-50" />
		{/snippet}
		{#snippet iconEmpty()}
			<Star size={24} />
		{/snippet}
	</Rating>
</div>
