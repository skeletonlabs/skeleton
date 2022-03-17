<script lang="ts">
    import GradientHeading from "$lib/GradientHeading/GradientHeading.svelte";
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Table from "$lib/_Table/Table.svelte";

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['size', 'string', 'sm | md | lg | xl | 2xl -> 9xl', '4xl', 'The font size to be used.'],
            ['direction', 'string', 't | b | l | r | tl | tr | bl | br', 't', 'Set the direction of the gradient. Abbreviated as tl would equal top left'],
            ['bright', 'boolean', 'true | false', 'false', 'Use bright mode']
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Gradient Heading</h1>
        <p >Quickly make a gradient header with custom size and gradient direction.</p>
    </header>
    
    <!-- Examples -->
    <section class="space-y-4">
        <h4>Display</h4>
        <Card class='space-y-4'>
            <h6>Regular</h6>
            <GradientHeading direction='l'>Hello Skeleton!</GradientHeading>
            <h6>Bright</h6>
            <GradientHeading bright direction='l'>Hello Skeleton!</GradientHeading>
        </Card>
        <h4>Sizes</h4>
        <Card class='space-y-4'>
            <GradientHeading size='md' direction='t'>Hello Skeleton!</GradientHeading>
            <GradientHeading size='4xl' direction='t'>Hello Skeleton!</GradientHeading>
            <GradientHeading size='6xl' direction='t'>Hello Skeleton!</GradientHeading>
            <GradientHeading size='8xl' direction='t'>Hello Skeleton!</GradientHeading>
        </Card>
        <h4>Direction Examples</h4>
        <Card class="space-y-4">
            <h6>Top to bottom</h6>
            <GradientHeading direction='t'>Hello Skeleton!</GradientHeading>
            <h6>Left to right</h6>
            <GradientHeading direction='r'>Hello Skeleton!</GradientHeading>
            <h6>Top right to bottom left</h6>
            <GradientHeading size='4xl' direction='bl'>Hello Skeleton!</GradientHeading>
        </Card>
    </section>
    
    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="javascript" code="{`<script>import {GradientHeading} from '@brainandbones/skeleton';</\script>`}"></CodeBlock>
        <CodeBlock language="html" code="{`<GradientHeading bright size='2xl' direction="l">{Text}</GradientHeading>`}"></CodeBlock>
    </section>
    
    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>