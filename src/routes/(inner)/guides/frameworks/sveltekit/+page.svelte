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
		<p>To begin, let's make a couple quick modifications to our app. This ensures our layout will display properly.</p>
		<h3>Update App.html</h3>
		<p>Open <code>/src/app.html</code> and remove the wrapping <em>div</em> element around <code>%sveltekit.body%</code>.</p>
		<CodeBlock
			language="html"
			code={`
<body>
%sveltekit.body%
</body>
    `.trim()}
		/>
		<p>Note that you can optionally enable Dark Mode for your app by adding <code>.dark</code> to the <em>HTML</em> element at the top of <code>app.html</code>.</p>
		<CodeBlock language="html" code={`<html lang="en" class="dark">`.trim()} />
		<h3>Global Stylesheet</h3>
		<p>Open your global stylesheet in <code>/src/app.postcss</code>. Remove the @tailwind directives and replace the contents of the file with the following.</p>
		<CodeBlock language="css" code={`html, body { @apply h-full overflow-hidden; }`} />
	</section>

	<hr />

	<section class="space-y-4">
		<h2>Layout Setup</h2>
		<p>
			Our page needs a bit of structure, so let's implement the Skeleton <a href="/components/app-shell">App Shell</a> component. Add the following markup to your root layout in
			<code>/src/routes/+layout.svelte</code>.
		</p>
		<CodeBlock
			language="html"
			code={`
\<script>
    import "@brainandbones/skeleton/themes/theme-skeleton.css";
    import "@brainandbones/skeleton/styles/all.css";
    import "../app.postcss";

    import { AppShell, AppBar, GradientHeading } from "@brainandbones/skeleton";
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
		<p>Then, let's implement a <a href="/elements/lists">Tailwind Elements navigation list</a> within the App Shell's left sidebar slot.</p>
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
			Now let's add some basic content to our homepage. Open <code>/src/routes/+page.svelte</code> and replace the contents with the following. This will provide multiple "Tailwind Elements" styled
			via the <code>all.css</code> stylesheets.
		</p>
		<CodeBlock
			language="html"
			code={`
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
                `}
		/>
		<h3>Add a Component</h3>
		<p>
			Let's implement Skeleton's <a href="/components/gradient-headings">Gradient Heading</a> component. Replace the <em>H1</em> heading on the page with the following. Feel free to adjust the settings
			and text you wish.
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

	<hr />

	<!-- Styling -->
	<section class="space-y-4">
		<h2>Global Styling</h2>
		<p>
			Finally, let's update our boring square buttons. Open your global stylesheet in <code>/src/app.postcss</code> and add the following to update all buttons in your app!
		</p>
		<CodeBlock language="css" code={`.btn { @apply font-bold rounded; }`} />
	</section>
</div>
