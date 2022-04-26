<script lang="ts">
    export let checked: boolean = false;
    export let offLabel: string = '';
    export let onLabel: string = '';
    export let color: string = 'bg-accent-500';
    export let labelColor: string = '!text-white-100'
    export let size: string = 'lg';
   
    let sliderSize: any;
    let textSize: string; 
    switch(size){
        case('xs'): {sliderSize = ['w-8', 'h-4']; textSize = 'text-[6px]'; break;}
        case('sm'): {sliderSize = ['w-10', 'h-5']; textSize = 'text-[7px]'; break;}
        case('md'): {sliderSize = ['w-12', 'h-6']; textSize = 'text-[8px]'; break;}
        case('lg'): {sliderSize = ['w-16', 'h-8']; textSize = 'text-[10px]'; break;}
        case('xl'): {sliderSize = ['w-20', 'h-10']; textSize = 'text-[12px]'; break;}
    }

    $: cSwitch = `transition duration-[0.34s] ${sliderSize[0]} ${sliderSize[1]} flex relative rounded-full`
    $: cSlider = 'dark:bg-surface-200 bg-surface-100'

</script>

<div class="wrapper flex">
<label class="switch {cSwitch} {checked ? `${color}` : 'dark:bg-surface-700 bg-surface-300 cursor-pointer'}">
    <!-- Slider -->
    <input type="checkbox" 
    bind:checked 
    class="hidden ${$$props.class}"
    on:click
    on:mouseover
    on:focus
    on:blur
    {...$$restProps}
    >
    <span class="slider {cSlider} {checked ? 'translate-x-full' : ''}"></span>

    <!-- Inner labels -->
    <div class="w-full flex {checked ? '' : 'flex-row-reverse'} transition cursor-pointer">
        <p class="{labelColor} w-1/2 {textSize} font-semibold text-center self-center">{checked ? onLabel : offLabel}</p>
    </div>
</label>

<!-- Slotted label -->
<div class="self-center ml-4">
    <slot/>
</div>

</div>

<style lang="postcss">
    .slider { @apply cursor-pointer absolute top-0 left-0 right-0 bottom-0 w-[50%] scale-[75%] h-full rounded-full transition duration-[0.3s] }
    input:disabled + .slider { @apply bg-gray-600 cursor-not-allowed; }
</style>