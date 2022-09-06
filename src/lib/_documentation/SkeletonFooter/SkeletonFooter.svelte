<script lang="ts">
	import Button from '$lib/Button/Button.svelte';
	import Divider from '$lib/Divider/Divider.svelte';
	import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';

	// Base Classes
	const cBase: string = 'bg-white/75 dark:bg-black/10 text-xs mx-auto px-4 py-8 md:p-10 space-y-10';
	const cRowOne: string = 'flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0';
	const cRowTwo: string = 'flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0';
</script>

<div class="page-footer {cBase}">
	<!-- Row 1 -->
	<section class={cRowOne}>
		<div class="space-y-2">
			<span class="text-2xl font-bold uppercase">Skeleton</span>
			<p class="text-lg">A fully featured Svelte + Tailwind component library.</p>
		</div>
		<div class="hidden md:flex items-start space-x-10">
			<div class="space-y-4">
				<h6>About</h6>
				<ul class="space-y-2">
					<li><a href="/docs/why">Contribute</a></li>
					<li><a href="/docs/comparisons">Why Skeleton</a></li>
					<li><a href="/docs/contributions">Comparisons</a></li>
				</ul>
			</div>
			<div class="space-y-4">
				<h6>Community</h6>
				<ul class="space-y-2">
					<li><a href="https://discord.gg/EXqV7W8MtY" target="_blank">Join Discord Community</a></li>
					<li><a href="https://twitter.com/SkeletonUI" target="_blank">Follow on Twitter</a></li>
					<li><a href="https://github.com/Brain-Bones/skeleton" target="_blank">View Github</a></li>
				</ul>
			</div>
			<div class="space-y-4">
				<h6>Project</h6>
				<ul class="space-y-2">
					<li><a href="https://github.com/Brain-Bones" target="_blank">Github Organization</a></li>
					<li><a href="https://www.npmjs.com/org/brainandbones" target="_blank">NPM Organization</a></li>
					<li><a href="https://www.npmjs.com/package/@brainandbones/skeleton" target="_blank">NPM Package</a></li>
				</ul>
			</div>
		</div>
	</section>

	<Divider variant="dotted" class="border-black/10 dark:border-white/10" />

	<!-- Row 2 -->
	<section class={cRowTwo}>
		<p class="text-xs">
			<a href="https://github.com/Brain-Bones/skeleton/blob/master/LICENSE" target="_blank">MIT License</a>
			<span class="opacity-10 mx-2">|</span>
			<a href="https://github.com/Brain-Bones/skeleton/graphs/contributors" target="_blank">Contributors</a>
		</p>
		<div class="flex space-x-4">
			<Button background="bg-[#7289da]" color="!text-white" href="https://discord.gg/EXqV7W8MtY" target="_blank">
				<SvgIcon name="discord" fill="fill-white" viewBox="0 0 640 512" class="-translate-y-[2px]" />
				<span class="hidden md:inline-block ml-2">Discord</span>
			</Button>
			<Button background="bg-[#1da1f2]" color="!text-white" href="https://twitter.com/SkeletonUI" target="_blank">
				<SvgIcon name="twitter" fill="fill-white" class="-translate-y-[2px]" />
				<span class="hidden md:inline-block ml-2">Twitter</span>
			</Button>
			<Button background="bg-[#6e5494]" color="!text-white" href="https://github.com/Brain-Bones/skeleton" target="_blank">
				<SvgIcon name="github" fill="fill-white" class="-translate-y-[2px]" />
				<span class="hidden md:inline-block ml-2">Github</span>
			</Button>
		</div>
	</section>
</div>

<style lang="postcss">
	a {
		@apply !no-underline !text-surface-500 hover:!text-primary-500 text-sm;
	}
</style>
