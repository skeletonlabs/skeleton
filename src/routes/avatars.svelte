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

<div class="space-y-4">

    <!-- Header -->
    <header class="space-y-4">
        <h2 class="text-3xl font-bold">Avatars</h2>
        <p class="text-base text-surface-400">Choose from a variety for avatar sizes and styles. Include clean placeholders.</p>
    </header>
    
    <!-- Examples -->
    <section class="space-y-4">
        <h2 class="text-base font-bold">Display</h2>
        <Card>
            <div class='flex justify-evenly lg:flex-row'>
                <div class='flex flex-col text-center'>
                    <Avatar size='xl' />
                    <p class ='mt-2'>Placeholder</p>
                </div>
                <div class='flex flex-col text-center'>
                    <Avatar size='xl' src={placeholder} />
                    <p class ='mt-2'>Image</p>
                </div>
                <div class='flex flex-col text-center'>   
                    <Avatar size='xl' outlined src={placeholder} />
                    <p class ='mt-2'>Outlined</p>
                </div>
                <div class='flex flex-col text-center'>
                    <Avatar size='xl' hover src={placeholder} />
                    <p class ='mt-2'>Hover</p>
                </div>
                <!-- <div class='flex flex-col text-center'>
                    <Avatar size='xl' filter="blur(5px)" src={placeholder} />
                    <p class ='mt-2'>Filtered</p>
                </div> -->
            </div>
        </Card>
        <!-- Sizes -->
        <h2 class="text-base font-bold">Sizes</h2>
        <Card class='flex justify-evenly items-center'>
            <div><Avatar size='sm' src={placeholder} /><h3 class="text-small text-center">sm</h3></div>
            <div><Avatar size='md' src={placeholder} /><h3 class="text-small text-center">md</h3></div>
            <div><Avatar size='lg' src={placeholder} /><h3 class="text-small text-center">lg</h3></div>
            <div><Avatar size='xl' src={placeholder} /><h3 class="text-small text-center">xl</h3></div>
            <div><Avatar size='2xl' src={placeholder} /><h3 class="text-small text-center">2xl</h3></div>
            <div><Avatar size='3xl' src={placeholder} /><h3 class="text-small text-center">3xl</h3></div>
        </Card>
        <!-- Fluid -->
        <h2 class="text-base font-bold">Fluid</h2>
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
        <h3 class="text-2xl font-bold">Usage</h3>
        <CodeBlock
            language="html"
            code={`<script>import {Avatar} from '@brainandbones/skeleton';</\script>\n\n<Avatar outlined src="{imgSrc}" size="md" filter="{svgFilterId}">`}
        ></CodeBlock>
    </section>
    
    <!-- Properties -->
    <section class="space-y-4">
        <h3 class="text-2xl font-bold">Properties</h3>
        <Table source="{tableProps}"></Table>
    </section>

</div>