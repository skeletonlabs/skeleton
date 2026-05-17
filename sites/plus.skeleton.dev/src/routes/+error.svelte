<script lang="ts">
	import { page } from '$app/state';
	import Skeleton from '$lib/components/branding/skeleton.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Header from '$lib/components/layout/header.svelte';
</script>

<div class="grid min-h-dvh grid-rows-[auto_1fr_auto]">
	<Header />
	<main class="container mx-auto flex w-full items-center justify-center border-x border-surface-200-800 px-6 py-16">
		<div class="flex w-full max-w-xl flex-col justi gap-4">
			<div class="opacity-70">
				<Skeleton />
			</div>

			<p class="text-sm font-medium tracking-wide text-surface-500 uppercase">
				Status {page.status}
			</p>

			<p class="max-w-md text-surface-600-300">{page.error?.message ?? 'An unknown error occurred.'}</p>

			<div class="mt-2 flex gap-3">
				<a href={page.url.toString()} class="btn preset-filled"> Reload page </a>

				<a href="/" class="btn preset-tonal"> Go home </a>
			</div>
		</div>
	</main>
	<Footer />
</div>
