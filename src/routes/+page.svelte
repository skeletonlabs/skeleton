<script lang="ts">
	// Deconstruct data from +page.server.ts
	// export let data: any;
	// const { contributors }: { contributors: any[]} = data;

	// Components
	import Alert from '$lib/Alert/Alert.svelte';
	import Avatar from '$lib/Avatar/Avatar.svelte';
	import Card from '$lib/Card/Card.svelte';
	import Button from '$lib/Button/Button.svelte';
	import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';

	// Fetch Contributors
	async function getContributors(): Promise<any> {
		const http = await fetch('https://api.github.com/repos/Brain-Bones/skeleton/contributors');
		const res = await http.json();
		if (http.ok) { return res; } else { throw new Error(res); }
	}
	let contributors: Promise<any> = getContributors();
</script>

<div>

	<!-- Alert: Beta -->
	<Alert>
		<svelte:fragment slot="lead">🚧</svelte:fragment>
		<svelte:fragment slot="message">
			Skeleton is available as a public beta. Expect breaking changes prior to v1.0. If you encounter issues please report them on GitHub.</svelte:fragment>
		<svelte:fragment slot="trail">
			<Button variant="ghost" href="https://github.com/Brain-Bones/skeleton/issues">Report Issue</Button>
		</svelte:fragment>
	</Alert>

	<div class="container max-w-[1200px] mx-auto px-4 py-10 md:py-20 space-y-20">

		<!-- Hero -->
		<header>
			<div class="space-y-6">
				<h1 class="text-3xl md:text-5xl lg:text-6xl">
					<span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Skeleton</span>
				</h1>
				<h2 class="text-4xl md:text-6xl lg:text-8xl">A fully featured Svelte component library.</h2>
				<p class="text-xl">
					Skeleton allows you to build fast and reactive web UI using the power of <a href="https://svelte.dev/" target="_blank">Svelte</a>
					+ <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>.
				</p>
				<nav class="flex space-x-4">
					<Button variant="filled-primary" href="/guides/get-started">Get Started</Button>
					<Button variant="ghost" href="/docs/why">Why Skeleton</Button>
					<Button variant="ghost" href="https://github.com/Brain-Bones/skeleton" target="_blank">Github</Button>
				</nav>
			</div>
		</header>

		<!-- Features -->
		<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<Card body="space-y-4">
				<div class="bg-orange-500 w-14 aspect-square flex justify-center items-center rounded-lg shadow">
					<SvgIcon name="svelte" fill="fill-white" width="w-10" height="h-10" />
				</div>
				<h6>Svelte Integration</h6>
				<p>Support for any Svelte project, with official instruction for <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>, <a href="https://vitejs.dev/" target="_blank">Vite</a>, and <a href="https://astro.build/" target="_blank">Astro</a>.</p>
			</Card>
			<Card body="space-y-4">
				<div class="bg-sky-500 w-14 aspect-square flex justify-center items-center rounded-lg shadow">
					<SvgIcon name="tailwind" fill="fill-white" width="w-10" height="h-10" />
				</div>
				<h6>Tailwind CSS Integration</h6>
				<p>Customize components with utility classes. Integrates with your Tailwind design system.</p>
			</Card>
			<Card body="space-y-4">
				<div class="bg-primary-500 w-14 aspect-square flex justify-center items-center rounded-lg shadow">
					<SvgIcon name="swatchbook" fill="fill-white" width="w-8" height="h-8" />
				</div>
				<h6>Dynamic Themes</h6>
				<p>Choose from a library of hand crafted preset themes or quickly create your own in seconds.</p>
			</Card>
			<Card body="space-y-4">
				<div class="bg-accent-500 w-14 aspect-square flex justify-center items-center rounded-lg shadow">
					<SvgIcon name="screwdriver" fill="fill-white" width="w-8" height="h-8" />
				</div>
				<h6>Powerful Utilities</h6>
				<p>Provides complete toolkit for building modern web apps, with layouts, dialogs, and more.</p>
			</Card>
		</section>

		<!-- Meet The Team -->
		<section class="text-center space-y-6">
			<h2>Meet The Team</h2>
			<section class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<Card body="space-y-4" class="text-center">
					<Avatar src="https://avatars.githubusercontent.com/u/1509726?v=4" size="xl" outlined class="mx-auto" />
					<h5>Chris Simmons</h5>
					<p>Co-founder and core contributor.</p>
					<div class="flex justify-center space-x-4">
						<a href="https://github.com/endigo9740" target="_blank"><SvgIcon name="github" /></a>
						<a href="https://twitter.com/endigodesign" target="_blank"><SvgIcon name="twitter" /></a>
						<a href="https://www.linkedin.com/in/chris-simmons-8a523a23/" target="_blank"><SvgIcon name="linkedin" /></a>
					</div>
				</Card>
				<Card body="space-y-4" class="text-center">
					<Avatar src="https://avatars.githubusercontent.com/u/52718757?v=4" size="xl" outlined class="mx-auto" />
					<h5>Thomas Jespersen</h5>
					<p>Co-founder and core contributor.</p>
					<div class="flex justify-center space-x-4">
						<a href="https://github.com/thomasbjespersen" target="_blank"><SvgIcon name="github" /></a>
						<a href="https://www.linkedin.com/in/thomas-jespersen-b77132202/" target="_blank"><SvgIcon name="linkedin" /></a>
					</div>
				</Card>
				<Card body="space-y-4" class="text-center">
					<Avatar src="https://avatars.githubusercontent.com/u/10255430?v=4" size="xl" outlined class="mx-auto" />
					<h5>Trey Weir</h5>
					<p>Core member and founder of <a href="https://www.brainandbonesllc.com/" target="_blank">Brain & Bones</a></p>
					<div class="flex justify-center space-x-4">
						<a href="https://twitter.com/brain_and_bones" target="_blank"><SvgIcon name="twitter" /></a>
						<a href="https://www.linkedin.com/company/brainandbones/" target="_blank"><SvgIcon name="linkedin" /></a>
					</div>
				</Card>
			</section>
		</section>

		<!-- Contributors -->
		<section class="text-center space-y-6">
			<h2>Contributors</h2>
			<div class="flex flex-wrap justify-center space-x-4">
				{#await contributors}
					<p>Loading contributors...</p>
				{:then response}
					{#each response as c}
						<a href={c.html_url} target="_blank" title={c.login}>
							<Avatar src={c.avatar_url} size="lg" shadow="shadow-lg" hover class="m-2" />
						</a>
					{/each}
				{/await}
			</div>
			<Button variant="ghost" href="/docs/contributions">
				How to Contribute
				<svelte:fragment slot="trail">&rarr;</svelte:fragment>
			</Button>
		</section>

		<!-- Sponsors -->
		<section class="text-center space-y-8">
			<h2>Sponsors</h2>
			<div class="flex flex-wrap justify-center space-x-4">
				<a href="https://www.brainandbonesllc.com/" target="_blank" class="opacity-90 hover:opacity-100 !no-underline">
					<Card body="space-y-4" background="bg-surface-500/10" class="border border-surface-500/30 p-6 text-center space-y-4">
						<img src="https://www.brainandbonesllc.com/svg/logo.svg" alt="Brain & Bones" class="invert dark:invert-0">
						<p class="text-xs">Brain & Bones</p>
					</Card>
				</a>
			</div>
			<Button variant="ghost" href="https://github.com/sponsors/Brain-Bones" target="_blank">
				Become a Sponsor
				<svelte:fragment slot="trail">&rarr;</svelte:fragment>
			</Button>
		</section>

	</div>
	

</div>
