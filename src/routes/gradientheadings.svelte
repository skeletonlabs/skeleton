<script lang="ts">

    import GradientHeading from "$lib/GradientHeading/GradientHeading.svelte";
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/_CodeBlock/CodeBlock.svelte";
    import Table from "$lib/_Table/Table.svelte";

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['src', 'string', 'URL', '-', 'The image source to be used.'],
            ['size', 'string', 'sm | md | lg | xl | 2xl | 3xl', 'full width', 'Set the size of the Avatar.'],
        ],
    };

</script>

<header class="mb-4">
	<h2 class="text-3xl font-bold mb-4">Gradient Heading</h2>
	<p class="text-base opacity-70">Quickly make a gradient header. Set direction and size</p>
</header>

<section class="space-y-4">

    <!-- Sizes -->
    <h2 class="text-base font-bold">Sizes</h2>
    <Card class='flex justify-evenly items-center text-center'>
        <ul>
            <GradientHeading size='2xl' direction='t'>Hello Skeleton!</GradientHeading>
            <GradientHeading size='3xl' direction='t'>Hello Skeleton!</GradientHeading>
            <GradientHeading size='4xl' direction='t'>Hello Skeleton!</GradientHeading>
        </ul>
    </Card>

    <!-- Directions -->
    <h2 class="text-base font-bold">Direction</h2>
    <Card class='flex justify-evenly items-center'>
        <GradientHeading size='4xl' direction='t'>Hello Skeleton!</GradientHeading>
    </Card>
</section>

<!-- Usage -->
<h3 class="text-2xl font-bold my-4">Usage</h3>
<CodeBlock class="mb-4">{`import {Avatar} from '@brainandbones/skeleton';\n\n<Avatar outlined src="{imgSrc}" size="md" filter="{svgFilterId}">`}</CodeBlock>

<!-- Properties -->
<h3 class="text-2xl font-bold my-4">Properties</h3>
<Table source="{tableProps}"></Table>