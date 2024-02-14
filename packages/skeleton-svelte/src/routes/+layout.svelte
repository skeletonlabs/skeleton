<script>
	import '../app.pcss';
</script>

<div class="h-screen grid grid-cols-[320px_minmax(0,_1fr)]">
	<!-- Nav -->
	<div class="bg-surface-100-900 p-8 overflow-y-auto space-y-8">
		<a class="type-scale-3 font-bold font-mono" href="/">skeleton-svelte</a>
		<hr class="hr" />
		<!-- Components -->
		<div class="space-y-8">
			<span class="font-bold">Components</span>
			<nav class="flex flex-col gap-2 type-scale-2">
				<a class="anchor" href="/components/test">Test</a>
				<a class="anchor" href="/components/accordions">Accordions</a>
				<a class="anchor" href="/components/app-bars">App Bars</a>
			</nav>
		</div>
	</div>
	<!-- Page -->
	<main class="p-8 overflow-y-auto">
		<slot />
	</main>
</div>
