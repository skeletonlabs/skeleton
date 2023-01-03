<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import Stepper from '$lib/components/Stepper/Stepper.svelte';
	import Step from '$lib/components/Stepper/Step.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';

	// @ts-expect-error sveld import
	import sveldStepper from '$lib/components/Stepper/Stepper.svelte?raw&sveld';
	// @ts-expect-error sveld import
	import sveldStep from '$lib/components/Stepper/Step.svelte?raw&sveld';

	// Stores
	const active: Writable<number> = writable(0);

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Steppers',
		description: 'Divide and present content in sequenced steps.',
		imports: ['Stepper', 'Step'],
		source: 'components/Stepper',
		components: [
			{ label: 'Stepper', sveld: sveldStepper },
			{ label: 'Step', sveld: sveldStep, overrideProps: ['color', 'background', 'buttonBack', 'buttonNext', 'buttonComplete'] }
		]
	};

	// Local
	const lorem =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto corrupti.';
	let exampleLockedState = false;

	const onComplete = () => {
		alert('Complete was triggered!');
	};

	const storeRounded: Writable<string> = writable('rounded-token');
	const storeClickNavigation: Writable<boolean> = writable(false);
	let propBackground: string = 'bg-secondary-500 text-on-secondary-token';

	$: forceRefresh = `${propBackground} ${$storeClickNavigation} ${$storeRounded}`;
</script>

<!-- prettier-ignore -->
<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<div class="grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-4">
				<div class="card card-body p-4">
					<!-- setContext used in the Stepper component is not reactive so we need to force a refresh of the component when the prop values are changed in the page. -->
					{#key forceRefresh}
						<Stepper 
							{active} 
							length={6} 
							clickNavigation={$storeClickNavigation}
							background={propBackground}
							rounded={$storeRounded}
							on:complete={onComplete}
						>
							<Step index={0}>
								<svelte:fragment slot="header"><h4>Step 1 - Get Started!</h4></svelte:fragment>
								<p>This example will teach you how to use the Stepper component. Tap <em>next</em> to proceed forward.</p>
							</Step>
							<Step index={1}>
								<p>Prior completed steps will display a checkmark. However, tap the &uarr; button at any time to return to the previous step.</p>
							</Step>
							<Step index={2} locked={!exampleLockedState}>
								<svelte:fragment slot="header"><h4>Step 3 - <code>locked</code> Property</h4></svelte:fragment>
								<p>
									This Step component uses the <code>locked</code> property, which can prevent progress. This is ideal for multi-step forms, such
									as registration. For now we'll simulate a successful validation condition using the
									<em>unlock</em> option below.
								</p>
								<SlideToggle bind:checked={exampleLockedState}>Unlock</SlideToggle>
							</Step>
							<Step index={3}>
								<svelte:fragment slot="header"><h4>Step 4 - <code>clickNavigation</code> Property</h4></svelte:fragment>
								<p>
									Steps can also be made clickable by setting the <code>clickNavigation</code> prop in Stepper to <code>true</code>.
									This makes all steps clickable that have already been reached.
								</p>
							</Step>
							<Step index={4}>
								<p>The steps will expand to fit content of any width. We'll demonstrate this below with <em>lorem ipsum</em> text.</p>
								<p>{lorem} {lorem} {lorem} {lorem} {lorem}</p>
							</Step>
							<Step index={5}>
								<p>
									A <em>Complete</em> button will appear on the last step. When the step is unlocked and the button pressed, an
									<code>on:complete</code> event will fire. Use this to submit form data to a server.
								</p>
							</Step>
						</Stepper>
					{/key}
				</div>
				<div class="card card-body p-4 space-y-4">
					<!-- Click Navigation -->
					<label for="">
						<span>Click Navigation</span>
						<RadioGroup selected={storeClickNavigation} display="flex">
							<RadioItem value={false}>Off</RadioItem>
							<RadioItem value={true}>On</RadioItem>
						</RadioGroup>
					</label>
					<!-- Rounded -->
					<label for="">
						<span>Rounded</span>
						<RadioGroup selected={storeRounded} display="flex">
							<RadioItem value="rounded-token">theme</RadioItem>
							<RadioItem value="rounded-sm">sm</RadioItem>
							<RadioItem value="rounded-lg">lg</RadioItem>
							<RadioItem value="rounded-full">full</RadioItem>
						</RadioGroup>
					</label>
					<!-- Background -->
					<label>
						<span>Background</span>
						<select name="background" id="background" bind:value={propBackground}>
							<option value="bg-primary-500 text-on-primary-token">bg-primary-500</option>
							<option value="bg-secondary-500 text-on-secondary-token">bg-secondary-500</option>
							<option value="bg-tertiary-500 text-on-tertiary-token">bg-tertiary-500</option>
							<option value="bg-success-500 text-on-success-token">bg-success-500</option>
							<option value="bg-warning-500 text-on-warning-token">bg-warning-500</option>
							<option value="bg-error-500 text-on-error-token">bg-error-500</option>
							<option value="bg-surface-500 text-on-surface-token">bg-surface-500</option>
						</select>
					</label>
				</div>
			</div>
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
<Stepper {active} length={2} on:complete={onComplete}>
	<Step index={0}>
		<svelte:fragment slot="header">(header)</svelte:fragment>
		(content)
	</Step>
	<Step index={1} locked={true}>(content)</Step>
</Stepper>`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Completion Event</h2>
			<p>You may optionally implement a function to handle your Stepper's <code>on:complete</code> event.</p>
			<CodeBlock language="typescript" code={`const onComplete: any = () => { /* handle the event */ }`} />
		</section>
	</svelte:fragment>
</DocsShell>
