<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Snippets
	const dynamicSvelteWrapperSnippet: string = `
\<script lang="ts"\>
	function triggerMessage(): void { console.log('Hello, Skeleton'); }
\<\/script\>\n
<button class="btn btn-filled-primary" on:click={() => { triggerMessage() }}>Trigger</button>
`;
</script>

<div class="page-container">
	<!-- Breadcrumbs -->
	<Breadcrumb>
		<Crumb href="/guides/frameworks">Frameworks</Crumb>
		<Crumb>Astro</Crumb>
	</Breadcrumb>

	<!-- Header -->
	<header>
		<div class="grid grid-cols-[1fr_auto] gap-4">
			<div class="space-y-2">
				<h1>Astro</h1>
				<p>This guide will help create a basic Skeleton project using Astro, including adding components using Astro's island architecture.</p>
			</div>
			<div class="place-self-end">
				<a class="btn btn-filled-primary" href="https://astro.build/" target="_blank">Documentation</a>
			</div>
		</div>
	</header>

	<hr />

	<!-- Layout -->
	<section class="space-y-4">
		<h2>Layouts</h2>
		<p>
			Create a new <a href="https://docs.astro.build/en/core-concepts/layouts/" target="_blank">Astro Layout</a>
			in <code>/src/layouts/LayoutBasic.astro</code>, then add the following:
		</p>
		<CodeBlock
			language="html"
			code={`
---
import '../styles/base.css';
---
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<meta name="generator" content={Astro.generator} />
		<title>Astro</title>
	</head>
	<body>
		<slot />
	</body>
</html>
`}
		/>
		<p>
			You can then apply this layout to any page. Let's add this to our home page in <code>/src/pages/index.astro</code>.
		</p>
		<CodeBlock
			language="html"
			code={`
---
import LayoutBasic from '../layouts/LayoutBasic.astro';
---
<LayoutBasic>
	<h1>Hello Skeleton</h1>
</LayoutBasic>
		`}
		/>
	</section>

	<hr />

	<!-- Island Architecture -->
	<section class="space-y-4">
		<h2>Island Architecture</h2>
		<p>Let's review how to implement Skeleton features while taking advantage of <a href="https://docs.astro.build/en/concepts/islands/" target="_blank">Astro's islands architecture</a>.</p>
		<h3>Static Island</h3>
		<p>
			For simple Skeleton components that do not require JavaScript logic or functionality, you can import these components directly in the home page <code>/src/pages/index.astro</code>:
		</p>
		<CodeBlock
			language="html"
			code={`
---
import LayoutBasic from '../layouts/LayoutBasic.astro';
import { Breadcrumb, Crumb } from '@brainandbones/skeleton';
---
<Breadcrumb>
	<Crumb href='/'>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(page)</span>
	</Crumb>
	<Crumb href='/'>(page)</Crumb>
	<Crumb>(current)</Crumb>
</Breadcrumb>
	`}
		/>
		<h3>Dynamic Island</h3>
		<p>
			If you need to support more complex Skeleton components or make use of Svelte features, such as the <code>on:click</code>
			Action, Writable Stores, or similar, then you'll need to create a Svelte wrapper component. For this example we'll create
			<code>/src/components/WrapperExample.svelte</code>:
		</p>
		<CodeBlock language="html" code={dynamicSvelteWrapperSnippet} />
		<p>
			Now we can import and implement the wrapper component on the home page in <code>/src/pages/index.astro</code>:
		</p>
		<CodeBlock
			language="html"
			code={`
---
import LayoutBasic from '../layouts/LayoutBasic.astro';
import WrapperExample from '../components/WrapperExample.svelte';
---
<LayoutBasic>
	<WrapperExample client:visible></WrapperExample>
</LayoutBasic>
	`}
		/>
		<p>
			Please note that dynamic components must be hydrated using <a href="https://docs.astro.build/en/reference/directives-reference/#client-directives" target="_blank">Astro's Client Directives</a>.
			We opted for
			<code>client:visible</code>, which loads and hydrates a component only when it enters the user’s viewport. If we did not do this, the component would be rendered as only HTML/CSS and the
			<code>triggerMessage()</code> method would not function.
		</p>
	</section>
</div>
