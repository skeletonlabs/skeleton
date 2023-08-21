<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { TreeView, TreeViewItem, type TreeViewNode } from '@skeletonlabs/skeleton';
	// Utilities
	import { CodeBlock } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldTreeView from '@skeletonlabs/skeleton/components/TreeView/TreeView.svelte?raw&sveld';
	import sveldTreeViewItem from '@skeletonlabs/skeleton/components/TreeView/TreeViewItem.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Tree Views',
		description: 'Display information in a hierarchical structure using collapsible nodes.',
		imports: ['TreeView', 'TreeViewItem', 'type TreeViewNode'],
		source: 'components/TreeView',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/treeview/',
		components: [
			{ label: 'TreeView', sveld: sveldTreeView },
			{
				label: 'TreeViewItem',
				sveld: sveldTreeViewItem,
				overrideProps: [
					'open',
					'selection',
					'multiple',
					'disabled',
					'padding',
					'indent',
					'hover',
					'rounded',
					'caretOpen',
					'hyphenOpacity',
					'regionSummary',
					'regionSymbol',
					'regionChildren'
				]
			}
		],
		keyboard: [
			['<kbd class="kbd">Tab</kbd>', "Focus the next tree-view item or it's input."],
			['<kbd class="kbd">Shift + Tab</kbd> ', "Focus the previous tree-view item or it's input."],
			['<kbd class="kbd">Right arrow</kbd>', 'Opens closed tree-view item or move focus to first child of open tree-view item.'],
			['<kbd class="kbd">Left arrow</kbd>', 'Closes open tree-view item or move focus to parent of closed tree-view item.'],
			['<kbd class="kbd">Home</kbd>', 'move focus to first tree-view item.'],
			['<kbd class="kbd">End</kbd>', 'move focus to last tree-view item.']
		]
	};

	// Locals
	// single
	let mediumSingle = 'books';
	let booksSingle = 'Clean Code';
	let relationalMediumSingle = 'books';
	let relationalBooksSingle = 'Clean Code';
	let childrenSingle: TreeViewItem[] = [];

	// multi
	let mediumMultiple = ['books', 'movies'];
	let booksMultiple = ['Clean Code', 'The Art of Unix Programming'];
	let relationalMediumMultiple = ['movies'];
	let relationalBooksMultiple: string[] = [];
	let childrenMultiple: TreeViewItem[] = [];

	let expandTree: TreeView;

	let simpleDD: TreeViewNode[] = [
		{
			content: 'Books',
			lead: '<i class="fa-solid fa-book-skull"></i>',
			open: true,
			children: [
				{ content: 'Clean Code', value: 'Clean Code' },
				{ content: 'The Clean Coder', value: 'The Clean Coder' },
				{ content: 'The Art of Unix Programming', value: 'The Art of Unix Programming' }
			],
			value: 'books'
		},
		{
			content: 'Movies',
			lead: '<i class="fa-solid fa-film"></i>',
			children: [
				{ content: 'The Flash', value: 'The Flash' },
				{ content: 'Guardians of the Galaxy', value: 'Guardians of the Galaxy' },
				{ content: 'Black Panther', value: 'Black Panther' }
			],
			value: 'movies'
		},
		{
			content: 'TV',
			lead: '<i class="fa-solid fa-tv"></i>',
			value: 'tv'
		}
	];

	let singleDD: TreeViewNode[] = [
		{
			content: 'Books',
			lead: '<i class="fa-solid fa-book-skull"></i>',
			open: true,
			checked: true,
			children: [
				{ content: 'Clean Code', value: 'Clean Code' },
				{ content: 'The Clean Coder', value: 'The Clean Coder' },
				{ content: 'The Art of Unix Programming', value: 'The Art of Unix Programming', checked: true }
			],
			value: 'books'
		},
		{
			content: 'Movies',
			lead: '<i class="fa-solid fa-film"></i>',
			children: [
				{ content: 'The Flash', value: 'The Flash' },
				{ content: 'Guardians of the Galaxy', value: 'Guardians of the Galaxy' },
				{ content: 'Black Panther', value: 'Black Panther' }
			],
			value: 'movies'
		},
		{
			content: 'TV',
			lead: '<i class="fa-solid fa-tv"></i>',
			value: 'tv'
		}
	];

	let multipleDD: TreeViewNode[] = [
		{
			content: 'Books',
			lead: '<i class="fa-solid fa-book-skull"></i>',
			open: true,
			indeterminate: true,
			children: [
				{ content: 'Clean Code', value: 'Clean Code' },
				{ content: 'The Clean Coder', value: 'The Clean Coder', checked: true },
				{ content: 'The Art of Unix Programming', value: 'The Art of Unix Programming', checked: true }
			],
			value: 'books'
		},
		{
			content: 'Movies',
			lead: '<i class="fa-solid fa-film"></i>',
			children: [
				{ content: 'The Flash', value: 'The Flash' },
				{ content: 'Guardians of the Galaxy', value: 'Guardians of the Galaxy' },
				{ content: 'Black Panther', value: 'Black Panther' }
			],
			value: 'movies'
		},
		{
			content: 'TV',
			lead: '<i class="fa-solid fa-tv"></i>',
			value: 'tv'
		}
	];
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview regionFooter="text-center">
			<svelte:fragment slot="preview">
				<div class="w-full max-w-[480px] card p-4 text-token">
					<TreeView>
						<TreeViewItem>
							<p>Item 1</p>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>Child 1</p>
									<svelte:fragment slot="children">
										<TreeViewItem>
											<p>Child of Child 1</p>
										</TreeViewItem>
										<TreeViewItem>
											<p>Child of Child 2</p>
										</TreeViewItem>
									</svelte:fragment>
								</TreeViewItem>
								<TreeViewItem>
									<p>Child 2</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem>
							<p>Item 2</p>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>Child</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
					</TreeView>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<TreeView>
	<TreeViewItem>
		(item 1)
		<svelte:fragment slot="children">
			<TreeViewItem>
				(Child 1)
				<svelte:fragment slot="children">
					<TreeViewItem>
						(Child of Child 1)
					</TreeViewItem>
					<TreeViewItem>
						(Child of Child 2)
					</TreeViewItem>
				</svelte:fragment>
			</TreeViewItem>
			<TreeViewItem>
				(Child 2)
			</TreeViewItem>
		</svelte:fragment>
	</TreeViewItem>
	<TreeViewItem>
		(item 2)
	</TreeViewItem>
