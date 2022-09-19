<script lang="ts">
	import { LightSwitch } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Lightswitch</h1>
		<p>
			Allows users to toggle between light and dark themes using <a href="https://tailwindcss.com/docs/dark-mode" target="_blank">Tailwind's dark mode</a>
			feature.
		</p>
		<CodeBlock language="javascript" code={`import { LightSwitch } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<div class="card card-body flex justify-center items-center !py-10">
		<LightSwitch />
	</div>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<LightSwitch />`} />
		<h4>Configure Tailwind</h4>
		<p>
			See Tailwind's official <a href="https://tailwindcss.com/docs/dark-mode" target="_blank">dark mode</a> documentation for full instructions. Ensure you've added <code>darkMode: 'class'</code> to
			your <a href="/guides/tailwind">Tailwind config</a>.
		</p>
		<h4>How It Works</h4>
		<p>
			By default this will match the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" target="_blank">prefers-color-scheme</a> setting in your device's operating system
			settings. However, when toggled, the following will occur.
		</p>
		<ul class="list-disc list-inside space-y-1">
			<li>If dark mode is enabled, a <code>dark</code> class will be applied to your <em>HTML</em> page element.</li>
			<li>All instances of the Light Switch share state and will update accordingly.</li>
			<li>
				A value of <code>mode: 'light | dark'</code> will persist in
				<a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">window.localStorage</a>.
			</li>
		</ul>
		<CodeBlock
			language="html"
			code={`
<!-- Light Mode -->
<html>
		`.trim()}
		/>
		<CodeBlock
			language="html"
			code={`
<!-- Dark Mode -->
<html class="dark">
		`.trim()}
		/>
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<p>This component is treated as a <em>Switch</em>. See the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/switch/" target="_blank">ARIA Guidelines</a>.</p>
	</section>
</div>
