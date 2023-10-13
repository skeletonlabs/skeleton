<script lang="ts">
	import { themes, type Theme } from '$lib/themes';
	// Components
	import { CodeBlock } from '@skeletonlabs/skeleton';

	// Local
	let activeTheme = themes[1];
	$: activeThemeStylesheet = `
plugins: [
	skeleton({
		themes: { preset: [ "${activeTheme.file}" ] }
	})
]\n
`;

	// Copy Theme Import to Clipboard
	function setActiveTheme(theme: Theme): void {
		activeTheme = theme;
	}
</script>

<!-- Header -->
<section class="space-y-4">
	<h2 class="h2">Add Themes</h2>
	<p>Skeleton provides several preset themes out of the box. Select a theme to learn how to implement it.</p>
	<!-- Presets -->
	<div class="space-y-4">
		<nav class="grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each themes.slice(1, themes.length) as preset}
				<div
					class="card card-hover p-4 text-white hover:ring-surface-500/50 cursor-pointer space-y-4"
					style:background={preset.surface}
					on:click={() => {
						setActiveTheme(preset);
					}}
					on:keydown={() => {
						setActiveTheme(preset);
					}}
				>
					<div class="flex justify-between items-center gap-4">
						<span class="text-center font-bold">{preset.name}</span>
						<ul class="flex justify-center items-center -space-x-1">
							{#each preset.colors as color}
								<li class="aspect-square w-3 xl:w-4 rounded-full" style:background={color} />
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</nav>
		<p>
			First, register you preferred theme(s) in <code class="code">tailwind.config.[ts|js|cjs]</code>. This will ensure each theme is
			available to use.
		</p>
		<CodeBlock language="ts" code={activeThemeStylesheet} />
		<p>
			Next, open <code class="code">/src/app.html</code> and set the active theme using the <code class="code">data-theme</code>
			attribute.
		</p>
		<CodeBlock language="html" code={`<body data-theme="${activeTheme.file}">`} />
	</div>

	<!-- Theme Customization -->
	<div class="card variant-glass p-4">
		<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<p>Learn more about Skeleton themes and customization.</p>
			<a class="btn variant-filled-secondary" href="/docs/themes">Themes Guide &rarr;</a>
		</div>
	</div>

	<!-- Theme Generator -->
	<div class="card variant-glass p-4">
		<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<p>Create a custom theme using the theme generator.</p>
			<a class="btn variant-filled-secondary" href="/docs/generator">Theme Generator &rarr;</a>
		</div>
	</div>
</section>
