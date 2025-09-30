<script lang="ts">
	import { Progress } from '@skeletonlabs/skeleton-svelte';

	let value = $state(25);
</script>

<div class="space-y-10">
	<header>
		<h2 class="h2">Progress Linear</h2>
	</header>
	<section class="space-y-4">
		<Progress {value}>
			<Progress.Track>
				<Progress.Range />
			</Progress.Track>
		</Progress>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Colors</h2>
		<Progress {value}>
			<Progress.Track class="bg-primary-50-950">
				<Progress.Range class="bg-primary-500" />
			</Progress.Track>
		</Progress>
		<Progress {value}>
			<Progress.Track class="bg-secondary-50-950">
				<Progress.Range class="bg-secondary-500" />
			</Progress.Track>
		</Progress>
		<Progress {value}>
			<Progress.Track class="bg-tertiary-50-950">
				<Progress.Range class="bg-tertiary-500" />
			</Progress.Track>
		</Progress>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Height</h2>
		<Progress {value}>
			<Progress.Track>
				<Progress.Range />
			</Progress.Track>
		</Progress>
		<Progress {value}>
			<Progress.Track class="h-4 rounded-full">
				<Progress.Range class="rounded-full" />
			</Progress.Track>
		</Progress>
		<Progress {value}>
			<Progress.Track class="h-8 rounded-full">
				<Progress.Range class="rounded-full" />
			</Progress.Track>
		</Progress>
	</section>
	<section class="space-y-4">
		<h3 class="h3">Orientation</h3>
		<div class="flex flex-row items-start gap-4">
			<Progress orientation="vertical" {value}>
				<Progress.Label>
					<Progress.ValueText />
				</Progress.Label>
				<Progress.Track>
					<Progress.Range />
				</Progress.Track>
			</Progress>
			<Progress orientation="vertical" value={null}>
				<Progress.Label>null</Progress.Label>
				<Progress.Track>
					<Progress.Range />
				</Progress.Track>
			</Progress>
		</div>
	</section>
	<section class="space-y-4">
		<h3 class="h3">Labeled</h3>
		<Progress {value}>
			<Progress.Label>
				<Progress.ValueText />
			</Progress.Label>
			<Progress.Track>
				<Progress.Range />
			</Progress.Track>
		</Progress>
	</section>
	<section class="space-y-4">
		<h3 class="h3">Indeterminate</h3>
		<Progress value={null}>
			<Progress.Track>
				<Progress.Range />
			</Progress.Track>
		</Progress>
	</section>
</div>
