<script lang="ts">

    export let value: number = 5;
    export let max: number = 1000;
    export let min: number = 0;
    export let step: number = 1;

    export let label: string = '';
    export let accent: string = '';
    export let size = '';
    export let showValueFront: boolean = false;

    let styleSize;

    switch(size){
        case('sm'): { styleSize = 'h-[2px]'; break;};
        case('md'): { styleSize = 'h-[4px]'; break;};
        case('lg'): { styleSize = 'h-[8px]'; break;};
        default: { styleSize = 'h-[6px]'; break;}
    }

    $: cBase = `${accent} ${styleSize}`;
    $: flexStyle = showValueFront ? 'flex' : 'flex flex-row-reverse';

    export let tickmarks = null;

</script>

<div class="${$$props.class}">
    <label for="">{label}</label>
    <div class="flex gap-4 ${flexStyle}">
        <p class='w-8'>{value}</p>
        <div class='rangeContainer w-full'>
            <input
            type="range"
            class="{cBase} rangeSlider rounding-full w-full h-[px] self-center" 
            step={step}
            bind:value={value}
            min={min}
            max={max} 
            on:click 
            on:change 
            on:blur  
            >
            {#if tickmarks}
            <div class="flex justify-between w-auto mt-1">
                {#each tickmarks as item}
                <span class="text-xs text-center">
                    <div class="w-4">
                        {item}
                    </div></span>
                {/each}
            </div>
            {/if}
        </div> 
    </div>
</div>

<style lang="postcss">

    .rangeSlider::-webkit-slider-runnable-track{ @apply appearance-none}
    
</style>
