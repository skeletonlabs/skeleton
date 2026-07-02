<script lang="ts">
	import Edge from '$lib/components/generator/Edges/EdgeOption.svelte';

	interface EdgesProps {
		mode?: 'radius' | 'thickness' | 'corner';
		name: string;
		value: string;
		items: string[];
	}

	let { mode = 'radius', name, value = $bindable(), items = [] }: EdgesProps = $props();

	function setValue(v: string) {
		value = v;
	}
</script>

<div>
	<!-- Hidden Input -->
	<input {name} type="hidden" />
	<!-- Selection List -->
	<div class="grid gap-4" style="grid-template-columns: repeat({items.length}, minmax(0, 1fr));">
		{#each items as itemValue (itemValue)}
			<Edge value={itemValue} active={value} onselect={setValue} {mode} />
		{/each}
	</div>
</div>
