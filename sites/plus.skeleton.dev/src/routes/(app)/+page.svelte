<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
	import BlocksIcon from '@lucide/svelte/icons/blocks';
	import BookOpenIcon from '@lucide/svelte/icons/book-open';
	import GlobeIcon from '@lucide/svelte/icons/globe';
	import LayersIcon from '@lucide/svelte/icons/layers';
	import LayoutTemplateIcon from '@lucide/svelte/icons/layout-template';
	import LibraryIcon from '@lucide/svelte/icons/library';
	import PaletteIcon from '@lucide/svelte/icons/palette';
	import SlidersHorizontalIcon from '@lucide/svelte/icons/sliders-horizontal';
	import UsersIcon from '@lucide/svelte/icons/users';
</script>

<!-- Hero -->
<section class="border-b border-surface-200-800">
	<div class="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-x divide-surface-200-800">
		<!-- Left -->
		<div class="container-cell lg:p-20! gap-4">
			<p class="text-sm font-semibold uppercase tracking-widest opacity-60">Skeleton Plus</p>
			<h1 class="font-bold text-4xl lg:text-7xl text-balance max-w-2xl">Supercharge your Skeleton apps.</h1>
		</div>
		<!-- Right -->
		<div class="container-cell lg:p-20! flex flex-col justify-center items-start gap-4">
			<p class="opacity-60">
				<strong>Skeleton Plus</strong> features a collection of design tools, themes, UI blocks, templates and more. All built on the Skeleton
				open source library.
			</p>
			<div class="flex flex-wrap gap-3">
				<a href="/content/design/themes" class="btn lg:btn-xl preset-filled">
					<span>Get Started</span>
					<ArrowRightIcon />
				</a>
				<a href="https://www.skeleton.dev/" target="_blank" class="btn lg:btn-xl preset-outlined-surface-200-800">
					<span>View Skeleton</span>
					<ArrowUpRightIcon />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Features -->
<section class="grid grid-cols-1 md:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-surface-200-800 border-b border-surface-200-800">
	<div class="container-cell border-surface-200-800 p-4 flex lg:justify-center items-center gap-3 transition-colors">
		<PaletteIcon class="stroke-primary-500" />
		<div>
			<p class="font-semibold">Design Tools</p>
			<p class="text-xs opacity-60">Create themes, presets, and meshes.</p>
		</div>
	</div>
	<div class="container-cell border-surface-200-800 p-4 flex lg:justify-center items-center gap-3 transition-colors">
		<LibraryIcon class="stroke-secondary-500" />
		<div>
			<p class="font-semibold">Resources</p>
			<p class="text-xs opacity-60">Get blocks, templates, and more.</p>
		</div>
	</div>
	<div class="container-cell border-surface-200-800 p-4 flex lg:justify-center items-center gap-3 transition-colors">
		<UsersIcon class="stroke-tertiary-500" />
		<div>
			<p class="font-semibold">Community</p>
			<p class="text-xs opacity-60">Tools from the community.</p>
		</div>
	</div>
</section>

<!-- Themes Repository -->
<section class="border-b border-surface-200-800">
	<header class="container-cell lg:pt-20! max-w-6xl mx-auto space-y-4">
		<div class="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-4">
			<div class="space-y-2">
				<h2 class="h2">Themes Repository.</h2>
				<p class="opacity-60">Explore themes crafted by the Skeleton community. No account needed.</p>
			</div>
			<a href="/content/themes" class="btn preset-filled">
				<span>Browse Themes</span>
				<ArrowRightIcon />
			</a>
		</div>
	</header>
	<!-- Placeholder: theme color rows -->
	<div class="bg-surface-500 p-8 flex items-center justify-center min-h-40">
		<p class="opacity-40 text-sm">(theme color rows)</p>
	</div>
</section>

