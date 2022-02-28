<script lang="ts">
    import Divider from "$lib/Divider/Divider.svelte";
    import Card from "$lib/card/Card.svelte";
</script>

<h2 class="text-3xl font-bold mb-4">
    <span class="bg-clip-text text-transparent bg-gradient-to-br from-primary-500 to-accent-500">Dividers</span>
</h2>

<Card>
    <h2 class="text-lg mb-4">Solid</h2>
    <Divider style="solid"/>
    <h2 class="text-lg mb-4">Dashed</h2>
    <Divider style="dashed"/>
    <h2 class="text-lg mb-4">Dotted</h2>
    <Divider style="dotted"/>
    <h2 class="text-lg mb-4">Bold</h2>
    <Divider bold/>
    <h2 class="text-lg mb-4">Vertical</h2>
    <div class="h-40 flex justify-evenly">
        <div>CONTENT X</div>
        <Divider vertical/>
        <div>CONTENT Y</div>
        
    </div>

</Card>