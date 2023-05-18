<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<LayoutPage>
	<!-- Header -->
	<header class="space-y-4">
		<h1 class="h1">Quickstart</h1>
		<p>This guide will walk you through the basics of creating a new Skeleton app using SvelteKit.</p>
	</header>

	<hr />

	<!-- Prerequisites -->
	<section class="space-y-4">
		<h2 class="h2">Get Started</h2>
		<p>To begin, let's scaffold our project using the Skeleton CLI. Note that we've listed a couple required options for this guide.</p>
		<CodeBlock
			language="console"
			code={`
npm create skeleton-app@latest my-skeleton-app
	- Enable SvelteKit's Typescript syntax
	- Select the "Welcome" template
cd my-skeleton-app
npm run dev
			`}
		/>
		<p>
			By selecting the "Welcome" template the project will come preconfigured with both an <a class="anchor" href="/components/app-shell"
				>App Shell</a
			>
			and <a class="anchor" href="/components/app-bar">App Bar</a> components in <code class="code">/src/routes/+layout.svelte</code>.
		</p>
	</section>

	<section class="space-y-4">
		<h2 class="h2">Add Sidebar Navigation</h2>
		<p>
			Let's customize our App Shell's sidebar slot. Open <code class="code">/src/routes/+layout.svelte</code> and add the following Tailwind
			utility classes to the AppShell <code class="code">slotSidebarLeft</code> prop.
		</p>
		<CodeBlock language="html" code={`<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">`} />
		<p>
			Next, let's implement a <a class="anchor" href="/elements/lists">navigation list</a> within the App Shell's left sidebar slot. Append
			this slot fragment alongside any other fragment within the <code class="code">AppShell</code>.
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

	<!-- Page -->
	<section class="space-y-4">
		<h2 class="h2">Page Setup</h2>
		<p>
			Let's add some basic content to our homepage. Open <code class="code">/src/routes/+page.svelte</code> and replace the contents with
			the following. This will provide multiple elements automatically styled by the <code class="code">skeleton.css</code> stylesheet in our
			root layout.
		</p>
		<!-- cspell:disable -->
		<CodeBlock
			language="html"
			code={`
<div class="container mx-auto p-8 space-y-8">
	<h1 class="h1">Hello Skeleton</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<section>
		<a class="btn variant-filled-primary" href="https://kit.svelte.dev/">SvelteKit</a>
		<a class="btn variant-filled-secondary" href="https://tailwindcss.com/">Tailwind</a>
		<a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a>
	</section>
</div>
`}
		/>
		<!-- cspell:enable -->
	</section>
	<section class="space-y-4">
		<h2 class="h2">Add a Component</h2>
		<p>
			Finally let's implement Skeleton's <a class="anchor" href="/components/avatars">Avatar</a> component. First, import the component,
			then add it anywhere within your page, we recommend within the <code class="code">.container</code> element.
		</p>
		<CodeBlock
			language="html"
			code={`
\<script\>
	import { Avatar } from '@skeletonlabs/skeleton';
\</script\>\n
<Avatar src="https://i.pravatar.cc/" />
`}
		/>
	</section>

	<!-- Done -->
	<section class="space-y-4">
		<p>
			Congrats! You have now created a simple Skeleton project. Feel free to begin customizing and implementing additional Tailwind, Svelte,
			and Utility features.
		</p>
	</section>
</LayoutPage>
