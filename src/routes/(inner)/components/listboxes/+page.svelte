<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import ListBox from '$lib/components/ListBox/ListBox.svelte';
	import ListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte';

	// @ts-expect-error sveld import
	import sveldListBox from '$lib/components/ListBox/ListBox.svelte?raw&sveld';
	// @ts-expect-error sveld import
	import sveldListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte?raw&sveld';

	// Stores
	let navSingle: Writable<number> = writable(1);
	let navMultiple: Writable<string[]> = writable(['A', 'B']);

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
			{ label: 'ListBoxItem', sveld: sveldListBoxItem, overrideProps: ['accent', 'padding', 'rounded', 'hover'] }
		]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<!-- Single -->
			<div class="card p-4 space-y-4">
				<ListBox selected={navSingle} label="Single Selection">
					<ListBoxItem value={1}>Item 1</ListBoxItem>
					<ListBoxItem value={2}>Item 2</ListBoxItem>
					<ListBoxItem value={3}>Item 3</ListBoxItem>
				</ListBox>
				<p class="text-center">Selected: <code>{$navSingle}</code></p>
			</div>
			<!-- Multiple -->
			<div class="card p-4 space-y-4">
				<ListBox selected={navMultiple} label="Multi-Selection" hover="bg-secondary-hover-token" accent="!bg-secondary-active-token">
					<ListBoxItem value={'A'}>Item A</ListBoxItem>
					<ListBoxItem value={'B'}>Item B</ListBoxItem>
					<ListBoxItem value={'C'}>Item C</ListBoxItem>
				</ListBox>
				<p class="text-center">Selected: <code>{$navMultiple}</code></p>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2>Single Value</h2>
			<p>Define a writable store with a <u>singular</u> value of any type, then add a <code>value</code> prop to each child.</p>
			<CodeBlock language="typescript" code={`import { writable, type Writable } from 'svelte/store';`} />
			<CodeBlock language="typescript" code={`const storeSingle: Writable<number> = writable(1);`} />
			<CodeBlock
				language="html"
				code={`
<ListBox selected="{storeSingle}" label="Single Selection">
	<ListBoxItem value={1}>Selection Example 1</ListBoxItem>
	<ListBoxItem value={2}>Selection Example 2</ListBoxItem>
</ListBox>`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Multiple Values</h2>
			<p>Create a writable with an <u>array</u> of values.</p>
			<CodeBlock language="typescript" code={`import { writable, type Writable } from 'svelte/store';`} />
			<CodeBlock language="typescript" code={`let storeMultiple: Writable<any[]> = writable(['A', 'B']);`} />
			<CodeBlock
				language="html"
				code={`
<ListBox selected={storeMultiple} label="Multi-Selection">
	<ListBoxItem value={'A'}>Item A</ListBoxItem>
	<ListBoxItem value={'B'}>Item B</ListBoxItem>
	<ListBoxItem value={'C'}>Item C</ListBoxItem>
</ListBox>`}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
