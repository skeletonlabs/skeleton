<script lang="ts">
	import { DataTable, Breadcrumb, Crumb } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	// Examples
	const customSeparator: string = `<span class="text-surface-500">/</span>`;

	// Props
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [['separator', 'string', `<code>&rsaquo</code> (unicode)`, 'Defines the crumb seperator. Supports SVG icons.']]
	};
	const tablePropsCrumb: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['text', 'string', 'text-base', 'Provide classes to set text size.'],
			['color', 'string ', '-', 'Provide classes set the current page text color.']
		]
	};
	const tableSlotsCrumb: any = {
		headings: ['Slot', 'Description'],
		source: [['lead', 'A leading slot intended for icons.']]
	};
	const tableA11y: any = {
		headings: ['Prop', 'Default', 'Description'],
		source: [['label', '-', `A semantic ARIA label.`]]
	};
</script>

<div class="space-y-8">
	<!-- Heading -->
	<heading class="space-y-4">
		<h1>Breadcrumbs</h1>
		<p>Displays navigation hierarchy.</p>
		<CodeBlock language="javascript" code={`import { Breadcrumb, Crumb } from '@brainandbones/skeleton';`} />
	</heading>

	<!-- Examples -->
	<section class="space-y-4">
		<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
			<div class="space-y-4">
				<h3>Basic</h3>
				<div class="card card-body overflow-x-auto">
					<div class="w-full overflow-x-auto min-w-[400px]">
						<Breadcrumb>
							<Crumb href="/">Home</Crumb>
							<Crumb href="/">Articles</Crumb>
							<Crumb current>Current</Crumb>
						</Breadcrumb>
					</div>
				</div>
			</div>
			<div class="space-y-4">
				<h3>Separator</h3>
				<div class="card card-body overflow-x-auto">
					<div class="w-full overflow-x-auto min-w-[400px]">
						<Breadcrumb separator={customSeparator}>
							<Crumb href="/">Home</Crumb>
							<Crumb href="/">Blog</Crumb>
							<Crumb>Current</Crumb>
						</Breadcrumb>
					</div>
				</div>
			</div>
			<div class="space-y-4">
				<h3>Icons</h3>
				<div class="card card-body overflow-x-auto">
					<div class="w-full overflow-x-auto min-w-[400px]">
						<Breadcrumb>
							<Crumb href="/">
								<SvgIcon name="house" title="house" />
							</Crumb>
							<Crumb href="/">
								<SvgIcon name="skull" title="skull" />
							</Crumb>
							<Crumb>Current</Crumb>
						</Breadcrumb>
					</div>
				</div>
			</div>
			<div class="space-y-4">
				<h3>Mixed</h3>
				<div class="card card-body overflow-x-auto">
					<div class="w-full overflow-x-auto min-w-[400px]">
						<Breadcrumb>
							<Crumb href="/">
								<svelte:fragment slot="lead">
									<SvgIcon name="house" title="house" />
								</svelte:fragment>
								<span>Home</span>
							</Crumb>
							<Crumb href="/">
								<svelte:fragment slot="lead">
									<SvgIcon name="skull" title="skull" />
								</svelte:fragment>
								<span>Subpage</span>
							</Crumb>
							<Crumb>Current</Crumb>
						</Breadcrumb>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock
			language="html"
			code={`
<Breadcrumb>
    <Crumb href='/'>
        <svelte:fragment slot="lead">(icon)</svelte:fragment>
        <span>(page)</span>
    </Crumb>
    <Crumb href='/'>(page)</Crumb>
    <Crumb>(current)</Crumb>
</Breadcrumb>
        `}
		/>
		<h4>Current Page Crumb</h4>
		<p>Crumbs without a <code>href</code> attribute are treated as the <em>current</em> page. This means they render as <code>span</code> and do not append a trailing separator.</p>
		<CodeBlock language="html" code={`<Crumb>Current</Crumb>`} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<h3>Breadcrumb</h3>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
		<h3>Crumb</h3>
		<DataTable headings={tablePropsCrumb.headings} source={tablePropsCrumb.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<h3>Crumb</h3>
		<DataTable headings={tableSlotsCrumb.headings} source={tableSlotsCrumb.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<div class="flex justify-between items-center">
			<h2>Accessibility</h2>
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/" target="_blank">ARIA Guidelines</a>
		</div>
		<h3>Breadcrumb</h3>
		<DataTable headings={tableA11y.headings} source={tableA11y.source} />
	</section>
</div>
