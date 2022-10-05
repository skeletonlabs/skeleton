<script lang="ts">
	import { storeFramework } from '$docs/stores';

	// Components
	// import Alert from '$lib/components/Alert/Alert.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';

	// Snippets
	const dynamicSvelteWrapperSnippet: string = `
\<script lang="ts"\>
	function triggerMessage(): void { console.log('Hello, Skeleton'); }
\<\/script\>\n
<button class="btn btn-filled-primary" on:click={() => { triggerMessage() }}>Trigger</button>
`;
</script>

<div class="page-container">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Scaffold a Project</h1>
		<p>If you need some help scaffolding your project, see our guides for each supported framework below.</p>
	</header>

	<!-- Section -->
	<section class="space-y-4">
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit" class="opacity-20">SvelteKit</Tab>
			<Tab value="vite" class="opacity-20">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		{#if ['sveltekit', 'vite'].includes($storeFramework)}
			<div class="card card-body text-center !py-20"><strong class="capitalize">{$storeFramework}</strong> scaffolding guide coming soon!</div>
		{:else if $storeFramework === 'astro'}
			<h2 class="sr-only">Astro</h2>
			<!-- Astro Intro -->
			<div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-start md:items-center">
				<p class="flex-auto">Skeleton now provides supports the Astro web framework, including support for their unique island architecture.</p>
				<nav class="flex-none">
					<a class="btn btn-filled-primary" href="https://astro.build/" target="_blank">View Website</a>
				</nav>
			</div>
			<h3 class="sr-only">Layouts in Astro</h3>
			<!-- Generate Layout -->
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
`}
			/>
			<!-- Layout -->
			<h4>Use Layouts in Pages</h4>
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
			<hr class="!my-8" />
			<!-- Island Architecture -->
			<h3>Island Architecture</h3>
			<p>Let's review how to implement Skeleton features while taking advantage of <a href="https://docs.astro.build/en/concepts/islands/" target="_blank">Astro's islands architecture</a>.</p>
			<h4>Static Island</h4>
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
			<h4>Dynamic Island</h4>
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
				Please note that dynamic components must be hydrated using <a href="https://docs.astro.build/en/reference/directives-reference/#client-directives" target="_blank">Astro's Client Directives</a
				>. We opted for
				<code>client:visible</code>, which loads and hydrates a component only when it enters the user’s viewport. If we did not do this, the component would be rendered as only HTML/CSS and the
				<code>triggerMessage()</code> method would not function.
			</p>
		{/if}
	</section>

	<!-- Next -->
	<!-- ... -->
</div>
