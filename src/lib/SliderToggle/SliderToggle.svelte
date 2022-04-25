<script lang="ts">
    export let checked: boolean = false;
    export let offLabel: string = 'OFF';
    export let onLabel: string = 'ON';
    export let color: string = 'bg-accent-700';
    export let labelColor: string = '!text-white-100'

    $: cSwitch = 'transition duration-[0.3s]'
    $: cSlider = 'dark:bg-surface-300 bg-surface-100'

</script>

<div class="wrapper flex">
<label class="switch flex relative {cSwitch} {checked ? `${color}` : 'dark:bg-surface-700 bg-surface-300'}">
    <!-- Slider -->
    <input type="checkbox" 
    bind:checked 
    class="hidden ${$$props.class}"
    on:click
    on:mouseover
    on:focus

    >
    <span class="slider {cSlider}"></span>

    <!-- Inner labels -->
    {#if offLabel || onLabel}
    <div class="w-full flex {checked ? '' : 'flex-row-reverse'} transition">
        <p class="{labelColor} w-1/2 text-xs text-center self-center">{checked ? onLabel : offLabel}</p>
    </div>
    {/if}
</label>
<div class="self-center ml-4">
    <slot/>
</div>
</div>

<style lang="postcss">
    .switch { @apply w-16 h-8 rounded-full; }
    .slider { @apply cursor-pointer absolute top-0 left-0 right-0 bottom-0 w-[50%] scale-[75%] h-full rounded-full transition duration-[0.5s] }
    input:checked + .slider { @apply translate-x-8; }
</style>