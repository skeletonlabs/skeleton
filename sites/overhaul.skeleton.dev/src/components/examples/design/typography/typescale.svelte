<script lang="ts">
	const options = [1, 1.067, 1.125, 1.2, 1.25, 1.333, 1.414, 1.5, 1.618];

	// Reactive
	let value = $state(0);
	const current = $derived(options[value]);
</script>

<div class="w-full space-y-4">
	<!-- Controls -->
	<div><code class="code">-text-scaling: {current}</code></div>
	<input class="input" type="range" bind:value min="0" max={options.length - 1} />
	<!-- Table -->
	<div class="table-wrap">
		<table class="table">
			<thead>
				<tr>
					<th>Class</th>
					<th>Preview</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><code class="code">text-9xl</code></td>
					<td style:--text-scaling={current}><span class="text-9xl">Aa</span></td>
				</tr>
				<tr>
					<td><code class="code">text-8xl</code></td>
					<td style:--text-scaling={current}><span class="text-8xl">Aa</span></td>
				</tr>
				<tr>
					<td><code class="code">text-7xl</code></td>
					<td style:--text-scaling={current}><span class="text-7xl">Aa</span></td>
				</tr>
				<tr>
					<td><code class="code">text-6xl</code></td>
					<td style:--text-scaling={current}><span class="text-6xl">Aa</span></td>
				</tr>
				<tr>
					<td><code class="code">text-5xl</code></td>
					<td style:--text-scaling={current}><span class="text-5xl">Aa</span></td>
				</tr>
				<tr>
					<td><code class="code">text-4xl</code></td>
					<td style:--text-scaling={current}><span class="text-4xl">Aa</span></td>
				</tr>
				<tr>
					<td><code class="code">text-3xl</code></td>
					<td style:--text-scaling={current}><span class="text-3xl">Aa</span></td>
				</tr>
				<tr>
					<td><code class="code">text-2xl</code></td>
					<td style:--text-scaling={current}><span class="text-2xl">Aa</span></td>
				</tr>
				<tr>
					<td><code class="code">text-xl</code></td>
					<td style:--text-scaling={current}><span class="text-xl">Aa</span></td>
				</tr>
				<tr>
					<td><code class="code">text-lg</code></td>
					<td style:--text-scaling={current}><span class="text-lg">Aa</span></td>
				</tr>
				<tr>
					<td><code class="code">text-base</code></td>
					<td style:--text-scaling={current}><span class="text-base">Aa</span></td>
				</tr>
				<tr>
					<td><code class="code">text-sm</code></td>
					<td style:--text-scaling={current}><span class="text-sm">Aa</span></td>
				</tr>
				<tr>
					<td><code class="code">text-xs</code></td>
					<td style:--text-scaling={current}><span class="text-xs">Aa</span></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
