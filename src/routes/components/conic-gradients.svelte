<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Table from "$lib/Table/Table.svelte";
    import ConicGradient from "$lib/ConicGradient/ConicGradient.svelte";

    // Examples
    const dataOne: any[] = [
        {label: 'Red', swathe: {color: 'red', weight: 500}, start: 0, end: 35},
        {label: 'Green', swathe: {color: 'green', weight: 500}, start: 35, end: 60},
        {label: 'Blue', swathe: {color: 'blue', weight: 500}, start: 60, end: 100},
    ];
    let dataTwo: any[] = [
        {label: 'Orange', swathe: {color: 'orange', weight: 500}, start: 0, end: 10},
        {label: 'Yellow', swathe: {color: 'yellow', weight: 500}, start: 10, end: 35},
        {label: 'Red', swathe: {color: 'red', weight: 500}, start: 35, end: 100},
    ];
    const dataThree: any[] = [
        {swathe: {color: 'transparent'}, start: 0, end: 25},
        {swathe: {color: 'white', weight: 500}, start: 75, end: 100},
    ];

    // Props & Slots
    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['data', 'any[]', '(filled 100%)', 'true', 'Provide your data set.'],
            ['legend', 'boolean', 'false', 'false', 'Enables a simple pie chart legend.'],
            ['width', 'string', 'w-full', 'false', 'Provided a class to define the width.'],
        ],
    };
    const tableSlots: any = {
        columns: ['Name', 'Description'],
        data: [
            ['default', 'Allows you to define a label, description, or other suplimentary information.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Conic Gradient</h1>
        <p>Create conic gradient visualizations for pie charts, loading spinners, and more.</p>
        <CodeBlock language="javascript" code={`<script>import {ConicGradient} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <section class="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
        <Card><ConicGradient data={dataOne} legend={true}></ConicGradient></Card>
        <Card>
            <ConicGradient data={dataTwo} legend={true}>
                <h4>Heat Map</h4>
            </ConicGradient>
        </Card>
        <Card class="flex justify-center items-center">
            <ConicGradient data={dataThree} width="w-8" class="animate-spin">
                <small class="opacity-50">Loading</small>
            </ConicGradient>
        </Card>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <p>Please note that only default Tailwind color values are currently supported, with the exception of 'white', 'black', and 'transparent'. Weight is optional for these three values.</p>
        <h4>Pie Chart</h4>
        <CodeBlock language="html" code={`<ConicGradient data={dataSet} legend={true}></ConicGradient>`}></CodeBlock>
        <CodeBlock language="js" code={`
const dataSet: any[] = [
    {label: 'Emerald', swathe: {color: 'emerald', weight: 500}, start: 0, end: 35},
    {label: 'Indigo', swathe: {color: 'indigo', weight: 500}, start: 35, end: 60},
    {label: 'Rose', swathe: {color: 'rose', weight: 500}, start: 60, end: 100},
];
        `.trim()}></CodeBlock>
        <h4>Spinner</h4>
        <CodeBlock language="html" code={`
<ConicGradient data={dataSet} width="w-8" class="animate-spin">
    <small>Loading</small>    
</ConicGradient>
        `.trim()}></CodeBlock>
        <CodeBlock language="js" code={`
const dataSet: any[] = [
    {swathe: {color: 'transparent'}, start: 0, end: 25},
    {swathe: {color: 'slate', weight: 500}, start: 75, end: 100},
];
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