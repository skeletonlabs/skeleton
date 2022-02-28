<script lang="ts">
	// Type: null | dashed | dotted
	export let type: String = null;
	// Orientation Vertical
	export let vertical: boolean = null;
	// Bold
	export let bold: boolean = null;

	const customStyle: any = [
		type ? type : null,
		vertical ? 'vertical' : null,
		bold ? 'bold' : null
    ].filter((n) => n).join('-');
</script>

<hr class={`${customStyle} ${$$props.class}`} />

<style lang="postcss">
	hr { @apply pb-4 border-0 border-t border-solid border-surface-500; }
	.dashed { @apply border-dashed; }
	.dotted { @apply border-dotted; }
	.bold { @apply border-t-2; }
    .vertical { @apply border-0 border-l relative h-full; }
</style>
