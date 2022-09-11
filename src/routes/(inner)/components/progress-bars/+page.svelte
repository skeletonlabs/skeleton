<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import { DataTable, Card, RadioGroup, RadioItem, ProgressBar } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	const storeDeterminate: Writable<boolean> = writable(true);
	const storeHeight: Writable<string> = writable('h-2');
	const defaultTrackBg: string = 'bg-surface-300 dark:bg-surface-700';

	// Reactive Props
	$: props = {
		determinate: $storeDeterminate,
		label: 'Progress Bar',
		value: 50,
		max: 100,
		height: $storeHeight,
		rounded: 'rounded-full',
		meter: 'bg-accent-500',
		track: defaultTrackBg
	};

	// Tables
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['label', 'string', '-', 'Set the label text.'],
			['value', 'number', '-', 'Specifies the amount completed. Shows as indeterminate when <code>undefined</code>.'],
			['max', 'number', '100', 'Maximum amount the bar represents.'],
			['height', 'string', 'h-2', 'Provide classes to set track height.'],
			['rounded', 'string', 'rounded-full', 'Provide classes to set rounded styles.'],
			['meter', 'string', 'bg-accent-500', 'Provide arbitrary classes to style the meter element.'],
			['track', 'string', 'bg-surface-300 dark:bg-surface-700', 'Provide arbitrary classes to style the track element.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Progress Bar</h1>
		<p>Displays an indicator showing the progress or completion of a task.</p>
		<CodeBlock language="js" code={`import { ProgressBar } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Sandbox -->
	<section class="space-y-4">
		<div class="space-y-4 xl:space-y-0 xl:grid grid-cols-[2fr,1fr] gap-2">
			<!-- Example -->
			<Card slotBody="h-full flex justify-center items-center">
				<div class="w-[75%]">
					<svelte:component
						this={ProgressBar}
						label={props.label}
						value={props.determinate ? props.value : undefined}
						max={props.max}
						height={props.height}
						rounded={props.rounded}
						meter={props.meter}
						track={props.track}
					/>
				</div>
			</Card>
			<!-- Options -->
			<Card slotBody="space-y-4">
				<!-- Label -->
				<label>
					<span>Label</span>
					<input type="text" bind:value={props.label} placeholder="Label" />
				</label>
				<!-- Mode -->
				<label for="">
					<span>Mode</span>
					<RadioGroup selected={storeDeterminate} display="flex">
						<RadioItem value={true}>Determinate</RadioItem>
						<RadioItem value={false}>Indeterminate</RadioItem>
					</RadioGroup>
				</label>
				<!-- Amount -->
				{#if props.determinate}
					<input type="range" id="amount" name="amount" min="0" max={props.max} step="10" bind:value={props.value} aria-label="Value Amount" />
				{/if}
				<!-- Height -->
				<label for="">
					<span>Height</span>
					<RadioGroup selected={storeHeight} display="flex">
						<RadioItem value="h-1">h-1</RadioItem>
						<RadioItem value="h-2">h-2</RadioItem>
						<RadioItem value="h-4">h-4</RadioItem>
						<RadioItem value="h-8">h-8</RadioItem>
					</RadioGroup>
				</label>
				<!-- Rounded -->
				<label>
					<span>Rounded</span>
					<select name="rounded" id="rounded" bind:value={props.rounded}>
						<option value="rounded-none">rounded-none</option>
						<option value="rounded">rounded</option>
						<option value="rounded-full">rounded-full</option>
					</select>
				</label>
				<!-- Meter -->
				<label>
					<span>Meter</span>
					<select name="meter" id="meter" bind:value={props.meter}>
						<option value="bg-primary-500">bg-primary-500</option>
						<option value="bg-accent-500">bg-accent-500</option>
						<option value="bg-warning-500">bg-warning-500</option>
					</select>
				</label>
				<!-- track -->
				<label>
					<span>Track</span>
					<select name="track" id="track" bind:value={props.track}>
						<option value={defaultTrackBg}>Default</option>
						<option value="bg-primary-500/30">bg-primary-500/30</option>
						<option value="bg-accent-500/30">bg-accent-500/30</option>
						<option value="bg-warning-500/30">bg-warning-500/30</option>
					</select>
				</label>
			</Card>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<ProgressBar label="Progress Bar" value={50} max={100} />`} />
		<h4>Indeterminate</h4>
		<p>The <code>value</code> property must be removed or set to <code>undefined</code>.</p>
		<CodeBlock language="html" code={`<ProgressBar />`} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<p>
			This component is treated as a <em>Meter</em>. View the
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/meter/" target="_blank">ARIA Guidelines</a>.
		</p>
	</section>
</div>
