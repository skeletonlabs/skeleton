<script lang="ts">
	import '../app.css';
	import LightSwitch from './light-switch.svelte';

	let { children } = $props();
</script>

<div class="grid h-screen grid-cols-[320px_minmax(0,_1fr)]">
	<!-- Nav -->
	<div class="bg-surface-100-900 space-y-8 overflow-y-auto p-8">
		<header class="space-y-8">
			<a class="inline-block text-sm bg-orange-500 p-2 font-mono font-bold text-white" href="/">skeleton-svelte</a>
			<hr class="hr" />
			<LightSwitch></LightSwitch>
			<hr class="hr" />
			<!-- Components -->
			<div class="space-y-8">
				<div class="font-bold">Components</div>
				<nav class="text-sm flex flex-col gap-2">
					<a class="anchor" href="/components/accordions">Accordions</a>
					<a class="anchor" href="/components/app-bars">App Bars</a>
					<a class="anchor" href="/components/avatars">Avatars</a>
					<a class="anchor" href="/components/file-upload">File Upload</a>
					<a class="anchor" href="/components/navigation">Navigation</a>
					<a class="anchor" href="/components/pagination">Pagination</a>
					<a class="anchor" href="/components/progress">Progress</a>
					<a class="anchor" href="/components/progress-rings">Progress Rings</a>
					<a class="anchor" href="/components/ratings">Ratings</a>
					<a class="anchor" href="/components/segment-control">Segment Control</a>
					<a class="anchor" href="/components/slider">Slider</a>
					<a class="anchor" href="/components/switch">Switch</a>
					<a class="anchor" href="/components/tabs">Tabs</a>
					<a class="anchor" href="/components/tags-input">Tags Input</a>
					<a class="anchor" href="/components/toast">Toast</a>
				</nav>
			</div>
			<!-- Svelte-Only -->
			<div class="space-y-8">
				<div class="font-bold">Svelte-Only</div>
				<nav class="text-sm flex flex-col gap-2">
					<a class="anchor" href="/components/popover">Popover</a>
					<a class="anchor" href="/components/tooltip">Tooltip</a>
					<a class="anchor" href="/components/combobox">Combobox</a>
					<a class="anchor" href="/components/modal">Modal</a>
				</nav>
			</div>
		</header>
	</div>
	<!-- Page -->
	<main class="space-y-8 overflow-y-auto p-8">
		{@render children?.()}
	</main>
</div>
