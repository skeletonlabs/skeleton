<script lang="ts">
	import LayoutPage from '$docs/layouts/LayoutPage/LayoutPage.svelte';
	import DocsThemer from '$docs/layouts/DocsThemer/DocsThemer.svelte';
	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="page-container">
	<header class="space-y-4">
		<h1 class="h1">Theme Generator</h1>
		<p>
			Toggle the "Enable Preview" option to begin creating a new theme. The entire documentation site will update as you progress. You can
			navigate to different sections without losing your settings as long as you do not refresh the page. Disabling the preview will reset
			back to your original theme.
		</p>
	</header>

	<hr />

	<!-- Generator (new) -->
	<DocsThemer />

	<hr />

	<!-- Instructions -->
	<section class="space-y-4">
		<h2 class="h2">Importing Your Theme</h2>
		<p>
			Copy and paste your theme CSS into <code class="code">/src/theme.postcss</code>, then import the theme into your root layout in
			<code class="code">/src/routes/+layout.svelte</code> instead of a premade Skeleton theme. Keep the order as shown.
		</p>
		<CodeBlock
			language="ts"
			code={`
// Your custom Skeleton theme:
import '../theme.postcss';\n
// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/skeleton.css';\n
// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';
						`}
		/>
	</section>

	<hr />

	<!-- Extras -->
	<section class="space-y-4">
		<h2 class="h2">Advanced Color Curation</h2>
		<p>
			Looking for deeper customization? We recommend using <a
				class="anchor"
				href="https://tailwind.simeongriggs.dev/blue/3B82F6"
				target="_blank"
				rel="noreferrer">Palette Generator</a
			>. This includes support for hue, saturation, and lightness adjustments. Pair this with the
			<a class="anchor" href="https://marketplace.visualstudio.com/items?itemName=dakshmiglani.hex-to-rgba" target="_blank" rel="noreferrer"
				>Hex-To-RGB extension</a
			>
			to convert each Hex color value to RGB in bulk with VS Code.
		</p>
	</section>
</div>
