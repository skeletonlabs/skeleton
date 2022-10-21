<script lang="ts">
	// Components
	import Alert from '$lib/components/Alert/Alert.svelte';
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	// Fetch Contributors
	async function getContributors(): Promise<any> {
		const http = await fetch('https://api.github.com/repos/Brain-Bones/skeleton/contributors');
		const res = await http.json();
		if (http.ok) {
			return res;
		} else {
			throw new Error(res);
		}
	}
	let contributors: Promise<any> = getContributors();
</script>

<div>
	<!-- Alert: Beta -->
	<Alert>
		<svelte:fragment slot="lead">🚧</svelte:fragment>
		<span>Skeleton is available as a public beta. Expect breaking changes prior to v1.0. If you encounter issues please report them on GitHub.</span>
		<svelte:fragment slot="trail">
			<a href="https://github.com/Brain-Bones/skeleton/issues" target="_blank" rel="noreferrer" class="btn btn-ghost">Report Issue</a>
		</svelte:fragment>
	</Alert>

	<div class="container max-w-[1200px] mx-auto px-4 py-10 md:py-20 space-y-20">
		<!-- Hero -->
		<header>
			<div class="space-y-6">
				<h2 class="text-4xl md:text-6xl lg:text-7xl">A fully featured UI toolkit for Svelte and Tailwind.</h2>
				<p class="text-xl">
					Skeleton allows you to build fast and reactive web interfaces using the power of <a href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a>
					+ <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>.
				</p>
				<nav class="flex space-x-4">
					<a href="/guides/install" class="btn btn-lg btn-filled-primary">Get Started</a>
					<a href="/docs/why" class="btn btn-lg btn-ghost">Why Skeleton</a>
				</nav>
			</div>
		</header>

		<!-- Features -->
		<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<h2 class="sr-only">Features</h2>
			<div class="card card-body space-y-4">
				<div class="bg-orange-500 w-14 aspect-square flex justify-center items-center rounded-token shadow">
					<SvgIcon name="svelte" fill="fill-white" width="w-10" height="h-10" />
				</div>
				<h4>Svelte Integration</h4>
				<p>
					Tightly coupled with Svelte, including full support for <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>,
					<a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>, and
					<a href="https://astro.build/" target="_blank" rel="noreferrer">Astro</a>.
				</p>
			</div>
			<div class="card card-body space-y-4">
				<div class="bg-sky-500 w-14 aspect-square flex justify-center items-center rounded-token shadow">
					<SvgIcon name="tailwind" fill="fill-white" width="w-10" height="h-10" />
				</div>
				<h4>Tailwind CSS Integration</h4>
				<p>Integrate with your design system using Tailwind utility classes to style components.</p>
			</div>
			<div class="card card-body space-y-4">
				<div class="bg-primary-500 w-14 aspect-square flex justify-center items-center rounded-token shadow">
					<SvgIcon name="swatchbook" fill="fill-white" width="w-8" height="h-8" />
				</div>
				<h4>Dynamic Themes</h4>
				<p>Choose from a library of hand crafted preset themes or quickly generate your own in seconds.</p>
			</div>
			<div class="card card-body space-y-4">
				<div class="bg-accent-500 w-14 aspect-square flex justify-center items-center rounded-token shadow">
					<SvgIcon name="screwdriver" fill="fill-white" width="w-8" height="h-8" />
				</div>
				<h4>Powerful Utilities</h4>
				<p>Provides a feature rich UI toolkit for modern web apps with layouts, dialogs, and more.</p>
			</div>
		</section>

		<!-- Team -->
		<section class="text-center space-y-6">
			<h2>Meet The Team</h2>
			<ul class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<li class="card card-body space-y-2 text-center">
					<Avatar src="https://avatars.githubusercontent.com/u/1509726?v=4" width="w-24" shadow="shadow-xl" class="mx-auto" />
					<h4>Chris Simmons</h4>
					<p>Co-founder and core contributor.</p>
					<div class="flex justify-center space-x-4">
						<a href="https://github.com/endigo9740" target="_blank" rel="noreferrer"><SvgIcon name="github" /></a>
						<a href="https://twitter.com/endigodesign" target="_blank" rel="noreferrer"><SvgIcon name="twitter" /></a>
						<a href="https://www.linkedin.com/in/chris-simmons-8a523a23/" target="_blank" rel="noreferrer"><SvgIcon name="linkedin" /></a>
					</div>
				</li>
				<li class="card card-body space-y-2 text-center">
					<Avatar src="https://avatars.githubusercontent.com/u/52718757?v=4" width="w-24" shadow="shadow-xl" class="mx-auto" />
					<h4>Thomas Jespersen</h4>
					<p>Co-founder and core contributor.</p>
					<div class="flex justify-center space-x-4">
						<a href="https://github.com/thomasbjespersen" target="_blank" rel="noreferrer"><SvgIcon name="github" /></a>
						<a href="https://www.linkedin.com/in/thomas-jespersen-b77132202/" target="_blank" rel="noreferrer"><SvgIcon name="linkedin" /></a>
					</div>
				</li>
				<li class="card card-body space-y-2 text-center">
					<Avatar src="https://avatars.githubusercontent.com/u/10255430?v=4" width="w-24" shadow="shadow-xl" class="mx-auto" />
					<h4>Trey Weir</h4>
					<p>Core member and founder of <a href="https://www.brainandbonesllc.com/" target="_blank" rel="noreferrer">Brain & Bones</a></p>
					<div class="flex justify-center space-x-4">
						<a href="https://twitter.com/brain_and_bones" target="_blank" rel="noreferrer"><SvgIcon name="twitter" /></a>
						<a href="https://www.linkedin.com/company/brainandbones/" target="_blank" rel="noreferrer"><SvgIcon name="linkedin" /></a>
					</div>
				</li>
			</ul>
		</section>

		<!-- Shoutouts -->
		<section class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
			<!-- Sponsors -->
			<ul class="text-center space-y-8">
				<h2>Sponsors</h2>
				<div class="flex flex-wrap justify-center space-x-4">
					<li>
						<a class="card card-body flex flex-col items-center space-y-4" href="https://www.brainandbonesllc.com/" target="_blank" rel="noreferrer">
							<img src="https://www.brainandbonesllc.com/svg/logo.svg" alt="Brain & Bones" class="h-[32px] mx-auto invert dark:invert-0" />
							<p class="text-sm">Brain & Bones</p>
						</a>
					</li>
				</div>
				<a class="btn btn-ghost" href="https://github.com/sponsors/Brain-Bones" target="_blank" rel="noreferrer">
					<span>Become a Sponsor</span>
					<span>&rarr;</span>
				</a>
			</ul>

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
									<Avatar src={c.avatar_url} size="fluid" shadow="shadow-lg" hover class="m-2 max-w-[50px]" />
								</a>
							</li>
						{/each}
					</ul>
				{/await}
				<a class="btn btn-ghost" href="/docs/contributions">
					<span>How to Contribute</span>
					<span>&rarr;</span>
				</a>
			</div>
		</section>
	</div>
</div>
