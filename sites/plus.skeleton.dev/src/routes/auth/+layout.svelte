<script lang="ts">
	import AuthCarousel from '$lib/components/authentication/auth-carousel.svelte';
	import Skeleton from '$lib/components/branding/skeleton.svelte';

	let { children } = $props();
</script>

<div class="grid min-h-screen grid-cols-1 lg:grid-cols-2">
	<!-- Column 1 -->
	<section class="preset-filled-surface-100-900 flex flex-col p-6 lg:p-10">
		<!-- Brand -->
		<a href="/" class="inline-flex items-center gap-2 self-start" aria-label="Homepage" title="Homepage">
			<Skeleton class="size-elem-3xl" />
			<span class="text-sm font-medium">Skeleton Plus</span>
		</a>
		<!-- Page content -->
		<div class="flex flex-1 items-center justify-center">
			<div class="w-full max-w-sm">
				{@render children()}
			</div>
		</div>
		<!-- Footer -->
		<footer class="flex items-center justify-between text-xs opacity-60">
			<p>By <a href="https://www.skeletonlabs.co/" target="_blank" class="hover:underline">Skeleton Labs</a></p>
			<nav class="flex items-center gap-2">
				<a href="/legal/terms" class="hover:underline">Terms</a>
				<span class="opacity-60" aria-hidden="true">&bull;</span>
				<a href="/legal/privacy" class="hover:underline">Privacy</a>
			</nav>
		</footer>
	</section>

	<!-- Column 2 -->
	<aside class="preset-filled-surface-50-950 relative hidden flex-col justify-center items-center p-10 lg:flex">
		<AuthCarousel />
	</aside>
</div>
