<script lang="ts">
	import AuthCarousel from '$lib/components/AuthCarousel/AuthCarousel.svelte';
	import SkullIcon from '@lucide/svelte/icons/skull';

	let { children } = $props();
</script>

<div class="grid min-h-screen grid-cols-1 lg:grid-cols-2">
	<!-- Column 1 -->
	<section class="preset-filled-surface-100-900 flex flex-col p-6 lg:p-10">
		<!-- Brand -->
		<a href="/" class="inline-flex items-center gap-2 self-start" aria-label="Homepage" title="Homepage">
			<SkullIcon class="size-6" />
			<span class="font-semibold">Skeleton Plus</span>
		</a>
		<!-- Page content -->
		<div class="flex flex-1 items-center justify-center">
			<div class="w-full max-w-sm">
				{@render children()}
			</div>
		</div>
		<!-- Footer -->
		<footer class="flex items-center justify-between text-xs text-surface-600-400">
			<p>By <a href="https://www.skeletonlabs.co/" target="_blank" class="anchor">Skeleton Labs</a></p>
			<nav class="flex items-center gap-3">
				<a href="/legal/terms" class="anchor hover:underline">Terms</a>
				<span aria-hidden="true">&bull;</span>
				<a href="/legal/privacy" class="anchor hover:underline">Privacy</a>
			</nav>
		</footer>
	</section>

	<!-- Column 2 -->
	<aside class="preset-filled-surface-50-950 relative hidden flex-col justify-center items-center p-10 lg:flex">
		<AuthCarousel />
	</aside>
</div>
