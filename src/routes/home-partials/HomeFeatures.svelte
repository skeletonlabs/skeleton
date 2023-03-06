<script lang="ts">
	const placeholderBody = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis velit consectetur.';
	const featuers = [
		{
			title: 'Amazing DX',
			body: 'Offers a best in class developer by providing top tier documentation and thourough examples so you can ship faster.',
			icon: 'fa-laptop-code'
		},
		{
			title: 'Accessability',
			body: 'Components follow WAI-ARIA guidelines to implemente the required semantics, attributes, and keyboard interactions.',
			icon: 'fa-universal-access'
		},
		{
			title: 'Extensible',
			body: 'Bring your favorite HTML and CSS elements from Flowbite or Tailwind UI and expand your toolkit and capabilities even further.',
			icon: 'fa-square-arrow-up-right'
		},
		{
			title: 'Typescript',
			body: 'Implements Typescript by default, with direct access to IntelliSense feedback while you build your applications.',
			icon: 'fa-code'
		},
		{
			title: 'Integrations',
			body: `Bring your favorite Svelte or Javascript libraries and integrate the adaptive theme system for a seamless experience.`,
			icon: 'fa-puzzle-piece'
		},
		{
			title: 'Icon Agnostic',
			body: 'Supports all forms of iconography, including unicode and emoji, as well as vector or SVG-based icon libraries.',
			icon: 'fa-icons'
		}
	];
</script>

<div class="space-y-4 md:space-y-10">
	<!-- Info -->
	<div class="space-y-4 text-center">
		<h2>And so much more....</h2>
		<p>There's too many amazing features to list them all, but here's a few of the most exciting.</p>
	</div>
	<!-- Grid -->
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
		<!-- Loop -->
		{#each featuers as feature}
			<!-- Card -->
			<div class="card variant-glass p-4 shadow-lg md:p-10 space-y-4 text-center">
				<span class="btn-icon btn-icon-xl variant-soft-primary">
					<i class="fa-solid {feature.icon}" />
				</span>
				<h3>{feature.title}</h3>
				<p>{feature.body}</p>
			</div>
		{/each}
	</div>
</div>
