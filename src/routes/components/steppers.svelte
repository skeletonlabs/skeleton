<script lang="ts">
    import { writable, type Writable } from 'svelte/store';

    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Table from "$lib/Table/Table.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Button from '$lib/Button/Button.svelte';
    import Divider from '$lib/Divider/Divider.svelte';
    import Stepper from '$lib/Stepper/Stepper.svelte';

    const active: Writable<number> = writable(0);
    function showCompleteAlert(): void { alert('Complete was triggered!'); }

    const exampleSteps: any[] = [
        'Step One',
        'Step Two',
        'Step Three',
    ];

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
            ['Default', 'Provide an optional submit button or complete indicator, such as an icon.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Stepper</h2>
        <p>Divide content into stepped sequence.</p>
        <CodeBlock language="javascript" code={`<script>import {Stepper} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="space-y-4">
        <Stepper {active} max={exampleSteps.length}></Stepper>
        <Divider />
        <div class="text-center py-12">
            {#if $active === 0}
            <h4>{exampleSteps[$active]}</h4>
            {:else if $active === 1}
            <h4>{exampleSteps[$active]}</h4>
            {:else if $active === 2}
            <h4>{exampleSteps[$active]}</h4>
            {/if}
        </div>
    </Card>
    <Card>
        <Stepper {active} max={exampleSteps.length} accent="bg-accent-500" variant="ring-accent" skippable={false} progressable={true}>
            <svelte:fragment slot="label">{exampleSteps[$active]}</svelte:fragment>
            <svelte:fragment slot="complete">
                <Button variant="filled-accent" on:click={showCompleteAlert}>Complete</Button>
            </svelte:fragment>
        </Stepper>
    </Card>
    <Card>
        <Stepper {active} max={exampleSteps.length} accent="bg-warning-500" variant="ghost-warning" skippable={false} progressable={true} disabled={$active === 1}>
            <svelte:fragment slot="label">
                Step {$active+1} {$active === 1 ? '🔒' : ''}
            </svelte:fragment>
            <svelte:fragment slot="complete">
                <Button variant="filled-warning" on:click={showCompleteAlert}>Complete</Button>
            </svelte:fragment>
        </Stepper>
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <p>For best user experience keep the max number of steps to five or less.</p>
        <CodeBlock language="js" code={`const storeActive: Writable<number> = writable(0);`}></CodeBlock>
        <CodeBlock language="html" code={`<Stepper {active} max={3}></Stepper>`.trim()}></CodeBlock>
        <h4>Customized</h4>
        <CodeBlock language="html" code={`
<Stepper {active} max={3} accent="bg-primary-500" variant="ghost-primary" skippable={false} progressable={true} disabled={false}>
    <svelte:fragment slot="label">
        Step {$active+1}
    </svelte:fragment>
    <svelte:fragment slot="complete">
        <Button variant="filled-primary" on:click={showCompleteAlert}>Complete</Button>
    </svelte:fragment>
</Stepper>
        `.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<Table source="{tableProps}"></Table>
	</section>
	
	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<Table source="{tableSlots}"></Table>
	</section>
    
</div>
