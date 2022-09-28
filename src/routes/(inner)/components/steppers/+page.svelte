<script lang="ts">
	import { DataTable, Stepper, Step } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';

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
			['duration', 'number', '200', '-', 'Set the Svelte transition duration.'],
			['color', 'string', 'text-white', '-', 'Provide classes to set the numeral text color.'],
			['background', 'string', 'bg-accent-500 text-white', '-', 'Provide classes to set the timeline background color.']
		]
	};
	const tablePropsStepperButtons: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['buttonBack', 'string', 'btn-ghost', 'Provide <a href="/tailwind/buttons">Button element</a> classes.'],
			['buttonNext', 'string', 'btn-filled', 'Provide <a href="/tailwind/buttons">Button element</a> classes.'],
			['buttonComplete', 'string', 'btn-filled-primary', 'Provide <a href="/tailwind/buttons">Button element</a> classes.']
		]
	};
	const tablePropsStep: any = {
		headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
		source: [
			['locked', 'boolean', 'false', '-', 'When enabled, a lock icon appears and the Next button is disabled. This prevents progress.']
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
			['default', 'Provide the content for the step.'],
			['header', 'Override the auto-generated heading with your own value. Typically a step title.']
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
		<p>Divide and present content in sequenced steps.</p>
		<CodeBlock language="javascript" code={`import { Stepper, Step } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<div class="card card-body">
		<h2 class='sr-only'>Examples</h2>
		<Stepper on:complete={onComplete}>
			<Step>
				<svelte:fragment slot="header"><h4>Step 1 - Get Started!</h4></svelte:fragment>
				<p>This example will teach you how to use the Stepper component. Tap <em>next</em> to proceed forward.</p>
			</Step>
			<Step>
				<p>Prior completed steps will display a checkmark. However, tap the &uarr; button at any time to return to the previous step.</p>
			</Step>
			<Step locked={!exampleLockedState}>
				<p>
					This Step component uses the <code>locked</code> property, which can prevent progress. This is ideal for multi-step forms, such as registration. For now we'll simulate a successful
					validation condition using the
					<em>unlock</em> option below.
				</p>
				<SlideToggle bind:checked={exampleLockedState}>Unlock</SlideToggle>
			</Step>
			<Step>
				<p>The steps will expand to fit content of any width. We'll demonstrate this below with <em>lorem ipsum</em> text.</p>
				<p>{lorem} {lorem} {lorem} {lorem} {lorem}</p>
			</Step>
			<Step>
				<p>
					A <em>Complete</em> button will appear on the last step. When the step is unlocked and the button pressed, an <code>on:complete</code> event will fire. Use this to submit form data to a server.
				</p>
			</Step>
		</Stepper>
	</div>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p>Scaffold your stepper as shown. If no header slot is provided then the component will add "Step X" text automatically.</p>
		<CodeBlock
			language="html"
			code={`
<Stepper on:complete={onComplete}>
	<Step>
		<svelte:fragment slot="header">(header)</svelte:fragment>
		(content)
	</Step>
	<Step locked={true}>(content)</Step>
</Stepper>
        `}
		/>
		<p>Create a function to handle your Stepper's <code>on:complete</code> event.</p>
		<CodeBlock language="typescript" code={`const onComplete: any = () => { /* handle the event */ }`} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<h3>Stepper</h3>
		<DataTable headings={tablePropsStepper.headings} source={tablePropsStepper.source} />
		<DataTable headings={tablePropsStepperButtons.headings} source={tablePropsStepperButtons.source} />
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
