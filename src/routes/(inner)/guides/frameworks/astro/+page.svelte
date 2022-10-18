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

	<!-- Global Stylesheet -->
	<section class="space-y-4">
		<h2>Global Stylesheet</h2>
		<p>Let's start by creating a global stylesheet in <code>/src/styles/global.css</code>. Then add the following styles.</p>
		<CodeBlock language="css" code={`html, body { @apply h-full overflow-hidden; }`} />
	</section>

	<hr />

	<!-- Layout -->
	<section class="space-y-4">
		<h2>Layout Setup</h2>
		<p>
			We'll create a new <a href="https://docs.astro.build/en/core-concepts/layouts/" target="_blank">Astro Layout</a>
			in <code>/src/layouts/LayoutBasic.astro</code>. Our layout needs a bit of structure, so let's make use of the Skeleton <a href="/components/app-shell">App Shell</a> component.
		</p>
		<CodeBlock
			language="html"
			code={`
---
import '@brainandbones/skeleton/themes/theme-skeleton.css';
import '@brainandbones/skeleton/styles/all.css';
import '../styles/global.css';

import { AppShell, AppBar } from "@brainandbones/skeleton";
---

<!-- NOTE: we've set the .dark class to enable Dark Mode -->
<html lang="en" class="dark">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<meta name="generator" content={Astro.generator} />

		<!-- NOTE: customize your app title -->
		<title>Skeleton</title>
	</head>
	<body>
		<AppShell>
            <!-- Header -->
            <svelte:fragment slot="header">(header)</svelte:fragment>
            <!-- Sidebar -->
            <svelte:fragment slot="sidebarLeft">(sidebar)</svelte:fragment>
            <!-- Page Content Slot -->
            <slot />
        </AppShell>
	</body>
</html>
`}
		/>
		<h3>Add the App Bar</h3>
		<p>
			Next, let's add a header element using Skeleton's <a href="/components/app-bar">App Bar</a> component. Replace "Skeleton" with your application name and customize the GitHub link as desired.
		</p>
		<CodeBlock
			language="html"
			code={`
<svelte:fragment slot="header">
    <!-- Insert the App Bar: -->
	<AppBar>
		<svelte:fragment slot="lead">
			<h1>Skeleton</h1>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<a class="btn btn-sm" href="https://github.com/" target="_blank">GitHub</a>
		</svelte:fragment>
	</AppBar>
	<!-- --- -->
</svelte:fragment>
            `}
		/>
		<h3>Add Sidebar Navigation</h3>
		<p>Let's customize our App Shell's sidebar slot to make it stand out a bit more. Add the following Tailwind utility classes to the <code>slotSidebarLeft</code> prop.</p>
		<CodeBlock language="html" code={`<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">`} />
		<p>After that, let's implement a <a href="/elements/lists">Tailwind Elements navigation list</a> within the App Shell's left sidebar slot.</p>
		<CodeBlock
			language="html"
			code={`
<svelte:fragment slot="sidebarLeft">
	<!-- Insert the list: -->
	<nav class="list-nav">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</nav>
	<!-- --- -->
</svelte:fragment>
			`}
		/>
	</section>

	<hr />

	<!-- Page Setup -->
	<section class="space-y-4">
		<h2>Page Setup</h2>
		<p>
			Now that our layout is setup, let's implement it in our homepage in <code>/src/pages/index.astro</code>. Replace the file contents with the following. Be aware that we'll make use of the
			Gradient Heading import in a following step below.
		</p>
		<CodeBlock
			language="html"
			code={`
---
import LayoutBasic from '../layouts/LayoutBasic.astro';
import { GradientHeading } from "@brainandbones/skeleton";
---
<LayoutBasic>
	<h1>Hello Skeleton</h1>
</LayoutBasic>
		`}
		/>
		<p>
			Now let's add some basic content to our homepage. Open <code>/src/pages/index.astro</code> and replace the contents within the <code>LayoutBasic</code> tags with the following. This will provide
			multiple "Tailwind Elements" styled by the <code>all.css</code> stylesheets.
		</p>
		<CodeBlock
			language="html"
			code={`
<LayoutBasic>
	<div class="container mx-auto p-8 space-y-8">
		<h1>Hello Skeleton</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		<hr />
		<section class="card card-body">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		</section>
		<hr />
		<section class="flex space-x-2">
		<a class="btn btn-filled-primary" href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>
		<a class="btn btn-filled-accent" href="https://tailwindcss.com/" target="_blank">Tailwind</a>
		<a class="btn btn-filled-ternary" href="https://github.com/" target="_blank">GitHub</a>
		</section>
	</div>
</LayoutBasic>
                `}
		/>
		<p>These elements are styled automatically due to our use of <code>all.css</code> and the included Tailwind Elements stylesheets.</p>
		<h3>Add a Component</h3>
		<p>
			Let's implement Skeleton's <a href="/components/gradient-headings">Gradient Heading</a> component. Replace the <em>H1</em> heading on the page with the following. Feel free to adjust the settings
			and text as you wish.
		</p>
		<CodeBlock
			language="html"
			code={`
<GradientHeading tag="h1" direction="bg-gradient-to-br" from="from-primary-500" to="to-accent-500">
    Homepage
</GradientHeading>
        `}
		/>
	</section>

	<!-- --------------------------- -->

	<!-- Island Architecture -->
	<section class="space-y-4">
		<h2>Island Architecture</h2>
		<p>
			Astro allows for partial component hydration via the <a href="https://docs.astro.build/en/concepts/islands/" target="_blank">Astro Island Architecture</a>. Let's learn how to utilize this for
			Skeleton features.
		</p>
		<!-- Static -->
		<h3>Static Islands</h3>

		<p>
			Simple Svelte Components and Tailwind Elements require no Javascript functionality. This means they can be imported and used directly within your Astro page components with no hydration
			required.
		</p>
		<CodeBlock
			language="html"
			code={`
---
import { Breadcrumb, Crumb } from '@brainandbones/skeleton';
---
<Breadcrumb>
	<Crumb href='/'>Home</Crumb>
	<Crumb>About</Crumb>
</Breadcrumb>

<a class="btn btn-filled-primary" href="/">Home</a>
	`}
		/>
		<!-- Dynamic -->
		<h3>Dynamic Islands</h3>
		<p>
			For more complex Svelte features--such as event handlers, Svelte Actions, using Svelte writable stores, and similar--we'll need to create Svelte "wrapper" component. Let's create one now in
			<code>/src/components/WrapperExample.svelte</code>, and insert a button which uses a Svelte <code>on:click</code> event handler.
		</p>
		<CodeBlock language="html" code={dynamicSvelteWrapperSnippet} />
		<p>We can then import our new wrapper component within an Astro page component, such as our homepage in <code>/src/pages/index.astro</code>.</p>
		<CodeBlock
			language="html"
			code={`
---
import LayoutBasic from '../layouts/LayoutBasic.astro';

// ...
import WrapperExample from '../components/WrapperExample.svelte';
---
<LayoutBasic>
	<!-- ... --->
	<WrapperExample client:visible></WrapperExample>
</LayoutBasic>
	`}
		/>
		<!-- Hydration -->
		<h3>Component Hydration</h3>
		<p>
			Please note that <em>dynamic components</em> MUST be hydrated using
			<a href="https://docs.astro.build/en/reference/directives-reference/#client-directives" target="_blank">Astro's Client Directives</a>. In the example above, we opted for the
			<code>client:visible</code> directive, which loads and hydrates the component Javascript only when it becomes visible the user’s viewport. Had we not hydrated our component, the
			<code>triggerMessage()</code> method would not work as expected.
		</p>
	</section>
</div>
