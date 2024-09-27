<script lang="ts">
	import { goto } from '$app/navigation';
	// Themes
	import * as themes from '@skeletonlabs/skeleton/themes';
	// Utils
	import { importThemeTemplate } from '$lib/utils/importer/import-template';
	import { importThemeFile } from '$lib/utils/importer/import-file';
	// Componets (skeleton)
	import { FileUpload } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconUpload from 'lucide-svelte/icons/file-up';
	import IconFile from 'lucide-svelte/icons/paperclip';
	import IconRemove from 'lucide-svelte/icons/x-circle';

	function onSelectTemplate(name: string) {
		// Run template import
		// @ts-expect-error type error
		importThemeTemplate(name, themes[name].properties);
		// Redirect to Genreator path
		goto('/themes/create');
	}

	async function onFileUpload(event: any) {
		if (event.acceptedFiles.length <= 0) return;
		// Reset to Cerberus by default
		importThemeTemplate('cerberus', themes['cerberus'].properties);
		// Run file import
		importThemeFile(event.acceptedFiles[0]);
		// Redirect to Genreator path
		goto('/themes/create');
	}
</script>

<div class="space-y-10">
	<!-- Upload -->
	<FileUpload
		name="file"
		accept=".ts, .js"
		maxFiles={1}
		onFileChange={onFileUpload}
		label="Drag and Drop Theme"
		subtext="Accepts .ts or .js file formats."
		interfacePadding="py-32"
		classes="w-full"
	>
		{#snippet iconInterface()}<IconUpload class="size-16" />{/snippet}
		{#snippet iconFile()}<IconFile class="size-4" />{/snippet}
		{#snippet iconFileRemove()}<IconRemove class="size-4" />{/snippet}
	</FileUpload>
	<!-- Text -->
	<div class="flex justify-center gap-4">
		<span class="opacity-10">&mdash;</span>
		<span class="opacity-60">or select a template</span>
		<span class="opacity-10">&mdash;</span>
	</div>
	<!-- Templates -->
	<div class="grid grid-cols-4 gap-5">
		{#each Object.keys(themes) as theme}
			<button
				data-theme={theme}
				class="w-full bg-surface-50-950 p-10 preset-outlined-surface-100-900 hover:preset-outlined-surface-800-200 rounded-md space-y-4"
				onclick={() => onSelectTemplate(theme)}
			>
				<h3 class="h4 capitalize">{theme}</h3>
				<div class="flex justify-center items-center -space-x-2">
					<div class="aspect-square w-8 bg-primary-500 border-[1px] border-black/10 rounded-full"></div>
					<div class="aspect-square w-8 bg-secondary-500 border-[1px] border-black/10 rounded-full"></div>
					<div class="aspect-square w-8 bg-tertiary-500 border-[1px] border-black/10 rounded-full"></div>
					<div class="aspect-square w-8 bg-success-500 border-[1px] border-black/10 rounded-full"></div>
					<div class="aspect-square w-8 bg-warning-500 border-[1px] border-black/10 rounded-full"></div>
					<div class="aspect-square w-8 bg-error-500 border-[1px] border-black/10 rounded-full"></div>
					<div class="aspect-square w-8 bg-surface-500 border-[1px] border-black/10 rounded-full"></div>
				</div>
			</button>
		{/each}
	</div>
</div>
