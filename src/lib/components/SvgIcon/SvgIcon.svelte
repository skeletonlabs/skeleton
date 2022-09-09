<script context="module">
	import { icons } from './icons';
</script>

<script lang="ts">
	// Props
	export let name: string = 'image';
	export let x: string = '0px';
	export let y: string = '0px';
	export let viewBox: string = icons[name].viewBox || '0 0 512 512';
	// Props (Styles)
	export let fill: string = 'fill-black dark:fill-white';
	export let width: string = 'w-5';
	export let height: string = 'w-5';
	// A11y
	export let title: string | undefined = undefined;
	export let tabindex: number = -1;

	// Base Classes
	const cBase: string = 'inline-block outline-none';

	// Reactive Classes
	$: classesBase = `${cBase} ${fill} ${width} ${height}`;
</script>

<!-- prettier-ignore -->
<svg
    xmlns="http://www.w3.org/2000/svg"
    {x} {y}
    {viewBox}
    class="svg-icon {classesBase} {$$props.class||''}"
    focusable="false"
    {tabindex}
	data-testid="svg-icon"
>
    {#if title}<title>{title}</title>{/if}
    {#if $$slots.default}
        <slot />
    {:else}
        <path d={icons[name].path} />
    {/if}
</svg>
