<script lang="ts">
    export let palette: string;
    function objValuesToArry(obj: any): any[] { return Object.values(obj); }
</script>

<div class="mt-2 grid grid-cols-10 gap-0">
    {#each objValuesToArry(palette) as shade}
    <div class="h-3" style:background={shade}></div>
    {/each}
</div>