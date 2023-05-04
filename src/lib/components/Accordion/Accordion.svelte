<script lang="ts">
	// Slots:
	// NOTE: we cannot describe the default slot.

	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

	// Types
	import type { CssClasses } from '$lib';

	// Props
	/** Set the auto-collapse mode. */
	export let autocollapse = false;
	/** Set the drawer animation duration in milliseconds. */
	export let duration = 200; // ms

	// Props (parent)
	/** Provide classes to set the accordion width. */
	export let width: CssClasses = 'w-full';
	/** Provide classes to set the vertical spacing between items. */
	export let spacing: CssClasses = 'space-y-1';

	// Props (children)
	/** Set the accordion disabled state for all items. */
	export let disabled = false;
	/** Provide classes to set the accordion item padding styles. */
	export let padding: CssClasses = 'py-2 px-4';
	/** Provide classes to set the accordion item hover styles. */
	export let hover: CssClasses = 'hover:bg-primary-hover-token';
	/** Provide classes to set the accordion item rounded styles. */
	export let rounded: CssClasses = 'rounded-container-token';

	// Props (caret)
	/** Set the rotation of the item caret in the open state. */
	export let caretOpen: CssClasses = 'rotate-180';
	/** Set the rotation of the item caret in the closed state. */
	export let caretClosed: CssClasses = '';

	// Props (regions)
	/** Provide arbitrary classes to the trigger button region. */
	export let regionControl: CssClasses = '';
	/** Provide arbitrary classes to the content panel region. */
	export let regionPanel: CssClasses = 'space-y-4';
	/** Provide arbitrary classes to the caret icon region. */
	export let regionCaret: CssClasses = '';

	// Local
	const active: Writable<string | null> = writable(null);

	// Context API
	setContext('active', active);
	setContext('autocollapse', autocollapse);
	setContext('duration', duration);
	setContext('disabled', disabled);
	setContext('padding', padding);
	setContext('hover', hover);
	setContext('rounded', rounded);
	setContext('caretOpen', caretOpen);
	setContext('caretClosed', caretClosed);
	setContext('regionControl', regionControl);
	setContext('regionPanel', regionPanel);
	setContext('regionCaret', regionCaret);

	// Reactive
	$: classesBase = `${width} ${spacing} ${$$props.class ?? ''}`;
</script>

<!-- @component The Accordion parent element. -->

<div class="accordion {classesBase}" data-testid="accordion">
	<slot />
</div>
