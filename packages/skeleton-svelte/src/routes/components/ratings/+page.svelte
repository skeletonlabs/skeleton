<script lang="ts">
	import Rating from '$lib/components/Rating/Rating.svelte';
	import Star from 'lucide-svelte/icons/star';
	import Skull from 'lucide-svelte/icons/skull';
	import Bone from 'lucide-svelte/icons/bone';

	let interactiveValue = $state(3);
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
					{#snippet iconFull()}
						<Star size={24} fill="white" />
					{/snippet}
					{#snippet iconEmpty()}
						<Star size={24} />
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">5.0</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={0}>
					{#snippet iconFull()}
						<Star size={24} fill="white" />
					{/snippet}
					{#snippet iconEmpty()}
						<Star size={24} />
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">0.0</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={2.5}>
					{#snippet iconFull()}
						<Star size={24} fill="white" />
					{/snippet}
					{#snippet iconEmpty()}
						<Star size={24} />
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">2.5</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={3.75}>
					{#snippet iconFull()}
						<Star size={24} fill="white" />
					{/snippet}
					{#snippet iconEmpty()}
						<Star size={24} />
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">3.75</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating value={1.25}>
					{#snippet iconFull()}
						<Star size={24} fill="white" />
					{/snippet}
					{#snippet iconEmpty()}
						<Star size={24} />
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
				<Rating bind:value={interactiveValue} interactive>
					{#snippet iconFull()}
						<Skull size={24} />
					{/snippet}
					{#snippet iconEmpty()}
						<Bone size={24} />
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">{interactiveValue.toFixed(2)}</h3>
		</div>
	</section>

	<section class="space-y-4">
		<h2 class="h2">interactive</h2>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating bind:value={interactiveValue} interactive>
					{#snippet iconFull()}
						<Star size={24} fill="white" />
					{/snippet}
					{#snippet iconEmpty()}
						<Star size={24} />
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">{interactiveValue.toFixed(2)}</h3>
		</div>
	</section>

	<section class="space-y-4">
		<h2 class="h2">Fractions</h2>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating bind:value={interactiveValue} interactive fraction={2}>
					{#snippet iconFull()}
						<Star size={24} fill="white" />
					{/snippet}
					{#snippet iconEmpty()}
						<Star size={24} />
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">{interactiveValue.toFixed(2)}</h3>
		</div>
		<div class="flex items-center gap-8">
			<div class="w-48">
				<Rating bind:value={interactiveValue} interactive fraction={3}>
					{#snippet iconFull()}
						<Star size={24} fill="white" />
					{/snippet}
					{#snippet iconEmpty()}
						<Star size={24} />
					{/snippet}
				</Rating>
			</div>
			<h3 class="h3">{interactiveValue.toFixed(2)}</h3>
		</div>
	</section>
</div>
