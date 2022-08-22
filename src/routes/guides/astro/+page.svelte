<script lang="ts">
	import { Card, Divider, Button } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';

	const dynamicSvelteWrapperSnippet: string = `
\<script lang="ts"\>
	import { Button } from '@brainandbones/skeleton';
    function triggerMessage(): void { console.log('Hello, Skeleton'); }
\<\/script\>\n
<Button variant="filled-primary" on:click={() => { triggerMessage() }}>Trigger</Button>
        `.trim();
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<div class="flex justify-between items-center">
			<h1>Astro</h1>
			<nav class="flex space-x-4">
				<Button variant="filled-primary" href="https://astro.build/" target="_blank">What's Astro?</Button>
				<Button variant="ghost" href="https://docs.astro.build/en/getting-started/" target="_blank">Docs</Button>
			</nav>
		</div>
		<p>Skeleton now officially supports the Astro web framework. This guide provides a walkthrough for scaffolding a simple Astro application.</p>
		<p>
			<strong>IMPORTANT:</strong> Make sure you've read through <a href="/guides/tailwind">Tailwind</a>,
			<a href="/guides/themes">Themes</a>, and <a href="/guides/styling">Styling</a> guides before you proceed.
		</p>
	</header>

	<Divider />

	<!-- Setup -->
	<section class="space-y-4">
		<h2>Setup</h2>
		<h4>Generate a Layout</h4>
		<p>
			Create a new <a href="https://docs.astro.build/en/core-concepts/layouts/" target="_blank">Astro Layout</a>
			in <code>/src/layouts/BasicLayout.astro</code>, then add the following:
		</p>
		<CodeBlock
			language="html"
			code={`
---
import '../styles/theme.css';
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
import BasicLayout from '../layouts/BasicLayout.astro';
---
<BasicLayout>
    <h1>Hello Skeleton</h1>
</BasicLayout>
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
			For simple Skeleton components that do not require JavaScript logic or functionality, we can simply import and use those components directly in the homepage <code>/src/pages/index.astro</code>:
		</p>
		<CodeBlock
			language="html"
			code={`
---
import BasicLayout from '../layouts/BasicLayout.astro';
import { LogoCloud, Logo } from '@brainandbones/skeleton';
---
<BasicLayout>
    <LogoCloud>
        <Logo>
            <svelte:fragment slot="lead">💀</svelte:fragment>
            <svelte:fragment slot="label">Skeleton</svelte:fragment>
        </Logo>
    </LogoCloud>
</BasicLayout>
`.trim()}
		/>
		<h4>Dynamic</h4>
		<p>
			For Skeleton components that make use of reactive Svelte features, such as the <code>on:click</code>
			directive, Writable Stores, Actions, or similiar, you'll need to setup a dedicated Svelte wrapper component, then hydrate the wrapper component. For this example we'll create
			<code>/src/components/WrapperExample.svelte</code>:
		</p>
		<CodeBlock language="html" code={dynamicSvelteWrapperSnippet} />
		<p>
			Now we can display it on the home page <code>/src/pages/index.astro</code>:
		</p>
		<CodeBlock
			language="html"
			code={`
---
import BasicLayout from '../layouts/BasicLayout.astro';
import WrapperExample from '../components/WrapperExample.svelte';
---
<BasicLayout>
    <h1>Hello Skeleton</h1>
	<WrapperExample client:visible></WrapperExample>
</BasicLayout>
        `.trim()}
		/>
		<p>
			The trick with the dynamic component, is to hydrate it using <a href="https://docs.astro.build/en/reference/directives-reference/#client-directives" target="_blank">Astro's Client Directives</a>.
			We opted for
			<code>client:visible</code>, which loads and hydrates the JavaScript component only when it enters the user’s viewport. If we did not do this, the
			<code>triggerMessage()</code> method would not function. You can see the output in the console of your web browser.
		</p>
	</section>

	<Divider />

	<!-- Official Docs -->
	<Card class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>If you need more help with Astro, try their official Discord or documentation.</p>
		<div class="space-x-2">
			<Button variant="ghost" href="https://astro.build/chat" target="_blank">Discord</Button>
			<Button variant="ghost" href="https://docs.astro.build/en/getting-started/" target="_blank">Docs</Button>
		</div>
	</Card>
</div>
