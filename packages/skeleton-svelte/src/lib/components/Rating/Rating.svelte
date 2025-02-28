<script lang="ts" module>
	import { createRawSnippet } from 'svelte';

	const starEmpty = createRawSnippet(() => {
		return {
			render: () => /* html */ `
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height="24" width="24">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
	        </svg>
		`
		};
	});

	const starHalf = createRawSnippet(() => {
		return {
			render: () => /* html */ `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height="24" width="24">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
				<defs>
                    <linearGradient id="half-fill">
                        <stop offset="50%" stop-color="currentColor" />
                        <stop offset="50%" stop-color="transparent" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#half-fill)"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                />
	        </svg>
        `
		};
	});

	const starFull = createRawSnippet(() => {
		return {
			render: () => /*html*/ `
        	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
                <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                />
	        </svg>
        `
		};
	});
</script>

<script lang="ts">
	import * as rating from '@zag-js/rating-group';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { RatingProps } from './types.js';

	// Props
	const {
		// Root
		base = '',
		classes = '',
		// Control
		controlBase = 'flex',
		controlGap = 'gap-2',
		controlClasses,
		// Label
		labelBase = 'label-text',
		labelClasses = '',
		// Item
		itemBase = 'cursor-pointer',
		itemClasses = '',
		// State
		stateReadOnly = '',
		stateDisabled = 'cursor-not-allowed opacity-50',
		// Icons
		iconEmpty = starEmpty,
		iconHalf = starHalf,
		iconFull = starFull,
		// Children
		label,
		// Zag
		...zagProps
	}: RatingProps = $props();

	// Zag
	const id = $props.id();
	const service = useMachine(rating.machine, () => ({
		id: id,
		...zagProps
	}));
	const api = $derived(rating.connect(service, normalizeProps));

	// Reactive
	const rxReadOnly = $derived(service.prop('readOnly') ? stateReadOnly : '');
	const rxDisabled = $derived(service.prop('disabled') ? stateDisabled : '');
</script>

<!-- @component A visual representation of a numeric range. -->

<!-- Root -->
<div class="{base} {classes}" {...api.getRootProps()} data-testid="rating">
	<!-- Label -->
	{#if !!label}
		<label class="{labelBase} {labelClasses}" {...api.getLabelProps()} data-testid="rating-label">
			{@render label()}
		</label>
	{/if}
	<!-- Control -->
	<div
		class="{controlBase} {controlGap} {rxReadOnly} {rxDisabled} {controlClasses}"
		{...api.getControlProps()}
		data-testid="rating-control"
	>
		{#each api.items as index}
			{@const itemState = api.getItemState({ index })}
			<!-- Item -->
			<span class="{itemBase} {itemClasses}" {...api.getItemProps({ index })} data-testid="rating-item">
				{#if !itemState.highlighted}
					{@render iconEmpty()}
				{:else if itemState.half}
					{@render iconHalf()}
				{:else}
					{@render iconFull()}
				{/if}
			</span>
		{/each}
	</div>
	<!-- Hidden Input -->
	<input {...api.getHiddenInputProps()} data-testid="rating-input" />
</div>
