<script lang="ts">
	import { setContext } from 'svelte';

	// Types
	import type { CssClasses } from '../../index.js';

	// Props (parent)
	/** Enable selection of multiple items. */
	export let multiple = false;
	/** Provide classes to set the tree width. */
	export let width: CssClasses = 'w-full';
	/** Provide classes to set the vertical spacing between items. */
	export let spacing: CssClasses = 'space-y-1';

	// Props (children)
	/** Provide classes to set the tree item padding styles. */
	export let padding: CssClasses = 'py-2 px-2';
	/** Provide classes to set the tree item padding styles, when no content are present. */
	export let noContentPadding: CssClasses = 'px-5';
	/** Provide classes to set the tree item hover styles. */
	export let hover: CssClasses = 'hover:variant-soft';
	/** Provide classes to set the tree item active background styles. */
	export let active: CssClasses = 'variant-filled';
	/** Provide classes to set the tree item rounded styles. */
	export let rounded: CssClasses = 'rounded-container-token';

	// Props (caret)
	/** Set the rotation of the item caret in the open state. */
	export let caretOpen: CssClasses = 'rotate-180';
	/** Set the rotation of the item caret in the closed state. */
	export let caretClosed: CssClasses = '';

	// Props (regions)
	/** Provide arbitrary classes to the caret icon region. */
	export let regionCaret: CssClasses = '';
	/** Provide arbitrary classes to the children region. */
	export let regionChildren: CssClasses = '';

	// Props A11y
	/** Provide the ARIA labelledby value. */
	export let labelledby = '';

	// Local
	// unique group id
	const group: string | string[] = multiple ? [] : Number(Math.random()).toString(32);

	// Context API
	setContext('multiple', multiple);
	setContext('group', group);
	setContext('padding', padding);
	setContext('noContentPadding', noContentPadding);
	setContext('hover', hover);
	setContext('active', active);
	setContext('rounded', rounded);
	setContext('caretOpen', caretOpen);
	setContext('caretClosed', caretClosed);
	setContext('regionCaret', regionCaret);
	setContext('regionChildren', regionChildren);

	// Reactive
	$: classesBase = `${width} ${spacing} ${$$props.class ?? ''}`;
</script>

<div class="tree {classesBase}" data-testid="tree" role="tree" aria-multiselectable="true" aria-label={labelledby}>
	<slot />
</div>
