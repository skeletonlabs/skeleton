<script lang="ts">
	import BookIcon from '@lucide/svelte/icons/book';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import FilterIcon from '@lucide/svelte/icons/filter';
	import HashIcon from '@lucide/svelte/icons/hash';
	import LoaderIcon from '@lucide/svelte/icons/loader';
	import SearchIcon from '@lucide/svelte/icons/search';
	import { Dialog, Popover, Portal, SegmentedControl, useDialog } from '@skeletonlabs/skeleton-svelte';
	import { docSearchSettingsStore } from 'src/stores/doc-search-settings';
	import { frameworks, isFramework, preferredFrameworkStore, type Framework } from 'src/stores/preferred-framework';
	import { untrack } from 'svelte';
	import type { Pagefind } from 'vite-plugin-pagefind/types';

	let pagefind: Pagefind;
	let query = $state('');
	let docSearchSettings = $state(docSearchSettingsStore.get());

	const id = $props.id();
	const dialog = useDialog({
		id: id,
	});

	const resultsPromise = $derived.by(() => {
		void [pagefind, query, docSearchSettings.framework];
		return untrack(async () => {
			const pagefind = await getOrCreatePagefind();
			const result = await pagefind.debouncedSearch(query, {}, 250);
			if (result === null) {
				return [];
			}

			const results = await Promise.all(result.results.map((result) => result.data()));
			return results.filter((result) => {
				if (docSearchSettings.framework === 'all') {
					return true;
				}

				const urlFramework = result.url.split('/').at(-2);

				if (!isFramework(urlFramework)) {
					return true;
				}

				if (docSearchSettings.framework === 'preferred') {
					return preferredFrameworkStore.get() === urlFramework;
				}

				return urlFramework === docSearchSettings.framework;
			});
		});
	});

	async function getOrCreatePagefind() {
		if (pagefind) {
			return pagefind;
		}
		// @ts-expect-error - generated file
		pagefind = await import('/pagefind/pagefind.js');
		pagefind.init();
		return pagefind;
	}

	function onkeydown(e: KeyboardEvent) {
		if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
			e.preventDefault();
			dialog().setOpen(true);
		}
	}

	$effect(() => {
		const unsubscribe = docSearchSettingsStore.listen((value) => {
			docSearchSettings = value;
		});

		return unsubscribe;
	});

	$effect(() => {
		docSearchSettingsStore.set(docSearchSettings);
	});
</script>

<svelte:document {onkeydown} />

<Dialog.Provider value={dialog}>
	<Dialog.Trigger
		class="btn preset-tonal ring ring-inset ring-transparent hover:ring-surface-500 [&>*]:pointer-events-none hover:preset-tonal w-full xl:w-auto opacity-50 gap-8 justify-between"
	>
		<div class="flex items-center gap-2">
			<SearchIcon class="size-5" />
			<span>Search Docs...</span>
		</div>

		<div class="flex items-center gap-1 leading-4">
			<kbd class="kbd flex justify-center items-center text-xs">⌘</kbd>
			<kbd class="kbd flex justify-center items-center">K</kbd>
		</div>
	</Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop
			class="fixed inset-0 bg-surface-50-950/50 backdrop-blur-sm z-50 data-[state=open]:animate-[fade-in_100ms_ease-in-out]"
		/>
		<Dialog.Positioner class="fixed inset-0 flex justify-center items-start md:py-[10dvh] md:px-[10dvw] z-50">
			<Dialog.Content
				class="bg-surface-50-950 rounded-container top-[10%]  w-full md:max-w-2xl lg:max-w-4xl max-h-[50dvh] space-y-8 p-8 shadow-xl overflow-y-auto data-[state=open]:animate-[pop-in_100ms_ease-out]"
			>
				<div class="space-y-2">
					<div class="input-group grid-cols-[auto_1fr_auto]">
						<div class="ig-cell">
							<SearchIcon class="size-4 opacity-50" />
						</div>
						<input class="ig-input" placeholder="Search..." bind:value={query} />
						<Popover>
							<Popover.Trigger class="ig-btn hover:preset-tonal" tabindex={-1}><FilterIcon class="size-4" /></Popover.Trigger>
							<Portal>
								<Popover.Positioner>
									<Popover.Content class="z-50 card max-w-md p-2 bg-surface-50-950 shadow-xl grid gap-2">
										<label class="label">
											<select class="select" bind:value={docSearchSettings.framework}>
												<option value="preferred">Preferred Framework</option>
												{#each frameworks as framework (framework.slug)}
													<option value={framework.slug}>Only {framework.name}</option>
												{/each}
												<option value="all">All Frameworks</option>
											</select>
										</label>
									</Popover.Content>
								</Popover.Positioner>
							</Portal>
						</Popover>
					</div>
				</div>

				<article class="flex justify-center">
					{#await resultsPromise}
						<span class="py-10 text-center"><LoaderIcon class="ml-2 inline size-4 animate-spin" /></span>
					{:then results}
						{#if results.length === 0 && query === ''}
							<span class="py-10 text-center opacity-50"> What can we help you find? </span>
						{:else if results.length === 0}
							<span class="py-10 text-center opacity-50">No results found for <code class="code">{query}</code></span>
						{:else}
							<ol class="flex flex-col gap-4 space-y-4">
								{#each results as result, i (result)}
									<li class="space-y-2">
										<a
											class="card preset-outlined-surface-100-900 hover:preset-tonal grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4"
											href={result.url}
										>
											<BookIcon class="size-6 opacity-50" />
											<div class="space-y-1">
												<p class="text-lg font-bold">{result.meta.title}</p>
												<p class="text-xs">{result.url}</p>
											</div>
											<ChevronRightIcon class="size-4 opacity-50" />
										</a>
										<div class="border-surface-200-800 divide-surface-100-900 space-y-2 divide-y-[1px] border-l pl-4">
											{#each result.sub_results.filter((r) => r.title !== result.meta.title) as subResult (subResult)}
												<a
													class="card preset-outlined-surface-100-900 hover:preset-tonal grid grid-cols-[auto_1fr_auto] items-center gap-4 space-y-1 p-4"
													href={subResult.url}
												>
													<span class="hidden md:block">
														<HashIcon class="size-4 opacity-50" />
													</span>
													<div class="space-y-1 overflow-hidden">
														<p class="text-base font-bold">{subResult.title}</p>
														<p class="text-xs text-surface-600-400 break-words [&_mark]:code">
															{@html subResult.excerpt}
														</p>
													</div>
													<span class="hidden md:block">
														<ChevronRightIcon class="size-4 opacity-50" />
													</span>
												</a>
											{/each}
										</div>
									</li>
								{/each}
							</ol>
						{/if}
					{/await}
				</article>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog.Provider>

<style>
	@keyframes -global-fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 100;
		}
	}

	@keyframes -global-pop-in {
		from {
			transform: translateY(5%);
			scale: 0.95;
			opacity: 0;
		}
		to {
			transform: translateY(0);
			scale: 1;
			opacity: 100;
		}
	}
</style>
