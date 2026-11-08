<script lang="ts">
	import ChevronRight from "@lucide/svelte/icons/chevron-right";
	import { Switch } from "@skeletonlabs/skeleton-svelte";
</script>

<div class="grid grid-cols-1 gap-10 xl:grid-cols-2">
	<div class="space-y-10">
		<div class="space-y-2 text-center">
			<h2 class="h2">Tailwind Components</h2>
			<p class="text-balance opacity-60">
				Common visual interfaces, such as cards, buttons, and tables. Using semantic HTML
				elements and Tailwind utility classes.
			</p>
		</div>
		<div
			class="card bg-noise preset-filled-secondary-500 flex aspect-video items-center justify-center shadow-xl"
		>
			<button class="btn preset-filled scale-150 shadow-xl">
				<span>Button</span>
				<ChevronRight class="size-4" />
			</button>
		</div>
	</div>
	<div class="space-y-10">
		<div class="space-y-2 text-center">
			<h2 class="h2">Framework Components</h2>
			<p class="text-balance opacity-60">
				Interactive components for supported frameworks. Handle state and logic for user
				interaction and form elements.
			</p>
		</div>
		<div
			class="card bg-noise preset-filled-secondary-500 flex aspect-video items-center justify-center shadow-xl"
		>
			<Switch class="scale-[2.0] shadow-xl">
				<Switch.Label class="sr-only">Toggle</Switch.Label>
				<Switch.Control>
					<Switch.Thumb />
				</Switch.Control>
				<Switch.HiddenInput />
			</Switch>
		</div>
	</div>
</div>
