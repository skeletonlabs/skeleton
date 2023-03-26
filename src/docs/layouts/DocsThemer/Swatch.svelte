<script lang="ts">
	import type { SemanticNames, tailwindNumbers, TailwindNumbers } from '$lib/types/tailwind';
	import { clipboard, toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { handleStringColor } from './colors';
	import { swatchColorClasses } from './settings';

	/** Pass the color key name. */
	export let color: SemanticNames = 'primary';
	function getHex(semanticName: SemanticNames, tailwindNumber: string) {
		if (typeof window === 'undefined') return;

		return handleStringColor(
			window?.getComputedStyle(document.documentElement).getPropertyValue(`--color-${semanticName}-${tailwindNumber}`).trim()
		);
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
</script>

<div class="w-full grid grid-cols-11 gap-0 hover:grid-cols-[repeat(13,_minmax(0,_1fr))] transition-all duration-1000">
	{#each Object.entries(swatchColorClasses[color]) as [shade, shadeClasses]}
		{@const accessibleText = parseInt(shade) < 500 ? 'hover:text-black/100' : 'hover:text-white/100'}
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
						<div class="grid grid-cols-[auto_1fr] hover:col-span-4 gap-1.5 place-items-center">
							<i class="fa-solid fa-skull" />
							<span class="hidden xl:inline-block">Text</span>
						</div>
					{:else}
						<button
							on:click={() => onClickHandler(getHex(color, shade))}
							on:keypress={() => onClickHandler(getHex(color, shade))}
							use:clipboard={getHex(color, shade)}
							class="hover:block w-full h-full place-items-center text-black/0 select-none hover:select-text {accessibleText}"
						>
							{getHex(color, shade)}
						</button>
					{/if}
				</div>
			</div>
		</div>
	{/each}
</div>
