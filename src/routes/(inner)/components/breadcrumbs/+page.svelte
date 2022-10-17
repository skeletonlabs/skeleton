<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Breadcrumbs',
		description: 'Displays the current navigation hierarchy.',
		imports: ['Breadcrumb', 'Crumb'],
		source: 'components/Breadcrumb'
	};
	const properties: DocsShellTable[] = [
		{
			label: 'BreadCrumb',
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [
				['<code>separator</code>', 'string', `&rsaquo (unicode)`, 'Defines the crumb separator. Supports SVG icons.'],
				['<code>text</code>', 'string', '-', 'Provide classes to set text size.']
			]
		},
		{
			label: 'Crumb',
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [['<code>color</code>', 'string ', '-', 'Provide classes set the current page text color.']]
		}
	];
	const classes: DocsShellTable[] = [
		{
			description: 'Coming soon.'
			// headings: ['Selector', 'Description'],
			// source: [
			// 	['<code>.foo</code>', '...'],
			// 	['<code>.bar</code>', '...']
			// ]
		}
	];
	const slots: DocsShellTable[] = [
		{
			label: 'BreadCrumb',
			headings: ['Slot', 'Description'],
			source: [['<code>default</code>', 'Accepts a set of Crumb components.']]
		},
		{
			label: 'Crumb',
			headings: ['Slot', 'Description'],
			source: [['<code>lead</code>', 'A leading slot intended for icons.']]
		}
	];
	const a11y: DocsShellTable[] = [
		{
			aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/',
			headings: ['Prop', 'Description'],
			source: [['<code>label</code>', 'A semantic ARIA label.']]
		}
	];

	// Local
	const customSeparator: string = `<span class="text-surface-500">/</span>`;
</script>

<DocsShell {settings} {properties} {classes} {slots} {a11y}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 xl:grid-cols-2 gap-4">
			<div class="card card-body">
				<Breadcrumb>
					<Crumb href="/">Home</Crumb>
					<Crumb href="/">Articles</Crumb>
					<Crumb current>Current</Crumb>
				</Breadcrumb>
			</div>
			<div class="card card-body">
				<Breadcrumb separator={customSeparator}>
					<Crumb href="/">Home</Crumb>
					<Crumb href="/">Blog</Crumb>
					<Crumb>Current</Crumb>
				</Breadcrumb>
			</div>
			<div class="card card-body">
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
			<div class="card card-body">
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
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<CodeBlock
			language="html"
			code={`
<Breadcrumb>
	<Crumb href='/'>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(page)</span>
	</Crumb>
	<Crumb>(current)</Crumb>
</Breadcrumb>`}
		/>
		<div class="space-y-4">
			<h2>Seperator</h2>
			<p>Use the <code>seperator</code> prop to define a custom seperator character. Accepts any valid HTML value, including unicode and emojii.</p>
			<CodeBlock language="html" code={`<Breadcrumb separator="&hearts;"></Breadcrumb>`} />
		</div>
		<div class="space-y-4">
			<h2>Current Page</h2>
			<p>Crumbs without a <code>href</code> attribute are treated as the <em>current</em> page. This means they render as <code>span</code> and do not append a trailing separator.</p>
			<CodeBlock language="html" code={`<Crumb>Current</Crumb>`} />
		</div>
	</svelte:fragment>
</DocsShell>
