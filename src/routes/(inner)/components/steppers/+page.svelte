<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import Stepper from '$lib/components/Stepper/Stepper.svelte';
	import Step from '$lib/components/Stepper/Step.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldStepper from '$lib/components/Stepper/Stepper.svelte?raw&sveld';
	import sveldStep from '$lib/components/Stepper/Step.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Steppers',
		description: 'Divide and present content in sequenced steps.',
		imports: ['Stepper', 'Step'],
		source: 'components/Stepper',
		components: [
			{ label: 'Stepper', sveld: sveldStepper },
			{
				label: 'Step',
				sveld: sveldStep,
				overrideProps: [
					'gap',
					'stepTerm',
					'justify',
					'buttonBack',
					'buttonBackLabel',
					'buttonNext',
					'buttonNextLabel',
					'buttonComplete',
					'buttonCompleteLabel'
				]
			}
		]
	};

	// Local
	let locked: boolean = true;

	function onNextHandler(e: any): void {
		console.log('event:next', e.detail);
	}
	function onBackHandler(e: any): void {
		console.log('event:prev', e.detail);
	}
	function onCompleteHandler(e: any): void {
		console.log('event:complete', e.detail);
		alert('Complete!');
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="w-full card p-4 text-token">
					<Stepper on:next={onNextHandler} on:back={onBackHandler} on:complete={onCompleteHandler}>
						<Step>
							<svelte:fragment slot="header">Get Started!</svelte:fragment>
							<p>This example Stepper will teach you how to use this component. Tap <u>next</u> to proceed to the next step.</p>
						</Step>
						<Step>
							<svelte:fragment slot="header">Going Back.</svelte:fragment>
							<p>
								The current step progress will be tracked at the top. Tap <u>back</u> to return to the previous step.
							</p>
						</Step>
						<Step {locked}>
							<svelte:fragment slot="header">A Locked Step.</svelte:fragment>
							<p>
								This Step component uses the <code>locked</code> property to prevent progress. This is ideal for multi-step forms, such as registration.
								For now we'll simulate a successful validation condition using the toggle below.
							</p>
							<div class="card !bg-transparent p-4 text-center">
								<SlideToggle name="locked-state" bind:checked={locked}>This step is <u>{locked ? 'Locked' : 'Unlocked'}</u></SlideToggle>
							</div>
						</Step>
						<Step>
							<svelte:fragment slot="header">Long Form Content.</svelte:fragment>
							<p>The steps will expand to fit content of any length.</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro vero, saepe dicta repellendus facilis ab
								accusamus unde, tempora ut nobis eum. Veniam, architecto corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Itaque vel expedita porro vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto
								corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro vero, saepe dicta repellendus
								facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto corrupti. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Itaque vel expedita porro vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum.
								Veniam, architecto corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro vero, saepe
								dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto corrupti.
							</p>
						</Step>
						<Step>
							<svelte:fragment slot="header">Almost Done.</svelte:fragment>
							<p>
								A Complete button will appear on the last step. When the step is unlocked and the button pressed, an <code>on:complete</code
								> event will be fired. You can use this trigger to submit form data to a server.
							</p>
						</Step>
					</Stepper>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<Stepper>
	<Step>
		<svelte:fragment slot="header">(header)</svelte:fragment>
		(content)
	</Step>
	<Step>
		<svelte:fragment slot="header">(header)</svelte:fragment>
		(content)
	</Step>
	<!-- ... -->
</Stepper>
			`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>
			Create a set of Steps within the Stepper, then use the <code>on:complete</code> event to detect when all steps are complete. Since
			horizontal space may be limited on small screens, we recommend no more than <em>five</em> steps at max.
		</p>
		<section class="space-y-4">
			<h2>Event Handlers</h2>
			<h3>Complete Event</h3>
			<CodeBlock language="ts" code={`function onCompleteHandler(e: Event): void { console.log('event:complete', e); }`} />
			<CodeBlock language="html" code={`<Stepper on:complete={onCompleteHandler}>...</Stepper>`} />
			<h3>Next and Previous</h3>
			<p>Events are fired when the next or previous steps are pressed.</p>
			<CodeBlock language="html" code={`<Stepper on:next={onNextHandler} on:back={onBackHandler}>...</Stepper>`} />
		</section>

		<section class="space-y-4">
			<h2>Locked State</h2>
			<p>
				Each Step can have a <code>locked</code> property set, when set to <em>TRUE</em> this locks progression for that step. For example, you
				can lock a step until a form within it becomes valid.
			</p>
			<CodeBlock language="ts" code={`let lockedState: boolean = true;`} />
			<CodeBlock language="html" code={`<Step locked={lockedState}>...</Step>`} />
		</section>
	</svelte:fragment>
</DocsShell>
