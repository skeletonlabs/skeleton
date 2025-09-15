<script lang="ts">
	import IconBook from '@lucide/svelte/icons/book';
	import IconChevronRight from '@lucide/svelte/icons/chevron-right';
	import IconFilter from '@lucide/svelte/icons/filter';
	import IconHash from '@lucide/svelte/icons/hash';
	import IconLoader from '@lucide/svelte/icons/loader';
	// Icons
	import IconSearch from '@lucide/svelte/icons/search';
	// Utils
	import { docSearchSettingsStore } from 'src/stores/doc-search-settings';
	import { frameworks, isFramework, preferredFrameworkStore } from 'src/stores/preferred-framework';
	import { untrack } from 'svelte';
	import type { Pagefind } from 'vite-plugin-pagefind/types';

	let dialog: HTMLDialogElement | null = $state(undefined);
	let pagefind: Pagefind | null = $state(undefined);
	let query = $state('');
	let docSearchSettings = $state(docSearchSettingsStore.get());
	let showFilters = $state(false);

	$effect(() => {
		const unsubscribe = docSearchSettingsStore.listen((value) => {
			docSearchSettings = value;
		});

		return unsubscribe;
	});

	$effect(() => docSearchSettingsStore.set(docSearchSettings));

	const searchPromise = $derived.by(() => {
		void [pagefind, query, docSearchSettings.framework];

		return untrack(async () => {
			if (pagefind === null || query === '') {
				return [];
			}

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

	const openDialog = () => dialog && dialog.showModal();
	const closeDialog = () => dialog && dialog.close();

	const onClickOutside = (node: HTMLDialogElement) => {
		const onclick = (event: MouseEvent) => {
			if (event.target === null || !(event.target instanceof Element)) {
				return;
			}
			if (event.target.tagName !== 'DIALOG') {
				return;
			} // prevents issues with forms

			const rect = event.target.getBoundingClientRect();

			const clickedInDialog =
				rect.top <= event.clientY &&
				event.clientY <= rect.top + rect.height &&
				rect.left <= event.clientX &&
				event.clientX <= rect.left + rect.width;

			if (clickedInDialog === false) {
				node.close();
				query = '';
			}
		};

		document.addEventListener('click', onclick);

		return {
			destroy: () => {
				document.removeEventListener('click', onclick);
			},
		};
	};

	const toggleFilters = () => (showFilters = !showFilters);

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
			pagefind = undefined;
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
</script>

<!-- Trigger Button -->
<button
	onclick={() => openDialog()}
	type="button"
	class="btn preset-tonal ring ring-inset ring-transparent hover:ring-surface-500 [&>*]:pointer-events-none hover:preset-tonal w-full xl:w-auto justify-start"
>
	<IconSearch class="size-4 opacity-60" />
	<span class="opacity-60">Search...</span>
	<!-- <kbd class="text-xs opacity-60">⌘ K</kbd> -->
</button>

<!-- Dialog -->
<dialog
	class="bg-surface-50-950 rounded-container top-[10%] m-0 mx-auto max-h-[75%] w-full max-w-[90%] space-y-8 p-8 text-inherit shadow-xl backdrop:bg-[rgba(var(--color-surface-900)/0.5)] backdrop:backdrop-blur-sm md:max-w-2xl lg:max-w-4xl"
	bind:this={dialog}
	use:onClickOutside
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
		{#await searchPromise}
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
								onclick={closeDialog}
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
										onclick={closeDialog}
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
</dialog>
