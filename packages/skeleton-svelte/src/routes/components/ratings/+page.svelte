<script lang="ts">
	import { Rating } from '$lib/index.js';
	import { Star, StarHalf } from 'lucide-svelte';
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Ratings</h1>
	</header>

	<section class="space-y-4">
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={5} allowHalf>
					{#each { length: 5 } as _, index}
						<Rating.Item {index}>
							{#snippet iconEmpty()}
								<Star size={24} />
							{/snippet}
							{#snippet iconHalf()}
								<StarHalf size={24} class="fill-surface-950-50" />
							{/snippet}
							{#snippet iconFull()}
								<Star size={24} class="fill-surface-950-50" />
							{/snippet}
						</Rating.Item>
					{/each}
				</Rating>
			</div>
		</div>
	</section>
</div>
