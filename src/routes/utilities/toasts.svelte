<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Button from '$lib/Button/Button.svelte';
    import Card from "$lib/Card/Card.svelte";
    import Divider from '$lib/Divider/Divider.svelte';
    import Table from '$lib/Table/Table.svelte';

    import { toastStore, type Toast } from '$lib/Notifications/Stores';

    // Trigger Examples
    function toastBasic(): void {
        const t: Toast = {message: 'Hello and welcome to Skeleton.'};
        toastStore.trigger(t);
    }
    function toastLong(): void {
        const t: Toast = {
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequuntur, blanditiis ducimus perspiciatis minima odit repellat rem iste incidunt laborum amet culpa officia maiores eum qui asperiores.',
            autohide: false
        };
        toastStore.trigger(t);
    }
    function toastMultiple(): void {
        toastStore.trigger({message: 'Message will auto-hide after 5 seconds.'});
        toastStore.trigger({message: 'Message will remain until dismissed.', autohide: false});
        toastStore.trigger({message: 'Message will last 2 second.', timeout: 2000});
    }
    function toastAction(): void {
        const t: Toast = {
            message: 'Message contains a unique action.',
            autohide: false,
            button: { label: 'Greeting', action: () => { alert('Hello, Skeleton'); }}
        };
        toastStore.trigger(t);
    }

    // Props
    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Values', 'Description'],
        data: [
            ['background', 'string', 'bg-primary-500', 'class', 'Provide a class to set background color.'],
            ['position', 'string', 'b', 't | b | tr | tl | bl | br', 'Set top/bottom/left/right positioning.'],
            ['variant', 'string', 'ghost', 'value', 'Set the dismiss button variant style.'],
            ['duration', 'number', '100', 'integer', 'The duration of the fly in/out animation. Not to be confused with toast timeout.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Toasts</h2>
        <p>Dynamic notifications and alerts for users.</p>
    </header>

    <!-- Examples -->
    <Card class="space-y-4">
        <nav class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full md:max-w-[320px] lg:max-w-[640px] mx-auto">
            <Button variant="ghost-primary" on:click={toastBasic}>Short</Button>
            <Button variant="ghost-primary" on:click={toastLong}>Long</Button>
            <Button variant="ghost-primary" on:click={toastMultiple}>Multiple</Button>
            <Button variant="ghost-primary" on:click={toastAction}>Action</Button>
        </nav>
    </Card>

    <Divider />

    <!-- Import Component -->
    <section class="space-y-4">
        <h2>Dialog Component</h2>
        <p>Add the following to your root <strong>__layout.svelte</strong> component.</p>
        <CodeBlock language="javascript" code={`import { Toasts } from '@brainandbones/skeleton';`}></CodeBlock>
        <CodeBlock language="html" code={`<Toasts background="bg-accent-500" position="tr" variant="filled" duration={250} />`.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
	<section class="space-y-4">
		<h4>Properties</h4>
        <Table source="{tableProps}"></Table>
	</section>

    <Divider />
    
    <!-- Methods -->
	<section class="space-y-4">
        <h2>Methods</h2>
        <p>To begin using toasts, import the toast store. This allows you to manipulate the toast queue using the following methods.</p>
        <CodeBlock language="javascript" code={`import { toastStore } from '@brainandbones/skeleton';`}></CodeBlock>
        <h4>Trigger</h4>
        <p>The following method allows you to insert a new toast into the toast queue.</p>
        <CodeBlock language="javascript" code={`toastStore.trigger(t); // see Toast Settings below`}></CodeBlock>
        <h4>Close</h4>
        <p>Allows you to close the current toast by pruning the visible toast from the top of the queue.</p>
		<CodeBlock language="javascript" code={`toastStore.close();`}></CodeBlock>
        <h4>Clear</h4>
        <p>Allows you to flush the entire toast queue, returning it to an empty state.</p>
        <CodeBlock language="javascript" code={`toastStore.clear();`}></CodeBlock>
	</section>

    <Divider />

    <!-- Toast Settings -->
    <section class="space-y-4">
        <h2>Toast Settings</h2>
        <CodeBlock language="javascript" code={`import { type Toast } from '@brainandbones/skeleton';`}></CodeBlock>
        <p>Several settings are available to a toast. These allow you to set the message, enabled/disabled auto-hide, set the autohide timeout. As well as provide an extra action button.</p>
        <CodeBlock language="javascript" code={`
const t: Toast = {
    message: 'Your Message Here',
    // Optional:
    autohide: true, 
    timeout: 5000,
    button: { label: 'Greeting', action: () => { alert('Hello, Skeleton'); }}
};
        `.trim()}></CodeBlock>
    </section>

    <Divider />

    <!-- Queue -->
    <section class="space-y-4">
        <h2>Debugging</h2>
        <h4>Log the Queue</h4>
        <p>Use the following to monitor the queue in your console as it updates. Note that Svelte store contents are only visible for the current logged line.</p>
        <CodeBlock language="js" code={`toastStore.subscribe(() => { console.log($toastStore); });`}></CodeBlock>
        <h4>Visualize the Queue</h4>
        <p>Use the following to display the queue in your UI.</p>
        <CodeBlock language="html" code={`<pre>queue: {JSON.stringify($toastStore, null, 2)}</pre>`}></CodeBlock>
    </section>
    
</div>
