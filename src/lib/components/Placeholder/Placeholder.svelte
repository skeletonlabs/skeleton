<script lang="ts">
	/** Specify the skeleton height*/
	export let height: string = 'h-4';

	/** Specify the skeleton width*/
	export let width: string = 'w-full';

	/** Specify the radius */
	export let radius: string = '';

	/** If Skeleton is a circle, it's width and border-radius will equal to height */
	export let circle: boolean = false;

	/** Whether to show the animation effect */
	export let animate: boolean = true;

	// Reactive classes
	$: circleSkeleteon = circle ? 'rounded-full' : circle;
	$: animateSkeleton = animate ? 'animate-pulse' : animate;
	$: classesSkeleton = `${height} ${width} ${radius} ${circleSkeleteon} ${$$props.class}`;
</script>

<div data-testid="placeholder" class={`${animateSkeleton}`}>
	<div class="{classesSkeleton} bg-slate-700" />
</div>
