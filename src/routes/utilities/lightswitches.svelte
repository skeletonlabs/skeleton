<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Card from "$lib/Card/Card.svelte";
    import DataTable from "$lib/Table/DataTable.svelte";
    import LightSwitch from "$lib/LightSwitch/LightSwitch.svelte";

    const tableProps: any = {
        headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
        source: [
            ['origin', 'string', 'tl', 'tl | tr | bl | br', 'Set the <a href="/components/menus">menu</a> origin position.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Lightswitch</h1>
        <p>Allows users to toggle their preferred theme preference between light, dark, and system. This uses <a href="https://tailwindcss.com/docs/dark-mode" target="_blank">Tailwind's dark mode</a> feature.</p>
        <CodeBlock language="javascript" code={`import { LightSwitch } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="text-center py-10 overflow-visible">
        <LightSwitch />
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`<LightSwitch origin="tl" />`}></CodeBlock>
        <p>Toggles a dark class on the HTML tag.</p>
        <CodeBlock language="html" code={`<html class="dark">`}></CodeBlock>
        <p>Please follow Tailwind's instructions for utilizing <a href="https://tailwindcss.com/docs/dark-mode" target="_blank">dark mode</a> withing your application.</p>
    </section>
    
    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <DataTable headings="{tableProps.headings}" source="{tableProps.source}"></DataTable>
    </section>
</div>
