<script>
	import '../app.pcss';

	import Switch from '$lib/components/Switch/Switch.svelte';
	// Icons
	import IconMoon from 'lucide-svelte/icons/moon';
	import IconSun from 'lucide-svelte/icons/sun';

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
		<label class="label flex items-center justify-between gap-4" for="mode">
			<p>Set Mode</p>
			<Switch id="mode" name="mode" stateActive="bg-surface-200" bind:checked={modeState} onCheckedChange={onModeChange}>
				{#snippet inactiveChild()}<IconMoon size="14" />{/snippet}
				{#snippet activeChild()}<IconSun size="14" />{/snippet}
			</Switch>
		</label>
		<hr class="hr" />
		<!-- Components -->
		<div class="space-y-8">
			<span class="font-bold">Components</span>
			<nav class="type-scale-2 flex flex-col gap-2">
				<!-- <a class="anchor" href="/components/test">Test</a> -->
				<a class="anchor" href="/components/accordions">Accordions</a>
				<a class="anchor" href="/components/avatars">Avatars</a>
				<a class="anchor" href="/components/app-bars">App Bars</a>
				<a class="anchor" href="/components/progress">Progress</a>
				<a class="anchor" href="/components/progress-rings">Progress Rings</a>
				<a class="anchor" href="/components/switch">Switch</a>
				<a class="anchor" href="/components/tabs">Tabs</a>
			</nav>
		</div>
	</div>
	<!-- Page -->
	<main class="space-y-8 overflow-y-auto p-8">
		<slot />
	</main>
</div>
