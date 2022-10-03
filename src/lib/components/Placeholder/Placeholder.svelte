<script lang="ts">
	// Props
	export let circle: boolean = false;
	export let animate: boolean = true;
	export let background: string = 'bg-surface-400 dark:bg-surface-700';
	export let height: string = 'h-4';
	export let width: string = 'w-full';
	export let rounded: string = 'rounded-lg';

	// Reactive classes
	$: classesRadius = circle ? 'aspect-square rounded-full' : `${height} ${rounded}`;
	$: classesAnimate = animate ? 'animate-pulse' : '';
	$: classesSkeleton = `${background} ${width} ${classesRadius} ${classesAnimate} ${$$props.class ?? ''}`;
</script>

<div class="comp-placeholder {classesSkeleton}" data-testid="placeholder" />
