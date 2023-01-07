<script lang="ts">
	// @ts-expect-error reading from vite.config.js
	const pkg = __PACKAGE__;

	// Logo
	import DocsLogoIcon from '$docs/DocsLogo/DocsLogoIcon.svelte';

	// Components
	import Divider from '$lib/components/Divider/Divider.svelte';

	// Base Classes
	const cBase = 'bg-surface-100-800-token text-xs md:text-base mx-auto px-4 py-8 md:p-10 space-y-10';
	const cRowOne = 'flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0';
	const cRowTwo = 'flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0';
</script>

<div class="page-footer {cBase}">
	<!-- Row 1 -->
	<section class={cRowOne}>
		<div class="grid grid-cols-1 gap-2 place-content-center place-items-center md:place-items-start">
			<DocsLogoIcon />
			<p class="!text-sm opacity-80">A fully featured UI Toolkit.</p>
			<!-- Current Version -->
			<span class="badge badge-filled-surface">v{pkg.version}</span>
		</div>
		<div class="hidden md:grid grid-cols-[auto_auto_auto] gap-10">
			<div class="space-y-4">
				<h6>About</h6>
				<ul class="space-y-2">
					<li><a href="/docs/why">Why Skeleton</a></li>
					<li><a href="/docs/comparisons">Comparisons</a></li>
					<li><a href="/docs/contributions">Contribute</a></li>
				</ul>
			</div>
			<div class="space-y-4">
				<h6>Community</h6>
				<ul class="space-y-2">
					<li><a href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">Join Discord</a></li>
					<li><a href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer">Follow on Twitter</a></li>
					<li><a href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer">View Github</a></li>
				</ul>
			</div>
			<div class="space-y-4">
				<h6>Project</h6>
				<ul class="space-y-2">
					<li><a href="https://github.com/skeletonlabs" target="_blank" rel="noreferrer">Github Organization</a></li>
					<li><a href="https://www.npmjs.com/org/skeletonlabs" target="_blank" rel="noreferrer">NPM Organization</a></li>
					<li><a href="https://www.npmjs.com/package/@skeletonlabs/skeleton" target="_blank" rel="noreferrer">NPM Package</a></li>
				</ul>
			</div>
		</div>
	</section>

	<Divider borderStyle="border-dotted" opacity="opacity-50" />

	<!-- Row 2 -->
	<section class={cRowTwo}>
		<p class="text-xs">
			<a href="https://github.com/skeletonlabs/skeleton/blob/master/LICENSE" target="_blank" rel="noreferrer">MIT License</a>
			<span class="opacity-10 mx-2">|</span>
			<a href="https://github.com/skeletonlabs/skeleton/graphs/contributors" target="_blank" rel="noreferrer">Contributors</a>
		</p>
		<div class="flex space-x-4">
			<a class="btn bg-[#7289da] text-white" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-discord" />
				<span class="hidden md:inline-block ml-2">Discord</span>
			</a>
			<a class="btn bg-[#1da1f2] text-white" href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-twitter" />
				<span class="hidden md:inline-block ml-2">Twitter</span>
			</a>
			<a class="btn bg-[#6e5494] text-white" href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-github" />
				<span class="hidden md:inline-block ml-2">Github</span>
			</a>
		</div>
	</section>
</div>
