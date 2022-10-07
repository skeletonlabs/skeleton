<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	import Step from '$lib/components/Stepper/Step.svelte';
	import Stepper from '$lib/components/Stepper/Stepper.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Stores
	const active: Writable<number> = writable(0);

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Steppers',
		description: 'Divide and present content in sequenced steps.',
		imports: ['Stepper', 'Step'],
		source: 'components/Stepper'
	};
	const properties: DocsShellTable[] = [
		{
			label: 'Stepper',
			headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
			source: [
				['<code>active</code>', 'Writable<number>', 'writable(0)', '&check;', 'Provide a writable which stores the actively selected step state.'],
				['<code>length</code>', 'number', '0', '&check;', 'Provide a count of the total number of Steps (children).'],
				['<code>duration</code>', 'number', '200', '-', 'Set the Svelte transition duration.'],
				['<code>color</code>', 'string', 'text-white', '-', 'Provide classes to set the numeral text color.'],
				['<code>background</code>', 'string', 'bg-accent-500 text-white', '-', 'Provide classes to set the timeline background color.'],
				['<code>buttonBack</code>', 'string', 'btn-ghost', '-', 'Provide <a href="/elements/buttons">Button element</a> classes.'],
				['<code>buttonNext</code>', 'string', 'btn-filled', '-', 'Provide <a href="/elements/buttons">Button element</a> classes.'],
				['<code>buttonComplete</code>', 'string', 'btn-filled-primary', '-', 'Provide <a href="/elements/buttons">Button element</a> classes.']
			]
		},
		{
			label: 'Step',
			headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
			source: [
				['<code>index</code>', 'number', '-', '&check;', 'Indicates the step index value. Should start with 0 (zero)'],
				['<code>locked</code>', 'boolean', 'false', '-', 'When enabled, a lock icon appears and the Next button is disabled. This prevents progress.']
			]
		}
	];
	const events: DocsShellTable[] = [
		{
			headings: ['Prop', 'Description'],
			source: [['<code>on:complete</code>', `Triggers when the final step's <em>Complete</em> button is pressed.`]]
		}
	];
	const classes: DocsShellTable[] = [
		{
			description: 'Coming soon.'
			// headings: ['Selector', 'Description'],
			// source: [
			// 	['<code>.foo</code>', '...'],
			// 	['<code>.bar</code>', '...']
			// ]
		}
	];
	const slots: DocsShellTable[] = [
		{
			label: 'Stepper',
			headings: ['Name', 'Description'],
			source: [['<code>default</code>', 'Accepts a set of Step components.']]
		},
		{
			label: 'Step',
			headings: ['Name', 'Description'],
			source: [
				['<code>default</code>', 'Provide the content for the step.'],
				['<code>header</code>', 'Override the auto-generated heading with your own value. Typically a step title.']
			]
		}
	];

	// Local
	const lorem: string =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto corrupti.';
	let exampleLockedState: boolean = false;

	const onComplete = () => {
		alert('Complete was triggered!');
	};
</script>

<DocsShell {settings} {properties} {events} {classes} {slots}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card card-body">
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
						This Step component uses the <code>locked</code> property, which can prevent progress. This is ideal for multi-step forms, such as registration. For now we'll simulate a successful
						validation condition using the
						<em>unlock</em> option below.
					</p>
					<SlideToggle bind:checked={exampleLockedState}>Unlock</SlideToggle>
				</Step>
				<Step index={3}>
					<p>The steps will expand to fit content of any width. We'll demonstrate this below with <em>lorem ipsum</em> text.</p>
					<p>{lorem} {lorem} {lorem} {lorem} {lorem}</p>
				</Step>
				<Step index={4}>
					<p>
						A <em>Complete</em> button will appear on the last step. When the step is unlocked and the button pressed, an <code>on:complete</code> event will fire. Use this to submit form data to a server.
					</p>
				</Step>
			</Stepper>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>To begin, create a writable that will store your active step value. This should <u>always</u> be set to <code>0</code> (zero).</p>
			<CodeBlock language="typescript" code={`import { writable, type Writable } from 'svelte/store';`} />
			<CodeBlock language="typescript" code={`const active: Writable<number> = writable(0);`} />
		</section>
		<section class="space-y-4">
			<p>Scaffold your stepper as shown. If no header slot is provided then the component will add "Step X" text automatically.</p>
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
        `}
			/>
		</section>
		<section class="space-y-4">
			<p>Create a function to handle your Stepper's <code>on:complete</code> event.</p>
			<CodeBlock language="typescript" code={`const onComplete: any = () => { /* handle the event */ }`} />
		</section>
	</svelte:fragment>
</DocsShell>
