<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { DataTable, Card, Stepper, Step } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';

	const active: Writable<number> = writable(0);
	const lorem: string =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto corrupti.';
	const onComplete = () => {
		alert('Complete was triggered!');
	};

	// Local
	let exampleLockedState: boolean = false;

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
		<Stepper {active} length={5} on:complete={onComplete}>
			<Step index={0}>
				<svelte:fragment slot="header"><h4>Step 1 - Get Started!</h4></svelte:fragment>
				<p>This example will teach you how to use the Stepper component. Tap <em>next</em> to proceed forward.</p>
			</Step>
			<Step index={1}>
				<p>Prior completed steps will display a checkmark. However, tap the &uarr; button at any time to return to the previous step.</p>
			</Step>
			<Step index={2} locked={!exampleLockedState}>
				<p>
					The Step component has a <code>locked</code> property that can be enabled to prevent progress. This is ideal for multi-step forms, such as registration. Just tie the form validation
					condition to the property. For now we'll simulate this using the <em>unlock</em> option below.
				</p>
				<SlideToggle bind:checked={exampleLockedState}>Unlock</SlideToggle>
			</Step>
			<Step index={3}>
				<p>The steps will expand to fit content of any width. We'll demonstrate this below with lorem ipsum text.</p>
				<p>{lorem} {lorem} {lorem} {lorem} {lorem}</p>
			</Step>
			<Step index={4}>
				<p>
					On the last step the <em>Complete</em> button will appear. When tapped an <code>on:complete</code> event will fire, which can be used to submit form data to a server.
				</p>
			</Step>
		</Stepper>
	</Card>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p>To begin, create a writable that will store your active step value. This should always be set to zero.</p>
		<CodeBlock language="typescript" code={`import type { Writable } from "svelte/store";`} />
		<CodeBlock language="typescript" code={`const active: Writable<number> = writable(0);`} />
		<p>Scaffold your stepper as shown. If no header slot is provided text will be generated that says "Step X" automatically.</p>
		<CodeBlock
			language="html"
			code={`
<Stepper {active} length={5} on:complete={onComplete}>
	<Step index={0}>
		<svelte:fragment slot="header">(header)</svelte:fragment>
		(content)
	</Step>
	<Step index={1} locked={true}>(content)</Step>
</Stepper>
        `.trim()}
		/>
		<p>Create a function to handle your Stepper's <code>complete</code> event.</p>
		<CodeBlock language="typescript" code={`const onComplete: any = () => { /* handle the event */ }`} />
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
