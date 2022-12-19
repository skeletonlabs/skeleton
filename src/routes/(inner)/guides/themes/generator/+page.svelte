<script lang="ts">
	// Components
	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs
	// import DocsThemer from '$docs/DocsThemer/DocsThemer.svelte';
	import DocsThemerNew from '$docs/DocsThemerNew/DocsThemerNew.svelte';
</script>

<div class="page-container">
	<!-- Breadcrumbs -->
	<Breadcrumb>
		<Crumb href="/guides/themes">Themes</Crumb>
		<Crumb>Generator</Crumb>
	</Breadcrumb>

	<!-- Header -->
	<header class="space-y-4">
		<h1>Theme Generator</h1>
		<p>
			Enable edit mode to enable a live theme preview. You can browse the entire site while edit mode is enabled. Don't worry, your settings
			here will below will not be lost. When you are finished, tap the "Reset Theme" button to return to normal.
		</p>
	</header>

	<hr />

	<!-- Generator (new) -->
	<DocsThemerNew />

	<hr />

	<!-- Instructions -->
	<section class="space-y-4">
		<h2>Importing Your Theme</h2>
		<p>
			Copy and paste your theme CSS into <code>/src/theme.postcss</code>, then in<code>/src/routes/+layout.svelte</code> remove any preset theme,
			then replace with your custom theme.
		</p>
		<CodeBlock language="typescript" code={`import '../theme.postcss'; // <--\nimport '../app.postcss';\n`} />
	</section>

	<hr />

	<!-- Extras -->
	<section class="space-y-4">
		<h2>Advanced Color Curation</h2>
		<p>
			Looking for deeper customization? We recommend using <a
				href="https://tailwind.simeongriggs.dev/blue/3B82F6"
				target="_blank"
				rel="noreferrer">Palette Generator</a
			>. This includes support for hue, saturation, and lightness adjustments. Pair this with the
			<a href="https://marketplace.visualstudio.com/items?itemName=dakshmiglani.hex-to-rgba" target="_blank" rel="noreferrer"
				>Hex-To-RGB extension</a
			>
			to convert each Hex color value to RGB in bulk with VS Code.
		</p>
	</section>
</div>
