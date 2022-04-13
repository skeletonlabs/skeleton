<script lang="ts">
    // Props
    export let label: string = '';
    export let value: number = undefined;
    export let max: number = 10;
    export let height: string = 'h-2';
    export let color: string = 'bg-accent-500';

    // Styling
    let cBase: string = ` w-full bg-surface-500/20 overflow-hidden rounded-full`;
    
    // Reactive
    $: classes = `${cBase} ${height} ${$$props.class}`;
    $: percentage = (100 * value) / max;
</script>

<div class="progress-bar-group w-full" data-testid="progress-bar-group">
    <!-- Label -->
    {#if label}<label for="progress" class="block text-sm mb-2">{label}</label>{/if}
    <!-- Bar -->
    <div class="progress-bar {classes}">
        {#if value >= 0}
            <!-- Value: Determinate -->
            <div class="progress-value {color} h-full rounded-full" style:width="{percentage}%"></div>
        {:else}
            <!-- Value: Indeterminate -->
            <div class="progress-value {color} h-full w-full rounded-full animIndeterminate"></div>
        {/if}
    </div>
</div>

<style lang="postcss">
    .animIndeterminate { transform-origin: 0% 50%; animation: animIndeterminate 2s infinite linear; }
    @keyframes animIndeterminate {
        0% { transform: translateX(0) scaleX(0); }
        40% { transform: translateX(0) scaleX(0.4); }
        100% { transform: translateX(100%) scaleX(0.5); }
    }
</style>