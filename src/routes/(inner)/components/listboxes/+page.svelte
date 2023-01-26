<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import ListBox from '$lib/components/ListBox/ListBox.svelte';

	import sveldListBox from '$lib/components/ListBox/ListBox.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Listboxes',
		description: 'Interactive listboxes that maintain selection state.',
		imports: ['ListBox', 'ListBoxItem'],
		source: 'components/ListBox',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/listbox/',
		components: [{ label: 'ListBox', sveld: sveldListBox }],
		keyboard: [
			['<kbd>Tab</kbd>', 'Focus the next listbox item.'],
			['<kbd>Shift + Tab</kbd> ', 'Focus the previous listbox item.'],
			['<kbd>Enter</kbd> or <kbd>Space</kbd>', 'Toggles the current listbox item selection.']
		]
	};

	// Local
	let source = [
		{
			label: 'List Option 1',
			value: 1
		},
		{ label: 'List Option 2', value: 2 },
		{ label: 'List Option 3', value: 3 },
		{ label: 'List Option 4', value: 4 }
	];
	let valueSingle: number = 1;
	let valueMultiple: number[] = [1, 2];
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<div class="space-y-2">
				<div class="card variant-glass p-4">
					<label for="listbox-single" class="input-label">
						<span>Single</span>
						<ListBox name="listbox-single" bind:source bind:value={valueSingle} />
					</label>
				</div>
				<p class="text-center">Selected: <code>{valueSingle}</code></p>
			</div>
			<div class="space-y-2">
				<div class="card variant-glass p-4 space-y-4">
					<label for="listbox-multiple" class="input-label">
						<span>Multiple</span>
						<ListBox
							name="listbox-multiple"
							active="bg-secondary-active-token"
							hover="hover:bg-secondary-hover-token"
							bind:source
							bind:value={valueMultiple}
							multiple
						/>
					</label>
				</div>
				<p class="text-center">Selected: <code>{valueMultiple.join(',')}</code></p>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>Provide your source data containing an array of objects with <code>label</code> and <code>value</code> keys.</p>
			<CodeBlock
				language="typescript"
				code={`
let source = [
	{ label: 'List Option 1', value: 1 },
	{ label: 'List Option 2', value: 2 },
	{ label: 'List Option 3', value: 3 },
	{ label: 'List Option 4', value: 4 }
];
			`}
			/>
			<h3>Single Selection</h3>
			<p>Add a unique <code>name</code>, bind your <code>source</code>, then optionally bind your <code>value</code>.</p>
			<CodeBlock language="typescript" code={`let valueSingle: number = 1;`} />
			<CodeBlock language="html" code={`<ListBox name="listbox-single" bind:source bind:value={valueSingle} />`} />
			<h3>Multiple Selection</h3>
			<p>Add a unique <code>name</code>, bind your <code>source</code>, then optionally bind your <code>value</code>.</p>
			<CodeBlock language="typescript" code={`let valueMultiple: any[] = [1, 2];`} />
			<CodeBlock language="html" code={`<ListBox name="listbox-multiple" bind:source bind:value={valueMultiple} multiple />`} />
		</section>
		<section class="space-y-4">
			<h2>Native Alternatives</h2>
			<p>
				Consider using the native Select element with either the <code>size</code> for <code>multiple</code> attributes set to support single
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
