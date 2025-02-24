<script lang="ts">
	import { Slider } from '@skeletonlabs/skeleton-svelte';

	let value = $state([40]);
	let valueMulti = $state([40, 60]);
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Switch</h1>
	</header>
	<section class="space-y-4">
		<pre class="pre">{value}</pre>
		<Slider name="example" bind:value />
	</section>
	<section class="space-y-4">
		<h2 class="h2">Multiple</h2>
		<pre class="pre">{valueMulti.join(' - ')}</pre>
		<Slider bind:value={valueMulti} />
	</section>
	<section class="space-y-8">
		<h2 class="h2">Markers</h2>
		<Slider name="example" bind:value markers={[25, 50, 75]} />
	</section>
	<section class="space-y-8">
		<h2 class="h2">Height</h2>
		<Slider name="value" bind:value height="h-1" />
		<Slider name="value" bind:value height="h-6" thumbSize="size-8" />
	</section>
	<section class="space-y-8">
		<h2 class="h2">Colors</h2>
		<Slider bind:value meterBg="bg-primary-500" thumbRingColor="ring-primary-500" />
		<Slider bind:value meterBg="bg-secondary-500" thumbRingColor="ring-secondary-500" />
		<Slider bind:value meterBg="bg-tertiary-500" thumbRingColor="ring-tertiary-500" />
	</section>
	<section class="space-y-4">
		<h2 class="h2">State</h2>
		<h3 class="h3">Disabled</h3>
		<Slider name="value" bind:value disabled />
		<h3 class="h3">Read-Only</h3>
		<Slider name="value" bind:value readOnly />
	</section>
	<section class="space-y-8">
		<h2 class="h2">RTL</h2>
		<Slider bind:value dir="rtl" />
		<Slider bind:value={valueMulti} dir="rtl" />
	</section>
</div>
