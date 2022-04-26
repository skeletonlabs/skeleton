<script lang="ts">
    export let checked: boolean = false;
    export let color: string = 'bg-accent-500';
    export let size: string = 'lg';
   
    let sliderSize: any;
    switch(size){
        case('sm'): {sliderSize = ['w-12', 'h-6'];   break;}
        case('md'): {sliderSize = ['w-16', 'h-8'];   break;}
        case('lg'): {sliderSize = ['w-20', 'h-10'];  break;}
        default:    {sliderSize = ['w-16', 'h-8'];   break;}
    }

    // Switch class
    $: cSwitch = `transition duration-[0.34s] ${sliderSize[0]} ${sliderSize[1]} flex relative rounded-full 
        ${checked ? `${color}` : 'dark:bg-surface-700 bg-surface-300 cursor-pointer'}`;

    // Slider class
    $: cSlider = `dark:bg-surface-200 bg-surface-100 cursor-pointer 
        absolute top-0 left-0 right-0 bottom-0 
        w-[50%] scale-[75%] h-full 
        rounded-full transition duration-[0.3s] 
        ${checked ? 'translate-x-full' : ''}`;

</script>

<div class="wrapper flex">
    <label class="switch {cSwitch}">
        
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
        <span class="slider {cSlider}"></span>

    </label>

    <!-- Slotted label -->
    <div class="self-center ml-4">
        <slot/>
    </div>
</div>

<style lang="postcss">
    input:disabled + .slider { @apply bg-gray-600 cursor-not-allowed; }
</style>