<div class="space-y-4 md:space-y-10">
	<!-- Info -->
	<div class="space-y-4 text-center">
		<h2>And so much more....</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</div>
	<!-- Grid -->
	<div class="grid grid-cols-3 gap-4">
		{#each ['Amazing DX', 'Accessability', 'Typescript Support', 'Extensible', 'Integrations', 'Icon Agnostic'] as feature}
			<div class="card p-4 md:p-10 space-y-4 text-center">
				<p class="opacity-30">(icon)</p>
				<h3>{feature}</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis velit consectetur.</p>
			</div>
		{/each}
	</div>
</div>
