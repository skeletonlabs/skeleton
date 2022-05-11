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

    // Props and Slots
    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['active', 'Writable<number>', 'writable(0)', 'Yes', 'Provide a writable that stores the active step index state.'],
            ['max', 'number', '0', 'No', 'Sets the max number of steps.'],
            ['accent', 'string', 'bg-primary-500', 'No', 'Provide a class that sets the step accent color.'],
            ['variant', 'string', 'text', 'No', 'Provide a button variant property.'],
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
        <Stepper {active} max={3}></Stepper>
        <Divider />
        <div class="text-center py-12">
            {#if $active === 0}
            <h4>Showing Step 1</h4>
            {:else if $active === 1}
            <h4>Showing Step 2</h4>
            {:else if $active === 2}
            <h4>Showing Step 3</h4>
            {/if}
        </div>
    </Card>
    <Card>
        <Stepper {active} max={3} accent="bg-accent-500" variant="ring-accent">
            <Button variant="filled-accent" on:click={showCompleteAlert}>Complete</Button>
        </Stepper>
    </Card>
    <Card>
        <Stepper {active} max={3} accent="bg-warning-500" variant="ghost-warning">
            <Button variant="filled-warning" on:click={showCompleteAlert}>Complete</Button>
        </Stepper>
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="js" code={`const storeActive: Writable<number> = writable(0);`}></CodeBlock>
        <CodeBlock language="html" code={`
<Stepper {storeActive} max={3} accent="bg-primary-500" variant="ring-primary">
    <Button variant="filled-primary" on:click={submit}>Complete</Button>
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
