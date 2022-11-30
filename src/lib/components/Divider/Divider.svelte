<script lang="ts">
	// Props
	/** When enabled, sets the width to zero and height to full. */
	export let vertical = false;
	/** Provide classes to set the border width. */
	export let borderWidth = 'border-t';
	/** Provide classes to set the border style. */
	export let borderStyle = 'border-solid';
	/** Provide classes to set the border color. */
	export let borderColor = 'border-surface-300-600-token';
	/** Provide classes to set the margin. */
	export let margin = 'm-0';
	/** Provide classes to set opacity. */
	export let opacity = 'opacity-full';

	// Base Classes
	const cBaseDivider = `block`;

	// Reactive Classes
	$: classesOrientation = vertical === true ? 'w-0 h-full min-h-[24px]' : 'w-full h-0';
	$: classesDivider = `${cBaseDivider} ${classesOrientation} ${borderWidth} ${borderStyle} ${borderColor} ${margin} ${opacity} ${
		$$props.class ?? ''
	}`;
</script>

<hr class="divider {classesDivider}" data-testid="divider" />
