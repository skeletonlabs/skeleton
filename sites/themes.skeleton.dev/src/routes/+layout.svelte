<script>
	import '../app.pcss';
</script>

<div class="grid h-full grid-rows-[auto_1fr]">
	<header class="border-b p-4 border-surface-200-800 md:px-8">
		<div class="flex items-center justify-between">
			<span class="font-mono">themes</span>
			<nav class="flex gap-2">
				<button class="btn preset-outlined-surface-200-800 hover:preset-tonal" disabled>Import</button>
				<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">Export</button>
			</nav>
		</div>
	</header>
	<main>
		<slot />
	</main>
</div>
