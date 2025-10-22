<script>
	import { getRelativeDocsUrl } from '@/modules/framework';
	import { ChevronRight } from '@lucide/svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';
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
			<a href={getRelativeDocsUrl(Astro, 'tailwind/buttons')} target="_blank" class="btn preset-filled scale-150 shadow-xl">
				<span>Button</span>
				<ChevronRight class="size-4" />
			</a>
		</div>
	</div>
	<div class="space-y-10">
		<div class="text-center space-y-2">
			<h2 class="h2">Framework Components</h2>
			<p class="text-balance opacity-60">
				Interactive components for supported frameworks. Handle state and logic for user interaction and form elements.
			</p>
		</div>
		<div class="card bg-noise preset-filled-secondary-500 aspect-video shadow-xl flex justify-center items-center">
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
