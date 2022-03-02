<script lang="ts">
	// Type: null | dashed | dotted
	export let type: String = null;
	// Orientation Vertical
	export let vertical: boolean = null;
	// Bold
	export let bold: boolean = null;

	const customStyle: any = [
		vertical ? 'vertical' : null,
		bold ? 'bold' : null
    ].filter((n) => n).join('-');
</script>

<hr class={`border-surface-300 dark:border-surface-700 ${type} ${customStyle} ${$$props.class}`} />

<style lang="postcss">
	hr { @apply border-0 border-t border-solid; }
	/* Type */
	.dashed { @apply border-dashed; }
	.dotted { @apply border-dotted; }
	/* Styles */
	.bold { @apply border-t-2; }
    .vertical { @apply border-0 border-l relative h-full; }
	.bold-vertical, .vertical-bold { @apply border-0 border-l-2 relative h-full; }
</style>
