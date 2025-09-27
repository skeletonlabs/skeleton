<script lang="ts">
	import IconBook from '@lucide/svelte/icons/book';
	import IconChevronRight from '@lucide/svelte/icons/chevron-right';
	import IconFilter from '@lucide/svelte/icons/filter';
	import IconHash from '@lucide/svelte/icons/hash';
	import IconLoader from '@lucide/svelte/icons/loader';
	import IconSearch from '@lucide/svelte/icons/search';
	import { Dialog, Portal, useDialog } from '@skeletonlabs/skeleton-svelte';
	import { docSearchSettingsStore } from 'src/stores/doc-search-settings';
	import { frameworks, isFramework, preferredFrameworkStore } from 'src/stores/preferred-framework';
	import { untrack } from 'svelte';
	import type { Pagefind } from 'vite-plugin-pagefind/types';

	let pagefind: Pagefind;
	let query = $state('');
	let docSearchSettings = $state(docSearchSettingsStore.get());
	let showFilters = $state(false);

	const id = $props.id();
	const dialog = useDialog({
		id: id,
	});

	$effect(() => {
		const unsubscribe = docSearchSettingsStore.listen((value) => {
			docSearchSettings = value;
		});

		return unsubscribe;
	});

	$effect(() => docSearchSettingsStore.set(docSearchSettings));

	const search = $derived.by(() => {
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

	const toggleFilters = () => (showFilters = !showFilters);

	async function getOrCreatePagefind() {
		if (pagefind) {
			return pagefind;
		}
		// @ts-expect-error - generated file
		pagefind = await import('/pagefind/pagefind.js');
		pagefind.init();
		return pagefind;
	}

	$effect(() => {
		function onKeydown(event: KeyboardEvent) {
			if (event.key === 'k' && (event.ctrlKey || event.metaKey)) {
				event.preventDefault();
				dialog().setOpen(true);
			}
		}
		document.addEventListener('keydown', onKeydown);
		return () => {
			document.removeEventListener('keydown', onKeydown);
		};
	});
</script>

<Dialog.Provider value={dialog}>
	<Dialog.Trigger
		class="btn preset-tonal ring ring-inset ring-transparent hover:ring-surface-500 [&>*]:pointer-events-none hover:preset-tonal w-full xl:w-auto justify-start"
	>
		<IconSearch class="size-4 opacity-60" />
		<span class="opacity-60">Search...</span>
	</Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop class="fixed inset-0 bg-surface-50-950/50 backdrop-blur-sm z-50" />
		<Dialog.Positioner class="fixed inset-0 flex justify-center items-start md:py-[10dvh] md:px-[10dvw] z-50">
			<Dialog.Content
				class="bg-surface-50-950 rounded-container top-[10%] m-0 mx-auto max-h-[25dvh] h-fit w-full space-y-8 p-8 text-inherit shadow-xl backdrop:bg-[rgba(var(--color-surface-900)/0.5)] backdrop: md:max-w-2xl lg:max-w-4xl"
			>
				<!-- Search Field -->
				<div class="input-group grid-cols-[auto_1fr_auto]">
					<div class="ig-cell">
						<IconSearch class="size-4 opacity-60" />
					</div>
					<input class="ig-input" placeholder="Search..." bind:value={query} />
					<button type="button" class="ig-btn hover:preset-tonal" onclick={toggleFilters} title="Show Filters" tabindex="-1">
						<IconFilter class="size-4" />
					</button>
				</div>
				<!-- Filters -->
				{#if showFilters}
					<label class="label">
						<select class="select" bind:value={docSearchSettings.framework}>
							<option value="preferred">Preferred Framework</option>
							{#each frameworks as framework (framework.slug)}
								<option value={framework.slug}>Only {framework.name}</option>
							{/each}
							<option value="all">All Frameworks</option>
						</select>
					</label>
				{/if}
				<!-- Results -->
				<article class="[&_mark]:code [&_mark]:text-inherit">
					{#await search}
						<p class="py-10 text-center"><IconLoader class="ml-2 inline size-4 animate-spin" /></p>
					{:then results}
						{#if results.length === 0 && query !== ''}
							<p class="py-10 text-center">No results found for <code class="code">{query}</code></p>
						{:else if results.length === 0}
							<p class="py-10 text-center text-xl">What can we help you find?</p>
						{:else}
							<ol class="flex flex-col gap-4 space-y-4">
								{#each results as result (result)}
									<li class="space-y-2">
										<!-- Page Result -->
										<a
											class="card preset-outlined-surface-100-900 hover:preset-tonal grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4"
											href={result.url}
											onclick={() => dialog().setOpen(false)}
										>
											<span><IconBook class="size-6 opacity-60" /></span>
											<div class="space-y-1">
												<p class="text-lg font-bold">{result.meta.title}</p>
												<p class="text-xs">{result.url}</p>
											</div>
											<span><IconChevronRight class="size-4 opacity-60" /></span>
										</a>
										<!-- Inner Result -->
										<div class="border-surface-200-800 divide-surface-100-900 space-y-2 divide-y-[1px] border-l pl-4">
											{#each result.sub_results.filter((r) => r.title !== result.meta.title) as subResult (subResult)}
												<a
													class="card preset-outlined-surface-100-900 hover:preset-tonal grid grid-cols-[auto_1fr_auto] items-center gap-4 space-y-1 p-4"
													href={subResult.url}
													onclick={() => dialog().setOpen(false)}
												>
													<span class="hidden md:block">
														<IconHash class="size-4 opacity-60" />
													</span>
													<div class="space-y-1 overflow-hidden">
														<p class="text-base font-bold">{subResult.title}</p>
														<p class="text-xs text-surface-600-400 break-words">
															<!-- eslint-disable-next-line svelte/no-at-html-tags -->
															{@html subResult.excerpt}
														</p>
													</div>
													<span class="hidden md:block">
														<IconChevronRight class="size-4 opacity-60" />
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
