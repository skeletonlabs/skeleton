<script lang="ts">
	// Icons
	import IconImport from 'lucide-svelte/icons/import';
	import IconDesign from 'lucide-svelte/icons/eye';
	import IconCode from 'lucide-svelte/icons/code';
	// Components
	import PreviewColors from '$lib/components/Previews/PreviewColors.svelte';
	import PreviewTypography from '$lib/components/Previews/PreviewTypography.svelte';
	import PreviewTailwind from '$lib/components/Previews/PreviewTailwind.svelte';

	// Reactive State
	let content = $state('colors');
	let tab = $state('preview');

	function setTab(value: string) {
		tab = value;
	}

	function setTabClass(value: string) {
		return tab === value ? 'preset-filled-primary-500' : 'hover:preset-tonal';
	}
</script>

<div class="mx-auto max-w-[1200px] space-y-4 md:space-y-8">
	<header class="grid grid-cols-[1fr_auto] items-center gap-4">
		<!-- Selection -->
		<select class="select" name="content" id="content" bind:value={content}>
			<option value="colors">Color Palette</option>
			<option value="typography">Typography</option>
			<option value="elements">Tailwind Elements</option>
		</select>
		<!-- Tabs -->
		<nav class="btn-group flex-col p-2 preset-outlined-surface-200-800 md:flex-row">
			<button type="button" class="btn btn-sm {setTabClass('preview')}" onclick={() => setTab('preview')}>
				<IconDesign size={16} />
			</button>
			<button type="button" class="btn btn-sm {setTabClass('code')}" onclick={() => setTab('code')}>
				<IconCode size={16} />
			</button>
		</nav>
	</header>
	{#if tab === 'preview'}
		{#if content === 'colors'}<PreviewColors />{/if}
		{#if content === 'typography'}<PreviewTypography />{/if}
		{#if content === 'elements'}<PreviewTailwind />{/if}
	{:else}
		<pre class="pre">This is the code view.</pre>
	{/if}
</div>
