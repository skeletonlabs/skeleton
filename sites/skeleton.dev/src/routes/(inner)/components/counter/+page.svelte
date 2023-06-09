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
		description: 'A scrolling list component.',
		imports: ['Counter'],
		source: 'components/Counter',
		components: [{ sveld: sveldCounter }]
	};

	// Local
	const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const partyPhrases = ['1999', 'the end of the world', 'ya birthday'];

	let direction: 'forward' | 'backward' | 'random' = 'forward';
	let index: any;
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview regionPreview="text-on-primary-token" regionFooter="grid grid-cols-[100px_1fr] gap-4 items-center">
			<svelte:fragment slot="preview">
				<p>I can count to <Counter {direction} weight="font-bold" /></p>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="html" code={`<Counter values={months} direction="${direction}" />`} />
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
			<h2 class="h2">Interval</h2>
			<p>Adjusting the <code class="code">interval</code> property changes how long it stays on each value</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<p>
						Party like it's <Counter
							color="text-primary-500"
							weight="font-bold"
							class="transition-all duration-200"
							interval={2000}
							values={partyPhrases}
						/>
					</p>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="ts" code={`const partyPhrases = ['1999', 'the end of the world', 'ya birthday'];`} />
					<CodeBlock language="html" code={`<p>Party like it's <Counter interval={2000} values={partyPhrases} /></p>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Binding</h2>
			<p>Use <code class="code">bind:index</code> to retrieve the current visible <em>index</em> and <em>value</em>.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<Counter bind:index values={months} />
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="ts" code={`let index: any;`} />
					<CodeBlock language="html" code={`<Counter bind:index values={months} />`} />
					<CodeBlock language="html" code={`<pre class="pre">index: {index}, current: {months[index]}</pre>`} />
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="flex flex-row justify-center col-span-4 gap-8">
						<code class="code">index: {index}, value: {months[index]}</code>
					</div>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Multi-Line</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<p class="prose">
						<Counter
							height="h-24"
							values={[
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, est. Optio velit tempora facilis voluptas voluptate dolores magnam doloremque voluptates omnis eum? Unde reiciendis, eius sunt ab aut vel facere!',
								'This is a normal size line.',
								'Another normal sized line.'
							]}
						/>
					</p>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<Counter
	height="h-24"
	values={[
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, est. Optio velit tempora facilis voluptas voluptate dolores magnam doloremque voluptates omnis eum? Unde reiciendis, eius sunt ab aut vel facere!',
		'This is a normal size line.',
		'Another normal sized line.'
	]}
/>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Formatting</h2>
			<p>
				Use <a class="anchor" href="https://svelte.dev/docs#template-syntax-slot">slots</a> and
				<a class="anchor" href="https://svelte.dev/docs#template-syntax-slot-slot-key-value">slot keys</a> to format the display of the current
				value.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<p>
						My favorite month is <Counter values={months} color="text-primary-500" weight="font-bold" let:current>
							{current.toLowerCase()}
						</Counter>
					</p>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<p>
	My favorite month is <Counter values={months} let:current>
		{current.toLowerCase()}
	</Counter>
</p>
						`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
