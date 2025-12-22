<script lang="ts">
	const messageFeed = [
		{
			id: 0,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:30pm',
			message: 'Some message text.',
			color: 'variant-soft-primary',
		},
		{
			id: 1,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:45pm',
			message: 'Some message text.',
			color: 'variant-soft-primary',
		},
	];
</script>

<section class="w-full max-h-[400px] overflow-y-auto space-y-4">
	<!-- Loop through the messageFeed array -->
	{#each messageFeed as bubble}
		{@const role = bubble.host === true ? 'host' : 'guest'}
		<!-- Render the bubble template -->
		<pre class="pre">{JSON.stringify({ role, ...bubble }, null, 2)}</pre>
	{/each}
</section>
