<script>
	import { edges, radii } from '$lib/constants';
	import { storeEdges } from '$lib/stores.svelte';
</script>

<fieldset class="space-y-4 md:space-y-8">
	<div class="grid grid-cols-2 gap-4">
		<label class="label">
			<span class="label-text">Rounded Base</span>
			<select class="select" bind:value={storeEdges.radiiDefault}>
				{#each radii as radius}
					<option value={radius}>{radius}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Rounded Containers</span>
			<select class="select" bind:value={storeEdges.radiiContainer}>
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
			<select class="select" bind:value={storeEdges.borderWidthDefault}>
				{#each edges as edges}
					<option value={edges}>{edges}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Rings</span>
			<select class="select" bind:value={storeEdges.ringWidthDefault}>
				{#each edges as edges}
					<option value={edges}>{edges}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Outlines</span>
			<select class="select" bind:value={storeEdges.outlineWidthDefault}>
				{#each edges as edges}
					<option value={edges}>{edges}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Dividers</span>
			<select class="select" bind:value={storeEdges.divideWidthDefault}>
				{#each edges as edges}
					<option value={edges}>{edges}</option>
				{/each}
			</select>
		</label>
	</div>
</fieldset>
