<script lang="ts">
	import { themes } from '$lib/themes';
	// Docs
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	// Components
	import { Tab, TabGroup, CodeBlock, type TableSource, Table } from '@skeletonlabs/skeleton';

	// Local
	let activeTheme = themes[1];
	let tabsFontImport = 0;

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

	// Reactive
	$: activeFonts = activeTheme.fonts.length ? activeTheme.fonts : themes[0].fonts;
</script>

<LayoutPage>
	<header class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
		<div class="space-y-4">
			<h1 class="h1">Themes</h1>
			<p>Learn more about Skeleton themes and customizing.</p>
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
:root {
	--theme-rounded-base: 20px;
	--theme-rounded-container: 4px;
}
		`}
		/>
		<p>Likewise, you can override <em>base</em> and <em>heading</em> font family settings as shown below.</p>
		<CodeBlock
			language="css"
			code={`
:root {
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
			Themes are configured via Skeleton's Tailwind plugin in your <code class="code">tailwind.config.[cjs|js|ts]</code>, found in your
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
				<a class="btn variant-filled-secondary font-bold" href="https://csshero.org/mesher/" target="_blank" rel="noreferrer">
					<span>Create a Mesh</span>
					<i class="fa-solid fa-arrow-up-right-from-square" />
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
		<!-- prettier-ignore -->
		<p>
            Fonts may be installed from a local or remote source. For <a class="anchor" href="https://gdpr.eu/" target="_blank" rel="noreferrer">GDPR compliance</a> and optimal performance we recommend installing the fonts locally. For this guide we'll demonstrate this process using free fonts from <a class="anchor" href="https://fonts.google.com/" target="_blank" rel="noreferrer">Google Fonts</a>.
		</p>
		<TabGroup regionPanel="space-y-4">
			<Tab bind:group={tabsFontImport} name="tab1" value={0}>Local (recommended)</Tab>
			<Tab bind:group={tabsFontImport} name="tab2" value={1}>Remote</Tab>
			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if tabsFontImport === 0}
					<!-- 1 -->
					<h3 class="h3" data-toc-ignore>1. Download a Font</h3>
					<p>Select a font on Google Fonts, then tap the "Download Family" button near the top-right of the page.</p>
					<div class="card variant-glass p-4 flex justify-center items-center gap-2">
						{#each activeFonts as f}
							<a class="btn variant-filled-primary" href={f.url} target="_blank" rel="noreferrer">
								<i class="fa-solid fa-download" />
								<span>{f.name}</span>
							</a>
						{/each}
					</div>
					<!-- 2 -->
					<h3 class="h3" data-toc-ignore>2. Add the Font Files</h3>
					<p>
						Unzip the downloaded file, then copy all font files to the <code class="code">/static/fonts</code> directory in the root of your
						SvelteKit project. When available we recommend using variable fonts as they require only a single file. Otherwise copy all
						static font file assets to the <code class="code">/static/fonts</code> directory.
					</p>
					{#each activeFonts as f}
						<CodeBlock language="plaintext" code={`/static/fonts/${f.file}`} />
					{/each}
					<!-- 3 -->
					<h3 class="h3" data-toc-ignore>3. Apply @font-face</h3>
					<!-- prettier-ignore -->
					<p>At the top of your global stylesheet <code class="code">/src/app.postcss</code> append the <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face" target="_blank" rel="noreferrer">@font-face</a> settings per each font. The <code class="code">font-family</code> assigns the font's reference name, while <code class="code">src</code> points to the font file(s) in your <code class="code">/static/fonts</code> directory.</p>
					{#each activeFonts as f}
						<CodeBlock
							language="css"
							code={`
@font-face {
	/* Reference name */
	font-family: '${f.name}';
	/* For multiple files use commas, ex: url(), url(), ... */
	src: url('/fonts/${f.file}');
}
							`}
						/>
					{/each}
					<!-- 4 -->
					<h3 class="h3" data-toc-ignore>4. Set the Font Family.</h3>
					<p>
						Use CSS Property overrides or open your custom theme to set the font family for <em>base</em> and
						<em>heading</em> properties. Be sure to use the same reference name set above or your font <u>will not work</u>.
					</p>
					{#each activeFonts as f}
						<CodeBlock
							language="css"
							code={`
:root {
    --theme-font-family-base: '${f.name}', sans-serif;
    --theme-font-family-heading: '${f.name}', sans-serif;
    /* ... */
}
                        	`}
						/>
					{/each}
					<!-- 5 -->
					<h3 class="h3" data-toc-ignore>5. Preloading Fonts.</h3>
					<p>
						To avoid your page flickering during hydration, consider preloading fonts within the <code class="code">head</code>
						tag in <code class="code">app.html</code>
					</p>
					{#each activeFonts as f}
						<CodeBlock
							language="html"
							code={`
<link
	rel="preload"
	href="%sveltekit.assets%/fonts/${f.file}"
	as="font"
	type="font/ttf"
	crossorigin
/>
                        	`}
						/>
					{/each}
				{:else if tabsFontImport === 1}
					<aside class="alert alert-message variant-ghost-warning">
						<p><strong>Warning:</strong> please be aware that using remote imports are typically not GDPR compliant.</p>
					</aside>
					<!-- 1 -->
					<h3 class="h3" data-toc-ignore>1. Select a Font</h3>
					<p>
						Choose a font on Google Fonts, select each font weight you wish to use, then tap the "View Select Families" icon button at the
						very top-right of the page. Under the "Use on the Web" section, choose <code class="code">@import</code>, then copy the import
						statement.
					</p>
					<div class="card variant-glass p-4 flex justify-center items-center gap-2">
						{#each activeFonts as f}
							<a class="btn variant-filled-primary" href={f.url} target="_blank" rel="noreferrer">
								<span>{f.name}</span>
								<i class="fa-solid fa-arrow-up-right-from-square" />
							</a>
						{/each}
					</div>
					<h3 class="h3" data-toc-ignore>2. Set the Import</h3>
					<p>
						Open your global stylesheet in <code class="code">/src/app.postcss</code> and paste the import statement at the top of the file.
					</p>
					{#each activeFonts as f}
						<CodeBlock language="css" code={`@import url('${f.import}');`} />
					{/each}
					<!-- 3 -->
					<h3 class="h3" data-toc-ignore>3. Set the Font Family.</h3>
					<p>
						Google Fonts also provides a recommend font family set. Copy the provided set, then apply this to either the <em>base</em> or
						<em>heading</em> properties as desired.
					</p>
					{#each activeFonts as f}
						<CodeBlock
							language="css"
							code={`
:root {
    --theme-font-family-base: '${f.name}', sans-serif;
    --theme-font-family-heading: '${f.name}', sans-serif;
    /* ... */
}
                        	`}
						/>
					{/each}
				{/if}
			</svelte:fragment>
		</TabGroup>
	</section>
</LayoutPage>
