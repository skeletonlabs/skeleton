<script lang="ts">
	import Divider from '$lib/components/Divider/Divider.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	// Base Classes
	const cBase: string = 'bg-white/20 dark:bg-black/10 text-xs md:text-base mx-auto px-4 py-8 md:p-10 space-y-10';
	const cRowOne: string = 'flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0';
	const cRowTwo: string = 'flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0';
</script>

<div class="page-footer {cBase}">
	<!-- Row 1 -->
	<section class={cRowOne}>
		<div class="space-y-2">
			<span class="text-2xl font-bold uppercase">Skeleton</span>
			<p class="text-lg opacity-80">A fully featured UI component library.</p>
		</div>
		<div class="hidden md:flex items-start space-x-10">
			<div class="space-y-4">
				<h6>About</h6>
				<ul class="space-y-2">
					<li><a href="/docs/contributions">Contribute</a></li>
					<li><a href="/docs/why">Why Skeleton</a></li>
					<li><a href="/docs/comparisons">Comparisons</a></li>
				</ul>
			</div>
			<div class="space-y-4">
				<h6>Community</h6>
				<ul class="space-y-2">
					<li><a href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">Join Discord Community</a></li>
					<li><a href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer">Follow on Twitter</a></li>
					<li><a href="https://github.com/Brain-Bones/skeleton" target="_blank" rel="noreferrer">View Github</a></li>
				</ul>
			</div>
			<div class="space-y-4">
				<h6>Project</h6>
				<ul class="space-y-2">
					<li><a href="https://github.com/Brain-Bones" target="_blank" rel="noreferrer">Github Organization</a></li>
					<li><a href="https://www.npmjs.com/org/brainandbones" target="_blank" rel="noreferrer">NPM Organization</a></li>
					<li><a href="https://www.npmjs.com/package/@brainandbones/skeleton" target="_blank" rel="noreferrer">NPM Package</a></li>
				</ul>
			</div>
		</div>
	</section>

	<Divider borderStyle="border-dotted" opacity="opacity-50" />

	<!-- Row 2 -->
	<section class={cRowTwo}>
		<p class="text-xs">
			<a href="https://github.com/Brain-Bones/skeleton/blob/master/LICENSE" target="_blank" rel="noreferrer">MIT License</a>
			<span class="opacity-10 mx-2">|</span>
			<a href="https://github.com/Brain-Bones/skeleton/graphs/contributors" target="_blank" rel="noreferrer">Contributors</a>
		</p>
		<div class="flex space-x-4">
			<a class="btn bg-[#7289da] text-white" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">
				<SvgIcon name="discord" fill="fill-white" />
				<span class="hidden md:inline-block ml-2">Discord</span>
			</a>
			<a class="btn bg-[#1da1f2] text-white" href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer">
				<SvgIcon name="twitter" fill="fill-white" />
				<span class="hidden md:inline-block ml-2">Twitter</span>
			</a>
			<a class="btn bg-[#6e5494] text-white" href="https://github.com/Brain-Bones/skeleton" target="_blank" rel="noreferrer">
				<SvgIcon name="github" fill="fill-white" />
				<span class="hidden md:inline-block ml-2">Github</span>
			</a>
		</div>
	</section>
</div>
