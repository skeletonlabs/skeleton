<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<LayoutPage>
	<!-- Header -->
	<header class="space-y-4">
		<h1 class="h1">Tauri</h1>
		<p>
			The following guide will cover the basics for generating a new <a class="anchor" href="https://tauri.app" target="_blank">Tauri</a> app
			using both SvelteKit and Skeleton.
		</p>
	</header>

	<hr />

	<!-- What's Tauri? -->
	<section class="space-y-4">
		<p class="text-xl space-y-4">
			<a class="anchor" href="https://tauri.app/about/intro" target="_blank">Tauri</a> is a toolkit that helps developers make applications for
			the major desktop platforms - using virtually any frontend framework in existence. The core is built with Rust, and the CLI leverages Node.js
			making Tauri a genuinely polyglot approach to creating and maintaining great apps.
		</p>
	</section>

	<!-- Prerequisites -->
	<section class="space-y-4">
		<h2 class="h2">Prerequisites</h2>
		<p>Before you begin, make sure to install all required Rust language and system dependencies per the guide below.</p>
		<div class="card variant-glass p-4 py-10 text-center">
			<a class="btn variant-filled" href="https://tauri.app/v1/guides/getting-started/prerequisites" target="_blank">
				<span>Tauri Prerequisites Guide</span>
				<i class="fa-solid fa-up-right-from-square" />
			</a>
		</div>
	</section>

	<!-- Video -->
	<section class="space-y-4">
		<div class="flex items-center space-x-2">
			<h2 class="h2">Video Guide</h2>
			<span class="badge variant-filled-warning">Optional</span>
		</div>
		<!-- prettier-ignore -->
		<p>
			For visual learners, the following video will guide you through the process of integrating Tauri and SvelteKit. You can then follow these instructions to <a class="anchor" href="/docs/get-started">manually add Skeleton</a> to your project.
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

	<section class="space-y-4">
		<h2 class="h2">Manual Guide</h2>
		<!-- Setup Skeleton -->
		<div class="space-y-4">
			<h3 class="h3">Setup Skeleton</h3>
			<!-- prettier-ignore -->
			<p>
				To begin, we'll use the Skeleton CLI to scaffold a new project. This will automatically install SvelteKit, Tailwind, and Skeleton. If you're using an existing SvelteKit project, please refer to our <a class="anchor" href="https://www.skeleton.dev/docs/get-started#install-skeleton" >manual install instructions</a>.
			</p>
			<CodeBlock
				language="shell"
				code={`
npm create skeleton-app@latest skeleton-tauri-app
	- Enable Typescript when prompted (recommended)
cd skeleton-tauri-app
npm install
				`}
			/>
		</div>
		<!-- Prepare Your App -->
		<div class="space-y-4">
			<h3 class="h3">Prepare Your App</h3>
			<!-- prettier-ignore -->
			<p>
				Since Tauri will use Rust as the backend, we'll adjust SvelteKit to use <a class="anchor" href="https://kit.svelte.dev/docs/adapter-static" target="_blank">static site generation (SSG)</a>. This makes use of SvelteKit's <code class="code">adapter-static</code>.
			</p>
			<CodeBlock language="shell" code={`npm install --save-dev @sveltejs/adapter-static`} />
			<p>
				Locate <code class="code">svelte.config.[ts|js]</code> in the root of your project, then switch from
				<code class="code">adapter-auto</code>
				to <code class="code">adapter-static</code>.
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
			<!-- prettier-ignore -->
			<p>
				Open your root layout, found in <code class="code">/src/routes/+layout.[ts|js]</code>, then append the following two lines at the top of the script tag. This disables server-side rendering (SSR) while enabling prerendering. 
			</p>
			<CodeBlock
				language="js"
				code={`
export const ssr = false;
export const prerender = true;
					`}
			/>
		</div>
		<!-- Install Tauri -->
		<div class="space-y-4">
			<h3 class="h3">Install Tauri</h3>
			<p>Tauri offers a friendly CLI to easily automate the install process. Run the following command in your terminal.</p>
			<CodeBlock language="shell" code={`npm install --save-dev @tauri-apps/cli`} />
			<p>
				Locate <code class="code">package.json</code> in the root of your project, open this and append the following script command.
			</p>
			<CodeBlock language="json" code={`"scripts": {\n\t"tauri": "tauri"\n}`} />
			<p>Run the following command in your terminal. Please take care to use the recommendations settings provided below.</p>
			<CodeBlock language="shell" code={`npm run tauri init`} />
			<dl class="list-dl">
				<div>
					<span class="badge-icon variant-soft p-4">1</span>
					<span class="flex-auto">
						<dt class="font-bold">What is your app name?</dt>
						<dd>Set the desired name of the generated bundle</dd>
					</span>
				</div>
				<div>
					<span class="badge-icon variant-soft p-4">2</span>
					<span class="flex-auto">
						<dt class="font-bold">What should the window title be?</dt>
						<dd>Set the desired title of the main window</dd>
					</span>
				</div>
				<div>
					<span class="badge-icon variant-soft p-4">3</span>
					<span class="flex-auto">
						<dt class="font-bold">
							Where are your web assets (HTML/CSS/JS) relative to <code class="code">/src-tauri/tauri.conf.json</code>?
						</dt>
						<dd>Set the default to <code class="code">../build</code></dd>
					</span>
				</div>
				<div>
					<span class="badge-icon variant-soft p-4">4</span>
					<span class="flex-auto">
						<dt class="font-bold">What is the URL of your dev server?</dt>
						<dd>SvelteKit's default is <code class="code">http://localhost:5173</code></dd>
					</span>
				</div>
				<div>
					<span class="badge-icon variant-soft p-4">5</span>
					<span class="flex-auto">
						<dt class="font-bold">What is your frontend dev command?</dt>
						<dd>If using NPM, set this to <code class="code">npm run dev</code></dd>
					</span>
				</div>
				<div>
					<span class="badge-icon variant-soft p-4">6</span>
					<span class="flex-auto">
						<dt class="font-bold">What is your frontend build command?</dt>
						<dd>If using NPM, set this to <code class="code">npm run build</code></dd>
					</span>
				</div>
			</dl>
		</div>
		<!-- Verify Install -->
		<div class="space-y-4">
			<h3 class="h3">Verify Install</h3>
			<p>
				Once installed, look for <code class="code">/src-tauri</code> in the root of your project. This houses the following critical Tauri assets:
			</p>
			<ul class="list-disc list-inside space-y-2">
				<li><code class="code">Cargo.toml</code> - similar to <code class="code">package.json</code>, but for Rust.</li>
				<li><code class="code">tauri.conf.json</code> - the Tauri configuration file.</li>
				<li><code class="code">src/main.rs</code> - the entry point of your Rust backend.</li>
			</ul>
		</div>
		<!-- Run the App -->
		<div class="space-y-4">
			<h3 class="h3">Run the App</h3>
			<p>Use the following command to start your Tauri application.</p>
			<CodeBlock language="shell" code={`npm run tauri dev`} />
		</div>
	</section>

	<hr />

	<!-- Starter Template -->
	<section class="space-y-4">
		<h2 class="h2">Starter Template</h2>
		<p>If you're looking for a quick start or reference project, please refer to our opinionated template on GitHub.</p>
		<div class="card variant-glass p-4 py-10 text-center">
			<a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton-starter-tauri" target="_blank">
				<i class="fa-brands fa-github" />
				<span>View Starter Template</span>
				<i class="fa-solid fa-up-right-from-square" />
			</a>
		</div>
	</section>

	<hr />

	<!-- Learn More -->
	<section class="space-y-4">
		<h2 class="h2">Learn More</h2>
		<dl class="list-dl">
			<div>
				<span class="badge-icon variant-soft-secondary p-4">
					<i class="fa-solid fa-book" />
				</span>
				<span class="flex-auto">
					<a class="anchor" href="https://tauri.app/v1/guides/development/development-cycle" target="_blank">
						Official Tauri Documentation &rarr;
					</a>
				</span>
			</div>
			<div>
				<span class="badge-icon variant-soft-secondary p-4">
					<i class="fa-solid fa-book" />
				</span>
				<span class="flex-auto">
					<a class="anchor" href="https://doc.rust-lang.org/book/" target="_blank">The Rust Book &rarr;</a>
				</span>
			</div>
		</dl>
	</section>
</LayoutPage>
