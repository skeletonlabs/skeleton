<script lang="ts">
	import { goto } from '$app/navigation';
	// Themes
	import * as themes from '@skeletonlabs/skeleton/themes';
	// Utils
	import { importThemeProperties } from '$lib/utils/importer/import-template';
	// Componets(skeleton)
	import { FileUpload } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconUpload from 'lucide-svelte/icons/file-up';
	import IconFile from 'lucide-svelte/icons/paperclip';
	import IconRemove from 'lucide-svelte/icons/x-circle';

	function onSelectTemplate(name: string) {
		// @ts-expect-error type error
		importThemeProperties(name, themes[name].properties);
		goto('/themes/create');
	}
</script>

<div class="space-y-10">
	<!-- Back Button -->
	<a href="/themes/create" class="btn hover:preset-tonal">
		<span>&larr;</span>
		<span>Return to Generator</span>
	</a>
	<!-- File Upload -->
	<FileUpload
		disabled
		name="example"
		accept="image/*"
		maxFiles={2}
		label="Drag and Drop Theme File"
		subtext="Accepts .ts or .js formats."
		onFileChange={console.log}
		onFileReject={console.error}
		interfacePadding="py-32"
		classes="w-full"
	>
		{#snippet iconInterface()}<IconUpload class="size-8" />{/snippet}
		{#snippet iconFile()}<IconFile class="size-4" />{/snippet}
		{#snippet iconFileRemove()}<IconRemove class="size-4" />{/snippet}
	</FileUpload>
	<!-- Or Text -->
	<div class="flex justify-center gap-4 type-scale-6 opacity-60">
		<span>&mdash;</span>
		<p>or select a template</p>
		<span>&mdash;</span>
	</div>
	<!-- Select Template -->
	<div class="grid grid-cols-4 gap-5">
		{#each Object.keys(themes) as theme}
			<button
				data-theme={theme}
				class="w-full bg-surface-100-900 p-10 hover:preset-outlined-surface-800-200 rounded-md space-y-4"
				onclick={() => onSelectTemplate(theme)}
			>
				<h3 class="h4 capitalize">{theme}</h3>
				<div class="flex justify-center items-center -space-x-2">
					<div class="aspect-square w-8 bg-primary-500 rounded-full"></div>
					<div class="aspect-square w-8 bg-secondary-500 rounded-full"></div>
					<div class="aspect-square w-8 bg-tertiary-500 rounded-full"></div>
					<div class="aspect-square w-8 bg-success-500 rounded-full"></div>
					<div class="aspect-square w-8 bg-warning-500 rounded-full"></div>
					<div class="aspect-square w-8 bg-error-500 rounded-full"></div>
					<div class="aspect-square w-8 bg-surface-500 rounded-full"></div>
				</div>
			</button>
		{/each}
	</div>
</div>

<!-- <div class="">
	<p>This is the import page.</p>

	<h2 class="h2">Cerberus</h2>
	<div>
		<nav class="bg-surface-50-950 p-10">
			<button class="btn preset-filled-primary-500">primary</button>
			<button class="btn preset-filled-secondary-500">secondary</button>
			<button class="btn preset-filled-tertiary-500">tertiary</button>
		</nav>
	</div>

	<hr class="hr" />

	<h2 class="h2">Pine</h2>
	<div data-theme="pine">
		<nav class="bg-surface-50-950 p-10">
			<button class="btn preset-filled-primary-500">primary</button>
			<button class="btn preset-filled-secondary-500">secondary</button>
			<button class="btn preset-filled-tertiary-500">tertiary</button>
		</nav>
	</div>

	<h2 class="h2">Rose</h2>
	<div data-theme="rose">
		<nav class="bg-surface-50-950 p-10">
			<button class="btn preset-filled-primary-500">primary</button>
			<button class="btn preset-filled-secondary-500">secondary</button>
			<button class="btn preset-filled-tertiary-500">tertiary</button>
		</nav>
	</div>
</div> -->
