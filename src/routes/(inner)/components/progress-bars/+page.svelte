<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import ProgressBar from '$lib/components/ProgressBar/ProgressBar.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error sveld import
	import sveldProgressBar from '$lib/components/ProgressBar/ProgressBar.svelte?raw&sveld';

	// Stores
	const storeDeterminate: Writable<boolean> = writable(true);
	const storeHeight: Writable<string> = writable('h-2');
	const defaultTrackBg = 'bg-surface-200-700-token';

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
		determinate: $storeDeterminate,
		label: 'Progress Bar',
		value: 50,
		max: 100,
		height: $storeHeight,
		rounded: 'rounded-token',
		meter: 'bg-secondary-500',
		track: defaultTrackBg
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-2">
			<!-- Example -->
			<div class="card p-4 h-full flex justify-center items-center">
				<div class="py-10 w-[90%]">
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
			</div>
			<!-- Options -->
			<div class="card p-4 space-y-4 w-auto lg:w-[400px]">
				<!-- Mode -->
				<label for="">
					<RadioGroup selected={storeDeterminate} display="flex">
						<RadioItem value={true}>Determinate</RadioItem>
						<RadioItem value={false}>Indeterminate</RadioItem>
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
				<!-- Label -->
				<label>
					<span>Label</span>
					<input type="text" bind:value={props.label} placeholder="Label" />
				</label>
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
						<option value="rounded-token">rounded-token</option>
						<option value="rounded">rounded</option>
						<option value="rounded-full">rounded-full</option>
					</select>
				</label>
				<!-- Meter -->
				<label>
					<span>Meter</span>
					<select name="meter" id="meter" bind:value={props.meter}>
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
				<label>
					<span>Track</span>
					<select name="track" id="track" bind:value={props.track}>
						<option value={defaultTrackBg}>Default</option>
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
		<div class="space-y-4">
			<p>
				This component is treated as an <a
					href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role"
					target="_blank"
					rel="noreferrer">ARIA progressbar</a
				>.
			</p>
			<CodeBlock language="html" code={`<ProgressBar label="Progress Bar" value={50} max={100} />`} />
		</div>
		<div class="space-y-4">
			<h2>Indeterminate Mode</h2>
			<p>The <code>value</code> property must be removed or set to <code>undefined</code>.</p>
			<CodeBlock language="html" code={`<ProgressBar />`} />
		</div>
	</svelte:fragment>
</DocsShell>
