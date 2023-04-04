<script lang="ts">
	import type { SemanticNames } from '$lib/types/tailwind';
	import { clipboard, toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import chroma from 'chroma-js';
	import { generateA11yHex, handleStringColor } from './colors';
	import { swatchColorClasses } from './settings';
	/** Pass the color key name. */
	export let color: SemanticNames = 'primary';
	export let hex = getHex(color, '500');
	$: hex = getHex(color, '500');

	/**
	 * Get the hex value of a color from the CSS variable.
	 * @param color - The color key name.
	 * @param tailwindNumber - The tailwind number.
	 * @param hex - This is a weird but necessary evil; it's a dependency that forces the re-render when the hex (i.e. the master color) changes.
	 */
	function getHex(color: SemanticNames, tailwindNumber: string, hex?: string) {
		if (typeof window === 'undefined') return;
		console.log(color, tailwindNumber);
		// we get the color from the CSS variable to ensure we're operating from a single source of truth
		const cssVar = window.getComputedStyle(document.documentElement).getPropertyValue(`--color-${color}-${tailwindNumber}`);
		return chroma(handleStringColor(cssVar)).hex();
	}

	function onClickHandler(text?: string): void {
		if (!text) return;
		navigator.clipboard.writeText(text).then(
			// Success
			() => {
				const t: ToastSettings = { message: `Copied ${text} to the clipboard.` };
				toastStore.trigger(t);
			},
			// Error
			() => {
				const t: ToastSettings = { message: 'Sorry, copy to clipboard not supported.' };
				toastStore.trigger(t);
			}
		);
	}

	function createHoverAccessibleText(shade: string) {
		const hexCode = getHex(color, shade, hex);
		if (!hexCode) return 'hover:text-white/100';
		const blackOrWhite = generateA11yHex(hexCode);
		if (blackOrWhite === '#000000') return 'hover:text-black/100';
		return 'hover:text-white/100';
	}
</script>

<div class="w-full grid grid-cols-11 gap-0 hover:grid-cols-[repeat(13,_minmax(0,_1fr))] transition-all duration-1000">
	{#each Object.entries(swatchColorClasses[color]) as [shade, shadeClasses]}
		{@const accessibleText = createHoverAccessibleText(shade)}
		<div
			class="grid grid-rows-[1fr_40px] hover:col-span-3 transition-all duration-1000 text-center"
			class:col-span-2={shade === '500'}
			class:hover:col-span-4={shade === '500'}
		>
			<!-- Label -->
			<div class="text-surface-700 dark:text-surface-300 text-sm">
				{shade}
			</div>
			<!-- Swatch -->
			<div class="bg-black/5 dark:bg-white/5">
				<div class="h-full flex justify-center items-center {shadeClasses} ">
					{#if shade === '500'}
						<button
							on:click={() => onClickHandler(getHex(color, shade, hex))}
							on:keypress={() => onClickHandler(getHex(color, shade, hex))}
							class="grid grid-cols-[auto_1fr] hover:col-span-4 gap-1.5 place-items-center"
						>
							<i class="fa-solid fa-skull" />
							<span class="hidden xl:inline-block">{getHex(color, shade, hex)}</span>
						</button>
					{:else}
						<button
							on:click={() => onClickHandler(getHex(color, shade, hex))}
							on:keypress={() => onClickHandler(getHex(color, shade, hex))}
							use:clipboard={getHex(color, shade, hex)}
							class="hover:block w-full h-full place-items-center text-black/0 select-none hover:select-text {accessibleText}"
						>
							{getHex(color, shade, hex)}
						</button>
					{/if}
				</div>
			</div>
		</div>
	{/each}
</div>
