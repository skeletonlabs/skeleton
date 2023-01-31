<script lang="ts">
	// Docs
	import DocsLogoAnim from '$docs/DocsLogo/DocsLogoAnim.svelte';
	import SvgIcon from '$docs/SvgIcon/SvgIcon.svelte';
	// Components
	import Avatar from '$lib/components/Avatar/Avatar.svelte';

	// Fetch HTTP Data
	async function fetchHttpData(url: string, key?: string): Promise<any> {
		const http = await fetch(url);
		const res = await http.json();
		if (http.ok) {
			return key ? res[key] : res;
		} else {
			throw new Error(res);
		}
	}
	let contributors: Promise<any> = fetchHttpData('https://api.github.com/repos/skeletonlabs/skeleton/contributors');
</script>

<div>
	<!-- Hero -->
	<header class="variant-glass-surface border-b border-black/5 dark:border-white/5 px-4 py-10 md:py-20">
		<div class="container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
			<!-- Text -->
			<div class="space-y-4">
				<svg class="fill-token h-[56px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 40">
					<path
						d="m38.8 0 .6.1c.2.1.3.3.3.6V1l-1 8.5a843.3 843.3 0 0 1-1.2 12l1.7-1.9 2.7-3.2a63.8 63.8 0 0 0 2.8-3.3l9.8-.6h.3l.4.1c0 .2-.1.4-.5.8l-7.6 8.5a156.4 156.4 0 0 1-2.8 3L48 29l6.1 6.6.3.2a6.6 6.6 0 0 0 .5.2v.3l-.2.2c-.1.2-.4.3-.7.5a43.6 43.6 0 0 1-7 3l-.5-.1-.6-.6a52.5 52.5 0 0 1-4.3-5.4 5284 5284 0 0 0-4-5.3l-.3.2-.2.2-.2.2v.9a110.2 110.2 0 0 0-.8 6.3l-.9.3-6.4 2a28.9 28.9 0 0 1-1.5.4 1 1 0 0 1-.6-.1c-.2-.1-.3-.3-.3-.7l3.1-35v-.5l.1-.4c.2-.1.4-.3.9-.4L37.2.4l.7-.2.9-.2ZM96 .5c.2 0 .3 0 .3.2L93 35.5v.4c0 .2 0 .3-.2.4l-.8.3-6.3 2.3a6 6 0 0 1-.8.3 3 3 0 0 1-.8 0 1 1 0 0 1-.6 0 1 1 0 0 1-.3-.7v-.1A3265.1 3265.1 0 0 0 86 2.9c.1-.2.3-.4.6-.4l4.5-.9A41.2 41.2 0 0 0 96 .5ZM15.2 2l1.2.1A18.3 18.3 0 0 1 20 3a5 5 0 0 1 1.8.9l.4.4.2.6a166 166 0 0 1 .3 8.5l-.5.1-.4-.1a39.7 39.7 0 0 0-3-2.6L17 9.9c-.6-.2-1.3-.3-2-.3a8 8 0 0 0-1.4.1l-1.2.4-.8.8c-.2.4-.3.8-.3 1.3 0 .6 0 1 .2 1.5.1.4.4.8 1 1.1l5.8 4a12.5 12.5 0 0 1 4.2 4.5c.4.8.6 1.5.8 2.2l.2 2.1c0 1.2-.2 2.3-.6 3.3-.3 1-.9 1.9-1.5 2.8-.7.8-1.4 1.6-2.3 2.2a15.7 15.7 0 0 1-9 3.2 74.5 74.5 0 0 1-4.6-.2 13 13 0 0 1-2.1-.5c-.7-.2-1.3-.5-2-.9L1 28.8c0-.4.1-.5.4-.5.2 0 .3 0 .5.2.9.9 1.9 1.5 3 2a8.4 8.4 0 0 0 4.6.6c.5 0 .9-.2 1.3-.3a3 3 0 0 0 1-.7c.2-.3.4-.6.4-1 0-.5-.2-1-.4-1.3-.2-.4-.5-.7-.9-1a426.8 426.8 0 0 1-5.6-4.5c-1-.7-1.7-1.4-2.3-2.2a8.7 8.7 0 0 1-1.8-4.7L1 12.6c0-1.4.4-2.7 1-4A12 12 0 0 1 9.4 3a18 18 0 0 1 5.8-.9Zm55 8.6a10.8 10.8 0 0 1 9.5 6.2c.4 1.1.7 2.3.7 3.4 0 1-.3 2-1 3-.6 1-1.4 2-2.6 2.8a14 14 0 0 1-4 2 16.7 16.7 0 0 1-8.2.4 3.7 3.7 0 0 0 1.9 3 5 5 0 0 0 1.8.8l2 .2a12 12 0 0 0 4.4-.8 22.6 22.6 0 0 0 3.6-1.5 48.6 48.6 0 0 0 .7-.2v1.5a143 143 0 0 1 0 4.4c0 .2-.1.4-.5.6l-1.4.7a20.9 20.9 0 0 1-4.2 1.4 24.2 24.2 0 0 1-4 .5 14.6 14.6 0 0 1-9.6-3.5 12.7 12.7 0 0 1-4.2-9.6c0-2.1.4-4.1 1.1-6A14.7 14.7 0 0 1 64 12a15 15 0 0 1 6.1-1.2Zm42.9 0a10.8 10.8 0 0 1 9.5 6.2c.5 1.1.7 2.3.7 3.4 0 1-.3 2-.9 3-.6 1-1.5 2-2.6 2.8a14 14 0 0 1-4 2 16.7 16.7 0 0 1-8.2.4 3.7 3.7 0 0 0 1.9 3 5 5 0 0 0 1.8.8l2 .2a12 12 0 0 0 4.3-.8 22.6 22.6 0 0 0 3.7-1.5 48.6 48.6 0 0 0 .7-.2v1.5a143 143 0 0 1 0 4.4c0 .2-.1.4-.5.6l-1.4.7a20.9 20.9 0 0 1-4.2 1.4 24.2 24.2 0 0 1-4.1.5 14.6 14.6 0 0 1-9.5-3.5 12.7 12.7 0 0 1-4.2-9.6c0-2.1.4-4.1 1.1-6A14.7 14.7 0 0 1 107 12a15 15 0 0 1 6-1.2Zm27.6-7.1c.2 0 .3 0 .3.2a248.1 248.1 0 0 1-1 9.1h6.6l.4.2.1.4c0 .1 0 .4-.3.9l-.8 2-.9 2c0 .2-.2.4-.3.5l-.8.2h-4.5a381 381 0 0 0-1 9.9l.1 1.5c.1.5.3.8.5 1l.6.6 1 .1c.4 0 1 0 1.6-.2a14.9 14.9 0 0 0 2.4-.8h.3c.2 0 .3 0 .3.2l.2.7a56.6 56.6 0 0 0 .9 4.2c0 .2-.1.4-.3.5A108.2 108.2 0 0 1 139 39l-1.7.1c-2.8 0-4.7-.6-6-2-1.2-1.3-1.8-3.4-1.8-6.1a22.2 22.2 0 0 1 .1-3 289.3 289.3 0 0 0 .8-8.8h-2.5l-2-.1c-.3-.1-.5-.3-.5-.5l.2-.5a27.3 27.3 0 0 1 1.5-2.3 71.8 71.8 0 0 1 1.9-2.9h1.7a280.2 280.2 0 0 0 .9-7.1l.2-.3h.4a104.4 104.4 0 0 1 6.2-1.3 43.4 43.4 0 0 0 2.4-.6Zm19.8 6.6c3 0 5.7.4 8 1 2 .8 3.9 1.7 5.2 3a9.9 9.9 0 0 1 3 4.3 16.3 16.3 0 0 1-.3 11.8 14.1 14.1 0 0 1-8.3 7.8 17.3 17.3 0 0 1-12 0 12.3 12.3 0 0 1-7-7.3 14.7 14.7 0 0 1 2.4-14.2 13.7 13.7 0 0 1 8.4-4.9l.4-.1V11l-.1-.4v-.4h.3Zm32-.3.2.1v.8a57.3 57.3 0 0 0-.5 3 25.2 25.2 0 0 1 6-2.6 16.5 16.5 0 0 1 4.5-.5c2.3 0 4 .7 5 2a11 11 0 0 1 1.6 6.3 30.8 30.8 0 0 1-.2 2.5l-1 10.5a21 21 0 0 0-.2 4.4c0 .2 0 .3-.2.4l-.8.3-6 1.7c-.1 0-.4 0-.7.2l-.8.1a1 1 0 0 1-.6-.1c-.2-.1-.3-.3-.3-.6v-.2a523.3 523.3 0 0 0 1.6-17.7v-1.3a3 3 0 0 0-.5-1.1c-.1-.3-.4-.5-.7-.7-.3-.2-.8-.3-1.3-.3a7.6 7.6 0 0 0-3.5 1l-1.7 1.6a4 4 0 0 0-.9 2.2 225 225 0 0 1-1.2 13.8v.2c0 .1 0 .2-.2.3l-.8.3-6.5 2.3a28.9 28.9 0 0 1-1.5.3 1 1 0 0 1-.6-.1c-.2-.1-.3-.3-.3-.6l2.2-24.9.2-1.1c0-.2.3-.3.6-.4l4.5-.9c1.6-.3 3.1-.7 4.6-1.2Zm-24.3 7a2.5 2.5 0 0 0-3.4.9l-2.2 3.8-3.8-2.2a2.5 2.5 0 0 0-2.5 4.3L160 26l-2.2 3.9a2.5 2.5 0 1 0 4.3 2.5l2.2-3.9 3.8 2.2a2.5 2.5 0 0 0 2.5-4.3l-3.8-2.2 2.2-3.8.1-.2c.6-1.1.1-2.6-1-3.2Zm-96.8-2.3c-.7-.4-1.6-.2-2 .5L68 17.4l-2.2-1.3a1.5 1.5 0 0 0-1.5 2.6l2.3 1.3-1.3 2.2a1.5 1.5 0 1 0 2.5 1.5l1.3-2.3 2.3 1.3a1.5 1.5 0 0 0 1.5-2.5l-2.3-1.3 1.3-2.3v-.1c.4-.7.1-1.5-.5-1.9Zm38.8.7a1.5 1.5 0 0 0-2.2 1.9l1.7 2-2 1.7a1.5 1.5 0 1 0 1.9 2.2l2-1.7 1.6 2a1.5 1.5 0 0 0 2.3-1.9l-1.7-2 2-1.6.1-.1a1.5 1.5 0 0 0-2-2.2l-2 1.7Z"
					/>
				</svg>
				<h2 class="md:text-4xl">A fully featured UI Toolkit.</h2>
				<p class="md:!text-lg">
					Build reactive interfaces quickly using <a href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a>
					+ <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>.
				</p>
				<nav class="flex space-x-4">
					<a href="/guides/install" class="btn variant-filled-primary">
						<span>Get Started</span>
						<span>&rarr;</span>
					</a>
					<a href="/docs/why" class="btn variant-ghost-surface">Why Skeleton</a>
				</nav>
			</div>
			<!-- Logo -->
			<DocsLogoAnim />
		</div>
	</header>

	<div class="container max-w-[1200px] mx-auto px-4 py-10 md:py-20 space-y-20">
		<!-- Pre-Release Alert -->
		<aside class="alert variant-ghost-warning">
			<i class="fa-solid fa-triangle-exclamation text-4xl" />
			<div class="alert-message">Skeleton is currently in beta. Expect breaking changes prior to v1.0. Please report bugs on GitHub.</div>
			<div class="alert-actions">
				<a href="https://github.com/skeletonlabs/skeleton/issues" target="_blank" rel="noreferrer" class="btn variant-filled"
					>Report Issue</a
				>
			</div>
		</aside>

		<!-- Features -->
		<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<h2 class="sr-only">Features</h2>
			<div class="card variant-glass-surface p-4 text-center space-y-4">
				<div class="bg-orange-500 w-20 mx-auto lg:-mt-10 aspect-square flex justify-center items-center rounded-token shadow">
					<SvgIcon name="svelte" fill="fill-white" width="w-10" height="h-10" />
				</div>
				<h4>Svelte Integration</h4>
				<p>
					Tightly coupled support for Svelte using the <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a> app framework.
				</p>
			</div>
			<div class="card variant-glass-surface p-4 text-center space-y-4">
				<div class="bg-sky-500 w-20 mx-auto lg:-mt-10 aspect-square flex justify-center items-center rounded-token shadow">
					<SvgIcon name="tailwind" fill="fill-white" width="w-10" height="h-10" />
				</div>
				<h4>Tailwind CSS Integration</h4>
				<p>Integrate with your design system using Tailwind utility classes to style components.</p>
			</div>
			<div class="card variant-glass-surface p-4 text-center space-y-4">
				<div class="bg-primary-500 w-20 mx-auto lg:-mt-10 aspect-square flex justify-center items-center rounded-token shadow">
					<i class="fa-solid fa-swatchbook text-3xl" />
				</div>
				<h4>Dynamic Themes</h4>
				<p>Choose from a library of hand crafted preset themes or quickly generate your own in seconds.</p>
			</div>
			<div class="card variant-glass-surface p-4 text-center space-y-4">
				<div class="bg-secondary-500 w-20 mx-auto lg:-mt-10 aspect-square flex justify-center items-center rounded-token shadow">
					<i class="fa-solid fa-screwdriver-wrench text-3xl" />
				</div>
				<h4>Powerful Utilities</h4>
				<p>Provides a feature rich UI toolkit for modern web apps with layouts, modals, and more.</p>
			</div>
		</section>

		<hr />

		<!-- Contributors & Sponsors -->
		<section class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 place-items-center">
			<!-- Contributors -->
			<div class="text-center space-y-6">
				<h2>Contributors</h2>
				{#await contributors}
					<p class="flex flex-wrap justify-center">Loading contributors...</p>
				{:then response}
					<div class="grid grid-cols-8 md:grid-cols-10 gap-2">
						{#each response as c}
							<a href={c.html_url} target="_blank" rel="noreferrer" title={c.login}>
								<Avatar
									src={c.avatar_url}
									shadow="shadow-lg"
									border="border-2 border-transparent hover:!border-primary-500 cursor-pointer"
									width="w-full"
								/>
							</a>
						{/each}
					</div>
				{/await}
				<a class="btn variant-ghost-surface" href="/docs/contributions">
					<span>Contribution Guide</span>
					<span>&rarr;</span>
				</a>
			</div>
			<!-- Sponsors -->
			<div class="text-center space-y-6">
				<h2>Sponsors</h2>
				<div class="grid grid-cols-2 gap-4">
					<a
						class="unstyled card variant-glass p-4 inline-flex flex-col items-center space-y-4"
						href="https://www.brainandbonesllc.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img src="https://www.brainandbonesllc.com/svg/logo.svg" alt="Brain & Bones" class="h-[48px] mx-auto invert dark:invert-0" />
						<p class="text-sm">Brain & Bones</p>
					</a>
					<a
						class="unstyled card variant-glass p-4 inline-flex flex-col items-center space-y-4"
						href="https://lukehagar.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img src="https://i.imgur.com/ySBlLmQ.png" alt="Brain & Bones" class="h-[48px] mx-auto rounded-full" />
						<p class="text-sm">Luke Hagar</p>
					</a>
				</div>
				<p>You can support us directly via:</p>
				<div class="grid grid-col-1 gap-4 max-w-[280px] mx-auto">
					<a class="btn variant-filled-primary" href="https://ko-fi.com/skeletonlabs" target="_blank" rel="noreferrer"> Ko-Fi </a>
					<a class="btn variant-filled-primary" href="https://github.com/sponsors/skeletonlabs" target="_blank" rel="noreferrer">
						GitHub Sponsors
					</a>
					<a class="btn variant-filled-primary" href="https://patreon.com/user?u=83786276" target="_blank" rel="noreferrer"> Patreon </a>
				</div>
			</div>
		</section>

		<hr />

		<!-- Team -->
		<section class="text-center space-y-6">
			<h2>Meet The Team</h2>
			<ul class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
				<li class="card variant-glass-surface p-4 space-y-4">
					<Avatar src="https://avatars.githubusercontent.com/u/1509726?v=4" width="w-32" class="mx-auto" />
					<div>
						<h3>Chris Simmons</h3>
						<p>Co-founder and core maintainer.</p>
						<small class="!text-primary-500">(aka endigo9740)</small>
					</div>
					<div class="flex justify-center space-x-4">
						<a class="unstyled" href="https://github.com/endigo9740" target="_blank" rel="noreferrer">
							<i class="fa-brands fa-github text-xl" />
						</a>
						<a class="unstyled" href="https://twitter.com/endigodesign" target="_blank" rel="noreferrer">
							<i class="fa-brands fa-twitter text-xl" />
						</a>
						<a class="unstyled" href="https://www.linkedin.com/in/chris-simmons-8a523a23/" target="_blank" rel="noreferrer">
							<i class="fa-brands fa-linkedin text-xl" />
						</a>
					</div>
				</li>
				<li class="card variant-glass-surface p-4 space-y-4">
					<Avatar src="https://avatars.githubusercontent.com/u/10255430?v=4" width="w-32" class="mx-auto" />
					<div>
						<h3>Trey Weir</h3>
						<p>Core member and founder of <a href="https://www.brainandbonesllc.com/" target="_blank" rel="noreferrer">Brain & Bones</a></p>
						<small class="!text-primary-500">(aka weirbones)</small>
					</div>
					<div class="flex justify-center space-x-4">
						<a class="unstyled" href="https://twitter.com/brain_and_bones" target="_blank" rel="noreferrer">
							<i class="fa-brands fa-twitter text-xl" />
						</a>
						<a class="unstyled" href="https://www.linkedin.com/company/brainandbones/" target="_blank" rel="noreferrer">
							<i class="fa-brands fa-linkedin text-xl" />
						</a>
					</div>
				</li>
			</ul>
			<div class="flex justify-center gap-4">
				<a class="btn variant-ghost-surface" href="mailto:admin@skeleton.dev">Reach Out</a>
				<a class="btn variant-filled-primary" href="https://www.skeletonlabs.co/" target="_blank" rel="noreferrer">
					<span>Skeleton Labs</span>
					<span>&rarr;</span>
				</a>
			</div>
		</section>
	</div>
</div>
