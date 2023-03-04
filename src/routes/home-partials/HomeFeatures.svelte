<script lang="ts">
	const placeholderBody = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis velit consectetur.';
	const featuers = [
		{ title: 'Amazing DX', body: placeholderBody, icon: 'fa-laptop-code' },
		{ title: 'Accessability', body: placeholderBody, icon: 'fa-universal-access' },
		{ title: 'Typescript Support', body: placeholderBody, icon: 'fa-code' },
		{ title: 'Extensible', body: placeholderBody, icon: 'fa-square-arrow-up-right' },
		{ title: 'Integrations', body: placeholderBody, icon: 'fa-puzzle-piece' },
		{ title: 'Icon Agnostic', body: placeholderBody, icon: 'fa-icons' }
	];
</script>

<div class="space-y-4 md:space-y-10">
	<!-- Info -->
	<div class="space-y-4 text-center">
		<h2>And so much more....</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</div>
	<!-- Grid -->
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
		<!-- Loop -->
		{#each featuers as feature}
			<!-- Card -->
			<div class="card variant-glass shadow dark:shadow-none p-4 md:p-10 space-y-4 text-center">
				<span class="btn-icon btn-icon-xl variant-soft-primary">
					<i class="fa-solid {feature.icon}" />
				</span>
				<h3>{feature.title}</h3>
				<p>{feature.body}</p>
			</div>
		{/each}
	</div>
</div>
