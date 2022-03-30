<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Table from "$lib/_Table/Table.svelte";
    import Avatar from "$lib/Avatar/Avatar.svelte";
    import Card from "$lib/Card/Card.svelte";

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['background', 'string', 'bg-surface-200 dark:bg-surface-800', 'false', 'Provided a class to define background.'],
            ['color', 'string', '-', 'false', 'Provide a class to define text color.'],
        ],
    };
    const tableSlots: any = {
        columns: ['Name', 'Description'],
        data: [
            ['header', 'Reserved space for header content, such as an image.'],
            ['footer', 'Reserved space for footer content, such as a byline.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Cards</h2>
        <p>Container elements that wrap and seperate your content.</p>
    </header>

    <!-- Examples -->
    <section class="grid grid-cols-3 gap-4">
        <Card class="flex justify-center items-center">Minimal</Card>
        <Card class="cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl">
            <svelte:fragment slot="header">
                <img src="https://source.unsplash.com/random/960x540" class="bg-black aspect-video w-full" alt="Post">
            </svelte:fragment>
            <div class="space-y-4">
                <h6 class="text-primary-500">Announcements</h6>
                <h4>Mixing Tailwind classes and adding body content.</h4>
                <article class="text-surface-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.</article>
            </div>
            <svelte:fragment slot="footer">
                <div class="flex justify-start items-center px-4 pb-4 space-x-4">
                    <Avatar src="https://i.pravatar.cc/160" size="sm" outlined />
                    <div>
                        <h6 class="font-bold">By Person</h6>
                        <p>On October 1st, 1983</p>
                    </div>
                </div>
            </svelte:fragment>
        </Card>
        <div class="flex flex-col space-y-4">
            <Card background="bg-primary-500" color="text-white" class="flex-1 flex justify-center items-center">Primary</Card>
            <Card background="bg-accent-500" color="text-white" class="flex-1 flex justify-center items-center">Accent</Card>
            <Card background="bg-warning-500" color="text-white" class="flex-1 flex justify-center items-center">Warning</Card>
        </div>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h3 class="text-2xl font-bold">Usage</h3>
        <CodeBlock language="javascript" code={`<script>import {Card} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
        <CodeBlock language="html" code={`<Card>Minimal</Card>`}></CodeBlock>
        <CodeBlock language="html" code={`<Card background="bg-primary-500" color="text-white">Colored</Card>`}></CodeBlock>
        <CodeBlock language="html" code={`<Card class="hover:shadow-xl">Styled</Card>`}></CodeBlock>
    </section>

    <!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<Table source="{tableProps}"></Table>
	</section>
	
	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<Table source="{tableSlots}"></Table>
	</section>
    
</div>
