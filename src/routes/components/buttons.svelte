<script lang="ts">
	import Card from '$lib/Card/Card.svelte';
    import DataTable from "$lib/Table/DataTable.svelte";
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import SlideToggle from '$lib/SlideToggle/SlideToggle.svelte';
	import Button from '$lib/Button/Button.svelte';

	// SVG Icon
	const svgIconSkull: string = '<svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 400V464C416 490.5 394.5 512 368 512H320V464C320 455.2 312.8 448 304 448C295.2 448 288 455.2 288 464V512H224V464C224 455.2 216.8 448 208 448C199.2 448 192 455.2 192 464V512H144C117.5 512 96 490.5 96 464V400C96 399.6 96 399.3 96.01 398.9C37.48 357.8 0 294.7 0 224C0 100.3 114.6 0 256 0C397.4 0 512 100.3 512 224C512 294.7 474.5 357.8 415.1 398.9C415.1 399.3 416 399.6 416 400V400zM160 192C124.7 192 96 220.7 96 256C96 291.3 124.7 320 160 320C195.3 320 224 291.3 224 256C224 220.7 195.3 192 160 192zM352 320C387.3 320 416 291.3 416 256C416 220.7 387.3 192 352 192C316.7 192 288 220.7 288 256C288 291.3 316.7 320 352 320z"/></svg>';

	// Variants
	const variantExamples: any[] = [
		{label: 'Text', variants: ['text', 'text-primary', 'text-accent', 'text-warning']},
		{label: 'Filled', variants: ['filled', 'filled-primary', 'filled-accent', 'filled-warning']},
		{label: 'Ring', variants: ['ring', 'ring-primary', 'ring-accent', 'ring-warning']},
		{label: 'Ghost', variants: ['ghost', 'ghost-primary', 'ghost-accent', 'ghost-warning']},
	];

	// Props & Slots
    const tableProps: any = {
        headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
        source: [
            ['variant', 'string', '-', '(see above)', 'Provides preset prop values. Overwrites all props but width, rounded, and href.'],
            ['size', 'string', 'base', 'none | sm | base | lg | xl', 'Scales the button to various sizes.'],
            ['background', 'string', 'bg-black dark:bg-white', 'class', 'Provide a class to define background.'],
            ['color', 'string', 'text-white dark:text-black', 'class', 'Provide a class to define text color.'],
            ['fill', 'string', 'fill-white dark:fill-black', 'class', 'Provide a class to define SVG fill color.'],
            ['ring', 'string', 'ring-transparent', 'class', 'Provide a class to define ring color.'],
            ['weight', 'string', 'ring-1', 'class', 'Provide a class to define ring weight.'],
            ['width', 'string', 'w-auto', 'class', 'Provide a class to set the button width.'],
            ['rounded', 'string', 'rounded-lg', 'class', 'Provide a class to define border radius.'],
            ['href', 'string', '-', 'link', 'Converts to an anchor element and sets click through value.'],
        ],
    };
    const tableSlots: any = {
        headings: ['Name', 'Description'],
        source: [
            ['lead', 'A leading slot position left of the content, which can be used for icons.'],
            ['trail', 'A leading slot position right of the content, which can be used for icons.'],
        ],
    };

	// Interactive Example Props
	$:props = {
		size: 'base',
		background: 'bg-primary-500',
		color: 'text-white',
		fill: 'fill-white',
		ring: 'ring-transparent',
		weight: 'ring-none',
		rounded: 'rounded-lg',
		width: 'w-auto',
		disabled: false
	};
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Buttons</h1>
		<p>Buttons allow users to take actions and make choices with a single tap.</p>
		<CodeBlock language="js" code={`import { Button } from '@brainandbones/skeleton';`}></CodeBlock>
	</header>

	<!-- Sandbox -->
	<section class="space-y-4">
		<div class="space-y-4 xl:space-y-0 xl:grid grid-cols-[2fr,1fr] gap-2">
			<!-- Example -->
			<Card class="space-y-4 flex justify-center items-center">
				<svelte:component
					this={Button}
					size={props.size}
					background={props.background}
					color={props.color}
					fill={props.fill}
					ring={props.ring}
					weight={props.weight}
					rounded={props.rounded}
					width={props.width}
					disabled={props.disabled}
				>
					<svelte:fragment slot="lead">{@html svgIconSkull}</svelte:fragment>
					Skeleton
				</svelte:component>
            </Card>
			<!-- Options -->
			<Card>
				<div class="grid grid-cols-1 2xl:grid-cols-2 gap-4">
					<!-- Size -->
					<label>
						<span>Size</span>
						<select name="size" id="size" bind:value={props.size}>
							<option value="none">none</option>
							<option value="sm">sm</option>
							<option value="base">base</option>
							<option value="lg">lg</option>
							<option value="xl">xl</option>
						</select>
					</label>
					<!-- Fill -->
					<label>
						<span>Fill</span>
						<select name="fill" id="fill" bind:value={props.fill}>
							<option value="fill-white">fill-white</option>
							<option value="fill-black">fill-black</option>
							<option value="fill-primary-500">fill-primary-500</option>
							<option value="fill-accent-500">fill-accent-500</option>
							<option value="fill-warning-500">fill-warning-500</option>
						</select>
					</label>
					<!-- Background -->
					<label>
						<span>Background</span>
						<select name="background" id="background" bind:value={props.background}>
							<option value="bg-transparent">bg-transparent</option>
							<option value="bg-primary-500">bg-primary-500</option>
							<option value="bg-accent-500">bg-accent-500</option>
							<option value="bg-warning-500">bg-warning-500</option>
							<option value="bg-primary-500/10">bg-primary-500/10</option>
							<option value="bg-accent-500/10">bg-accent-500/10</option>
							<option value="bg-warning-500/10">bg-warning-500/10</option>
						</select>
					</label>
					<!-- Color -->
					<label>
						<span>Color</span>
						<select name="color" id="color" bind:value={props.color}>
							<option value="text-white">text-white</option>
							<option value="text-black">text-black</option>
							<option value="text-primary-500">text-primary-500</option>
							<option value="text-accent-500">text-accent-500</option>
							<option value="text-warning-500">text-warning-500</option>
						</select>
					</label>
					<!-- Ring Color -->
					<label>
						<span>Ring Color</span>
						<select name="ring" id="ring" bind:value={props.ring}>
							<option value="ring-transparent">ring-transparent</option>
							<option value="ring-white">ring-white</option>
							<option value="ring-black">ring-black</option>
							<option value="ring-primary-500">ring-primary-500</option>
							<option value="ring-accent-500">ring-accent-500</option>
							<option value="ring-warning-500">ring-warning-500</option>
						</select>
					</label>
					<!-- Ring Weight -->
					<label>
						<span>Ring Weight</span>
						<select name="weight" id="weight" bind:value={props.weight}>
							<option value="ring-none">ring-none</option>
							<option value="ring-1">ring-1</option>
							<option value="ring-2">ring-2</option>
							<option value="ring-4">ring-4</option>
						</select>
					</label>
					<!-- Rounded -->
					<label>
						<span>Rounded</span>
						<select name="rounded" id="rounded" bind:value={props.rounded}>
							<option value="none">none</option>
							<option value="rounded-sm">rounded-sm</option>
							<option value="rounded">rounded</option>
							<option value="rounded-lg">rounded-lg</option>
							<option value="rounded-full">rounded-full</option>
						</select>
					</label>
					<!-- Width -->
					<label>
						<span>Width</span>
						<select name="width" id="width" bind:value={props.width}>
							<option value="w-auto">w-auto</option>
							<option value="w-[50%]">w-[50%]</option>
							<option value="w-full">w-full</option>
						</select>
					</label>
					<!-- Disabled -->
					<SlideToggle bind:checked={props.disabled} accent="bg-accent-500">Disabled</SlideToggle>
				</div>
			</Card>
		</div>
		<CodeBlock
			language="html"
			code={`
<Button
	size="${props.size}"
	background="${props.background || ''}"
	color="${props.color}"
	ring="${props.ring || ''}"
	weight="${props.weight || ''}"
	rounded="${props.rounded}"
	width="${props.width}"
	disabled={${props.disabled}}
>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	Skeleton
</Button>
			`.trim()}
		></CodeBlock>
	</section>

	<!-- Variants -->
	<section class="space-y-4">
		<h4>Variants</h4>
		<p>Skeleton provides variants to quickly and easily create buttons with predefined styles. You may still set rounded and width properties with variants.</p>
		<Card>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{#each variantExamples as ve}
				<section>
					<h4 class="text-center mb-4">{ve.label}</h4>
					<nav class="flex flex-col space-y-4">
						{#each ve.variants as v}
						<Button variant={v}>
							<svelte:fragment slot="lead">{@html svgIconSkull}</svelte:fragment>
							{v}
						</Button>
						{/each}
					</nav>
				</section>
				{/each}
			</div>
		</Card>
		<CodeBlock language="html" code={`
<Button variant="text-primary">Skeleton</Button>
<Button variant="filled-accent">Skeleton</Button>
<Button variant="ghost-warning">Skeleton</Button>
		`.trim()}></CodeBlock>
	</section>
	
	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings="{tableProps.headings}" source="{tableProps.source}"></DataTable>
	</section>
	
	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings="{tableSlots.headings}" source="{tableSlots.source}"></DataTable>
	</section>

</div>
