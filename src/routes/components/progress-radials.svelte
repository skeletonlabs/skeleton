<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import DataTable from "$lib/Table/DataTable.svelte";
    import ProgressRadial from "$lib/Progress/ProgressRadial.svelte";

    const tableProps: any = {
        headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        source: [
            ['value', 'number', '-', 'false', 'Set the filled amount. Remove or set undefined to show as indeterminate.'],
            ['stroke', 'number', '20', 'false', 'Proportional stroke width, based on default SVG viewBox size of 512px.'],
            ['track', 'string', 'stroke-surface-300 dark:stroke-surface-700', 'false', 'Provide a class to set track fill color.'],
            ['meter', 'string', 'stroke-black dark:stroke-white', 'false', 'Provide a class to set meter fill color.'],
            ['color', 'string', 'fill-black dark:fill-white', 'false', 'Provide a class to set the SVG text fill color.'],
            ['fontsize', 'string', '56', 'false', 'Base pixel size for the SVG text layer.'],
        ],
    };
    const tableSlots: any = {
        headings: ['Name', 'Description'],
        source: [
            ['default', 'Contents render as SVG text in the middle of the element.'],
        ],
    };

    // Reactive
    $: props = { value: 50, max: 100, step: 10 };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Progress Radial</h1>
        <p>Displays a radial indicator showing the progress or completion of a task.</p>
        <CodeBlock language="js" code={`import { ProgressRadial } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="space-y-8">
        <div class="md:max-w-[50%] lg:max-w-[33%] mx-auto space-y-8">
            <ProgressRadial value={props.value}>{props.value}%</ProgressRadial>
            <input type="range" min="0" max={props.max} step={props.step} bind:value={props.value}>
        </div>
    </Card>
    <section class="space-y-4">
        <div class="space-y-2">
            <h4>Indeterminate</h4>
            <p>Remove the value property to set to indeterminate mode.</p>
        </div>
        <div class="grid grid-cols-4 gap-4">
            <Card class="space-y-4">
                <ProgressRadial stroke={20}></ProgressRadial>
            </Card>
            <Card class="space-y-4">
                <ProgressRadial stroke={50} meter="stroke-primary-500" track="stroke-primary-500/20"></ProgressRadial>
            </Card>
            <Card class="space-y-4">
                <ProgressRadial stroke={100} meter="stroke-accent-500" track="stroke-accent-500/20"></ProgressRadial>
            </Card>
            <Card class="space-y-4">
                <ProgressRadial stroke={200} meter="stroke-warning-500" track="stroke-warning-500/20"></ProgressRadial>
            </Card>
        </div>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`
<ProgressRadial
    value={valueAmount}
    stroke={20}
    meter="stroke-primary-500"
    track="stroke-primary-500/20"
    color="fill-primary-500"
    fontsize="24"
>{valueAmount}%</ProgressRadial>
`.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <DataTable headings="{tableProps.headings}" source="{tableProps.source}"></DataTable>
    </section>

    <!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
        <DataTable headings="{tableSlots.headings}" source="{tableSlots.source}"></DataTable>
	</section>

</div>
