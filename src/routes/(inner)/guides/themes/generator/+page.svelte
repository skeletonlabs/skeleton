<script lang="ts">
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import DocsThemer from '$docs/DocsThemer/DocsThemer.svelte';
</script>

<div class="page-container">
	<!-- Breadcrumbs -->
	<ol class="breadcrumb">
		<li class="crumb"><a href="/guides/themes">Themes</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Generator</li>
	</ol>

	<!-- Header -->
	<header class="space-y-4">
		<h1>Theme Generator</h1>
		<p>
			Enable "Live Preview Mode" to begin creating a new theme. The entire documentation site will update as you progress. You can navigate
			to different sections without losing your settings as long as you do not refresh the page. Disabling the preview will reset back to
			your original theme.
		</p>
	</header>

	<hr />

	<!-- Generator (new) -->
	<DocsThemer />

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
