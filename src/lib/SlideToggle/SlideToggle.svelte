<script lang="ts">

    export let checked: boolean = false;
    export let color: string = 'bg-accent-500';
    export let size: string = 'lg';
   
    // Switch size
    let switchSize: any;
    switch(size){
        case('sm'): {switchSize = ['w-12', 'h-6'];   break;}
        case('md'): {switchSize = ['w-16', 'h-8'];   break;}
        case('lg'): {switchSize = ['w-20', 'h-10'];  break;}
        default:    {switchSize = ['w-16', 'h-8'];   break;}
    }

    // Switch class
    $: cSwitch = `transition duration-[0.34s] ${switchSize[0]} ${switchSize[1]} flex rounded-full
        ${checked ? `${color}` : 'dark:bg-surface-700 bg-surface-300 cursor-pointer'}`;

    // Slider class
    $: cSlider = `dark:bg-surface-200 bg-surface-100 cursor-pointer  
        w-[50%] scale-[75%] h-full rounded-full transition duration-[0.3s]
        ${checked ? 'translate-x-full' : ''}`;

</script>

<label class='flex content-center'>
    <!-- Input (Hidden) -->
    <input type="checkbox" 
        bind:checked 
        class="${$$props.class} hidden"
        on:click
        on:mouseover
        on:focus
        on:blur
        {...$$restProps}
    >

    <!-- Slider -->
    <div class="switch {cSwitch}">
        <div class="slider {cSlider}"></div>
    </div>

    <!-- Slotted label -->
    {#if $$slots}
    <div class="self-center ml-4">
        <slot/>
    </div>
    {/if}
</label>


<style lang="postcss">
    input:disabled + .switch .slider{ @apply bg-gray-500 cursor-not-allowed; }
</style>