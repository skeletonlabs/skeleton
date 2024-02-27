<script lang="ts">
	import IconBrand from 'lucide-svelte/icons/skull';
	import IconImport from 'lucide-svelte/icons/import';
	import IconDesign from 'lucide-svelte/icons/eye';
	import IconCode from 'lucide-svelte/icons/code';
</script>

<div class="grid h-screen grid-rows-[auto_minmax(0,_1fr)]">
	<header class="border-b p-4 border-surface-200-800 md:px-8">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<IconBrand size={24} />
				<span class="font-mono">themes</span>
			</div>
			<nav class="flex items-center gap-2">
				<button class="btn preset-outlined-surface-200-800 hover:preset-tonal" title="Import">
					<IconImport size={16} />
				</button>
				<nav class="btn-group flex-col p-1.5 preset-outlined-surface-200-800 md:flex-row">
					<button type="button" class="btn btn-sm preset-filled-primary-500" title="Design">
						<IconDesign size={16} />
					</button>
					<button type="button" class="btn btn-sm hover:preset-tonal" title="Code">
						<IconCode size={16} />
					</button>
				</nav>
			</nav>
		</div>
	</header>
	<main>
		<slot />
	</main>
</div>
