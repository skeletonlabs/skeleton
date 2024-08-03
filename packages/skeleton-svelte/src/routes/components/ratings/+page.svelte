<script lang="ts">
	import { Rating } from '$lib/index.js';
	import { Star, StarHalf } from 'lucide-svelte';

	let value = $state(3);
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Rating</h1>
	</header>
	<section class="space-y-4">
		<h2 class="h2">Default</h2>
		<p>{value}</p>
		<Rating bind:value>
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
	</section>
	<section class="space-y-4">
		<h2 class="h2">With Halfs</h2>
		<Rating bind:value allowHalf>
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
	</section>
	<section class="space-y-4">
		<h2 class="h2">10 stars</h2>
		<Rating bind:value count={10}>
			{#each { length: 10 } as _, index}
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
	</section>
	<section class="space-y-4">
		<h2 class="h2">Readonly</h2>
		<Rating bind:value readOnly>
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
	</section>
	<section class="space-y-4">
		<h2 class="h2">Disabled</h2>
		<Rating bind:value disabled>
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
	</section>

	<section class="space-y-4">
		<h2 class="h2">RTL</h2>
		<Rating bind:value dir="rtl">
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
	</section>
</div>
