<script lang="ts">
    export let checked: boolean = false;
    export let offLabel: string = '';
    export let onLabel: string = '';
    export let color: string = 'bg-accent-500';
    export let labelColor: string = '!text-white-100'
    export let size: string = 'md';
   
    let sliderSize: any; 
    switch(size){
        case('xs'): {sliderSize = ['w-8', 'h-4']; break;}
        case('sm'): {sliderSize = ['w-10', 'h-5']; break;}
        case('md'): {sliderSize = ['w-12', 'h-6']; break;}
        case('lg'): {sliderSize = ['w-16', 'h-8']; break;}
        case('xl'): {sliderSize = ['w-20', 'h-10']; break;}
    }

    $: cSwitch = `transition duration-[0.3s] ${sliderSize[0]} ${sliderSize[1]} flex relative rounded-full`
    $: cSlider = 'dark:bg-surface-200 bg-surface-100'

</script>

<div class="wrapper flex">
<label class="switch {cSwitch} {checked ? `${color}` : 'dark:bg-surface-700 bg-surface-300'}">
    <!-- Slider -->
    <input type="checkbox" 
    bind:checked 
    class="hidden ${$$props.class}"
    on:click
    on:mouseover
    on:focus
    {...$$restProps}
    >
    <span class="slider {cSlider} {checked ? 'translate-x-full' : ''}"></span>

    <!-- Inner labels -->
    {#if (offLabel || onLabel) && size != 'sm'}
    <div class="w-full flex {checked ? '' : 'flex-row-reverse'} transition">
        <p class="{labelColor} w-1/2 text-[10px] text-center self-center">{checked ? onLabel : offLabel}</p>
    </div>
    {/if}
</label>
<div class="self-center ml-4">
    <slot/>
</div>
</div>

<style lang="postcss">
    .slider { @apply cursor-pointer absolute top-0 left-0 right-0 bottom-0 w-[50%] scale-[75%] h-full rounded-full transition duration-[0.3s] }
    input:disabled + .slider { @apply bg-gray-600 cursor-not-allowed; } 
</style>