<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    // Docs
    import CodeBlock from '$lib/_CodeBlock/CodeBlock.svelte';
</script>

<h2 class="text-3xl font-bold mb-4">Cards</h2>

<Card><p class="text-base opacity-70">Minimal</p></Card>

<Card class="mt-4">
    <h3 class="text-xl font-bold mb-4">Basic</h3>
    <p class="text-base opacity-70">This is a basic example.</p>
</Card>

<h3 class="text-2xl font-bold my-4">Usage</h3>
<CodeBlock class="mb-4">{`import {card} from '@brainandbones/skeleton';\n\n<Card>Hello</Card>`}</CodeBlock>
