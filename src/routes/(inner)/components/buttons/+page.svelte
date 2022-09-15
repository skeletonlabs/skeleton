<script lang="ts">
	import { DataTable, Card, Button, SlideToggle } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	function onClickHandler(): void {
		console.log('Button was clicked!');
	}

	// Variants
	const variantExamples: any[] = [
		{ label: 'Text', variants: ['text', 'text-primary', 'text-accent', 'text-warning'] },
		{ label: 'Filled', variants: ['filled', 'filled-primary', 'filled-accent', 'filled-warning'] },
		{ label: 'Ring', variants: ['ring', 'ring-primary', 'ring-accent', 'ring-warning'] },
		{ label: 'Ghost', variants: ['ghost', 'ghost-primary', 'ghost-accent', 'ghost-warning'] }
	];

	// Props & Slots
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
		source: [
			['variant', 'string', '-', '(see above)', 'Provides preset prop values. Overwrites all props but width, rounded, and href.'],
			['size', 'string', 'base', 'none | sm | base | lg | xl', 'Scales the button to various sizes.'],
			['background', 'string', 'bg-black dark:bg-white', 'class', 'Provide classes to define background.'],
			['color', 'string', 'text-white dark:text-black', 'class', 'Provide classes to define text color.'],
			['fill', 'string', 'fill-white dark:fill-black', 'class', 'Provide classes to define SVG fill color.'],
			['ring', 'string', 'ring-transparent', 'class', 'Provide classes to define ring color.'],
			['weight', 'string', 'ring-1', 'class', 'Provide classes to define ring weight.'],
			['width', 'string', 'w-auto', 'class', 'Provide classes to set the button width.'],
			['rounded', 'string', 'rounded-lg', 'class', 'Provide classes to define border radius.'],
			['href', 'string', '-', 'link', 'Converts to an anchor element and sets click through value.']
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [
			['lead', 'A leading slot position left of the content, which can be used for icons.'],
			['trail', 'A leading slot position right of the content, which can be used for icons.']
		]
	};
	const tableA11y: any = {
		headings: ['Prop', 'Required', 'Description'],
		source: [
			['label', '-', `A semantic ARIA label.`],
			['describedby', '-', `Provide the ID of the element describing the button.`]
		]
	};

	// Interactive Example Props
	$: props = {
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
	<!-- Test -->
	<section class="space-y-4">
		<!-- <h4>Unstyled</h4> -->
		<Card slotBody="flex justify-center items-center space-x-4">
			<a href="/components/buttons">Anchor</a>
			<button>Button</button>
		</Card>
		<!-- <h4>Icon Buttons</h4> -->
		<Card slotBody="flex justify-center items-center space-x-4">
			<button class="btn-icon btn-icon-sm bg-primary-500">sm</button>
			<button class="btn-icon btn-icon-base bg-primary-500">
				<SvgIcon name="skull" fill="fill-white/60" />
			</button>
			<button class="btn-icon btn-icon-lg bg-primary-500">lg</button>
			<button class="btn-icon btn-icon-xl bg-primary-500">xl</button>
		</Card>
		<!-- <h4>Lead/Trail</h4> -->
		<Card slotBody="flex justify-center items-center space-x-4">
			<button class="btn btn-base bg-accent-500">
				<SvgIcon name="skull" fill="fill-white/60" />
				<span>Button</span>
			</button>
			<button class="btn btn-base bg-warning-500">
				<span>Button</span>
				<SvgIcon name="skull" fill="fill-white/60" />
			</button>
		</Card>
		<!-- <h4>Sizes</h4> -->
		<Card slotBody="flex justify-center items-center space-x-4">
			<button class="btn btn-sm bg-primary-500">btn-sm</button>
			<button class="btn btn-base bg-primary-500">btn-base</button>
			<button class="btn btn-lg bg-primary-500">btn-lg</button>
			<button class="btn btn-xl bg-primary-500">btn-xl</button>
		</Card>
		<!-- <h4>Style Combos</h4> -->
		<Card slotBody="flex justify-center items-center space-x-4">
			<button class="btn btn-base btn-min">Text</button>
			<button class="btn btn-base bg-primary-500">Filled-Primary</button>
			<button class="btn btn-base btn-outline-accent">Outline-Accent</button>
			<button class="btn btn-base btn-outline-warning bg-warning-500/30">Ghost-Warning</button>
		</Card>
		<!-- <h4>Variants (.btn)</h4> -->
		<Card slotBody="flex justify-center items-center space-x-4">
			<!-- Text -->
			<div class="grid grid-cols-1 gap-4">
				<button class="btn btn-base">Text</button>
				<button class="btn btn-base text-primary-500">Text</button>
				<button class="btn btn-base text-accent-500">Text</button>
				<button class="btn btn-base text-warning-500">Text</button>
			</div>
			<!-- Filled -->
			<div class="grid grid-cols-1 gap-4">
				<button class="btn btn-filled btn-base">filled</button>
				<button class="btn btn-filled-primary btn-base">filled-primary</button>
				<button class="btn btn-filled-accent btn-base">filled-accent</button>
				<button class="btn btn-filled-warning btn-base">filled-warning</button>
			</div>
			<!-- Ringed -->
			<div class="grid grid-cols-1 gap-4">
				<button class="btn btn-ringed btn-base">ringed</button>
				<button class="btn btn-ringed-primary btn-base">ringed-primary</button>
				<button class="btn btn-ringed-accent btn-base">ringed-accent</button>
				<button class="btn btn-ringed-warning btn-base">ringed-warning</button>
			</div>
			<!-- Ringed -->
			<div class="grid grid-cols-1 gap-4">
				<button class="btn btn-ghost btn-base">ghost</button>
				<button class="btn btn-ghost-primary btn-base">ghost-primary</button>
				<button class="btn btn-ghost-accent btn-base">ghost-accent</button>
				<button class="btn btn-ghost-warning btn-base">ghost-warning</button>
			</div>
		</Card>
		<!-- <h4>Variants (.btn-icon)</h4> -->
		<Card slotBody="flex justify-center items-center space-x-4">
			<!-- Text -->
			<div class="grid grid-cols-1 gap-4">
				<button class="btn-icon btn-base">i</button>
				<button class="btn-icon btn-base text-primary-500">i</button>
				<button class="btn-icon btn-base text-accent-500">i</button>
				<button class="btn-icon btn-base text-warning-500">i</button>
			</div>
			<!-- Text -->
			<div class="grid grid-cols-1 gap-4">
				<button class="btn-icon btn-filled btn-base">i</button>
				<button class="btn-icon btn-filled-primary btn-base">i</button>
				<button class="btn-icon btn-filled-accent btn-base">i</button>
				<button class="btn-icon btn-filled-warning btn-base">i</button>
			</div>
			<!-- Ringed -->
			<div class="grid grid-cols-1 gap-4">
				<button class="btn-icon btn-ringed btn-base">i</button>
				<button class="btn-icon btn-ringed-primary btn-base">i</button>
				<button class="btn-icon btn-ringed-accent btn-base">i</button>
				<button class="btn-icon btn-ringed-warning btn-base">i</button>
			</div>
			<!-- Ringed -->
			<div class="grid grid-cols-1 gap-4">
				<button class="btn-icon btn-ghost btn-base">i</button>
				<button class="btn-icon btn-ghost-primary btn-base">i</button>
				<button class="btn-icon btn-ghost-accent btn-base">i</button>
				<button class="btn-icon btn-ghost-warning btn-base">i</button>
			</div>
		</Card>
		<!-- <h4>Form</h4> -->
		<Card slotBody="flex justify-center items-center space-x-2">
			<input type="text" placeholder="test" />
			<button class="btn btn-base bg-primary-500">Button</button>
		</Card>
	</section>

	<!-- Header -->
	<header class="space-y-4">
		<h1>Buttons</h1>
		<p>Buttons allow users to take actions and make choices with a single tap.</p>
		<CodeBlock language="js" code={`import { Button } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Sandbox -->
	<section class="space-y-4">
		<div class="space-y-4 xl:space-y-0 xl:grid grid-cols-[2fr,1fr] gap-2">
			<!-- Example -->
			<Card slotBody="h-full flex justify-center items-center">
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
					type="button"
					on:click={onClickHandler}
				>
					<svelte:fragment slot="lead">
						<!-- {@html svgIconSkull} -->
						<SvgIcon name="skull" fill="fill-white/60" width="w-4" height="h-4" class="!block" />
					</svelte:fragment>
					Skeleton
				</svelte:component>
			</Card>
			<!-- Options -->
			<Card slotBody="grid grid-cols-1 2xl:grid-cols-2 gap-4">
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
		/>
	</section>

	<!-- Variants -->
	<section class="space-y-4">
		<h3>Variants</h3>
		<p>Skeleton provides variants to quickly and easily create buttons with predefined styles. You may still set rounded and width properties with variants.</p>
		<Card slotBody="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{#each variantExamples as ve}
				<section>
					<h3 class="text-center mb-4">{ve.label}</h3>
					<div class="flex flex-col space-y-4">
						{#each ve.variants as v}
							<Button variant={v}>
								<svelte:fragment slot="lead">
									<SvgIcon name="skull" width="w-4" height="h-4" class="!fill-inherit !block" />
								</svelte:fragment>
								{v}
							</Button>
						{/each}
					</div>
				</section>
			{/each}
		</Card>
		<CodeBlock
			language="html"
			code={`
<Button variant="text">Skeleton</Button>
<Button variant="filled-primary">Skeleton</Button>
<Button variant="ring-accent">Skeleton</Button>
<Button variant="ghost-warning">Skeleton</Button>
		`.trim()}
		/>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<p>
			This component makes use of <a href="https://svelte.dev/docs#template-syntax-attributes-and-props" target="_blank">$$restProps</a>, which allows arbitrary attributes to be provided to the
			component.
		</p>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<div class="flex justify-between items-center">
			<h2>Accessibility</h2>
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/button/" target="_blank">ARIA Guidelines</a>
		</div>
		<DataTable headings={tableA11y.headings} source={tableA11y.source} />
	</section>
</div>
