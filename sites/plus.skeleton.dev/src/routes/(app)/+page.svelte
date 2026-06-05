<script lang="ts">
	import DecorCorners from '$lib/components/layout/decor-corners.svelte';
	import DecorStripes from '$lib/components/layout/decor-stripes.svelte';
	import ThemesMarquee from '$lib/components/marquee/themes-marquee.svelte';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
	import BlocksIcon from '@lucide/svelte/icons/blocks';
	import GraduationCapIcon from '@lucide/svelte/icons/graduation-cap';
	import LayersIcon from '@lucide/svelte/icons/layers';
	import LayoutTemplateIcon from '@lucide/svelte/icons/layout-template';
	import PaintbrushIcon from '@lucide/svelte/icons/paintbrush';
	import SlidersHorizontalIcon from '@lucide/svelte/icons/sliders-horizontal';
	import UsersIcon from '@lucide/svelte/icons/users';
</script>

<!-- Hero -->
<section>
	<div class="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-surface-200-800">
		<!-- Left -->
		<div class="container-cell p-10! lg:p-20! gap-4">
			<p class="text-sm font-semibold uppercase tracking-widest opacity-60">Skeleton Plus</p>
			<h1 class="font-bold text-4xl lg:text-7xl text-balance max-w-2xl">Supercharge your Skeleton apps.</h1>
		</div>
		<!-- Right -->
		<div class="container-cell p-10! lg:p-20! flex flex-col justify-center items-start gap-4">
			<p class="opacity-60">
				<strong>Skeleton Plus</strong> features a collection of design tools, resources, and community offerings. Purpose built for use with the
				Skeleton open source library.
			</p>
			<div class="flex flex-wrap gap-3">
				<a href="https://www.skeleton.dev/" target="_blank" class="btn lg:btn-lg preset-outlined">
					<span>Skeleton</span>
					<ArrowUpRightIcon />
				</a>
				<a href="/content/themes" class="btn lg:btn-lg preset-filled">
					<span>Get Started</span>
					<ArrowRightIcon />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Decor: Stripes -->
<DecorStripes class="h-6" />

<!-- Features -->
<DecorCorners
	corners={['tl', 'tr', 'bl', 'br']}
	class="grid grid-cols-1 md:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-surface-200-800 border-t border-b border-surface-200-800"
>
	<div class="container-cell p-4 flex justify-center items-center gap-3 transition-colors">
		<PaintbrushIcon class="size-elem-3xl stroke-primary-500" />
		<div>
			<p class="text-xl font-semibold">Design Tools</p>
			<p class="text-xs opacity-60">Create themes, presets, and meshes.</p>
		</div>
	</div>
	<div class="container-cell p-4 flex justify-center items-center gap-3 transition-colors">
		<BlocksIcon class="size-elem-3xl stroke-secondary-500" />
		<div>
			<p class="text-xl font-semibold">Resources</p>
			<p class="text-xs opacity-60">Get blocks, templates, and more.</p>
		</div>
	</div>
	<div class="container-cell p-4 flex justify-center items-center gap-3 transition-colors">
		<UsersIcon class="size-elem-3xl stroke-tertiary-500" />
		<div>
			<p class="text-xl font-semibold">Community</p>
			<p class="text-xs opacity-60">Powerful tools from the community.</p>
		</div>
	</div>
</DecorCorners>

<!-- Decor: Stripes -->
<DecorStripes class="h-6" />

<!-- Themes Repository -->
<section class="border-b border-surface-200-800 bg-linear-to-b from-transparent to-(--color-surface-50-950)">
	<header class="container-cell lg:pt-20! max-w-6xl mx-auto space-y-4">
		<div class="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-4">
			<header class="space-y-2">
				<h2 class="h2">Themes Repository.</h2>
				<p class="opacity-60">Explore and download themes crafted by the Skeleton community. No account needed.</p>
			</header>
			<a href="/content/themes" class="btn preset-filled">
				<span>Explore Themes</span>
				<ArrowRightIcon />
			</a>
		</div>
	</header>
	<!-- Themes Marquee -->
	<ThemesMarquee />
</section>

