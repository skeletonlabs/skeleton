<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<LayoutPage>
	<!-- Header -->
	<header class="space-y-4">
		<h1 class="h1">Tauri</h1>
		<p>
			This guide will walk you through the basics of creating a new desktop (and maybe mobile?) Tauri app using SvelteKit and Skeleton as
			your frontend.
		</p>
	</header>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">What is Tauri?</h2>
		<p><a href="https://tauri.app" class="anchor">Tauri</a> is a framework that lets you build</p>
		<blockquote class="blockquote">smaller, faster, and more secure desktop applications with a web frontend</blockquote>
		<p>
			To achieve that, it uses Rust as the backend of your application. But don't worry, you don't necessarily need to know Rust to use it!
			Tauri exposes many useful APIs and many plugins let you handle backend related stuff without leaving your JavaScript/TypeScript. For
			example, the <a href="https://github.com/tauri-apps/tauri-plugin-sql" class="anchor">tauri-plugin-sql</a> lets you support sqlite, mysql
			and postgres without even touching Rust!
		</p>
		<div class="alert variant-ghost">
			<i class="fa-solid fa-triangle-exclamation" />
			<p>
				We will create an app from scratch, but you can also easily use your existing SvelteKit or Tauri + SvelteKit project. Follow the
				corresponding section below to add Skeleton or Tauri depending on your needs.
			</p>
		</div>
	</section>

	<!-- Video -->
	<section class="space-y-4">
		<h2 class="h2">Video guide</h2>
		<p>
			If you prefer a visual guide, you can follow the next excellent video on how to setup Tauri with SvelteKit. Take into account that
			Skeleton is not being installed in the video, so you will have to do it manually following our step by step <a
				href="https://www.skeleton.dev/docs/get-started#install-skeleton"
				class="anchor">guide in the Get Started section</a
			>
		</p>
		<iframe
			class="w-full aspect-video mx-auto rounded-container-token shadow"
			src="https://www.youtube.com/embed/Dobwjx7_xT0"
			title="SvelteKit and Tauri: Blazing-Fast Desktop Applications"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</section>

	<!-- Prerequisites -->
	<section class="space-y-4">
		<h2 class="h2">Prerequisites</h2>
		<p>
			To begin with, you need to install some prerequisites, like Rust and system dependencies. The installation process depends on your OS,
			so we recommend following the <a href="https://tauri.app/v1/guides/getting-started/prerequisites" class="anchor"
				>official Tauri guide</a
			>
		</p>
	</section>

	<section class="space-y-4">
		<h2 class="h2">Create your Skeleton project</h2>
		<p>
			The first step is to create your SvelteKit project with Skeleton. There are two ways to do it. The easiest one is to use the Skeleton
			CLI that will automatically scaffold a new SvelteKit application, install Tailwind, configure Skeleton, and more.
		</p>
		<CodeBlock
			language="shell"
			code={`
npm create skeleton-app@latest my-skeleton-app
	- Enable Typescript when prompted (recommended)
cd my-skeleton-app
npm install
						`}
		/>
		<p>
			If you already have a SvelteKit project then you will need to install and configure Skeleton manually following our step by step <a
				href="https://www.skeleton.dev/docs/get-started#install-skeleton"
				class="anchor">guide in the Get Started section</a
			>
		</p>
	</section>

	<section class="space-y-4">
		<h2 class="h2">Modify your Skeleton project for Tauri</h2>
		<p>
			As Rust will be our backend, Tauri uses SvelteKit as a <a href="https://kit.svelte.dev/docs/adapter-static" class="anchor"
				>static site generator (SSG)</a
			>. To setup SSG first you need to install the adapter-static
		</p>
		<CodeBlock language="shell" code={`npm install --save-dev @sveltejs/adapter-static`} />
		<p>
			Then you need to replace the adapter-auto in your <code class="code">svelte.config.[ts|js]</code> with the adapter-static. Your
			<code class="code">svelte.config.[ts|js]</code> file should look like this:
		</p>
		<CodeBlock
			language="js"
			code={`
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter()
	}
};

export default config;
						`}
		/>
		<p>
			Lastly, you need to disable SSR and enable prerendering by adding these two lines to your root <code class="code"
				>+layout.[ts|js]</code
			>
		</p>
		<CodeBlock
			language="js"
			code={`
export const prerender = true
export const ssr = false
						`}
		/>
		<p>Now your app is ready to install Tauri.</p>
	</section>

	<section class="space-y-4">
		<h2 class="h2">Add the Tauri backend</h2>
		<p>
			It's time to add Tauri to your project. For that. Tauri offers a nice CLI to make the installation easy. First install it with the
			next command:
		</p>
		<CodeBlock language="shell" code={`npm install --save-dev @tauri-apps/cli`} />
		<p>Then, you will also need to add tauri as a script in your <code class="code">package.json</code></p>
		<CodeBlock
			language="json"
			code={`
"scripts": {
  "tauri": "tauri"
}
						`}
		/>
		<p>
			Now it's as easy as to run tauri init in your terminal while on the root of your previously created Skeleton project. But don't hurry!
			You will need to change some defaults so don't press Y to every question (check below before running the script).
		</p>
		<CodeBlock language="shell" code={`npm run tauri init`} />
		<p>The CLI will ask you the following question. Be careful to change the default answers when specified.</p>
		<ol class="list">
			<li>
				<span class="badge-icon p-4 variant-soft-primary">1.</span>
				<span class="flex-auto"
					><dt class="font-bold">What is your app name?</dt>
					<dd class="text-sm">The name of your app. This is how the final bundle will be called.</dd></span
				>
			</li>
			<li>
				<span class="badge-icon p-4 variant-soft-primary">2.</span>
				<span class="flex-auto"
					><dt class="font-bold">What should the window title be?</dt>
					<dd class="text-sm">The title of the main window.</dd></span
				>
			</li>
			<li>
				<span class="badge-icon p-4 variant-soft-primary">3.</span>
				<span class="flex-auto"
					><dt class="font-bold">
						Where are your web assets (HTML/CSS/JS) located relative to the /src-tauri/tauri.conf.json file that will be created?
					</dt>
					<dd class="text-sm">Change the default to <code class="code">../build</code>.</dd></span
				>
			</li>
			<li>
				<span class="badge-icon p-4 variant-soft-primary">4.</span>
				<span class="flex-auto"
					><dt class="font-bold">What is the URL of your dev server?</dt>
					<dd class="text-sm">Add the URL of your server, which is <code class="code">http://localhost:5173</code> by default.</dd></span
				>
			</li>
			<li>
				<span class="badge-icon p-4 variant-soft-primary">5.</span>
				<span class="flex-auto"
					><dt class="font-bold">What is your frontend dev command?</dt>
					<dd class="text-sm">If your are using npm, this will be <code class="code">npm run dev</code>.</dd></span
				>
			</li>
			<li>
				<span class="badge-icon p-4 variant-soft-primary">6.</span>
				<span class="flex-auto"
					><dt class="font-bold">What is your frontend build command?</dt>
					<dd class="text-sm">If your are using npm, this will be <code class="code">npm run build</code>.</dd></span
				>
			</li>
		</ol>
		<p>
			And that's it! After running the script you should be able to see a <code class="code">src-tauri</code> folder in your root with your
			rust backend and some important files as <code class="code">Cargo.toml</code> (kind of Rust package.json),
			<code class="code">tauri.conf.json</code>
			(Tauri configuration file) and <code class="code">src/main.rs</code> (the entry point of your Rust backend), among others.
		</p>
		<p>You can now run tauri dev and look at your beautiful desktp app.</p>
		<CodeBlock language="shell" code={`npm run tauri dev`} />
	</section>

	<!-- Template -->
	<section class="space-y-4">
		<h2 class="h2">Premade template</h2>
		<p>
			Although we recommend to setup everything manually as detailed before, we also want to offer you a complete template for you to use.
			Take into account that is an opinionated template but you can edit it for your needs following our many guides in our site.
		</p>
		<!-- TODO: ADD TEMPLATE REPO LINK -->
	</section>

	<!-- Done -->
	<section class="space-y-4">
		<h2 class="h2">Further Reading</h2>
		<p>
			Congrats! You have now created a simple desktop app using Tauri, SvelteKit and Skeleton. To start working on it we highly recommend
			these resources:
		</p>
		<ol class="list">
			<li>
				<span class="badge-icon p-4 variant-soft-secondary"><i class="fa-solid fa-book" /></span><span class="flex-auto"
					><a href="https://tauri.app/v1/guides/development/development-cycle" class="anchor">Tauri Guides and Documentation</a>, from which
					this guide was heavily inspired</span
				>
			</li>
			<li>
				<span class="badge-icon p-4 variant-soft-secondary"><i class="fa-solid fa-book" /></span><span class="flex-auto"
					><a href="https://doc.rust-lang.org/book/" class="anchor">The Rust Book</a></span
				>
			</li>
			<li>
				<span class="badge-icon p-4 variant-soft-secondary"><i class="fa-solid fa-book" /></span><span class="flex-auto"
					>Check out our various web-related recommendations in <a href="https://www.skeleton.dev/docs/introduction#faqs" class="anchor"
						>the introduction</a
					>
				</span>
			</li>
		</ol>
	</section>
</LayoutPage>
