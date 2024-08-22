<script lang="ts">
	import Slider from '$lib/components/Slider/Slider.svelte';

	let example = $state([40]);
	let exampleMulti = $state([40, 60]);
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Switch</h1>
	</header>
	<section class="space-y-4">
		<pre class="pre">{example}</pre>
		<Slider name="example" bind:value={example} />
	</section>
	<section class="space-y-4">
		<h2 class="h2">Multiple</h2>
		<pre class="pre">{exampleMulti.join(' - ')}</pre>
		<Slider bind:value={exampleMulti} />
	</section>
	<section class="space-y-4">
		<h2 class="h2">Height</h2>
		<Slider name="example" bind:value={example} height="h-1" />
		<Slider name="example" bind:value={example} height="h-8" />
	</section>
	<section class="space-y-8">
		<h2 class="h2">Colors</h2>
		<Slider bind:value={example} meterBg="bg-primary-500" thumbRingColor="ring-primary-500" />
		<Slider bind:value={example} meterBg="bg-secondary-500" thumbRingColor="ring-secondary-500" />
		<Slider bind:value={example} meterBg="bg-tertiary-500" thumbRingColor="ring-tertiary-500" />
	</section>
	<section class="space-y-4">
		<h2 class="h2">State</h2>
		<h3 class="h3">Disabled</h3>
		<Slider name="example" bind:value={example} disabled />
		<h3 class="h3">Read-Only</h3>
		<Slider name="example" bind:value={example} readOnly />
	</section>
	<section class="space-y-8">
		<h2 class="h2">RTL</h2>
		<Slider bind:value={example} dir="rtl" />
		<Slider bind:value={exampleMulti} dir="rtl" />
	</section>
</div>