<!-- Features -->
<section class="container-page lg:py-20! border-b border-surface-200-800">
	<header class="text-center space-y-2">
		<h2 class="h2">Everything at a glance.</h2>
		<p class="opacity-60">Tools, templates, and resources to help you ship polished Skeleton apps faster.</p>
	</header>
	<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<!-- Design Tools -->
		<div class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 flex flex-col">
			<div class="flex justify-center"><SlidersHorizontalIcon class="size-elem-9xl stroke-[0.5px] opacity-40" /></div>
			<div class="space-y-2 flex-1">
				<h3 class="h4">Design Tools</h3>
				<p class="opacity-60">Powerful tools for creating themes, presets, and mesh gradients for your applications.</p>
			</div>
			<div class="grid grid-cols-3 gap-2">
				<a href="/design/themes" class="btn preset-tonal">Themes</a>
				<a href="/design/presets" class="btn preset-tonal">Presets</a>
				<a href="/design/mesh" class="btn preset-tonal">Meshes</a>
			</div>
		</div>
		<!-- Blocks -->
		<div class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 flex flex-col">
			<div class="flex justify-center"><BlocksIcon class="size-elem-9xl stroke-[0.5px] opacity-40" /></div>
			<div class="space-y-2 flex-1">
				<h3 class="h4">Blocks</h3>
				<p class="opacity-60">A growing library of complex, production-ready page sections to extend your UI.</p>
			</div>
			<a href="/content/blocks" class="btn preset-tonal">Browse Blocks</a>
		</div>
		<!-- Templates -->
		<div class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 flex flex-col">
			<div class="flex justify-center"><LayoutTemplateIcon class="size-elem-9xl stroke-[0.5px] opacity-40" /></div>
			<div class="space-y-2 flex-1">
				<h3 class="h4">Templates</h3>
				<p class="opacity-60">Curated, full website templates built on Skeleton. The perfect starting point for your next project.</p>
			</div>
			<a href="/content/templates" class="btn preset-tonal">Browse Themes</a>
		</div>
		<!-- Tutorials -->
		<div class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 flex flex-col">
			<div class="flex justify-center"><GraduationCapIcon class="size-elem-9xl stroke-[0.5px] opacity-40" /></div>
			<div class="space-y-2 flex-1">
				<h3 class="h4">Tutorials</h3>
				<p class="opacity-60">Step-by-step guides covering fundamentals and advanced integration patterns.</p>
			</div>
			<a href="/content/tutorials" class="btn preset-tonal">Browse Tutorials</a>
		</div>
		<!-- UI Kit -->
		<div class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 flex flex-col">
			<div class="flex justify-center"><LayersIcon class="size-elem-9xl stroke-[0.5px] opacity-40" /></div>
			<div class="space-y-2 flex-1">
				<h3 class="h4">UI Kit</h3>
				<p class="opacity-60">Figma assets that compliment Skeleton's design system. Design and code in perfect sync.</p>
			</div>
			<a href="/content/community/etesie" class="btn preset-tonal">Browse UI Kit</a>
		</div>
		<!-- Community -->
		<div class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 flex flex-col">
			<div class="flex justify-center"><UsersIcon class="size-elem-9xl stroke-[0.5px] opacity-40" /></div>
			<div class="space-y-2 flex-1">
				<h3 class="h4">Community</h3>
				<p class="opacity-60">A collection of community maintained tools aimed at designers and developers.</p>
			</div>
			<a href="/content/community" class="btn preset-tonal">Browse Community</a>
		</div>
	</div>
</section>

<section class="preset-tonal-primary border-t border-b border-surface-200-800">
	<div class="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-primary-200-800">
		<!-- Left -->
		<div class="container-cell p-10! lg:p-20! flex flex-col justify-center items-start gap-4">
			<h2 class="h2 text-balance">Access Free Resources.</h2>
			<p class="opacity-60">
				Create and save themes, publish and share with the community, and more. All provided with your free Plus account.
			</p>
			<a href="/auth/sign-in" class="btn preset-outlined">
				<span>Create an Account</span>
				<ArrowRightIcon class="size-elem-sm" />
			</a>
		</div>
		<!-- Right -->
		<div class="container-cell p-10! lg:p-20! flex flex-col justify-center items-start gap-4">
			<h2 class="h2 text-balance">Pay once. Access forever.</h2>
			<p class="opacity-60">
				Get lifetime access to all premium content, including new additions added in the future for a upfront one-time cost.
			</p>
			<a href="/overview/pricing" class="btn preset-outlined">
				<span>Get Full Access</span>
				<ArrowRightIcon class="size-elem-sm" />
			</a>
		</div>
	</div>
</section>
