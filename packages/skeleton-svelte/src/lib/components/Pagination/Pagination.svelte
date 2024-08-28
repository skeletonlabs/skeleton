<script lang="ts">
	import * as pagination from '@zag-js/pagination';
	import { normalizeProps, useMachine } from '@zag-js/svelte';

	import type { PaginationProps } from './types.js';
	import { useId } from '$lib/internal/use-id.js';

	let {
		page = $bindable(1),
		data,
		alternative = false,
		textSeparator = 'of',
		// Titles
		titleFirst,
		titlePrevious,
		titleNumeral,
		titleNext,
		titleLast,
		// Root
		base = 'inline-flex items-stretch overflow-hidden',
		background = 'preset-outlined-surface-200-800',
		border = 'p-2',
		gap = 'gap-2',
		padding = '',
		rounded = 'rounded-container',
		classes = '',
		// Buttons
		buttonBase = 'btn',
		buttonActive = 'preset-filled',
		buttonInactive = 'preset-tonal',
		buttonHover = 'hover:preset-filled',
		buttonClasses = '',
		// Children
		labelFirst,
		labelPrevious,
		labelEllipsis,
		labelNext,
		labelLast,
		// Zag ---
		...zagProps
	}: PaginationProps = $props();

	// Zag
	const [snapshot, send] = useMachine(
		pagination.machine({
			id: useId(),
			count: data.length,
			onPageChange(details) {
				page = details.page;
			}
		}),
		{
			context: {
				...zagProps,
				get page() {
					return page;
				}
			}
		}
	);
	const api = $derived(pagination.connect(snapshot, send, normalizeProps));

	// Reactive
	const rxButtonActive = (page: { value: number }) => {
		return snapshot.context.page === page.value ? buttonActive : `${buttonInactive} ${buttonHover}`;
	};
</script>

{#if api.totalPages > 1}
	<div {...api.getRootProps()} class="{base} {background} {border} {gap} {padding} {rounded} {classes}" data-testid="pagination">
		<!-- Button: First Page -->
		{#if alternative}
			<button
				type="button"
				onclick={api.goToFirstPage}
				class="{buttonBase} {buttonInactive} {buttonHover} {buttonClasses}"
				title={titleFirst}
				disabled={api.page === 1}
				data-testid="pagination-button-previous"
			>
				{#if labelFirst}{@render labelFirst()}{:else}&laquo;{/if}
			</button>
		{/if}
		<!-- Button: Previous Page -->
		<button
			type="button"
			{...api.getPrevTriggerProps()}
			class="{buttonBase} {buttonInactive} {buttonHover} {buttonClasses}"
			title={titlePrevious}
			disabled={api.page === 1}
			data-testid="pagination-button-previous"
		>
			{#if labelPrevious}{@render labelPrevious()}{:else}&larr;{/if}
		</button>
		<!-- Numeral List -->
		{#each api.pages as page, i}
			{#if !alternative && page.type === 'page'}
				<!-- Numeral -->
				<button
					type="button"
					{...api.getItemProps(page)}
					class="{buttonBase} {rxButtonActive(page)} {buttonClasses}"
					title={titleNumeral && `${titleNumeral} ${page.value}`}
					data-testid="pagination-button-numeral"
				>
					{page.value}
				</button>
			{:else}
				<!-- Ellipsis -->
				<span
					{...api.getEllipsisProps({ index: i })}
					class="{buttonBase} {buttonInactive} {buttonClasses}"
					data-testid="pagination-ellipsis"
				>
					{#if labelEllipsis}{@render labelEllipsis()}{:else}&ctdot;{/if}
				</span>
			{/if}
		{/each}
		<!-- Alternative Interface -->
		{#if alternative}
			<span class="{buttonBase} {buttonInactive} {buttonClasses}">
				<span>
					{api.pageRange.start + 1} - {api.pageRange.end}
				</span>
				<span class="opacity-60">
					{api.page}
					{textSeparator}
					{api.count}
				</span>
			</span>
		{/if}
		<!-- Button: Next Page -->
		<button
			type="button"
			{...api.getNextTriggerProps()}
			class="{buttonBase} {buttonInactive} {buttonHover} {buttonClasses}"
			title={titleNext}
			disabled={!api.nextPage}
			data-testid="pagination-button-next"
		>
			{#if labelNext}{@render labelNext()}{:else}&rarr;{/if}
		</button>
		<!-- Button: Last Page -->
		{#if alternative}
			<button
				type="button"
				onclick={api.goToLastPage}
				class="{buttonBase} {buttonInactive} {buttonHover} {buttonClasses}"
				title={titleLast}
				disabled={!api.nextPage}
				data-testid="pagination-button-previous"
			>
				{#if labelLast}{@render labelLast()}{:else}&raquo;{/if}
			</button>
		{/if}
	</div>
{/if}