</TreeView>
				`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Icons -->
		<section class="space-y-4">
			<h2 class="h2">Icons</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<TreeView>
						<TreeViewItem open>
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-folder" />
							</svelte:fragment>
							<p>Folder</p>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<svelte:fragment slot="lead">
										<i class="fa-solid fa-file" />
									</svelte:fragment>
									<p>File 1</p>
								</TreeViewItem>
								<TreeViewItem>
									<svelte:fragment slot="lead">
										<i class="fa-solid fa-file" />
									</svelte:fragment>
									<p>File 2</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
					</TreeView>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<TreeView>
	<TreeViewItem>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		(item 1)
	</TreeViewItem>
</TreeView>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Disbled -->
		<section class="space-y-4">
			<h2 class="h2">Disabled State</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<TreeView disabled>
						<TreeViewItem open>
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-book-skull" />
							</svelte:fragment>
							<p>Books</p>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>Clean Code</p>
								</TreeViewItem>
								<TreeViewItem>
									<p>The Clean Coder</p>
								</TreeViewItem>
								<TreeViewItem>
									<p>The Art of Unix Programming</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem>
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-film" />
							</svelte:fragment>
							<p>Movies</p>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>Clean Code</p>
								</TreeViewItem>
								<TreeViewItem>
									<p>The Clean Coder</p>
								</TreeViewItem>
								<TreeViewItem>
									<p>The Art of Unix Programming</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem>
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-tv" />
							</svelte:fragment>
							<p>TV</p>
						</TreeViewItem>
					</TreeView>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p>Disable the entire tree view component</p>
					<CodeBlock language="html" code={`<TreeView disabled></TreeView>`} />
					<p>Disable individual item components.</p>
					<CodeBlock
						language="html"
						code={`
<TreeView>
	<TreeViewItem disabled></TreeViewItem>
	<TreeViewItem open disabled></TreeViewItem>
