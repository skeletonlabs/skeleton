<script lang="ts">
	// Icons
	import IconColors from 'lucide-svelte/icons/palette';
	import IconBackgrounds from 'lucide-svelte/icons/swatch-book';
	import IconSpacing from 'lucide-svelte/icons/scaling';
	import IconTypography from 'lucide-svelte/icons/whole-word';
	import IconEdges from 'lucide-svelte/icons/box-select';
	// Fieldsets
	import Colors from '$lib/components/fieldsets/Colors.svelte';
	import Backgrounds from '$lib/components/fieldsets/Backgrounds.svelte';
	import Spacing from '$lib/components/fieldsets/Spacing.svelte';
	import Typography from '$lib/components/fieldsets/Typography.svelte';
	import Edges from '$lib/components/fieldsets/Edges.svelte';

	// Reactive State
	let category = $state('colors');
</script>

<form class="space-y-10">
	<!-- Selection -->
	<div class="flex items-center gap-4">
		{#if category === 'colors'}<IconColors size={24} />{/if}
		{#if category === 'backgrounds'}<IconBackgrounds size={24} />{/if}
		{#if category === 'spacing'}<IconSpacing size={24} />{/if}
		{#if category === 'typography'}<IconTypography size={24} />{/if}
		{#if category === 'edges'}<IconEdges size={24} />{/if}
		<select class="select" name="category" id="category" bind:value={category}>
			<option value="colors">Colors</option>
			<option value="backgrounds">Backgrounds</option>
			<option value="spacing">Spacing</option>
			<option value="typography">Typography</option>
			<option value="edges">Edges</option>
		</select>
	</div>
	<hr class="hr" />
	<!-- Fieldsets -->
	{#if category === 'colors'}<Colors />{/if}
	{#if category === 'backgrounds'}<Backgrounds />{/if}
	{#if category === 'spacing'}<Spacing />{/if}
	{#if category === 'typography'}<Typography />{/if}
	{#if category === 'edges'}<Edges />{/if}
</form>
