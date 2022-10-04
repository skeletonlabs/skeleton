<script lang="ts">
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import LightSwitch from '$lib/utilities/LightSwitch/LightSwitch.svelte';

	// A11y
	const tableKeys: any = {
		headings: ['Keys', 'Description'],
		source: [['<kbd>Space</kbd> or <kbd>Enter</kbd>', 'When focus is on the switch, changes the state of the switch.']]
	};
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
	<h2 class="sr-only">Examples</h2>
	<div class="card card-body flex justify-center items-center !py-10">
		<LightSwitch />
	</div>

	<!-- Usage -->
	<section class="space-y-8">
		<div class="space-y-4">
			<h2>Usage</h2>
			<CodeBlock language="html" code={`<LightSwitch />`} />
		</div>
		<div class="space-y-4">
			<h4>Configure Tailwind</h4>
			<p>
				See Tailwind's official <a href="https://tailwindcss.com/docs/dark-mode" target="_blank">dark mode</a> documentation for full instructions. Ensure you've added <code>darkMode: 'class'</code>
				to your <a href="/guides/tailwind">Tailwind config</a>.
			</p>
		</div>
		<div class="space-y-4">
			<h4>How It Works</h4>
			<p>
				By default this will match the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" target="_blank">prefers-color-scheme</a> setting in your device's operating
				system settings. However, when toggled, the following will occur.
			</p>
			<ul class="list-disc list-inside space-y-1">
				<li>If dark mode is enabled, a <code>dark</code> class will be applied to your <em>HTML</em> page element.</li>
				<li>All instances of the Light Switch share state and will update accordingly.</li>
				<li>
					A value of <code>mode: 'light | dark'</code> will persist in
					<a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">window.localStorage</a>.
				</li>
			</ul>
			<CodeBlock language="html" code={`<!-- Light Mode -->\n<html>`} />
			<CodeBlock language="html" code={`<!-- Dark Mode -->\n<html class="dark">`} />
		</div>
		<div class="space-y-4">
			<h4>Accessing Preferred and Current State</h4>
			<p>
				To check either the user's operating system preferred color scheme or the current lightswitch value, use the following Svelte store values. Note this may not be accureate if the LightSwitch
				component is not yet initialized.
			</p>
			<CodeBlock language="ts" code={`import { storePrefersDarkScheme, storeLightSwitch } from '@brainandbones/skeleton';`} />
			<ul class="list-disc list-inside space-y-1">
				<li><code>storePrefersDarkScheme</code> - The operating system preference. Value will be <em>true</em> for dark, <em>false</em> for light.</li>
				<li><code>storeLightSwitch</code> - <em>true</em> for dark, <em>false</em> for light. If <em>undefined</em>, use the operating system preference.</li>
			</ul>
		</div>
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<p>This component is treated as a <em>Switch</em>. See the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/switch/" target="_blank">ARIA Guidelines</a>.</p>

		<h3>Keyboard Interactions</h3>
		<DataTable headings={tableKeys.headings} source={tableKeys.source} />
	</section>
</div>
