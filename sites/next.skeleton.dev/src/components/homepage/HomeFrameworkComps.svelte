<script lang="ts">
	import IconChevron from 'lucide-svelte/icons/chevron-right';
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	let state = $state(true);
</script>

<div class="grid grid-cols-1 gap-10 xl:grid-cols-2">
	<div class="space-y-10">
		<div class="space-y-2 text-center">
			<h2 class="h2">Tailwind Components</h2>
			<p class="text-balance opacity-60">
				Common visual interfaces, such as cards, buttons, and badges. Utilize native HTML elements and Tailwind utility classes.
			</p>
		</div>
		<div class="card bg-noise preset-filled-secondary-500 flex aspect-video items-center justify-center shadow-xl">
			<a href="/docs/tailwind/buttons" target="_blank" class="btn preset-filled scale-150 shadow-xl">
				<span>Button</span>
				<IconChevron className="size-4" />
			</a>
		</div>
	</div>
	<div class="space-y-10">
		<div class="space-y-2 text-center">
			<h2 class="h2">Functional Components</h2>
			<p class="text-balance opacity-60">
				Interactive components for supported frameworks. Handle state and logic for user interaction and form elements.
			</p>
		</div>
		<div class="card bg-noise preset-filled-secondary-500 flex aspect-video items-center justify-center shadow-xl">
			<Switch
				name="example"
				bind:checked={state}
				controlActive="bg-surface-200"
				controlInactive="bg-surface-800"
				classes="scale-[2.0] shadow-xl"
			/>
		</div>
	</div>
</div>
