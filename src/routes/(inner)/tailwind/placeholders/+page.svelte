<script lang="ts">
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';

	// Local
	let animate: boolean = true;

	// Tables
	const tableClasses: any = {
		headings: ['Class', 'Description'],
		source: [
			['<code>placeholder</code>', 'Applies the default placeholder style.'],
			['<code>placeholder-circle</code>', 'Applies the circular placeholder style.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Placeholders</h1>
		<p>
			Automatically included in <code>all.css</code> and <code>elements.css</code>. This <a href="/guides/styling">stylesheet</a> provides "skeleton" placeholders that can display while content loads.
		</p>
		<CodeBlock language="ts" code={`import '@brainandbones/skeleton/styles/elements/placeholders.css';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<h2 class='sr-only'>Examples</h2>
		<div class="card">
			<div class="card-header flex justify-between items-center">
				<div class="flex justify-center items-center space-x-4" class:animate-pulse={animate}>
					<div class="placeholder-circle w-16" />
					<div class="placeholder-circle w-14" />
					<div class="placeholder-circle w-10" />
				</div>
				<SlideToggle bind:checked={animate} accent="bg-accent-500">Animated</SlideToggle>
			</div>
			<div class="card-body space-y-4" class:animate-pulse={animate}>
				<div class="placeholder" />
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="placeholder" />
				<div class="placeholder" />
			</div>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-8">
		<div class="space-y-4">
			<h2>Usage</h2>
			<CodeBlock language="html" code={`<div class="placeholder" />`} />
		</div>
		<!-- Circular -->
		<div class="space-y-4">
			<h4>Circular</h4>
			<p>Apply the <code>.placeholder-circle</code> class and set a width to define the diameter.</p>
			<CodeBlock language="html" code={`<div class="placeholder-circle w-16" />`} />
		</div>
		<!-- Animated -->
		<div class="space-y-4">
			<h4>Animated</h4>
			<p>Apply the <code>.animate-pulse</code> utility class provided by Tailwind.</p>
			<CodeBlock language="html" code={`<div class="placeholder animate-pulse" />`} />
		</div>
		<!-- Global Styles -->
		<div class="space-y-4">
			<h4>Global Styles</h4>
			<p>Use your global stylesheet to update all instances of this element.</p>
			<CodeBlock language="css" code={`.placeholder { @apply rounded-none; }`} />
		</div>
	</section>

	<!-- Classes -->
	<section class="space-y-4">
		<h2>Classes</h2>
		<DataTable headings={tableClasses.headings} source={tableClasses.source} />
	</section>
</div>
