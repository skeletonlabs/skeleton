<script lang="ts">
	import '../app.pcss';
	// Components
	import Switch from '$lib/components/Switch/Switch.svelte';
	// Icons
	import IconMoon from 'lucide-svelte/icons/moon';
	import IconSun from 'lucide-svelte/icons/sun';

	let { children } = $props();
	let modeState = $state(false); // false = dark mode

	function onModeChange() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<div class="grid h-screen grid-cols-[320px_minmax(0,_1fr)]">
	<!-- Nav -->
	<div class="bg-surface-100-900 space-y-8 overflow-y-auto p-8">
		<a class="type-scale-3 bg-orange-500 p-2 font-mono font-bold text-white" href="/">skeleton-svelte</a>
		<hr class="hr" />
		<Switch name="mode" controlActive="bg-surface-200" bind:checked={modeState} onCheckedChange={onModeChange}>
			{#snippet inactiveChild()}<IconMoon size="14" />{/snippet}
			{#snippet activeChild()}<IconSun size="14" />{/snippet}
			<p>Toggle Mode</p>
		</Switch>
		<hr class="hr" />
		<!-- Components -->
		<div class="space-y-8">
			<span class="font-bold">Components</span>
			<nav class="type-scale-2 flex flex-col gap-2">
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
			</nav>
		</div>
		<!-- Svelte-Only -->
		<div class="space-y-8">
			<span class="font-bold">Svelte-Only</span>
			<nav class="type-scale-2 flex flex-col gap-2">
				<a class="anchor" href="/components/popovers">Popovers</a>
				<a class="anchor" href="/components/tooltips">Tooltips</a>
			</nav>
		</div>
	</div>
	<!-- Page -->
	<main class="space-y-8 overflow-y-auto p-8">
		{@render children?.()}
	</main>
</div>
