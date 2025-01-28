<script lang="ts">
	import { themes } from '$lib/themes';
	// Docs
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	// Components
	import { CodeBlock, type TableSource, Table } from '@skeletonlabs/skeleton';

	// Table
	const sourceCssProperties = [
		['<code class="code">--theme-font-family-base</code>', 'Set the font family for your default base text.'],
		['<code class="code">--theme-font-family-heading</code>', 'Set the font family for your heading text.'],
		['<code class="code">--theme-font-color-base</code>', 'Set the default text color for light mode.'],
		['<code class="code">--theme-font-color-dark</code>', 'Set the default text color for dark mode.'],
		['<code class="code">--theme-rounded-base</code>', 'Set the border radius for small elements, such as buttons, inputs, etc.'],
		['<code class="code">--theme-rounded-container</code>', 'Set the border radius for large elements, such as cards, textfields, etc.'],
		['<code class="code">--theme-border-base</code>', 'Set the default border size for elements, including inputs.'],
		// Theme On-X Colors
		['<code class="code">--on-[color]</code>', 'Set an accessible overlapping text or fill color per each theme color.'],
		['<code class="code">--color-[color]-[shade]</code>', 'Defines each color and shade value for your theme.']
	];
	const tableCssProperties: TableSource = {
		// A list of heading labels.
		head: ['CSS Property', 'Description'],
		// The data visibly shown in your table body UI.
		body: sourceCssProperties
	};
</script>

