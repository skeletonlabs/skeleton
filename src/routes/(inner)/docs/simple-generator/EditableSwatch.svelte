<script lang="ts">
	import { swatchColorClasses } from '$docs/layouts/DocsThemer/settings';
	import type { ColorSettings } from '$docs/layouts/DocsThemer/types';
	import type { SemanticNames } from '$lib/types/tailwind';

	/** Pass the color */
	export let color: ColorSettings;
</script>

<div class="grid grid-cols-11 gap-0">
	{#each Object.entries(swatchColorClasses[color.key]) as [shade, shadeClasses]}
		<div class="grid grid-rows-[1fr_40px] text-center" class:col-span-2={shade === '500'}>
			<!-- Label -->
			<div class="text-surface-700 dark:text-surface-300 text-sm">
				{shade}
			</div>
			<!-- Swatch -->
			<div class="bg-black/5 dark:bg-white/5">
				<div class="h-full flex justify-center items-center {shadeClasses}">
					{#if shade === '500'}
						<div class="grid grid-cols-[auto_1fr] gap-1.5 place-items-center">
							<i class="fa-solid fa-skull" />
							<span class="hidden xl:inline-block">Text</span>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/each}
</div>
