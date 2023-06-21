<script lang="ts">
	import { setContext } from 'svelte';

	// Types
	import type { CssClasses } from '../../index.js';

	// Props
	/** Provide checkboxes on tree items */
	export let checkable = false;

	// Props (parent)
	/** Provide classes to set the tree width. */
	export let width: CssClasses = 'w-full';
	/** Provide classes to set the vertical spacing between items. */
	export let spacing: CssClasses = 'space-y-1';

	// Props (children)
	/** Provide classes to set the tree item padding styles. */
	export let padding: CssClasses = 'py-2 px-4';
	/** Provide classes to set the tree item hover styles. */
	export let hover: CssClasses = 'hover:bg-primary-hover-token';
	/** Provide classes to set the tree item rounded styles. */
	export let rounded: CssClasses = 'rounded-container-token';

	// Props (caret)
	/** Set the rotation of the item caret in the open state. */
	export let caretOpen: CssClasses = 'rotate-180';
	/** Set the rotation of the item caret in the closed state. */
	export let caretClosed: CssClasses = '';

	// Props (regions)
	/** Provide arbitrary classes to the tree item summary region. */
	export let regionSummary: CssClasses = '';
	/** Provide arbitrary classes to the caret icon region. */
	export let regionCaret: CssClasses = '';
	/** Provide arbitrary classes to the checkbox region. */
	export let regionCheckbox: CssClasses = '';
	/** Provide arbitrary classes to the children region. */
	export let regionChildren: CssClasses = '';

	// Props A11y
	/** Provide the ARIA labelledby value. */
	export let labelledby = '';

	// Context API
	setContext('checkable', checkable);
	setContext('padding', padding);
	setContext('hover', hover);
	setContext('rounded', rounded);
	setContext('caretOpen', caretOpen);
	setContext('caretClosed', caretClosed);
	setContext('regionSummary', regionSummary);
	setContext('regionCaret', regionCaret);
	setContext('regionCheckbox', regionCheckbox);
	setContext('regionChildren', regionChildren);

	// Reactive
	$: classesBase = `${width} ${spacing} ${$$props.class ?? ''}`;
</script>

<div class="tree {classesBase}" data-testid="tree" role="tree" aria-multiselectable="true" aria-label={labelledby}>
	<slot />
</div>
