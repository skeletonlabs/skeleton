<script lang="ts">
	// @ts-expect-error reading from vite.config.js
	// eslint-disable-next-line no-undef
	const pkg = __PACKAGE__;

	// Logo
	import DocsLogoIcon from '$lib/components/DocsLogos/DocsLogoIcon.svelte';

	// Base Classes
	const cBase = 'bg-surface-50 dark:bg-surface-900 border-t border-surface-500/10 text-xs md:text-base';
	const cRowOne = 'flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0';
	const cRowTwo = 'flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0';

	// Social Icons
	const socialLinks = [
		{ title: 'GitHub', href: 'https://github.com/skeletonlabs/skeleton', icon: 'fa-github' },
		{ title: 'Discord', href: 'https://discord.gg/EXqV7W8MtY', icon: 'fa-discord' },
		{ title: 'Bluesky', href: 'https://bsky.app/profile/skeletonlabs.bsky.social', icon: 'fa-bluesky' },
		{ title: 'YouTube', href: 'https://www.youtube.com/@skeletonlabs', icon: 'fa-youtube' }
	];
</script>

<div class="page-footer {cBase}">
	<div class="w-full max-w-7xl mx-auto p-4 py-16 md:py-24 space-y-10">
		<!-- Row 1 -->
		<section class={cRowOne}>
			<div class="grid grid-cols-1 gap-2 place-content-center place-items-center md:place-items-start">
				<DocsLogoIcon />
				<p class="!text-sm opacity-80">UI Toolkit for Svelte + Tailwind.</p>
				<!-- Current Version -->
				<span class="badge variant-soft">{pkg.version}</span>
			</div>
			<div class="hidden md:grid grid-cols-3 gap-8">
				<div class="space-y-6">
					<h6 class="h6">Explore</h6>
					<ul class="space-y-3">
						<li><a class="anchor" href="/docs/introduction">Introduction</a></li>
						<li><a class="anchor" href="/docs/get-started">Get Started</a></li>
						<li><a class="anchor" href="/blog">Blog</a></li>
					</ul>
				</div>
				<div class="space-y-6">
					<h6 class="h6">Features</h6>
					<ul class="space-y-3">
						<li><a class="anchor" href="/elements/core">Tailwind</a></li>
						<li><a class="anchor" href="/actions/clipboard">Svelte</a></li>
						<li><a class="anchor" href="/utilities/codeblocks">Utilities</a></li>
					</ul>
				</div>
				<div class="space-y-6">
					<h6 class="h6">Project</h6>
					<ul class="space-y-3">
						<li>
							<a class="anchor" href="https://github.com/skeletonlabs" target="_blank" rel="noreferrer">Github Organization</a>
						</li>
						<li>
							<a class="anchor" href="https://www.npmjs.com/org/skeletonlabs" target="_blank" rel="noreferrer">NPM Organization</a>
						</li>
						<li>
							<a class="anchor" href="https://www.npmjs.com/package/@skeletonlabs/skeleton" target="_blank" rel="noreferrer">NPM Package</a>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<hr class="opacity-20" />

		<!-- Row 2 -->
		<section class={cRowTwo}>
			<p>
				<a class="anchor" href="https://github.com/skeletonlabs/skeleton/blob/master/LICENSE" target="_blank" rel="noreferrer">
					MIT License
				</a>
				<span class="opacity-10 mx-2">|</span>
				<a class="anchor" href="https://skeletonlabs.co/" target="_blank" rel="noreferrer">Skeleton Labs </a>
			</p>
			<div class="flex gap-6">
				{#each socialLinks as sl}
					<a class="opacity-75 hover:opacity-100" href={sl.href} target="_blank" rel="noreferrer" title={sl.title}>
						<i class="fa-brands text-xl {sl.icon}"></i>
					</a>
				{/each}
			</div>
		</section>
	</div>
</div>
