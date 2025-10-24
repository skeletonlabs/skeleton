<script lang="ts" module>
	import type { Pagefind } from '@/modules/pagefind';

	function createPagefindSingleton() {
		let instance: Pagefind;

		return async function get() {
			if (!instance) {
				// @ts-expect-error pagefind is only present during runtime
				instance = (await import('/pagefind/pagefind.js')) as Pagefind;
				await instance.options({
					excerptLength: 10,
				});
				await instance.init();
			}
			return instance;
		};
	}

	const getPagefind = createPagefindSingleton();
</script>

<script lang="ts">
	import { BookIcon, ChevronRightIcon, HashIcon } from '@lucide/svelte';
	import { LoaderIcon } from '@lucide/svelte';
	import SearchIcon from '@lucide/svelte/icons/search';
	import { Dialog, Portal, Combobox, useListCollection, type ComboboxRootProps, useDialog } from '@skeletonlabs/skeleton-svelte';
	import type { CollectionEntry } from 'astro:content';
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

	const id = $props.id();
	const dialog = useDialog({
		id,
		initialFocusEl: () => {
			return document.querySelector('[data-search-input]');
		},
	});

	let query = $state('');
	let status: 'idle' | 'searching' | 'done' = $state('idle');
	let items: (Result | Subresult)[] = $state.raw([]);

	const collection = $derived(
		useListCollection<Result | Subresult>({
			items,
			itemToString: (item) => item.title,
			itemToValue: (item) => item.url,
		}),
	);

	const onOpenChange = () => {
		query = '';
		items = [];
	};

	const onInputValueChange: ComboboxRootProps['onInputValueChange'] = async (details) => {
		query = details.inputValue;
		if (query.trim().length === 0) {
			status = 'idle';
			items = [];
			return;
		}
		if (status === 'idle') {
			status = 'searching';
		}
		const pagefind = await getPagefind();
		const searchResult = await pagefind.debouncedSearch(query);
		// @ts-expect-error status can have changed during the debounce
		if (!searchResult || status === 'idle') {
			return;
		}
		const results = (
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
		items = results;
		status = 'done';
	};

	const onValueChange: ComboboxRootProps['onValueChange'] = async (details) => {
		const url = details.value.at(0);
		if (!url) {
			return;
		}
		dialog().setOpen(false);
		await navigate(url);
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
			<p class="text-xs text-surface-600-400 break-words [&>mark]:mark">
				{@html item.excerpt}
			</p>
		</div>
		<ChevronRightIcon class="size-4 opacity-50" />
		<Combobox.ItemIndicator />
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
				class="card bg-surface-50-950/90 backdrop-blur-sm border border-surface-200-800 w-full max-w-[960px] p-4 space-y-4 shadow-[0_0_100px_rgba(0,0,0,0.25)] shadow-primary-500/50 transition transition-discrete duration-200 opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100"
			>
				<Combobox
					class="w-full flex flex-col gap-4"
					placeholder="Search..."
					{collection}
					{onOpenChange}
					{onInputValueChange}
					{onValueChange}
					inputBehavior="autohighlight"
					selectionBehavior="clear"
					open
				>
					<Combobox.Control class="input-group grid-cols-[auto_1fr]">
						<div class="ig-cell preset-tonal">
							<SearchIcon class="size-4" />
						</div>
						<Combobox.Input class="ig-input rounded-s-none" type="search" data-search-input />
					</Combobox.Control>
					{#if status === 'idle'}
						<span class="py-10 text-center opacity-50">What can we help you find?</span>
					{:else if status === 'searching'}
						<span class="py-10 flex justify-center opacity-50">
							<LoaderIcon class="size-4 animate-spin" />
						</span>
					{:else if status === 'done'}
						{#if collection.items.length === 0}
							<span class="py-10 text-center opacity-50">
								No results found for <code class="code">{query}</code>
							</span>
						{:else}
							<Combobox.Content class="p-0 border-none bg-transparent">
								{#each collection.items as item (item)}
									{#if item.type === 'result'}
										{@render result(item)}
									{:else if item.type === 'subresult'}
										{@render subresult(item)}
									{/if}
								{/each}
							</Combobox.Content>
						{/if}
					{/if}
				</Combobox>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog.Provider>
