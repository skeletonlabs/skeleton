<script lang="ts">
	// Themes
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { importThemeV2 } from '$lib/utils/importer/import-theme-v2';
	// Utils
	import { importThemeV3 } from '$lib/utils/importer/import-theme-v3';
	import { FileUpIcon } from '@lucide/svelte';
	import { themes } from '@skeletonlabs/skeleton-common';
	import { FileUpload, type FileUploadRootProps } from '@skeletonlabs/skeleton-svelte';

	const defaultThemeName = 'cerberus';

	function resetToDefaults() {
		const defaultTheme = themes.find((t) => t.name === defaultThemeName)!;
		importThemeV3(defaultTheme.css, defaultThemeName);
	}

	function onSelectTemplate(fileCss: string, fileName: string) {
		// Reset to default theme
		if (fileName !== defaultThemeName) {
			resetToDefaults();
		}
		// Run template import
		importThemeV3(fileCss, fileName);
		// Redirect to Generator page
		goto(resolve('/themes/create'));
	}

	const onFileChange: FileUploadRootProps['onFileChange'] = async (event) => {
		if (event.acceptedFiles.length <= 0) return;
		// Reset to default theme
		resetToDefaults();
		// Gather Theme Data
		const fileName = event.acceptedFiles[0].name;
		const file = event.acceptedFiles[0];
		const fileText = await file.text();
		const isCssFormat = fileName.includes('.css');

		// Run Importer
		if (isCssFormat) {
			importThemeV3(fileText, fileName);
		} else {
			importThemeV2(fileText, fileName);
		}

		// ******** DEBUG ONLY ********
		// importThemeV3Rc1(fileText, fileName);
		// ************ / *************

		// Redirect to Generator page
		goto('/themes/create');
	};
</script>

<div class="space-y-10">
	<FileUpload class="w-full" name="file" accept=".css, .ts, .js" {onFileChange}>
		<FileUpload.Dropzone class="py-32">
			<FileUpIcon class="size-16" />
			<span>Select file or drag here.</span>
			<span class="text-sm opacity-50">Accepts .css, .ts, or .js file formats.</span>
			<FileUpload.HiddenInput />
		</FileUpload.Dropzone>
	</FileUpload>
	<!-- Text -->
	<div class="flex justify-center gap-4">
		<span class="opacity-10">&mdash;</span>
		<span class="opacity-60">or select a template</span>
		<span class="opacity-10">&mdash;</span>
	</div>
	<!-- Templates -->
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
		{#each themes as theme (theme.name)}
			<button
				data-theme={theme.name}
				class="w-full bg-surface-50-950 p-4 preset-outlined-surface-200-800 hover:preset-outlined-surface-800-200 rounded-md grid grid-cols-[auto_1fr_auto] items-center gap-4"
				onclick={() => onSelectTemplate(theme.css, theme.name)}
			>
				<span>{theme.emoji}</span>
				<h3 class="h6 capitalize text-left">{theme.name}</h3>
				<div class="flex justify-center items-center -space-x-1">
					<div class="aspect-square w-5 bg-primary-500 border-[1px] border-black/10 rounded-full"></div>
					<div class="aspect-square w-5 bg-secondary-500 border-[1px] border-black/10 rounded-full"></div>
					<div class="aspect-square w-5 bg-tertiary-500 border-[1px] border-black/10 rounded-full"></div>
					<div class="aspect-square w-5 bg-success-500 border-[1px] border-black/10 rounded-full"></div>
					<div class="aspect-square w-5 bg-warning-500 border-[1px] border-black/10 rounded-full"></div>
					<div class="aspect-square w-5 bg-error-500 border-[1px] border-black/10 rounded-full"></div>
					<div class="aspect-square w-5 bg-surface-500 border-[1px] border-black/10 rounded-full"></div>
				</div>
			</button>
		{/each}
	</div>
</div>
