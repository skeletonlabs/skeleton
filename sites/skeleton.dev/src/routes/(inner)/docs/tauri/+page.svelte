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
		<aside class="alert variant-ghost">
			<i class="fa-solid fa-triangle-exclamation" />
			<p>
				We will create an app from scratch, but you can also easily use your existing SvelteKit or Tauri + SvelteKit project. Follow the
				corresponding section below to add Skeleton or Tauri depending on your needs.
			</p>
		</aside>
	</section>

	<!-- Prerequisites -->
	<section class="space-y-4">
		<h2 class="h2">Prerequisites</h2>
		<p>
			To begin with, you need to install some prerequisites, like Rust and system dependencies. The installation process depends on your OS,
			so we recommend following the official Tauri guide: <a href="https://tauri.app/v1/guides/getting-started/prerequisites" class="anchor"
				>https://tauri.app/v1/guides/getting-started/prerequisites</a
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
			If you already have a SvelteKit project then you will need to install and configure Skeleton manually following our step by step guide
			in the Get Started section: <a href="https://www.skeleton.dev/docs/get-started#install-skeleton" class="anchor"
				>https://www.skeleton.dev/docs/get-started#install-skeleton</a
			>
		</p>
	</section>

	<section class="space-y-4">
		<h2 class="h2">Create your Tauri app</h2>
		<p>
			Now you have your frontend, but a Tauri app needs a blazingly fast Rust backend. Luckily Tauri also has a CLI that makes the hard work
			for us. Follow this Tauri guide to setup SSG and the backend: <a
				href="https://tauri.app/v1/guides/getting-started/setup/sveltekit#sveltekit-in-ssg-mode"
				class="anchor">https://tauri.app/v1/guides/getting-started/setup/sveltekit#sveltekit-in-ssg-mode</a
			>
		</p>
		<p>If you followed every step, you should be ready to run your app with:</p>
		<CodeBlock language="shell" code={`npm run tauri dev`} />
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
					>Tauri Guides and Documentation: <a href="https://tauri.app/v1/guides/development/development-cycle" class="anchor"
						>https://tauri.app/v1/guides/development/development-cycle</a
					></span
				>
			</li>
			<li>
				<span class="badge-icon p-4 variant-soft-secondary"><i class="fa-solid fa-book" /></span><span class="flex-auto"
					>The Rust Book: <a href="https://doc.rust-lang.org/book/" class="anchor">https://doc.rust-lang.org/book/</a></span
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
