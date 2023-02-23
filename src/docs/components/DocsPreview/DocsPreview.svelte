<script lang="ts">
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';

	// Settings
	import { bgList } from './settings';

	// Classes
	const cBase = 'ring-outline-token shadow-xl rounded-container-token overflow-hidden';
	const cHeader = 'bg-surface-200-700-token p-4 flex justify-between gap-4';
	const cContent = 'p-10 space-y-4';
	const cFooter = 'bg-surface-200-700-token p-4 flex justify-between gap-4';
	const cCode = 'bg-surface-100-800-token p-4 space-y-4';

	// Local
	let tabView: string = 'preview';
	let radioSize: string = 'full';

	let bgActive = 'primary-to-secondary'; // Object.keys(bgList)[0];

	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesHeader = `${cHeader}`;
	$: classesContent = `${cContent} ${bgList[bgActive]}`;
	$: classesFooter = `${cFooter}`;
	$: classesCode = `${cCode}`;
</script>

<div class="docs-preview {classesBase}">
	<!-- Header -->
	<header class="docs-preview-header {classesHeader}">
		<RadioGroup>
			<RadioItem bind:group={tabView} name="view" value="preview"><i class="fa-solid fa-eye text-sm" /></RadioItem>
			<RadioItem bind:group={tabView} name="view" value="code"><i class="fa-solid fa-code text-sm" /></RadioItem>
		</RadioGroup>
		<div class="flex justify-between gap-4">
			<RadioGroup>
				<RadioItem bind:group={radioSize} name="size" value="mobile"><i class="fa-solid fa-mobile-screen text-sm" /></RadioItem>
				<RadioItem bind:group={radioSize} name="size" value="full"><i class="fa-solid fa-display text-sm" /></RadioItem>
			</RadioGroup>
			<select class="select" name="background" bind:value={bgActive}>
				{#each Object.entries(bgList) as [bgKey, bgValue]}
					<option value={bgKey} title={bgValue}>{bgKey}</option>
				{/each}
			</select>
		</div>
	</header>
	{#if tabView === 'preview'}
		<!-- Content -->
		<div class="docs-preview-content {classesContent}">
			<!-- Slot: Lead -->
			{#if $$slots.lead}<div class="docs-preview-lead"><slot name="lead" /></div>{/if}
			<!-- Slot: Preview -->
			<slot name="preview">(preview)</slot>
			<!-- Slot: Trail -->
			{#if $$slots.trail}<div class="docs-preview-trail"><slot name="trail" /></div>{/if}
		</div>
		{#if $$slots.footer}<footer class="docs-preview-footer {classesFooter}"><slot name="footer" /></footer>{/if}
	{:else if tabView === 'code'}
		<!-- Source -->
		<div class="docs-preview-source {classesCode}">
			<slot name="source">(source)</slot>
		</div>
	{/if}
</div>
