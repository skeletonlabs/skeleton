<script lang="ts">
	import { Divider } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Comparisons</h1>
		<p>See how Skeleton compares to other UI component libraries.</p>
	</header>

	<Divider />

	<!-- Mantine -->
	<section class="space-y-4">
		<h2>Mantine</h2>
        <p><a href="https://mantine.dev/" target="_blank">https://mantine.dev/</a></p>
		<p>
			It’s no secret that Mantine has had a huge influence on the features and design of Skeleton. We love Mantine’s huge set of components, modular add-ons, and of course the best-in-class documentation. We’re also huge fans of the deep customization provided per component. However, Mantine is unfortunately only available for React. That said, the Skeleton team hopes to bridge the gap and provide a similar experience for Svelte developers.
		</p>
	</section>

	<Divider />

	<!-- Flowbite -->
	<section class="space-y-4">
		<h2>Flowbite</h2>
        <p><a href="https://flowbite.com/" target="_blank">https://flowbite.com/</a></p>
		<p>
			Flowbite occupies a similar space to Daisy UI, providing a turkey set of HTML/CSS components built with Tailwind. However, Flowbite provides a unique and opinionated design aesthetic. Flowbite also provides framework-specific variations, such as <a href="https://flowbite-svelte.com/" target="_blank">Flowbite Svelte</a>. Similar to Daisy, you’ll find it relatively simple to tailor a Flowbite component to work within your existing Tailwind design system. In fact, it’s possible to pair Flowbite with Skeleton, allowing you to mix and match and choose the best of both worlds. While still adapting to the Skeleton theming system. Here’s how that works:
		</p>
		<p>For example, let's see how to integrate the <a href="https://flowbite.com/docs/components/card/" target="_blank">Flowbite card component</a>.</p>
		<CodeBlock language="html" code={`
<!-- Original Flowbite Component -->
<a href="/page" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Flowbite Version</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
</a>
		`.trim()} />
		<p>By changing the color class <code>bg-gray-X</code> &rarr; <code>bg-surface-X</code> and applying <code>!no-outline</code> we get a version that works with Skeleton's theme and light/dark modes.</p>
		<CodeBlock language="html" code={`
<!-- Converted Component -->
<a href="/page" class="block p-6 max-w-sm bg-white rounded-lg border border-surface-200 shadow-md hover:bg-surface-100 dark:bg-surface-800 dark:border-surface-700 dark:hover:bg-surface-700 !no-underline">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-surface-900 dark:text-white">Skeleton Version</h5>
    <p class="font-normal text-surface-700 dark:text-surface-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
</a>
		`.trim()} />
		<p>We've removed the <code>max-w-sm</code> class to take advantage of the space, but here's the final result.</p>
		<a href="/page" class="block p-6 bg-white rounded-lg border border-surface-200 shadow-md hover:bg-surface-100 dark:bg-surface-800 dark:border-surface-700 dark:hover:bg-surface-700 !no-underline">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-surface-900 dark:text-white">Flowbite + Skeleton = ❤️</h5>
			<p class="font-normal text-surface-700 dark:text-surface-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
		</a>
	</section>

	<Divider />

	<!-- Daisy UI -->
	<section class="space-y-4">
		<h2>Daisy UI</h2>
        <p><a href="https://daisyui.com/" target="_blank">https://daisyui.com/</a></p>
		<p>
			Daisy can be compared to Skeleton due to our shared use of Tailwind CSS, vast array of components, and highly customizable theme systems. Unfortunately Daisy themes rely on hex color values which <a href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" target="_blank">prevents the use of the opacity modifier syntax</a>. Likewise Daisy opts to forgo the biggest benefit of Tailwind - the deeply extensible utility class system. Instead relying on <code>@apply</code> to generate canned style sets. An approach that <a href="https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction" target="_blank">goes against Tailwind’s own recommendation</a>. Skeleton, on the other hand, treats utility classes as first class citizens, providing hooks to set and override particular Tailwind classes throughout each component. Skeleton components also accept arbitrary classes allowing customization top to bottom. However, it’s worth noting that Daisy is a general purpose library available to any framework, while Skeleton focuses purely on Svelte.
		</p>
	</section>

	<Divider />

	<!-- Svelte Material UI -->
	<section class="space-y-4">
		<h2>Svelte Material UI</h2>
        <p><a href="https://sveltematerialui.com/" target="_blank">https://sveltematerialui.com/</a></p>
		<p>
			The founding members of Skeleton are huge fans of Material Design and recognize its influence on modern web UI, UX, and component systems in general. Our team has extensive experience with <a href="https://material.angular.io/" target="_blank">Angular Material</a>, which adapts the Material Design conventions for the <a href="https://angular.io/" target="_blank">Angular</a> framework. This has actually influenced many of the design decisions for creating Skeleton, including our opinions on <a href="/guides/forms">form components</a>. It makes sense that Svelte Material UI would be popular, as it bridges the benefits of Material Design with the power of Svelte. However, Skeleton has chosen to shy away the look and feel or Material Design, and instead create a more unique aesthetic. Additionally, Skeleton features tight integration with Tailwind, to aid in building a fully realized design system. Allowing you to control every aspect of your interface from the ground up. If for some reason you’re adverse to Tailwind or you wish to lean into the Material Design style, then we would recommend Svelte Material UI. It also has the benefit of being one of the oldest and most mature UI component libraries available for Svelte today.
		</p>
	</section>

</div>