</TreeView>
			`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Expand & Collapse -->
		<section class="space-y-4">
			<h2 class="h2">Expand & Collapse</h2>
			<p>We can bind the tree view and trigger methods for expanding or collapsing all children at once.</p>
			<DocsPreview background="neutral" regionFooter="flex justify-center gap-4">
				<svelte:fragment slot="preview">
					<TreeView bind:this={expandTree}>
						<TreeViewItem>
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-book-skull" />
							</svelte:fragment>
							<p>Books</p>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>Clean Code</p>
								</TreeViewItem>
								<TreeViewItem>
									<p>The Clean Coder</p>
								</TreeViewItem>
								<TreeViewItem>
									<p>The Art of Unix Programming</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem>
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-film" />
							</svelte:fragment>
							<p>Movies</p>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>The Flash</p>
								</TreeViewItem>
								<TreeViewItem>
									<p>Guardians of the Galaxy</p>
								</TreeViewItem>
								<TreeViewItem>
									<p>Black Panther</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem>
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-tv" />
							</svelte:fragment>
							<p>TV</p>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>The Simpsons</p>
								</TreeViewItem>
								<TreeViewItem>
									<p>Rick and Morty</p>
								</TreeViewItem>
								<TreeViewItem>
									<p>Family Guy</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
					</TreeView>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<button class="btn variant-filled" on:click={expandTree.expandAll}>Expand</button>
					<button class="btn variant-filled" on:click={expandTree.collapseAll}>Collapse</button>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let myTreeView: TreeView;\n
myTreeView.expandAll();
myTreeView.collapseAll();
					`}
					/>
					<CodeBlock
						language="html"
						code={`
<TreeView bind:this={myTreeView}></TreeView>
			`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>

		<hr />

		<!-- Selection -->
		<section class="space-y-4">
			<h2 class="h2">Selection</h2>
			<p>Each tree view provides a number of selection options.</p>
			<!-- Single -->
			<h3 class="h3">Single</h3>
			<p>When using single selection, our items are setup and treated as radio inputs.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<TreeView selection>
						<TreeViewItem bind:group={mediumSingle} name="medium" value="books">
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-book-skull" />
							</svelte:fragment>
							<p>Books</p>
							<svelte:fragment slot="children">
								<TreeViewItem bind:group={booksSingle} name="books" value="Clean Code">
									<p>Clean Code</p>
								</TreeViewItem>
								<TreeViewItem bind:group={booksSingle} name="books" value="The Clean Coder">
									<p>The Clean Coder</p>
								</TreeViewItem>
								<TreeViewItem bind:group={booksSingle} name="books" value="The Art of Unix Programming">
									<p>The Art of Unix Programming</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem bind:group={mediumSingle} name="medium" value="movies">
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-film" />
							</svelte:fragment>
							<p>Movies</p>
						</TreeViewItem>
						<TreeViewItem bind:group={mediumSingle} name="medium" value="tv">
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-tv" />
							</svelte:fragment>
							<p>TV</p>
						</TreeViewItem>
					</TreeView>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let medium = 'books';
let books = 'Clean Code';
`}
					/>
					<CodeBlock
						language="html"
						code={`
<TreeView selection>
	<TreeViewItem bind:group={medium} name="medium" value="books">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<p>Books</p>
		<svelte:fragment slot="children">
			<TreeViewItem bind:group={books} name="books" value="Clean Code">
				<p>Clean Code</p>
			</TreeViewItem>
			<TreeViewItem bind:group={books} name="books" value="The Clean Coder">
				<p>The Clean Coder</p>
			</TreeViewItem>
			<TreeViewItem bind:group={books} name="books" value="The Art of Unix Programming">
				<p>The Art of Unix Programming</p>
			</TreeViewItem>
		</svelte:fragment>
	</TreeViewItem>
	<!-- ... -->
</TreeView>
			`}
					/>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="flex justify-center items-center gap-4">
						<span>Medium: <code class="code">{mediumSingle}</code></span>
						<span>Books: <code class="code">{booksSingle}</code></span>
					</div>
				</svelte:fragment>
			</DocsPreview>
			<!-- Multiple -->
			<h3 class="h3">Multiple</h3>
			<p>When using multiple selection, our items are setup and treated as checkbox inputs.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<TreeView selection multiple>
						<TreeViewItem bind:group={mediumMultiple} name="medium" value="books">
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-book-skull" />
							</svelte:fragment>
							<p>Books</p>
							<svelte:fragment slot="children">
								<TreeViewItem bind:group={booksMultiple} name="books" value="Clean Code">
									<p>Clean Code</p>
								</TreeViewItem>
								<TreeViewItem bind:group={booksMultiple} name="books" value="The Clean Coder">
									<p>The Clean Coder</p>
								</TreeViewItem>
								<TreeViewItem bind:group={booksMultiple} name="books" value="The Art of Unix Programming">
									<p>The Art of Unix Programming</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem bind:group={mediumMultiple} name="medium" value="movies">
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-film" />
							</svelte:fragment>
							<p>Movies</p>
						</TreeViewItem>
						<TreeViewItem bind:group={mediumMultiple} name="medium" value="tv">
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-tv" />
							</svelte:fragment>
							<p>TV</p>
						</TreeViewItem>
					</TreeView>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let medums = ['books', 'movies'];
let books = ['Clean Code', 'The Art of Unix Programming']
`}
					/>
					<CodeBlock
						language="html"
						code={`
<TreeView selection multiple>
	<TreeViewItem bind:group={medums} name="medium" value="books">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<p>Books</p>
		<svelte:fragment slot="children">
			<TreeViewItem bind:group={books} name="books" value="Clean Code">
				<p>Clean Code</p>
			</TreeViewItem>
			<TreeViewItem bind:group={books} name="books" value="The Clean Coder">
				<p>The Clean Coder</p>
			</TreeViewItem>
			<TreeViewItem bind:group={books} name="books" value="The Art of Unix Programming">
				<p>The Art of Unix Programming</p>
			</TreeViewItem>
		</svelte:fragment>
	</TreeViewItem>
	<!-- ... -->
</TreeView>
			`}
					/>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="flex justify-center items-center gap-4">
						<span>Mediums: <code class="code">{mediumMultiple.length ? mediumMultiple : 'None'}</code></span>
						<span>Books: <code class="code">{booksMultiple.length ? booksMultiple : 'None'}</code></span>
					</div>
				</svelte:fragment>
			</DocsPreview>
			<!-- Relational -->
			<h3 class="h3">Relational</h3>
			<p>Use the <code class="code">children</code> prop to create a relational connection between parent and children.</p>
			<DocsPreview background="neutral" regionFooter="text-center">
				<svelte:fragment slot="preview">
					<TreeView selection>
						<TreeViewItem bind:group={relationalMediumSingle} name="r_medium" value="books" open children={childrenSingle}>
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-book-skull" />
							</svelte:fragment>
							<p>Books</p>
							<svelte:fragment slot="children">
								<TreeViewItem bind:this={childrenSingle[0]} bind:group={relationalBooksSingle} name="r_books" value="Clean Code">
									<p>Clean Code</p>
								</TreeViewItem>
								<TreeViewItem bind:this={childrenSingle[1]} bind:group={relationalBooksSingle} name="r_books" value="The Clean Coder">
									<p>The Clean Coder</p>
								</TreeViewItem>
								<TreeViewItem
									bind:this={childrenSingle[2]}
									bind:group={relationalBooksSingle}
									name="r_books"
									value="The Art of Unix Programming"
								>
									<p>The Art of Unix Programming</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem bind:group={relationalMediumSingle} name="r_medium" value="movies">
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-film" />
							</svelte:fragment>
							<p>Movies</p>
						</TreeViewItem>
						<TreeViewItem bind:group={relationalMediumSingle} name="r_medium" value="tv">
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-tv" />
							</svelte:fragment>
							<p>TV</p>
						</TreeViewItem>
					</TreeView>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let medium = 'books';
