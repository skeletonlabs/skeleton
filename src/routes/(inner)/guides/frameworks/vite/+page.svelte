<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="page-container">
	<!-- Breadcrumbs -->
	<Breadcrumb>
		<Crumb href="/guides/frameworks">Frameworks</Crumb>
		<Crumb>Vite</Crumb>
	</Breadcrumb>

	<!-- Header -->
	<header>
		<div class="grid grid-cols-[1fr_auto] gap-4">
			<div class="space-y-2">
				<h1>Vite + Svelte</h1>
				<p>This guide will help you scaffold a basic Skeleton-powered app with Vite + Svelte.</p>
			</div>
			<div class="place-self-end">
				<a class="btn btn-filled-primary" href="https://vitejs.dev/" target="_blank" rel="noreferrer">Documentation</a>
			</div>
		</div>
	</header>

	<hr />

	<!-- Prereqs -->
	<section class="space-y-4">
		<h2>Getting Started</h2>
		<p>To begin, let's make a couple quick modifications to our app. This ensures our layout will display properly.</p>
		<h3>Adjust index.html</h3>
		<p>Open <code>/src/index.html</code> and add the following classes so our <em>app</em> div fills the canvas size.</p>
		<CodeBlock language="html" code={`<div id="app" class="h-full overflow-hidden"></div>`.trim()} />
		<p>
			Optionally you can enable Dark Mode by default by adding the <code>.dark</code> class to your <em>HTML</em> element at the top of the page.
		</p>
		<CodeBlock language="html" code={`<html lang="en" class="dark">`.trim()} />
		<h3>Global Stylesheet</h3>
		<p>
			Open your global stylesheet in <code>/src/app.postcss</code>. Remove the @tailwind directives and replace the contents of the file
			with the following.
		</p>
		<CodeBlock language="css" code={`html, body { @apply h-full overflow-hidden; }`} />
	</section>

	<hr />

	<section class="space-y-4">
		<h2>App Shell Layout</h2>
		<!-- prettier-ignore -->
		<p>
			Neither Vite nor Svelte provide an application router by default. For this guide, let's assume this app is a single landing page layout. Our page needs some structure, so let's implement the Skeleton <a href="/components/app-shell">App Shell</a> component. Open your root app component in <code>/src/App.svelte</code> and add the following.
		</p>
		<CodeBlock
			language="html"
			code={`
\<script\>
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
\</script\>

<AppShell>
	<!-- Header -->
	<svelte:fragment slot="header">(header)</svelte:fragment>
	<!-- Sidebar -->
	<svelte:fragment slot="sidebarLeft">(sidebar)</svelte:fragment>
	<!-- Page Content -->
	<div id="page">
		<h1>Hello Skeleton</h1>
	</div>
</AppShell>
`}
		/>
		<h3>Add the App Bar</h3>
		<p>
			Next, let's add a header element using Skeleton's <a href="/components/app-bar">App Bar</a> component. Replace "Skeleton" with your application
			name and customize the GitHub link as desired.
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
			<a class="btn btn-sm" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
		</svelte:fragment>
	</AppBar>
	<!-- --- -->
</svelte:fragment>
`}
		/>
		<h3>Add Sidebar Navigation</h3>
		<p>
			Let's customize our App Shell's sidebar slot to make it stand out a bit more. Add the following Tailwind utility classes to the <code
				>slotSidebarLeft</code
			> prop.
		</p>
		<CodeBlock language="html" code={`<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">`} />
		<p>
			After that, let's implement a <a href="/elements/lists">Tailwind Elements navigation list</a> within the App Shell's left sidebar slot.
		</p>
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

	<!-- Page -->
	<section class="space-y-4">
		<h2>Page Contents</h2>
		<p>
			Now let's add some basic content to our homepage. Open <code>/src/App.svelte</code> and replace the contents with the following. This
			will provide multiple "Tailwind Elements" styled by the
			<code>all.css</code> stylesheets.
		</p>
		<CodeBlock
			language="html"
			code={`
<div id="page" class="container mx-auto p-8 space-y-8">
	<h1>Homepage</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<hr />
	<section class="card p-4">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</section>
	<hr />
	<section class="flex space-x-2">
		<a class="btn btn-filled-primary" href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>
		<a class="btn btn-filled-secondary" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind</a>
		<a class="btn btn-filled-tertiary" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
	</section>
</div>
`}
		/>
		<h3>Add a Component</h3>
		<p>
			Finally let's implement Skeleton's <a href="/components/gradient-headings">Gradient Heading</a> component. Import the component and
			replace the <em>H1</em> heading on the page with the following. Feel free to adjust the settings and text as you wish.
		</p>
		<CodeBlock
			language="html"
			code={`
\<script\>
	import { GradientHeading } from '@skeletonlabs/skeleton';
\</script\>

<GradientHeading tag="h1" direction="bg-gradient-to-br" from="from-primary-500" to="to-secondary-500">
	Homepage
</GradientHeading>
`}
		/>
	</section>
</div>
