<script lang="ts">
	import { ChevronRightIcon } from '@lucide/svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	let checked = $state(false);
</script>

<div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
	<div class="space-y-10">
		<div class="text-center space-y-2">
			<h2 class="h2">Tailwind Components</h2>
			<p class="text-balance opacity-60">
				Common visual interfaces, such as cards, buttons, and tables. Using semantic HTML elements and Tailwind utility classes.
			</p>
		</div>
		<div class="card bg-noise preset-filled-secondary-500 aspect-video shadow-xl flex justify-center items-center">
			<a href="/docs/tailwind/buttons" target="_blank" class="btn preset-filled scale-150 shadow-xl">
				<span>Button</span>
				<ChevronRightIcon className="size-4" />
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
			<Switch {checked} onCheckedChange={(e) => (checked = e.checked)} class="scale-[2.0] shadow-xl">
				<Switch.Control class="data-[state=checked]:bg-surface-100">
					<Switch.Thumb />
				</Switch.Control>
				<Switch.HiddenInput />
			</Switch>
		</div>
	</div>
</div>
