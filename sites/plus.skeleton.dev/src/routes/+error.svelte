<script lang="ts">
	import Skeleton from "#lib/components/branding/skeleton.svelte";
	import Footer from "#lib/components/layout/footer.svelte";
	import Header from "#lib/components/layout/header.svelte";
	import { page } from "$app/state";
	import HomeIcon from "@lucide/svelte/icons/home";
	import RefreshCwIcon from "@lucide/svelte/icons/refresh-cw";
</script>

<div class="grid min-h-dvh grid-rows-[auto_1fr_auto]">
	<Header />
	<main
		class="container-page border-surface-200-800 container mx-auto flex w-full items-center justify-center border-x"
	>
		<article class="flex w-full max-w-xl flex-col items-center justify-center gap-4">
			<header>
				<Skeleton class="size-elem-7xl" />
				<h1 class="sr-only">Error</h1>
			</header>
			<article class="space-y-2 text-center">
				<p class="opacity-60">Status {page.status}</p>
				<h2 class="h3">{page.error?.message ?? "An unknown error occurred."}</h2>
			</article>
			<footer class="flex gap-2">
				<a href={page.url.toString()} class="btn preset-outlined-surface-200-800">
					<RefreshCwIcon />
					<span>Reload Page</span>
				</a>
				<a href="/" class="btn preset-filled">
					<HomeIcon />
					<span>Go Home</span>
				</a>
			</footer>
		</article>
	</main>
	<Footer />
</div>
