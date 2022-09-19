<script lang="ts">
	import { Divider } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import Alert from '$lib/components/Alert/Alert.svelte';

	const dynamicSvelteWrapperSnippet: string = `
\<script lang="ts"\>
	function triggerMessage(): void { console.log('Hello, Skeleton'); }
\<\/script\>\n
<a class="btn btn-filled-primary" on:click={() => { triggerMessage() }}>Trigger</a>
`.trim();
</script>

<div class="space-y-8">
	<!-- Header -->
	<header>
		<div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-start md:items-center">
			<div class="flex-auto space-y-4">
				<h1>Astro</h1>
				<p class="flex-auto">Skeleton now officially supports the Astro web framework. This guide provides a walkthrough for scaffolding a simple Astro application.</p>
			</div>
			<nav class="flex-none">
				<a class="btn btn-filled-primary" href="https://astro.build/" target="_blank">Website & Docs</a>
			</nav>
		</div>
	</header>

	<Divider />

	<Alert>
		Please ensure you've read through <a href="/guides/tailwind">Tailwind</a>, <a href="/guides/themes">Themes</a>, and <a href="/guides/styling">Styling</a> guides before you proceed.
	</Alert>

	<!-- Setup -->
	<section class="space-y-4">
		<h2>Setup</h2>
		<h4>Generate a Layout</h4>
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
`.trim()}
		/>
		<!-- Implement Layout -->
		<h4>Use Layouts in Pages</h4>
		<p>
			You can then apply this layout to any page. Let's do this for our homepage in <code>/src/pages/index.astro</code>.
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
            `.trim()}
		/>
	</section>

	<Divider />

	<!-- Scaffold -->
	<section class="space-y-4">
		<h2>Components</h2>
		<p>Let's review how to implement Skeleton components while taking advantage of <a href="https://docs.astro.build/en/concepts/islands/" target="_blank">Astro's islands architecture</a>.</p>
		<h4>Static</h4>
		<p>
			For simple Skeleton components that do not require JavaScript logic or functionality, you can import these components directly in the homepage <code>/src/pages/index.astro</code>:
		</p>
		<CodeBlock
			language="html"
			code={`
---
import LayoutBasic from '../layouts/LayoutBasic.astro';
import { LogoCloud, Logo } from '@brainandbones/skeleton';
---
<LayoutBasic>
    <LogoCloud>
        <Logo>
            <svelte:fragment slot="lead">💀</svelte:fragment>
            <svelte:fragment slot="label">Skeleton</svelte:fragment>
        </Logo>
    </LogoCloud>
</LayoutBasic>
        `.trim()}
		/>
		<h4>Dynamic</h4>
		<p>
			For Skeleton components that make use of reactive Svelte features, such as the <code>on:click</code>
			directive, Writable Stores, Actions, or similiar, you'll need to create a Svelte wrapper component, then hydrate this component. For this example we'll create
			<code>/src/components/WrapperExample.svelte</code>:
		</p>
		<CodeBlock language="html" code={dynamicSvelteWrapperSnippet} />
		<p>
			Now we can display the wrapper on the homepage in <code>/src/pages/index.astro</code>:
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
        `.trim()}
		/>
		<p>
			Please note that dynamic components must be hydrated using <a href="https://docs.astro.build/en/reference/directives-reference/#client-directives" target="_blank">Astro's Client Directives</a>.
			We opted for
			<code>client:visible</code>, which loads and hydrates the JavaScript component only when it enters the user’s viewport. If we did not do this, the component would be rendered as only HTML/CSS
			and the <code>triggerMessage()</code> method would not function.
		</p>
	</section>

	<Divider />

	<!-- Official Docs -->
	<div class="card card-body flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>If you need more help with Astro, try their official Discord or documentation.</p>
		<div class="space-x-2">
			<a class="btn btn-ghost" href="https://astro.build/chat" target="_blank">Discord</a>
			<a class="btn btn-ghost" href="https://docs.astro.build/en/getting-started/" target="_blank">Docs</a>
		</div>
	</div>
</div>
