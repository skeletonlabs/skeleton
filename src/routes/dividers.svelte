<script lang="ts">
    import Divider from "$lib/Divider/Divider.svelte";
    import Card from "$lib/Card/Card.svelte";
</script>

<h2 class="text-3xl font-bold mb-4">Dividers</h2>

<Card>
    <h2 class="text-base font-bold mb-4">Default</h2>
    <Divider class="pb-4" />
    <h2 class="text-base font-bold mb-4">Dashed</h2>
    <Divider type="dashed" class="pb-4" />
    <h2 class="text-base font-bold mb-4">Dotted</h2>
    <Divider type="dotted" class="pb-4" />
    <h2 class="text-base font-bold mb-4">Bold</h2>
    <Divider bold class="pb-4" />
    <h2 class="text-base font-bold mb-4">Vertical</h2>
    <div class="h-[100px] flex justify-evenly items-center">
        <div>CONTENT X</div>
        <Divider vertical />
        <div>CONTENT Y</div>
    </div>
</Card>
