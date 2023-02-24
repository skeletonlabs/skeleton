<script lang="ts">
	// Components
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	// Settings
	import { backgrounds } from './options';

	// Props
	/** Enable the mobile responsive settings */
	export let responsive = false;
	/** Force and append a custom color value. */
	export let background = '';

	// Props (regions)
	/** Provide abitrary classes to the header region. */
	export let regionHeader = '';
	/** Provide abitrary classes to the preview viewport. */
	export let regionViewport = '';
	/** Provide abitrary classes to the content region. */
	export let regionContent = '';
	/** Provide abitrary classes to the footer region. */
	export let regionFooter = '';
	/** Provide abitrary classes to the source code region. */
	export let regionSource = '';

	// Classes
	const cBase = 'ring-outline-token shadow-xl rounded-container-token overflow-hidden';
	const cHeader = 'bg-surface-200-700-token p-4 flex justify-between gap-4';
	const cViewport = 'p-4 md:p-10 space-y-4';
	const cContent = 'flex justify-center items-center space-y-4 mx-auto transition-[width] duration-200';
	const cFooter = 'variant-soft p-4 pt-0';
	const cSource = 'bg-surface-100-800-token p-4 space-y-4';

	// Local
	let tabView: string = 'preview';
	let radioSize: string = 'full';
	let bgActive = 'primary-to-secondary';

	// Extend the background list options
	if (background) {
		backgrounds[background] = background;
		bgActive = background;
	}

	// State
	$: resizableWidth = radioSize === 'mobile' ? 'w-[320px]' : 'w-full';
	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesHeader = `${cHeader} ${regionHeader}`;
	$: classesViewport = `${cViewport} ${backgrounds[bgActive]} ${regionViewport}`;
	$: classesContent = `${cContent} ${resizableWidth} ${regionContent}`;
	$: classesFooter = `${cFooter} ${regionFooter}`;
	$: classesSource = `${cSource} ${regionSource}`;
</script>

<div class="docs-preview {classesBase}">
	<!-- Header -->
	<header class="docs-preview-header {classesHeader}">
		<!-- View Toggle -->
		<RadioGroup>
			<RadioItem bind:group={tabView} name="view" value="preview"><i class="fa-solid fa-eye text-sm" /></RadioItem>
			<RadioItem bind:group={tabView} name="view" value="code"><i class="fa-solid fa-code text-sm" /></RadioItem>
		</RadioGroup>
		<div class="flex justify-between gap-4">
			<!-- Responsive Settings -->
			{#if responsive}
				<RadioGroup class="hidden md:flex">
					<RadioItem bind:group={radioSize} name="size" value="mobile"><i class="fa-solid fa-mobile-screen text-sm" /></RadioItem>
					<RadioItem bind:group={radioSize} name="size" value="full"><i class="fa-solid fa-display text-sm" /></RadioItem>
				</RadioGroup>
			{/if}
			<!-- Background Selection -->
			<select class="select" name="background" bind:value={bgActive}>
				{#each Object.entries(backgrounds) as [k, v]}
					<option value={k}>{k}</option>
				{/each}
			</select>
		</div>
	</header>
	{#if tabView === 'preview'}
		<!-- Viewport -->
		<div class="docs-preview-viewport {classesViewport}">
			<!-- Slot: Lead -->
			{#if $$slots.lead}<div class="docs-preview-lead"><slot name="lead" /></div>{/if}
			<!-- Slot: Preview -->
			<div class="docs-preview-resizable {classesContent}"><slot name="preview">(preview)</slot></div>
			<!-- Slot: Trail -->
			{#if $$slots.trail}<div class="docs-preview-trail"><slot name="trail" /></div>{/if}
		</div>
		{#if $$slots.footer}<footer class="docs-preview-footer {classesFooter}"><slot name="footer" /></footer>{/if}
	{:else if tabView === 'code'}
		<!-- Source -->
		<div class="docs-preview-source {classesSource}">
			<slot name="source">(source)</slot>
		</div>
	{/if}
</div>
