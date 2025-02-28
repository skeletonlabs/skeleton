<script lang="ts">
	import { Rating } from '@skeletonlabs/skeleton-svelte';
	import IconBone from 'lucide-svelte/icons/bone';
	import IconSkull from 'lucide-svelte/icons/skull';

	let value = $state(3);
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Rating</h1>
	</header>
	<pre class="pre">value: {value}</pre>
	<section class="space-y-4">
		<Rating {value} onValueChange={(e) => (value = e.value)}></Rating>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Icons</h2>
		<Rating {value} onValueChange={(e) => (value = e.value)}>
			{#snippet iconEmpty()}<IconBone size={24} />{/snippet}
			{#snippet iconFull()}<IconSkull size={24} />{/snippet}
		</Rating>
	</section>
	<section class="space-y-4">
		<h2 class="h2">With Halfs</h2>
		<Rating {value} onValueChange={(e) => (value = e.value)} allowHalf></Rating>
	</section>
	<section class="space-y-4">
		<h2 class="h2">10 stars</h2>
		<Rating {value} onValueChange={(e) => (value = e.value)} count={10}></Rating>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Read-Only</h2>
		<Rating {value} onValueChange={(e) => (value = e.value)} readOnly></Rating>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Disabled</h2>
		<Rating {value} onValueChange={(e) => (value = e.value)} disabled></Rating>
	</section>

	<section class="space-y-4">
		<h2 class="h2">RTL</h2>
		<Rating {value} onValueChange={(e) => (value = e.value)} dir="rtl"></Rating>
	</section>
</div>
