<script lang="ts">
    // Style
    export let style = 'solid';

</script>

<hr class="{`${style} ${$$props.class}`}">

<style lang="postcss">

    hr{
        @apply  bg-surface-400 border-solid
    }

.solid { @apply border-t-2 border-surface-400 }
.dashed { @apply border-t-2 border-dashed bg-surface-400 }
.dotted { @apply border-t-2 border-dotted bg-surface-400 }

</style>