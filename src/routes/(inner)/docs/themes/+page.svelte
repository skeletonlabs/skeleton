<script lang="ts">
	import { themes } from '../get-started/themes';
	// Docs
	import LayoutPage from '$docs/layouts/LayoutPage/LayoutPage.svelte';
	// Components
	import Tab from '$lib/components/Tab/Tab.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Local
	let activeThemeName: string = 'skeleton';
	let tabsFontImport: number = 0;
</script>

<LayoutPage>
	<header class="space-y-4">
		<h1>Themes</h1>
		<!-- prettier-ignore -->
		<p>Learn more about customizing Skeleton themes.</p>
	</header>

	<hr />

	<section class="card p-4 space-y-4 text-center">
		<p>Tailor the instructions below to a specific preset theme.</p>
		<label class="label max-w-md mx-auto">
			<select class="select" bind:value={activeThemeName}>
				{#each themes as theme}
					<option value={theme.file}>{theme.name}</option>
				{/each}
			</select>
		</label>
	</section>

	<section class="space-y-4">
		<h2>Preset Extras</h2>
		<p>
			When using preset themes provided by Skeleton, consider implementing the <code>data-theme</code> attribute on the <em>body</em>
			tag in <code>app.html</code>. This introduces additional settings, such as background gradients, header font weights, and more.
		</p>
		<CodeBlock language="html" code={`<body data-theme="` + activeThemeName + `">`} />
	</section>

	<!-- <a class="btn variant-ghost-warning" href="https://github.com/skeletonlabs/skeleton/blob/master/src/lib/themes/theme-skeleton.css#L115" target="_blank" rel="noreferrer">Reference</a> -->
	<section class="space-y-4">
		<h2>Backgrounds</h2>
		<p>Consider pairing this with a <strong>CSS Mesh Gradient</strong> or other background image.</p>
		<CodeBlock language="css" code={`body { @apply bg-surface-50-900-token; }`} />
		<div class="card variant-glass p-4 text-center">
			<a class="btn variant-filled font-bold" href="https://csshero.org/mesher/" target="_blank" rel="noreferrer">
				<span>Mesher</span>
				<small class="opacity-50">by CSS Hero</small>
			</a>
		</div>
	</section>

	<section class="space-y-4">
		<h2>Custom Fonts</h2>
		<!-- prettier-ignore -->
		<p>
            Fonts may be installed locally or imported from a remote source. For <a href="https://gdpr.eu/" target="_blank" rel="noreferrer">GDPR compliance</a> and optimal performance we recommend the local install method. For this guide we'll demonstrate this process using <a href="https://fonts.google.com/" target="_blank" rel="noreferrer">Google Fonts</a>.
		</p>
		<TabGroup regionPanel="space-y-4">
			<Tab bind:group={tabsFontImport} name="tab1" value={0}>Local (recommended)</Tab>
			<Tab bind:group={tabsFontImport} name="tab2" value={1}>Remote Import</Tab>
			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if tabsFontImport === 0}
					<!-- 1 -->
					<h3 data-toc-ignore>1. Download a Font</h3>
					<p>Select a font on Google Fonts, then tap the "Download Family" button near the top-right of the page.</p>
					<div class="card variant-glass p-4 text-center">
						<a
							class="btn variant-filled-primary"
							href="https://fonts.google.com/specimen/Quicksand?query=Quicksand"
							target="_blank"
							rel="noreferrer"
						>
							Google Fonts: Quicksand
						</a>
					</div>
					<!-- 2 -->
					<h3 data-toc-ignore>2. Add the Font Files</h3>
					<p>
						Unzip the downloaded file, then copy the font file(s) to the <code>/static/fonts</code> directory in the root of your SvelteKit project.
						When available, we recommend using variable fonts as these require only a single file.
					</p>
					<CodeBlock language="plaintext" code={`/static/fonts/Quicksand.ttf`} />
					<!-- 3 -->
					<h3 data-toc-ignore>3. Apply @font-face</h3>
					<!-- prettier-ignore -->
					<p>At the top of your global stylesheet <code>/src/app.postcss</code> append the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face" target="_blank" rel="noreferrer">@font-face</a> settings per each font. The <code>font-family</code> assigns the font's reference name, while <code>src</code> points to the font file(s) in your <code>/static/fonts</code> directory.</p>
					<CodeBlock
						language="css"
						code={`
@font-face {
    /* Reference name */
    font-family: 'Quicksand';
    /* For multiple files use commas, ex: url(), url(), ... */
	src: url('./fonts/Quicksand.ttf');
}
                        `}
					/>
					<!-- 4 -->
					<h3 data-toc-ignore>4. Set the Font Family.</h3>
					<p>
						When creating a custom theme, open your theme file and provide your desired font family set for the <em>base</em> and
						<em>heading</em> properties. Be sure to use the same reference name set above or your font <u>will not work</u>.
					</p>
					<CodeBlock
						language="css"
						code={`
:root {
    --theme-font-family-base: 'Quicksand', sans-serif;
    --theme-font-family-heading: 'Quicksand', sans-serif;
    /* ... */
}
                        `}
					/>
				{:else if tabsFontImport === 1}
					<p>(work in progress)</p>
				{/if}
			</svelte:fragment>
		</TabGroup>
	</section>
</LayoutPage>
