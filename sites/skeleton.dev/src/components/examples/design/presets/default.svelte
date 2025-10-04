<script lang="ts">
	import { BookmarkIcon } from '@lucide/svelte';

	const diagramCircle = 'preset-tonal w-8 aspect-square flex justify-center items-center rounded-full';
</script>

<div class="grid grid-cols-2 md:grid-cols-4 gap-10">
	<!-- 1. Filled -->
	<div class="flex flex-col items-center gap-4">
		<button type="button" class="btn preset-filled-primary-500">Filled</button>
		<div class={diagramCircle}>1</div>
	</div>
	<!-- 2. Tonal -->
	<div class="flex flex-col items-center gap-4">
		<button type="button" class="btn preset-tonal-primary">Tonal</button>
		<div class={diagramCircle}>2</div>
	</div>
	<!-- 3. Outlined -->
	<div class="flex flex-col items-center gap-4">
		<button type="button" class="btn preset-outlined-primary-500">Outlined</button>
		<div class={diagramCircle}>3</div>
	</div>
	<!-- 4. Glass -->
	<div class="flex flex-col items-center gap-4">
		<button type="button" class="btn preset-glass-primary">Glass</button>
		<div class={diagramCircle}>4</div>
	</div>
	<!-- 5. Elevated -->
	<div class="flex flex-col items-center gap-4">
		<button type="button" class="btn preset-filled-surface-100-900 shadow-xl">Elevated</button>
		<div class={diagramCircle}>5</div>
	</div>
	<!-- 6. Ghost -->
	<div class="flex flex-col items-center gap-4">
		<button type="button" class="btn hover:preset-tonal">Ghost</button>
		<div class={diagramCircle}>6</div>
	</div>
	<!-- 7. Ghost (Icon) -->
	<div class="flex flex-col items-center gap-4">
		<button type="button" class="btn hover:preset-tonal-primary">
			<BookmarkIcon className="size-6" />
		</button>
		<div class={diagramCircle}>7</div>
	</div>
	<!-- 8. Gradient -->
	<div class="flex flex-col items-center gap-4">
		<button type="button" class="btn preset-gradient">Gradient</button>
		<div class={diagramCircle}>8</div>``
	</div>
</div>

<style>
	/* Create a custom preset in your global stylesheet */
	.preset-gradient {
		background-image: linear-gradient(-45deg, var(--color-primary-300), var(--color-primary-700));
		color: var(--color-primary-contrast-500);
	}
	.preset-glass-primary {
		background: color-mix(in oklab, var(--color-primary-500) 40%, transparent);
		box-shadow: 0 0px 30px color-mix(in oklab, var(--color-primary-500) 50%, transparent) inset;
		backdrop-filter: blur(16px);
	}
</style>
