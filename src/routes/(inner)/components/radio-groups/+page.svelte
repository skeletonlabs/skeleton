<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-ignore
	import sveldRadioGroup from '$lib/components/Radio/RadioGroup.svelte?raw&sveld';
	// @ts-ignore
	import sveldRadioItem from '$lib/components/Radio/RadioItem.svelte?raw&sveld';

	// Stores
	const storeJustify = writable(0);
	const storeLayout: Writable<string> = writable('horz');

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'RadioGroup',
		description: 'Capture feedback limited to a small set of options.',
		imports: ['RadioGroup', 'RadioItem'],
		source: 'components/Radio',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/',
		sveld: [
			{ label: 'RadioGroup', source: sveldRadioGroup },
			{ label: 'RadioItem', source: sveldRadioItem }
		],
		classes: [
			{
				label: 'RadioGroup',
				headings: ['Selector', 'Description'],
				source: [['<code>.radio-group</code>', 'The parent element.']]
			},
			{
				label: 'RadioItem',
				headings: ['Selector', 'Description'],
				source: [
					['<code>.radio-item</code>', 'The parent element.'],
					['<code>.radio-item-label</code>', 'The label element.'],
					['<code>.radio-item-item</code>', 'The hidden input element.']
				]
			}
		],
		keyboard: [
			['<kbd>Tab</kbd>', 'Moves focus to the next focusable RadioItem.'],
			['<kbd>Shift + Tab</kbd> ', 'Moves focus to the previous focusable RadioItem.'],
			['<kbd>Space</kbd> or <kbd>Enter</kbd>', 'Checks the focused radio button if it is not already checked']
		]
	};
	// const properties: DocsShellTable[] = [
	// 	{
	// 		label: 'RadioGroup',
	// 		headings: ['Prop', 'Type', 'Values', 'Required', 'Description'],
	// 		source: [
	// 			['<code>selected</code>', 'Writable', 'any', '&check;', 'Provide a Svelte writable to store the selected state value.'],
	// 			['<code>display</code>', 'string', 'inline-flex', '-', 'Provide classes to set the display style.'],
	// 			['<code>background</code>', 'string', 'bg-surface-200-700-token', '-', 'Provide classes to set the base background color.'],
	// 			['<code>hover</code>', 'string', 'bg-accent-hover-token', '-', 'Provide classes to set the hover style.'],
	// 			['<code>accent</code>', 'string', 'bg-accent-active-token', '-', 'Provide classes to set the highlighted accent color.'],
	// 			['<code>color</code>', 'string', '-', 'text-surface-50', 'Provide classes to set the highlighted text color.'],
	// 			['<code>fill</code>', 'string', '-', '-', 'Provide classes to set the highlighted SVG fill color.'],
	// 			['<code>rounded</code>', 'string', 'rounded-token', '-', 'Provide classes to set the border radius.']
	// 		]
	// 	},
	// 	{
	// 		label: 'RadioItem',
	// 		description: 'Can override <code>hover</code>, <code>accent</code>, <code>color</code>, <code>fill</code>, <code>rounded</code>.',
	// 		headings: ['Prop', 'Type', 'Description'],
	// 		source: [['<code>value</code>', 'any', `The item's selection value.`]]
	// 	}
	// ];
	// const slots: DocsShellTable[] = [
	// 	{
	// 		label: 'RadioGroup',
	// 		headings: ['Name', 'Description'],
	// 		source: [['<code>default</code>', 'Accepts a set of RadioItem components.']]
	// 	},
	// 	{
	// 		label: 'RadioItem',
	// 		headings: ['Name', 'Description'],
	// 		source: [['<code>default</code>', 'The radio item label contents.']]
	// 	}
	// ];
	// const a11y: DocsShellTable[] = [
	// 	{
	// 		label: 'RadioGroup',
	// 		headings: ['Prop', 'Description'],
	// 		source: [['<code>label</code>', `Defines a semantic ARIA label.`]]
	// 	},
	// 	{
	// 		label: 'RadioItem',
	// 		headings: ['Prop', 'Description'],
	// 		source: [['<code>label</code>', `Defines a semantic ARIA label.`]]
	// 	},
	// ];
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<!-- Icons -->
			<div class="card card-body space-y-4 text-center">
				<RadioGroup selected={storeJustify}>
					<RadioItem value={0} label="Align Left">
						<SvgIcon name="align-left" class="-translate-y-[2px]" />
					</RadioItem>
					<RadioItem value={1} label="Align Middle">
						<SvgIcon name="align-justify" class="-translate-y-[2px]" />
					</RadioItem>
					<RadioItem value={2} label="Align Right">
						<SvgIcon name="align-right" class="-translate-y-[2px]" />
					</RadioItem>
				</RadioGroup>
				<p>Selected <code>{$storeJustify}</code></p>
			</div>
			<!-- Text -->
			<div class="card card-body space-y-4 text-center">
				<RadioGroup selected={storeLayout} accent="bg-active-token" hover="bg-hover-token">
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
