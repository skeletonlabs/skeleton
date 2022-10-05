<script lang="ts">
	import { DataTable } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import { icons } from '$lib/components/SvgIcon/icons';

	const iconKeys = Object.keys(icons);

	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
		source: [
			['name', 'string', 'image', '-', 'Pass canned svg name. Slot value overrides this.'],
			['x', 'string', '0px', '-', 'Native X attribute for the svg element.'],
			['y', 'string', '0px', '-', 'Native Y attribute for the svg element.'],
			['viewBox', 'string', '0 0 512 512', '-', 'Native viewBox attribute for the svg element.'],
			['fill', 'string', 'fill-black dark:fill-white', '-', 'Provide classes to set the SVG fill color.'],
			['width', 'string', 'w-5', '-', 'Provide classes to set the width color.'],
			['height', 'string', 'w-5', '-', 'Provide classes to set the height color.']
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [['(default)', 'Allows you to supply any path or similar elements within the SVG tags.']]
	};
	const tableA11y: any = {
		headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
		source: [
			['title', 'string', '-', '-', 'Set the title element value embedded within the SVG.'],
			['tabindex', 'number', '-1', '-', 'Provide a tab index value.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>SVG Icons</h1>
		<p>Display and customize SVG images and icons.</p>
		<CodeBlock language="plaintext" code={`(currently for internal use only)`} />
		<!-- <CodeBlock language="javascript" code={`import { SvgImage } from '@brainandbones/skeleton';`} /> -->
	</header>

	<!-- Examples -->
	<section class="grid grid-cols-4 md:grid-cols-7 gap-4">
		<h2 class='sr-only'>Examples</h2>
		{#each iconKeys as name}
			<div class="card card-body space-y-2 text-center">
				<SvgIcon {name} />
				<p class="text-xs">{name}</p>
			</div>
		{/each}
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<h4>Canned</h4>
		<p>A small subset of icons provided by <a href="https://fontawesome.com" target="_blank">Font Awesome</a>. Only the icons shown above are available. Managed in <code>$lib/SvgIcon/icons</code>.</p>
		<CodeBlock language="html" code={`<SvgIcon name="skull" />`} />
		<h4>Custom</h4>
		<p>Implement any standard SVG markup. The default slot takes any code embedded between the <code>svg</code> tags.</p>
		<CodeBlock
			language="html"
			code={`
<SvgIcon fill="fill-primary-500" width="w-10" height="h-10" class="hover:fill-primary-300 cursor-pointer">
    <path d="M416 400V464C416 490.5 394.5 512 368 512H320V464C320 455.2 312.8 448 304 448C295.2 448 288 455.2 288 464V512H224V464C224 455.2 216.8 448 208 448C199.2 448 192 455.2 192 464V512H144C117.5 512 96 490.5 96 464V400C96 399.6 96 399.3 96.01 398.9C37.48 357.8 0 294.7 0 224C0 100.3 114.6 0 256 0C397.4 0 512 100.3 512 224C512 294.7 474.5 357.8 415.1 398.9C415.1 399.3 416 399.6 416 400V400zM160 192C124.7 192 96 220.7 96 256C96 291.3 124.7 320 160 320C195.3 320 224 291.3 224 256C224 220.7 195.3 192 160 192zM352 320C387.3 320 416 291.3 416 256C416 220.7 387.3 192 352 192C316.7 192 288 220.7 288 256C288 291.3 316.7 320 352 320z" />
</SvgIcon>
        `}
		/>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<div class="flex justify-between items-center">
			<h2>Accessibility</h2>
			<!-- <a href="https://www.w3.org/WAI/ARIA/apg/patterns/" target="_blank">ARIA Guidelines</a> -->
		</div>
		<DataTable headings={tableA11y.headings} source={tableA11y.source} />
	</section>
</div>
