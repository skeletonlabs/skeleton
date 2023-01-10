<script lang="ts">
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import AccordionGroup from '$lib/components/Accordion/AccordionGroup.svelte';
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';
</script>

<div class="page-container">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Comparisons</h1>
		<p>See how Skeleton compares to other UI component libraries.</p>
	</header>

	<hr />

	<!-- Mantine -->
	<section class="space-y-4">
		<h2>Mantine</h2>
		<a href="https://mantine.dev/" target="_blank" rel="noreferrer">https://mantine.dev/</a>
		<p>
			It’s no secret that Mantine has had a huge influence on the features and design of Skeleton. We love Mantine’s huge set of components,
			modular add-ons, and, of course, the best-in-class documentation. We’re also huge fans of the deep customization provided per
			component. However, Mantine is unfortunately only available for React. That said, the Skeleton team hopes to bridge the gap and
			provide a similar experience for Svelte developers.
		</p>
	</section>

	<!-- Flowbite -->
	<section class="space-y-4">
		<h2>Flowbite</h2>
		<a href="https://flowbite.com/" target="_blank" rel="noreferrer">https://flowbite.com/</a>
		<p>
			Flowbite provides a set of turnkey HTML/CSS components built with Tailwind’s utility class system. Unlike other libraries, Flowbite
			focuses on a singular and opinionated design aesthetic. Flowbite is a general purpose library, which means it can be used within any
			framework, but also provides framework-specific variations like <a
				href="https://flowbite-svelte.com/"
				target="_blank"
				rel="noreferrer">Flowbite Svelte</a
			>. It’s relatively simple to tailor a Flowbite component to work within an existing Tailwind design system. In fact, it’s even
			possible to pair Flowbite with Skeleton, allowing you to mix and match components, while taking advantage of Skeleton’s theme system.
		</p>
		<div class="card p-4 card-glass-surface">
			<AccordionGroup>
				<AccordionItem>
					<svelte:fragment slot="summary">
						<strong>View Flowbite integration mini-guide.</strong>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="space-y-4 pb-3">
							<p>
								Let's integrate a <a href="https://flowbite.com/docs/components/card/" target="_blank" rel="noreferrer">Flowbite Card</a>.
								Here's the default markup:
							</p>
							<CodeBlock
								language="html"
								code={`
<a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Flowbite Version</h5>
	<p class="font-normal text-gray-700 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
</a>
						`}
							/>
							<p>We make several small adjustments to take advantage of Skeleton's styles and theme system:</p>
							<ul class="list-disc list-inside">
								<li>Replaced all instances of the <code>bg-gray-X</code> class with <code>bg-surface-X</code>.</li>
								<li>Added a <code>!no-outline</code> class to prevent text underlines.</li>
								<li>Modified the the heading to be an H2 and dropped <code>text-2xl font-bold</code> classes.</li>
								<li>Bumped <code>max-w-sm</code> up to <code>max-w-lg</code> to fit our content width.</li>
							</ul>
							<CodeBlock
								language="html"
								code={`
<a href="#" class="block p-6 max-w-lg bg-white rounded-lg border border-surface-200 shadow-md hover:bg-surface-100 dark:bg-surface-800 dark:border-surface-700 dark:hover:bg-surface-700 !no-underline">
	<h2 class="mb-2 tracking-tight text-surface-900 dark:text-white">Flowbite + Skeleton = ❤️</h2>
	<p class="font-normal text-surface-700 dark:text-surface-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
</a>
						`}
							/>
							<p>Here's the final result. Try toggling various themes to see how the Flowbite component adapts.</p>
							<a
								href="/docs/comparisons"
								class="block p-6 max-w-lg bg-white rounded-lg border border-surface-200 shadow-md hover:bg-surface-100 dark:bg-surface-800 dark:border-surface-700 dark:hover:bg-surface-700 !no-underline"
							>
								<h2 class="mb-2 tracking-tight text-surface-900 dark:text-white">Skeleton + Flowbite = ❤️</h2>
								<p class="font-normal text-surface-700 dark:text-surface-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
							</a>
						</div>
					</svelte:fragment>
				</AccordionItem>
			</AccordionGroup>
		</div>
	</section>

	<!-- Daisy UI -->
	<section class="space-y-4">
		<h2>Daisy UI</h2>
		<a href="https://daisyui.com/" target="_blank" rel="noreferrer">https://daisyui.com/</a>
		<p>
			Daisy can be compared to Skeleton due to our shared use of Tailwind CSS and highly customizable theme systems. Unfortunately, Daisy
			themes rely on hex color values which <a
				href="https://tailwindcss.com/docs/customizing-colors#using-css-variables"
				target="_blank"
				rel="noreferrer">prevents the use of the opacity modifier syntax</a
			>. Daisy also opts to forgo the biggest benefit of Tailwind, the deeply extensible utility class system, instead relying on
			<a href="https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction" target="_blank" rel="noreferrer">@apply</a> to generate
			canned style sets. Skeleton, on the other hand, treats utility classes as first class citizens, providing hooks to set and override Tailwind
			classes within each component. Skeleton components also accept arbitrary classes, allowing full customization from top to bottom. However,
			it’s worth noting that Daisy is a general purpose library available to any framework, while Skeleton focuses purely on Svelte.
		</p>
	</section>

	<!-- Svelte Material UI -->
	<section class="space-y-4">
		<h2>Svelte Material UI</h2>
		<a href="https://sveltematerialui.com/" target="_blank" rel="noreferrer">https://sveltematerialui.com/</a>
		<p>
			The founding members of Skeleton are huge fans of Material Design and recognize its influence on modern web UI, UX, and component
			systems in general. Our team has extensive experience with <a href="https://material.angular.io/" target="_blank" rel="noreferrer"
				>Angular Material</a
			>, which adapts the Material Design conventions for the <a href="https://angular.io/" target="_blank" rel="noreferrer">Angular</a>
			framework. This has actually influenced many of the design decisions for creating Skeleton, including our opinions on
			<a href="/elements/forms">form components</a>. It makes sense that Svelte Material UI would be popular, as it bridges the benefits of
			Material Design with the power of Svelte. However, Skeleton has chosen to shy away from the look and feel of Material Design, and
			instead create a more unique aesthetic. Additionally, Skeleton features tight integration with Tailwind to aid in building a fully
			realized design system, allowing you to control every aspect of your interface from the ground up. If, for some reason, you are
			adverse to Tailwind or you wish to lean into the Material Design style, then we would recommend Svelte Material UI. It also has the
			benefit of being one of the oldest and most mature UI component libraries available for Svelte today.
		</p>
	</section>
</div>
