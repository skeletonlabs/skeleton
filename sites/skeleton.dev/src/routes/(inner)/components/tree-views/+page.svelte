<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
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
		imports: ['TreeView', 'TreeViewItem'],
		source: 'components/TreeView',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/treeview/',
		components: [
			{ label: 'TreeView', sveld: sveldTreeView },
			{
				label: 'TreeViewItem',
				sveld: sveldTreeViewItem,
				overrideProps: []
			}
		]
	};

	// Locals
	let mediumSingle: string = 'books';
	let booksSingle: string = 'Clean Code';
	let relationalMediumSingle: string = 'books';
	let relationalBooksSingle: string = 'Clean Code';
	let childrenSingle: TreeViewItem[] = [];

	let mediumMultiple = ['books', 'movies'];
	let booksMultiple = ['Clean Code', 'The Art of Unix Programming'];
	let relationalMediumMultiple = ['movies'];
	let relationalBooksMultiple: string[] = [];
	let childrenMultiple: TreeViewItem[] = [];
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
		<svelte:fragment slot="lead">
			(icon)
		</svelte:fragment>
		(item 1)
	</TreeViewItem>
</TreeView>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Selection -->
		<section class="space-y-4">
			<h2 class="h2">Selection</h2>
			<p>Enable selection using the prop <code class="code">selection</code></p>
			<!-- Single -->
			<h3 class="h3">Single</h3>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<TreeView selection={true}>
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
let mediumSingle: string = 'books';
let booksSingle: string = 'Clean Code';
`}
					/>
					<CodeBlock
						language="html"
						code={`
<TreeView selection={true}>
	<TreeViewItem bind:group={mediumSingle} name="medium" value="books">
		<svelte:fragment slot="lead">
			(icon)
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
			(icon)
		</svelte:fragment>
		<p>Movies</p>
	</TreeViewItem>
	<TreeViewItem bind:group={mediumSingle} name="medium" value="tv">
		<svelte:fragment slot="lead">
			(icon)
		</svelte:fragment>
		<p>TV</p>
	</TreeViewItem>
</TreeView>
			`}
					/>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="text-center"><code class="code">Selected medium: {mediumSingle} <br /> Selected book: {booksSingle}</code></div>
				</svelte:fragment>
			</DocsPreview>
			<!-- Multiple -->
			<h3 class="h3">Multiple</h3>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<TreeView selection={true} multiple={true}>
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
let mediumMultiple = ['books', 'movies'];
let booksMultiple = ['Clean Code', 'The Art of Unix Programming']
`}
					/>
					<CodeBlock
						language="html"
						code={`
<TreeView selection={true} multiple={true}>
	<TreeViewItem bind:group={mediumMultiple} name="medium" value="books">
		<svelte:fragment slot="lead">
			(icon)
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
			(icon)
		</svelte:fragment>
		<p>Movies</p>
	</TreeViewItem>
	<TreeViewItem bind:group={mediumMultiple} name="medium" value="tv">
		<svelte:fragment slot="lead">
			(icon)
		</svelte:fragment>
		<p>TV</p>
	</TreeViewItem>
</TreeView>
			`}
					/>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="text-center">
						<code class="code"
							>Selected mediums: {mediumMultiple.length ? mediumMultiple : 'None'} <br /> Selected books: {booksMultiple.length
								? booksMultiple
								: 'None'}</code
						>
					</div>
				</svelte:fragment>
			</DocsPreview>
			<!-- Relational -->
			<h3 class="h3">Relational</h3>
			<p>
				By passing children references to a parent <code class="code">TreeViewItem</code>, the check value of the parent will be relational,
				meaning it will react to the check value of the children.
			</p>
			<DocsPreview background="neutral" regionFooter="text-center">
				<svelte:fragment slot="preview">
					<TreeView selection={true}>
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
let mediumSingle: string = 'books';
let booksSingle: string = 'Clean Code';
let children: TreeViewItem[] = [];
`}
					/>
					<CodeBlock
						language="html"
						code={`
<TreeView selection={true}>
	<TreeViewItem bind:group={mediumSingle} name="medium" value="books" children={children}>
		<svelte:fragment slot="lead">
			(icon)
		</svelte:fragment>
		<p>Books</p>
		<svelte:fragment slot="children">
			<TreeViewItem bind:this={children[0]} bind:group={booksSingle} name="books" value="Clean Code">
				<p>Clean Code</p>
			</TreeViewItem>
			<TreeViewItem bind:this={children[1]} bind:group={booksSingle} name="books" value="The Clean Coder">
				<p>The Clean Coder</p>
			</TreeViewItem>
			<TreeViewItem bind:this={children[2]} bind:group={booksSingle} name="books" value="The Art of Unix Programming">
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
					<p>Select <code class="code">Movies</code> to see relational checking.</p>
				</svelte:fragment>
			</DocsPreview>
			<DocsPreview background="neutral" regionFooter="text-center">
				<svelte:fragment slot="preview">
					<TreeView selection={true} multiple={true}>
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
let mediumMultiple = ['movies'];
let booksMultiple: string[] = [];
let children: TreeViewItem[] = [];
`}
					/>
					<CodeBlock
						language="html"
						code={`
<TreeView selection={true} multiple={true}>
	<TreeViewItem bind:group={mediumMultiple} name="medium" value="books" children={children}>
		<svelte:fragment slot="lead">
			(icon)
		</svelte:fragment>
		<p>Books</p>
		<svelte:fragment slot="children">
			<TreeViewItem bind:this={children[0]} bind:group={booksMultiple} name="books" value="Clean Code">
				<p>Clean Code</p>
			</TreeViewItem>
			<TreeViewItem bind:this={children[1]} bind:group={booksMultiple} name="books" value="The Clean Coder">
				<p>The Clean Coder</p>
			</TreeViewItem>
			<TreeViewItem bind:this={children[2]} bind:group={booksMultiple} name="books" value="The Art of Unix Programming">
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
					<p>Select children of <code class="code">Books</code> to see relational checking.</p>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Disabled</h2>
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
					<CodeBlock
						language="html"
						code={`
<!-- Disable tree -->
<TreeView disabled>
	<!-- ... -->
</TreeView>

<!-- Disable tree items -->
<TreeView>
	<TreeViewItem disabled>
		<!-- ... -->
	</TreeViewItem>
	<!-- Opened, disabled Tree item -->
	<TreeViewItem open disabled>
		<!-- ... -->
	</TreeViewItem>
</TreeView>
			`}
					/>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<p>Select children of <code class="code">Books</code> to see relational checking.</p>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
