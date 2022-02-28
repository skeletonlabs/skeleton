<script lang="ts">
    // Style
    export let style: String = null;
    // Orientation
    export let vertical: boolean = null;
    // Width
    export let bold: boolean = null;

    const customStyle: any = [
        style ? style : null,
        vertical ? 'vertical' : null,
        bold ? 'bold' : null,
    ].filter(n => n).join('-');

</script>

<hr class="{`${customStyle} ${$$props.class}`}">

<style lang="postcss">
    hr{
        @apply pb-4 border-0
    }

.solid { @apply border-t border-surface-400 dark:border-surface-600; }
.dashed { @apply border-t border-dashed border-surface-400 dark:border-surface-600; }
.dotted { @apply border-t border-dotted border-surface-400 dark:border-surface-600; }

.vertical { @apply border-l relative h-full border-surface-400 dark:border-surface-600; }
.bold { @apply border-t-2 border-solid border-surface-400 dark:border-surface-600;}

</style>