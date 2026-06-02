<script lang="ts">
	import type { Snippet } from 'svelte';

	type AlertType = 'note' | 'tip' | 'important' | 'warning' | 'caution';

	let { children, as: alertType }: { children?: Snippet; as?: AlertType } = $props();

	const alertConfig: Record<AlertType, { title: string; classes: string }> = {
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
	};

	const config = $derived(alertType ? alertConfig[alertType] : null);
</script>

{#if config}
	<!-- Alert -->
	<div class="border-l-4 py-3 px-4 space-y-1 {config.classes}">
		<p class="font-bold uppercase">{config.title}</p>
		<p class="text-sm">{@render children?.()}</p>
	</div>
{:else}
	<!-- Standard -->
	<blockquote class="blockquote">{@render children?.()}</blockquote>
{/if}
