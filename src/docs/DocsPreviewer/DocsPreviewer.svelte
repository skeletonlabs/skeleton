<script lang="ts">
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	export let selection: number = 0;
	export let label: string | undefined = undefined;
	export let script: string | undefined = undefined;
	export let html: string | undefined = undefined;
	export let css: string | undefined = undefined;

	export let radiosettings: any = {
		// background: 'bg-transparent',
		// border: 'border border-surface-500/30'
	};
	export let htmlSettings: any = {};
	export let cssSettings: any = {};
	export let scriptSettings: any = {};

	// Classes
	const cBase = 'card variant-glass p-3 space-y-3';
	const cHeader = 'flex flex-col lg:flex-row items-center gap-4';
	const cLabel = 'text-xl font-bold';
	const cPreview = 'card p-4 py-12 flex justify-center items-center';

	// Local
	const backgrounds: Record<string, string> = {
		neutral: '!bg-neutral-900/80',
		primary: `variant-filled-primary`,
		secondary: `variant-filled-secondary`,
		tertiary: `variant-filled-tertiary`,
		transparent: '!bg-transparent'
	};
	let bgSelection = 'neutral';

	// State
	$: hasLabel = label ? 'justify-between' : 'justify-center';
	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesHeader = `${cHeader} ${hasLabel}`;
	$: classesLabel = `${cLabel}`;
	$: classesPreview = `${cPreview} ${backgrounds[bgSelection]}`;
</script>

<div class="previewer {classesBase}">
	<header class="previewer-header {classesHeader}">
		<!-- Label -->
		{#if label}<span class="previewer-label {classesLabel}">{label}</span>{/if}
		<!-- Radio -->
		<div class="flex gap-4">
			<select name="background" class="select" bind:value={bgSelection}>
				{#each Object.entries(backgrounds) as [bgKey, bgValue]}
					<option value={bgKey} title={bgValue}>{bgKey}</option>
				{/each}
			</select>
			<RadioGroup {...radiosettings}>
				<RadioItem bind:group={selection} name="preview" value={0}>Preview</RadioItem>
				{#if script || html || css}<RadioItem bind:group={selection} name="svelte" value={1}>Code</RadioItem>{/if}
			</RadioGroup>
		</div>
	</header>
	<!-- Preview -->
	{#if selection === 0}<div class="previewer-preview {classesPreview}"><slot /></div>{/if}
	<!-- CodeBlocks -->
	{#if selection === 1}
		{#if script}<CodeBlock language="ts" code={script} {...scriptSettings} />{/if}
		{#if html}<CodeBlock language="html" code={html} {...htmlSettings} />{/if}
		{#if css}<CodeBlock language="css" code={css} {...cssSettings} />{/if}
	{/if}
	<!-- Trail -->
	{#if $$slots.trail}<div class="previewer-trail"><slot name="trail" /></div>{/if}
</div>
