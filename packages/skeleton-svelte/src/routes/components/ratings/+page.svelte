<script lang="ts">
	import { Rating } from '$lib/index.js';
	import { Star, StarHalf } from 'lucide-svelte';

	let value = $state(0);
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Rating</h1>
	</header>
	<section class="space-y-4">
		<h2 class="h2">Default</h2>
		<p>Value: {value}</p>
		<Rating bind:value></Rating>
	</section>
	<section class="space-y-4">
		<h2 class="h2">With Halfs</h2>
		<Rating bind:value allowHalf></Rating>
	</section>
	<section class="space-y-4">
		<h2 class="h2">10 stars</h2>
		<Rating bind:value count={10}>
			{#snippet iconEmpty()}
				<Star size={24} />
			{/snippet}
			{#snippet iconHalf()}
				<StarHalf size={24} class="fill-surface-950-50" />
			{/snippet}
			{#snippet iconFull()}
				<Star size={24} class="fill-surface-950-50" />
			{/snippet}
		</Rating>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Readonly</h2>
		<Rating bind:value readOnly>
			{#snippet iconEmpty()}
				<Star size={24} />
			{/snippet}
			{#snippet iconHalf()}
				<StarHalf size={24} class="fill-surface-950-50" />
			{/snippet}
			{#snippet iconFull()}
				<Star size={24} class="fill-surface-950-50" />
			{/snippet}
		</Rating>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Disabled</h2>
		<Rating bind:value disabled>
			{#snippet iconEmpty()}
				<Star size={24} />
			{/snippet}
			{#snippet iconHalf()}
				<StarHalf size={24} class="fill-surface-950-50" />
			{/snippet}
			{#snippet iconFull()}
				<Star size={24} class="fill-surface-950-50" />
			{/snippet}
		</Rating>
	</section>

	<section class="space-y-4">
		<h2 class="h2">RTL</h2>
		<Rating bind:value dir="rtl">
			{#snippet iconEmpty()}
				<Star size={24} />
			{/snippet}
			{#snippet iconHalf()}
				<StarHalf size={24} class="fill-surface-950-50" />
			{/snippet}
			{#snippet iconFull()}
				<Star size={24} class="fill-surface-950-50" />
			{/snippet}
		</Rating>
	</section>
</div>
