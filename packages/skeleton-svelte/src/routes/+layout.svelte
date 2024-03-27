<script>
	import '../app.pcss';
</script>

<div class="grid h-screen grid-cols-[320px_minmax(0,_1fr)]">
	<!-- Nav -->
	<div class="space-y-8 overflow-y-auto p-8 bg-surface-100-900">
		<a class="font-mono font-bold type-scale-3" href="/">skeleton-svelte</a>
		<hr class="hr" />
		<!-- Components -->
		<div class="space-y-8">
			<span class="font-bold">Components</span>
			<nav class="flex flex-col gap-2 type-scale-2">
				<!-- <a class="anchor" href="/components/test">Test</a> -->
				<a class="anchor" href="/components/accordions">Accordions</a>
				<a class="anchor" href="/components/avatars">Avatars</a>
				<a class="anchor" href="/components/app-bars">App Bars</a>
				<a class="anchor" href="/components/progress">Progress</a>
			</nav>
		</div>
	</div>
	<!-- Page -->
	<main class="space-y-8 overflow-y-auto p-8">
		<slot />
	</main>
</div>
