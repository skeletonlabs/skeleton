<script lang="ts">
	// Icons
	import IconSkull from 'lucide-svelte/icons/paintbrush';
	import IconDesign from 'lucide-svelte/icons/eye';
	import IconCode from 'lucide-svelte/icons/code';
	// Components
	import Palette from '$lib/components/previews/Palette.svelte';
	import Typography from '$lib/components/previews/Typography.svelte';
	import Elements from '$lib/components/previews/Elements.svelte';
	import Components from '$lib/components/previews/Components.svelte';
	import CodeGen from '../previews/CodeGen.svelte';

	// Components
	import Lightswitch from '$lib/components/utilities/Lightswitch.svelte';

	// Reactive State
	let tab = $state('preview');
	let content = $state('palette');

	function setTab(value: string) {
		tab = value;
	}
	function activeTab(value: string) {
		return tab === value ? 'preset-filled-primary-500' : 'hover:preset-tonal';
	}

	function setContent(value: string) {
		content = value;
	}
	function activeContent(value: string) {
		return content === value ? 'preset-filled-primary-500' : 'hover:preset-tonal';
	}
</script>

<div class="mx-auto max-w-[1200px] space-y-4 px-4 md:space-y-8 md:px-8">
	<header
		class="sticky top-0 z-10 grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 rounded-bl-container rounded-br-container border border-t-0 p-4 border-surface-200-800 preset-filled-surface-100-900"
	>
		<!-- Branding -->
		<div class="flex items-center gap-3">
			<IconSkull size={28} />
			<h1 class="h5 font-mono">themer</h1>
		</div>
		<!-- Selection -->
		<nav class="btn-group grid grid-cols-4 p-1.5 preset-outlined-surface-200-800 md:flex-row">
			<button type="button" class="btn {activeContent('palette')}" onclick={() => setContent('palette')}>
				Palette
			</button>
			<button type="button" class="btn {activeContent('typography')}" onclick={() => setContent('typography')}>
				Typography
			</button>
			<button type="button" class="btn {activeContent('elements')}" onclick={() => setContent('elements')}>
				Elements
			</button>
			<button type="button" class="btn {activeContent('components')}" onclick={() => setContent('components')}>
				Components
			</button>
		</nav>
		<!-- Lighswitch -->
		<Lightswitch />
		<!-- Tabs -->
		<nav class="btn-group flex-col p-1.5 preset-outlined-surface-200-800 md:flex-row">
			<button type="button" class="btn {activeTab('preview')}" onclick={() => setTab('preview')}>
				<IconDesign size={20} />
			</button>
			<button type="button" class="btn {activeTab('code')}" onclick={() => setTab('code')}>
				<IconCode size={20} />
			</button>
		</nav>
	</header>
	{#if tab === 'preview'}
		{#if content === 'palette'}<Palette />{/if}
		{#if content === 'typography'}<Typography />{/if}
		{#if content === 'elements'}<Elements />{/if}
		{#if content === 'components'}<Components />{/if}
	{:else}
		<CodeGen />
	{/if}
</div>
