<script lang="ts">
	// Components (common)
	import Logo from '$lib/components/common/Logo/Logo.svelte';

	let { children } = $props();
</script>

<main class="h-screen grid grid-rows-[auto_1fr_auto] gap-10">
	<!-- Page Header -->
	<header class="sticky top-0 z-10 border-surface-500/20 bg-surface-50-950 w-full border-b p-4 py-3 xl:px-10">
		<div class="container mx-auto flex justify-between gap-4">
			<div class="flex items-center justify-start gap-6">
				<a href="/" title="Skeleton" class="flex items-center gap-4"><Logo /></a>
				<!-- <nav class="flex gap-6 opacity-60">
					<a href="/themes" class="hover:underline">Browse</a>
					<a href="/themes/create" class="hover:underline">Create</a>
					<a href="/themes/import" class="hover:underline">Import</a>
				</nav> -->
			</div>
			<a href="https://next.skeleton.dev/docs/design/themes" target="_blank" class="btn preset-outlined-surface-200-800 hover:preset-tonal">
				<span>Documentation</span>
			</a>
		</div>
	</header>

	<!-- Page Content -->
	<section class="container mx-auto p-4">{@render children?.()}</section>

	<!-- Page Footer -->
	<footer class="border-surface-500/20 bg-surface-50-950 border-t p-4 xl:p-10">
		<div class="container mx-auto flex justify-center gap-4">
			<div class="flex items-center gap-4">
				<p class="type-scale-1 opacity-60">
					Built by <a class="underline" href="https://www.skeletonlabs.co/" target="_blank">Skeleton Labs</a> and the
					<a href="https://github.com/skeletonlabs/skeleton/graphs/contributors" target="_blank" class="underline">Skeleton community</a>.
				</p>
			</div>
		</div>
	</footer>
</main>
