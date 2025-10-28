<script lang="ts">
	import type { Pagefind } from '@/modules/pagefind';
	import { BookIcon, ChevronRightIcon, HashIcon } from '@lucide/svelte';
	import SearchIcon from '@lucide/svelte/icons/search';
	import { Dialog, Portal, Combobox, useListCollection, type ComboboxRootProps, useDialog } from '@skeletonlabs/skeleton-svelte';
	import type { CollectionEntry } from 'astro:content';
	import { prefetch } from 'astro:prefetch';
	import { navigate } from 'astro:transitions/client';
	import { on } from 'svelte/events';

	interface Result {
		type: 'result';
		url: string;
		title: string;
		excerpt: string;
	}

	interface Subresult {
		type: 'subresult';
		url: string;
		title: string;
		excerpt: string;
	}

	interface Props {
		activeFramework: CollectionEntry<'frameworks'>;
	}

	const { activeFramework }: Props = $props();

	let query = $state('');

	const pagefindPromise = new Promise<Pagefind>((resolve) =>
		(async () => {
			if (import.meta.env.SSR) {
				return;
			}
			// @ts-expect-error pagefind is only present during runtime
			const pagefind: Pagefind = await import('/pagefind/pagefind.js');
			await pagefind.options({
				excerptLength: 10,
			});
			await pagefind.init();
			resolve(pagefind);
		})(),
	);

	const id = $props.id();
	const dialog = useDialog({
		id,
	});

	const items = $derived.by(async () => {
		if (query.length === 0) {
			return [];
		}

		const pagefind = await pagefindPromise;
		const searchResult = await pagefind.debouncedSearch(query, {}, 200);
		// A more recent search call was made
		if (!searchResult) {
			return [];
		}
		return (
			await Promise.all(
				searchResult.results.map(async (searchResult) => {
					const result = await searchResult.data();
					return [
						{
							type: 'result' as const,
							url: result.url,
							title: result.meta.title,
							excerpt: result.excerpt,
						},
						...result.sub_results
							.filter((subResult) => subResult.url !== result.url)
							.map((subResult) => ({
								type: 'subresult' as const,
								url: subResult.url,
								title: subResult.title,
								excerpt: subResult.excerpt,
							})),
					];
				}),
			)
		)
			.flat()
			.filter((item) => {
				if (item.url.startsWith('/docs/')) {
					return item.url.startsWith(`/docs/${activeFramework.id}/`);
				}
				return true;
			});
	});

	const collection = $derived(
		useListCollection<Result | Subresult>({
			items: await items,
			itemToString: (item) => item.title,
			itemToValue: (item) => item.url,
		}),
	);

	const onInputValueChange: ComboboxRootProps['onInputValueChange'] = async (details) => {
		query = details.inputValue.trim();
	};

	const onValueChange: ComboboxRootProps['onValueChange'] = async (details) => {
		const url = details.value.at(0);
		if (!url) {
			return;
		}
		dialog().setOpen(false);
		await navigate(url);
	};

	const onHighlightChange: ComboboxRootProps['onHighlightChange'] = (details) => {
		const url = details.highlightedValue;
		if (!url) {
			return;
		}
		prefetch(url);
	};

	$effect(() =>
		on(document, 'keydown', (event) => {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
				event.preventDefault();
				dialog().setOpen(true);
			}
		}),
	);
</script>

{#snippet result(item: Result)}
	<Combobox.Item class="p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center" {item}>
		<BookIcon class="size-6 opacity-50" />
		<div class="space-y-1">
			<Combobox.ItemText>{item.title}</Combobox.ItemText>
			<p class="text-xs">{item.url}</p>
		</div>
		<ChevronRightIcon class="size-4 opacity-50" />
		<Combobox.ItemIndicator />
	</Combobox.Item>
{/snippet}

{#snippet subresult(item: Subresult)}
	<Combobox.Item class="p-4 ml-8 grid grid-cols-[auto_1fr_auto] gap-4 items-center" {item}>
		<HashIcon class="size-4 opacity-50" />
		<div class="space-y-1">
			<Combobox.ItemText>{item.title}</Combobox.ItemText>
			<p class="text-xs text-surface-600-400 wrap-break-word [&>mark]:mark">
				{@html item.excerpt}
			</p>
		</div>
		<ChevronRightIcon class="size-4 opacity-50" />
	</Combobox.Item>
{/snippet}

<Dialog.Provider value={dialog}>
	<Dialog.Trigger class="btn preset-tonal justify-start">
		<SearchIcon class="size-4 opacity-60" />
		<span class="opacity-60">Search...</span>
		<span class="badge badge-icon preset-outlined-surface-500 text-xs opacity-30 hidden md:flex">⌘ K</span>
	</Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50 backdrop-blur-[2px]" />
		<Dialog.Positioner class="fixed inset-0 z-50 flex justify-center items-start mt-[5%] p-4">
			<Dialog.Content
				class="card bg-surface-50-950/90 backdrop-blur-sm border border-surface-200-800 w-full max-w-[960px] space-y-4 shadow-[0_0_100px_rgba(0,0,0,0.25)] shadow-primary-500/50 transition transition-discrete duration-200 opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100 motion-reduce:transition-none"
			>
				<Combobox
					class="w-full flex flex-col"
					placeholder="Search..."
					{collection}
					{onInputValueChange}
					{onValueChange}
					{onHighlightChange}
					inputBehavior="autohighlight"
					selectionBehavior="preserve"
					open={dialog().open}
				>
					<div class="px-4 pt-4 pb-4 lg:pb-2">
						<Combobox.Control class="input-group grid-cols-[auto_1fr]">
							<div class="ig-cell preset-tonal">
								<SearchIcon class="size-4" />
							</div>
							<Combobox.Input class="ig-input rounded-s-none" type="search" />
						</Combobox.Control>
					</div>
					<hr class="hr" />
					{#if query.length === 0}
						<span class="py-10 text-center opacity-50">What can we help you find?</span>
					{:else if collection.items.length === 0 && !$effect.pending()}
						<span class="py-10 text-center opacity-50">
							No results found for <code class="code">{query}</code>
						</span>
					{:else}
						<Combobox.Content class="px-4 py-2 border-none bg-transparent max-h-[50dvh] overflow-y-auto">
							{#each collection.items as item (item)}
								{#if item.type === 'result'}
									{@render result(item)}
								{:else if item.type === 'subresult'}
									{@render subresult(item)}
								{/if}
							{/each}
						</Combobox.Content>
					{/if}
					<hr class="hidden lg:block hr" />
					<div class="hidden lg:flex gap-2 px-4 pb-4 pt-2">
						<span class="text-sm opacity-50"><kbd class="kbd">↑</kbd> <kbd class="kbd">↓</kbd> Navigate</span>
						<span class="text-sm opacity-50"><kbd class="kbd">⏎</kbd> Select</span>
						<span class="text-sm opacity-50"><kbd class="kbd">Esc</kbd> Close</span>
					</div>
				</Combobox>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog.Provider>
