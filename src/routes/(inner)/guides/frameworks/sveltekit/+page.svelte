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
				<p>This guide will help you scaffold a basic Skeleton application within SvelteKit.</p>
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
		<p>Let's make a couple quick adjustments to ensure our app layout will display as expected.</p>
		<h3>Adjust App.html</h3>
		<p>Open <code>/src/app.html</code> and drop the wrapping <em>div</em> element around <code>%sveltekit.body%</code>.</p>
		<CodeBlock
			language="html"
			code={`
<body>
%sveltekit.body%
</body>
    `.trim()}
		/>
		<h3>Global Stylesheet</h3>
		<p>Open your global stylesheet in <code>/src/app.postcss</code>. Delete everything in this file, including the Tailwind directives. Then add the following styles.</p>
		<CodeBlock language="css" code={`html, body { @apply h-full overflow-hidden; }`} />
	</section>

	<hr />

	<section class="space-y-4">
		<h2>Layout Setup</h2>
		<p>
			Now, let's create our app layout using an App Shell component. Open your root layout found in <code>/src/routes/+layout.svelte</code>. Ensure all required CSS and component imports are in place.
			We'll use these in our next few steps. Initially our layout will have a header, left sidebar, and page content slots.
		</p>
		<CodeBlock
			language="html"
			code={`
\<script>
    import "@brainandbones/skeleton/themes/theme-skeleton.css";
    import "@brainandbones/skeleton/styles/all.css";
    import "../app.postcss";

    import { AppShell, AppShell } from "@brainandbones/skeleton";
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
		<p>Next, let's add a header to our App Shell using an App Bar component. Replace "Skeleton" with your application and the link to your own GitHub repos.</p>
		<CodeBlock
			language="html"
			code={`
<svelte:fragment slot="header">
    <!-- Insert your App Bar here -->
	<AppBar>
		<svelte:fragment slot="lead">
			<h1>Skeleton</h1>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<a class="btn btn-sm" href="https://github.com/" target="_blank">GitHub</a>
		</svelte:fragment>
	</AppBar>
</svelte:fragment>
            `}
		/>
		<h3>Add Sidebar Navigation</h3>
		<p>Let's add navigation to our App Shell's sidebar slot. First, let's apply some basic Tailwind class styles to the sidebar via the App Shell prop called <code>slotSidebarLeft</code>.</p>
		<CodeBlock language="html" code={`<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">`} />
		<p>Then add the sidebar navigation using Tailwind Elements navigation list.</p>
	</section>

	<hr />

	<!-- Page -->
	<section class="space-y-4">
		<h2>Page Setup</h2>
		<p>
			Now we're ready to start adding content to our homepage. Open <code>/src/routes/+page.svelte</code>. Drop all existing content and add the following. This will provide some basic content styled
			with Tailwind Elements.
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
		<p>Let's add a Gradient Heading as our first page component. At the top of the page, insert the following within a <em>script</em> tag.</p>
		<CodeBlock language="ts" code={`import { GradientHeading } '@brainandbones/skeleton';`} />
		<p>Then let's replace our H1 heading tag with the following. Feel free to test different prop settings and colors.</p>
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
			Before we wrap up, let's make one more quick adjustment. Let's update our boring square buttons to look more unique. Open your global stylesheet in <code>/src/app.postcss</code> and add the following
			styles. This will update every button instance throughout your application!
		</p>
		<CodeBlock language="css" code={`.btn { @apply font-bold rounded; }`} />
	</section>
</div>
