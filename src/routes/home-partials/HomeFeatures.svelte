<script lang="ts">
	const features = [
		{
			title: 'Amazing DX',
			body: 'Offers a best in class developer experience providing thorough documentation and ample examples to help you ship faster.',
			icon: 'fa-laptop-code'
		},
		{
			title: 'Accessibility',
			body: 'Components follow WAI-ARIA guidelines to implement required semantics, attributes, and keyboard interactions.',
			icon: 'fa-universal-access'
		},
		{
			title: 'Extensible',
			body: `Bring elements from other UI libraries such as <a class="anchor" href="/blog/skeleton-plus-flowbite">Flowbite</a> or <a class="anchor" href="/blog/skeleton-plus-tailwind-ui">Tailwind UI</a> to expand your toolkit arsenal even further.`,
			icon: 'fa-square-arrow-up-right'
		},
		{
			title: 'Typescript',
			body: 'Uses Typescript by default and provides IntelliSense feedback as you build your application within your editor.',
			icon: 'fa-code'
		},
		{
			title: 'Integrations',
			body: `Bring your favorite Svelte or Javascript libraries and use the adaptive theme system for a seamless experience.`,
			icon: 'fa-puzzle-piece'
		},
		{
			title: 'Icon Agnostic',
			body: 'Supports all forms of iconography for complete control, including: unicode, emoji, vector, or SVG-based icon systems.',
			icon: 'fa-icons'
		}
	];
</script>

<div class="space-y-4 md:space-y-10">
	<!-- Info -->
	<div class="space-y-4 text-center">
		<h2 class="h2">And so much more...</h2>
		<p>There's too many amazing features to list, but here are a few of our favorites.</p>
	</div>
	<!-- Grid -->
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
		<!-- Loop -->
		{#each features as feature}
			<!-- Card -->
			<div class="card variant-glass p-4 shadow-lg md:p-10 space-y-4 text-center">
				<span class="btn-icon btn-icon-xl variant-soft-primary">
					<i class="fa-solid {feature.icon}" />
				</span>
				<h3 class="h3">{feature.title}</h3>
				<p>{@html feature.body}</p>
			</div>
		{/each}
	</div>
</div>
