<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Breadcrumbs',
		description: 'Displays the current navigation hierarchy.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/breadcrumbs'],
		source: 'styles/elements/breadcrumbs.css',
		classes: [
			['<code>breadcrumb</code>', '-', 'Add to an <em>ol</em> tag element.'],
			['<code>breadcrumb-nonresponsive</code>', '-', 'Shows all crumbs on small mobile breakpoints.'],
			['<code>crumb</code>', '-', 'Apply to each crumb list item element.'],
			['<code>crumb-separator</code>', '-', 'Apply to each separator list item element.']
		]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
			<!-- 1 -->
			<div class="card card-glass p-4">
				<ol class="breadcrumb">
					<li class="crumb"><a href="/">Tailwind</a></li>
					<li class="crumb-separator" aria-hidden>&rsaquo;</li>
					<li class="crumb"><a href="/">Elements</a></li>
					<li class="crumb-separator" aria-hidden>&rsaquo;</li>
					<li>breadcrumb</li>
				</ol>
			</div>
			<!-- 2 -->
			<div class="card card-glass p-4">
				<ol class="breadcrumb">
					<li class="crumb"><a href="/">Home</a></li>
					<li class="crumb-separator" aria-hidden>/</li>
					<li class="crumb"><a href="/">Articles</a></li>
					<li class="crumb-separator" aria-hidden>/</li>
					<li>Current</li>
				</ol>
			</div>
			<!-- 3 -->
			<div class="card card-glass p-4">
				<ol class="breadcrumb">
					<li class="crumb"><a href="/"><i class="fa-solid fa-house" /></a></li>
					<li class="crumb-separator" aria-hidden>&rsaquo;</li>
					<li class="crumb"><a href="/"><i class="fa-solid fa-skull" /></a></li>
					<li class="crumb-separator" aria-hidden>&rsaquo;</li>
					<li>Current</li>
				</ol>
			</div>
			<!-- 4 -->
			<div class="card card-glass p-4">
				<ol class="breadcrumb">
					<li class="crumb">
						<i class="fa-solid fa-house" />
						<a href="/">Home</a>
					</li>
					<li class="crumb-separator" aria-hidden>&rsaquo;</li>
					<li class="crumb">
						<i class="fa-solid fa-skull" />
						<a href="/">About</a>
					</li>
					<li class="crumb-separator" aria-hidden>&rsaquo;</li>
					<li>Current</li>
				</ol>
			</div>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Create an ordered list, apply the <code>.breadcrumb</code> class, then set <code>.crumb</code> and <code>.crumb-separator</code>
				to each list item.
			</p>
			<CodeBlock
				language="html"
				code={`
<ol class="breadcrumb">
	<li class="crumb"><a href="/">Home</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb"><a href="/articles">Articles</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li>Current</li>
</ol>
			`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Non-Responsive</h2>
			<p>
				Breadcrumbs are responsive by default and will auto-hide all but the last two crumb elements on small screens. If you wish to
				disable this behavior, replace <code>.breadcrumb</code> with <code>.breadcrumb-nonresponsive</code>.
			</p>
			<CodeBlock language="html" code={`<ol class="breadcrumb-nonresponsive">...</ol>`} />
		</section>
		<section class="space-y-4">
			<h2>Using Icons</h2>
			<p>Add your icon before or after your anchor tag within the <code>.crumb</code> list item.</p>
			<CodeBlock
				language="html"
				code={`
<li class="crumb">
	<span>(icon)</span>
	<a href="/">Home</a>
</li>
			`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Separators</h2>
			<!-- prettier-ignore -->
			<p>Apply the <code>.crumb-separator</code> class to each list item containing your separator icon or <a href="https://unicode-table.com/en/sets/arrow-symbols/#right-arrows" target="_blank" rel="noreferrer">unicode symbol</a>. Per accessability, make sure to implement <code>aria-hidden</code> to hide this element from screen readers.</p>
			<CodeBlock language="html" code={`<li class="crumb-separator" aria-hidden>&rsaquo;</li>`} />
			<CodeBlock language="html" code={`<li class="crumb-separator" aria-hidden>(icon)</li>`} />
		</section>
		<section class="space-y-4">
			<h2>Current Page</h2>
			<p>We recommend the last item not include an anchor link, as this indicates the page the user is currently on.</p>
			<CodeBlock language="html" code={`<li>Current</li>`} />
		</section>
	</svelte:fragment>
</DocsShell>
