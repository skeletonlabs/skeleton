<script lang="ts">

import Avatar from "$lib/Avatar/Avatar.svelte";
import Card from "$lib/Card/Card.svelte";
import CodeBlock from "$lib/_CodeBlock/CodeBlock.svelte";
import Table from "$lib/_Table/Table.svelte";

const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['src', 'string', 'URL', '-', 'The image source to be used.'],
            ['size', 'string', 'small | medium | large | xlarge', 'medium', 'Set the size of the Avatar.'],
            ['outline', 'boolean', 'true | false', 'false', 'Use outlining.'],
            ['interactive', 'boolean', 'true | false', 'false', 'Sets Avatar to be visually interactive.'],
        ],
    };

</script>

<header class="mb-4">
	<h2 class="text-3xl font-bold mb-4">Avatars</h2>
	<p class="text-base opacity-70">
		Avatars .... describe here..
	</p>
</header>

<!-- Types -->
<Card>
    <h2>Types</h2>
    <div class='flex justify-evenly'>
        <div class='flex flex-col text-center'>
            
            <Avatar size='xlarge' />
            <p class ='mt-2'>Placeholder</p>
        </div>
        <div class='flex flex-col text-center'>
            
            <Avatar size='xlarge' outlined />
            <p class ='mt-2'>Outlined</p>
        </div>
        <div class='flex flex-col text-center'>
           
            <Avatar size='xlarge' src='https://i.pravatar.cc/512' />
            <p class ='mt-2'>Image</p>
        </div>
        <div class='flex flex-col text-center'>
            
            <Avatar size='xlarge' interactive src='https://i.pravatar.cc/512' />
            <p class ='mt-2'>Interactive</p>
        </div>
    </div>
</Card>

<div class='mb-6'></div>

<!-- Sizes -->
<Card>
    <h2>Sizes</h2>
    <div class='flex justify-evenly items-center'>
        <Avatar size='small' />
        <Avatar size='medium' />
        <Avatar size='large' />
        <Avatar size='xlarge' />
        <br>
        <Avatar size='small' src='https://i.pravatar.cc/512' />
        <Avatar size='medium' src='https://i.pravatar.cc/512' />
        <Avatar size='large' src='https://i.pravatar.cc/512' />
        <Avatar size='xlarge' src='https://i.pravatar.cc/512' />
    </div>
</Card>

<!-- Usage -->
<h3 class="text-2xl font-bold my-4">Usage</h3>
<CodeBlock class="mb-4">{`import {Avatar} from '@brainandbones/skeleton';\n\n<Avatar outlined img="image_source_url" size="medium">`}</CodeBlock>

<!-- Properties -->
<h3 class="text-2xl font-bold my-4">Properties</h3>
<Table source="{tableProps}"></Table>