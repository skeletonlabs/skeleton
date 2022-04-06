<script lang='ts'>
    import Alert from "$lib/Alert/Alert.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Table from "$lib/_Table/Table.svelte"
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte"

    let icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"/></svg>'

    function ActionFunction(){
        alert('ActionFunction informed me to do this!');
    }

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['color', 'string', 'primary | accent | caution | warning | tailwind class', '-', 'Set the color of the alert by predefined values or a Tailwind class.'],
            ['outlined', 'boolean', 'true | false', 'false', 'Specify if component is outlined.'],
            ['dismissable', 'boolean', 'true | false', 'false', 'Specify if the alert can be dismissed by a dismiss button.'],
            ['actionMessage', 'function', 'string', '-', 'Specify an action button.'],
            ['actionFunction', 'function', 'JavaScript function', '-', 'Sets a function for the onclick actionMessage.'],
        ],
    };

    const slotProps: any = {
        columns: ['Slot', 'Description'],
        data: [
            ['icon', 'Specify a leading icon on the alert.'],
            ['title', 'Specify the title of the alert.'],
            ['message', 'Specify the body message of the alert.']
        ]
    }

    let title = 'What`s new in Skeleton?';
    let message = 'Check out the countless new features and components in the Skeleton Library.';

</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Alerts</h1>
        <p>Make alerts that stand out with different warning levels.</p>
    </header>
    
    <!-- Examples -->
    <section class="space-y-4">
        <Card class="space-y-4">
            <h6>Basic</h6>
            <Alert>
                <svelte:fragment slot='title'>{title}</svelte:fragment>
                <svelte:fragment slot='message'>{message}</svelte:fragment>
            </Alert>
        </Card>

        <Card class="space-y-4">
            <h6>Primary</h6>
            <Alert color='primary'>
                <svelte:fragment slot='title'>{title}</svelte:fragment>
                <svelte:fragment slot='message'>{message}</svelte:fragment>
            </Alert>
        </Card>

        <Card class="space-y-4">
            <h6>Outlined</h6>
            <Alert color='accent' outlined>
                <svelte:fragment slot='title'>{title}</svelte:fragment>
                <svelte:fragment slot='message'>{message}</svelte:fragment>
            </Alert>
        </Card>

        <Card class="space-y-4">
            <h6>Dismissable</h6>
            <Alert color='accent' dismissable>
                <svelte:fragment slot='title'>{title}</svelte:fragment>
                <svelte:fragment slot='message'>{message}</svelte:fragment>
            </Alert>
        </Card>

        <Card class="space-y-4">
            <h6>CustomAction</h6>
            <Alert color='warning' actionMessage='Check it out' actionFunction={()=>{window.location.href = '/'}}>
                <svelte:fragment slot='title'>{title}</svelte:fragment>
                <svelte:fragment slot='message'>{message}</svelte:fragment>
            </Alert>
        </Card>

        <Card class="space-y-4">
            <h6>Icon</h6>
            <Alert dismissable>
                <svelte:fragment slot='icon'><span class='fill-slate-900 dark:fill-slate-300'>{@html icon}</span></svelte:fragment>
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
        <CodeBlock language="html" code="{`<Alert color='primary' actionMessage='Go here' actionFunction={function}>\n   <svelte:fragment slot='title'>{title}</svelte:fragment> \n   <svelte:fragment slot='message'>{body}</svelte:fragment>\n</Alert>`}"></CodeBlock>
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