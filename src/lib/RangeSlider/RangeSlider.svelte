<script lang="ts">

    export let value: number = 0;
    export let max: number = 10;
    export let min: number = 0;
    export let step: number = 1;

    export let label: string = '';
    export let accent: string = '';
    export let size = '';
    export let showValueFront: boolean = false;
    export let showValue: boolean = true;

    // Sizing for the range slider track. Does not affect the thumb
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
    <div class="flex gap-2 ${flexStyle}">
        <!-- Value Label -->
        {#if showValue}
        <p class='w-8 ml-2 mr-2 self-center text-center'>{value}</p>
        {/if}
        <!-- Range Slider -->
        <div class='rangeContainer flex self-center flex-col w-full'>
            <input
            type="range"
            class="rangeSlider {cBase} rounding-full w-full" 
            step={step}
            bind:value={value}
            min={min}
            max={max} 
            on:click 
            on:change 
            on:blur  
            >
        <!--Ticks and labels-->
            {#if tickmarks}
            <div class="flex justify-between w-auto mt-2">
                {#each tickmarks as item}
                <span class="text-xs text-center">
                    <div class="w-4">
                        {item}
                    </div>
                </span>
                {/each}
            </div>
            {/if}
        </div> 
    </div>
</div>

