<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	import { Accordion, AccordionItem, Avatar, CodeBlock } from '@skeletonlabs/skeleton';
</script>

<LayoutPage>
	<!-- Header -->
	<header class="space-y-4">
		<h1 class="h1">Sponsorship</h1>
		<p>
			Sponsorship is a fundamental way to support open source projects, including Skeleton. Funds provided by our sponsors cover operation
			costs, fund paid promotion, support contributors, and more.
		</p>
	</header>

	<hr />

	<!-- Sponsorship -->
	<section class="grid grid-cols-1 lg:grid-cols-3 gap-4">
		<a
			class="card card-hover !bg-[#6e5494] p-4 md:py-10 lg:py-20 flex flex-col items-center space-y-4"
			href="https://github.com/sponsors/skeletonlabs"
			target="_blank"
			rel="noreferrer"
		>
			<Avatar
				background="bg-white"
				width="w-40"
				src="https://github.blog/wp-content/uploads/2019/05/mona-heart-featured.png?resize=1600%2C850"
			/>
			<h2 class="h4" data-toc-ignore>Github Sponsors</h2>
		</a>
		<a
			class="card card-hover !bg-[#1AC0FF] p-4 md:py-10 lg:py-20 flex flex-col items-center space-y-4"
			href="https://ko-fi.com/skeletonlabs"
			target="_blank"
			rel="noreferrer"
		>
			<Avatar
				background="bg-white"
				width="w-40"
				src="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/61e111774d3a2f67c827cd25_Frame%205.png"
			/>
			<h2 class="h4" data-toc-ignore>Ko-Fi</h2>
		</a>
		<a
			class="card card-hover !bg-[#FF424D] p-4 md:py-10 lg:py-20 flex flex-col items-center space-y-4"
			href="https://www.patreon.com/user?u=83786276"
			target="_blank"
			rel="noreferrer"
		>
			<Avatar background="bg-white" width="w-40" src="https://pixelbag.net/wp-content/uploads/2022/03/patreon-vector-icon.jpg" />
			<h2 class="h4" data-toc-ignore>Patreon</h2>
		</a>
	</section>

	<hr />

	<!-- GitHub Sponsors -->
	<section class="space-y-4">
		<h2 class="h2">GitHub Incentives</h2>
		<h3 class="h3">Discord Role</h3>
		<!-- prettier-ignore -->
		<p>
			Sponsorship of <span class="badge variant-filled-error">(Tier Name TBD)</span> or higher provides access to a <code class="code">sponsor</code> role on Discord, enabling a
			special <code class="code">#sponsors</code> channel which provides a direct line of communication with Skeleton contributors. Please contact a member of the Discord moderator team if this role is not automatically assigned.
		</p>
		<h3 class="h3">Premium Templates</h3>
		<!-- prettier-ignore -->
		<p>
			Sponsorship of <span class="badge variant-filled-error">(Tier Name TBD)</span> or higher unlocks access to <u>all</u> premium website templates.
		</p>
		<div class="grid grid-cols-1 gap-4">
			<!-- Template: Blog -->
			<a class="card card-hover variant-glass p-4 space-y-4" href="https://skeleton-template-blog.vercel.app/" target="_blank">
				<h3 class="h3" data-toc-ignore>Blog</h3>
				<img
					class="rounded-container-token shadow"
					src="https://github.com/skeletonlabs/skeleton/assets/1509726/ecd34f03-73ac-45d2-ad39-3714cf4d67dd"
					alt="portfolio"
				/>
				<p>
					This template provides a fully featured blog, allowing you to generate and maintain posts using Markdown via mdsvex. Includes full
					support for multiple authors and filtering by custom categories. All Markdown frontmatter is type safe and easy to expand.
					Includes a bold design with prominent graphics, headings, and a classy black and white theme.
				</p>
			</a>
			<!-- Template: Portfolio -->
			<a class="card card-hover variant-glass p-4 space-y-4" href="https://skeleton-template-portfolio.vercel.app/" target="_blank">
				<h3 class="h3" data-toc-ignore>Portfolio</h3>
				<img
					class="rounded-container-token shadow"
					src="https://github.com/skeletonlabs/skeleton/assets/1509726/4ab925f5-5d76-4cd5-b8a8-33c151f57adb"
					alt="portfolio"
				/>
				<p>
					A personal portfolio template, this template allows you to quickly and easily edit a static file to maintain your list of personal
					projects. Easily modify the images and stats on the homepage to make it your own. Comes bundled with a simple but elegant
					blue-hued theme.
				</p>
			</a>
		</div>

		<h3 class="h3">Template FAQs</h3>
		<Accordion autocollapse class="card variant-glass p-2">
			<AccordionItem open>
				<svelte:fragment slot="summary">
					<h3 class="h3" data-toc-ignore>How may I access my templates?</h3>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p>While your sponsorship is active, you gain access to a private GitHub respository containing all available templates.</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary">
					<h3 class="h3" data-toc-ignore>How do I install templates?</h3>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p>You can install website templates through one of the two options detailed below.</p>
					<!-- Method 1: CLI -->
					<h4 class="h4 !mt-10">Method 1: CLI Install</h4>
					<div class="space-y-4">
						<p>1. Download the template zip file.</p>
						<p>2. Use NPM (or similiar) to run the CLI and point at the local unzipped template files.</p>
						<pre class="pre">npm create skeleton-app@latest --skeletontheme=./path/to/unzipped/template/</pre>
						<p>3. Follow the CLI instructions. Note that <u>Typescript is required</u> for all templates.</p>
					</div>
					<!-- Method 2: Basic -->
					<h4 class="h4 !mt-10">Method 2: Manual Install</h4>
					<div class="space-y-4">
						<p>1. Download the template zip file.</p>
						<p>2. Unzip the file and rename the directory as desired. (ex: my-blog)</p>
						<p>3. Point your terminal at the contents of the unzipped directory.</p>
						<p>4. Use NPM (or similiar) to install all package depdencies.</p>
						<pre class="pre">npm install</pre>
						<p>5. Start your local SvelteKit dev server.</p>
						<pre class="pre">npm run dev</pre>
						<p>6. Point your browser at the local server address shown in the terminal, which defaults to:</p>
						<pre class="pre">http://localhost:5173/</pre>
					</div>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary">
					<h3 class="h3" data-toc-ignore>What features do templates include?</h3>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Each template is hand-crafted by industry professions with decades of experience in interface design and frontend development.
						We take care to implement fully responsive layouts that adjust to fit any size screen, and write code that meets or exceeds all
						modern standards. Providing a simple to use and production-ready solution for your projects.
					</p>
					<ul class="list-disc list-outside ml-4 space-y-2">
						<li>
							<strong>Created by Experts</strong> — each template is curated by members of Skeleton Labs, the creators of the Skeleton library.
						</li>
						<li>
							<strong>Adaptive Theme</strong>s — unlike traditional website templates, Skeleton templates are designed from the ground up
							with customization in mind. Use the unique theme bundled with each template, choose from a selection of preset themes, or
							generate your own in seconds.
						</li>
						<li>
							<strong>Easy to Use</strong> — all templates are easy to use, creating the perfect foundation for your personal or professional
							projects.
						</li>
						<li>
							<strong>Ready for Production</strong> — each template is maintained to keep in sync with the latest changes from Svelte/Kit, Tailwind,
							and Skeleton.
						</li>
						<li>
							<strong>Easy to Deploy</strong> — use any of SvelteKit's adapters and deploy to a number of popular services, including: Vercel,
							Netlify, and more.
						</li>
					</ul>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary">
					<h3 class="h3" data-toc-ignore>Do templates have license restrictions?</h3>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Yes, templates provided as sponsorship incentives include a limited Personal License. If you're interested in a Commercial or
						Enterprise license, <a class="anchor" href="mailto:admin@skeleton.dev">please contact Skeleton Labs</a>.
					</p>
					<div class="grid grid-cols-1 xl:grid-cols-3 gap-4 items-start">
						<section class="card p-8 space-y-4">
							<h3 class="h3" data-toc-ignore>Personal</h3>
							<hr class="opacity-30" />
							<p>Intended for use within small scale personal or hobby projects.</p>
							<ul class="list-disc list-inside space-y-2">
								<li>Single application</li>
								<li>Limited to 1 domain</li>
								<li>Includes free updates</li>
								<li>Includes documentation</li>
							</ul>
							<a class="btn variant-filled w-full" href="/docs/sponsorship/licensing" target="_blank">License Terms</a>
						</section>
						<section class="card p-8 space-y-4">
							<h3 class="h3" data-toc-ignore>Commercial</h3>
							<hr class="opacity-30" />
							<p>Intended for use within commercial organizations and agencies.</p>
							<ul class="list-disc list-inside space-y-2">
								<li>Multi application</li>
								<li>Unlimited domains</li>
								<li>Includes free updates</li>
								<li>Includes documentation</li>
							</ul>
							<a class="btn variant-filled w-full" href="/docs/sponsorship/licensing" target="_blank">License Terms</a>
						</section>
						<section class="card p-8 space-y-4">
							<h3 class="h3" data-toc-ignore>Enterprise</h3>
							<hr class="opacity-30" />
							<p>Reserved for large scale use and extended redistribution. Please contact Skeleton Labs for more information.</p>
							<div class="grid grid-cols-1 gap-2">
								<a class="btn variant-soft w-full" href="mailto:admin@skeleton.dev">Contact</a>
								<a class="btn variant-filled w-full" href="/docs/sponsorship/licensing" target="_blank">License Terms</a>
							</div>
						</section>
					</div>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary">
					<h3 class="h3" data-toc-ignore>Is support available for templates?</h3>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p>Yes, support is provided from the standard community GitHub or Discord support channels.</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary">
					<h3 class="h3" data-toc-ignore>Are Svelte and SvelteKit required?</h3>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Yes, all Skeleton projects require Svelte and SvelteKit. If you wish to learn these technologies we recommend the
						<a class="anchor" href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a> and
						<a class="anchor" href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a> documentation.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary">
					<h3 class="h3" data-toc-ignore>Is Tailwind required?</h3>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Yes, all Skeleton projects require Tailwind CSS. If you wish to learn Tailwind, we recommend the official <a
							class="anchor"
							href="https://tailwindcss.com/docs/utility-first"
							target="_blank"
							rel="noreferrer">documentation</a
						>
						and
						<a class="anchor" href="https://www.youtube.com/c/TailwindLabs/videos" target="_blank" rel="noreferrer">YouTube channel</a>.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary">
					<h3 class="h3" data-toc-ignore>Is Typescript required?</h3>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Yes, each template is built using best practices, which means we build all tempaltes to fully support Typescript. If you wish to
						learn Typescript, we recommend the free <a
							class="anchor"
							href="https://www.totaltypescript.com/tutorials/beginners-typescript"
							target="_blank"
							rel="noreferrer">Total Typescript</a
						> course by Matt Pocock.
					</p>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</section>

	<!-- Ko-Fi -->
	<section class="space-y-4">
		<h2 class="h2">Ko-Fi Incentives</h2>
		<!-- prettier-ignore -->
		<p>
			Sponsorship of <span class="badge variant-filled-error">(Tier Name TBD)</span> or higher provides access to a <code class="code">sponsor</code> role on Discord, enabling a
			special <code class="code">#sponsors</code> channel which provides a direct line of communication with Skeleton contributors. Please contact a member of the Discord moderator team if this role is not automatically assigned.
		</p>
		<aside class="alert variant-soft">Please note that premium templates are not currently available to this service.</aside>
	</section>

	<!-- Patreon -->
	<section class="space-y-4">
		<h2 class="h2">Patreon Incentives</h2>
		<!-- prettier-ignore -->
		<p>
			Sponsorship of <span class="badge variant-filled-error">(Tier Name TBD)</span> or higher provides access to a <code class="code">sponsor</code> role on Discord, enabling a
			special <code class="code">#sponsors</code> channel which provides a direct line of communication with Skeleton contributors. Please contact a member of the Discord moderator team if this role is not automatically assigned.
		</p>
		<aside class="alert variant-soft">Please note that premium templates are not currently available to this service.</aside>
	</section>
</LayoutPage>
