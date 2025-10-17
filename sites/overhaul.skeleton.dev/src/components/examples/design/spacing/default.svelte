<script lang="ts">
	const tableSpacing = [
		// { value: '0', width: 'w-0' },
		{ value: '[1px]', width: 'w-[1px]' },
		{ value: '0.5', width: 'w-0.5' },
		{ value: '1', width: 'w-1' },
		{ value: '1.5', width: 'w-1.5' },
		{ value: '2', width: 'w-2' },
		{ value: '2.5', width: 'w-2.5' },
		{ value: '3', width: 'w-3' },
		{ value: '3.5', width: 'w-3.5' },
		{ value: '4', width: 'w-4' },
		{ value: '5', width: 'w-5' },
		{ value: '6', width: 'w-6' },
		{ value: '7', width: 'w-7' },
		{ value: '8', width: 'w-8' },
		{ value: '9', width: 'w-9' },
		{ value: '10', width: 'w-10' },
		{ value: '11', width: 'w-11' },
		{ value: '12', width: 'w-12' },
		{ value: '14', width: 'w-14' },
		{ value: '16', width: 'w-16' },
		{ value: '20', width: 'w-20' },
		{ value: '24', width: 'w-24' },
		{ value: '28', width: 'w-28' },
		{ value: '32', width: 'w-32' },
		{ value: '36', width: 'w-36' },
		{ value: '40', width: 'w-40' },
		{ value: '44', width: 'w-44' },
		{ value: '48', width: 'w-48' },
		{ value: '52', width: 'w-52' },
		{ value: '56', width: 'w-56' },
		{ value: '60', width: 'w-60' },
		{ value: '64', width: 'w-64' },
		{ value: '72', width: 'w-72' },
		{ value: '80', width: 'w-80' },
	];

	// Reactive
	let value = $state(0.25);
</script>

<div class="w-full space-y-4">
	<!-- Controls -->
	<div><code class="code">--spacing: {value}rem</code></div>
	<input class="input" type="range" bind:value min={0.2} max={0.3} step="0.01" />
	<!-- Display -->
	<div class="grid grid-cols-1 gap-1">
		{#each tableSpacing.reverse() as ts (ts)}
			<div class="grid grid-cols-[50px_1fr] items-center gap-1">
				<span class="text-xs">{ts.width}</span>
				<div class="{ts.width} h-[10px] bg-primary-500" style:--spacing={`${value}rem`}></div>
			</div>
		{/each}
	</div>
</div>
