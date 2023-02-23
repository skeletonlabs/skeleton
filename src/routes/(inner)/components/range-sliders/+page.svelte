<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import RangeSlider from '$lib/components/RangeSlider/RangeSlider.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import sveldRangeSlider from '$lib/components/RangeSlider/RangeSlider.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Range Sliders',
		description: 'Capture input from a range of values, including optional ticks.',
		imports: ['RangeSlider'],
		source: 'components/RangeSlider',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/slider/',
		components: [{ sveld: sveldRangeSlider }],
		restProps: 'input',
		keyboard: [
			['<kbd>Right Arrow</kbd> or <kbd>Up Arrow</kbd>', 'Increase the value of the slider by one step.'],
			['<kbd>Left Arrow</kbd> or <kbd>Down Arrow</kbd>', 'Decrease  the value of the slider by one step.'],
			['<kbd>Home</kbd>', 'Set the slider to the first allowed value in its range.'],
			['<kbd>End</kbd>', 'Set the slider to the last allowed value in its range.'],
			['<kbd>Page Up</kbd>', 'Increase the slider value by a large amount.'],
			['<kbd>Page Down</kbd>', 'Decrease  the slider value by a large amount.']
		]
	};

	// Reactive Props
	$: props = {
		label: 'Skeleton',
		value: 50 / 2,
		min: 0,
		max: 50,
		step: 1,
		ticked: true,
		accent: '!accent-secondary-500'
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4 xl:space-y-0 xl:grid grid-cols-[1fr_auto] gap-2">
			<!-- Example -->
			<div class="card variant-glass p-4 flex justify-center items-center">
				<!-- prettier-ignore -->
				<svelte:component
						this={RangeSlider}
						name="range-slider-example"
						label={props.label}
						bind:value={props.value}
						max={props.max}
						step={props.step}
						ticked={props.ticked}
						accent={props.accent}
						class="w-full lg:max-w-[75%] max-auto"
					>
						<div class="flex justify-between items-center">
							<div class="font-bold">{props.label}</div>
							<div class="text-xs">{props.value} / {props.max}</div>
						</div>
					</svelte:component>
			</div>
			<!-- Options -->
			<div class="card p-4 space-y-4 max-w-[320px]">
				<!-- Label -->
				<label class="label">
					<span>Label</span>
					<input class="input" type="text" bind:value={props.label} placeholder="Label" />
				</label>
				<!-- Max -->
				<label class="label" for="">
					<span>Max</span>
					<RadioGroup display="flex">
						<RadioItem bind:group={props.max} name="max-10" value={10}>10</RadioItem>
						<RadioItem bind:group={props.max} name="max-50" value={50}>50</RadioItem>
						<RadioItem bind:group={props.max} name="max-100" value={100}>100</RadioItem>
					</RadioGroup>
				</label>
				<!-- Step -->
				<label class="label" for="">
					<span>Step</span>
					<RadioGroup display="flex">
						<RadioItem bind:group={props.step} name="step-1" value={1}>1</RadioItem>
						<RadioItem bind:group={props.step} name="step-5" value={5}>5</RadioItem>
						<RadioItem bind:group={props.step} name="step-10" value={10}>10</RadioItem>
					</RadioGroup>
				</label>
				<!-- Ticked -->
				<label class="label" for="">
					<span>Ticked</span>
					<RadioGroup display="flex">
						<RadioItem bind:group={props.ticked} name="ticked-off" value={false}>Off</RadioItem>
						<RadioItem bind:group={props.ticked} name="ticked-on" value={true}>On</RadioItem>
					</RadioGroup>
				</label>
				<!-- Accent -->
				<label class="label">
					<span>Accent</span>
					<select class="select" name="accent" bind:value={props.accent}>
						<option value="!accent-primary-500">accent-primary-500</option>
						<option value="!accent-secondary-500">accent-secondary-500</option>
						<option value="!accent-tertiary-500">accent-tertiary-500</option>
						<option value="!accent-success-500">accent-success-500</option>
						<option value="!accent-warning-500">accent-warning-500</option>
						<option value="!accent-error-500">accent-error-500</option>
						<option value="!accent-surface-500">accent-surface-500</option>
					</select>
				</label>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<!-- prettier-ignore -->
			<p>Combines a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range" target="_blank" rel="noreferrer">native range input</a> with <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#adding_tick_marks" target="_blank" rel="noreferrer">datalist ticks</a>.</p>
			<CodeBlock language="html" code={`<RangeSlider name="range-slider" bind:value={50} max={100} step={5} ticked>Label</RangeSlider>`} />
		</section>
		<section class="space-y-4">
			<h2>Browser Support</h2>
			<!-- prettier-ignore -->
			<p>
				Please be aware that <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#browser_compatibility" target="_blank" rel="noreferrer">browser support</a> varies. Safari (macOS/iOS) does not visually display the ticks. However, the ticks are progressive enhancement feature, and Safari it will honor the <code>max</code> and <code>step</code> settings in relation to the value.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
				<div class="card p-4 variant-filled-primary"><h4>Chrome: Full</h4></div>
				<div class="card p-4 variant-filled-primary"><h4>Edge: Full</h4></div>
				<div class="card p-4 variant-filled-warning"><h4>Safari: Partial</h4></div>
				<div class="card p-4 variant-filled-primary"><h4>Firefox: Full</h4></div>
			</div>
		</section>
	</svelte:fragment>
</DocsShell>
