<script lang="ts">
    import Avatar from "$lib/Avatar/Avatar.svelte";
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Table from "$lib/_Table/Table.svelte";

    const placeholder: string = 'https://i.pravatar.cc/160';
    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['src', 'string', 'URL', '-', 'The image source to be used.'],
            ['size', 'string', 'sm | md | lg | xl | 2xl | 3xl', 'full width', 'Canned sizes. When not preset this will be fluid.'],
            ['outline', 'boolean', 'true | false', 'false', 'Display a fixed outline of the primary color.'],
            ['hover', 'boolean', 'true | false', 'false', 'Adds an outline of the primary color when hovered.'],
            // ['filter', 'string', 'SVG filter ID', '-' , `<a href='https://css-tricks.com/almanac/properties/f/filter/' target="_blank">Applies an SVG filter ID using filter: url(#id)</a>`],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Avatars</h1>
        <p>Choose from a variety for avatar sizes and styles. Include clean placeholders.</p>
    </header>
    
    <!-- Examples -->
    <section class="space-y-4">
        <h4>Display</h4>
        <Card class='flex justify-evenly items-center text-center lg:flex-row'>
            <div><Avatar size='xl' /><p class='mt-2'>Placeholder</p></div>
            <div><Avatar size='xl' src={placeholder} /><p class='mt-2'>Image</p></div>
            <div><Avatar size='xl' outlined src={placeholder} /><p class='mt-2'>Outlined</p></div>
            <div><Avatar size='xl' hover src={placeholder} /><p class='mt-2'>Hover</p></div>
            <!-- <div class='flex flex-col text-center'><Avatar size='xl' filter="blur(5px)" src={placeholder} /><p class='mt-2'>Filtered</p></div> -->
        </Card>
        <!-- Sizes -->
        <h4>Sizes</h4>
        <Card class='flex justify-evenly items-center text-center lg:flex-row'>
            <div><Avatar size='sm' src={placeholder} /><p class="mt-2">sm</p></div>
            <div><Avatar size='md' src={placeholder} /><p class="mt-2">md</p></div>
            <div><Avatar size='lg' src={placeholder} /><p class="mt-2">lg</p></div>
            <div><Avatar size='xl' src={placeholder} /><p class="mt-2">xl</p></div>
            <div><Avatar size='2xl' src={placeholder} /><p class="mt-2">2xl</p></div>
            <div><Avatar size='3xl' src={placeholder} /><p class="mt-2">3xl</p></div>
        </Card>
        <!-- Fluid -->
        <h4>Fluid</h4>
        <Card class='grid grid-cols-5 gap-4'>
            <Avatar src={`${placeholder}?img=1`} />
            <Avatar src={`${placeholder}?img=2`} />
            <Avatar src={`${placeholder}?img=3`} />
            <Avatar src={`${placeholder}?img=4`} />
            <Avatar src={`${placeholder}?img=5`} />
        </Card>
    </section>
    
    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock
            language="html"
            code={`<script>import {Avatar} from '@brainandbones/skeleton';</\script>\n\n<Avatar outlined src="{imgSrc}" size="md" filter="{svgFilterId}" />`}
        ></CodeBlock>
    </section>
    
    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>