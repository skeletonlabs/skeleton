<script lang="ts">
	import '../app.css';
	import LightSwitch from './light-switch.svelte';

	let { children } = $props();
</script>

<div class="grid h-screen grid-cols-[320px_minmax(0,_1fr)]">
	<div class="bg-surface-100-900 space-y-8 overflow-y-auto p-8">
		<header class="flex justify-between items-center">
			<a class="inline-block text-sm bg-orange-500 p-2 font-mono font-bold text-white" href="/">skeleton-svelte</a>
			<LightSwitch />
		</header>
		<hr class="hr" />
		<div class="flex flex-col gap-4">
			<div class="font-bold">Components</div>
			<nav class="text-sm flex flex-col gap-1">
				<a class="anchor" href="/components/accordion"> Accordion </a>
				<a class="anchor" href="/components/avatar"> Avatar </a>
				<a class="anchor" href="/components/popover"> Popover </a>
				<a class="anchor" href="/components/progress-linear"> Progress Linear </a>
				<a class="anchor" href="/components/rating-group"> Rating Group </a>
				<a class="anchor" href="/components/switch"> Switch </a>
				<a class="anchor" href="/components/tabs"> Tabs </a>
				<a class="anchor" href="/components/toast"> Toast </a>
			</nav>
		</div>
	</div>
	<main class="space-y-8 overflow-y-auto p-8">
		{@render children?.()}
	</main>
</div>
