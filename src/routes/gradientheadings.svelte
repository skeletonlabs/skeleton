<script lang="ts">

    import GradientHeading from "$lib/GradientHeading/GradientHeading.svelte";
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/_CodeBlock/CodeBlock.svelte";
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

<header class="mb-4">
	<h2 class="text-3xl font-bold mb-4">Gradient Heading</h2>
	<p class="text-base opacity-70">Quickly make a gradient header with custom size and gradient direction.</p>
</header>

<section class="space-y-4">

    <!-- Types -->
    <h2 class="text-base font-bold">Types</h2>
    <Card>
        <div class='mb-2'>
            <p class='mb-2'>Regular</p>
            <GradientHeading direction='l'>Hello Skeleton!</GradientHeading>
        </div>

        <div class='mb-2'>
            <p class='mb-2'>Bright</p>
            <GradientHeading bright direction='l'>Hello Skeleton!</GradientHeading>
        </div>
    </Card>

    <!-- Sizes -->
    <h2 class="text-base font-bold">Sizes</h2>
    <Card class='flex justify-evenly items-center text-center'>
        <ul>
            <GradientHeading size='md' direction='t'>Hello Skeleton!</GradientHeading>
            <GradientHeading size='4xl' direction='t'>Hello Skeleton!</GradientHeading>
            <GradientHeading size='6xl' direction='t'>Hello Skeleton!</GradientHeading>
            <GradientHeading size='9xl' direction='t'>Hello Skeleton!</GradientHeading>
        </ul>
    </Card>

    <!-- Directions -->
    <h2 class="text-base font-bold">Direction Examples</h2>
    <Card>
        
        <p class='mb-2'>Top to bottom</p>
        <div class='p-2'>
            <GradientHeading direction='t'>Hello Skeleton!</GradientHeading>
        </div>
        <p class='mb-2'>Left to right</p>
        <div class='p-2'>
            <GradientHeading direction='r'>Hello Skeleton!</GradientHeading>
        </div>
        <p class='mb-2'>Top right to bottom left</p>
        <div class='p-2'>
            <GradientHeading size='4xl' direction='bl'>Hello Skeleton!</GradientHeading>
        </div>
        
    </Card>
</section>

<!-- Usage -->
<h3 class="text-2xl font-bold my-4">Usage</h3>
<CodeBlock class="mb-4">{`import {GradientHeading} from '@brainandbones/skeleton';\n\n<GradientHeading bright size='2xl' direction="l">{Text}</GradientHeading>`}</CodeBlock>

<!-- Properties -->
<h3 class="text-2xl font-bold my-4">Properties</h3>
<Table source="{tableProps}"></Table>