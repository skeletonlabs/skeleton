<script lang="ts">
    import Card from "$lib/card/Card.svelte";
</script>

<h2 class="text-3xl font-bold mb-4">
    <span class="bg-clip-text text-transparent bg-gradient-to-br from-primary-500 to-accent-500">Cards</span>
</h2>

<Card>
    <p class="text-base opacity-70">Minimal</p>
</Card>

<Card class="mt-4">
    <h3 class="text-xl font-bold mb-4">Basic</h3>
    <p class="text-base opacity-70">This is a basic example.</p>
</Card>
