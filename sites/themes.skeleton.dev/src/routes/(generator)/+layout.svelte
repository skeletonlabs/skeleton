<div class="grid h-screen grid-rows-[auto_minmax(0,_1fr)]">
	<header class="border-b p-4 border-surface-200-800 md:px-8">
		<div class="flex items-center justify-between">
			<span class="font-mono">themes</span>
			<nav class="flex items-center gap-2">
				<button class="btn preset-outlined-surface-200-800 hover:preset-tonal" disabled>Import</button>
				<nav class="btn-group flex-col p-1.5 preset-outlined-surface-200-800 md:flex-row">
					<button type="button" class="btn btn-sm preset-filled-primary-500">Design</button>
					<button type="button" class="btn btn-sm hover:preset-tonal">Code</button>
				</nav>
			</nav>
		</div>
	</header>
	<main>
		<slot />
	</main>
</div>
