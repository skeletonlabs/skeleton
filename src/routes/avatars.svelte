<script lang="ts">

    import Avatar from "$lib/Avatar/Avatar.svelte";
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/_CodeBlock/CodeBlock.svelte";
    import Table from "$lib/_Table/Table.svelte";

    const placeholder: string = 'https://i.pravatar.cc/160';
    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['src', 'string', 'URL', '-', 'The image source to be used.'],
            ['size', 'string', 'sm | md | lg | xl | 2xl | 3xl', 'full width', 'Set the size of the Avatar.'],
            ['outline', 'boolean', 'true | false', 'false', 'Use outlining.'],
            ['hover', 'boolean', 'true | false', 'false', 'Sets Avatar to be visually hover.'],
            ['filter', 'string', 'SVG filter ID', '-' , `<a href='https://css-tricks.com/almanac/properties/f/filter/' target="_blank">Applies an SVG filter ID using filter: url(#id)</a>`],
        ],
    };

</script>

<header class="mb-4">
	<h2 class="text-3xl font-bold mb-4">Avatars</h2>
	<p class="text-base opacity-70">Choose from a variety for avatar sizes and styles. Include clean placeholders.</p>
</header>

<section class="space-y-4">

    <!-- Types -->
    <h2 class="text-base font-bold">Types</h2>
    <Card>
        <div class='flex justify-evenly lg:flex-row'>
            <div class='flex flex-col text-center'>
                <Avatar size='xl' />
                <p class ='mt-2'>Placeholder</p>
            </div>
            <div class='flex flex-col text-center'>   
                <Avatar size='xl' outlined />
                <p class ='mt-2'>Outlined</p>
            </div>
            <div class='flex flex-col text-center'>
                <Avatar size='xl' src={placeholder} />
                <p class ='mt-2'>Image</p>
            </div>
            <div class='flex flex-col text-center'>
                <Avatar size='xl' hover src={placeholder} />
                <p class ='mt-2'>Hover</p>
            </div>
            <div class='flex flex-col text-center'>
                <Avatar size='xl' filter="blur(5px)" src={placeholder} />
                <p class ='mt-2'>Filtered</p>
            </div>
        </div>
    </Card>

    <!-- Sizes -->
    <h2 class="text-base font-bold">Sizes</h2>
    <Card class='flex justify-evenly items-center'>
        <div>
            <Avatar size='sm' />
            <h3 class="text-small text-center mt-2">sm</h3>
        </div>
        <div>
            <Avatar size='md' />
            <h3 class="text-small text-center mt-2">md</h3>
        </div>
        <div>
            <Avatar size='lg' />
            <h3 class="text-small text-center mt-2">lg</h3>
        </div>
        <div>
            <Avatar size='xl' />
            <h3 class="text-small text-center mt-2">xl</h3>
        </div>
        <div>
            <Avatar size='2xl' />
            <h3 class="text-small text-center mt-2">2xl</h3>
        </div>
        <div>
            <Avatar size='3xl' />
            <h3 class="text-small text-center mt-2">3xl</h3>
        </div>
    </Card>
    <Card class='flex justify-evenly items-center'>
        <Avatar size='sm' src={placeholder} />
        <Avatar size='md' src={placeholder} />
        <Avatar size='lg' src={placeholder} />
        <Avatar size='xl' src={placeholder} />
        <Avatar size='2xl' src={placeholder} />
        <Avatar size='3xl' src={placeholder} />
    </Card>
    <Card class='grid grid-cols-5 gap-4'>
        <Avatar src={`${placeholder}?img=1`} />
        <Avatar src={`${placeholder}?img=2`} />
        <Avatar src={`${placeholder}?img=3`} />
        <Avatar src={`${placeholder}?img=4`} />
        <Avatar src={`${placeholder}?img=5`} />
    </Card>

</section>

<!-- Usage -->
<h3 class="text-2xl font-bold my-4">Usage</h3>
<CodeBlock class="mb-4">{`import {Avatar} from '@brainandbones/skeleton';\n\n<Avatar outlined src="{imgSrc}" size="md" filter="{svgFilterId}">`}</CodeBlock>

<!-- Properties -->
<h3 class="text-2xl font-bold my-4">Properties</h3>
<Table source="{tableProps}"></Table>