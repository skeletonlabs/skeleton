<script lang="ts">
	// Docs
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { Counter, CodeBlock } from '@skeletonlabs/skeleton';

	// Sveld
	import sveldCounter from '@skeletonlabs/skeleton/components/Counter/Counter.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Counter',
		description: 'A scrolling list component',
		imports: ['Counter'],
		source: 'components/Counter',
		components: [{ sveld: sveldCounter }]
	};

	// Local
	const monthValues = [
		'January',
		'Feburary',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let direction: 'forward' | 'backward' | 'random' = 'forward';
	let index: any;
	let indexValue: any;
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview regionFooter="grid grid-cols-[100px_1fr] gap-4 items-center">
			<svelte:fragment slot="preview">
				<Counter {direction} values={monthValues} />
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="html" code={`<Counter values={monthValues} direction="${direction}" />`} />
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<div class="flex flex-row justify-center col-span-4 gap-8">
					<select class="select w-fit" bind:value={direction}>
						<option value="forward">Forward</option>
						<option value="backward">Backward</option>
						<option value="random">Random</option>
					</select>
				</div>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2 class="h2">Random Order</h2>
			<p>
				Setting the <code class="code">direction</code> property to <code class="code">random</code> specifies the items will iterate in random
				order
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<Counter direction="random" values={monthValues} />
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<Counter direction="random" values={monthValues} />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Data Binding</h2>
			<p>
				You can utilize svelte binding on the <code class="code">index</code> and <code class="code">currentValue</code> properties, and reference
				these values externally
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<Counter bind:index bind:currentValue={indexValue} values={monthValues} />
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<Counter bind:currentValue bind:index values={monthValues} />`} />
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="flex flex-row justify-center col-span-4 gap-8">
						{console.log({ index, indexValue })}
						<div class="card p-4 variant-filled w-fit">Current Value: {indexValue}</div>
						<div class="card p-4 variant-filled w-fit">Index: {index}</div>
					</div>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- <section class="space-y-4">
			<h2 class="h2">Content Formatting</h2>
			<p>
				Utilizing <a class="anchor" href="https://svelte.dev/docs#template-syntax-slot">slots</a> and
				<a class="anchor" href="https://svelte.dev/docs#template-syntax-slot-slot-key-value">slot keys</a> you can format the data in the scroller
				however you like
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<Counter values={monthValues} let:currentValue>
						<div>{currentValue.toUpperCase()}</div>
					</Counter>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`<Counter values={monthValues} let:currentValue>\n	<div>{currentValue.toUpperCase()}</div>\n</Counter>`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Variable Interval</h2>
			<p>Adjusting the <code class="code">interval</code> property changes how long until it stays on each item</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<Counter interval={500} values={monthValues} />
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<Counter interval={500} values={monthValues} />`} />
				</svelte:fragment>
			</DocsPreview>
		</section> -->
	</svelte:fragment>
</DocsShell>

<div class="flex flex-row justify-center col-span-4 gap-8">
	{console.log({ index, indexValue })}
	<div class="card p-4 variant-filled w-fit">Current Value: {indexValue}</div>
	<div class="card p-4 variant-filled w-fit">Index: {index}</div>
</div>
