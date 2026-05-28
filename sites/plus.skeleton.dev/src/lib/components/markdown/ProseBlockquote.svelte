<script lang="ts">
	import type { Snippet } from 'svelte';

	type AlertType = 'note' | 'tip' | 'important' | 'warning' | 'caution';

	let { children, as: alertType }: { children?: Snippet; as?: AlertType } = $props();

	const alertConfig: Record<AlertType, { title: string; classes: string }> = {
		note: {
			title: 'Note',
			classes: 'preset-tonal border-l border-surface-950-50',
		},
		tip: {
			title: 'Tip',
			classes: 'preset-tonal-primary border-l border-primary-500',
		},
		important: {
			title: 'Important',
			classes: 'preset-tonal-success border-l border-success-500',
		},
		warning: {
			title: 'Warning',
			classes: 'preset-tonal-warning border-l border-warning-500',
		},
		caution: {
			title: 'Caution',
			classes: 'preset-tonal-error border-l border-error-500',
		},
	};

	const config = $derived(alertType ? alertConfig[alertType] : null);
</script>

{#if config}
	<div class="space-y-1 rounded-r-container border-l-4 px-4 py-3 {config.classes}">
		<p class="text-sm font-semibold tracking-wide uppercase">{config.title}</p>
		<div class="text-inherit">{@render children?.()}</div>
	</div>
{:else}
	<blockquote class="blockquote">{@render children?.()}</blockquote>
{/if}
