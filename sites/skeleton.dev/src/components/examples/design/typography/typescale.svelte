<script lang="ts">
	const options = [1, 1.067, 1.125, 1.2, 1.25, 1.333, 1.414, 1.5, 1.618];

	// Reactive
	let value = $state(0);
	const current = $derived(options[value]);
</script>

<div class="w-full space-y-4">
	<!-- Controls -->
	<header class="flex flex-col items-center gap-4 max-w-96 mx-auto">
		<div><code class="code">--text-scaling: {current}</code></div>
		<input class="input" type="range" bind:value min="0" max={options.length - 1} />
	</header>

	<!-- Previews -->
	<div class="flex items-center gap-8 overflow-y-auto pb-8">
		<div class="flex flex-col items-center gap-1">
			<div style:--text-scaling={current}><span class="text-9xl">Aa</span></div>
			<code class="code">text-9xl</code>
		</div>
		<!-- --- -->
		<div class="flex flex-col items-center gap-1">
			<div style:--text-scaling={current}><span class="text-8xl">Aa</span></div>
			<code class="code">text-8xl</code>
		</div>
		<!-- --- -->
		<div class="flex flex-col items-center gap-1">
			<div style:--text-scaling={current}><span class="text-7xl">Aa</span></div>
			<code class="code">text-7xl</code>
		</div>
		<!-- --- -->
		<div class="flex flex-col items-center gap-1">
			<div style:--text-scaling={current}><span class="text-6xl">Aa</span></div>
			<code class="code">text-6xl</code>
		</div>
		<!-- --- -->
		<div class="flex flex-col items-center gap-1">
			<div style:--text-scaling={current}><span class="text-5xl">Aa</span></div>
			<code class="code">text-5xl</code>
		</div>
		<!-- --- -->
		<div class="flex flex-col items-center gap-1">
			<div style:--text-scaling={current}><span class="text-4xl">Aa</span></div>
			<code class="code">text-4xl</code>
		</div>
		<!-- --- -->
		<div class="flex flex-col items-center gap-1">
			<div style:--text-scaling={current}><span class="text-3xl">Aa</span></div>
			<code class="code">text-3xl</code>
		</div>
		<!-- --- -->
		<div class="flex flex-col items-center gap-1">
			<div style:--text-scaling={current}><span class="text-2xl">Aa</span></div>
			<code class="code">text-2xl</code>
		</div>
		<!-- --- -->
		<div class="flex flex-col items-center gap-1">
			<div style:--text-scaling={current}><span class="text-xl">Aa</span></div>
			<code class="code">text-xl</code>
		</div>
		<!-- --- -->
		<div class="flex flex-col items-center gap-1">
			<div style:--text-scaling={current}><span class="text-lg">Aa</span></div>
			<code class="code">text-lg</code>
		</div>
		<!-- --- -->
		<div class="flex flex-col items-center gap-1">
			<div style:--text-scaling={current}><span class="text-base">Aa</span></div>
			<code class="code">text-base</code>
		</div>
		<!-- --- -->
		<div class="flex flex-col items-center gap-1">
			<div style:--text-scaling={current}><span class="text-sm">Aa</span></div>
			<code class="code">text-sm</code>
		</div>
		<!-- --- -->
		<div class="flex flex-col items-center gap-2">
			<div style:--text-scaling={current}><span class="text-xs">Aa</span></div>
			<code class="code">text-xs</code>
		</div>
	</div>
</div>
