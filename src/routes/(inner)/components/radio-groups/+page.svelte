<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error sveld import
	import sveldRadioGroup from '$lib/components/Radio/RadioGroup.svelte?raw&sveld';
	// @ts-expect-error sveld import
	import sveldRadioItem from '$lib/components/Radio/RadioItem.svelte?raw&sveld';

	// Stores
	const storeJustify = writable(0);
	const storeLayout: Writable<string> = writable('horz');

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Radio Groups',
		description: 'Capture feedback limited to a small set of options.',
		imports: ['RadioGroup', 'RadioItem'],
		source: 'components/Radio',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/',
		restProps: 'RadioItem input',
		components: [
			{ label: 'RadioGroup', sveld: sveldRadioGroup },
			{ label: 'RadioItem', sveld: sveldRadioItem, overrideProps: ['padding', 'hover', 'accent', 'color', 'fill', 'rounded'] }
		],
		keyboard: [
			['<kbd>Tab</kbd>', 'Moves focus to the next focusable RadioItem.'],
			['<kbd>Shift + Tab</kbd> ', 'Moves focus to the previous focusable RadioItem.'],
			['<kbd>Space</kbd> or <kbd>Enter</kbd>', 'Checks the focused radio button if it is not already checked']
		]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<!-- Icons -->
			<div class="card p-4 space-y-4 text-center">
				<RadioGroup selected={storeJustify}>
					<RadioItem value={0} label="Align Left">
						<i class="fa-solid fa-align-left" />
					</RadioItem>
					<RadioItem value={1} label="Align Middle">
						<i class="fa-solid fa-align-center" />
					</RadioItem>
					<RadioItem value={2} label="Align Right">
						<i class="fa-solid fa-align-right" />
					</RadioItem>
				</RadioGroup>
				<p>Selected <code>{$storeJustify}</code></p>
			</div>
			<!-- Text -->
			<div class="card p-4 space-y-4 text-center">
				<RadioGroup selected={storeLayout} accent="bg-primary-active-token" hover="bg-primary-hover-token">
					<RadioItem value="horz">Horizontal</RadioItem>
					<RadioItem value="vert">Vertical</RadioItem>
				</RadioGroup>
				<p>Selected <code>{$storeLayout}</code></p>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<CodeBlock language="typescript" code={`import { writable, type Writable } from 'svelte/store';`} />
			<CodeBlock language="typescript" code={`const storeLayout: Writable<string> = writable('horz');`} />
			<CodeBlock
				language="html"
				code={`
<RadioGroup selected={storeLayout}>
	<RadioItem value="horz">Horizontal</RadioItem>
	<RadioItem value="vert">Vertical</RadioItem>
</RadioGroup>`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Full Width Display</h2>
			<p>To set display width to 100% use <code>display="flex"</code></p>
			<CodeBlock language="html" code={`<RadioGroup display="flex"></RadioGroup>`} />
		</section>
	</svelte:fragment>
</DocsShell>
