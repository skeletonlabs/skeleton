<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { DataTable, RadioGroup, RadioItem } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	const storeJustify = writable(0);
	const storeLayout: Writable<string> = writable('horz');

	// Props & Slots
	const tablePropsGroup: any = {
		headings: ['Prop', 'Type', 'Values', 'Required', 'Description'],
		source: [
			['selected', 'Writable', 'any', '&check;', 'Provide a Svelte writable to store the selected state value.'],
			['display', 'string', 'inline-flex', '-', 'Provide classes to set the display style.'],
			['background', 'string', 'bg-surface-300 dark:bg-surface-700', '-', 'Provide classes to set the base background color.'],
			['hover', 'string', 'hover:bg-primary-500/10', '-', 'Provide classes to set the hover style.'],
			['accent', 'string', 'bg-primary-500 !text-white', '-', 'Provide classes to set the highlighted accent color.'],
			['color', 'string', 'text-white', '-', 'Provide classes to set the highlighted text color.'],
			['fill', 'string', '-', '-', 'Provide classes to set the highlighted SVG fill color.'],
			['rounded', 'string', 'rounded', '-', 'Provide classes to set the border radius.']
		]
	};
	const tablePropsItem: any = {
		headings: ['Prop', 'Type', 'Description'],
		source: [['value', 'any', `The item's selection value.`]]
	};
	const tableA11yGroup: any = {
		headings: ['Prop', 'Required', 'Description'],
		source: [['label', '-', `Defines a semantic ARIA label.`]]
	};
	const tableA11yItem: any = {
		headings: ['Prop', 'Required', 'Description'],
		source: [['label', '-', `Defines a semantic ARIA label.`]]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Radio Groups</h1>
		<p>Capture user feedback limited to a small set of options.</p>
		<CodeBlock language="js" code={`import { RadioGroup, RadioItem } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<div class="card card-body grid grid-cols-1 gap-4 text-center">
			<div>
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
			</div>
			<p>Selected <code>{$storeJustify}</code></p>
		</div>
		<div class="card card-body grid grid-cols-1 gap-4 text-center">
			<div>
				<RadioGroup selected={storeLayout} accent="bg-primary-500" hover="hover:bg-primary-500/10">
					<RadioItem value="horz">Horizontal</RadioItem>
					<RadioItem value="vert">Vertical</RadioItem>
				</RadioGroup>
			</div>
			<p>Selected <code>{$storeLayout}</code></p>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<CodeBlock language="typescript" code={`import { writable, type Writable } from 'svelte/store';\n\nconst storeLayout: Writable<string> = writable('horz');`} />
		<CodeBlock
			language="html"
			code={`
<RadioGroup selected={storeLayout}>
    <RadioItem value="horz">Horizontal</RadioItem>
    <RadioItem value="vert">Vertical</RadioItem>
</RadioGroup>
        `}
		/>
		<p>To set display width to 100% use <code>display="flex"</code></p>
		<CodeBlock language="html" code={`<RadioGroup display="flex"></RadioGroup>`} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2 class="text-2xl font-bold">Properties</h2>
		<h3>Radio Group</h3>
		<DataTable headings={tablePropsGroup.headings} source={tablePropsGroup.source} />
		<h3>Radio Item</h3>
		<p>Can override props <code>hover</code>, <code>accent</code>, <code>color</code>, <code>fill</code>, <code>rounded</code>.</p>
		<DataTable headings={tablePropsItem.headings} source={tablePropsItem.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<div class="flex justify-between items-center">
			<h2>Accessibility</h2>
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/" target="_blank">ARIA Guidelines</a>
		</div>
		<h3>Radio Group</h3>
		<DataTable headings={tableA11yGroup.headings} source={tableA11yGroup.source} />
		<h3>Radio Item</h3>
		<DataTable headings={tableA11yItem.headings} source={tableA11yItem.source} />
	</section>
</div>
