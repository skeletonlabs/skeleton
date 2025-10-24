<script lang="ts" module>
	import type { Pagefind } from '@/modules/pagefind';

	function createPagefindSingleton() {
		let instance: Pagefind;

		return async function get() {
			if (!instance) {
				// @ts-expect-error pagefind is only present during runtime
				instance = (await import('/pagefind/pagefind.js')) as Pagefind;
				await instance.init();
			}
			return instance;
		};
	}

	const getPagefind = createPagefindSingleton();
</script>

<script lang="ts">
	import type { PagefindSearchFragment } from '@/modules/pagefind';
	import SearchIcon from '@lucide/svelte/icons/search';
	import { Dialog, Portal, Combobox, useListCollection, type ComboboxRootProps } from '@skeletonlabs/skeleton-svelte';
	import type { CollectionEntry } from 'astro:content';
	import { navigate } from 'astro:transitions/client';

	interface Props {
		activeFramework: CollectionEntry<'frameworks'>;
	}

	const { activeFramework }: Props = $props();

	let query = $state('');
	let items = $derived.by(async () => {
		const pagefind = await getPagefind();
		const search = await pagefind.search(query);
		const results = await Promise.all(search.results.map((result) => result.data()));
		return results.filter((item) => {
			if (item.url.startsWith('/docs/')) {
				return item.url.startsWith(`/docs/${activeFramework.id}/`);
			}
			return true;
		});
	});

	const collection = $derived(
		useListCollection<PagefindSearchFragment>({
			items: await items,
			itemToString: (item) => item.meta.title,
			itemToValue: (item) => item.url,
		}),
	);

	const onOpenChange = () => {
		items = Promise.resolve([]);
	};

	const onInputValueChange: ComboboxRootProps['onInputValueChange'] = async (event) => {
		query = event.inputValue;
	};

	const onValueChange: ComboboxRootProps['onValueChange'] = async (details) => {
		const url = details.value.at(0);
		if (!url) {
			return;
		}
		await navigate(url);
	};
</script>

<Dialog initialFocusEl={() => document.querySelector('[data-search-input]')}>
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
				<header class="flex justify-between items-center">
					<Dialog.Title class="font-bold text-lg">Explore</Dialog.Title>
					<Dialog.CloseTrigger class="btn-icon hover:preset-tonal rounded-full">&times</Dialog.CloseTrigger>
				</header>
				<hr class="hr" />
				<Combobox
					class="w-full"
					placeholder="Search..."
					{collection}
					{onOpenChange}
					{onInputValueChange}
					{onValueChange}
					inputBehavior="autohighlight"
					selectionBehavior="clear"
				>
					<Combobox.Control>
						<Combobox.Input data-search-input />
					</Combobox.Control>
					<svelte:boundary>
						{#snippet pending()}
							<div class="p-4 text-center opacity-50">Loading results...</div>
						{/snippet}

						<Combobox.Content class="p-0 border-none">
							{#each await items as item (item)}
								<Combobox.Item {item}>
									<Combobox.ItemText>{item.meta.title}</Combobox.ItemText>
									<Combobox.ItemIndicator />
								</Combobox.Item>
							{/each}
						</Combobox.Content>
					</svelte:boundary>
				</Combobox>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
