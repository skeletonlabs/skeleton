<script lang="ts">
    // Props
    export let background: string|undefined = undefined;
    export let border: string = 'border-b border-b-surface-500/10 dark:border-b-surface-700';
    export let padding: string = 'p-4';
    export let space: string = 'space-x-4';

    // Base Classes
    const cBase: string = 'flex items-center';
    const cLead: string = 'flex-none flex justify-between items-center';
    const cCenter: string = 'flex-auto';
    const cTrail: string = 'flex-none flex items-center space-x-4';

    // Reactive Classes
    $: classesBase = `${cBase} ${background} ${border} ${padding} ${space}`;
</script>

<div class="{classesBase} {$$props.class||''}">

    <!-- Slot: lead -->
    {#if $$slots.lead}
    <div class="appbar-lead {cLead}"><slot name="lead"></slot></div>
    {/if}

    <!-- Slot: center -->
    <div class="appbar-center {cCenter}"><slot name="center"></slot></div>

    <!-- Slot: trail -->
    {#if $$slots.trail}
    <div class="appbar-trail {cTrail}"><slot name="trail"></slot></div>
    {/if}

</div>
