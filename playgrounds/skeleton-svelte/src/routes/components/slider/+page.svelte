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
		<Slider name="example" {value} onValueChange={(e) => (value = e.value)} />
	</section>
	<section class="space-y-4">
		<h2 class="h2">Multiple</h2>
		<pre class="pre">{valueMulti.join(' - ')}</pre>
		<Slider value={valueMulti} onValueChange={(e) => (valueMulti = e.value)} />
	</section>
	<section class="space-y-8">
		<h2 class="h2">Markers</h2>
		<Slider name="example" {value} onValueChange={(e) => (value = e.value)} markers={[25, 50, 75]} />
	</section>
	<section class="space-y-8">
		<h2 class="h2">Height</h2>
		<Slider name="value" {value} onValueChange={(e) => (value = e.value)} height="h-1" />
		<Slider name="value" {value} onValueChange={(e) => (value = e.value)} height="h-6" thumbSize="size-8" />
	</section>
	<section class="space-y-8">
		<h2 class="h2">Colors</h2>
		<Slider {value} onValueChange={(e) => (value = e.value)} meterBg="bg-primary-500" thumbRingColor="ring-primary-500" />
		<Slider {value} onValueChange={(e) => (value = e.value)} meterBg="bg-secondary-500" thumbRingColor="ring-secondary-500" />
		<Slider {value} onValueChange={(e) => (value = e.value)} meterBg="bg-tertiary-500" thumbRingColor="ring-tertiary-500" />
	</section>
	<section class="space-y-4">
		<h2 class="h2">State</h2>
		<h3 class="h3">Disabled</h3>
		<Slider name="value" {value} onValueChange={(e) => (value = e.value)} disabled />
		<h3 class="h3">Read-Only</h3>
		<Slider name="value" {value} onValueChange={(e) => (value = e.value)} readOnly />
	</section>
	<section class="space-y-8">
		<h2 class="h2">RTL</h2>
		<Slider {value} onValueChange={(e) => (value = e.value)} dir="rtl" />
		<Slider value={valueMulti} onValueChange={(e) => (valueMulti = e.value)} dir="rtl" />
	</section>
</div>
