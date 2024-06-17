<script>
	import { edges, radii } from '$lib/constants';
	import { stateFormEdges } from '$lib/state.svelte';
</script>

<fieldset class="space-y-4 md:space-y-8">
	<header>
		<h2 class="h2">Edges</h2>
		<p class="opacity-60">Define radius shape and edge widths.</p>
	</header>
	<div class="grid grid-cols-2 gap-4">
		<label class="label">
			<span class="label-text">Rounded Base</span>
			<select class="select" bind:value={stateFormEdges.radiiDefault}>
				{#each radii as radius}
					<option value={radius}>{radius}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Rounded Containers</span>
			<select class="select" bind:value={stateFormEdges.radiiContainer}>
				{#each radii as radius}
					<option value={radius}>{radius}</option>
				{/each}
			</select>
		</label>
	</div>
	<hr class="hr" />
	<div class="grid grid-cols-2 gap-4">
		<label class="label">
			<span class="label-text">Borders</span>
			<select class="select" bind:value={stateFormEdges.borderWidthDefault}>
				{#each edges as edges}
					<option value={edges}>{edges}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Rings</span>
			<select class="select" bind:value={stateFormEdges.ringWidthDefault}>
				{#each edges as edges}
					<option value={edges}>{edges}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Outlines</span>
			<select class="select" bind:value={stateFormEdges.outlineWidthDefault}>
				{#each edges as edges}
					<option value={edges}>{edges}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Dividers</span>
			<select class="select" bind:value={stateFormEdges.divideWidthDefault}>
				{#each edges as edges}
					<option value={edges}>{edges}</option>
				{/each}
			</select>
		</label>
	</div>
</fieldset>
