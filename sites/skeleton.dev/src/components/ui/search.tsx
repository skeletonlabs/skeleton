import { isFramework, framework } from '@/lib/framework';
import { Dialog, Portal, useDialog } from '@skeletonlabs/skeleton-react';
import { BookIcon, ChevronRightIcon, HashIcon, LoaderIcon, SearchIcon } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import type { Pagefind, PagefindSearchFragment } from 'vite-plugin-pagefind/types';

type SearchState =
	| { status: 'idle' }
	| { status: 'loading' }
	| { status: 'success'; results: PagefindSearchFragment[] }
	| { status: 'error'; error: string };

export default function Search() {
	let pagefind: Pagefind | null = null;
	const [query, setQuery] = useState('');
	const [searchState, setSearchState] = useState<SearchState>({ status: 'idle' });

	const dialog = useDialog();

	const getOrInitializePagefind = useCallback(async () => {
		if (pagefind) {
			return pagefind;
		}
		// @ts-expect-error - will be present at runtime
		pagefind = await import('/pagefind/pagefind.js');
		if (!pagefind) {
			throw new Error('Unable to find pagefind module');
		}
		await pagefind.init();
		return pagefind;
		// oxlint-disable-next-line exhaustive-deps
	}, []);

	const performSearch = useCallback(
		async (searchQuery: string) => {
			if (!searchQuery.trim()) {
				setSearchState({ status: 'idle' });
				return;
			}

			setSearchState({ status: 'loading' });

			try {
				const pf = await getOrInitializePagefind();
				const result = await pf.debouncedSearch(searchQuery, {}, 250);

				// If null, this search was cancelled by a more recent search - do nothing
				if (result === null) {
					return;
				}

				const results = (await Promise.all(result.results.map((r) => r.data()))).filter((res) => {
					const urlFramework = res.url.split('/').at(-2);
					if (!isFramework(urlFramework)) return true;
					return urlFramework === framework.get();
				});

				setSearchState({ status: 'success', results: results });
			} catch {
				setSearchState({ status: 'error', error: 'Search failed' });
			}
		},
		// oxlint-disable-next-line exhaustive-deps
		[getOrInitializePagefind],
	);

	useEffect(() => {
		performSearch(query).catch(() => {
			setSearchState({ status: 'error', error: 'Search failed' });
		});
	}, [query, performSearch]);

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
				event.preventDefault();
				dialog.setOpen(true);
			}
		}
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [dialog]);

	return (
		<Dialog.Provider value={dialog}>
			<Dialog.Trigger className="btn preset-tonal ring ring-inset ring-transparent hover:ring-surface-500 w-full xl:w-auto opacity-50 gap-4 justify-between flex items-center">
				<div className="flex items-center gap-2">
					<SearchIcon className="w-5 h-5" />
					<span>Search...</span>
				</div>
				<div className="flex items-center gap-1 leading-4">
					<kbd className="kbd text-xs">⌘</kbd>
					<kbd className="kbd">K</kbd>
				</div>
			</Dialog.Trigger>
			<Portal>
				<Dialog.Backdrop className="fixed inset-0 bg-surface-50-950/50 backdrop-blur-sm z-50 transition transition-discrete opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100" />
				<Dialog.Positioner className="fixed inset-0 flex justify-center items-start md:py-[10dvh] md:px-[10dvw] z-50">
					<Dialog.Content className="bg-surface-50-950 rounded-container top-[10%] w-full md:max-w-2xl lg:max-w-4xl max-h-[75dvh] md:max-h-[50dvh] space-y-8 p-8 shadow-xl overflow-y-auto transition transition-discrete opacity-0 translate-y-24 starting:data-[state=open]:opacity-0 starting:data-[state=open]:translate-y-24 data-[state=open]:opacity-100 data-[state=open]:translate-y-0">
						<div className="input-group grid-cols-[auto_1fr_auto]">
							<div className="ig-cell preset-tonal">
								<SearchIcon className="size-4 opacity-50" />
							</div>
							<input className="ig-input" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
						</div>
						<article className="flex justify-center">
							{searchState.status === 'idle' ? (
								<span className="py-10 text-center opacity-50">What can we help you find?</span>
							) : searchState.status === 'loading' ? (
								<span className="py-10 text-center opacity-50 flex justify-center">
									<LoaderIcon className="animate-spin size-5" />
								</span>
							) : searchState.status === 'error' ? (
								<span className="py-10 text-center opacity-50">{searchState.error}</span>
							) : searchState.results.length === 0 ? (
								<span className="py-10 text-center opacity-50">
									No results found for <code>{query}</code>
								</span>
							) : (
								<ol className="flex flex-col gap-4 space-y-4 w-full">
									{searchState.results.map((result) => (
										<li key={result.url} className="space-y-2">
											<a
												className="card preset-outlined-surface-100-900 hover:preset-tonal grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4"
												href={result.url}
												onClick={() => dialog.setOpen(false)}
											>
												<BookIcon className="w-6 h-6 opacity-50" />
												<div className="space-y-1">
													<p className="text-lg font-bold">{result.meta.title}</p>
													<p className="text-xs">{result.url}</p>
												</div>
												<ChevronRightIcon className="w-4 h-4 opacity-50" />
											</a>
											<div className="border-l border-surface-200-800 divide-y-[1px] divide-surface-100-900 space-y-2 pl-4">
												{result.sub_results
													.filter((r) => r.title !== result.meta.title)
													.map((subResult) => (
														<a
															key={subResult.url}
															className="card preset-outlined-surface-100-900 hover:preset-tonal grid grid-cols-[auto_1fr_auto] items-center gap-4 space-y-1 p-4"
															href={subResult.url}
															onClick={() => dialog.setOpen(false)}
														>
															<span className="hidden md:block">
																<HashIcon className="w-4 h-4 opacity-50" />
															</span>
															<div className="space-y-1 overflow-hidden">
																<p className="text-base font-bold">{subResult.title}</p>
																<p
																	className="text-xs text-surface-600-400 break-words"
																	dangerouslySetInnerHTML={{ __html: subResult.excerpt }}
																/>
															</div>
															<span className="hidden md:block">
																<ChevronRightIcon className="w-4 h-4 opacity-50" />
															</span>
														</a>
													))}
											</div>
										</li>
									))}
								</ol>
							)}
						</article>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Provider>
	);
}
