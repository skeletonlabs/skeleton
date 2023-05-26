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
	const numbers = Array.from({ length: 100 }, (_, i) => new String(i));
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
	let currentValue: any;
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview regionFooter="grid grid-cols-[100px_1fr] gap-4 items-center">
			<svelte:fragment slot="preview">
				<p>
					I can count to <Counter {direction} values={numbers} />
				</p>
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
					<Counter height="h-8" width="w-28" direction="random" values={monthValues} />
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<Counter direction="random" values={monthValues} />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Multi-line</h2>
			<p>Usage in a multi-line string</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<p class="prose">
						<Counter
							height="h-24"
							values={[
								"This is an exceptionally long string, Like Super Duper Long. I don't think you can truly understand how long this string is.",
								'Its pretty long',
								'But it still works'
							]}
						/>
					</p>
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
					<Counter bind:currentValue values={monthValues} />
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<Counter bind:currentValue values={monthValues} />`} />
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="flex flex-row justify-center col-span-4 gap-8">
						<div class="card p-4 variant-filled w-fit">Current Value: {currentValue}</div>
					</div>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Content Formatting</h2>
			<p>
				Utilizing <a class="anchor" href="https://svelte.dev/docs#template-syntax-slot">slots</a> and
				<a class="anchor" href="https://svelte.dev/docs#template-syntax-slot-slot-key-value">slot keys</a> you can format the data in the scroller
				however you like
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<p>
						My favorite month is <Counter values={monthValues} let:currentValue>
							{currentValue.toLowerCase()}
						</Counter>
					</p>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`<p>\n	My favorite month is <Counter values={monthValues} let:currentValue>\n		{currentValue.toLowerCase()}\n	</Counter>\n</p>`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Variable Interval</h2>
			<p>Adjusting the <code class="code">interval</code> property changes how long it stays on each value</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<p>
						Party like <Counter
							background="bg-success-backdrop-token"
							padding="px-3"
							rounded="rounded-token"
							interval={2000}
							values={["it's 1999", "it's the end of the world", "it's ya birthday", 'a rockstar']}
						/>
					</p>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`<p>\n	Party like <Counter\n		background="bg-tertiary-backdrop-token"\n		padding="px-3"\n		rounded="rounded-xl"\n		interval={2000}\n		values={["it's 1999", "it's the end of the world", "it's ya birthday", 'a rockstar']}\n	/>\n</p>`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
