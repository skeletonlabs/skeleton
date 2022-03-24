<!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress -->

<script lang="ts">
    // Props
    export let label: string = '';
    export let value: number = undefined;
    export let max: number = undefined;
    export let color: string = 'var(--color-accent-500)';

    // Styling
    let cBase: string = 'h-2 w-full bg-surface-500/30 m-0 p-0 rounded-full';

    // Set Classes
    $: classes = `${cBase} ${$$props.class}`;
</script>

<div class="progress-group" style="--color-progress-bar: {color};">
    {#if label}<label for="progress" class="block text-sm">{label}</label>{/if}
    {#if value >= 0}
        <progress id="progress" class="{classes}" {value} {max}>
            {value} / {max}
        </progress>
    {:else}
        <div class="{classes} overflow-hidden my-2">
            <div class="progress-value h-full w-full rounded-full accent animIndeterminate"></div>
        </div>
    {/if}
</div>

<style lang="postcss">
    .accent { @apply bg-progress; }
    /* Webkit */
    progress::-webkit-progress-bar { @apply bg-transparent; }
    progress::-webkit-progress-value { @apply bg-progress rounded-full; }
    /* Moz */
    progress::-moz-progress-bar { @apply bg-transparent; }
    progress::-moz-progress-value { @apply bg-progress rounded-full; }
    
    /* Indeterminate Animation */
    .animIndeterminate {
        animation: indeterminateAnimation 2s infinite linear;
        transform-origin: 0% 50%;
    }
    @keyframes indeterminateAnimation {
        0% { transform: translateX(0) scaleX(0); }
        40% { transform: translateX(0) scaleX(0.4); }
        100% { transform: translateX(100%) scaleX(0.5); }
    }

    /* TODO: implement native indeterminate when cross-browser animation possible */
    /* progress:indeterminate::-webkit-progress-bar {} */
    /* progress:indeterminate::-moz-progress-bar {} */
    /* progress:indeterminate::progress-bar {} */
</style>