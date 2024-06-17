<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<LayoutPage>
	<!-- Breadcrumbs -->
	<ol class="breadcrumb">
		<li class="crumb"><a class="anchor" href="/docs/contributing">Contributing</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Documenting Pages</li>
	</ol>

	<!-- Header -->
	<header class="space-y-4">
		<h1 class="h1">Documenting Pages</h1>
		<p>
			We provide a starter template for new documentation pages in <code class="code">/src/routes/(inner)/template/+page.svelte</code>. This
			implements our
			<a
				class="anchor"
				href="https://github.com/skeletonlabs/skeleton/tree/dev/sites/skeleton.dev/src/lib/layouts/DocsShell"
				target="_blank"
				rel="noreferrer">Doc Shell</a
			> component, which ensures a consistent layout for all feature pages.
		</p>
	</header>

	<hr />

	<!-- Using the Doc Shell -->
	<section class="space-y-4">
		<h2 class="h2">Using the Doc Shell</h2>
		<p>This covers accessability details, source links, keyboard interactions, classes, parameters, and more.</p>
		<!-- prettier-ignore -->
		<div class="card variant-glass p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<p>Reference all available Doc Shell settings from the Typescript interface.</p>
			<a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton/blob/dev/sites/skeleton.dev/src/lib/layouts/DocsShell/types.ts" target="_blank" rel="noreferrer">View Available Settings</a>
		</div>
	</section>

	<!-- Implementing Sveld -->
	<section class="space-y-4">
		<h2 class="h2">Implementing Sveld</h2>
		<p>
			Use the following format to import <a href="/docs/contributing/sveld" class="anchor">component data from Sveld</a>. Note the unique
			naming structure and how <code class="code">?raw&sveld</code> is appended at the end.
		</p>
		<CodeBlock
			language="ts"
			code={`
import sveldAccordion from '@skeletonlabs/skeleton/components/Accordion/Accordion.svelte?raw&sveld';
`}
		/>
		<p>
			Each imported Sveld component reference is then passed to the <code class="code">DocsShellSettings</code> via
			<code class="code">components</code>.
		</p>
		<CodeBlock
			language="ts"
			code={`
const settings: DocsShellSettings = {
	// ...
	components: [
		{ label: 'Accordion', sveld: sveldAccordion }
	]
	// ...
};
			`}
		/>
	</section>

	<!-- Providing Examples -->
	<section class="space-y-4">
		<h2 class="h2">Providing Examples</h2>
		<!-- prettier-ignore -->
		<p>
			Make sure to provide at least one featured example at the top of the page within the <code class="code">sandbox</code> slot. Feature examples
			can be presented using the <a href="https://github.com/skeletonlabs/skeleton/tree/dev/sites/skeleton.dev/src/lib/components/DocsPreview" class="anchor" target="_blank" rel="noreferrer">DocsPreview</a> component, which provides a number of slots and properties.
		</p>
		<CodeBlock
			language="html"
			code={`
<DocsPreview>
	<svelte:fragment slot="preview">
		<p>(the visible example)</p>
	</svelte:fragment>
	<svelte:fragment slot="source">
		<p>(codeblocks and implementation details)</p>
	</svelte:fragment>
</DocsPreview>
		`}
		/>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="h2">Usage</h2>
		<p>
			The bulk of your documentation can be inserted into the <code class="code">usage</code> slot for the Doc Shell. We recommend you view existing
			documentation pages to reference how we implement the usage page structure.
		</p>
	</section>
</LayoutPage>
