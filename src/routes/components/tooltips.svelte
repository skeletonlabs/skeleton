<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Table from "$lib/Table/Table.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Button from '$lib/Button/Button.svelte';
    import Tooltip from '$lib/Tooltip/Tooltip.svelte';

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Description'],
        data: [
            ['background', 'string', 'bg-black dark:bg-white', 'Provide a class to set background color.'],
            ['color', 'string', 'text-white dark:text-black', 'Provide a class to set text color.'],
            ['width', 'string', 'w-auto', 'Provide a class to set tooltip width.'],
            ['whitespace', 'string', 'whitespace-nowrap', 'Provide a class to set tooltip white-space.'],
            ['duration', 'number', '150', 'Animation fade in/out duration in milliseconds.'],
        ],
    };
    const tableSlots: any = {
        columns: ['Name', 'Description'],
        data: [
            ['message', 'The tooltip message. Supports full markup.'],
            ['content', 'The content that will trigger the tooltip.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Tooltips</h2>
        <p>Informative tooltips that render on mouse over.</p>
        <CodeBlock language="javascript" code={`<script>import {Component} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="flex justify-center space-x-4">
        <!-- Default -->
        <Tooltip>
            <svelte:fragment slot="message">This is a tooltip.</svelte:fragment>
            <svelte:fragment slot="content"><Button variant="ghost">Default</Button></svelte:fragment>
        </Tooltip>
        <!-- Expanded -->
        <Tooltip width="w-[300px]" whitespace="whitespace-normal">
            <svelte:fragment slot="message">
                <h6 class="mb-2">Expanded Tooltip</h6>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati id atque laboriosam provident eum facere, architecto veniam, sed blanditiis quibusdam, maiores laborum veritatis voluptatum repellat vitae? Cum aut sed totam.
            </svelte:fragment>
            <svelte:fragment slot="content">
                <Button variant="ghost">Expanded</Button>
            </svelte:fragment>
        </Tooltip>
        <!-- Styled -->
        <Tooltip background="bg-accent-500" color="text-white">
            <svelte:fragment slot="message">
                <span class="text-base">Hello, Skeleton 💀</span>
            </svelte:fragment>
            <svelte:fragment slot="content">
                <Button variant="ghost">Styled</Button>
            </svelte:fragment>
        </Tooltip>
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`
<Tooltip>
    <svelte:fragment slot="message">This is a tooltip.</svelte:fragment>
    <svelte:fragment slot="content"><Button variant="ghost">Default</Button></svelte:fragment>
</Tooltip>
        `.trim()}></CodeBlock>
        <h4>Customized</h4>
        <CodeBlock language="html" code={`
<Tooltip background="bg-accent-500" color="text-white">
    <svelte:fragment slot="message">
        <h6 class="mb-2">Customized</h6>
        This is a tooltip.
    </svelte:fragment>
    <svelte:fragment slot="content">
        <Button variant="ghost">Styled</Button>
    </svelte:fragment>
</Tooltip>
        `.trim()}></CodeBlock>
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
