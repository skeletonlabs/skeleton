<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import DataTable from "$lib/Table/DataTable.svelte";
    import Avatar from "$lib/Avatar/Avatar.svelte";
    import Card from "$lib/Card/Card.svelte";

    // Props and Slots
    const tableProps: any = {
        headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        source: [
            ['background', 'string', 'bg-surface-200 dark:bg-surface-800', 'false', 'Provided a class to define background.'],
            ['color', 'string', '-', 'false', 'Provide a class to define text color.'],
        ],
    };
    const tableSlots: any = {
        headings: ['Name', 'Description'],
        source: [
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
        <CodeBlock language="javascript" code={`import { Card } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Examples -->
    <section class="space-y-4">
        <!-- Colors -->
        <div class="grid md:grid-cols-3 gap-4">
            <Card background="bg-primary-500" color="text-white" class="flex-1 flex justify-center items-center min-h-[100px]">Primary</Card>
            <Card background="bg-accent-500" color="text-white" class="flex-1 flex justify-center items-center min-h-[100px]">Accent</Card>
            <Card background="bg-warning-500" color="text-white" class="flex-1 flex justify-center items-center min-h-[100px]">Warning</Card>
        </div>
        <!-- Columns -->
        <div class="grid md:grid-cols-2 gap-4">
            <!-- Minimal -->
            <Card class="flex justify-center items-center min-h-[100px]">Minimal</Card>
            <!-- Detailed -->
            <Card class="cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl overflow-hidden">
                <svelte:fragment slot="header">
                    <div class="-mt-4 -mx-4">
                        <img src="https://source.unsplash.com/random/1280x540?skeleton" class="bg-black/50 w-full aspect-[21/9]" alt="Post">
                    </div>
                </svelte:fragment>
                <div class="space-y-4">
                    <h6 class="text-primary-500">Announcements</h6>
                    <h4>Welcome to Skeleton</h4>
                    <article class="text-surface-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.</article>
                </div>
                <svelte:fragment slot="footer">
                    <div class="flex justify-start items-center space-x-4">
                        <Avatar src="https://i.pravatar.cc/160?img=5" size="sm" outlined />
                        <div>
                            <h6 class="font-bold">By Alex</h6>
                            <p>On {new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                </svelte:fragment>
            </Card>
        </div>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`<Card>Minimal</Card>`}></CodeBlock>
        <CodeBlock language="html" code={`<Card background="bg-primary-500" color="text-white">Colored</Card>`}></CodeBlock>
        <CodeBlock language="html" code={`<Card class="hover:shadow-xl">Styled</Card>`}></CodeBlock>
    </section>

    <!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
        <DataTable headings="{tableProps.headings}" source="{tableProps.source}"></DataTable>
	</section>
	
	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
        <DataTable headings="{tableSlots.headings}" source="{tableSlots.source}"></DataTable>
	</section>
    
</div>
