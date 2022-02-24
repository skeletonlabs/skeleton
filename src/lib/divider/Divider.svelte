<script lang="ts">
    // Style
    export let style: String = 'solid';
    // Orientation
    export let vertical: boolean = false;

</script>

<hr class="{`${style} ${$$props.class}`}">

<style lang="postcss">
    hr{
        @apply pb-4
    }

.solid { @apply border-t border-surface-400 dark:border-surface-600 }
.dashed { @apply border-t border-dashed border-surface-400 dark:border-surface-600 }
.dotted { @apply border-t border-dotted border-surface-400 dark:border-surface-600 }

.vertical { @apply border-l border-solid border-surface-400 dark:border-surface-600}

</style>