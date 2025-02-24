<script lang="ts">
	import { Progress } from '@skeletonlabs/skeleton-svelte';
	let value = $state(60);
	let max = $state(100);
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Progress</h1>
	</header>
	<section class="grid grid-cols-2 gap-4">
		<label class="label">
			<span class="label-text">Value</span>
			<input class="input" type="number" bind:value />
		</label>
		<label class="label">
			<span class="label-text">Max</span>
			<input class="input" type="number" bind:value={max} />
		</label>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Preview</h2>
		<Progress {value} {max} />
	</section>
	<section class="space-y-4">
		<h2 class="h2">Height</h2>
		<p>h-2 (default)</p>
		<Progress {value} {max} />
		<p>h-4</p>
		<Progress {value} {max} height="h-4" />
		<p>h-8</p>
		<Progress {value} {max} height="h-8" />
	</section>
	<section class="space-y-4">
		<h2 class="h2">Rounded</h2>
		<p>rounded (default)</p>
		<Progress {value} {max} />
		<p>rounded-sm</p>
		<Progress {value} {max} rounded="rounded-sm" meterRounded="rounded-sm" />
		<p>rounded-none</p>
		<Progress {value} {max} rounded="rounded-none" meterRounded="rounded-none" />
	</section>
	<section class="space-y-4">
		<h2 class="h2">Colors</h2>
		<p>bg-primary-500 (default)</p>
		<Progress {value} {max} />
		<p>bg-secondary-500</p>
		<Progress {value} {max} meterBg="bg-secondary-500" />
		<p>bg-tertiary-500</p>
		<Progress {value} {max} meterBg="bg-tertiary-500" />
	</section>
	<section class="space-y-4">
		<h2 class="h2">Indeterminate</h2>
		<Progress value={null} {max}>
			<span>Deafult Animation</span>
		</Progress>
		<!-- NOTE: `custom-indeterminate` defined in app.css -->
		<Progress value={null} {max} meterAnimate="custom-indeterminate">
			<span>Custom Animation</span>
		</Progress>
	</section>
	<section class="space-y-4">
		<h2 class="h2">RTL</h2>
		<div dir="rtl" class="space-y-4">
			<Progress {value} {max} />
			<Progress {value} {max} meterBg="bg-secondary-500" />
			<Progress {value} {max} meterBg="bg-tertiary-500" />
		</div>
	</section>
</div>

<style>
	:global(.custom-indeterminate) {
		animation: custom-indeterminate 2s linear infinite;
	}
	@keyframes custom-indeterminate {
		from {
			transform: translateX(200%);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
