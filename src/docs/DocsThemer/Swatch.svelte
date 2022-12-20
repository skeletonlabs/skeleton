<script lang="ts">
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	/** Pass the color key name. */
	export let color = 'primary';

	const colorList: Record<string, any> = {
		primary: {
			50: 'bg-primary-50',
			100: 'bg-primary-100',
			200: 'bg-primary-200',
			300: 'bg-primary-300',
			400: 'bg-primary-400',
			500: 'bg-primary-500 text-on-primary-token fill-on-primary-token',
			600: 'bg-primary-600',
			700: 'bg-primary-700',
			800: 'bg-primary-800',
			900: 'bg-primary-900'
		},
		secondary: {
			50: 'bg-secondary-50',
			100: 'bg-secondary-100',
			200: 'bg-secondary-200',
			300: 'bg-secondary-300',
			400: 'bg-secondary-400',
			500: 'bg-secondary-500 text-on-secondary-token fill-on-secondary-token',
			600: 'bg-secondary-600',
			700: 'bg-secondary-700',
			800: 'bg-secondary-800',
			900: 'bg-secondary-900'
		},
		tertiary: {
			50: 'bg-tertiary-50',
			100: 'bg-tertiary-100',
			200: 'bg-tertiary-200',
			300: 'bg-tertiary-300',
			400: 'bg-tertiary-400',
			500: 'bg-tertiary-500 text-on-tertiary-token fill-on-tertiary-token',
			600: 'bg-tertiary-600',
			700: 'bg-tertiary-700',
			800: 'bg-tertiary-800',
			900: 'bg-tertiary-900'
		},
		success: {
			50: 'bg-success-50',
			100: 'bg-success-100',
			200: 'bg-success-200',
			300: 'bg-success-300',
			400: 'bg-success-400',
			500: 'bg-success-500 text-on-success-token fill-on-success-token',
			600: 'bg-success-600',
			700: 'bg-success-700',
			800: 'bg-success-800',
			900: 'bg-success-900'
		},
		warning: {
			50: 'bg-warning-50',
			100: 'bg-warning-100',
			200: 'bg-warning-200',
			300: 'bg-warning-300',
			400: 'bg-warning-400',
			500: 'bg-warning-500 text-on-warning-token fill-on-warning-token',
			600: 'bg-warning-600',
			700: 'bg-warning-700',
			800: 'bg-warning-800',
			900: 'bg-warning-900'
		},
		error: {
			50: 'bg-error-50',
			100: 'bg-error-100',
			200: 'bg-error-200',
			300: 'bg-error-300',
			400: 'bg-error-400',
			500: 'bg-error-500 text-on-error-token fill-on-primary-token',
			600: 'bg-error-600',
			700: 'bg-error-700',
			800: 'bg-error-800',
			900: 'bg-error-900'
		},
		surface: {
			50: 'bg-surface-50',
			100: 'bg-surface-100',
			200: 'bg-surface-200',
			300: 'bg-surface-300',
			400: 'bg-surface-400',
			500: 'bg-surface-500 text-on-surface-token fill-on-surface-token',
			600: 'bg-surface-600',
			700: 'bg-surface-700',
			800: 'bg-surface-800',
			900: 'bg-surface-900'
		}
	};
	const palette: Record<string, string> = colorList[color] || colorList['primary'];
</script>

<div class="grid grid-cols-11">
	{#each Object.entries(palette) as [shade, classes]}
		<div class="grid grid-rows-[1fr_40px] text-center" class:col-span-2={shade === '500'}>
			<!-- Label -->
			<div class="text-surface-700 dark:text-surface-300 text-sm">
				{shade}
			</div>
			<!-- Swatch -->
			<div class="flex justify-center items-center {classes}">
				{#if shade === '500'}
					<div class="grid grid-cols-[auto_1fr] gap-1.5 place-items-center">
						<SvgIcon name="skull" width="w-4" height="h-4" />
						<span class="hidden md:inline-block">Text</span>
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
