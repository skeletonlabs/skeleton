<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Table from "$lib/Table/Table.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Button from '$lib/Button/Button.svelte';
    import { Alert } from '$lib';
    import Tooltip from '$lib/Tooltip/Tooltip.svelte';

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Values', 'Description'],
        data: [
            ['position', 'string', 'top', 'top | bottom | left | right', 'The side in which the message will appear.'],
            ['background', 'string', 'bg-black dark:bg-white', 'class', 'Provide a class to set background color.'],
            ['color', 'string', 'text-white dark:text-black', 'class', 'Provide a class to set text color.'],
            ['width', 'string', 'w-auto', 'class', 'Provide a class to set tooltip width.'],
            ['whitespace', 'string', 'whitespace-nowrap', 'class', 'Provide a class to set tooltip white-space.'],
            ['rounded', 'string', 'rounded', 'class', 'Provide a class to set tooltip rounded style.'],
            ['duration', 'number', '150', 'integer', 'Animation fade in/out duration in milliseconds. Set 0 (zero) to disable.'],
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
        <CodeBlock language="javascript" code={`import { Tooltip } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Alert background="bg-warning-500" class="sm:hidden">
        <svelte:fragment slot="title">Warning</svelte:fragment>
        <svelte:fragment slot="message">Tooltips require hover mouse events. They should not be used for mobile.</svelte:fragment>
    </Alert>
    <section class="hidden sm:block space-y-4">
        <!-- Default -->
        <Card class="flex flex-col space-y-2">
            <section class="flex justify-center">
                <Tooltip>
                    <svelte:fragment slot="message">Tooltip on Top.</svelte:fragment>
                    <svelte:fragment slot="content"><Button variant="ghost" width="w-[90px]">Top</Button></svelte:fragment>
                </Tooltip>
            </section>
            <section class="flex justify-center space-x-2">
                <Tooltip position="left">
                    <svelte:fragment slot="message">Tooltip on Left.</svelte:fragment>
                    <svelte:fragment slot="content"><Button variant="ghost" width="w-[90px]">Left</Button></svelte:fragment>
                </Tooltip>
                <Card class="flex justify-center">
                    <Tooltip background="bg-accent-500" color="text-primary-200" width="w-[300px]" whitespace="whitespace-normal" rounded="rounded-xl" duration={0}>
                        <svelte:fragment slot="message">
                            <h4 class="mb-1">Hello, Skeleton 💀</h4>
                            <span class="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati id atque laboriosam provident eum facere, architecto veniam.</span>
                        </svelte:fragment>
                        <svelte:fragment slot="content">
                            <Button variant="ghost-accent" width="w-[90px]">Styled</Button>
                        </svelte:fragment>
                    </Tooltip>
                </Card>
                <Tooltip position="right">
                    <svelte:fragment slot="message">Tooltip on Right.</svelte:fragment>
                    <svelte:fragment slot="content"><Button variant="ghost" width="w-[90px]">Right</Button></svelte:fragment>
                </Tooltip>
            </section>
            <section class="flex justify-center">
                <Tooltip position="bottom">
                    <svelte:fragment slot="message">Tooltip on Bottom.</svelte:fragment>
                    <svelte:fragment slot="content"><Button variant="ghost" width="w-[90px]">Bottom</Button></svelte:fragment>
                </Tooltip>
            </section>
        </Card>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`
<Tooltip>
    <svelte:fragment slot="message">This is a basic tooltip.</svelte:fragment>
    <svelte:fragment slot="content"><Button variant="ghost">Default</Button></svelte:fragment>
</Tooltip>
        `.trim()}></CodeBlock>
        <h4>Styled</h4>
        <CodeBlock language="html" code={`
<Tooltip background="bg-accent-500" color="text-primary-200" width="w-[300px]" whitespace="whitespace-normal" rounded="rounded-xl" duration={0}>
    <svelte:fragment slot="message">
        <h4 class="mb-1">Hello, Skeleton 💀</h4>
        <span class="text-xs text-white/60">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati id atque laboriosam provident eum facere, architecto veniam.</span>
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
