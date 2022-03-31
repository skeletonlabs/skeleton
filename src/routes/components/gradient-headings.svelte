<script lang="ts">
    import GradientHeading from "$lib/GradientHeading/GradientHeading.svelte";
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Table from "$lib/Table/Table.svelte";

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['from', 'string', 'class', 'from-primary-500', 'Provide a Tailwind "from-" class.'],
            ['to', 'string', 'class', 'to-accent-500', 'Provide a Tailwind "to-" class.'],
            ['size', 'string', 'sm | md | lg | xl | 2xl | ... | 9xl', '4xl', 'The font size to be used.'],
            ['direction', 'string', 't | b | l | r | tl | tr | bl | br', 't', 'Abbreviated direction of the gradient.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Gradient Heading</h1>
        <p>Quickly add a gradient header with customizable size and gradient direction.</p>
        <CodeBlock language="javascript" code="{`<script>import {GradientHeading} from '@brainandbones/skeleton';</\script>`}"></CodeBlock>
    </header>
    
    <!-- Examples -->
    <section class="space-y-4">
        <Card class="space-y-4">
            <GradientHeading size="sm">Skeleton sm</GradientHeading>
            <GradientHeading size="md">Skeleton md</GradientHeading>
            <GradientHeading size="lg">Skeleton lg</GradientHeading>
            <GradientHeading size="xl">Skeleton xl</GradientHeading>
            <GradientHeading size="2xl">Skeleton 2xl</GradientHeading>
            <GradientHeading size="3xl">Skeleton 3xl</GradientHeading>
            <GradientHeading size="4xl">Skeleton 4xl</GradientHeading>
            <GradientHeading size="5xl">Skeleton 5xl</GradientHeading>
            <GradientHeading size="6xl">Skeleton 6xl</GradientHeading>
            <GradientHeading size="7xl">Skeleton 7xl</GradientHeading>
            <GradientHeading size="8xl">Skeleton 8xl</GradientHeading>
            <GradientHeading size="9xl">Skeleton 9xl</GradientHeading>
        </Card>
        <h4>Gradient Directions</h4>
        <Card class="space-y-4">
            <h6>Top to Bottom</h6>
            <GradientHeading direction="t">Hello Skeleton!</GradientHeading>
            <h6>Left to Right</h6>
            <GradientHeading direction="r">Hello Skeleton!</GradientHeading>
            <h6>Top-Right to Bottom-Left</h6>
            <GradientHeading size="4xl" direction="bl">Hello Skeleton!</GradientHeading>
        </Card>
        <h4>Colors</h4>
        <Card class="space-y-4">
            <h6>Rose-500 to Blue-500</h6>
            <GradientHeading from="from-rose-500" to="to-blue-500">Hello Skeleton!</GradientHeading>
        </Card>
    </section>
    
    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code="{`<GradientHeading from="from-rose-500" to="to-blue-500" size="6xl" direction="l">{Text}</GradientHeading>`}"></CodeBlock>
    </section>
    
    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>