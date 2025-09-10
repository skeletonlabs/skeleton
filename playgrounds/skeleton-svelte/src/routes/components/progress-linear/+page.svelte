<script lang="ts">
	import { ProgressLinear } from '@skeletonlabs/skeleton-svelte';

	let value = $state(25);
</script>

<div class="space-y-10">
	<header>
		<h2 class="h2">Progress Linear</h2>
	</header>
	<section class="space-y-4">
		<ProgressLinear {value}>
			<ProgressLinear.Track>
				<ProgressLinear.Range />
			</ProgressLinear.Track>
		</ProgressLinear>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Colors</h2>
		<ProgressLinear {value}>
			<ProgressLinear.Track class="bg-primary-50-950">
				<ProgressLinear.Range class="bg-primary-500" />
			</ProgressLinear.Track>
		</ProgressLinear>
		<ProgressLinear {value}>
			<ProgressLinear.Track class="bg-secondary-50-950">
				<ProgressLinear.Range class="bg-secondary-500" />
			</ProgressLinear.Track>
		</ProgressLinear>
		<ProgressLinear {value}>
			<ProgressLinear.Track class="bg-tertiary-50-950">
				<ProgressLinear.Range class="bg-tertiary-500" />
			</ProgressLinear.Track>
		</ProgressLinear>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Height</h2>
		<ProgressLinear {value}>
			<ProgressLinear.Track>
				<ProgressLinear.Range />
			</ProgressLinear.Track>
		</ProgressLinear>
		<ProgressLinear {value}>
			<ProgressLinear.Track class="h-4 rounded-full">
				<ProgressLinear.Range class="rounded-full" />
			</ProgressLinear.Track>
		</ProgressLinear>
		<ProgressLinear {value}>
			<ProgressLinear.Track class="h-8 rounded-full">
				<ProgressLinear.Range class="rounded-full" />
			</ProgressLinear.Track>
		</ProgressLinear>
	</section>
	<section class="space-y-4">
		<h3 class="h3">Orientation</h3>
		<div class="flex flex-row items-start gap-4">
			<ProgressLinear orientation="vertical" {value}>
				<ProgressLinear.Label>{value}%</ProgressLinear.Label>
				<ProgressLinear.Track>
					<ProgressLinear.Range />
				</ProgressLinear.Track>
			</ProgressLinear>
			<ProgressLinear orientation="vertical" value={null}>
				<ProgressLinear.Label>null</ProgressLinear.Label>
				<ProgressLinear.Track>
					<ProgressLinear.Range />
				</ProgressLinear.Track>
			</ProgressLinear>
		</div>
	</section>
	<section class="space-y-4">
		<h3 class="h3">Labeled</h3>
		<ProgressLinear {value}>
			<ProgressLinear.Label>{value}%</ProgressLinear.Label>
			<ProgressLinear.Track>
				<ProgressLinear.Range />
			</ProgressLinear.Track>
		</ProgressLinear>
	</section>
	<section class="space-y-4">
		<h3 class="h3">Indeterminate</h3>
		<ProgressLinear value={null}>
			<ProgressLinear.Track>
				<ProgressLinear.Range />
			</ProgressLinear.Track>
		</ProgressLinear>
	</section>
</div>
