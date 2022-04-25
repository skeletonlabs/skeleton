<script lang="ts">
    export let checked: boolean = false;
    export let offLabel: string = 'OFF';
    export let onLabel: string = 'ON';

    $: cSwitch = 'dark:bg-surface-700 bg-surface-300'
    $: cSlider = 'dark:bg-surface-300 bg-surface-100'

</script>

<label class="switch flex relative {cSwitch} {checked ? 'on' : ''} transition duration-[0.3s]">

    <!-- Slider -->
    <input type="checkbox" bind:checked class="hidden">
    <span class="slider {cSlider}"></span>

    <!-- Inner labels -->
    {#if offLabel || onLabel}
    <div class="w-full flex {checked ? '' : 'flex-row-reverse'} transition">
        <p class="text-surface-800 w-1/2 text-xs text-center self-center">{checked ? onLabel : offLabel}</p>
    </div>
    {/if}

</label>


<style lang="postcss">
    .switch { @apply w-16 h-8 rounded-full; }
    .on { @apply bg-accent-500; }
    .slider { @apply cursor-pointer absolute top-0 left-0 right-0 bottom-0 w-[50%] scale-[75%] h-full rounded-full transition duration-[0.5s] }
    input:checked + .slider { @apply translate-x-8; }
</style>