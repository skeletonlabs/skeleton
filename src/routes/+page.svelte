<script lang="ts">
	// Docs
	// import DocsLogoAnim from '$docs/components/DocsLogos/DocsLogoAnim.svelte';
	// import DocsIcon from '$docs/components/DocsIcon/DocsIcon.svelte';
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
	<!-- hero -->
	<header id="hero" class="bg-surface-100-800-token hero-gradient">
		<div class="section-container flex justify-between items-center">
			<!-- Info -->
			<div class="space-y-4">
				<h1>A powerful UI Toolkit<br />for Svelte + Tailwind.</h1>
				<p class="!text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<div class="flex gap-4">
					<a href="/docs/get-started" class="btn btn-lg variant-filled-primary">Get Started</a>
					<a href="/docs/introduction" class="btn btn-lg variant-soft-primary">Learn More</a>
				</div>
			</div>
			<!-- Components -->
			<div>
				<div class="variant-ringed flex justify-center items-center w-[800px] aspect-video">(components)</div>
			</div>
		</div>
	</header>

	<!-- playground -->
	<section id="playground" class="bg-surface-100-800-token">
		<div class="section-container">
			<div class="card variant-soft-primary p-4 md:py-10 text-center flex justify-center items-center gap-4">
				<p class="!text-xl">Try Skeleton live on StackBlitz, no install required.</p>
				<a href={'#'} class="btn variant-filled">Launch</a>
			</div>
		</div>
	</section>

	<!-- sveltekit -->
	<section id="sveltekit" class="bg-surface-100-800-token sveltekit-gradient">
		<div class="section-container">
			<div class="grid grid-cols-3 gap-4 md:gap-10">
				<!-- Info -->
				<div class="space-y-4">
					<h2>Designed for Svelte and SvelteKit.</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis velit deserunt cupiditate aliquid, perferendis
						recusandae laudantium odit repellendus doloribus.
					</p>
					<!-- Options -->
					<div class="space-y-2">
						<div class="hover:variant-soft-secondary p-4 rounded-container-token cursor-pointer space-y-2">
							<h3>Components</h3>
							<p class="!text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</div>
						<div class="hover:variant-soft-secondary p-4 rounded-container-token cursor-pointer space-y-2">
							<h3>Actions</h3>
							<p class="!text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</div>
						<div class="hover:variant-soft-secondary p-4 rounded-container-token cursor-pointer space-y-2">
							<h3>Utilities</h3>
							<p class="!text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</div>
					</div>
				</div>
				<!-- Preview -->
				<div
					class="col-span-2 bg-gradient-to-br from-primary-500 to-secondary-500 text-on-primary-token flex justify-center items-center rounded-container-token"
				>
					<span class="badge variant-filled">Preview</span>
				</div>
			</div>
		</div>
	</section>

	<!-- tailwind -->
	<section id="tailwind" class="bg-surface-100-800-token tailwind-gradient">
		<div class="section-container">
			<div class="grid grid-cols-3 gap-4 md:gap-10">
				<!-- Preview -->
				<div
					class="col-span-2 bg-gradient-to-bl from-primary-500 to-secondary-500 text-on-primary-token flex justify-center items-center rounded-container-token"
				>
					<span class="badge variant-filled">Preview</span>
				</div>
				<!-- Info -->
				<div class="space-y-4">
					<h2>Enhanced With the Power of Tailwind CSS.</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis velit deserunt cupiditate aliquid, perferendis
						recusandae laudantium odit repellendus doloribus.
					</p>
					<!-- Options -->
					<div class="space-y-2">
						<div class="hover:variant-soft-primary p-4 rounded-container-token cursor-pointer space-y-2">
							<h3>Components</h3>
							<p class="!text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</div>
						<div class="hover:variant-soft-primary p-4 rounded-container-token cursor-pointer space-y-2">
							<h3>Actions</h3>
							<p class="!text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</div>
						<div class="hover:variant-soft-primary p-4 rounded-container-token cursor-pointer space-y-2">
							<h3>Utilities</h3>
							<p class="!text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- theming -->
	<section id="theming" class="bg-surface-50-900-token">
		<div class="section-container">
			<div class="grid grid-cols-2 gap-4 md:gap-10">
				<!-- Selection -->
				<div class="space-y-4">
					<h2>Adaptive Theming.</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis velit deserunt cupiditate aliquid, perferendis
						recusandae laudantium odit repellendus doloribus.
					</p>
					<p>(selection)</p>
					<div class="card p-4">(card)</div>
				</div>
				<!-- Codeblock -->
				<div class="card !bg-neutral-900/90 p-4">(codeblock)</div>
			</div>
		</div>
	</section>

	<!-- features -->
	<section id="features" class="bg-surface-100-800-token features-gradient">
		<div class="section-container space-y-4 md:space-y-10">
			<!-- Info -->
			<div class="space-y-4 text-center">
				<h2>And so much more....</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<!-- Grid -->
			<div class="grid grid-cols-3 gap-4">
				{#each ['Amazing DX', 'Accessability', 'Typescript Support', 'Extensible', 'Integrations', 'Icon Agnostic'] as feature}
					<div class="card p-4 md:p-10 space-y-4 text-center">
						<p class="opacity-30">(icon)</p>
						<h3>{feature}</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis velit consectetur.</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- stats -->
	<section id="stats" class="bg-surface-100-800-token">
		<div class="section-container">
			<div class="flex justify-center items-center gap-14">
				<div class="space-y-1">
					<span class="block text-8xl font-bold">5k+</span>
					<p class="block ">Weekly Downloads</p>
				</div>
				<div class="border-l border-surface-500/50 h-20" />
				<div class="space-y-1">
					<span class="block text-8xl font-bold">700+</span>
					<p class="block ">Discord Members</p>
				</div>
				<div class="border-l border-surface-500/50 h-20" />
				<div class="space-y-1">
					<span class="block text-8xl font-bold">1.4k+</span>
					<p class="block ">GitHub Stars</p>
				</div>
			</div>
		</div>
	</section>

	<!-- sponsors -->
	<section id="sponsors" class="bg-surface-100-800-token sponsors-gradient">
		<div class="section-container">
			<div class="flex justify-center items-center gap-4 md:gap-10 place-items-center">
				<!-- Premium Sponsors -->
				<Avatar
					src="https://pbs.twimg.com/profile_images/1504272980687441922/pkVimygY_400x400.png"
					width="w-full max-w-[200px]"
					background="bg-neutral-900"
				/>
				<Avatar src="https://i.imgur.com/ySBlLmQ.png" width="w-full max-w-[200px]" />
				<!-- Info -->
				<div class="col-span-2 space-y-4">
					<h2>Help Support Skeleton.</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolorem provident quasi illo, nostrum autem. Culpa eius
						error modi odit veritatis? Quaerat exercitationem repellat.
					</p>
					<div class="flex gap-4">
						<a class="btn variant-filled" href="https://ko-fi.com/skeletonlabs" target="_blank" rel="noreferrer">Ko-Fi</a>
						<a class="btn variant-filled" href="https://github.com/sponsors/skeletonlabs" target="_blank" rel="noreferrer">GitHub</a>
						<a class="btn variant-filled" href="https://patreon.com/user?u=83786276" target="_blank" rel="noreferrer">Patreon</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- contributors -->
	<section id="contributors" class="bg-surface-50-900-token">
		<div class="section-container space-y-4 md:space-y-10">
			<!-- Info -->
			<div class="space-y-4 text-center">
				<h2>Built by Awesome People.</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div class="grid grid-cols-3 gap-4 md:gap-10 items-center">
				<!-- Skeleton Labs -->
				<div class="col-span-2">
					<div class="card variant-glass-secondary p-4 space-y-4">
						<h2>Skeleton Labs</h2>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta perspiciatis quisquam impedit cupiditate rerum error. Eaque
							voluptate reprehenderit non, odio officia, rerum commodi saepe vero odit omnis facere, porro cumque.
						</p>
						<a href={'#'} class="btn variant-filled">Learn More</a>
					</div>
				</div>
				<!-- Contributors -->
				{#await contributors}
					<div class="card variant-soft p-4 text-center">>Loading contributors...</div>
				{:then response}
					<div class="grid grid-cols-6 gap-2">
						{#each response as c}
							<a href={c.html_url} target="_blank" rel="noreferrer" title={c.login}>
								<Avatar src={c.avatar_url} width="w-full" />
							</a>
						{/each}
					</div>
				{/await}
			</div>
		</div>
	</section>

	<!-- bottom-cta -->
	<section id="bottom-cta" class="variant-filled-primary">
		<div class="section-container text-center space-y-4">
			<h2>Ready to Begin?</h2>
			<p class="!text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<a href="/docs/get-started" class="btn btn-lg variant-filled">Get Started</a>
		</div>
	</section>
</div>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-[1440px] mx-auto p-4 md:py-24;
	}
	/* Hero Gradient */
	/* prettier-ignore */
	.hero-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) /  0.33) 0px, transparent 50%),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) /  0.33) 0px, transparent 50%);
	}
	/* SvelteKit Gradient */
	/* prettier-ignore */
	.sveltekit-gradient {
		background-image:
			radial-gradient(at 0% 100%, rgba(var(--color-secondary-500) /  0.50) 0px, transparent 50%);
	}
	/* SvelteKit Gradient */
	/* prettier-ignore */
	.tailwind-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) /  0.50) 0px, transparent 50%),
			radial-gradient(at 100% 100%,  rgba(var(--color-primary-500) /  0.24) 0px, transparent 50%);
	}
	/* Features Gradient */
	/* prettier-ignore */
	.features-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) /  0.33) 0px, transparent 50%),
			radial-gradient(at 100% 0%,  rgba(var(--color-primary-500) /  0.33) 0px, transparent 50%);
	}
	/* Sponsors Gradient */
	/* prettier-ignore */
	.sponsors-gradient {
		background-image:
		radial-gradient(at 41% 55%, rgba(var(--color-error-500) /  0.17) 0px, transparent 50%),
		radial-gradient(at 0% 99%, rgba(var(--color-secondary-500) /  0.23) 0px, transparent 50%),
		radial-gradient(at 100% 100%, rgba(var(--color-primary-500) /  0.19) 0px, transparent 50%);
	}
</style>
