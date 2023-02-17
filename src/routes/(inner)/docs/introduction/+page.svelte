<script lang="ts">
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';
</script>

<div class="page-container">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Introduction</h1>
		<p>Learn more about what Skeleton is and what problems it can solve within your projects.</p>
	</header>

	<hr />

	<!-- Why -->
	<section class="space-y-4">
		<h2>What is Skeleton?</h2>
		<p>
			Skeleton is a UI library, featuring tight integration between <a href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a
			>
			and <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>. In short, the library utilizes Tailwind’s
			utility class-based design system to quickly and easily customize and extend the look and feel of each component. Paired with Svelte’s
			powerful component architecture, Skeleton creates customized, responsive, and reactive interfaces for any size project.
		</p>

		<div class="card variant-soft p-4">
			<iframe
				class="w-full max-w-[1024px] aspect-video mx-auto rounded-container-token shadow"
				src="https://www.youtube.com/embed/2OnJYCXJPK4"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>

		<!-- Problems -->
		<h3>Why Us?</h3>
		<p>
			Let’s face it - creating consistent and responsive interfaces for the web can be quite a challenge. Over time this has led to the
			emergence of UI toolkits such as <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap</a>,
			<a href="https://material.io/design" target="_blank" rel="noreferrer">Material Design</a>, and
			<a href="https://bulma.io/" target="_blank" rel="noreferrer">Bulma</a>. These allow developers to generate a consistent UI for web
			apps within any frontend tech stack. However, these toolkits only solve half the problem - they provide beautiful UI, but in most
			cases lack the accompanying functionality needed to make interactive components for your preferred framework, leaving that burden on
			you. In some cases, they may also require extra dependencies, which can introduce choice paralysis when filtering through the plethora
			of options in modern frontend development.
		</p>
		<p>
			This has given rise to the framework-specific component libraries such as: <a
				href="https://material.angular.io/"
				target="_blank"
				rel="noreferrer">Angular Material</a
			>
			for Angular, <a href="https://vuetifyjs.com/en/" target="_blank" rel="noreferrer">Vuetify</a> for Vue, and
			<a href="https://mantine.dev/" target="_blank" rel="noreferrer">Mantine</a> for React. These tools aim to be a complete solution that goes
			beyond the surface level and allows for direct integration of framework features, while providing fully interactive components, typically
			without the need to introduce extra packages and dependencies.
		</p>
		<p>
			Like many in the frontend development community, we have been impressed with the introduction of <a
				href="https://svelte.dev/"
				target="_blank"
				rel="noreferrer">Svelte</a
			>
			- which provides a modern and powerful component system. Along with the
			<a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a> app framework, that provides a turnkey solution for
			building and iterating on web projects using Svelte and next generation tooling such as
			<a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>. However, before creating Skeleton we noticed a lack of mature
			Svelte-focused UI component libraries. While there’s plenty of
			<a href="https://www.youtube.com/watch?v=RkD88ARvucM" target="_blank" rel="noreferrer">options</a>, many tend to focus on Material
			Design guidelines and aesthetics. While a completely valid approach, we felt there was still room for a batteries included toolkit
			that pairs the very best of what Svelte and Tailwind have to offer. This is the reason we've introduced Skeleton.
		</p>

		<!-- FOSS -->
		<h3>Free and Open Source</h3>
		<p>
			Skeleton is available as <a href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer"
				>free and open-source software (FOSS)</a
			>
			provided under the
			<a href="https://github.com/skeletonlabs/skeleton/blob/master/LICENSE" target="_blank" rel="noreferrer">MIT License</a>.
		</p>

		<!-- Community Owned -->
		<h3>Community Owned</h3>
		<!-- prettier-ignore -->
		<p>Skeleton is maintained by a number of talented <a href="https://github.com/skeletonlabs/skeleton/graphs/contributors" target="_blank" rel="noreferrer">contributors</a>. If you wish to <a href="/docs/contributions">contribute to the project</a> you are welcome to do so. Visit the Skeleton communities on either <a href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer">GitHub</a> or <a href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">Discord</a>.</p>

		<!-- Release Schedule -->
		<h3>Release Cycle</h3>
		<p>
			Skeleton receives new updates every other week, typically around Tuesday (US/Central). Each release is packed with new features,
			improvements, and bugfixes.
		</p>
		<a class="btn variant-filled-secondary" href="https://github.com/skeletonlabs/skeleton/releases" target="_blank" rel="noreferrer">
			View Releases
		</a>
	</section>

	<hr />

	<!-- Mantine -->
	<section class="space-y-4">
		<h2>Comparisons</h2>
		<p>A quick comparison of Skeleton and other open source UI libraries.</p>

		<Accordion autocollapse class="card variant-glass p-2">
			<AccordionItem open>
				<svelte:fragment slot="summary"><h3>Mantine</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<a href="https://mantine.dev/" target="_blank" rel="noreferrer">https://mantine.dev/</a>
					<p>
						It’s no secret that Mantine has had a huge influence on the features and design of Skeleton. We love Mantine’s huge set of
						components, modular add-ons, and, of course, the best-in-class documentation. We’re also huge fans of the deep customization
						provided per component. However, Mantine is unfortunately only available for React. That said, the Skeleton team hopes to bridge
						the gap and provide a similar experience for Svelte developers.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3>Flowbite</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<a href="https://flowbite.com/" target="_blank" rel="noreferrer">https://flowbite.com/</a>
					<p>
						Flowbite provides a set of turnkey HTML/CSS components built with Tailwind’s utility class system. Unlike other libraries,
						Flowbite focuses on a singular and opinionated design aesthetic. Flowbite is a general purpose library, which means it can be
						used within any framework, but also provides framework-specific variations like <a
							href="https://flowbite-svelte.com/"
							target="_blank"
							rel="noreferrer">Flowbite Svelte</a
						>. It’s relatively simple to tailor a Flowbite component to work within an existing Tailwind design system. In fact, it’s even
						possible to pair Flowbite with Skeleton, allowing you to mix and match components, while taking advantage of Skeleton’s theme
						system.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3>Daisy UI</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<a href="https://daisyui.com/" target="_blank" rel="noreferrer">https://daisyui.com/</a>
					<p>
						Daisy can be compared to Skeleton due to our shared use of Tailwind CSS and highly customizable theme systems. Unfortunately,
						Daisy themes rely on hex color values which <a
							href="https://tailwindcss.com/docs/customizing-colors#using-css-variables"
							target="_blank"
							rel="noreferrer">prevents the use of the opacity modifier syntax</a
						>. Daisy also opts to forgo the biggest benefit of Tailwind, the deeply extensible utility class system, instead relying on
						<a href="https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction" target="_blank" rel="noreferrer">@apply</a>
						to generate canned style sets. Skeleton, on the other hand, treats utility classes as first class citizens, providing hooks to set
						and override Tailwind classes within each component. Skeleton components also accept arbitrary classes, allowing full customization
						from top to bottom. However, it’s worth noting that Daisy is a general purpose library available to any framework, while Skeleton
						focuses purely on Svelte.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3>Svelte Material UI</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<a href="https://sveltematerialui.com/" target="_blank" rel="noreferrer">https://sveltematerialui.com/</a>
					<p>
						The founding members of Skeleton are huge fans of Material Design and recognize its influence on modern web UI, UX, and
						component systems in general. Our team has extensive experience with <a
							href="https://material.angular.io/"
							target="_blank"
							rel="noreferrer">Angular Material</a
						>, which adapts the Material Design conventions for the
						<a href="https://angular.io/" target="_blank" rel="noreferrer">Angular</a>
						framework. This has actually influenced many of the design decisions for creating Skeleton, including our opinions on
						<a href="/elements/forms">form components</a>. It makes sense that Svelte Material UI would be popular, as it bridges the
						benefits of Material Design with the power of Svelte. However, Skeleton has chosen to shy away from the look and feel of
						Material Design, and instead create a more unique aesthetic. Additionally, Skeleton features tight integration with Tailwind to
						aid in building a fully realized design system, allowing you to control every aspect of your interface from the ground up. If,
						for some reason, you are adverse to Tailwind or you wish to lean into the Material Design style, then we would recommend Svelte
						Material UI. It also has the benefit of being one of the oldest and most mature UI component libraries available for Svelte
						today.
					</p>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</section>

	<hr />

	<section class="space-y-4">
		<h2>FAQs</h2>
		<p>A list of frequently asked questions from new users. We recommend reading these before submitting a new support request.</p>

		<Accordion autocollapse class="card variant-glass p-2">
			<AccordionItem open>
				<svelte:fragment slot="summary"><h3>Is Typescript required?</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						No, Skeleton does not require Typescript, though we highly recommend it. Please be aware all documentation examples are written
						with Typescript by default. If you wish to learn Typescript we recommend <a
							href="https://www.totaltypescript.com/tutorials"
							target="_blank"
							rel="noreferrer">Total Typescript</a
						>.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3>What package managers are supported?</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						We support <a href="https://docs.npmjs.com/about-npm" target="_blank" rel="noreferrer">NPM (Node Package Manager)</a>. PNPM and
						Yarn are currently only supported for the Skeleton CLI.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3>Can I use a monorepo?</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Yes, but please be mindful of the <code>node_modules</code> path in your project configuration. We <u>do not</u> tailor instruction
						for this use case.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3>Do you have a project roadmap?</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Yes, <a href="https://github.com/skeletonlabs/skeleton/discussions/503" target="_blank" rel="noreferrer">view our roadmap</a>.
						This covers major milestones leading up to the v1.0 release.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3>How can I contribute?</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						See the <a href="/docs/contributions">contribution guide</a>. This covers all requirements for getting started.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3>Where can I learn Svelte and SvelteKit?</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						We recommend the official <a href="https://svelte.dev/docs" target="_blank" rel="noreferrer">documentation</a> and
						<a href="https://svelte.dev/tutorial/basics" target="_blank" rel="noreferrer">tutorial</a> for Svelte. As well as the official
						<a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">documentation</a> for SvelteKit.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h3>Where can I learn Tailwind?</h3></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						We recommend the official <a href="https://tailwindcss.com/docs/utility-first" target="_blank" rel="noreferrer">documentation</a
						>
						and
						<a href="https://www.youtube.com/c/TailwindLabs/videos" target="_blank" rel="noreferrer">YouTube channel</a>.
					</p>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</section>
</div>
