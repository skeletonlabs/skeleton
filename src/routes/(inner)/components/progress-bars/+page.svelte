<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

	import ProgressBar from '$lib/components/ProgressBar/ProgressBar.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import sveldProgressBar from '$lib/components/ProgressBar/ProgressBar.svelte?raw&sveld';

	// Defaults
	const defaultRounded = 'rounded-token';
	const defaultMeter = 'bg-surface-900-50-token';
	const defaultTrack = 'bg-surface-200-700-token';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Progress Bars',
		description: 'An indicator showing the progress or completion of a task.',
		imports: ['ProgressBar'],
		source: 'components/ProgressBar',
		components: [{ sveld: sveldProgressBar }]
	};

	// Reactive Props
	$: props = {
		determinate: true,
		value: 50,
		max: 100,
		height: 'h-2',
		rounded: defaultRounded,
		meter: defaultMeter,
		track: defaultTrack
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-2">
			<!-- Example -->
			<div class="card variant-glass p-4 h-full flex justify-center items-center">
				<div class="py-10 w-[90%]">
					<svelte:component
						this={ProgressBar}
						value={props.determinate ? props.value : undefined}
						max={props.max}
						height={props.height}
						rounded={props.rounded}
						meter={props.meter}
						track={props.track}
					/>
				</div>
			</div>
			<!-- Options -->
			<div class="card p-4 space-y-4 w-auto lg:w-[400px]">
				<!-- Mode -->
				<label class="label" for="">
					<RadioGroup display="flex">
						<RadioItem bind:group={props.determinate} name="determinate" value={true}>Determinate</RadioItem>
						<RadioItem bind:group={props.determinate} name="indeterminate" value={false}>Indeterminate</RadioItem>
					</RadioGroup>
				</label>
				<!-- Amount -->
				{#if props.determinate}
					<input
						type="range"
						id="amount"
						name="amount"
						min="0"
						max={props.max}
						step="10"
						bind:value={props.value}
						aria-label="Value Amount"
					/>
				{/if}
				<!-- Height -->
				<label class="label" for="">
					<span>Height</span>
					<RadioGroup display="flex">
						<RadioItem bind:group={props.height} name="h-1" value="h-1">h-1</RadioItem>
						<RadioItem bind:group={props.height} name="h-2" value="h-2">h-2</RadioItem>
						<RadioItem bind:group={props.height} name="h-4" value="h-4">h-4</RadioItem>
						<RadioItem bind:group={props.height} name="h-8" value="h-8">h-8</RadioItem>
					</RadioGroup>
				</label>
				<!-- Rounded -->
				<label class="label">
					<span>Rounded</span>
					<select class="select" name="rounded" bind:value={props.rounded}>
						<option value={defaultRounded}>Default</option>
						<option value="rounded-sm">rounded-sm</option>
						<option value="rounded">rounded</option>
						<option value="rounded-md">rounded-md</option>
						<option value="rounded-lg">rounded-lg</option>
						<option value="rounded-xl">rounded-xl</option>
						<option value="rounded-2xl">rounded-2xl</option>
						<option value="rounded-3xl">rounded-3xl</option>
						<option value="rounded-full">rounded-full</option>
					</select>
				</label>
				<!-- Meter -->
				<label class="label">
					<span>Meter</span>
					<select class="select" name="meter" bind:value={props.meter}>
						<option value={defaultMeter}>Default</option>
						<option value="bg-primary-500">bg-primary-500</option>
						<option value="bg-secondary-500">bg-secondary-500</option>
						<option value="bg-tertiary-500">bg-tertiary-500</option>
						<option value="bg-success-500">bg-success-500</option>
						<option value="bg-warning-500">bg-warning-500</option>
						<option value="bg-error-500">bg-error-500</option>
						<option value="bg-surface-500">bg-surface-500</option>
					</select>
				</label>
				<!-- track -->
				<label class="label">
					<span>Track</span>
					<select class="select" name="track" bind:value={props.track}>
						<option value={defaultTrack}>Default</option>
						<option value="bg-primary-500/30">bg-primary-500/30</option>
						<option value="bg-secondary-500/30">bg-secondary-500/30</option>
						<option value="bg-tertiary-500/30">bg-tertiary-500/30</option>
						<option value="bg-success-500/30">bg-success-500/30</option>
						<option value="bg-warning-500/30">bg-warning-500/30</option>
						<option value="bg-errror-500/30">bg-errror-500/30</option>
						<option value="bg-surface-500/30">bg-surface-500/30</option>
					</select>
				</label>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<!-- prettier-ignore -->
			<p>
				This component is treated as an <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role" target="_blank" rel="noreferrer">ARIA progressbar</a>.
			</p>
			<CodeBlock language="html" code={`<ProgressBar label="Progress Bar" value={50} max={100} />`} />
		</section>
		<section class="space-y-4">
			<h2>Indeterminate Mode</h2>
			<p>Remoe the <code>value</code> property or set to <code>undefined</code>.</p>
			<CodeBlock language="html" code={`<ProgressBar />`} />
			<CodeBlock language="html" code={`<ProgressBar value={undefined} />`} />
		</section>
		<section class="space-y-4">
			<h2>Native Alternative</h2>
			<p>The native <code>progress</code> element works cross browser, but does not currently support Indeterminate mode when styled.</p>
			<CodeBlock language="html" code={`<progress value={50} max={100} />`} />
			<div class="card variant-glass p-4">
				<progress value={props.value} max={props.max} />
			</div>
		</section>
	</svelte:fragment>
</DocsShell>
