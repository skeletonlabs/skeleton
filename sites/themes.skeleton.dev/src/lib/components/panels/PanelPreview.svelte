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
	// Constants
	import { designModes } from '$lib/constants';
	// State
	import { stateDisplay } from '$lib/state.svelte';

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
	<!-- prettier-ignore -->
	<header
		class="{designModes[stateDisplay.mode]} sticky top-0 z-10 grid grid-cols-[1fr_auto_1fr] justify-between items-center gap-4 border-t-0 rounded-bl-container rounded-br-container p-4"
	>
		<!-- Branding -->
		<div class="flex items-center gap-4">
			<IconSkull size={28} />
			<h1 class="grid grid-cols-1">
				<span class="font-bold font-mono">skeleton</span>
				<small class="opacity-50">theme generator</small>
			</h1>
		</div>
		<!-- Selection -->
		<nav class="btn-group flex p-2 preset-outlined-surface-200-800 md:flex-row">
			<button
				type="button"
				class="btn {activeContent('palette')}"
				onclick={() => setContent('palette')}
				disabled={tab === 'code'}
			>
				Palette
			</button>
			<button
				type="button"
				class="btn {activeContent('typography')}"
				onclick={() => setContent('typography')}
				disabled={tab === 'code'}
			>
				Typography
			</button>
			<button
				type="button"
				class="btn {activeContent('elements')}"
				onclick={() => setContent('elements')}
				disabled={tab === 'code'}
			>
				Elements
			</button>
			<!-- <button
				type="button"
				class="btn {activeContent('components')}"
				onclick={() => setContent('components')}
				disabled={tab === 'code'}
			>
				Components
			</button> -->
		</nav>
		<!-- Tabs -->
		<div class="flex justify-end">
			<nav class="btn-group flex-col p-2 preset-outlined-surface-200-800 md:flex-row">
				<button type="button" class="btn {activeTab('preview')}" onclick={() => setTab('preview')}>
					<IconDesign size={20} />
				</button>
				<button type="button" class="btn {activeTab('code')}" onclick={() => setTab('code')}>
					<IconCode size={20} />
				</button>
			</nav>
		</div>
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
