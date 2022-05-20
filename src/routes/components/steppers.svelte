<script lang="ts">
    import { writable, type Writable } from 'svelte/store';

    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Table from "$lib/Table/Table.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Stepper from '$lib/Stepper/Stepper.svelte';
    import Step from '$lib/Stepper/Step.svelte';

    const active: Writable<number> = writable(0);
    const lorem: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto corrupti.';
    const onComplete = () => { alert('Complete was triggered!'); }

    // Props and Slots
    const tablePropsStepper: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['active', 'Writable<number>', 'writable(0)', 'Yes', 'Provide a writable that stores the active step index state.'],
            ['length', 'number', '0', 'Yes', 'Informs the component of the total number of steps.'],
            ['complete', 'event', '-', 'No', 'Triggers when the final step Complete button is pressed.'],
            ['accent', 'string', 'bg-primary-500', 'No', 'Provide a class that sets the highlighted step background color.'],
            ['background', 'string', 'bg-surface-300 dark:bg-surface-700', 'No', 'Provide a class that sets timeline background color.'],
        ],
    };
    const tablePropsStep: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['index', 'number', '-', 'Yes', 'Indicates the step index value. Should start with zero 0 (zero)'],
            ['disabled', 'boolean', '-', 'No', 'When enabled, the Next button is disabled, preventing progress.'],
            ['done', 'boolean', '-', 'No', 'When enabled, numeric step value changes to checkmark.'],
        ],
    };
    const tableSlotsStepper: any = {
        columns: ['Name', 'Description'],
        data: [
            ['default', 'Used to provide all step components.'],
        ],
    };
    const tableSlotsStep: any = {
        columns: ['Name', 'Description'],
        data: [
            ['title', 'Optionally provide the title for the step here.'],
            ['subtitle', 'Optionally provide the subtitle for the step here.'],
            ['content', 'Provide the content for the step. This can be text, a form, etc.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Stepper</h2>
        <p>Divide content into sequenced steps.</p>
        <CodeBlock language="javascript" code={`import { Stepper, Step } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card>
        <Stepper {active} length={3} on:complete={onComplete}>
            <Step index={0} disabled={false} done={false}>
                <svelte:fragment slot="title"><h4>Step One</h4></svelte:fragment>
                <svelte:fragment slot="subtitle">Subtext for step one</svelte:fragment>
                <svelte:fragment slot="content"><p>{lorem}</p></svelte:fragment>
            </Step>
            <Step index={1} disabled={false} done={false}>
                <svelte:fragment slot="title"><h4>Step Two</h4></svelte:fragment>
                <svelte:fragment slot="subtitle">Subtext for step two</svelte:fragment>
                <svelte:fragment slot="content"><p>{lorem}</p></svelte:fragment>
            </Step>
            <Step index={2} disabled={false} done={false}>
                <svelte:fragment slot="title"><h4>Step Three</h4></svelte:fragment>
                <svelte:fragment slot="subtitle">Subtext for step three</svelte:fragment>
                <svelte:fragment slot="content"><p>{lorem}</p></svelte:fragment>
            </Step>
        </Stepper>
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <p>For best user experience keep the number of steps to a minimum. Usually five or less.</p>
        <CodeBlock language="js" code={`const active: Writable<number> = writable(0);`}></CodeBlock>
        <CodeBlock language="js" code={`const onComplete = () => { /* ... */ }`}></CodeBlock>
        <CodeBlock language="html" code={`
<Stepper {active} length={3} on:complete={onComplete}>
    <Step index={0} disabled={false} done={false}>
        <svelte:fragment slot="title"><h4>Step One</h4></svelte:fragment>
        <svelte:fragment slot="subtitle">Subtext for step one</svelte:fragment>
        <svelte:fragment slot="content">The content of step one.</svelte:fragment>
    </Step>
    <Step index={1} disabled={false} done={false}>
        <svelte:fragment slot="title">Step Two</svelte:fragment>
        <svelte:fragment slot="subtitle">Subtext for step two</svelte:fragment>
        <svelte:fragment slot="content">The content of step two.</svelte:fragment>
    </Step>
</Stepper>
        `.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
        <h4>Stepper</h4>
		<Table source="{tablePropsStepper}"></Table>
        <h4>Step</h4>
		<Table source="{tablePropsStep}"></Table>
	</section>
	
	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
        <h4>Stepper</h4>
		<Table source="{tableSlotsStepper}"></Table>
        <h4>Step</h4>
		<Table source="{tableSlotsStep}"></Table>
	</section>
    
</div>
