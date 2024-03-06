<script lang="ts">
	// Icons
	import IconColors from 'lucide-svelte/icons/palette';
	import IconTypography from 'lucide-svelte/icons/a-large-small';
	import IconSpacing from 'lucide-svelte/icons/scaling';
	import IconEdges from 'lucide-svelte/icons/box-select';
	// Fieldsets
	import Colors from '$lib/components/fieldsets/Colors.svelte';
	import Typography from '$lib/components/fieldsets/Typography.svelte';
	import Spacing from '$lib/components/fieldsets/Spacing.svelte';
	import Edges from '$lib/components/fieldsets/Edges.svelte';
	// Components
	import Lightswitch from '$lib/components/utilities/Lightswitch.svelte';
	// Constants
	import { designModes } from '$lib/constants';
	// State
	import { stateDisplay } from '$lib/state.svelte';

	// Reactive State
	let category = $state('colors');

	function setCategory(value: string) {
		category = value;
	}

	function activeCategory(value: string) {
		return category === value ? 'preset-filled-primary-500' : 'hover:preset-tonal';
	}

	function setDisplayMode(value: string) {
		stateDisplay.mode = value;
	}

	function activeDisplay(value: string) {
		return stateDisplay.mode === value ? 'preset-filled-primary-500' : 'hover:preset-tonal';
	}
</script>

<form>
	<!-- Header -->
	<!-- prettier-ignore -->
	<header
		class="{designModes[stateDisplay.mode]} bg-white/10 dark:bg-black/10 backdrop-blur-xl border-b border-t-0 border-l-0 border-r-0 border-surface-200-800 sticky top-0 z-10 p-4 !py-4 md:p-8 space-y-4"
	>
		<section class="flex gap-4 items-center">
			<!-- Form Select -->
			<nav class="btn-group grid w-full grid-cols-4 p-2 preset-outlined-surface-200-800 md:flex-row">
				<button type="button" class="btn {activeCategory('colors')}" onclick={() => setCategory('colors')} title="Colors">
					<IconColors size={20} />
				</button>
				<button
					type="button"
					class="btn {activeCategory('typography')}"
					onclick={() => setCategory('typography')}
					title="Typography"
				>
					<IconTypography size={24} />
				</button>
				<button
					type="button"
					class="btn {activeCategory('spacing')}"
					onclick={() => setCategory('spacing')}
					title="Spacing"
				>
					<IconSpacing size={20} />
				</button>
				<button type="button" class="btn {activeCategory('edges')}" onclick={() => setCategory('edges')} title="Edges">
					<IconEdges size={20} />
				</button>
			</nav>
			<!-- Lighswitch -->
			<Lightswitch />
		</section>
	</header>
	<!-- Fieldsets -->
	<div class="p-4 md:p-8">
		{#if category === 'colors'}<Colors />{/if}
		{#if category === 'typography'}<Typography />{/if}
		{#if category === 'spacing'}<Spacing />{/if}
		{#if category === 'edges'}<Edges />{/if}
	</div>
</form>
