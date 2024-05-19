<script lang="ts">
	import Search from 'lucide-svelte/icons/search';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import type { Pagefind } from 'src/types';
	import { getPreferredFramework, isFramework } from 'src/utils';

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
	class="bg-surface-100 dark:bg-surface-900 text-black dark:text-white rounded-md p-4 m-0 left-1/2 -translate-x-1/2 top-[15%] backdrop:bg-black backdrop:opacity-75 max-w-[500px] w-full border border-surface-50 dark:border-surface-950 shadow-lg"
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
					<ol class="flex flex-col gap-4 max-h-[500px] overflow-y-auto">
						{#each results as result}
							{@const subResults = result.sub_results.filter((r) => r.title !== result.meta.title)}
							<li
								class="flex bg-surface-50 dark:bg-surface-950 border border-surface-500 rounded-md p-2 flex-col gap-2"
							>
								<a href={result.url}>
									<p class="text-xl font-bold">{result.meta.title}</p>
									<p class="text-sm line-clamp-2">{@html result.excerpt}</p>
								</a>
								<ol class="flex flex-col gap-1">
									{#each subResults as subResult}
										<li>
											<a class="flex gap-2" href={subResult.url}>
												<div class="mt-1.5">
													<ChevronRight size={16} class="opacity-50" />
												</div>
												<div>
													<p class="text-lg font-semibold">{subResult.title}</p>
													<p class="text-sm line-clamp-2">{@html subResult.excerpt}</p>
												</div>
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

<style lang="postcss">
	mark {
		@apply !bg-red-600;
	}
</style>
