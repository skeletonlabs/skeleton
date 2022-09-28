<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import { DataTable, RangeSlider } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';

	// Stores
	const storeMax: Writable<number> = writable(50);
	const storeStep: Writable<number> = writable(1);
	const storeTicked: Writable<boolean> = writable(true);

	// Reactive Props
	$: props = {
		label: 'Skeleton',
		value: $storeMax / 2,
		min: 0,
		max: $storeMax,
		step: $storeStep,
		ticked: $storeTicked,
		accent: 'accent-accent-500'
	};

	// Tables
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['value', 'number', '0', 'Set the input value.'],
			['min', 'number', '0', 'Set the input minimum range.'],
			['max', 'number', '100', 'Set the input maximum range.'],
			['step', 'number', '1', 'Set the input step offset.'],
			['ticked', 'boolean', 'false', 'Enables tick marks. See browser support below.'],
			['accent', 'string', 'accent-accent-500', 'Provide classes to set the input accent color.']
		]
	};
	const tableSlots: any = {
		headings: ['Prop', 'Description'],
		source: [['Default', 'A label slot directly above the range slider element.']]
	};
	const tableA11y: any = {
		headings: ['Prop', 'Type', 'Description'],
		source: [
			['id', 'string', 'Provide a unique input id.'],
			['label', 'string', `A semantic ARIA label.`]
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Range Slider</h1>
		<p>Capture input from a range of values, including optional ticks.</p>
		<CodeBlock language="js" code={`import { RangeSlider } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Sandbox -->
	<section class="space-y-4">
		<div class="space-y-4 xl:space-y-0 xl:grid grid-cols-[1.5fr,1fr] gap-2">
			<!-- Example -->
			<div class="card card-body flex justify-center items-center h-full">
				<!-- prettier-ignore -->
				<svelte:component
					this={RangeSlider}
					label={props.label}
					bind:value={props.value}
					max={props.max}
					step={props.step}
					ticked={props.ticked}
					accent={props.accent}
					class="w-full lg:max-w-[75%] max-auto"
				>
					<div class="flex justify-between items-center">
						<div>{props.label}</div>
						<div class="text-xs">{props.max}</div>
					</div>
					<svelte:fragment slot="trail">
						<p class="text-center">Value <code>{props.value}</code></p>
					</svelte:fragment>
				</svelte:component>
			</div>
			<!-- Options -->
			<div class="card card-body space-y-4">
				<!-- Label -->
				<label>
					<span>Label</span>
					<input type="text" bind:value={props.label} placeholder="Label" />
				</label>
				<!-- Max -->
				<label for="">
					<span>Max</span>
					<RadioGroup selected={storeMax} display="flex">
						<RadioItem value={10}>10</RadioItem>
						<RadioItem value={50}>50</RadioItem>
						<RadioItem value={100}>100</RadioItem>
					</RadioGroup>
				</label>
				<!-- Step -->
				<label for="">
					<span>Step</span>
					<RadioGroup selected={storeStep} display="flex">
						<RadioItem value={1}>1</RadioItem>
						<RadioItem value={5}>5</RadioItem>
						<RadioItem value={10}>10</RadioItem>
					</RadioGroup>
				</label>
				<div class="grid grid-cols-2 gap-4">
					<!-- Ticks -->
					<label for="">
						<span>Ticks</span>
						<RadioGroup selected={storeTicked} display="flex">
							<RadioItem value={false}>Off</RadioItem>
							<RadioItem value={true}>On</RadioItem>
						</RadioGroup>
					</label>
					<!-- Accent -->
					<label>
						<span>Accent</span>
						<select name="accent" id="accent" bind:value={props.accent}>
							<option value="accent-primary-500">accent-primary-500</option>
							<option value="accent-accent-500">accent-accent-500</option>
							<option value="accent-ternary-500">accent-ternary-500</option>
							<option value="accent-warning-500">accent-warning-500</option>
							<option value="accent-surface-500">accent-surface-500</option>
						</select>
					</label>
				</div>
			</div>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<RangeSlider bind:value={50} max={100} step={5} ticked>Label</RangeSlider>`} />
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
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/slider/" target="_blank">ARIA Guidelines</a>
		</div>
		<DataTable headings={tableA11y.headings} source={tableA11y.source} />
	</section>

	<!-- Support -->
	<section class="space-y-4">
		<h2>Browser Support</h2>
		<p>
			This component utilizes <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range" target="_blank">native HTML range inputs</a>. Browser support is limited for
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range" target="_blank">native datalist element</a>, which display the generated tickmarks. Additionally, some browsers
			(such as Chrome) alter the track color to ensure contrast between the track and meter. Please keep accessibility in mind when utilizing this component.
		</p>
	</section>
</div>
