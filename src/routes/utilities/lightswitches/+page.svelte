<script lang="ts">
	import { Card, LightSwitch } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Lightswitch</h1>
		<p>
			Allows uses to toggle between light and dark themes using <a href="https://tailwindcss.com/docs/dark-mode" target="_blank">Tailwind's dark mode</a>
			feature.
		</p>
		<CodeBlock language="javascript" code={`import { LightSwitch } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<Card class="text-center py-10 overflow-visible">
		<LightSwitch />
	</Card>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<LightSwitch />`} />
	</section>
	
	<!-- How It Works -->
	<section class="space-y-4">
		<h2>How It Works</h2>
		<p>Uses a device's <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" target="_blank">prefers-color-scheme</a> setting is used. When toggled, a <code>dark</code> class is applied to your HTML element. This value persists using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">window.localStorage</a>.</p>
		<CodeBlock language="html" code={`
<!-- Light Mode -->
<html>
		`.trim()} />
		<CodeBlock language="html" code={`
<!-- Dark Mode -->
<html class="dark">
		`.trim()} />
		<p>See Tailwind's official <a href="https://tailwindcss.com/docs/dark-mode" target="_blank">dark mode</a> documentation for configuration settings.</p>
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<p>This component is treated as a <em>Switch</em>. See the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/switch/" target="_blank">ARIA Guidelines</a>.</p>
	</section>

</div>
