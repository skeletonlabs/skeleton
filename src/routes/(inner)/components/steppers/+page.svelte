<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { DataTable, Card, Stepper, Step } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	const active: Writable<number> = writable(0);
	const lorem: string =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto corrupti.';
	const onComplete = () => {
		alert('Complete was triggered!');
	};

	// Tables
	const tablePropsStepper: any = {
		headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
		source: [
			['active', 'Writable<number>', '0 (zero)', '&check;', 'Provide a Svelte Writable that stores the active step state.'],
			['length', 'number', '0 (zero)', '&check;', 'Informs the component of the total number of steps.'],
			['accent', 'string', 'bg-primary-500', '-', 'Provide classes that sets the current step numeral background color.'],
			['background', 'string', 'bg-surface-300 dark:bg-surface-700', '-', 'Provide classes that sets timeline background color.']
		]
	};
	const tablePropsStep: any = {
		headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
		source: [
			['index', 'number', '-', '&check;', 'Indicates the step index value. Should start with zero 0 (zero)'],
			['disabled', 'boolean', 'false', '-', 'When enabled, the Next button is disabled. This prevents progress.'],
			['done', 'boolean', 'false', '-', 'When enabled, numeric step value changes to checkmark.']
		]
	};
	// Slots
	const tableSlotsStepper: any = {
		headings: ['Name', 'Description'],
		source: [['default', 'Accepts a set of steps to display.']]
	};
	const tableSlotsStep: any = {
		headings: ['Name', 'Description'],
		source: [
			['title', 'Optionally provide the title for the step.'],
			['subtitle', 'Optionally provide the subtitle for the step.'],
			['content', 'Provide the content for the step.']
		]
	};
	// Events
	const tableEvents: any = {
		headings: ['Prop', 'Description'],
		source: [['complete', `Triggers when the final step's <em>Complete</em> button is pressed.`]]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Stepper</h1>
		<p>Divide content into sequenced steps.</p>
		<CodeBlock language="javascript" code={`import { Stepper, Step } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<Card>
		<Stepper {active} length={3} on:complete={onComplete}>
			<Step index={0}>
				<svelte:fragment slot="header"><h4>Get Started!</h4></svelte:fragment>
				<p>{lorem}</p>
			</Step>
			<Step index={1}><p>{lorem}</p></Step>
			<Step index={2}><p>{lorem}</p></Step>
		</Stepper>
	</Card>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p>For the best user experience keep the number of steps to a minimum. Usually five or less.</p>
		<CodeBlock
			language="typescript"
			code={`import type { Writable } from "svelte/store";
const active: Writable<number> = writable(0);`}
		/>
		<CodeBlock language="typescript" code={`const onComplete: any = () => { /* ... */ }`} />
		<CodeBlock
			language="html"
			code={`
<Stepper {active} length={3} on:complete={onComplete}>
    <Step index={0} disabled={false} done={false}>
        <svelte:fragment slot="title">Step One</svelte:fragment>
        <svelte:fragment slot="subtitle">Subtext for step one</svelte:fragment>
        <svelte:fragment slot="content">The content of step one.</svelte:fragment>
    </Step>
    <Step index={1} disabled={false} done={false}>
        <svelte:fragment slot="title">Step Two</svelte:fragment>
        <svelte:fragment slot="subtitle">Subtext for step two</svelte:fragment>
        <svelte:fragment slot="content">The content of step two.</svelte:fragment>
    </Step>
</Stepper>
        `.trim()}
		/>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<h3>Stepper</h3>
		<DataTable headings={tablePropsStepper.headings} source={tablePropsStepper.source} />
		<h3>Step</h3>
		<DataTable headings={tablePropsStep.headings} source={tablePropsStep.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<h3>Stepper</h3>
		<DataTable headings={tableSlotsStepper.headings} source={tableSlotsStepper.source} />
		<h3>Step</h3>
		<DataTable headings={tableSlotsStep.headings} source={tableSlotsStep.source} />
	</section>

	<!-- Events -->
	<section class="space-y-4">
		<h2>Events</h2>
		<h3>Stepper</h3>
		<DataTable headings={tableEvents.headings} source={tableEvents.source} />
	</section>
</div>
