<script lang="ts">
	import { tailwindNumbers, type HexRgb, type TailwindNumbers } from "$lib/tailwind/colors";
	/**
	 * A record that contains the Tailwind color numbers and the corresponding hex / RGB values.
	 * @type {Record<TailwindNumbers, HexRgb>}
	 */
	export let palette: Record<TailwindNumbers, HexRgb>;
</script>

<div class="swatches grid grid-cols-10 w-full ring-inset">
	{#each Object.values(palette) as shade, i}
		<div class="swatch flex flex-col-reverse xl:flex-col">
			<!-- Label -->
			<div class="swatch-label text-xs mt-2 xl:mb-2 text-center" class:underline={i === 5}>{tailwindNumbers[i]}</div>
			<!-- Color -->
			<div class="swatch-color h-4 md:h-[40px] ring-[1px] ring-black/5 dark:ring-white/5 transition-colors duration-200" style:background={shade.hex ? shade.hex : shade.rgb} />
		</div>
	{/each}
</div>
