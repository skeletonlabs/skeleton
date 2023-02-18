<script lang="ts">
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	export let background = 'neutral';
	export let viewport: string = 'full';
	export let selection: number = 0;

	export let label: string | undefined = undefined;
	export let script: string | undefined = undefined;
	export let html: string | undefined = undefined;
	export let css: string | undefined = undefined;

	export let radiosettings: any = {
		background: 'variant-soft',
		border: 'border border-surface-500/30'
	};
	export let selectSettings: any = 'variant-soft !border-surface-500/30';
	export let htmlSettings: any = {};
	export let cssSettings: any = {};
	export let scriptSettings: any = {};

	// Classes
	const cBase = 'space-y-4';
	const cHeader = 'flex flex-col xl:flex-row items-center gap-4';
	const cLabel = 'text-lg font-bold';
	const cPreview = 'card p-4 sm:p-12 flex justify-center items-center';
	const cViewportMobile = 'w-[375px] mx-auto !p-4';

	// Local
	const backgroundStyles: Record<string, string> = {
		neutral: 'variant-soft',
		transparent: '!bg-transparent',
		primary: `variant-filled-primary`,
		secondary: `variant-filled-secondary`,
		tertiary: `variant-filled-tertiary`
	};

	function capitalize(text: string) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}

	// State
	$: hasLabel = label ? 'justify-between' : 'justify-center';
	$: viewportWidth = viewport === 'mobile' ? cViewportMobile : '';
	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesHeader = `${cHeader} ${hasLabel}`;
	$: classesLabel = `${cLabel}`;
	$: classesPreview = `${cPreview} ${backgroundStyles[background]} ${viewportWidth}`;
</script>

<div class="previewer {classesBase}">
	<header class="previewer-header {classesHeader}">
		<!-- Label -->
		{#if label}<span class="previewer-label {classesLabel}">{@html label}</span>{/if}
		<!-- Radio -->
		<div class="hidden md:flex gap-4">
			{#if selection === 0}
				<!-- Background -->
				<select name="background" class="select {selectSettings}" bind:value={background}>
					{#each Object.entries(backgroundStyles) as [bgKey, bgValue]}
						<option value={bgKey} title={bgValue}>{capitalize(bgKey)}</option>
					{/each}
				</select>
				<!-- Viewport -->
				<RadioGroup {...radiosettings}>
					<RadioItem bind:group={viewport} name="mobile" value="mobile">
						<i class="fa-solid text-sm fa-mobile-screen" />
					</RadioItem>
					<RadioItem bind:group={viewport} name="full" value="full">
						<i class="fa-solid text-sm fa-display" />
					</RadioItem>
				</RadioGroup>
			{/if}
			<!-- Selection -->
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
	<!-- Slot: Trail -->
	{#if selection === 0 && $$slots.trail}<div class="previewer-trail"><slot name="trail" /></div>{/if}
</div>
