<script lang="ts">
    export let palette: string;
    const labels: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    function objValuesToArry(obj: any): any[] { return Object.values(obj); }
</script>

<div class="mt-2 grid grid-cols-10 gap-[1px]">
    {#each objValuesToArry(palette) as shade, i}
    <div class="border border-gray-500/30 flex justify-center items-center" style:background={shade.hex ? shade.hex : shade}>
        <div class="text-black font-bold text-[8px] md:text-xs">{labels[i]}</div>
    </div>
    {/each}
</div>