<script lang="ts">
	import { getContext } from 'svelte';

	// Props
	export let href: string = '';
	export let current: boolean = false;

	// Context
	export let separator: string = getContext('separator');

	// Base Classes
	const cBaseCrumb: string = 'flex items-center space-x-4';
	const cBaseAnchor: string = 'flex justify-center items-center space-x-2';
	const cBaseSeperator: string = 'flex fill-surface-500 text-surface-500 w-2';

	// Reactive Classes
	$: classesCurrent = current ? 'opacity-30 transition-transform active:scale-95' : '';
</script>

<div class="crumb {cBaseCrumb} {$$props.class}" data-testid="crumb">

	<!-- Anchor -->
	<a {href} class="crumb-anchor {cBaseAnchor} {classesCurrent}" data-testid="crumb-anchor">
		{#if $$slots.lead}<slot name="lead"></slot>{/if}
		<div><slot /></div>
	</a>
	
	<!-- Seperator -->
	{#if !current}
	<div class="separator {cBaseSeperator}">{@html separator}</div>
	{/if}

</div>