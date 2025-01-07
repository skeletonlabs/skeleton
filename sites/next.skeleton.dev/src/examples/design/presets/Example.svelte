<script lang="ts">
	import IconBookmark from 'lucide-svelte/icons/bookmark';
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
		<button type="button" class="btn preset-outlined-primary-500">Tonal</button>
		<div class={diagramCircle}>3</div>
	</div>
	<!-- 4. Elevated -->
	<div class="flex flex-col items-center gap-4">
		<button type="button" class="btn preset-filled-surface-100-900 shadow-xl">Elevated</button>
		<div class={diagramCircle}>4</div>
	</div>
	<!-- 5. Ghost -->
	<div class="flex flex-col items-center gap-4">
		<button type="button" class="btn hover:preset-tonal">Ghost</button>
		<div class={diagramCircle}>5</div>
	</div>
	<!-- 6. Ghost (Icon) -->
	<div class="flex flex-col items-center gap-4">
		<button type="button" class="btn hover:preset-tonal-primary">
			<IconBookmark className="size-6" />
		</button>
		<div class={diagramCircle}>6</div>
	</div>
	<!-- 7. Gradient -->
	<div class="flex flex-col items-center gap-4">
		<button type="button" class="btn preset-gradient">Gradient</button>
		<div class={diagramCircle}>7</div>
	</div>
</div>

<style lang="postcss">
	/* Create a custom preset in your global stylesheet */
	.preset-gradient {
		@apply bg-gradient-to-br from-secondary-500 to-tertiary-500 text-white;
	}
</style>
