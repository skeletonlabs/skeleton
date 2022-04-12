<script lang='ts'>
    import Alert from "$lib/Alert/Alert.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Table from "$lib/_Table/Table.svelte"
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte"
    import Button from "$lib/Button/Button.svelte";

    let icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"/></svg>'

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Required', 'Description'],
        data: [
            ['color', 'string', 'Tailwind class', '-', 'false' , 'Set the color of the alert by a Tailwind class.'],
            ['textColor', 'string', 'Tailwind class', '-', 'false' , 'Specify the text color'],
            ['radius', 'string', 'Tailwind class', '-', 'false', 'Set the rounding of the alert.'],
            ['visible', 'boolean', 'true | false', 'true', 'false', 'Use this prop to control visibility of the component']
        ],
    };

    const slotProps: any = {
        columns: ['Slot', 'Required', 'Description'],
        data: [
            ['lead', 'false', 'Specify a leading element on the alert, such as an icon.'],
            ['title','true','Specify the title of the alert.'],
            ['message', 'false', 'Specify the body message of the alert.'],
            ['trail', 'false', 'Set trailing elements such as buttons.']
        ]
    }

    let title = 'What`s new in Skeleton?';
    let message = 'Check out the countless new features and components in the Skeleton Library. Check out the countless new features and components in the Skeleton Library. Check out the countless new features and components in the Skeleton Library.';

    $: visible = true;

</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Alerts</h1>
        <p>Make alerts that stand out with different warning levels and custom actions.</p>
    </header>
    
    <!-- Examples -->
    <section class="space-y-4">
        <Card class="space-y-4">
            <h6>Title + Message + Buttons</h6>
            <Alert visible={visible}>
                <svelte:fragment slot='title'>{title}</svelte:fragment>
                <svelte:fragment slot='message'>{message}</svelte:fragment>
                <svelte:fragment slot='trail'>
                    <Button size='sm' on:click={()=>{visible = false;}} variant='filled'>Dismiss</Button>
                    <Button size='sm' variant='filled'>Action</Button>
                </svelte:fragment>
            </Alert>
            <h6>Title only</h6>
            <Alert>
                <svelte:fragment slot='title'>{title}</svelte:fragment>      
                <svelte:fragment slot='trail'>
                    <Button size='sm' variant='filled' class='whitespace-nowrap'>Show Me</Button>
                </svelte:fragment>
            </Alert>
            <h6>Custom color + leading icon</h6>
            <Alert color='bg-primary-500' textColor='text-surface-900'>
                <svelte:fragment slot='lead'>{@html icon}</svelte:fragment>
                <svelte:fragment slot='title'>{title}</svelte:fragment>
                <svelte:fragment slot='message'>{message}</svelte:fragment>      
                <svelte:fragment slot='trail'>
                    <Button size='sm' variant='filled' class='whitespace-nowrap'>Show Me</Button>
                </svelte:fragment>
            </Alert>
            <h6>Rounding</h6>
            <Alert color='bg-warning-400' textColor='text-surface-900' radius='rounded-lg'>
                <svelte:fragment slot='title'>{title}</svelte:fragment>
                <svelte:fragment slot='message'>{message}</svelte:fragment>      
            </Alert>
        </Card>
    </section>
    
    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <h6>Script</h6>
        <CodeBlock language="javascript" code="{`<script>import Alert from '@brainandbones/skeleton';</\script>`}"></CodeBlock>
        <h6>HTML</h6>
        <CodeBlock language="html" code="{`<Alert color='bg-primary-500'>\n   <svelte:fragment slot='title'>{title}</svelte:fragment> \n   <svelte:fragment slot='message'>{body}</svelte:fragment>\n</Alert>`}"></CodeBlock>
    </section>
    
    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2>Slots</h2>
        <Table source="{slotProps}"></Table>
    </section>

</div>