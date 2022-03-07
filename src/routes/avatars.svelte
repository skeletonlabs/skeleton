<script lang="ts">

import Avatar from "$lib/Avatar/Avatar.svelte";
import Card from "$lib/Card/Card.svelte";
import CodeBlock from "$lib/_CodeBlock/CodeBlock.svelte";
import Table from "$lib/_Table/Table.svelte";

const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['src', 'string', 'URL', '-', 'The image source to be used.'],
            ['size', 'string', 'sm | md | lg | xl', 'md', 'Set the size of the Avatar.'],
            ['outline', 'boolean', 'true | false', 'false', 'Use outlining.'],
            ['hover', 'boolean', 'true | false', 'false', 'Sets Avatar to be visually hover.'],
            ['filter', 'string', 'SVG filter ID', '-' , `<a href='https://css-tricks.com/almanac/properties/f/filter/' target="_blank">Applies an SVG filter ID using filter: url(#id)</a>`],
        ],
    };

</script>

<header class="mb-4">
	<h2 class="text-3xl font-bold mb-4">Avatars</h2>
	<p class="text-base opacity-70">
		The Avatar component is used to represent 
	</p>
</header>

<!-- Types -->
<Card>
    <h2>Types</h2>
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
            <Avatar size='xl' src='https://i.pravatar.cc/512' />
            <p class ='mt-2'>Image</p>
        </div>
        <div class='flex flex-col text-center'>
            <Avatar size='xl' hover src='https://i.pravatar.cc/512' />
            <p class ='mt-2'>Hover</p>
        </div>
        <div class='flex flex-col text-center'>
            <Avatar size='xl' filter="blur(5px)" src='https://i.pravatar.cc/512' />
            <p class ='mt-2'>SVG Filter</p>
        </div>
    </div>
</Card>

<div class='mb-6'></div>

<!-- Sizes -->
<Card>
    <h2>Sizes</h2>
    <div class='flex justify-evenly items-center'>
        <Avatar size='sm' />
        <Avatar size='md' />
        <Avatar size='lg' />
        <Avatar size='xl' />
        <br>
        <Avatar size='sm' src='https://i.pravatar.cc/512' />
        <Avatar size='md' src='https://i.pravatar.cc/512' />
        <Avatar size='lg' src='https://i.pravatar.cc/512' />
        <Avatar size='xl' src='https://i.pravatar.cc/512' />
    </div>
</Card>

<!-- Usage -->
<h3 class="text-2xl font-bold my-4">Usage</h3>
<CodeBlock class="mb-4">{`import {Avatar} from '@brainandbones/skeleton';\n\n<Avatar outlined src="{imgSrc}" size="md" filter="{svgFilterId}">`}</CodeBlock>

<!-- Properties -->
<h3 class="text-2xl font-bold my-4">Properties</h3>
<Table source="{tableProps}"></Table>