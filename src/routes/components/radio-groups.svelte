<script lang="ts">
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Card from "$lib/Card/Card.svelte";
    import RadioGroup from "$lib/RadioGroup/RadioGroup.svelte";

    // SVG Example
    const svgItems: any[] = [
        {label: 'One', value: 0},
        {label: 'Two', value: 1},
        {label: 'Three', value: 2},
    ];
    let svgActive: any = svgItems[0].value;
    // Another Example
    const anotherItems: any[] = [
        {label: 'Horizontal', value: 'horz'},
        {label: 'Vertical', value: 'vert'},
    ];
    let anotherActive: any = anotherItems[0].value;
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Radio Groups</h1>
		<p>Allows you to select an option from a group.</p>
		<CodeBlock language="js" code={`<script>import {RadioGroup} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
	</header>

    <!-- Sandbox -->
	<section class="flex space-x-4">
        <Card class="flex-auto space-y-2 text-center">
            <RadioGroup items={svgItems} bind:active={svgActive}></RadioGroup>
            <p>Index {JSON.stringify(svgActive, null, 2)}</p>
        </Card>
        <Card class="flex-auto space-y-2 text-center">
            <RadioGroup items={anotherItems} bind:active={anotherActive}></RadioGroup>
            <p>Selected {JSON.stringify(anotherActive, null, 2)}</p>
        </Card>
    </section>

    <!-- Usage -->
    <CodeBlock language="html" code={`<RadioGroup items={array} bind:active={ref}></RadioGroup>`}></CodeBlock>

</div>