<LayoutPage>
	<header class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
		<div class="space-y-4">
			<h1 class="h1">Themes</h1>
			<!-- prettier-ignore -->
			<p>
				Skeleton leans into <a class="anchor" href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" target="_blank" rel="noreferrer">Tailwind's best practices</a> when implementing themes. This includes support for <a class="anchor" href="https://tailwindcss.com/docs/background-color#changing-the-opacity" target="_blank" rel="noreferrer">color opacity</a> and <a class="anchor" href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noreferrer">dark mode</a>. Themes also enable Skeleton's <a class="anchor" href="/docs/tokens" target="_blank">design tokens</a> system.
			</p>
		</div>
	</header>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">CSS Custom Properties</h2>
		<!-- prettier-ignore -->
		<p>
			Skeleton themes are generated using a number of <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*" target="_blank" rel="noreferrer">CSS Custom Properties</a>, also known as as CSS variables.
		</p>
		<Table source={tableCssProperties} />
		<h3 class="h3">Overwriting Properties</h3>
		<!-- prettier-ignore -->
		<p>
			Similar to variables in other languages, CSS properties can be overwritten. By adding the following snippet in <code class="code">/src/app.postcss</code>, you can overwrite the <em>base</em> and <em>container</em> border radius styles for your active theme.
		</p>
		<CodeBlock
			language="css"
			code={`
/* NOTE: set your target theme name (ex: skeleton, wintry, modern, etc) */\n
:root [data-theme='skeleton'] {
	--theme-rounded-base: 20px;
	--theme-rounded-container: 4px;
}
		`}
		/>
		<p>Likewise, you can override <em>base</em> and <em>heading</em> font family settings as shown below.</p>
		<CodeBlock
			language="css"
			code={`
/* NOTE: set your target theme name (ex: skeleton, wintry, modern, etc) */\n
:root [data-theme='skeleton'] {
    --theme-font-family-base: 'MyCustomFont', sans-serif;
    --theme-font-family-heading: 'MyCustomFont', sans-serif;
}
		`}
		/>
		<!-- prettier-ignore -->
		<p>
			For deeper customization, consider cloning Skeleton's preset themes, modifying each as desired, then implementing as a custom theme. Follow the <a class="anchor" href="/docs/generator">theme generator implementation guide</a> for more information.
		</p>
	</section>

	<hr />

	<section class="space-y-4">
		<div class="h2 flex items-center gap-2">
			<h2>CSS-in-JS Format</h2>
			<span class="badge variant-filled-warning">New in v2</span>
		</div>
		<p>
			Skeleton now defines theme settings via the CSS-in-JS format. This allows themes to be easily registered within the Skeleton Tailwind
			plugin, rather than relying on additional stylesheet imports.
		</p>
	</section>

	<hr />

	<section class="space-y-4">
		<div class="h2 flex items-center gap-2">
			<h2 class="h2">Tailwind Plugin Settings</h2>
			<span class="badge variant-filled-warning">New in v2</span>
		</div>
		<p>
			Themes are configured via Skeleton's Tailwind plugin in your <code class="code">tailwind.config</code>, found in your
			project root.
		</p>
		<h3 class="h3">Register Themes</h3>
		<p>
			Skeleton provides a number of <a class="anchor" href="/docs/get-started#preset-themes">preset themes</a> out of the box. You'll need to
			register at least one theme to load them and make them available to use.
		</p>
		<CodeBlock
			language="ts"
			code={`
plugins: [
	skeleton({
		themes: {
			// Register each theme within this array:
			preset: [ "skeleton", "modern", "crimson" ] 
		}
	})
]
	`}
		/>
		<p>
			Open <code class="code">/src/app.html</code> and define the active theme to display using the <code class="code">data-theme</code> attribute.
			You can modify this attribute to dynamically switch between any registered theme.
		</p>
		<CodeBlock language="html" code={`<body data-theme="skeleton">`} />
		<h3 class="h3">Enhancements</h3>
		<p>
			Preset themes may sometimes include additional optional features, such as: heading font weights, background mesh gradients, and more.
			To enable these settings, include <code class="code">enhancements</code> as shown below.
		</p>
		<CodeBlock
			language="ts"
			code={`
plugins: [
	skeleton({
		themes: {
			preset: [
				// Enable 'enhancements' per each registered theme:
				{ name: "skeleton", enhancements: true }
			] 
		}
	})
]
	`}
		/>
		<h3 class="h3">Custom Themes</h3>
		<p>
			View the <a class="anchor" href="/docs/generator">theme generator</a> for more information about implementing custom themes. Note that
			it is possible to mix and match preset and custom themes.
		</p>
	</section>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">Dark Mode</h2>
		<p>
			By default Tailwind opts for light mode. If you wish to default to dark mode, append the following class to the <code class="code"
				>html</code
			>
			element within <code class="code">/src/app.html</code>. View
			<a class="anchor" href="https://tailwindcss.com/docs/dark-mode" target="_blank">Tailwind's documentation</a> for more information.
		</p>
		<CodeBlock language="html" code={`<html class="dark">`} />
		<p>
			Note that Skeleton also provides a <a class="anchor" href="/docs/dark-mode#via-selector" target="_blank">Lightswitch</a> utility if you
			wish to toggle between light and dark modes.
		</p>
	</section>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">Backgrounds</h2>
		<!-- prettier-ignore -->
		<p>
			The background color of your application is automatically set using one of Skeleton's <a class="anchor" href="https://www.skeleton.dev/docs/tokens">design token</a> styles. By default, this utilizes <code class="code">--color-surface-50</code> for light mode and <code class="code">--color-surface-900</code> for dark mode. Use your global stylesheet <code class="code">app.postcss</code> to modify this.
		</p>
		<CodeBlock
			language="css"
			code={`
/* Default setting: */
body { @apply bg-surface-50-900-token; }

/* --- */

/* Example: primary color via a design token: */
body { @apply bg-primary-50-900-token; }

/* Example: secondary color via Tailwind: */
body { @apply bg-secondary-50 dark:bg-secondary-900; }

/* Example: using vanilla CSS: */
body { background: red; }
.dark body { background: blue; }
		`}
		/>
		<div class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
			<div class="space-y-4">
				<h3 class="h3">Images and Gradients</h3>
				<p>
					You may optionally provide a background image, including the use of a CSS mesh gradient. Replace the static color values with
					theme color properties to create a fully adaptive gradient background.
				</p>
			</div>
			<div>
				<a class="btn variant-filled font-bold" href="https://csshero.org/mesher/" target="_blank" rel="noreferrer">
					<span>Create a Mesh</span>
					<i class="fa-solid fa-arrow-up-right-from-square"></i>
				</a>
			</div>
		</div>
		<CodeBlock
			language="css"
			code={`
html, body { @apply h-full; }
body {
	background-image:
		radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
		radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
		`}
		/>
	</section>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">Custom Fonts</h2>
		<p>We recommend the use of <a href="https://fontsource.org/" target="_blank" class="anchor">Fontsource</a> managing custom fonts. Start by installing the font of your choice.</p>
		<CodeBlock language="console" code={`npm install @fontsource/open-sans`} />
		<p>Then import each font at the top of your global stylesheet in <code class="code">/src/app.css</code></p>
		<CodeBlock language="css" code={`import "@fontsource/open-sans";`} />
		<p>Finally, overwrite the CSS Custom Properties for your them with the new font-family set.</p>
		<CodeBlock language="css" code={`
:root [data-theme='skeleton'] {
    --theme-font-family-base: "Open Sans", sans-serif;
    --theme-font-family-heading: "Open Sans", sans-serif;
}
		`} />
	</section>
</LayoutPage>
