<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import RangeSlider from '$lib/components/RangeSlider/RangeSlider.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldRangeSlider from '$lib/components/RangeSlider/RangeSlider.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Range Sliders',
		description: 'Capture input from a range of values, including optional ticks.',
		imports: ['RangeSlider'],
		source: 'components/RangeSlider',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/slider/',
		components: [{ sveld: sveldRangeSlider }],
		restProps: 'input',
		keyboard: [
			['<kbd class="kbd">Right Arrow</kbd> or <kbd class="kbd">Up Arrow</kbd>', 'Increase the value of the slider by one step.'],
			['<kbd class="kbd">Left Arrow</kbd> or <kbd class="kbd">Down Arrow</kbd>', 'Decrease  the value of the slider by one step.'],
			['<kbd class="kbd">Home</kbd>', 'Set the slider to the first allowed value in its range.'],
			['<kbd class="kbd">End</kbd>', 'Set the slider to the last allowed value in its range.'],
			['<kbd class="kbd">Page Up</kbd>', 'Increase the slider value by a large amount.'],
			['<kbd class="kbd">Page Down</kbd>', 'Decrease  the slider value by a large amount.']
		]
	};

	// Local
	let value = 15;
	let max = 25;
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="w-full">
					<RangeSlider name="range-slider" bind:value max={25} step={1} ticked />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="ts" code={`let value = 15;`} />
				<CodeBlock
					language="html"
					code={`<RangeSlider name="range-slider" bind:value={value} max={25} step={1} ticked>Label</RangeSlider>`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<!-- prettier-ignore -->
			<p>Combines a <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range" target="_blank" rel="noreferrer">native range input</a> with <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#adding_tick_marks" target="_blank" rel="noreferrer">datalist ticks</a> to create a powerful range slider element.</p>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Labeled</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full">
						<RangeSlider name="range-slider" bind:value max={25} step={1} ticked>
							<div class="flex justify-between items-center">
								<div class="font-bold">Label</div>
								<div class="text-xs">{value} / {max}</div>
							</div>
						</RangeSlider>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="ts" code={`let value = 15;\nlet max = 25;`} />
					<CodeBlock
						language="html"
						code={`
<RangeSlider name="range-slider" bind:value={value} max={25} step={1} ticked>
	<div class="flex justify-between items-center">
		<div class="font-bold">Label</div>
		<div class="text-xs">{value} / {max}</div>
	</div>
</RangeSlider>`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Browser Support</h2>
			<!-- prettier-ignore -->
			<p>
				Please be aware that <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#browser_compatibility" target="_blank" rel="noreferrer">browser support</a> varies. Safari (macOS/iOS) does not visually display the ticks. However, the ticks are progressive enhancement feature, and Safari it will honor the <code class="code">max</code> and <code class="code">step</code> settings in relation to the value.
			</p>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
				<div class="card p-2 !bg-green-500 text-black">
					<h4 class="h4">Chrome</h4>
					<span>Full</span>
				</div>
				<div class="card p-2 !bg-green-500 text-black">
					<h4 class="h4">Edge</h4>
					<span>Full</span>
				</div>
				<div class="card p-2 !bg-yellow-500 text-black">
					<h4 class="h4">Safari</h4>
					<span>Partial</span>
				</div>
				<div class="card p-2 !bg-green-500 text-black">
					<h4 class="h4">Firefox</h4>
					<span>Full</span>
				</div>
			</div>
		</section>
	</svelte:fragment>
</DocsShell>
