<script lang="ts">
	const spacing = [
		{ value: '0.5', height: 'h-0.5' },
		{ value: '1', height: 'h-1' },
		{ value: '1.5', height: 'h-1.5' },
		{ value: '2', height: 'h-2' },
		{ value: '2.5', height: 'h-2.5' },
		{ value: '3', height: 'h-3' },
		{ value: '3.5', height: 'h-3.5' },
		{ value: '4', height: 'h-4' },
		{ value: '5', height: 'h-5' },
		{ value: '6', height: 'h-6' },
		{ value: '7', height: 'h-7' },
		{ value: '8', height: 'h-8' },
		{ value: '9', height: 'h-9' },
		{ value: '10', height: 'h-10' },
		{ value: '11', height: 'h-11' },
		{ value: '12', height: 'h-12' },
		{ value: '14', height: 'h-14' },
		{ value: '16', height: 'h-16' },
		{ value: '20', height: 'h-20' },
		{ value: '24', height: 'h-24' },
		{ value: '28', height: 'h-28' },
		{ value: '32', height: 'h-32' },
		{ value: '36', height: 'h-36' },
		{ value: '40', height: 'h-40' },
		{ value: '44', height: 'h-44' },
		{ value: '48', height: 'h-48' },
		{ value: '52', height: 'h-52' },
		{ value: '56', height: 'h-56' },
		{ value: '60', height: 'h-60' },
		{ value: '64', height: 'h-64' },
		{ value: '72', height: 'h-72' },
		{ value: '80', height: 'h-80' },
	].reverse();

	// Reactive
	let value = $state(0.25);
</script>

<div class="w-full space-y-4">
	<!-- Controls -->
	<header class="flex flex-col items-center gap-4 max-h-96 mx-auto">
		<div><code class="code">--spacing: {value}rem</code></div>
		<input class="input" type="range" bind:value min={0.2} max={0.3} step="0.01" />
	</header>
	<!-- Display -->
	<div class="w-full flex justify-between items-end">
		{#each spacing as option (option)}
			<div class="flex flex-col items-center gap-2">
				<span class="hidden md:block font-bold text-[10px] -rotate-90 whitespace-nowrap">{option.height.replace('h-', '')}</span>
				<div class="{option.height} w-[5px] bg-primary-500" style:--spacing={`${value}rem`}></div>
			</div>
		{/each}
	</div>
</div>
