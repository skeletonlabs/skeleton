<script lang="ts">
	// Components
	import Alert from '$lib/components/Alert/Alert.svelte';
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

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
	let contributors: Promise<any> = fetchHttpData('https://api.github.com/repos/Brain-Bones/skeleton/contributors');
	// https://github.com/filiptronicek/gh-sponsors-api
	let sponsors: Promise<any> = fetchHttpData('https://ghs.vercel.app/sponsors/Brain-Bones', 'sponsors');
</script>

<div>
	<!-- Hero -->
	<header class="bg-accent-900/5 dark:bg-accent-900/20 border-b border-black/5 dark:border-white/5 px-4 py-10 md:py-20">
		<div class="container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
			<!-- Text -->
			<div class="space-y-4">
				<svg class="fill-token h-[56px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 40">
					<path
						d="m38.8 0 .6.1c.2.1.3.3.3.6V1l-1 8.5a843.3 843.3 0 0 1-1.2 12l1.7-1.9 2.7-3.2a63.8 63.8 0 0 0 2.8-3.3l9.8-.6h.3l.4.1c0 .2-.1.4-.5.8l-7.6 8.5a156.4 156.4 0 0 1-2.8 3L48 29l6.1 6.6.3.2a6.6 6.6 0 0 0 .5.2v.3l-.2.2c-.1.2-.4.3-.7.5a43.6 43.6 0 0 1-7 3l-.5-.1-.6-.6a52.5 52.5 0 0 1-4.3-5.4 5284 5284 0 0 0-4-5.3l-.3.2-.2.2-.2.2v.9a110.2 110.2 0 0 0-.8 6.3l-.9.3-6.4 2a28.9 28.9 0 0 1-1.5.4 1 1 0 0 1-.6-.1c-.2-.1-.3-.3-.3-.7l3.1-35v-.5l.1-.4c.2-.1.4-.3.9-.4L37.2.4l.7-.2.9-.2ZM96 .5c.2 0 .3 0 .3.2L93 35.5v.4c0 .2 0 .3-.2.4l-.8.3-6.3 2.3a6 6 0 0 1-.8.3 3 3 0 0 1-.8 0 1 1 0 0 1-.6 0 1 1 0 0 1-.3-.7v-.1A3265.1 3265.1 0 0 0 86 2.9c.1-.2.3-.4.6-.4l4.5-.9A41.2 41.2 0 0 0 96 .5ZM15.2 2l1.2.1A18.3 18.3 0 0 1 20 3a5 5 0 0 1 1.8.9l.4.4.2.6a166 166 0 0 1 .3 8.5l-.5.1-.4-.1a39.7 39.7 0 0 0-3-2.6L17 9.9c-.6-.2-1.3-.3-2-.3a8 8 0 0 0-1.4.1l-1.2.4-.8.8c-.2.4-.3.8-.3 1.3 0 .6 0 1 .2 1.5.1.4.4.8 1 1.1l5.8 4a12.5 12.5 0 0 1 4.2 4.5c.4.8.6 1.5.8 2.2l.2 2.1c0 1.2-.2 2.3-.6 3.3-.3 1-.9 1.9-1.5 2.8-.7.8-1.4 1.6-2.3 2.2a15.7 15.7 0 0 1-9 3.2 74.5 74.5 0 0 1-4.6-.2 13 13 0 0 1-2.1-.5c-.7-.2-1.3-.5-2-.9L1 28.8c0-.4.1-.5.4-.5.2 0 .3 0 .5.2.9.9 1.9 1.5 3 2a8.4 8.4 0 0 0 4.6.6c.5 0 .9-.2 1.3-.3a3 3 0 0 0 1-.7c.2-.3.4-.6.4-1 0-.5-.2-1-.4-1.3-.2-.4-.5-.7-.9-1a426.8 426.8 0 0 1-5.6-4.5c-1-.7-1.7-1.4-2.3-2.2a8.7 8.7 0 0 1-1.8-4.7L1 12.6c0-1.4.4-2.7 1-4A12 12 0 0 1 9.4 3a18 18 0 0 1 5.8-.9Zm55 8.6a10.8 10.8 0 0 1 9.5 6.2c.4 1.1.7 2.3.7 3.4 0 1-.3 2-1 3-.6 1-1.4 2-2.6 2.8a14 14 0 0 1-4 2 16.7 16.7 0 0 1-8.2.4 3.7 3.7 0 0 0 1.9 3 5 5 0 0 0 1.8.8l2 .2a12 12 0 0 0 4.4-.8 22.6 22.6 0 0 0 3.6-1.5 48.6 48.6 0 0 0 .7-.2v1.5a143 143 0 0 1 0 4.4c0 .2-.1.4-.5.6l-1.4.7a20.9 20.9 0 0 1-4.2 1.4 24.2 24.2 0 0 1-4 .5 14.6 14.6 0 0 1-9.6-3.5 12.7 12.7 0 0 1-4.2-9.6c0-2.1.4-4.1 1.1-6A14.7 14.7 0 0 1 64 12a15 15 0 0 1 6.1-1.2Zm42.9 0a10.8 10.8 0 0 1 9.5 6.2c.5 1.1.7 2.3.7 3.4 0 1-.3 2-.9 3-.6 1-1.5 2-2.6 2.8a14 14 0 0 1-4 2 16.7 16.7 0 0 1-8.2.4 3.7 3.7 0 0 0 1.9 3 5 5 0 0 0 1.8.8l2 .2a12 12 0 0 0 4.3-.8 22.6 22.6 0 0 0 3.7-1.5 48.6 48.6 0 0 0 .7-.2v1.5a143 143 0 0 1 0 4.4c0 .2-.1.4-.5.6l-1.4.7a20.9 20.9 0 0 1-4.2 1.4 24.2 24.2 0 0 1-4.1.5 14.6 14.6 0 0 1-9.5-3.5 12.7 12.7 0 0 1-4.2-9.6c0-2.1.4-4.1 1.1-6A14.7 14.7 0 0 1 107 12a15 15 0 0 1 6-1.2Zm27.6-7.1c.2 0 .3 0 .3.2a248.1 248.1 0 0 1-1 9.1h6.6l.4.2.1.4c0 .1 0 .4-.3.9l-.8 2-.9 2c0 .2-.2.4-.3.5l-.8.2h-4.5a381 381 0 0 0-1 9.9l.1 1.5c.1.5.3.8.5 1l.6.6 1 .1c.4 0 1 0 1.6-.2a14.9 14.9 0 0 0 2.4-.8h.3c.2 0 .3 0 .3.2l.2.7a56.6 56.6 0 0 0 .9 4.2c0 .2-.1.4-.3.5A108.2 108.2 0 0 1 139 39l-1.7.1c-2.8 0-4.7-.6-6-2-1.2-1.3-1.8-3.4-1.8-6.1a22.2 22.2 0 0 1 .1-3 289.3 289.3 0 0 0 .8-8.8h-2.5l-2-.1c-.3-.1-.5-.3-.5-.5l.2-.5a27.3 27.3 0 0 1 1.5-2.3 71.8 71.8 0 0 1 1.9-2.9h1.7a280.2 280.2 0 0 0 .9-7.1l.2-.3h.4a104.4 104.4 0 0 1 6.2-1.3 43.4 43.4 0 0 0 2.4-.6Zm19.8 6.6c3 0 5.7.4 8 1 2 .8 3.9 1.7 5.2 3a9.9 9.9 0 0 1 3 4.3 16.3 16.3 0 0 1-.3 11.8 14.1 14.1 0 0 1-8.3 7.8 17.3 17.3 0 0 1-12 0 12.3 12.3 0 0 1-7-7.3 14.7 14.7 0 0 1 2.4-14.2 13.7 13.7 0 0 1 8.4-4.9l.4-.1V11l-.1-.4v-.4h.3Zm32-.3.2.1v.8a57.3 57.3 0 0 0-.5 3 25.2 25.2 0 0 1 6-2.6 16.5 16.5 0 0 1 4.5-.5c2.3 0 4 .7 5 2a11 11 0 0 1 1.6 6.3 30.8 30.8 0 0 1-.2 2.5l-1 10.5a21 21 0 0 0-.2 4.4c0 .2 0 .3-.2.4l-.8.3-6 1.7c-.1 0-.4 0-.7.2l-.8.1a1 1 0 0 1-.6-.1c-.2-.1-.3-.3-.3-.6v-.2a523.3 523.3 0 0 0 1.6-17.7v-1.3a3 3 0 0 0-.5-1.1c-.1-.3-.4-.5-.7-.7-.3-.2-.8-.3-1.3-.3a7.6 7.6 0 0 0-3.5 1l-1.7 1.6a4 4 0 0 0-.9 2.2 225 225 0 0 1-1.2 13.8v.2c0 .1 0 .2-.2.3l-.8.3-6.5 2.3a28.9 28.9 0 0 1-1.5.3 1 1 0 0 1-.6-.1c-.2-.1-.3-.3-.3-.6l2.2-24.9.2-1.1c0-.2.3-.3.6-.4l4.5-.9c1.6-.3 3.1-.7 4.6-1.2Zm-24.3 7a2.5 2.5 0 0 0-3.4.9l-2.2 3.8-3.8-2.2a2.5 2.5 0 0 0-2.5 4.3L160 26l-2.2 3.9a2.5 2.5 0 1 0 4.3 2.5l2.2-3.9 3.8 2.2a2.5 2.5 0 0 0 2.5-4.3l-3.8-2.2 2.2-3.8.1-.2c.6-1.1.1-2.6-1-3.2Zm-96.8-2.3c-.7-.4-1.6-.2-2 .5L68 17.4l-2.2-1.3a1.5 1.5 0 0 0-1.5 2.6l2.3 1.3-1.3 2.2a1.5 1.5 0 1 0 2.5 1.5l1.3-2.3 2.3 1.3a1.5 1.5 0 0 0 1.5-2.5l-2.3-1.3 1.3-2.3v-.1c.4-.7.1-1.5-.5-1.9Zm38.8.7a1.5 1.5 0 0 0-2.2 1.9l1.7 2-2 1.7a1.5 1.5 0 1 0 1.9 2.2l2-1.7 1.6 2a1.5 1.5 0 0 0 2.3-1.9l-1.7-2 2-1.6.1-.1a1.5 1.5 0 0 0-2-2.2l-2 1.7Z"
					/>
				</svg>
				<h2 class="md:text-5xl">A fully featured UI Toolkit.</h2>
				<p class="md:!text-lg">
					Build fast and reactive web interfaces using <a href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a>
					+ <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>.
				</p>
				<nav class="flex space-x-4">
					<a href="/guides/install" class="btn btn-lg btn-filled-primary">
						<span>Get Started</span>
						<span>&rarr;</span>
					</a>
					<a href="/docs/why" class="btn btn-lg btn-ghost-surface">Why Skeleton</a>
				</nav>
			</div>
			<!-- Logo (Big) -->
			<svg class="fill-token w-[200px] h-[200px] md:w-[320px] md:h-[320px] -scale-x-[100%] dark:drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
				<path
					fill-rule="evenodd"
					d="M98.77 50.95c25.1 0 46.54 8.7 61.86 23a41.34 41.34 0 0 0 5.19-1.93c4.35-2.02 10.06-6.17 17.13-12.43-1.15 10.91-2.38 18.93-3.7 24.04-.7 2.75-1.8 6.08-3.3 10a80.04 80.04 0 0 1 8.42 23.33c6.04 30.3-4.3 43.7-28.33 51.18.18.9.32 1.87.42 2.9.86 8.87-3.62 23.19-9 23.19-3.54 0-5.84-4.93-8.3-12.13-.78 8.34-4.58 17.9-8.98 17.9-4.73 0-7.25-8.84-10.93-20.13a214 214 0 0 1-.64 2.93l-.16.71-.16.71-.17.71c-1.84 7.58-4.46 15.07-8.5 15.07-5.06 0-2.29-15.9-10.8-22.63-43.14 2.36-79.43-13.6-79.43-59.62 0-8.48 2-16.76 5.69-24.45a93.72 93.72 0 0 1-1.77-3.68c-2.87-6.32-6.3-15.88-10.31-28.7 10.26 7.66 18.12 12.22 23.6 13.68.5.14 1.02.26 1.57.36 14.36-14.44 35.88-24.01 60.6-24.01Zm-9.99 62.3c-14.57 0-26.39 11.45-26.39 25.58 0 14.14 11.82 25.6 26.39 25.6s26.39-11.46 26.39-25.6c0-13.99-11.58-25.35-25.95-25.58Zm37.45 31.95c-4.4 0-6.73 9.4-6.73 13.62 0 3.3 1.1 5.12 2.9 5.45 4.39.4 3.05-5.97 5.23-5.97 1.06 0 2.2 1.35 3.34 2.73l.34.42c1.25 1.52 2.5 2.93 3.64 2.49 2.7-1.61 1.67-5.12.74-7.88-3.3-6.96-5.05-10.86-9.46-10.86Zm-36.85-28.45c12.57 0 22.76 9.78 22.76 21.85 0 12.07-10.2 21.85-22.76 21.85-.77 0-1.53-.04-2.29-.11 11.5-1.1 20.46-10.42 20.46-21.74 0-11.32-8.97-20.63-20.46-21.74.76-.07 1.52-.1 2.3-.1Zm65.54-5c-10.04 0-18.18 10.06-18.18 22.47 0 12.4 8.14 22.47 18.18 22.47s18.18-10.06 18.18-22.47c0-12.41-8.14-22.48-18.18-22.48Zm.6 3.62c8.38 0 15.16 8.4 15.16 18.74 0 10.35-6.78 18.74-15.16 18.74-.77 0-1.54-.07-2.28-.21 7.3-1.36 12.89-9.14 12.89-18.53 0-9.4-5.6-17.17-12.89-18.53.74-.14 1.5-.2 2.28-.2Zm3.34-72.27.12.07c.58.38.75 1.16.37 1.74l-2.99 4.6c-.35.55-1.05.73-1.61.44l-.12-.07a1.26 1.26 0 0 1-.37-1.74l2.98-4.6a1.26 1.26 0 0 1 1.62-.44ZM39.66 42l.08.1 2.76 3.93a1.26 1.26 0 0 1-2.06 1.45l-2.76-3.94A1.26 1.26 0 0 1 39.66 42Zm63.28-42 2.85 24.13 10.62-11.94.28 29.72-2.1-.47a77.8 77.8 0 0 0-16.72-2.04c-4.96 0-9.61.67-13.96 2l-2.34.73L83.5 4.96l9.72 18.37L102.94 0Zm-1.87 13.39-7.5 17.96-7.3-13.8-1.03 19.93.22-.06a51.56 51.56 0 0 1 12.1-1.45h.31c4.58 0 9.58.54 15 1.61l.35.07-.15-16.54-9.79 11-2.21-18.72Zm38.86 19.23c.67.2 1.05.89.86 1.56l-.38 1.32c-.17.62-.8 1-1.42.89l-.13-.03a1.26 1.26 0 0 1-.86-1.56l.38-1.32c.19-.66.88-1.05 1.55-.86ZM63.95 31.1l.05.12.7 2.17a1.26 1.26 0 0 1-2.34.9l-.04-.12-.71-2.17a1.26 1.26 0 0 1 2.34-.9Z"
				/>
			</svg>
		</div>
	</header>

	<!-- Alert: Beta -->
	<Alert>
		<svelte:fragment slot="lead">🚧</svelte:fragment>
		<span>Skeleton is currently in beta. Expect breaking changes prior to v1.0. Please report bugs on GitHub.</span>
		<svelte:fragment slot="trail">
			<a href="https://github.com/Brain-Bones/skeleton/issues" target="_blank" rel="noreferrer" class="btn btn-filled">Report Issue</a>
		</svelte:fragment>
	</Alert>

	<div class="container max-w-[1200px] mx-auto px-4 py-10 md:py-20 space-y-20">
		<!-- Features -->
		<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<h2 class="sr-only">Features</h2>
			<div class="card card-body !bg-accent-500/5 text-center space-y-4">
				<div class="bg-orange-500 w-20 mx-auto aspect-square flex justify-center items-center rounded-token shadow">
					<SvgIcon name="svelte" fill="fill-white" width="w-10" height="h-10" />
				</div>
				<h4>Svelte Integration</h4>
				<p>
					Tightly coupled with Svelte, including full support for <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>,
					<a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>, and
					<a href="https://astro.build/" target="_blank" rel="noreferrer">Astro</a>.
				</p>
			</div>
			<div class="card card-body !bg-accent-500/5 text-center space-y-4">
				<div class="bg-sky-500 w-20 mx-auto aspect-square flex justify-center items-center rounded-token shadow">
					<SvgIcon name="tailwind" fill="fill-white" width="w-10" height="h-10" />
				</div>
				<h4>Tailwind CSS Integration</h4>
				<p>Integrate with your design system using Tailwind utility classes to style components.</p>
			</div>
			<div class="card card-body !bg-accent-500/5 text-center space-y-4">
				<div class="bg-primary-500 w-20 mx-auto aspect-square flex justify-center items-center rounded-token shadow">
					<SvgIcon name="swatchbook" fill="fill-white" width="w-8" height="h-8" />
				</div>
				<h4>Dynamic Themes</h4>
				<p>Choose from a library of hand crafted preset themes or quickly generate your own in seconds.</p>
			</div>
			<div class="card card-body !bg-accent-500/5 text-center space-y-4">
				<div class="bg-accent-500 w-20 mx-auto aspect-square flex justify-center items-center rounded-token shadow">
					<SvgIcon name="screwdriver" fill="fill-white" width="w-8" height="h-8" />
				</div>
				<h4>Powerful Utilities</h4>
				<p>Provides a feature rich UI toolkit for modern web apps with layouts, dialogs, and more.</p>
			</div>
		</section>

		<hr />

		<!-- Team -->
		<section class="text-center space-y-6">
			<h2>Meet The Team</h2>
			<ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<li class="card card-body !bg-accent-500/5 space-y-4">
					<Avatar src="https://avatars.githubusercontent.com/u/1509726?v=4" width="w-32" class="mx-auto" />
					<div>
						<h3>Chris Simmons</h3>
						<p>Co-founder and core maintainer.</p>
						<small class="!text-primary-500">(aka endigo9740)</small>
					</div>
					<div class="flex justify-center space-x-4">
						<a href="https://github.com/endigo9740" target="_blank" rel="noreferrer"><SvgIcon name="github" /></a>
						<a href="https://twitter.com/endigodesign" target="_blank" rel="noreferrer"><SvgIcon name="twitter" /></a>
						<a href="https://www.linkedin.com/in/chris-simmons-8a523a23/" target="_blank" rel="noreferrer"><SvgIcon name="linkedin" /></a>
					</div>
				</li>
				<!-- <li class="card card-body !bg-accent-500/5 space-y-4">
					<Avatar src="https://avatars.githubusercontent.com/u/52718757?v=4" width="w-32" class="mx-auto" />
					<div>
						<h3>Thomas Jespersen</h3>
						<p>Co-founder and core contributor.</p>
						<small class="!text-primary-500">(aka thomjespersen)</small>
					</div>
					<div class="flex justify-center space-x-4">
						<a href="https://github.com/thomasbjespersen" target="_blank" rel="noreferrer"><SvgIcon name="github" /></a>
						<a href="https://www.linkedin.com/in/thomas-jespersen-b77132202/" target="_blank" rel="noreferrer"><SvgIcon name="linkedin" /></a>
					</div>
				</li> -->
				<li class="card card-body !bg-accent-500/5 space-y-4">
					<Avatar src="https://avatars.githubusercontent.com/u/10255430?v=4" width="w-32" class="mx-auto" />
					<div>
						<h3>Trey Weir</h3>
						<p>Core member and founder of <a href="https://www.brainandbonesllc.com/" target="_blank" rel="noreferrer">Brain & Bones</a></p>
						<small class="!text-primary-500">(aka weirbones)</small>
					</div>
					<div class="flex justify-center space-x-4">
						<a href="https://twitter.com/brain_and_bones" target="_blank" rel="noreferrer"><SvgIcon name="twitter" /></a>
						<a href="https://www.linkedin.com/company/brainandbones/" target="_blank" rel="noreferrer"><SvgIcon name="linkedin" /></a>
					</div>
				</li>
			</ul>
		</section>

		<hr />

		<!-- Shoutouts -->
		<section class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
			<!-- Contributors -->
			<div class="text-center space-y-6">
				<h2>Contributors</h2>
				{#await contributors}
					<p class="flex flex-wrap justify-center">Loading contributors...</p>
				{:then response}
					<ul class="flex flex-wrap justify-center">
						{#each response as c}
							<li>
								<a href={c.html_url} target="_blank" rel="noreferrer" title={c.login}>
									<Avatar src={c.avatar_url} size="fluid" shadow="shadow-lg" border="hover:border-2 hover:!border-primary-500 cursor-pointer" class="m-2 max-w-[50px]" />
								</a>
							</li>
						{/each}
					</ul>
				{/await}
				<a class="btn btn-ghost-surface" href="/docs/contributions">
					<span>How to Contribute</span>
					<span>&rarr;</span>
				</a>
			</div>

			<!-- Sponsors -->
			<div class="text-center space-y-6">
				<h2>Sponsors</h2>
				<a class="unstyled flex flex-col items-center space-y-4" href="https://www.brainandbonesllc.com/" target="_blank" rel="noreferrer">
					<img src="https://www.brainandbonesllc.com/svg/logo.svg" alt="Brain & Bones" class="h-[32px] mx-auto invert dark:invert-0" />
					<p class="text-sm">Brain & Bones</p>
				</a>
				{#await sponsors}
					<p class="flex flex-wrap justify-center">Loading sponsors...</p>
				{:then response}
					<ul class="flex flex-wrap justify-center">
						{#each response as s}
							<li>
								<a href={s.profile} target="_blank" rel="noreferrer" title={s.handle}>
									<Avatar src={s.avatar} size="fluid" shadow="shadow-lg" border="hover:border-2 hover:!border-primary-500 cursor-pointer" class="m-2 max-w-[50px]" />
								</a>
							</li>
						{/each}
					</ul>
				{/await}
				<a class="btn btn-filled-primary" href="https://github.com/sponsors/Brain-Bones" target="_blank" rel="noreferrer">
					<span>Become a Sponsor</span>
					<span>&rarr;</span>
				</a>
			</div>
		</section>
	</div>
</div>
