<script lang="ts">
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Tables
	const tableClasses: any = {
		headings: ['Class', 'Description'],
		source: [
			['<code>badge</code>', 'Provides the standard badge style.'],
			['<code>badge-icon</code>', 'Provides the icon badge style.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Badges</h1>
		<p>This <a href="/guides/styling">stylesheet add-on</a> provides a robust set of badge styles.</p>
		<CodeBlock language="ts" code={`import '@brainandbones/skeleton/styles/badges.css';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<section class="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
			<Card class="flex-auto" slotBody="flex justify-center space-x-2">
				<span class="badge bg-surface-500 text-white">Skeleton</span>
			</Card>
			<Card class="flex-auto" slotBody="flex justify-center space-x-4">
				<span class="badge bg-primary-500 text-white">
					<span>&hearts;</span>
					<span>Complete</span>
				</span>
				<span class="badge bg-accent-500 text-white">
					<span>Skeleton</span>
					<span>💀</span>
				</span>
				<span class="badge bg-warning-500 text-white">
					<span>&hearts;</span>
					<span>Favorite</span>
				</span>
			</Card>
		</section>
		<h3>Positioning</h3>
		<section class="grid grid-cols-1 xl:grid-cols-3 gap-4">
			<Card slotBody="flex justify-center items-center h-full space-x-2">
				<h4>Skeleton</h4>
				<sup class="badge bg-primary-500 text-white -ml-0">Sup</sup>
			</Card>
			<Card slotBody="flex justify-center items-center h-full space-x-2">
				<h4>Skeleton</h4>
				<sub class="badge bg-accent-500 text-white -ml-0">Sub</sub>
			</Card>
			<Card slotBody="flex justify-center items-center space-x-6">
				<div class="relative inline-block">
					<span class="badge bg-primary-500 text-white absolute -top-3 -right-4 z-10">50k</span>
					<button class="btn btn-sm btn-ghost">Button</button>
				</div>
				<div class="relative inline-block">
					<span class="badge-icon bg-accent-500 text-white absolute -top-1 -right-1 z-10">2</span>
					<Avatar />
				</div>
				<div class="relative inline-block">
					<span class="badge-icon bg-warning-500 text-white absolute -top-1 -right-1 z-10">&hearts;</span>
					<Avatar />
				</div>
			</Card>
		</section>
	</section>

	<!-- Usage -->
	<section class="space-y-8">
		<div class="space-y-4">
			<h2>Usage</h2>
			<p>Apply to any inline element, such as a <em>span</em> or <em>anchor</em> tag.</p>
			<CodeBlock language="html" code={`<span class="badge bg-primary-500">Skeleton</span>`} />
		</div>
		<!-- Icon -->
		<div class="space-y-4">
			<h4>Badge Icon</h4>
			<p>A compact circular size for the badge.</p>
			<CodeBlock language="html" code={`<span class="badge-icon bg-primary-500">💀</span>`} />
		</div>
		<!-- Overlapping -->
		<div class="space-y-4">
			<h4>Overlapping Icon</h4>
			<p>Use Tailwind utility classes to overlap elements.</p>
			<CodeBlock
				language="html"
				code={`
<div class="relative inline-block">
    <span class="badge-icon bg-primary-500 absolute -top-1 -right-1 z-10">💀</span>
    <Avatar />
</div>
		`.trim()}
			/>
		</div>
		<!-- Global Styles -->
		<div class="space-y-4">
			<h4>Global Styles</h4>
			<p>You can override styles for all instances of this element in your global stylesheet as follows.</p>
			<CodeBlock language="css" code={`.badge { @apply rounded-full; }`} />
		</div>
	</section>

	<!-- Classes -->
	<section class="space-y-4">
		<h2>Classes</h2>
		<DataTable headings={tableClasses.headings} source={tableClasses.source} />
	</section>
</div>
