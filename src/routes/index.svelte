<script lang="ts">
    import Button from '$lib/button/Button.svelte';
    import Card from '$lib/card/Card.svelte';
</script>

<h1 class="text-2xl">Skeleton UI</h1>
<p class="text-base opacity-70">A component library by Brain &amp; Bones, LLC.</p>

<!-- Buttons -->
<Card class="mt-4">
    <h2 class="text-xl mb-4">Buttons</h2>
    <nav class="flex space-x-4">
        <Button>Basic</Button>
        <Button primary>Primary</Button>
        <Button accent>Accent</Button>
    </nav>
</Card>