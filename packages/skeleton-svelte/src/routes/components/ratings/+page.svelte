<script>
	import Rating from '$lib/components/Rating/Rating.svelte';
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Ratings</h1>
	</header>

	<section class="space-y-4">
		<h2 class="h2">Value</h2>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={5} />
			</div>
			<h3 class="h3">5.0</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={0} />
			</div>
			<h3 class="h3">0.0</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={2.5} />
			</div>
			<h3 class="h3">2.5</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={3.75} />
			</div>
			<h3 class="h3">3.75</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={1.25} />
			</div>
			<h3 class="h3">1.25</h3>
		</div>
	</section>
</div>
