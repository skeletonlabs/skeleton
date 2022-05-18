<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    // import Table from "$lib/Table/Table.svelte";
    import Button from '$lib/Button/Button.svelte';
    import Card from "$lib/Card/Card.svelte";

    import { toastStore, type Toast } from '$lib/Notifications/Stores';

    // Examples
    function toastBasic(): void {
        const t: Toast = {message: 'Hello and welcome to Skeleton.'};
        toastStore.trigger(t);
    }
    function toastLong(): void {
        const t: Toast = {message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequuntur, blanditiis ducimus perspiciatis minima odit repellat rem iste incidunt laborum amet culpa officia maiores eum qui asperiores.'};
        toastStore.trigger(t);
    }
    function toastMultiple(): void {
        toastStore.trigger({message: 'Message One'});
        toastStore.trigger({message: 'Message Two'});
        toastStore.trigger({message: 'Message Three'});
    }
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Toasts</h2>
        <p>Dynamic notifications and alerts for users.</p>
        <CodeBlock language="javascript" code={`<script>import {Component} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="space-y-4">
        <nav class="flex justify-center space-x-4">
            <Button variant="ghost-primary" on:click={toastBasic}>Short</Button>
            <Button variant="ghost-primary" on:click={toastLong}>Long</Button>
            <Button variant="ghost-primary" on:click={toastMultiple}>Multiple</Button>
        </nav>
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`<div>UsageExample</div>`.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
	<!-- <section class="space-y-4">
		<h2>Properties</h2>
		<Table source="{tableProps}"></Table>
	</section> -->
	
	<!-- Slots -->
	<!-- <section class="space-y-4">
		<h2>Slots</h2>
		<Table source="{tableSlots}"></Table>
	</section> -->
    
</div>
