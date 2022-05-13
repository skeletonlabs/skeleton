<script lang="ts">
    import { writable, type Writable } from 'svelte/store';

    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Table from "$lib/Table/Table.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Stepper from '$lib/Stepper/Stepper.svelte';
    import Step from '$lib/Stepper/Step.svelte';

    const active: Writable<number> = writable(0);
    const lorem: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto corrupti.';

    function onComplete(): void { alert('Complete was triggered!'); }

    // Props and Slots
    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['active', 'Writable<number>', 'writable(0)', 'Yes', 'Provide a writable that stores the active step index state.'],
            ['max', 'number', '0', 'No', 'Sets the max number of steps.'],
            ['skippable', 'boolean', 'true', 'No', 'Can navigate steps in any order.'],
            ['progressable', 'boolean', 'false', 'No', 'Adds check mark to completed steps.'],
            ['accent', 'string', 'bg-primary-500', 'No', 'Provide a class that sets the step accent color.'],
            ['variant', 'string', 'text', 'No', 'Provide a button variant property.'],
            ['disabled', 'boolean', 'false', 'No', 'Disables the forward progress button.'],
        ],
    };
    const tableSlots: any = {
        columns: ['Name', 'Description'],
        data: [
            ['label', 'Provide label content next to the numeric steps. (ex: Step One)'],
            ['complete', 'Provide an optional submit button or complete indicator, such as an icon.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Stepper</h2>
        <p>Divide content into stepped sequence.</p>
        <CodeBlock language="javascript" code={`<script>import {Stepper, Step} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card>
        <Stepper {active} length={3}>
            <Step index={0} disabled={false} complete={false}>
                <svelte:fragment slot="title"><h4>Step One</h4></svelte:fragment>
                <svelte:fragment slot="subtitle">Subtext for step one</svelte:fragment>
                <svelte:fragment slot="content"><p>{lorem}</p></svelte:fragment>
            </Step>
            <Step index={1} disabled={false} complete={false}>
                <svelte:fragment slot="title"><h4>Step Two</h4></svelte:fragment>
                <svelte:fragment slot="subtitle">Subtext for step two</svelte:fragment>
                <svelte:fragment slot="content"><p>{lorem}</p></svelte:fragment>
            </Step>
            <Step index={2} disabled={false} complete={false} on:complete={onComplete}>
                <svelte:fragment slot="title"><h4>Step Three</h4></svelte:fragment>
                <svelte:fragment slot="subtitle">Subtext for step three</svelte:fragment>
                <svelte:fragment slot="content"><p>{lorem}</p></svelte:fragment>
            </Step>
        </Stepper>
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <p>For best user experience keep the max number of steps to five or less.</p>
        <CodeBlock language="js" code={`const active: Writable<number> = writable(0);`}></CodeBlock>
        <CodeBlock language="html" code={`...`.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<!-- <Table source="{tableProps}"></Table> -->
	</section>
	
	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<!-- <Table source="{tableSlots}"></Table> -->
	</section>
    
</div>
