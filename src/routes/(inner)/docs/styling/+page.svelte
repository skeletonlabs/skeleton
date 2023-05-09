<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	// Docs
	import LayoutPage from '$docs/layouts/LayoutPage/LayoutPage.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Stores
	export const storeStylesheets: Writable<string> = writable('recommended');
	export const storeStylesheetElements: Writable<string> = writable('combined');
</script>

<LayoutPage>
	<header class="space-y-4">
		<h1 class="h1">Styling</h1>
		<!-- prettier-ignore -->
		<p>
			This covers basic techniques for styling Skeleton components. View our <a class="anchor" href="/blog/deep-dive-skeleton-styling" target="_blank">comprehensive guide</a> to learn more.
		</p>
	</header>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">Via Component Props</h2>
		<p>
			This is the recommended manner to style most components. Each component provides a set of style <em>props</em> (read: properties) that
			allow you to override the default style classes. See a list of available options under the "Props" tab per each feature in Skeleton.
		</p>
		<CodeBlock language="html" code={`<ExampleComponent background="bg-secondary-500 md:bg-primary-500">Skeleton</ExampleComponent>`} />
		<blockquote class="blockquote">
			TIP: You may provide multiple utility classes per each prop, as well as use variations such as <code class="code"
				>dark:bg-green-500</code
			>.
		</blockquote>
	</section>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">Via the Class Attribute</h2>
		<p>
			If a style prop is not available, you can still provide arbitrary utility classes via a standard <code class="code">class</code> attribute.
			These styles are always applied to the parent element in the component template.
		</p>
		<CodeBlock language="html" code={`<ExampleComponent class="text-3xl px-10 py-5">Skeleton</ExampleComponent>`} />
	</section>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">Tailwind's Arbitrary Variants</h2>
		<p>
			If you need to target deeper than the parent element, we recommend using <a
				class="anchor"
				href="https://tailwindcss.com/blog/tailwindcss-v3-1#arbitrary-values-but-for-variants"
				target="_blank"
				rel="noreferrer">Tailwind's arbitrary variant syntax</a
			>.
		</p>
		<CodeBlock language="html" code={`<ExampleComponent class="[&>.foo-label]:p-4">...</ExampleComponent>`} />
		<p>This will affect the Parent > .foo-label element and apply a Tailwind class of <code class="code">p-4</code>.</p>
	</section>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">Global Styles Overrides</h2>
		<p>
			Skeleton components include selector classes, such as <code class="code">.avatar-image</code> within the
			<a class="anchor" href="/components/avatars">Avatar component</a>. Please note that selector classes are always the first listed.
		</p>
		<CodeBlock language="html" code={`<img class="avatar-image ...">...</img>`} />
		<p>Use these selector classes to target global style overrides to all instances of this feature in your global stylesheet.</p>
		<CodeBlock language="css" code={`.avatar-image { @apply border-2 border-red-500; }`} />
		<blockquote class="blockquote">
			In some cases you may need to use <code class="code">!</code>
			<a class="anchor" href="https://tailwindcss.com/docs/configuration#important-modifier" target="_blank" rel="noreferrer">important</a> or
			style light and dark mode variants to give precedence.
		</blockquote>
	</section>
</LayoutPage>
