<script lang="ts" module>
	import type { Pagefind } from '@/modules/pagefind';

	function createPagefindSingleton() {
		let instance: Pagefind | null = null;
		return async function get() {
			if (!instance) {
				const module = (await import('@/modules/pagefind')) as { default: Pagefind };
				instance = module.default;
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

	let items = $state([]);

	const collection = $derived(
		useListCollection<PagefindSearchFragment>({
			items: [],
			itemToString: (item) => item.meta.title,
			itemToValue: (item) => item.url,
		}),
	);

	const onOpenChange = () => {
		items = [];
	};

	const onInputValueChange: ComboboxRootProps['onInputValueChange'] = async (event) => {
		const pagefind = await getPagefind();
		const search = await pagefind.search(event.inputValue);
		const results = await Promise.all(search.results.map((result) => result.data()));
		console.log({ results });
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
				<Combobox class="w-full max-w-md" placeholder="Search..." {collection} {onOpenChange} {onInputValueChange}>
					<Combobox.Control>
						<Combobox.Input data-search-input />
					</Combobox.Control>
					<Portal>
						<Combobox.Positioner class="z-[1]!">
							<Combobox.Content>
								{#each collection.items as item (item)}
									<Combobox.Item {item}>
										<Combobox.ItemText>{item.meta.title}</Combobox.ItemText>
										<Combobox.ItemIndicator />
									</Combobox.Item>
								{/each}
							</Combobox.Content>
						</Combobox.Positioner>
					</Portal>
				</Combobox>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
