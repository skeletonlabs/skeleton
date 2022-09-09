<script lang="ts">
	import { writable } from 'svelte/store';
	import { DataTable, Card, RadioGroup, RadioItem } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	const storeJustify = writable(0);
	const storeLayout = writable('horz');

	// Props & Slots
	const tablePropsGroup: any = {
		headings: ['Prop', 'Type', 'Values', 'Required', 'Description'],
		source: [
			['selected', 'Writable', 'any', '&check;', 'Provide a Svelte writable to store the selected state value.'],
			['background', 'string', 'bg-primary-500', '-', `Provide classes to set the selected item background color.`],
			['color', 'string', 'text-black dark:text-white', '-', `Provide classes to set the selected item text color.`],
			['width', 'string', 'w-auto', '-', `Provide classes to set the width.`]
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
		<Card body="flex-auto space-y-4 text-center">
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
			<pre>selected = {$storeJustify}</pre>
		</Card>
		<Card body="flex-auto space-y-4 text-center">
			<RadioGroup background="bg-accent-500" color="text-white" selected={storeLayout}>
				<RadioItem value="horz">Horizontal</RadioItem>
				<RadioItem value="vert">Vertical</RadioItem>
			</RadioGroup>
			<pre>selected = {$storeLayout}</pre>
		</Card>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<CodeBlock
			language="typescript"
			code={`import type { Writable } from "svelte/store";
const storeLayout: Writable<string> = writable('horz');`}
		/>
		<CodeBlock
			language="html"
			code={`
<RadioGroup selected={storeLayout} background="bg-accent-500" color="text-white" width="w-auto">
    <RadioItem value="horz">Horizontal</RadioItem>
    <RadioItem value="vert">Vertical</RadioItem>
</RadioGroup>
        `.trim()}
		/>
		<CodeBlock language="html" code={`<pre>{$storeLayout}</pre>`} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2 class="text-2xl font-bold">Properties</h2>
		<h3>Radio Group</h3>
		<DataTable headings={tablePropsGroup.headings} source={tablePropsGroup.source} />
		<h3>Radio Item</h3>
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
