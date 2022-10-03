<script lang="ts">
	// Props
	export let vertical: boolean = false;
	export let borderWidth: string = 'border-t';
	export let borderStyle: string = 'border-solid';
	export let borderColor: string = 'border-surface-300 dark:border-surface-700';
	export let margin: string = 'm-0';
	export let opacity: string = 'opacity-full';

	// Base Classes
	const cBaseDivider = `block`;

	// Reactive Classes
	$: classesOrientation = vertical === true ? 'w-0 h-full min-h-[24px]' : 'w-full h-0';
	$: classesDivider = `${cBaseDivider} ${classesOrientation} ${borderWidth} ${borderStyle} ${borderColor} ${margin} ${opacity} ${$$props.class ?? ''}`;
</script>

<hr class="divider {classesDivider}" data-testid="divider" />
