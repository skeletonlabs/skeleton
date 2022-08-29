<script lang="ts">

	// Components
	import Alert from '$lib/Alert/Alert.svelte';
	import Avatar from '$lib/Avatar/Avatar.svelte';
	import Card from '$lib/Card/Card.svelte';
	import Button from '$lib/Button/Button.svelte';
	import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';

	// Doc Component
	import SkeletonFooter from '$lib/_documentation/SkeletonFooter/SkeletonFooter.svelte';

</script>

<main class="w-full h-full !overflow-y-scroll">

	<!-- Alert: Beta -->
	<Alert>
		<svelte:fragment slot="lead">🚧</svelte:fragment>
		<svelte:fragment slot="message">
			Skeleton is available as a public beta. Expect breaking changes prior to v1.0. If you encounter issues please report them on GitHub.</svelte:fragment>
		<svelte:fragment slot="trail">
			<Button variant="ghost" href="https://github.com/Brain-Bones/skeleton/issues">Report Issue</Button>
		</svelte:fragment>
	</Alert>

	<div class="container max-w-[1200px] mx-auto px-4 py-4 md:py-20 space-y-20">

		<!-- Hero -->
		<header>
			<div class="space-y-6">
				<h1 class="text-3xl md:text-5xl lg:text-6xl">
					<span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Skeleton</span>
				</h1>
				<h2 class="text-4xl md:text-6xl lg:text-8xl">A fully featured Svelte component library.</h2>
				<p class="text-xl">
					Skeleton allows you to build fast and reactive web UI using the power of <a href="https://svelte.dev/" target="_blank">Svelte</a>
					+ <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.
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
			<Card>
				<div class="bg-surface-500/20 w-10 aspect-square flex justify-center items-center rounded-lg">
					<SvgIcon name="skull" />
				</div>
				<h6>Svelte Integration</h6>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit ea ab possimus reprehenderit dolorem quia veritatis.</p>
			</Card>
			<Card>
				<div class="bg-surface-500/20 w-10 aspect-square flex justify-center items-center rounded-lg">
					<SvgIcon name="skull" />
				</div>
				<h6>Tailwind Integration</h6>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit ea ab possimus reprehenderit dolorem quia veritatis.</p>
			</Card>
			<Card>
				<div class="bg-surface-500/20 w-10 aspect-square flex justify-center items-center rounded-lg">
					<SvgIcon name="skull" />
				</div>
				<h6>Dynamic Themes</h6>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit ea ab possimus reprehenderit dolorem quia veritatis.</p>
			</Card>
			<Card>
				<div class="bg-surface-500/20 w-10 aspect-square flex justify-center items-center rounded-lg">
					<SvgIcon name="skull" />
				</div>
				<h6>Powerful Utilities</h6>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit ea ab possimus reprehenderit dolorem quia veritatis.</p>
			</Card>
		</section>

		<!-- Meet The Team -->
		<section class="text-center space-y-6">
			<h4>Meet The Team</h4>
			<section class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<Card class="text-center">
					<Avatar src="https://avatars.githubusercontent.com/u/1509726?v=4" size="xl" outlined hover class="mx-auto" />
					<h6>Chris Simmons</h6>
					<p>Co-creator and primary contributor to the Skeleton project.</p>
					<div class="flex justify-center space-x-4">
						<a href="https://github.com/endigo9740" target="_blank"><SvgIcon name="github" /></a>
						<a href="https://twitter.com/endigodesign" target="_blank"><SvgIcon name="twitter" /></a>
						<a href="https://www.linkedin.com/in/chris-simmons-8a523a23/" target="_blank"><SvgIcon /></a>
					</div>
				</Card>
				<Card class="text-center">
					<Avatar src="https://avatars.githubusercontent.com/u/52718757?v=4" size="xl" outlined hover class="mx-auto" />
					<h6>Thomas Jespersen</h6>
					<p>Co-creator and primary contributor to the Skeleton project.</p>
					<div class="flex justify-center space-x-4">
						<a href="/xxx" target="_blank"><SvgIcon name="github" /></a>
						<a href="/yyy" target="_blank"><SvgIcon name="twitter" /></a>
						<a href="/zzz" target="_blank"><SvgIcon /></a>
					</div>
				</Card>
				<Card class="text-center">
					<Avatar src="https://avatars.githubusercontent.com/u/10255430?v=4" size="xl" outlined hover class="mx-auto" />
					<h6>Trey Weir</h6>
					<p>Co-founder of <a href="https://www.brainandbonesllc.com/" target="_blank">Brain & Bones</a> and project sponsor.</p>
					<div class="flex justify-center space-x-4">
						<a href="/zzz" target="_blank"><SvgIcon /></a>
					</div>
				</Card>
			</section>
		</section>

		<!-- Contributors -->
		<section class="text-center space-y-6">
			<h4>Contributors</h4>
			<div class="flex flex-wrap justify-center space-x-4">
				<Avatar src="https://i.pravatar.cc/" size="lg" hover class="m-2" />
				<Avatar src="https://i.pravatar.cc/" size="lg" hover class="m-2" />
				<Avatar src="https://i.pravatar.cc/" size="lg" hover class="m-2" />
				<Avatar src="https://i.pravatar.cc/" size="lg" hover class="m-2" />
				<Avatar src="https://i.pravatar.cc/" size="lg" hover class="m-2" />
				<Avatar src="https://i.pravatar.cc/" size="lg" hover class="m-2" />
			</div>
			<Button variant="ghost" href="https://discord.gg/EXqV7W8MtY" target="_blank">Join the Community!</Button>
		</section>

		<!-- Sponsors -->
		<section class="text-center space-y-8">
			<h4>Sponsors</h4>
			<div class="flex flex-wrap justify-center space-x-4">
				<a href="https://www.brainandbonesllc.com/" target="_blank" class="opacity-90 hover:opacity-100">
					<SvgIcon name="skull" width="w-20" height="h-20" />
				</a>
			</div>
			<Button variant="ghost" href="https://github.com/sponsors/Brain-Bones" target="_blank">Become a Sponsor</Button>
		</section>

	</div>
	
	<!-- Page Footer -->
	<SkeletonFooter />

</main>
