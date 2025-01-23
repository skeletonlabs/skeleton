<script lang="ts">
	import IconChevron from 'lucide-svelte/icons/chevron-right';
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	let state = $state(true);
</script>

<div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
	<div class="space-y-10">
		<div class="text-center space-y-2">
			<h2 class="h2">Tailwind Components</h2>
			<p class="text-balance opacity-60">
				Common visual interfaces, such as cards, buttons, and badges. Utilize native HTML elements and Tailwind utility classes.
			</p>
		</div>
		<div class="card bg-noise preset-filled-secondary-500 aspect-video shadow-xl flex justify-center items-center">
			<a href="/" class="btn preset-filled scale-150 shadow-xl">
				<span>Button</span>
				<IconChevron className="size-4" />
			</a>
		</div>
	</div>
	<div class="space-y-10">
		<div class="text-center space-y-2">
			<h2 class="h2">Functional Components</h2>
			<p class="text-balance opacity-60">
				Interactive components for supported frameworks. Handle state and logic for user interaction and form elements.
			</p>
		</div>
		<div class="card bg-noise preset-filled-secondary-500 aspect-video shadow-xl flex justify-center items-center">
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
