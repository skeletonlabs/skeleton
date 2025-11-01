<script lang="ts">
	const colors = ['red', 'blue', 'green'];
	let color = $state(colors[0]);

	function setColor(selectedColor: string) {
		color = selectedColor;
	}
</script>

<div class="flex gap-2">
	<!-- Loop through the available colors -->
	{#each colors as c (c)}
		<!-- On selection, set the color state, dynamically update classes -->
		<button class={`chip capitalize ${color === c ? 'preset-filled' : 'preset-tonal'}`} onclick={() => setColor(c)}>
			<span>{c}</span>
		</button>
	{/each}
</div>
