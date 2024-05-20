<script lang="ts">
	import Search from 'lucide-svelte/icons/search';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import TextSearch from 'lucide-svelte/icons/text-search';

	import { getPreferredFramework, isFramework } from 'src/utils';
	import type { Pagefind } from 'vite-plugin-pagefind';

	let dialog: HTMLDialogElement | null = $state(null);
	let pagefind: Pagefind | null = $state(null);
	let query = $state('');

	const searchPromise = $derived.by(async () => {
		if (pagefind === null || query === '') {
			return [];
		}
		const result = await pagefind.search(query);
		if (result === null) {
			return [];
		}
		const results = await Promise.all(result.results.map((result) => result.data()));

		return results.filter((result) => {
			const end = result.url.split('/').at(-2);

			if (end && isFramework(end) && end !== getPreferredFramework()) {
				return false;
			}

			return true;
		});
	});

	const openDialog = () => dialog && dialog.showModal();
	const closeDialog = () => dialog && dialog.close();

	$effect(() => {
		// @ts-expect-error - Pagefind will be present at runtime
		import('/pagefind/pagefind.js').then((module: Pagefind) => {
			pagefind = module;
			pagefind.init();
		});

		return () => {
			if (!pagefind) {
				return;
			}
			pagefind.destroy();
		};
	});

	$effect(() => {
		function onKeydown(event: KeyboardEvent) {
			if (event.key === 'k' && (event.ctrlKey || event.metaKey)) {
				event.preventDefault();
				openDialog();
			}
		}
		document.addEventListener('keydown', onKeydown);
		return () => {
			document.removeEventListener('keydown', onKeydown);
		};
	});

	const click_outside = (node: HTMLDialogElement) => {
		function handleClick(event: MouseEvent) {
			if (!event.target || !(event.target instanceof Element)) {
				return;
			}

			const rect = event.target.getBoundingClientRect();

			const clickedInDialog =
				rect.top <= event.clientY &&
				event.clientY <= rect.top + rect.height &&
				rect.left <= event.clientX &&
				event.clientX <= rect.left + rect.width;

			if (!clickedInDialog) {
				closeDialog();
			}
		}

		node.addEventListener('click', handleClick);

		return {
			destroy: () => {
				node.removeEventListener('click', handleClick);
			},
		};
	};
</script>

<button onclick={() => openDialog()} type="button" class="btn preset-outlined-surface-200-800 hover:preset-tonal">
	<Search size={18} className="opacity-60" />
	<span class="opacity-60">Search...</span>
</button>

<dialog
	class="bg-surface-100 dark:bg-surface-900 text-black dark:text-white rounded-md p-8 m-0 left-1/2 -translate-x-1/2 top-[15%] backdrop:bg-black backdrop:opacity-75 max-w-[700px] max-h-[75vh] w-full border border-surface-50 dark:border-surface-950 shadow-lg"
	bind:this={dialog}
	use:click_outside
>
	<div class="flex flex-col gap-4">
		<input class="input" placeholder="Search..." bind:value={query} />
		<nav class="flex flex-col gap-4">
			{#await searchPromise then results}
				{#if results.length === 0 && query !== ''}
					<p class="text-center text-sm opacity-50">No results found for "{query}"</p>
				{:else if results.length === 0}
					<p class="text-center text-sm opacity-50">Start typing to search</p>
				{:else}
					<p class="text-sm opacity-50">{results.length} results for {query}</p>
					<ol class="flex flex-col gap-4">
						{#each results as result}
							{@const subResults = result.sub_results.filter((r) => r.title !== result.meta.title)}
							<li class="flex bg-surface-50 dark:bg-surface-950 rounded-md p-4 flex-col gap-4">
								<a class="grid grid-cols-[2rem_1fr] grid-rows-2 items-center gap-x-2" href={result.url}>
									<div class="flex items-center justify-center">
										<TextSearch />
									</div>

									<p class="text-xl font-bold">
										{result.meta.title}
									</p>
									<p></p>
									<p class="text-sm opacity-50">{result.url}</p>
								</a>
								<ol class="flex flex-col gap-4">
									{#each subResults as subResult}
										<li>
											<a class="block pl-10" href={subResult.url}>
												<p class="text-lg font-semibold">
													{subResult.title}
												</p>
												<p
													class="text-sm line-clamp-2 [&>mark]:bg-primary-200 [&>mark]:px-1 [&>mark]:rounded-md"
												>
													{@html subResult.excerpt}
												</p>
											</a>
										</li>
									{/each}
								</ol>
							</li>
						{/each}
					</ol>
				{/if}
			{/await}
		</nav>
	</div>
</dialog>
