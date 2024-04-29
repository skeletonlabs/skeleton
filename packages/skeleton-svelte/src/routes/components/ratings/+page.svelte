<script>
	import Rating from '$lib/components/Rating/Rating.svelte';

	const fullStar = `<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-star"
		>
			<polygon
				points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
				fill="currentColor"
			/>
		</svg>`;
	const emptyStar = `<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-star"
			><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
		</svg>`
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Ratings</h1>
	</header>

	<section class="space-y-4">
		<h2 class="h2">Value</h2>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={5}>
					{#snippet fullIcon()}
						{@html fullStar}
					{/snippet}
					{#snippet emptyIcon()}
						{@html emptyStar}
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">5.0</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={0}>
					{#snippet fullIcon()}
						{@html fullStar}
					{/snippet}
					{#snippet emptyIcon()}
						{@html emptyStar}
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">0.0</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={2.5}>
					{#snippet fullIcon()}
						{@html fullStar}
					{/snippet}
					{#snippet emptyIcon()}
						{@html emptyStar}
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">2.5</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={3.75}>
					{#snippet fullIcon()}
						{@html fullStar}
					{/snippet}
					{#snippet emptyIcon()}
						{@html emptyStar}
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">3.75</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={1.25}>
					{#snippet fullIcon()}
						{@html fullStar}
					{/snippet}
					{#snippet emptyIcon()}
						{@html emptyStar}
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">1.25</h3>
		</div>
	</section>
</div>