<!-- Features -->
<section class="container-page lg:py-20! border-b border-surface-200-800">
	<p class="opacity-60 max-w-6xl mx-auto">
		From design tools that let you craft and export themes, presets, and gradients, to a growing library of UI blocks, templates, and a
		Figma UI kit — Skeleton Plus is a hub of resources built on top of the open source library you already use. Everything here is designed
		to help you build faster and ship with confidence.
	</p>
	<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
		<!-- Themes -->
		<div class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 flex flex-col">
			<div class="flex justify-center"><SlidersHorizontalIcon class="size-elem-9xl stroke-[0.5px] opacity-40" /></div>
			<div class="space-y-2 flex-1">
				<h2 class="h4">Themes</h2>
				<p class="opacity-60">Explore a vast collection of themes created by the Skeleton team and community.</p>
			</div>
			<a href="/content/themes" class="btn preset-tonal">Browse Themes</a>
		</div>
		<!-- Blocks -->
		<div class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 flex flex-col">
			<div class="flex justify-center"><BlocksIcon class="size-elem-9xl stroke-[0.5px] opacity-40" /></div>
			<div class="space-y-2 flex-1">
				<h2 class="h4">Blocks</h2>
				<p class="opacity-60">A growing library of complex, production-ready page sections to extend your UI.</p>
			</div>
			<a href="/content/blocks" class="btn preset-tonal">Browse Blocks</a>
		</div>
		<!-- Templates -->
		<div class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 flex flex-col">
			<div class="flex justify-center"><LayoutTemplateIcon class="size-elem-9xl stroke-[0.5px] opacity-40" /></div>
			<div class="space-y-2 flex-1">
				<h2 class="h4">Templates</h2>
				<p class="opacity-60">Curated, full website templates built on Skeleton. The perfect starting point for your next project.</p>
			</div>
			<a href="/content/templates" class="btn preset-tonal">Browse Themes</a>
		</div>
		<!-- Community -->
		<div class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 flex flex-col">
			<div class="flex justify-center"><GlobeIcon class="size-elem-9xl stroke-[0.5px] opacity-40" /></div>
			<div class="space-y-2 flex-1">
				<h2 class="h4">Community</h2>
				<p class="opacity-60">A collection of community maintained tools aimed at designers and developers.</p>
			</div>
			<a href="/content/community" class="btn preset-tonal">Browse Projects</a>
		</div>
		<!-- UI Kit -->
		<div class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 flex flex-col">
			<div class="flex justify-center"><LayersIcon class="size-elem-9xl stroke-[0.5px] opacity-40" /></div>
			<div class="space-y-2 flex-1">
				<h2 class="h4">UI Kit</h2>
				<p class="opacity-60">Figma assets that compliment Skeleton's design system. Design and code in perfect sync.</p>
			</div>
			<button type="button" class="btn preset-tonal" disabled>Coming Soon</button>
		</div>
		<!-- Tutorials -->
		<div class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 flex flex-col">
			<div class="flex justify-center"><BookOpenIcon class="size-elem-9xl stroke-[0.5px] opacity-40" /></div>
			<div class="space-y-2 flex-1">
				<h2 class="h4">Tutorials</h2>
				<p class="opacity-60">Step-by-step guides covering fundamentals and advanced integration patterns.</p>
			</div>
			<button type="button" class="btn preset-tonal" disabled>Coming Soon</button>
		</div>
	</div>
</section>

<section class="preset-tonal-primary border-t border-b border-surface-200-800">
	<div class="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-primary-200-800">
		<!-- Left -->
		<div class="container-cell lg:p-20! flex flex-col justify-center items-start gap-4">
			<h2 class="h2 text-balance">Build faster. Ship with confidence.</h2>
			<p class="opacity-60">
				Create and save themes, publish and share with the community, and more. All provided with your free Plus account.
			</p>
			<a href="/auth/sign-in" class="btn preset-outlined">
				<span>Create Account</span>
				<ArrowRightIcon class="size-elem-sm" />
			</a>
		</div>
		<!-- Right -->
		<div class="container-cell lg:p-20! flex flex-col justify-center items-start gap-4">
			<h2 class="h2 text-balance">Pay once. Unlock forever.</h2>
			<p class="opacity-60">
				Get lifetime access to all current content, plus anything new added in the future for a single one-time upfront price.
			</p>
			<a href="/auth/sign-in" class="btn preset-outlined">
				<span>Get Full Access</span>
				<ArrowRightIcon class="size-elem-sm" />
			</a>
		</div>
	</div>
</section>
