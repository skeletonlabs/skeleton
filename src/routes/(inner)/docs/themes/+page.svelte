<script lang="ts">
	import { themes } from '$docs/themes';
	// Docs
	import LayoutPage from '$docs/layouts/LayoutPage/LayoutPage.svelte';
	// Components
	import Tab from '$lib/components/Tab/Tab.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Local
	let activeTheme = themes[1];
	let tabsFontImport = 0;

	// Reactive
	$: activeFonts = activeTheme.fonts.length ? activeTheme.fonts : themes[0].fonts;
</script>

<LayoutPage>
	<header class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
		<div class="space-y-4">
			<h1 class="h1">Themes</h1>
			<p>Learn more about customizing Skeleton themes.</p>
		</div>
	</header>

	<section class="sticky top-4 z-[1] card variant-glass p-4 space-y-4">
		<p class="!text-center">Select your current theme to tailor the instructions below.</p>
		<label class="max-w-md mx-auto">
			<select class="select" bind:value={activeTheme}>
				{#each themes as theme}
					<option value={theme}>{theme.name}</option>
				{/each}
			</select>
		</label>
	</section>

	{#if activeTheme.file !== 'custom'}
		<section class="space-y-4">
			<h2 class="h2">Preset Extras</h2>
			<p>
				When using preset themes provided by Skeleton, consider implementing the <code class="code">data-theme</code> attribute on the
				<em>body</em>
				tag in <code class="code">app.html</code>. This implements additional settings such as background gradients, header font weights,
				and more.
			</p>
			<CodeBlock language="html" code={`<body data-theme="` + activeTheme.file + `">`} />
		</section>
	{/if}

	<section class="space-y-4">
		<h2 class="h2">Backgrounds</h2>
		<p>
			Your app's background is automatically set via a <a class="anchor" href="https://www.skeleton.dev/docs/tokens">design token</a> class.
			Adjust your theme's color scheme to customize. This affects both light and dark mode.
		</p>
		<CodeBlock language="css" code={`body { @apply bg-surface-50-900-token; }`} />
		<div class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
			<div class="space-y-4">
				<h3 class="h3">Background Images</h3>
				<p>
					You may optionally provide a background image, including the use of CSS mesh gradients. Mix in theme color properties to create
					fully adaptive gradient backgrounds.
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
body {
	background-image:
		radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
		radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
}
		`}
		/>
	</section>

	<section class="space-y-4">
		<h2 class="h2">CSS Properties</h2>
		<!-- prettier-ignore -->
		<p>
			If you open any existing theme, you can see they are made up of a number of <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*" target="_blank" rel="noreferrer">CSS Custom Properties</a> (aka CSS Variables). Similar to Javascript variables these can be modified and overwritten as desired. For example, if you add the following snippet to your global stylesheet in <code class="code">/src/app.postcss</code>, you can overwrite the <em>base</em> and <em>container</em> rounding styles for your current theme.
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
		<p>
			Likewise, if you wish to implement a custom the font family for a preset theme, you can modify the <em>base</em> and
			<em>heading</em>
			properties as shown below.
		</p>
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
			<a class="anchor" href="https://github.com/skeletonlabs/skeleton/tree/master/src/lib/themes" target="_blank" rel="noreferrer">View any existing theme</a> for a full list of available CSS custom properties. For heavy modifications to preset themes, consider copying the theme to your local project and use it like any other custom theme.
		</p>
	</section>

	<section class="space-y-4">
		<h2 class="h2">Custom Fonts</h2>
		<!-- prettier-ignore -->
		<p>
            Fonts may be installed from a local or remote source. For <a class="anchor" href="https://gdpr.eu/" target="_blank" rel="noreferrer">GDPR compliance</a> and optimal performance we recommend installing the fonts locally. For this guide we'll demonstrate this process using free fonts from <a class="anchor" href="https://fonts.google.com/" target="_blank" rel="noreferrer">Google Fonts</a>.
		</p>
		{#if activeTheme.fonts.length && activeTheme.file !== 'custom'}
			<aside class="alert variant-ghost-warning">
				<i class="fa-solid fa-circle-exclamation" />
				<div class="alert-message">
					<p>
						The <code class="code">{activeTheme.name}</code> theme makes use of custom fonts. We recommend you follow the instruction below.
					</p>
				</div>
			</aside>
		{:else if activeTheme.file !== 'custom'}
			<aside class="alert variant-ghost">
				<div class="alert-message">
					<p>The <code class="code">{activeTheme.name}</code> theme does not make use of a custom font.</p>
				</div>
			</aside>
		{/if}
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
