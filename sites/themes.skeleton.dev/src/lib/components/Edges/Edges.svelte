<script lang="ts">
	import Edge from '$lib/components/Edges/EdgeOption.svelte';

	interface EdgesProps {
		thickness?: boolean;
		name: string;
		value: number;
		items: number[];
		gridCols?: string;
	}

	// prettier-ignore
	let {
		thickness = false,
		name,
		value = $bindable(0),
		items = [0, 2, 4, 6, 12, 16, 24, 9999],
		gridCols = 'grid-cols-7'
	}: EdgesProps = $props();

	function setValue(v: number) {
		value = v;
	}
</script>

<div>
	<!-- Hidden Input -->
	<input {name} type="hidden" />
	<!-- Selection List -->
	<div class="grid {gridCols} gap-2">
		{#each items as itemValue}
			<Edge value={itemValue} active={value} onselect={setValue} {thickness} />
		{/each}
	</div>
</div>
