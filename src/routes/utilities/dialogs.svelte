<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Card from "$lib/Card/Card.svelte";
    import Button from '$lib/Button/Button.svelte';
    import { dialogStore, type DialogAlert, type DialogConfirm, type DialogPrompt, type DialogComponent } from '$lib/Notifications/Stores';

    let valueConfirm: boolean = false;
    let valuePrompt: string = 'Susan';

    // Trigger Dialog
    function dialogAlertSingle(): void {
        const d: DialogAlert = {
            title: 'Welcome to Skeleton.',
            body: 'This is a standard alert dialog.',
        };
        dialogStore.trigger(d);
    }
    function dialogAlertMultiple(): void {
        dialogStore.trigger({ title: 'Dialog One.', body: 'This is the message body for dialog one.', });
        dialogStore.trigger({ title: 'Dialog Two.', body: 'This is the message body for dialog two.', });
        dialogStore.trigger({ title: 'Dialog Three.', body: 'This is the message body for dialog three.', });
    }
    function dialogConfirm(): void {
        const d: DialogConfirm = {
            type: 'confirm',
            title: 'Please Confirm',
            body: 'Are you sure you wish to proceed?',
            result: (r: boolean) => { valueConfirm = r }
        };
        dialogStore.trigger(d);
    }
    function dialogPrompt(): void {
        const d: DialogPrompt = {
            type: 'prompt',
            title: 'Enter Name',
            body: 'Provide your first name in the field below.',
            value: valuePrompt,
            result: (r: string) => { if (r) { valuePrompt = r}; }
        };
        dialogStore.trigger(d);
    }
    function dialogComponent(): void {
        const d: DialogComponent = {
            title: 'Enter Name',
            body: 'Provide your first name in the field below.',
            component: { element: Card, props: {background: 'bg-orange-500'}, slot: '<p class="text-center">Hello, Skeleton!</p>' }
        };
        dialogStore.trigger(d);
    }
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Template</h2>
        <p>Display an overlay notification, including options for alerts, confirmation, prompts, and more.</p>
    </header>

    <!-- Examples -->
    <section class="space-y-4">
        <nav class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            <Card class="text-center space-y-4">
                <h4>Alert</h4>
                <nav class="flex flex-col items-center space-y-4">
                    <Button variant="ghost-primary" on:click={dialogAlertSingle}>Single</Button>
                    <Button variant="ghost-primary" on:click={dialogAlertMultiple}>Multiple</Button>
                </nav>
            </Card>
            <Card class="text-center space-y-4">
                <h4>Confirm</h4>
                <Button variant="ghost-primary" on:click={dialogConfirm}>Trigger</Button>
                <pre class="bg-black/20 p-4">Response: {JSON.stringify(valueConfirm, null, 2)}</pre>
            </Card>
            <Card class="text-center space-y-4">
                <h4>Prompt</h4>
                <Button variant="ghost-primary" on:click={dialogPrompt}>Trigger</Button>
                <pre class="bg-black/20 p-4">Response: {JSON.stringify(valuePrompt, null, 2)}</pre>
            </Card>
            <Card class="text-center space-y-4">
                <h4>Component</h4>
                <Button variant="ghost-primary" on:click={dialogComponent}>Trigger</Button>
            </Card>
        </nav>
    </section>

    <!-- Queue -->
    <pre class="bg-black/20 p-4">queue: {JSON.stringify($dialogStore, null, 2)}</pre>

    <!-- Dialog Component -->
    <section class="space-y-4">
        <h2>Insert the Dialog Component</h2>
        <p>Import and add the dialog component within global scope of your app, such as your root <strong>__layout.svelte</strong> component.</p>
        <CodeBlock language="javascript" code={`import { Dialog } from '@brainandbones/skeleton';`}></CodeBlock>
        <CodeBlock language="html" code={`<Dialog />`.trim()}></CodeBlock>
    </section>
    
    <!-- Dialog Store and Types -->
    <section class="space-y-4">
        <h2>Import Store and Types</h2>
        <p>Import the Svelte data store, which allows you to manipulate the dialog queue. Additionally you may import various dialog type definitions.</p>
        <CodeBlock language="javascript" code={`import { dialogStore, type DialogAlert, type DialogConfirm, type DialogPrompt, type DialogComponent } from '@brainandbones/skeleton';`}></CodeBlock>
    </section>
    
    <!-- Dialog Queue -->
    <section class="space-y-4">
        <h2>View the Queue</h2>
        <p>You can visualize your dialog queue at any time by using the following snippet.</p>
        <CodeBlock language="html" code={`<pre>queue: {JSON.stringify($dialogStore, null, 2)}</pre>`}></CodeBlock>
    </section>
    
    <!-- Trigger -->
	<section class="space-y-4">
        <h2>Trigger</h2>
        <p>The following method allows you to insert a new dialog into the dialog queue. See the defined dialog examples below.</p>
        <CodeBlock language="javascript" code={`dialogStore.trigger(d);`}></CodeBlock>
        <!-- Alert -->
		<div class="space-y-2">
            <h4>Alert</h4>
            <p>The simplest dialog option. Note the title and body can accept HTML.</p>
            <CodeBlock language="javascript" code={`
const d: DialogAlert = {
    title: 'Welcome to Skeleton.',
    body: 'This is a standard alert dialog.',
};
            `.trim()}></CodeBlock>
        </div>
        <!-- Confirm -->
        <div class="space-y-2">
            <h4>Confirm</h4>
            <p>Similar to an alert, but adds a "confirm" option and returns a boolean value based on user selection.</p>
            <CodeBlock language="javascript" code={`
const d: DialogConfirm = {
    type: 'confirm',
    title: 'Please Confirm',
    body: 'Are you sure you wish to proceed?',
    result: (r: boolean) => { console.log(r); }
};
            `.trim()}></CodeBlock>
        </div>
        <!-- Prompt -->
        <div class="space-y-2">
            <h4>Prompt</h4>
            <p>Prompts the user for a value using an input. The response returns the value the user provides.</p>
            <CodeBlock language="javascript" code={`
const d: DialogPrompt = {
    type: 'prompt',
    title: 'Enter Name',
    body: 'Provide your first name in the field below.',
    value: valuePrompt,
    result: (r: string) => { if (r) { console.log(r); }; }
};
            `.trim()}></CodeBlock>
        </div>
        <!-- Component -->
        <div class="space-y-2">
            <h4>Component</h4>
            <p>Allows you to create a dialog with a dynamically component embedded within.</p>
            <CodeBlock language="javascript" code={`
import { Card } from '@brainandbones/skeleton';\n
const d: DialogComponent = {
    title: 'Enter Name',
    body: 'Provide your first name in the field below.',
    component: {
        element: Card,
        props: {background: 'bg-orange-500'},
        slot: '<p class="text-center">Hello, Skeleton!</p>'
    }
};
            `.trim()}></CodeBlock>
        </div>
	</section>
	
	<!-- Close -->
	<section class="space-y-4">
		<h2>Close Current Dialog</h2>
        <p>Allows you to close the current dialog by pruning the visible dialog from the top of the queue.</p>
		<CodeBlock language="javascript" code={`dialogStore.close();`}></CodeBlock>
	</section>
	
    <!-- Clear -->
	<section class="space-y-4">
		<h2>Clear All Dialogs</h2>
        <p>Allows you to flush the entire dialog queue, returning it to an empty state.</p>
		<CodeBlock language="javascript" code={`dialogStore.clear();`}></CodeBlock>
	</section>
    
</div>
