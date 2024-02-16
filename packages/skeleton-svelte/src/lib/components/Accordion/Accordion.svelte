<script lang="ts">
	import { setContext, type Snippet } from 'svelte';

	// FIXME:
	// import { State } from '$lib/utils.svelte.js';
	export class State<T> {
		value = $state() as T;
		constructor(initial: T) {
			this.value = initial;
		}
	}

	interface AccordionProps {
		/** Enables opening multiple items at once. */
		multiple?: boolean;
		/** The slide animation duration in milliseconds. */
		animDuration?: number;
		// Root ---
		/** Sets base styles. */
		base?: string;
		/** Set padding styles. */
		padding?: string;
		/** Set vertical spacing styles. */
		spaceY?: string;
		/** Set border radius styles. */
		rounded?: string;
		/** Set the width styles. */
		width?: string;
		/** Provide arbitrary CSS classes. */
		classes?: string;
		// Snippets ---
		/** The default child slot. */
		children: Snippet;
		/** Set the open state icon. */
		iconOpen?: Snippet;
		/** Set the closed state icon. */
		iconClosed?: Snippet;
	}

	let {
		multiple = false,
		animDuration = 200,
		// Root
		base = '',
		padding = '',
		spaceY = 'space-y-2',
		rounded = 'rounded',
		width = 'w-full',
		classes = '',
		// Snippets
		children,
		iconOpen,
		iconClosed
	} = $props<AccordionProps>();

	// Context
	setContext('selected', new State<string[]>([]));
	setContext('animDuration', animDuration);
	setContext('multiple', multiple);
	setContext('iconOpen', iconOpen);
	setContext('iconClosed', iconClosed);
</script>

<!-- @component An Accordion parent component. -->

<div class="{base} {padding} {spaceY} {rounded} {width} {classes}" data-testid="accordion">
	{@render children()}
</div>
