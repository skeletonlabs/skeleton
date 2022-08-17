<script lang="ts">
	import Card from '$lib/Card/Card.svelte';
	import Button from '$lib/Button/Button.svelte';
	import Divider from '$lib/Divider/Divider.svelte';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<div class="flex justify-between items-center">
			<h1>Astro</h1>
			<nav class="flex space-x-4">
				<Button variant="filled-primary" href="https://astro.build/" target="_blank"
					>What's Astro?</Button
				>
				<Button variant="ghost" href="https://docs.astro.build/en/getting-started/" target="_blank"
					>Docs</Button
				>
			</nav>
		</div>
		<p>
			Skeleton now officially supports the Astro web framework. This guide provides a walkthrough
			for scaffolding a simple Astro application, as well as explaining how to take advantage of
			Skeleton components within Astro's <a
				href="https://docs.astro.build/en/concepts/islands/"
				target="_blank">islands architecture</a
			>.
		</p>
	</header>

	<Divider />

	<section>
		<p>
			Make sure you've read through <a href="/guides/tailwind">Tailwind</a>,
			<a href="/guides/themes">Themes</a>, and <a href="/guides/styling">Styling</a> guides before you
			proceed.
		</p>
	</section>

	<Divider />

	<!-- Setup -->
	<section class="space-y-4">
		<h2>Setup</h2>
		<h4>Generate a Layout</h4>
		<p>
			Create a new <a href="https://docs.astro.build/en/core-concepts/layouts/" target="_blank"
				>Astro Layout</a
			>
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
			You can then update your homepage <code>/src/pages/index.astro</code> with the following code to
			apply your new layout:
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
		<h4>Static</h4>
		<p>
			For simple Skeleton components that do not require JavaScript logic or functionality, we can
			import and use the components directly:
		</p>
		<CodeBlock
			language="html"
			code={`
---
// ...
import { LogoCloud, Logo } from '@brainandbones/skeleton';
---
<BasicLayout>
    <!-- ... -->
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
			For Skeleton components that make use of reactive Svelte features, such as the <code
				>on:click</code
			>
			directive, Writable Stores, or Actions, you'll need to setup a dedicated Svelte wrapper
			component. For this example we'll create <code>/src/components/WrapperExample.svelte</code>:
		</p>
		<CodeBlock
			language="html"
			code={`
\<script\>
    function doSomething(): void {  console.log('Hello, Skeleton'); }
\<\/script\>\n
<Button variant="filled-primary" on:click={() => { triggerDialog() }}>Trigger Dialog</Button>
        `.trim()}
		/>
		<p>
			Then, implement within the Astro homepage component at <code>/src/pages/index.astro</code>:
		</p>
		<CodeBlock
			language="html"
			code={`
---
// ...
import WrapperExample from '../components/WrapperExample.svelte';
---
<BasicLayout>
    <WrapperExample client:visible></WrapperExample>
</BasicLayout>
        `.trim()}
		/>
		<p>
			Make sure to hydrate the component using <a
				href="https://docs.astro.build/en/reference/directives-reference/#client-directives"
				target="_blank">Astro's Client Directives</a
			>. We opted for <code>client:visible</code>, which loads and hydrates the component JavaScript
			when it enteres the user’s viewport. If we had failed to do this, then the
			<code>doSomething()</code> method would not operate.
		</p>
	</section>

	<Divider />

	<!-- Official Docs -->
	<Card
		class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"
	>
		<p>If you need more help with Astro, try their official Discord or documentation.</p>
		<div class="space-x-2">
			<Button variant="ghost" href="https://astro.build/chat" target="_blank">Discord</Button>
			<Button variant="ghost" href="https://docs.astro.build/en/getting-started/" target="_blank"
				>Docs</Button
			>
		</div>
	</Card>
</div>
