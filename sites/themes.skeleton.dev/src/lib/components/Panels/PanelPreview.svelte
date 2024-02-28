<script lang="ts">
	// Icons
	import IconSkull from 'lucide-svelte/icons/paintbrush';
	import IconDesign from 'lucide-svelte/icons/eye';
	import IconCode from 'lucide-svelte/icons/code';
	// Components
	import Colors from '$lib/components/previews/Colors.svelte';
	import Typography from '$lib/components/previews/Typography.svelte';
	import Elements from '$lib/components/previews/Elements.svelte';

	// Reactive State
	let tab = $state('preview');
	let content = $state('typography');

	function setTab(value: string) {
		tab = value;
	}

	function setTabClass(value: string) {
		return tab === value ? 'preset-filled-primary-500' : 'hover:preset-tonal';
	}
</script>

<div class="mx-auto max-w-[1200px] space-y-4 md:space-y-8">
	<header class="card flex items-center justify-between gap-4 p-4 bg-surface-200-800">
		<!-- Branding -->
		<div class="flex items-center gap-3">
			<IconSkull size={24} />
			<h1 class="h5 font-mono">themer</h1>
		</div>
		<!-- Tabs -->
		<nav class="btn-group flex-col p-2 preset-outlined-surface-300-700 md:flex-row">
			<button type="button" class="btn btn-sm {setTabClass('preview')}" onclick={() => setTab('preview')}>
				<IconDesign size={16} />
			</button>
			<button type="button" class="btn btn-sm {setTabClass('code')}" onclick={() => setTab('code')}>
				<IconCode size={16} />
			</button>
		</nav>
	</header>
	{#if tab === 'preview'}
		<header class="grid grid-cols-[auto_1fr_auto] items-center gap-4">
			<p>Preview</p>
			<!-- Selection -->
			<select class="select" name="content" id="content" bind:value={content}>
				<option value="colors">Color Palette</option>
				<option value="typography">Typography</option>
				<option value="elements">Tailwind Elements</option>
			</select>
		</header>
		{#if content === 'colors'}<Colors />{/if}
		{#if content === 'typography'}<Typography />{/if}
		{#if content === 'elements'}<Elements />{/if}
	{:else}
		<pre class="pre">This is the code view.</pre>
	{/if}
</div>
