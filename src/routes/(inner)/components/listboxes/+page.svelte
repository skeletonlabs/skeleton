<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import ListBox from '$lib/components/ListBox/ListBox.svelte';
	import ListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte';

	import sveldListBox from '$lib/components/ListBox/ListBox.svelte?raw&sveld';
	import sveldListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte?raw&sveld';

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
			['<kbd>Tab</kbd>', 'Focus the next listbox item.'],
			['<kbd>Shift + Tab</kbd> ', 'Focus the previous listbox item.'],
			['<kbd>Enter</kbd> or <kbd>Space</kbd>', 'Toggles the current listbox item selection.']
		]
	};

	// Local
	let valueSingle: string = 'books';
	let valueMultiple: string[] = ['books', 'movies'];
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div class="space-y-2">
				<div class="card variant-glass p-4 space-y-4">
					<label for="" class="space-y-4">
						<span>Single Selection</span>
						<ListBox>
							<ListBoxItem bind:group={valueSingle} name="books" value="books">
								<svelte:fragment slot="lead"><i class="fa-solid fa-book w-6 text-center" /></svelte:fragment>
								Books
							</ListBoxItem>
							<ListBoxItem bind:group={valueSingle} name="movies" value="movies">
								<svelte:fragment slot="lead"><i class="fa-solid fa-film w-6 text-center" /></svelte:fragment>
								Movies
							</ListBoxItem>
							<ListBoxItem bind:group={valueSingle} name="television" value="television">
								<svelte:fragment slot="lead"><i class="fa-solid fa-tv w-6 text-center" /></svelte:fragment>
								Television
							</ListBoxItem>
						</ListBox>
					</label>
				</div>
				<p class="text-center">Selected: <code>{valueSingle}</code></p>
			</div>
			<div class="space-y-2">
				<div class="card variant-glass p-4 space-y-4">
					<label for="" class="space-y-4">
						<span>Multiple Selection</span>
						<ListBox active="variant-filled-primary" hover="hover:variant-soft-primary" multiple>
							<ListBoxItem bind:group={valueMultiple} name="books" value="books">
								<svelte:fragment slot="lead"><i class="fa-solid fa-book w-6 text-center" /></svelte:fragment>
								Books
							</ListBoxItem>
							<ListBoxItem bind:group={valueMultiple} name="movies" value="movies">
								<svelte:fragment slot="lead"><i class="fa-solid fa-film w-6 text-center" /></svelte:fragment>
								Movies
							</ListBoxItem>
							<ListBoxItem bind:group={valueMultiple} name="television" value="television">
								<svelte:fragment slot="lead"><i class="fa-solid fa-tv w-6 text-center" /></svelte:fragment>
								Television
							</ListBoxItem>
						</ListBox>
					</label>
				</div>
				<p class="text-center">Selected: <code>{valueMultiple.length ? valueMultiple : 'None'}</code></p>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h3>Single Selection</h3>
			<p>By default the listbox uses a native <u>radio inputs</u> to ensure only one item is selcted at a time.</p>
			<CodeBlock language="ts" code={`let valueSingle: string = 'books';`} />
			<CodeBlock
				language="html"
				code={`
<ListBox>
	<ListBoxItem bind:group={valueSingle} name="books" value="books">Books</ListBoxItem>
	<ListBoxItem bind:group={valueSingle} name="movies" value="movies">Movies</ListBoxItem>
	<ListBoxItem bind:group={valueSingle} name="television" value="television">Television</ListBoxItem>
</ListBox>
			`}
			/>
			<h3>Multiple Selection</h3>
			<p>
				By adding the <code>multiple</code> property, the component uses native <u>checkboxes inputs</u>, which allows for multi-select.
			</p>
			<CodeBlock language="ts" code={`let valueMultiple: string[] = ['books', 'movies'];`} />
			<CodeBlock language="html" code={`<ListBox multiple>...</ListBox>`} />
		</section>
		<section class="space-y-4">
			<h2>Lead and Trail Slots</h2>
			<p>Each Listbox item supports a <code>lead</code> and <code>trail</code> slot, which can be useful for icons or actions.</p>
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
			<h2>Native Alternatives</h2>
			<p>
				Consider using the native Select element with either the <code>size</code> or <code>multiple</code> attributes set to support single
				or multiple selection respectively. However, please be aware that Safari (macOS) does not support all style values.
			</p>
			<section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<!-- Single -->
				<label class="input-label">
					<span>Select (single)</span>
					<select size="4" value="1">
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
						<option value="3">Option 3</option>
						<option value="4">Option 4</option>
						<option value="5">Option 5</option>
					</select>
				</label>
				<!-- Multiple -->
				<label class="input-label">
					<span>Select (multiple)</span>
					<select multiple value={['1', '2']}>
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
						<option value="3">Option 3</option>
						<option value="4">Option 4</option>
						<option value="5">Option 5</option>
					</select>
				</label>
			</section>
		</section>
	</svelte:fragment>
</DocsShell>
