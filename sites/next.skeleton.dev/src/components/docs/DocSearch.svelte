<script lang="ts">
	import Search from 'lucide-svelte/icons/search';
	import TextSearch from 'lucide-svelte/icons/text-search';
	import FilterIcon from 'lucide-svelte/icons/filter';
	import { docSearchSettingsStore } from 'src/stores/doc-search-settings';
	import { frameworks, isFramework } from 'src/stores/preferred-framework';
	import { untrack } from 'svelte';
	import type { Pagefind } from 'vite-plugin-pagefind';
	import { slide } from 'svelte/transition';

	let dialog: HTMLDialogElement | null = $state(null);
	let pagefind: Pagefind | null = $state(null);
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

	const searchPromise = $derived.by(async () => {
		// Define deps since async context is not reactive
		[pagefind, query, docSearchSettings.framework];

		return await untrack(async () => {
			if (pagefind === null || query === '') {
				return [];
			}

			const result = await pagefind.search(query);

			if (result === null) {
				return [];
			}

			const results = await Promise.all(result.results.map((result) => result.data()));

			return results.filter((result) => {
				const possibleFramework = result.url.split('/').at(-2);

				if (isFramework(possibleFramework) && docSearchSettings.framework !== 'all') {
					return possibleFramework === docSearchSettings.framework;
				}

				return true;
			});
		});
	});

	const openDialog = () => {
		dialog && dialog.showModal();
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
			pagefind = null;
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

<button onclick={() => openDialog()} type="button" class="btn preset-outlined-surface-200-800 hover:preset-tonal">
	<Search size={18} className="opacity-60" />
	<span class="opacity-60">Search...</span>
</button>

<dialog
	class="bg-surface-50-950 text-black dark:text-white rounded-md p-4 m-0 left-1/2 -translate-x-1/2 top-[15%] backdrop:bg-black backdrop:opacity-75 max-w-[700px] max-h-[75vh] w-full border border-surface-100-900 shadow-lg"
	bind:this={dialog}
>
	<div class="flex flex-col gap-4">
		<div class="flex gap-4 items-center">
			<input class="input" placeholder="Search..." bind:value={query} />
			<button class="btn-icon preset-outlined-surface-950-50 flex-1" onclick={toggleFilters}
				><FilterIcon /></button
			>
		</div>
		{#if showFilters}
			<div class="flex flex-col gap-2 p-0.5" transition:slide>
				<label class="label">
					<span>Framework</span>
					<select bind:value={docSearchSettings.framework} class="select">
						{#each frameworks as framework}
							<option value={framework.slug}>{framework.name}</option>
						{/each}
						<option value="all">All</option>
					</select>
				</label>
			</div>
		{/if}
		<nav
			class="flex flex-col gap-4 [&_mark]:bg-primary-800-200 [&_mark]:text-white [&_mark]:dark:text-black [&_mark]:px-1 [&_mark]:rounded-md [&_a:focus]:bg-primary-200-800"
		>
			{#await searchPromise then results}
				{#if results.length === 0 && query !== ''}
					<p class="text-center text-sm opacity-50 py-8">No results found for "{query}"</p>
				{:else if results.length === 0}
					<p class="text-center text-sm opacity-50 py-8">Start typing to search...</p>
				{:else}
					<ol class="flex flex-col gap-4">
						{#each results as result}
							<li class="border-2 border-surface-100-900 rounded-md divide-y-2 divide-surface-100-900">
								<a class="block p-2" href={result.url}>
									<p class="flex items-center gap-2 text-xl font-bold">
										<TextSearch class="size-6" />
										{result.meta.title}
									</p>
									<p class="opacity-50 pl-8">{result.url}</p>
								</a>
								<ol class="divide-y-2 divide-surface-100-900">
									{#each result.sub_results.filter((r) => r.title !== result.meta.title) as subResult}
										<li>
											<a class="block pl-10 p-2" href={subResult.url}>
												<p class="flex items-center gap-2 text-lg font-bold">
													{subResult.title}
												</p>
												<p class="opacity-75 italic line-clamp-2">
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
