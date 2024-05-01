<script>
	import Rating from '$lib/components/Rating/Rating.svelte';

	const icons = {
		fullStar: `<svg
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
		</svg>`,
		emptyStar: `<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-star"
			><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
		</svg>`,
		bone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bone"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/></svg>`,
		skull: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-skull"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M8 20v2h8v-2"/><path d="m12.5 17-.5-1-.5 1h1z"/><path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"/></svg>`
	};

	let interractiveValue = $state(3);
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
						{@html icons.fullStar}
					{/snippet}
					{#snippet emptyIcon()}
						{@html icons.emptyStar}
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">5.0</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={0}>
					{#snippet fullIcon()}
						{@html icons.fullStar}
					{/snippet}
					{#snippet emptyIcon()}
						{@html icons.emptyStar}
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">0.0</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={2.5}>
					{#snippet fullIcon()}
						{@html icons.fullStar}
					{/snippet}
					{#snippet emptyIcon()}
						{@html icons.emptyStar}
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">2.5</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={3.75}>
					{#snippet fullIcon()}
						{@html icons.fullStar}
					{/snippet}
					{#snippet emptyIcon()}
						{@html icons.emptyStar}
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">3.75</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={1.25}>
					{#snippet fullIcon()}
						{@html icons.fullStar}
					{/snippet}
					{#snippet emptyIcon()}
						{@html icons.emptyStar}
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">1.25</h3>
		</div>
	</section>

	<section class="space-y-4">
		<h2 class="h2">Different Icons</h2>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating bind:value={interractiveValue} interactive>
					{#snippet fullIcon()}
						{@html icons.skull}
					{/snippet}
					{#snippet emptyIcon()}
						{@html icons.bone}
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">{interractiveValue}</h3>
		</div>
	</section>

	<section class="space-y-4">
		<h2 class="h2">Interractive</h2>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating bind:value={interractiveValue} interactive>
					{#snippet fullIcon()}
						{@html icons.fullStar}
					{/snippet}
					{#snippet emptyIcon()}
						{@html icons.emptyStar}
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">{interractiveValue}</h3>
		</div>
	</section>

	<section class="space-y-4">
		<h2 class="h2">Fractions</h2>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating bind:value={interractiveValue} interactive fraction={2}>
					{#snippet fullIcon()}
						{@html icons.fullStar}
					{/snippet}
					{#snippet emptyIcon()}
						{@html icons.emptyStar}
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">{interractiveValue}</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating bind:value={interractiveValue} interactive fraction={3}>
					{#snippet fullIcon()}
						{@html icons.fullStar}
					{/snippet}
					{#snippet emptyIcon()}
						{@html icons.emptyStar}
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">{interractiveValue}</h3>
		</div>
	</section>
</div>
