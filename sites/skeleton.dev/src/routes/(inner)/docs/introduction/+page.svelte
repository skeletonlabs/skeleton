<script lang="ts">
	import LayoutPage from '$docs/layouts/LayoutPage/LayoutPage.svelte';
	// Components
	import { Accordion, AccordionItem, CodeBlock } from '@skeletonlabs/skeleton';
</script>

<LayoutPage>
	<!-- Header -->
	<header class="space-y-4">
		<h1 class="h1">Introduction</h1>
		<!-- prettier-ignore -->
		<p>
			A powerful UI toolkit built using <a class="anchor" href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a> and <a class="anchor" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>. Create adaptive, accessible design systems for your web apps.
		</p>
	</header>

	<hr />

	<!-- Why -->
	<section class="space-y-4">
		<p class="!text-xl">
			Skeleton utilizes Tailwind’s utility classes and design system capabilities to quickly and easily create beautiful interfaces. Paired
			with Svelte’s powerful component architecture, Skeleton creates customized, responsive, and reactive interfaces for projects of any
			scope or scale.
		</p>
	</section>

	<!-- Video -->
	<section class="space-y-4">
		<!-- Embed -->
		<iframe
			class="w-full aspect-video mx-auto rounded-container-token shadow"
			src="https://www.youtube.com/embed/tHzVyChDuyo"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
		<!-- Thumbnails -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			<a href="https://youtu.be/P_A0qQ7AuK8" target="_blank" rel="noreferrer">
				<img
					class="w-full aspect-video shadow"
					src="https://i.ytimg.com/vi/P_A0qQ7AuK8/hq720.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLAzhVXc-QnHxLUDEJriSQ5dM0vt8w"
					alt="Huntabyte"
					Title="Huntabyte"
				/>
			</a>
			<a href="https://www.youtube.com/watch?v=O0mNU0maItY" target="_blank" rel="noreferrer">
				<img
					class="w-full aspect-video shadow"
					src="https://i.ytimg.com/vi/O0mNU0maItY/hq720.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggcEAIYBiABOAE=&rs=AOn4CLB9xc89PYlMU6piBYxcV6Vf_G7DqQ"
					alt="Joy of Code"
					Title="Joy of Code"
				/>
			</a>
			<a href="https://www.youtube.com/watch?v=2OnJYCXJPK4" target="_blank" rel="noreferrer">
				<img
					class="w-full aspect-video shadow"
					src="https://i.ytimg.com/vi/2OnJYCXJPK4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLAOSpZL64fmARG9DXogNjK-0IsREA"
					alt="Svelte Sirens"
					Title="Svelte Sirens"
				/>
			</a>
		</div>
	</section>

	<!-- Our Vision -->
	<section class="space-y-4">
		<h2 class="h2">Our Vision</h2>
		<p>
			Skeleton aims to provide a seamless user experience by creating intelligent and adaptive UI elements that automatically conform to the
			unique aesthetic of your application. It leverages native browser APIs and form elements, while also incorporating powerful components
			that follow WAI-ARIA guidelines for accessibility, empowering developers to create user-centric web applications with ease.
		</p>
		<p>
			We're huge fans of Svelte and wish to contribute to this amazing ecosystem. We believe this only happens through contributions of high
			quality open source projects our own. Created by the community, for the community.
		</p>
		<p>
			Finally, we aim for inclusion, whether you're a contributor to the project, a consumer, or the end user. The Skeleton core team is not
			a faceless corporate entity, but rather a small group of individuals motivated to make accessible UI with great UX (user experience)
			and DX (developer experience) for all.
		</p>
	</section>

	<!-- Benefits -->
	<section class="space-y-4">
		<h2 class="h2">Benefits</h2>
		<!-- FOSS -->
		<h3 class="h3">Free and Open Source</h3>
		<p>
			Skeleton is available as <a class="anchor" href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer"
				>free and open-source software (FOSS)</a
			>
			provided under the
			<a class="anchor" href="https://github.com/skeletonlabs/skeleton/blob/master/LICENSE" target="_blank" rel="noreferrer">MIT License</a
			>.
		</p>
		<!-- Community Owned -->
		<h3 class="h3">Community Owned</h3>
		<!-- prettier-ignore -->
		<p>Skeleton is maintained by a number of talented <a class="anchor" href="https://github.com/skeletonlabs/skeleton/graphs/contributors" target="_blank" rel="noreferrer">contributors</a>. If you wish to <a class="anchor" href="/docs/contributing">contribute to the project</a>, you are welcome to do so. Visit the Skeleton communities on either <a class="anchor" href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer">GitHub</a> or <a class="anchor" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">Discord</a>.</p>
		<!-- Theme System -->
		<h3 class="h3">Theme System</h3>
		<p>
			We provide a powerful and comprehensive theme system that goes well beyond generating a color palette. Themes allow you to control
			common settings, such as border radius, and apply those universally throughout your application. Furthermore, themes are built using
			CSS variables, which makes themes simple to configure and reuse.
		</p>
		<!-- Design Tokens -->
		<h3 class="h3">Design Tokens</h3>
		<p>
			These tokens are a special set of CSS classes that ingest your theme settings for easy reuse throughout your design system. They are
			used as the default settings for most features within Skeleton, meaning your UI elements automatically adjust to theme changes.
			Likewise, these tokens are available to you, meaning you can build custom components using the same tools we do, for a truly cohesive
			look and feel.
		</p>
		<!-- Release Cycle -->
		<h3 class="h3">Release Cycle</h3>
		<p>
			Skeleton receives new updates every other week, typically around Tuesday (US/Central). Each release is packed with new features,
			improvements, and bugfixes.
		</p>
		<a class="btn variant-filled-secondary" href="https://github.com/skeletonlabs/skeleton/releases" target="_blank" rel="noreferrer">
			View Releases
		</a>
	</section>

	<!-- Comparisons -->
	<section class="space-y-4">
		<h2 class="h2">Comparisons</h2>
		<p>A quick comparison to alternative open source UI libraries.</p>
		<Accordion autocollapse class="card variant-glass p-2">
			<AccordionItem open>
				<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Tailwind UI</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<a class="anchor" href="https://tailwindui.com/" target="_blank" rel="noreferrer">https://tailwindui.com/</a>
					<p>
						A library of UI elements designed by the creators of Tailwind CSS. This provides a huge library of turnkey HTML/CSS components.
						Currently Tailwind UI supports three options: HTML, React, and Vue. This means there's no plug and play solution for Svelte. You
						will need to generate your own components and build your own logic around these. Tailwind UI can be directly integrated with
						Skeleton though, providing tight integration with Skeleton's theme and design token systems.
					</p>
					<a class="btn variant-filled-secondary" href="/blog/skeleton-plus-tailwind-ui" target="_blank"> View our Integration Guide </a>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Flowbite</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<a class="anchor" href="https://flowbite.com/" target="_blank" rel="noreferrer">https://flowbite.com/</a>
					<p>
						Flowbite provides a set of turnkey HTML/CSS components built with Tailwind’s utility class system. Flowbite provides a unique
						and opinionated design aesthetic and serves as a general purpose library, which means it can be used within any framework, while
						providing framework-specific variations like <a
							class="anchor"
							href="https://flowbite-svelte.com/"
							target="_blank"
							rel="noreferrer">Flowbite Svelte</a
						>. Flowbite's HTML/CSS elements can be directly integrated with Skeleton, providing tight integration with Skeleton's theme and
						design token systems.
					</p>
					<a class="btn variant-filled-secondary" href="/blog/skeleton-plus-flowbite" target="_blank"> View our Integration Guide </a>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Daisy UI</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<a class="anchor" href="https://daisyui.com/" target="_blank" rel="noreferrer">https://daisyui.com/</a>
					<p>
						Like Skeleton, Daisy uses Tailwind CSS and highly customizable theme systems. Unfortunately, Daisy themes rely on hex color
						values which <a
							class="anchor"
							href="https://tailwindcss.com/docs/customizing-colors#using-css-variables"
							target="_blank"
							rel="noreferrer">prevents the use of the opacity modifier syntax</a
						>. Skeleton, on the other hand, treats utility classes as first class citizens, providing hooks to set and override Tailwind
						classes within each component. Skeleton components also accept arbitrary classes, allowing full customization from top to
						bottom. However, it’s worth noting that Daisy is a general purpose library available to any framework, while Skeleton focuses
						purely on Svelte.
					</p>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</section>

	<!-- FAQs -->
	<section class="space-y-4">
		<h2 class="h2">FAQs</h2>
		<p>A list of common questions and issues from our community.</p>
		<Accordion autocollapse class="card variant-glass p-2">
			<AccordionItem open>
				<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Is Typescript required?</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						No, Skeleton does not require Typescript, though we highly recommend it. Please be aware all documentation examples are written
						with Typescript by default. If you wish to learn Typescript we recommend <a
							class="anchor"
							href="https://www.totaltypescript.com/tutorials"
							target="_blank"
							rel="noreferrer">Total Typescript</a
						>.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>What package managers are supported?</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						We support <a class="anchor" href="https://docs.npmjs.com/about-npm" target="_blank" rel="noreferrer"
							>NPM (Node Package Manager)</a
						>. PNPM and Yarn are currently only supported for the Skeleton CLI.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Can I use a monorepo?</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Yes, but please be mindful of the <code class="code">node_modules</code> path in your project configuration. We <u>do not</u> tailor
						instruction for this use case.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Do you have a project roadmap?</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Yes, <a class="anchor" href="https://github.com/skeletonlabs/skeleton/discussions/503" target="_blank" rel="noreferrer"
							>view our roadmap</a
						>. This covers major milestones leading up to the v1.0 release.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>How can I contribute?</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						See the <a class="anchor" href="/docs/contributing">contribution guide</a>. This covers all requirements for getting started.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Where can I learn Svelte and SvelteKit?</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						We recommend the official <a class="anchor" href="https://svelte.dev/docs" target="_blank" rel="noreferrer">documentation</a>
						and
						<a class="anchor" href="https://learn.svelte.dev/tutorial/welcome-to-svelte" target="_blank" rel="noreferrer">tutorial</a> for
						Svelte and SvelteKit. As well as the official
						<a class="anchor" href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">documentation</a> for SvelteKit.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Where can I learn Tailwind?</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						We recommend the official <a class="anchor" href="https://tailwindcss.com/docs/utility-first" target="_blank" rel="noreferrer"
							>documentation</a
						>
						and
						<a class="anchor" href="https://www.youtube.com/c/TailwindLabs/videos" target="_blank" rel="noreferrer">YouTube channel</a>.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3 class="h3" data-toc-ignore>Why is VS Code reordering my imports?</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						VS Code has an optional opt-in feature for automatically reordering imports. This is disabled by default. If this is enabled it
						may break your stylesheet import order, which can be cause issues. If present, set it to <code class="code">false</code>.
					</p>
					<CodeBlock
						language="json"
						code={`
"editor.codeActionsOnSave": {
    "source.sortImports": false
}
						`}
					/>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</section>
</LayoutPage>
