<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="page-container">
	<!-- Breadcrumbs -->
	<Breadcrumb>
		<Crumb href="/guides/frameworks">Frameworks</Crumb>
		<Crumb>SvelteKit</Crumb>
	</Breadcrumb>

	<!-- Header -->
	<header>
		<div class="grid grid-cols-[1fr_auto] gap-4">
			<div class="space-y-2">
				<h1>SvelteKit</h1>
				<p>This guide will help you create a basic Skeleton app within SvelteKit.</p>
			</div>
			<div class="place-self-end">
				<a class="btn btn-filled-primary" href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">Documentation</a>
			</div>
		</div>
	</header>

	<hr />

	<!-- Prereqs -->
	<section class="space-y-4">
		<h2>Getting Started</h2>
		<p>To begin, let's scaffold our project using the Skeleton CLI. We've listed the required settings.</p>
		<CodeBlock
			language="console"
			code={`
npm create skeleton-app@latest my-skeleton-app
	- Enable SvelteKit's Typescript syntax
	- Select the "Skeleton Welcome" template
cd my-skeleton-app
npm run dev
			`}
		/>
		<p>
			By selecting the "Skeleton Welcome" template the project will come preconfigured with both the <a href="/components/app-shell"
				>App Shell</a
			>
			and <a href="/components/app-bar">App Bar</a> components in <code>/src/routes/+layout.svelte</code>.
		</p>
	</section>

	<hr />

	<section class="space-y-4">
		<h2>Add Sidebar Navigation</h2>
		<p>
			Let's customize our App Shell's sidebar slot to make it stand out a bit more. Open <code>/src/routes/+layout.svelte</code> and add the
			following Tailwind utility classes to App Shell component's <code>slotSidebarLeft</code> prop.
		</p>
		<CodeBlock language="html" code={`<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">`} />
		<p>
			Next, let's implement a <a href="/elements/lists">navigation list</a> within the App Shell's left sidebar slot. Append this slot
			fragement anywhere within <code>AppShell</code>.
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
		<h2>Page Setup</h2>
		<p>
			Let's add some basic content to our homepage. Open <code>/src/routes/+page.svelte</code> and replace the contents with the following.
			This will provide multiple elements automatically styled by the <code>all.css</code> stylesheet in our root layout.
		</p>
		<CodeBlock
			language="html"
			code={`
<div class="container mx-auto p-8 space-y-8">
	<h1>Hello Skeleton</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<hr />
	<section class="card p-4">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</section>
	<hr />
	<section class="flex space-x-2">
		<a class="btn btn-filled-primary" href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>
		<a class="btn btn-filled-accent" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind</a>
		<a class="btn btn-filled-tertiary" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
	</section>
</div>
`}
		/>
		<h3>Add a Component</h3>
		<p>
			Finally let's implement Skeleton's <a href="/components/gradient-headings">Gradient Heading</a> component. First, import the
			component, then replace the <em>H1</em> heading on your homepage with the follow. Feel free to adjust the settings and text as you wish.
		</p>
		<CodeBlock
			language="html"
			code={`
\<script\>
	import { GradientHeading } from '@skeletonlabs/skeleton';
\</script\>

<GradientHeading tag="h1" direction="bg-gradient-to-br" from="from-primary-500" to="to-accent-500">
	Homepage
</GradientHeading>
`}
		/>
	</section>

	<hr />

	<!-- Done -->
	<section class="space-y-4">
		<p>
			Congrats! You have now created a simple Skeleton project. Feel free to begin customizing and implementing additional Tailwind, Svelte,
			and Utility features.
		</p>
	</section>
</div>
