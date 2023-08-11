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

	<!-- Implement (v2) -->
	<section class="space-y-4">
		<h2 class="h2">How to Implement</h2>
		<!-- prettier-ignore -->
		<p>
			Generate your theme above, copy the source code, then paste this into a new file in the root of your project with a distinct name, such as: <code class="code">my-custom-theme.[ts|js]</code>. If you opt for the Javascript format, make sure to strip out any Typescript type information.
		</p>
		<!-- Instruction -->
		<p>Open <code class="code">tailwind.config.[ts|js|cjs]</code> found in the root of your project, and import your custom theme.</p>
		<CodeBlock language="ts" code={`import { myCustomTheme } from './my-custom-theme'`} />
		<p>Within this file, register your custom theme via the Skeleton Tailwind plugin settings.</p>
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
			attribute. The value should match the <code class="code">name</code> field set within your theme's source code.
		</p>
		<CodeBlock language="html" code={`<body data-theme="my-custom-theme">`} />
		<!-- prettier-ignore -->
		<p>Note that custom themes can be registered along with <a href="/docs/themes#register-themes" class="anchor">Skeleton's preset themes</a>, allowing you to switch between these as desired.</p>
	</section>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">Migrate from v1 to v2</h2>
		<!-- Alert -->
		<aside class="alert variant-ghost">
			<div class="alert-message">
				<p>
					Need help migrating your theme from the <strong>v1 CSS format</strong> to the <strong>v2 CSS-in-JS format</strong>? Try this handy
					conversion tool.
				</p>
			</div>
			<div class="alert-actions">
				<!-- <a class="btn variant-soft" href="/" target="_blank">View Guide</a> -->
				<a class="btn variant-filled" href="https://transform.tools/css-to-js" target="_blank">Conversion Tool &rarr;</a>
			</div>
		</aside>
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
