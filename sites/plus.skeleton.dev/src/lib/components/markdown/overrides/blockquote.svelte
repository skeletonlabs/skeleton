<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	const alerts = {
		note: {
			title: 'Note',
			classes: 'preset-tonal border-surface-950-50',
		},
		tip: {
			title: 'Tip',
			classes: 'preset-tonal-primary border-primary-500',
		},
		important: {
			title: 'Important',
			classes: 'preset-tonal-success border-success-500',
		},
		warning: {
			title: 'Warning',
			classes: 'preset-tonal-warning border-warning-500',
		},
		caution: {
			title: 'Caution',
			classes: 'preset-tonal-error border-error-500',
		},
	} as const;

	export interface Props extends HTMLAttributes<HTMLElement> {
		as?: keyof typeof alerts;
	}
</script>

<script lang="ts">
	const { children, as: type, ...rest }: Props = $props();

	const config = $derived(type ? alerts[type] : null);
</script>

{#if config}
	<!-- Alert -->
	<div class="border-l-4 py-3 px-4 space-y-1 {config.classes}" {...rest}>
		<p class="font-bold uppercase">{config.title}</p>
		<p class="text-sm">
			{@render children?.()}
		</p>
	</div>
{:else}
	<!-- Standard -->
	<blockquote class="blockquote" {...rest}>
		{@render children?.()}
	</blockquote>
{/if}
