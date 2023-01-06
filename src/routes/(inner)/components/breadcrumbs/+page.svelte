<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error sveld import
	import sveldBreadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte?raw&sveld';
	// @ts-expect-error sveld import
	import sveldCrumb from '$lib/components/Breadcrumb/Crumb.svelte?raw&sveld';

	console.log(sveldCrumb);

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Breadcrumbs',
		description: 'Displays the current navigation hierarchy.',
		imports: ['Breadcrumb', 'Crumb'],
		source: 'components/Breadcrumb',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/',
		components: [
			{ label: 'BreadCrumb', sveld: sveldBreadcrumb },
			{ label: 'Crumb', sveld: sveldCrumb, overrideProps: ['separator'] }
		]
	};

	// Local
	const customSeparator = `<span class="text-surface-500">/</span>`;
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<!-- Alert -->
		<aside class="alert alert-error">
			<i class="fa-solid fa-triangle-exclamation text-4xl" />
			<div class="alert-message">
				<h3>Deprecated</h3>
				<p>This component is slated for removal. Please migrate the element styles provided by <em>all.css</em>.</p>
			</div>
			<a href="/elements/breadcrumbs" class="alert-message btn btn-filled">View Elements</a>
		</aside>
		<section class="grid grid-cols-1 xl:grid-cols-2 gap-4">
			<div class="card p-4">
				<Breadcrumb>
					<Crumb href="/">Home</Crumb>
					<Crumb href="/">Articles</Crumb>
					<Crumb current>Current</Crumb>
				</Breadcrumb>
			</div>
			<div class="card p-4">
				<Breadcrumb separator={customSeparator}>
					<Crumb href="/">Home</Crumb>
					<Crumb href="/">Blog</Crumb>
					<Crumb>Current</Crumb>
				</Breadcrumb>
			</div>
			<div class="card p-4">
				<Breadcrumb>
					<Crumb href="/">
						<i class="fa-solid fa-house" />
					</Crumb>
					<Crumb href="/">
						<i class="fa-solid fa-skull" />
					</Crumb>
					<Crumb>Current</Crumb>
				</Breadcrumb>
			</div>
			<div class="card p-4">
				<Breadcrumb>
					<Crumb href="/">
						<svelte:fragment slot="lead">
							<i class="fa-solid fa-house" />
						</svelte:fragment>
						<span>Home</span>
					</Crumb>
					<Crumb href="/">
						<svelte:fragment slot="lead">
							<i class="fa-solid fa-skull" />
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
			<h2>Set the Seperator</h2>
			<p>
				Use the <code>seperator</code> prop to define a custom seperator character. Accepts any valid HTML value, including unicode and emojii.
			</p>
			<CodeBlock language="html" code={`<Breadcrumb separator="&hearts;"></Breadcrumb>`} />
		</div>
		<div class="space-y-4">
			<h2>Define Current Page</h2>
			<p>
				Crumbs without a <code>href</code> attribute are treated as the <em>current</em> page. This means they render as <code>span</code> and
				do not append a trailing separator.
			</p>
			<CodeBlock language="html" code={`<Crumb>Current</Crumb>`} />
		</div>
	</svelte:fragment>
</DocsShell>
