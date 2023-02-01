<script lang="ts">
	// Slots:
	// NOTE: we cannot describe the default slot.

	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

	// Props
	/** Set the auto-collapse mode. */
	export let autocollapse = false;
	/** Set the drawer animation duration in milliseconds. */
	export let duration = 200; // ms

	// Props (parent)
	/** Provide classes to set the vertical spacing between accordion items. */
	export let spacing = 'space-y-1';

	// Props (childen)
	/** Provide classes to set the accordion item padding styles. */
	export let padding = 'py-2 px-4';
	/** Provide classes to set the accordion item hover styles. */
	export let hover = 'hover:bg-primary-hover-token';
	/** Provide classes to set the accordion item rounded styles. */
	export let rounded = 'rounded-container-token';

	// Props (regions)
	/** Provide arbitrary classes to the trigger button region. */
	export let regionControl = '';
	/** Provide arbitrary classes to content panel region. */
	export let regionPanel = 'space-y-4';
	/** Provide arbitrary classes caret icon region. */
	export let regionCaret = '';

	// Local
	const active: Writable<string | null> = writable(null);

	// Context API
	setContext('active', active);
	setContext('autocollapse', autocollapse);
	setContext('duration', duration);
	setContext('padding', padding);
	setContext('hover', hover);
	setContext('rounded', rounded);
	setContext('regionControl', regionControl);
	setContext('regionPanel', regionPanel);
	setContext('regionCaret', regionCaret);

	// Reactive
	$: classesBase = `${spacing} ${$$props.class ?? ''}`;
</script>

<!-- @component The Accordion parent element. -->

<div class="accordion {classesBase}" data-testid="accordion">
	<slot />
</div>
