<script lang="ts">
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import DataTable from '$lib/components/Table/DataTable.svelte';

	// Tables
	const tableClasses: any = {
		headings: ['Class', 'Description'],
		source: [
			['<code>.logo-cloud</code>', 'Apply to a wrapping block element around a set of logos.'],
			['<code>.logo-item</code>', 'Apply to each logo child element.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Logo Clouds</h1>
		<p>
			Automatically included in <code>all.css</code> and <code>elements.css</code>. This <a href="/guides/styling">stylesheet</a> provides logos for presenting a set of logos, brands, or sponsors.
		</p>
		<CodeBlock language="ts" code={`import '@brainandbones/skeleton/styles/logo-clouds.css';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<!-- Has Links -->
		<div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1">
			<a class="logo-item" href="https://svelte.dev/" target="_blank">
				<span><SvgIcon name="svelte" width="w-8" height="h-8" /></span>
				<span>Svelte</span>
			</a>
			<a class="logo-item" href="https://tailwindcss.com/" target="_blank">
				<span><SvgIcon name="tailwind" width="w-6" height="h-6" /></span>
				<span>Tailwind</span>
			</a>
			<a class="logo-item" href="https://github.com/" target="_blank">
				<span><SvgIcon name="github" width="w-6" height="h-6" /></span>
				<span>Github</span>
			</a>
		</div>
		<!-- Multi-Row -->
		<div class="logo-cloud grid-cols-1 lg:grid-cols-4 gap-1">
			<div class="logo-item">HR Solutions</div>
			<div class="logo-item">Acme Theaters</div>
			<div class="logo-item">Cruisin' Cuisine</div>
			<div class="logo-item">Arcane Security</div>
			<div class="logo-item">Stark Industries</div>
			<div class="logo-item">Gekko & Co.</div>
			<div class="logo-item">Acme Corp.</div>
			<div class="logo-item">Wonka Inc.</div>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-8">
		<div class="space-y-4">
			<h2>Usage</h2>
			<p>Logo clouds provide a styled grid wrapper element. Ensure you provided the desired column and gap classes.</p>
			<CodeBlock
				language="html"
				code={`
<div class="logo-cloud grid-cols-1 lg:grid-cols-4 gap-1">
    <div class="logo-item">
        <span>&hearts;</span>
        <span>HR Solutions</span>
    </div>
    <div class="logo-item">Acme Theaters</div>
    <div class="logo-item">Cruisin' Cuisine</div>
    <div class="logo-item">Arcane Security</div>
    <div class="logo-item">Stark Industries</div>
    <div class="logo-item">Gekko & Co.</div>
    <div class="logo-item">Acme Corp.</div>
    <div class="logo-item">Wonka Inc.</div>
</div>
            `.trim()}
			/>
		</div>
		<!-- Links -->
		<div class="space-y-4">
			<h4>Logo Item - Links</h4>
			<p>Logo Items support anchor tags for links.</p>
			<CodeBlock
				language="html"
				code={`
<a class="logo-item" href="/">Skeleton</a>
            `.trim()}
			/>
		</div>
		<!-- Icons -->
		<div class="space-y-4">
			<h4>Logo Item - Icons</h4>
			<p>Wrap child elements in space tags and they will space as expected.</p>
			<CodeBlock
				language="html"
				code={`
<div class="logo-item">
    <span>💀</span>
    <span>Skeleton</span>
</div>
            `.trim()}
			/>
		</div>
		<!-- Global Syles -->
		<div class="space-y-4">
			<h4>Global Styles</h4>
			<p>Use your global stylesheet to update all instances of this element.</p>
			<CodeBlock
				language="css"
				code={`
.logo-cloud {
    @apply rounded-none;
}
.logo-item {
    @apply !bg-surface-500;
}
            `.trim()}
			/>
		</div>
	</section>

	<!-- Classes -->
	<section class="space-y-4">
		<h2>Classes</h2>
		<DataTable headings={tableClasses.headings} source={tableClasses.source} />
	</section>
</div>
