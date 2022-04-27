<script lang='ts'>
    import Card from "$lib/Card/Card.svelte";
    import Table from "$lib/Table/Table.svelte"
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte"
    import Button from "$lib/Button/Button.svelte";
    import Alert from "$lib/Alert/Alert.svelte";

    let icon = '<svg class="fill-white w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"/></svg>';
    let title = `What's New in Skeleton?`;
    let message = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, cupiditate eveniet in neque magnam quos ad cumque quae numquam voluptatum magni atque vitae dolore voluptatibus aliquam tempora! Animi, nihil quo.';

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Required', 'Description'],
        data: [
            ['visible', 'boolean', 'true | false', 'true', 'false', 'Control visibility of the component.'],
            ['duration', 'number', 'milliseconds', '200', 'false', 'Control the fade in/out animation speed. Set 0 (zero) to disable.'],
            ['background', 'string', 'class', 'bg-surface-500', 'false' , 'Provide a class that sets the background color.'],
            ['color', 'string', 'class', 'text-white', 'false' , 'Provide a class that sets the text color.'],
            ['radius', 'string', 'class', 'rounded-lg', 'false', 'Provide a class that sets the border radius.'],
        ],
    };
    const slotProps: any = {
        columns: ['Slot', 'Required', 'Description'],
        data: [
            ['lead', 'false', 'Specify a leading position element, such as an icon.'],
            ['title','true', 'Specify the title of the alert.'],
            ['message', 'false', 'Specify the body message of the alert.'],
            ['trail', 'false', 'Set trailing elements such as buttons.']
        ]
    }

    function toggleVisible(): void { visible = !visible; }
    function actionExample(): void { alert('Action Triggered!'); }

    $: visible = true;
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Alerts</h1>
        <p>Display customizable alerts to grab attention and provide critical actions.</p>
        <CodeBlock language="javascript" code="{`<script>import Alert from '@brainandbones/skeleton';</\script>`}"></CodeBlock>
    </header>
    
    <!-- Examples -->
    <Card class="space-y-4">
        {#if !visible}<Button variant="ghost" on:click={toggleVisible}>Enable Alerts</Button>{/if}
        <Alert {visible}>
            <svelte:fragment slot="title">{title}</svelte:fragment>
            <svelte:fragment slot="message">{message}</svelte:fragment>
            <svelte:fragment slot="trail">
                <Button variant="filled" on:click={actionExample}>Action</Button>
                <Button variant="filled" on:click={toggleVisible}>Dismiss</Button>
            </svelte:fragment>
        </Alert>
        {#if visible}<h4>Simple</h4>{/if}
        <Alert background="bg-primary-500" {visible}>
            <svelte:fragment slot="title">{title}</svelte:fragment>      
            <svelte:fragment slot="trail">
                <Button variant="filled" class="whitespace-nowrap" on:click={actionExample}>Show Me</Button>
            </svelte:fragment>
        </Alert>
        {#if visible}<h4>Rounding</h4>{/if}
        <Alert background="bg-warning-400" radius="rounded-3xl" {visible}>
            <svelte:fragment slot="title">{title}</svelte:fragment>
            <svelte:fragment slot="message">{message}</svelte:fragment>      
        </Alert>
        {#if visible}<h4>Customized</h4>{/if}
        <Alert background="bg-accent-500" {visible} duration={1000}>
            <svelte:fragment slot="lead">{@html icon}</svelte:fragment>
            <svelte:fragment slot="title">{title}</svelte:fragment>
            <svelte:fragment slot="message">{message}</svelte:fragment>      
            <svelte:fragment slot="trail">
                <Button variant="filled" class="whitespace-nowrap" on:click={actionExample}>Show Me</Button>
                <Button variant="filled" on:click={toggleVisible}>Dismiss</Button>
            </svelte:fragment>
        </Alert>
    </Card>
    
    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code="{`
<Alert background="bg-primary-500" visible={true} duration={200}>
    <svelte:fragment slot="lead">{@html icon}</svelte:fragment>
    <svelte:fragment slot="title">{title}</svelte:fragment>
    <svelte:fragment slot="message">{message}</svelte:fragment>      
    <svelte:fragment slot="trail">
        <Button variant="filled" on:click={doSomething}>Show Me</Button>
    </svelte:fragment>
</Alert>
        `.trim()}"></CodeBlock>
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