let book = 'Clean Code';
let bookChildren: TreeViewItem[] = [];
`}
					/>
					<CodeBlock
						language="html"
						code={`
<TreeView selection>
	<TreeViewItem bind:group={medium} name="medium" value="books" children={bookChildren}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<p>Books</p>
		<svelte:fragment slot="children">
			<TreeViewItem bind:this={bookChildren[0]} bind:group={book} name="books" value="Clean Code">
				<p>Clean Code</p>
			</TreeViewItem>
			<TreeViewItem bind:this={bookChildren[1]} bind:group={book} name="books" value="The Clean Coder">
				<p>The Clean Coder</p>
			</TreeViewItem>
			<TreeViewItem bind:this={bookChildren[2]} bind:group={book} name="books" value="The Art of Unix Programming">
				<p>The Art of Unix Programming</p>
			</TreeViewItem>
		</svelte:fragment>
	</TreeViewItem>
	<!-- ... -->
</TreeView>
			`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<DocsPreview background="neutral" regionFooter="text-center">
				<svelte:fragment slot="preview">
					<TreeView selection multiple>
						<TreeViewItem bind:group={relationalMediumMultiple} name="r_medium" value="books" open children={childrenMultiple}>
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-book-skull" />
							</svelte:fragment>
							<p>Books</p>
							<svelte:fragment slot="children">
								<TreeViewItem bind:this={childrenMultiple[0]} bind:group={relationalBooksMultiple} name="r_books" value="Clean Code">
									<p>Clean Code</p>
								</TreeViewItem>
								<TreeViewItem bind:this={childrenMultiple[1]} bind:group={relationalBooksMultiple} name="r_books" value="The Clean Coder">
									<p>The Clean Coder</p>
								</TreeViewItem>
								<TreeViewItem
									bind:this={childrenMultiple[2]}
									bind:group={relationalBooksMultiple}
									name="r_books"
									value="The Art of Unix Programming"
								>
									<p>The Art of Unix Programming</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem bind:group={relationalMediumMultiple} name="r_medium" value="movies">
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-film" />
							</svelte:fragment>
							<p>Movies</p>
						</TreeViewItem>
						<TreeViewItem bind:group={relationalMediumMultiple} name="r_medium" value="tv">
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-tv" />
							</svelte:fragment>
							<p>TV</p>
						</TreeViewItem>
					</TreeView>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let mediums = ['movies'];
let books: string[] = [];
let booksChildren: TreeViewItem[] = [];
`}
					/>
					<CodeBlock
						language="html"
						code={`
<TreeView selection multiple>
	<TreeViewItem bind:group={mediums} name="medium" value="books" children={children}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<p>Books</p>
		<svelte:fragment slot="children">
			<TreeViewItem bind:this={booksChildren[0]} bind:group={books} name="books" value="Clean Code">
				<p>Clean Code</p>
			</TreeViewItem>
			<TreeViewItem bind:this={booksChildren[1]} bind:group={books} name="books" value="The Clean Coder">
				<p>The Clean Coder</p>
			</TreeViewItem>
			<TreeViewItem bind:this={booksChildren[2]} bind:group={books} name="books" value="The Art of Unix Programming">
				<p>The Art of Unix Programming</p>
			</TreeViewItem>
		</svelte:fragment>
	</TreeViewItem>
	<!-- ... -->
</TreeView>
			`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>

		<hr />

		<!-- Recursive Mode -->
		<section class="space-y-4">
			<h2 class="h2">Recursive Mode</h2>
			<p>Tree views can be generated using a recursive data-driven method.</p>
			<DocsPreview background="neutral" regionFooter="flex justify-center gap-4">
				<svelte:fragment slot="preview">
					<TreeView bind:nodes={simpleDD} />
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let myTreeViewNodes: TreeViewNode[] = [
	{
		content: 'Books',
		lead: '(icon)',
		open: true,
		children: [
			{ content: 'Clean Code' },
			{ content: 'The Clean Coder' },
			{ content: 'The Art of Unix Programming' },
		]
	},
	// ...
]
						`}
					/>
					<CodeBlock
						language="html"
						code={`
<TreeView nodes={myTreeViewNodes}/>
						`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<!-- Single Selection -->
			<h3 class="h3">Single Selection</h3>
			<!-- prettier-ignore -->
			<p>
				Relational checking is automatically applied when generating your list in a recursive manner. Setting a child as <code class="code">checked</code> will not automatically affect the parent.
			</p>
			<DocsPreview background="neutral" regionFooter="flex justify-center gap-4">
				<svelte:fragment slot="preview">
					<TreeView bind:nodes={singleDD} selection />
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let myTreeViewNodes: TreeViewNode[] = [
	{
		content: 'Books',
		lead: '(icon)',
		open: true,
		checked: true,
		children: [
			{ content: 'Clean Code' },
			{ content: 'The Clean Coder' },
			{ content: 'The Art of Unix Programming', checked: true },
		]
	},
	// ...
]
						`}
					/>
					<CodeBlock
						language="html"
						code={`
<TreeView bind:nodes={myTreeViewNodes} selection/>
						`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<!-- Multiple Selection -->
			<h3 class="h3">Multiple Selection</h3>
			<p>Relational checking is automatically applied when generating your list in a recursive manner.</p>
			<DocsPreview background="neutral" regionFooter="flex justify-center gap-4">
				<svelte:fragment slot="preview">
					<TreeView bind:nodes={multipleDD} selection multiple />
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let myTreeViewNodes: TreeViewNode[] = [
	{
		content: 'Books',
		lead: '(icon)',
		open: true,
		indeterminate: true,
		children: [
			{ content: 'Clean Code' },
			{ content: 'The Clean Coder', checked: true },
			{ content: 'The Art of Unix Programming', checked: true },
		]
	},
	// ...
]
						`}
					/>
					<CodeBlock
						language="html"
						code={`
<TreeView bind:nodes={myTreeViewNodes} selection multiple/>
						`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
