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
				<p>This guide will help you scaffold a basic Skeleton-powered app within SvelteKit.</p>
			</div>
			<div class="place-self-end">
				<a class="btn btn-filled-primary" href="https://kit.svelte.dev/" target="_blank">Documentation</a>
			</div>
		</div>
	</header>

	<hr />

	<!-- Prereqs -->
	<section class="space-y-4">
		<h2>Getting Started</h2>
		<p>Let's make a couple quick updates to ensure our layout displays as expected.</p>
		<h3>Adjust App.html</h3>
		<p>Open <code>/src/app.html</code> and remove the wrapping <em>div</em> element around <code>%sveltekit.body%</code>.</p>
		<CodeBlock
			language="html"
			code={`
<body>
%sveltekit.body%
</body>
    `.trim()}
		/>
		<p>Optionally you can enable Dark Mode by default by adding the <code>.dark</code> class to your <em>HTML</em> element at the top of the page.</p>
		<CodeBlock language="html" code={`<html lang="en" class="dark">`.trim()} />
		<h3>Global Stylesheet</h3>
		<p>Open your global stylesheet in <code>/src/app.postcss</code>. Delete everything in this file, including the Tailwind directives. Then add the following.</p>
		<CodeBlock language="css" code={`html, body { @apply h-full overflow-hidden; }`} />
	</section>

	<hr />

	<section class="space-y-4">
		<h2>Layout Setup</h2>
		<p>
			Now, let's setup our app layout using an App Shell component. Open your root layout found in <code>/src/routes/+layout.svelte</code>. Ensure all required CSS and component imports are in place,
			as we'll use these in the next few steps. Our layout will include a header, left sidebar, and page content slots.
		</p>
		<CodeBlock
			language="html"
			code={`
\<script>
    import "@brainandbones/skeleton/themes/theme-skeleton.css";
    import "@brainandbones/skeleton/styles/all.css";
    import "../app.postcss";

    import { AppShell, AppShell, GradientHeading } from "@brainandbones/skeleton";
\</script\>

<AppShell>
    <!-- Header -->
    <svelte:fragment slot="header">(header)</svelte:fragment>
    <!-- Sidebar -->
    <svelte:fragment slot="sidebarLeft">(sidebar)</svelte:fragment>
    <!-- Page Content Slot -->
    <slot />
</AppShell>
`}
		/>
		<h3>Add the App Bar</h3>
		<p>Next, let's add a header to our App Shell using an App Bar component. Replace "Skeleton" with your application name and change the GitHub link as you wish.</p>
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
		<p>Let's add navigation to our App Shell's sidebar slot. First, let's apply some basic Tailwind class styles to the sidebar via the App Shell prop called <code>slotSidebarLeft</code>.</p>
		<CodeBlock language="html" code={`<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">`} />
		<p>Then add the sidebar navigation using Tailwind Elements navigation list.</p>
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
		<p>Note we won't setup the About page in this guide, this is just added as an example.</p>
	</section>

	<hr />

	<!-- Page -->
	<section class="space-y-4">
		<h2>Page Setup</h2>
		<p>
			Now let's add some basic content to our homepage. Open <code>/src/routes/+page.svelte</code>, drop all existing content, then add the following. These elements will be styled automatically due
			to our use of <code>all.css</code> and the included stylesheets for Tailwind Elements.
		</p>
		<CodeBlock
			language="html"
			code={`
<div class="container mx-auto p-8 space-y-8">
	<h1>Homepage</h1>
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
                `}
		/>
		<h3>Add a Component</h3>
		<p>Let's add a Gradient Heading as our first Skeleton component. Replace the current H1 heading tag with the following. Feel free to adjust the settings.</p>
		<CodeBlock
			language="html"
			code={`
<GradientHeading tag="h1" direction="bg-gradient-to-br" from="from-primary-500" to="to-accent-500">
    Homepage
</GradientHeading>
        `}
		/>
	</section>

	<hr />

	<!-- Styling -->
	<section class="space-y-4">
		<h2>Global Styling</h2>
		<p>
			Finally, let's make one more adjustment. Let's update our boring square buttons for our application. Open your global stylesheet in <code>/src/app.postcss</code> and add the following styles. All
			buttons should now be bold and rounded!
		</p>
		<CodeBlock language="css" code={`.btn { @apply font-bold rounded; }`} />
	</section>
</div>
