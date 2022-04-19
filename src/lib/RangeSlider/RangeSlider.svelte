<script lang="ts">

    export let value: number = 5;
    export let max: number = 1000;
    export let min: number = 0;
    export let step: number = 1;
    export let label: string = '';
    export let accent: string = '';
    export let ticklist: string = '';
    export let size = '';
    export let showValueFront: boolean = false;

    let styleSize;

    switch(size){
        case('sm'): { styleSize = 'h-[2px]'; break;};
        case('md'): { styleSize = 'h-[4px]'; break;};
        case('lg'): { styleSize = 'h-[8px]'; break;};
        default: { styleSize = 'h-[6px]'; break;}
    }

    $: cBase = `${accent} ${styleSize} ${$$props.class}`;
    $: flexStyle = showValueFront ? 'flex' : 'flex flex-row-reverse';

</script>

<div>
    <label for="">{label}</label>
    <div class="flex gap-4 ${flexStyle}">
        <p class='w-8'>{value}</p>     
        <input
        type="range"
        class="rangeSlider {cBase} w-full h-[px] self-center"
        list={ticklist} 
        step={step}
        bind:value={value}
        min={min}
        max={max} 
        on:click 
        on:change 
        on:blur  
        >
    </div>
</div>
