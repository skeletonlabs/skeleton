<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from '$lib/_CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-4">

    <!-- Header -->
    <header>
        <h2 class="text-3xl font-bold">Cards</h2>
    </header>

    <!-- Examples -->
    <Card><p class="text-base text-surface-400">Minimal</p></Card>
    <Card class="mt-4">
        <h3 class="text-xl font-bold">Basic</h3>
        <p class="text-base text-surface-400">This is a basic example.</p>
    </Card>

    <!-- Usage -->
    <h3 class="text-2xl font-bold">Usage</h3>
    <CodeBlock language="html" code={`<script>import {card} from '@brainandbones/skeleton';</\script>\n\n<Card>Hello</Card>`}></CodeBlock>
    
</div>
