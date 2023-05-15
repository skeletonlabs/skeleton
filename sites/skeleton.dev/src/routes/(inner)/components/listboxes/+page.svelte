<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { CodeBlock, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldListBox from '@skeletonlabs/skeleton/components/ListBox/ListBox.svelte?raw&sveld';
	import sveldListBoxItem from '@skeletonlabs/skeleton/components/ListBox/ListBoxItem.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Listboxes',
		description: 'Interactive listboxes that maintain selection state.',
		imports: ['ListBox', 'ListBoxItem'],
		source: 'components/ListBox',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/listbox/',
		components: [
			{ label: 'ListBox', sveld: sveldListBox },
			{ label: 'ListBoxItem', sveld: sveldListBoxItem, overrideProps: ['rounded', 'active', 'hover', 'padding'] }
		],
		keyboard: [
			['<kbd class="kbd">Tab</kbd>', 'Focus the next listbox item.'],
			['<kbd class="kbd">Shift + Tab</kbd> ', 'Focus the previous listbox item.'],
			['<kbd class="kbd">Enter</kbd> or <kbd class="kbd">Space</kbd>', 'Toggles the current listbox item selection.']
		]
	};

	// Local
	let valueSingle = 'books';
	let valueMultiple = ['books', 'movies'];
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="w-full max-w-[480px] card p-4 text-token">
					<ListBox>
						<ListBoxItem bind:group={valueSingle} name="medium" value="books">
							<svelte:fragment slot="lead"><i class="fa-solid fa-book text-xs w-6 text-center" /></svelte:fragment>
							Books
						</ListBoxItem>
						<ListBoxItem bind:group={valueSingle} name="medium" value="movies">
							<svelte:fragment slot="lead"><i class="fa-solid fa-film text-xs w-6 text-center" /></svelte:fragment>
							Movies
						</ListBoxItem>
						<ListBoxItem bind:group={valueSingle} name="medium" value="television">
							<svelte:fragment slot="lead"><i class="fa-solid fa-tv text-xs w-6 text-center" /></svelte:fragment>
							Television
						</ListBoxItem>
					</ListBox>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<div class="text-center"><code class="code">Selected: {valueSingle}</code></div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="ts" code={`let valueSingle: string = 'books';`} />
				<CodeBlock
					language="html"
					code={`
<ListBox>
	<ListBoxItem bind:group={valueSingle} name="medium" value="books">Books</ListBoxItem>
	<ListBoxItem bind:group={valueSingle} name="medium" value="movies">Movies</ListBoxItem>
	<ListBoxItem bind:group={valueSingle} name="medium" value="tv">TV</ListBoxItem>
</ListBox>
			`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>By default the listbox uses a native <em>radio inputs</em> to ensure only one item is selected at a time.</p>
		</section>
		<section class="space-y-4">
			<h3 class="h3">Multiple Selection</h3>
			<p>
				By adding the <code class="code">multiple</code> property, the component uses native <em>checkbox inputs</em>, which allows for
				multi-select.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<ListBox active="variant-filled-primary" hover="hover:variant-soft-primary" multiple class="w-full max-w-[480px]">
						<ListBoxItem bind:group={valueMultiple} name="medium" value="books">
							<svelte:fragment slot="lead"><i class="fa-solid fa-book w-6 text-center" /></svelte:fragment>
							Books
						</ListBoxItem>
						<ListBoxItem bind:group={valueMultiple} name="medium" value="movies">
							<svelte:fragment slot="lead"><i class="fa-solid fa-film w-6 text-center" /></svelte:fragment>
							Movies
						</ListBoxItem>
						<ListBoxItem bind:group={valueMultiple} name="medium" value="television">
							<svelte:fragment slot="lead"><i class="fa-solid fa-tv w-6 text-center" /></svelte:fragment>
							Television
						</ListBoxItem>
					</ListBox>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="text-center"><code class="code">Selected: {valueMultiple.length ? valueMultiple : 'None'}</code></div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="ts" code={`let valueMultiple: string[] = ['books', 'movies'];`} />
					<CodeBlock
						language="html"
						code={`
<ListBox multiple>
	<ListBoxItem bind:group={valueMultiple} name="medium" value="books">Books</ListBoxItem>
	<ListBoxItem bind:group={valueMultiple} name="medium" value="movies">Movies</ListBoxItem>
	<ListBoxItem bind:group={valueMultiple} name="medium" value="tv">TV</ListBoxItem>
</ListBox>
			`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Lead and Trail Slots</h2>
			<p>
				Each Listbox item supports a <code class="code">lead</code> and <code class="code">trail</code> slot, which can be useful for icons or
				actions.
			</p>
			<CodeBlock
				language="html"
				code={`
<ListBoxItem bind:group={valueSingle} name="books" value="books">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	(label)
	<svelte:fragment slot="trail">(icon)</svelte:fragment>
</ListBoxItem>
			`}
			/>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Native Alternatives</h2>
			<p>
				Consider using the native Select element with either the <code class="code">size</code> or <code class="code">multiple</code> attributes
				set to support single or multiple selection respectively. However, please be aware that Safari (macOS) does not support all styles.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<select class="select w-full max-w-[480px]" size="4" value="1">
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
						<option value="3">Option 3</option>
						<option value="4">Option 4</option>
						<option value="5">Option 5</option>
					</select>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<select class="select" size="4" value="1">
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
	<option value="4">Option 4</option>
	<option value="5">Option 5</option>
</select>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
