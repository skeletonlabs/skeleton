<script lang="ts">
	import DocsThemer from '$lib/layouts/DocsThemer/DocsThemer.svelte';
	// Components
	import { CodeBlock } from '@skeletonlabs/skeleton';
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
	<!-- <section class="space-y-4">
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
	</section> -->

	<!-- Instructions (v2) -->
	<section class="space-y-4">
		<h2 class="h2">Implement Your Theme</h2>
		<!-- pretiter-ignore -->
		<p>
			Generate your theme above, copy the source, then paste this into a new file in the root of your project with a disticting name, such
			as: <code class="code">my-custom-theme.[ts|js]</code>.
		</p>
		<p>Open <code class="code">tailwind.config.[js,cjs,ts]</code>, found in the root of your project, and import your custom theme.</p>
		<CodeBlock language="ts" code={`import myCustomTheme from './my-custom-theme'`} />
		<p>Within this same file, register your new theme via the Skeleton Tailwind plugin settings as shown below.</p>
		<CodeBlock
			language="ts"
			code={`

plugins: [
	skeleton({
		themes: {
			custom: [
				myCustomTheme
			]
		}
	})
]
				`}
		/>
		<p>
			Open <code class="code">/src/app.html</code> and define your theme using the <code class="code">data-theme</code>
			attribute. The value should match the <code class="code">name</code> field set within your theme source code.
		</p>
		<CodeBlock language="html" code={`<body data-theme="my-custom-theme">`} />
		<!-- prettier-ignore -->
		<p>Note that custom themes can be registered and used with <a href="/docs/themes#register-themes" class="anchor">Skeleton preset themes</a>.</p>
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
