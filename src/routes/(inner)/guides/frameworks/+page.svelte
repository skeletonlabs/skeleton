<script lang="ts">
	// import { storeFramework } from '$docs/stores';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
</script>

<div class="page-container">
	<!-- Header -->
	<header class="space-y-4">
		<div class="flex items-end space-x-2">
			<h1>Frameworks</h1>
			<span class="badge bg-surface-500/30 -translate-y-1">optional</span>
		</div>
		<p>
			A set of <u>optional walkthroughs</u> for creating basic example apps in each supported framework. These cover the basics of using Skeleton.
		</p>
	</header>

	<!-- Select a Framework -->
	<section class="space-y-4">
		<!-- Astro -->
		<a href="/guides/frameworks/sveltekit" class="card p-4 grid grid-cols-[64px_1fr_auto] gap-4">
			<SvgIcon name="svelte" fill="fill-surface-500" width="w-14" height="h-14" class="place-self-center" />
			<div class="space-y-2">
				<h2>SvelteKit</h2>
				<p>The fastest way to build Svelte apps.</p>
			</div>
			<button class="btn btn-filled-accent place-self-center">Read Guide &rarr;</button>
		</a>

		<!-- Astro -->
		<a href="/guides/frameworks/vite" class="card p-4 grid grid-cols-[64px_1fr_auto] gap-4">
			<!-- Vite Logo -->
			<svg stroke-width="5" stroke-opacity="50%" class="w-14 aspect-square place-self-center stroke-surface-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 257">
				<defs>
					<linearGradient id="a" x1="-.8%" x2="57.6%" y1="7.7%" y2="78.4%">
						<stop offset="0%" stop-color="transparent" />
						<stop offset="100%" stop-color="transparent" />
					</linearGradient>
					<linearGradient id="b" x1="43.4%" x2="50.3%" y1="2.2%" y2="89%">
						<stop offset="0%" stop-color="rgba(var(--color-surface-500))" />
						<stop offset="8.3%" stop-color="rgba(var(--color-surface-500))" />
						<stop offset="100%" stop-color="rgba(var(--color-surface-500))" />
					</linearGradient>
				</defs>
				<path fill="url(#a)" d="M255 38 135 253c-3 4-9 4-11 0L1 38c-3-5 1-11 7-10l120 22a7 7 0 0 0 2 0l118-22c6-1 10 5 7 10Z" />
				<path
					fill="url(#b)"
					d="M185 0 96 18a3 3 0 0 0-2 3l-6 92a3 3 0 0 0 4 3l25-5c2-1 5 1 4 3l-7 37c-1 2 1 4 4 3l15-4c3-1 5 1 4 3l-11 57c-1 4 4 6 6 2l1-2 72-144c2-3-1-5-3-5l-26 5c-2 0-4-2-3-4l16-58c1-2-1-4-4-4Z"
				/>
			</svg>
			<!-- / -->
			<div class="space-y-2">
				<h2>Vite + Svelte</h2>
				<p>Next Generation Frontend Tooling.</p>
			</div>
			<button class="btn btn-filled-accent place-self-center">Read Guide &rarr;</button>
		</a>

		<!-- Astro -->
		<a href="/guides/frameworks/astro" class="card p-4 grid grid-cols-[64px_1fr_auto] gap-4">
			<SvgIcon name="astro" fill="fill-surface-500" width="w-14" height="h-14" class="place-self-center" />
			<div class="space-y-2">
				<h2>Astro</h2>
				<p>Serve content fast with Astro's next-gen island architecture.</p>
			</div>
			<button class="btn btn-filled-accent place-self-center">Read Guide &rarr;</button>
		</a>
	</section>

	<hr />

	<!-- Next Steps -->
	<section class="space-y-4">
		<h2>What's Next?</h2>
		<div class="card card-body space-y-4">
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn about Skeleton's <strong>Tailwind</strong> features.</p>
				<a class="btn btn-ghost-surface" href="/elements/tokens">
					<span>Tailwind Features</span>
					<span>&rarr;</span>
				</a>
			</div>
			<hr />
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn about Skeleton's <strong>Svelte</strong> features.</p>
				<a class="btn btn-ghost-surface" href="/actions/clipboard">
					<span>Svelte Features</span>
					<span>&rarr;</span>
				</a>
			</div>
			<hr />
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn about Skeleton's <strong>utility</strong> features.</p>
				<a class="btn btn-ghost-surface" href="/utilities/codeblocks">
					<span>Utilities Features</span>
					<span>&rarr;</span>
				</a>
			</div>
		</div>
	</section>
</div>
