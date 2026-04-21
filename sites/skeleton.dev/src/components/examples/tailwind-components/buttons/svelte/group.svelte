<script lang="ts">
	let active = $state('january');
	const months = ['january', 'february', 'march'];
</script>

<nav class="btn-group preset-outlined-surface-200-800 flex-col md:flex-row">
	{#each months as month (month)}
		<button type="button" class="btn capitalize {month === active ? 'preset-filled' : 'preset-tonal'}" onclick={() => (active = month)}>
			{month}
		</button>
	{/each}
</nav>
